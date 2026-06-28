/* =============================================================
   components/Footer.js
   Shared Component #2
   Footer ใช้ในทุกหน้า ผ่าน app/layout.js
   ============================================================= */

import profile from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-line">
        <span className="footer-prompt"></span> built with
        Next.js · © {year} {profile.firstName} {profile.lastName}
      </p>
      
      <style>{`
        .footer {
          border-top: 1px solid var(--color-border);
          padding: 1.25rem 1.5rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem 1.5rem;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--color-muted);
        }
        .footer-prompt {
          font-family: var(--font-mono);
          color: var(--color-mint);
          margin-right: 0.4rem;
        }
        .footer-links {
          display: flex;
          gap: 1.25rem;
          font-family: var(--font-mono);
        }
        .footer-links a:hover {
          color: var(--color-ink);
        }
      `}</style>
    </footer>
  );
}
