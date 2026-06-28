"use client";

/* =============================================================
   components/NavBar.js
   Shared Component #1
   Navigation หลักของทั้งเว็บ ออกแบบให้เหมือน "File Explorer" ของ Code Editor
   โดยตั้งชื่อแต่ละลิงก์เป็นชื่อไฟล์ที่สื่อถึงเนื้อหาของหน้านั้น ๆ
   เช่น about.tsx, skills.json เพื่อให้ navigation เองก็เป็นส่วนหนึ่งของธีม
   ============================================================= */

import Link from "next/link";
import { usePathname } from "next/navigation";
import profile from "@/data/profile";

const NAV_ITEMS = [
  { href: "/", label: "Home", file: "index.tsx" },
  { href: "/about", label: "About Me", file: "about.tsx" },
  { href: "/me/skills", label: "Skills", file: "skills.json" },
  { href: "/me/projects", label: "Projects", file: "projects.map()" },
  { href: "/me/gallery", label: "Gallery", file: "gallery.png" },
  { href: "/contact", label: "Contact", file: "contact.sh" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">{`</>`}</span>
        <div className="navbar-brand-text">
          {/* TODO: ชื่อนี้ผูกกับ data/profile.js แก้ชื่อ-นามสกุลที่ไฟล์นั้นได้เลย */}
          <strong>
            {profile.firstName} {profile.lastName}
          </strong>
          <span>{profile.role}</span>
        </div>
      </div>

      <p className="navbar-section-label">explorer</p>
      <nav>
        <ul className="navbar-list">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`navbar-link ${isActive ? "is-active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="navbar-link-bullet" aria-hidden="true" />
                  <span className="navbar-link-label">{item.label}</span>
                  <span className="navbar-link-file">{item.file}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <style>{`
        .navbar {
          width: var(--sidebar-width);
          flex-shrink: 0;
          background: var(--color-surface-alt);
          border-right: 1px solid var(--color-border);
          padding: 1.5rem 1rem;
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
        }
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.75rem;
        }
        .navbar-logo {
          font-family: var(--font-mono);
          font-weight: 600;
          color: var(--color-mint);
          background: var(--color-mint-soft);
          border-radius: var(--radius-sm);
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .navbar-brand-text {
          display: flex;
          flex-direction: column;
          font-size: 0.85rem;
          line-height: 1.3;
        }
        .navbar-brand-text strong {
          font-family: var(--font-display);
          font-size: 0.95rem;
        }
        .navbar-brand-text span {
          color: var(--color-muted);
          font-size: 0.75rem;
        }
        .navbar-section-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-muted);
          margin: 0 0 0.5rem 0.25rem;
        }
        .navbar-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .navbar-link {
          display: flex;
          align-items: baseline;
          gap: 0.55rem;
          padding: 0.5rem 0.6rem;
          border-radius: var(--radius-sm);
          color: var(--color-ink);
        }
        .navbar-link:hover {
          background: rgba(27, 29, 35, 0.05);
        }
        .navbar-link.is-active {
          background: var(--color-surface);
          box-shadow: inset 2px 0 0 var(--color-mint);
        }
        .navbar-link-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-border);
          flex-shrink: 0;
        }
        .navbar-link.is-active .navbar-link-bullet {
          background: var(--color-mint);
        }
        .navbar-link-label {
          font-size: 0.88rem;
          flex-shrink: 0;
        }
        .navbar-link-file {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--color-muted);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        @media (max-width: 860px) {
          .navbar {
            position: relative;
            width: 100%;
            height: auto;
            border-right: none;
            border-bottom: 1px solid var(--color-border);
          }
          .navbar-list {
            flex-direction: row;
            flex-wrap: wrap;
          }
          .navbar-link-file {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
