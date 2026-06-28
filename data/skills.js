// =============================================================
// data/skills.js
// ข้อมูลความสามารถ แบ่งเป็นหมวดหมู่ ใช้แสดงในหน้า /me/skills
// ข้อมูลด้านล่างเป็นตัวอย่าง สามารถแก้ไข เพิ่ม หรือลบหมวดหมู่/รายการได้ตามจริง
// =============================================================

const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    category: "Backend",
    items: ["Node.js",  "PHP"],
  },
  {
    category: "Database",
    items: ["MySQL", "Supabase"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Docker"],
  },
  // TODO: เพิ่มหมวดหมู่อื่น ๆ ของตัวเองได้ เช่น Design, Soft Skills ฯลฯ
];

export default skills;
