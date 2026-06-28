import PageHeader from "@/components/PageHeader";
import profile from "@/data/profile";

export default function ContactPage() {
  const { email, phone, github, resumeFile } = profile.contact;

  return (
    <div className="page-container">
      <PageHeader
        filePath="contact.sh"
        title="Contact"
        description="ช่องทางการติดต่อ และไฟล์ Resume สำหรับประกอบการพิจารณา"
      />

      <div className="editor-panel contact-panel">
        <ul className="contact-list">
          <li>
            <span className="contact-label">$ email</span>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            <span className="contact-label">$ phone</span>
            <a href={`tel:${phone.replace(/-/g, "")}`}>{phone}</a>
          </li>
          <li>
            <span className="contact-label">$ github</span>
            <a href={github} target="_blank" rel="noreferrer">
              {github}
            </a>
          </li>
        </ul>

        {/* TODO: นำไฟล์ resume จริงไปวางไว้ที่ public/resume.pdf
            (path ปัจจุบันอ้างอิงจาก data/profile.js → contact.resumeFile) */}
        <a href={resumeFile} download className="btn btn-accent">
          Download Resume
        </a>
      </div>

      <style>{`
        .contact-panel {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          max-width: 560px;
        }
        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-list li {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .contact-label {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--color-mint);
        }
        .contact-list a {
          font-size: 1rem;
        }
        .contact-list a:hover {
          color: var(--color-coral);
        }
        .btn-accent {
          align-self: flex-start;
        }
      `}</style>
    </div>
  );
}
