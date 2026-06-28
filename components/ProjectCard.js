/* =============================================================
   components/ProjectCard.js
   ใช้แสดงผลงานแต่ละโครงการในหน้า /me/projects
   ใช้ next/image เพื่อ optimize รูปภาพ
   props: project object จาก data/projects.js
   ============================================================= */

import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-image">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 700px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
        <span className="project-card-year">{project.year}</span>
      </div>

      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-card-tech">
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <p className="project-card-role">
          <span className="project-card-role-label">role:</span> {project.role}
        </p>
      </div>

      <style>{`
        .project-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .project-card-image {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          background: var(--color-surface-alt);
        }
        .project-card-year {
          position: absolute;
          top: 0.6rem;
          right: 0.6rem;
          background: rgba(27, 29, 35, 0.75);
          color: #fff;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 0.2rem 0.55rem;
          border-radius: 999px;
        }
        .project-card-body {
          padding: 1.25rem 1.4rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          flex: 1;
        }
        .project-card-body h3 {
          font-size: 1.1rem;
        }
        .project-card-body p {
          color: var(--color-muted);
          margin: 0;
          font-size: 0.92rem;
        }
        .project-card-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.2rem;
        }
        .project-card-role {
          margin-top: auto;
          font-size: 0.85rem;
          color: var(--color-ink);
        }
        .project-card-role-label {
          font-family: var(--font-mono);
          color: var(--color-coral);
        }
      `}</style>
    </article>
  );
}
