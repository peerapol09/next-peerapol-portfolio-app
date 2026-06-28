/* =============================================================
   components/PageHeader.js
   Shared Component #3 (เผื่อใช้เพิ่มเติมนอกจาก NavBar/Footer)
   หัวข้อของแต่ละหน้า แสดงในสไตล์ "แท็บไฟล์" ของ Code Editor
   เพื่อให้ทุกหน้ามี element ที่เป็นซิกเนเจอร์เดียวกัน
   ใช้งานโดยส่ง props: filePath (เช่น "about.tsx"), title, description
   ============================================================= */

export default function PageHeader({ filePath, title, description }) {
  return (
    <div className="page-header">
      <div className="editor-tab">
        <span className="dots" aria-hidden="true">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </span>
        <span>~/portfolio/{filePath}</span>
      </div>
      <div className="page-header-body">
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>

      <style>{`
        .page-header {
          margin-bottom: 2rem;
        }
        .page-header-body {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 0 var(--radius-md) var(--radius-md) var(--radius-md);
          padding: 1.5rem 1.75rem;
        }
        .page-header-body h1 {
          font-size: clamp(1.6rem, 3vw, 2.1rem);
          margin-bottom: 0.5rem;
        }
        .page-header-body p {
          color: var(--color-muted);
          max-width: 60ch;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
