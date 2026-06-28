/* =============================================================
   app/page.js  →  Route: /
   หน้า Home: รูปโปรไฟล์, ชื่อ-นามสกุล, ตำแหน่งที่ต้องการสมัคร,
   คำแนะนำตัว, ปุ่มเข้าสู่หน้าต่าง ๆ
   ข้อมูลทั้งหมดดึงมาจาก data/profile.js — ไปแก้ที่ไฟล์นั้นได้เลย
   ============================================================= */

import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import profile from "@/data/profile";

export default function HomePage() {
  return (
    <div className="page-container">
      <PageHeader
        filePath="index.tsx"
        title="Home"
        description="ยินดีต้อนรับสู่เว็บไซต์ Portfolio ของ peerapol! "
      />

      <section className="hero">
        <div className="hero-image">
          {/* TODO: เปลี่ยนรูปโปรไฟล์จริงที่ data/profile.js (profileImage) */}
          <Image
            src={profile.profileImage}
            alt={`รูปโปรไฟล์ของ ${profile.firstName} ${profile.lastName}`}
            fill
            sizes="(max-width: 700px) 80vw, 320px"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div className="hero-content">
          <span className="section-eyebrow"></span>
          <h1>
            {profile.firstName} {profile.lastName}
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-intro">{profile.shortIntro}</p>

          <div className="hero-actions">
            <Link href="/about" className="btn">
              About Me →
            </Link>
            <Link href="/me/projects" className="btn btn-outline">
              View Projects
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .hero {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        .hero-image {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--color-border);
          background: var(--color-surface-alt);
        }
        .hero-content h1 {
          font-size: clamp(2rem, 4vw, 2.8rem);
          margin-bottom: 0.25rem;
        }
        .hero-role {
          font-family: var(--font-mono);
          color: var(--color-mint);
          font-size: 1rem;
          margin: 0 0 1rem;
        }
        .hero-tagline {
          font-size: 1.05rem;
          margin: 0 0 0.75rem;
        }
        .hero-intro {
          color: var(--color-muted);
          max-width: 60ch;
          margin: 0 0 1.5rem;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        @media (max-width: 700px) {
          .hero {
            grid-template-columns: 1fr;
          }
          .hero-image {
            max-width: 220px;
          }
        }
      `}</style>
    </div>
  );
}
