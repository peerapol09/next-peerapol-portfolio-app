/* =============================================================
   components/SkillCard.js
   ใช้แสดงความสามารถแยกตามหมวดหมู่ในหน้า /me/skills
   props: category (string), items (array of string)
   ============================================================= */

export default function SkillCard({ category, items }) {
  return (
    <div className="skill-card">
      <div className="skill-card-head">
        <span className="skill-card-bracket">{`{`}</span>
        <h3>{category}</h3>
      </div>
      <ul className="skill-card-list">
        {items.map((item) => (
          <li key={item} className="chip">
            {item}
          </li>
        ))}
      </ul>

      <style>{`
        .skill-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1.25rem 1.4rem;
          height: 100%;
        }
        .skill-card-head {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.9rem;
        }
        .skill-card-bracket {
          font-family: var(--font-mono);
          color: var(--color-amber);
          font-size: 1.1rem;
        }
        .skill-card-head h3 {
          font-size: 1.05rem;
        }
        .skill-card-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
      `}</style>
    </div>
  );
}
