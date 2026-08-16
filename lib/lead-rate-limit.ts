const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 6;
const MAX_TRACKED_CLIENTS = 2_000;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const attempts = new Map<string, RateLimitEntry>();

function getClientKey(request: Request) {
  const cloudflareIp = request.headers.get("cf-connecting-ip");
  const forwardedIp = request.headers.get("x-forwarded-for")?.split(",", 1)[0]?.trim();
  const ip = cloudflareIp || forwardedIp;
  return ip ? ip.slice(0, 128) : "";
}

function pruneExpired(now: number) {
  if (attempts.size < MAX_TRACKED_CLIENTS) return;

  for (const [key, entry] of attempts) {
    if (entry.resetAt <= now) attempts.delete(key);
  }

  if (attempts.size < MAX_TRACKED_CLIENTS) return;

  const oldestKey = attempts.keys().next().value;
  if (oldestKey) attempts.delete(oldestKey);
}

/**
 * Lightweight abuse protection for lead forms. It is intentionally only a
 * first line of defence: production protection should also be enforced at the
 * edge (for example with Cloudflare Turnstile/WAF) because Worker instances do
 * not share memory.
 */
export function checkLeadRateLimit(request: Request) {
  const now = Date.now();
  pruneExpired(now);

  const key = getClientKey(request);
  if (!key) return { allowed: true, retryAfterSeconds: 0 };
  const entry = attempts.get(key);

  if (!entry || entry.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}
