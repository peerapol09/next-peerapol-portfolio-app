/* =============================================================
   app/about/page.js  →  Route: /about
   หน้า About Me: ประวัติส่วนตัว, ประวัติการศึกษา, Career Objective,
   จุดแข็ง, ความสนใจ, งานอดิเรก
   ข้อมูลทั้งหมดดึงมาจาก data/profile.js — ไปแก้ที่ไฟล์นั้นได้เลย
   ============================================================= */

import PageHeader from "@/components/PageHeader";
import profile from "@/data/profile";

export default function AboutPage() {
  return (
    <div className="page-container">
      <PageHeader
        filePath="about.tsx"
        title="About Me"
        description="ประวัติส่วนตัว การศึกษา เป้าหมาย และตัวตนของฉัน"
      />

      {/* ----- ประวัติส่วนตัว ----- */}
      <section className="section">
        <span className="section-eyebrow"></span>
        <div className="editor-panel">
          <h2>ประวัติส่วนตัว</h2>
          <p>{profile.bio}</p>
        </div>
      </section>

      {/* ----- ประวัติการศึกษา ----- */}
      <section className="section">
        <span className="section-eyebrow"></span>
        <div className="editor-panel">
          <h2>ประวัติการศึกษา</h2>
          <ul className="timeline">
            {profile.education.map((edu, i) => (
              <li key={i} className="timeline-item">
                <p className="timeline-level">{edu.level}</p>
                <p className="timeline-school">{edu.school}</p>
                <p className="timeline-detail">
                  {edu.major} · {edu.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ----- Career Objective ----- */}
      <section className="section">
        <span className="section-eyebrow"></span>
        <div className="editor-panel">
          <h2>เป้าหมายในการทำงาน</h2>
          <p>{profile.careerObjective}</p>
        </div>
      </section>

      {/* ----- จุดแข็ง / ความสนใจ / งานอดิเรก ----- */}
      <section className="section about-grid">
        <div className="editor-panel">
          <span className="section-eyebrow"></span>
          <h2>จุดแข็ง</h2>
          <ul className="plain-list">
            {profile.strengths.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div className="editor-panel">
          <span className="section-eyebrow"></span>
          <h2>ความสนใจ</h2>
          <div className="chip-row">
            {profile.interests.map((i) => (
              <span key={i} className="chip">
                {i}
              </span>
            ))}
          </div>
        </div>

        <div className="editor-panel">
          <span className="section-eyebrow"></span>
          <h2>งานอดิเรก</h2>
          <div className="chip-row">
            {profile.hobbies.map((h) => (
              <span key={h} className="chip">
                {h}
              </span>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .section h2 {
          font-size: 1.3rem;
          margin-bottom: 0.85rem;
        }
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .timeline-item {
          padding-left: 1rem;
          border-left: 2px solid var(--color-mint);
        }
        .timeline-level {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--color-mint);
          margin: 0 0 0.15rem;
        }
        .timeline-school {
          font-weight: 600;
          margin: 0 0 0.1rem;
        }
        .timeline-detail {
          color: var(--color-muted);
          margin: 0;
          font-size: 0.9rem;
        }
        .plain-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .plain-list li {
          position: relative;
          padding-left: 1.1rem;
        }
        .plain-list li::before {
          content: "›";
          position: absolute;
          left: 0;
          color: var(--color-coral);
          font-family: var(--font-mono);
        }
        .chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .about-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 760px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
