/* =============================================================
   app/me/skills/page.js  →  Route: /me/skills
   หน้า Skills: แบ่งหมวดหมู่ความสามารถ ใช้ Shared Component "SkillCard"
   ข้อมูลดึงมาจาก data/skills.js — ไปแก้/เพิ่มหมวดหมู่ที่ไฟล์นั้นได้เลย
   ============================================================= */

import PageHeader from "@/components/PageHeader";
import SkillCard from "@/components/SkillCard";
import skills from "@/data/skills";

export default function SkillsPage() {
  return (
    <div className="page-container">
      <PageHeader
        filePath="me/skills.json"
        title="Skills"
        description="ความสามารถทางเทคนิคที่ใช้ในการพัฒนาเว็บแอปพลิเคชัน แบ่งตามหมวดหมู่"
      />

      <div className="skills-grid">
        {skills.map((group) => (
          <SkillCard
            key={group.category}
            category={group.category}
            items={group.items}
          />
        ))}
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 700px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
