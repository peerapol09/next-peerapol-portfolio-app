/* =============================================================
   app/me/gallery/page.js  →  Route: /me/gallery
   หน้า Gallery: แสดงภาพกำลังเขียนโปรแกรม อย่างน้อย 6 ภาพ
   ข้อมูลดึงมาจาก data/gallery.js — ไปแก้/เพิ่มรูปที่ไฟล์นั้นได้เลย
   ============================================================= */

import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import gallery from "@/data/gallery";

export default function GalleryPage() {
  return (
    <div className="page-container">
      <PageHeader
        filePath="me/gallery.png"
        title="Gallery"
        description="ภาพบรรยากาศระหว่างเขียนโปรแกรม ทำโปรเจกต์ และกิจกรรมที่เกี่ยวข้อง"
      />

      <div className="gallery-grid">
        {gallery.map((photo, i) => (
          <figure key={photo.id} className="gallery-item">
            <div className="gallery-item-frame">
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(max-width: 700px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                priority={i < 3}
              />
            </div>
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .gallery-item-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--color-border);
        }
        .gallery-item figcaption {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--color-muted);
          margin-top: 0.5rem;
        }
        @media (max-width: 760px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
