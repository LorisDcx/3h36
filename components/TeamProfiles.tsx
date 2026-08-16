import { collectiveRoles } from "@/lib/site-data";

export function TeamProfiles() {
  return (
    <div className="team-profiles" aria-label="Les profils du collectif 3h36">
      {collectiveRoles.map((profile) => (
        <article className="team-profile" key={profile.number}>
          <div
            className={`team-profile-placeholder team-profile-placeholder-${profile.number}`}
            aria-label={`Emplacement photo de ${profile.name} à remplacer`}
          >
            <span aria-hidden="true">{profile.name.slice(0, 1)}</span>
            <small>Photo à remplacer</small>
          </div>
          <div className="team-profile-copy">
            <p>{profile.number} · {profile.name}</p>
            <h3>{profile.role}</h3>
            <p>{profile.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
