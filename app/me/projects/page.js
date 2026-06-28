/* =============================================================
   app/me/projects/page.js  →  Route: /me/projects
   หน้า Projects: แสดงผลงานอย่างน้อย 3 โครงการ ใช้ Shared Component "ProjectCard"
   ข้อมูลดึงมาจาก data/projects.js — ไปแก้/เพิ่มโครงการที่ไฟล์นั้นได้เลย
   ============================================================= */

import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="page-container">
      <PageHeader
        filePath="me/projects.map()"
        title="Projects"
        description="ผลงานที่ผ่านมา พร้อมเทคโนโลยีที่ใช้และบทบาทของฉันในแต่ละโครงการ"
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 760px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
