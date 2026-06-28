// =============================================================
// data/projects.js
// ผลงาน/โครงการ อย่างน้อย 3 โครงการ ใช้แสดงในหน้า /me/projects
// แก้ไขข้อมูลแต่ละโครงการให้เป็นผลงานจริงของตัวเอง (หรือจะใช้ข้อมูลสมมติก็ได้ตามเงื่อนไข)
// =============================================================

const projects = [
  {
    id: "project-1",
    title: "rn-smart-auto-loan-app", // TODO
    description:
      "แอปพลิเคชันคำนวณสินเชื่อรถยนต์ พัฒนาด้วย React Native", // TODO
    tech: ["React Native", "React", "Tailwind CSS"], // TODO: technology ที่ใช้จริง
    role: "Front-end Developer", // TODO: บทบาทหน้าที่ของตัวเองในโครงการนี้
    year: "2026", // TODO: ปีที่พัฒนา
    image: "/images/project-1.png", // TODO: เปลี่ยนเป็นรูปจริง เช่น "/images/project-1.jpg"
  },
  {
    id: "project-2",
    title: "flutter_cake_shop_app", // TODO
    description:
      "แอปพลิเคชันร้านค้าเค้ก พัฒนาด้วย Flutter", // TODO
    tech: ["Flutter", "Dart", "Firebase"], // TODO
    role: "Mobile Developer", // TODO
    year: "2026s", // TODO
    image: "/images/project-2.png", // TODO
  },
  {
    id: "project-3",
    title: "rn-money-tracking-app", // TODO
    description:
      "แอปพลิเคชันติดตามรายได้และค่าใช้จ่าย พัฒนาด้วย React Native", // TODO
    tech: ["React Native", "React", "Tailwind CSS"], // TODO
    role: "Front-end Developer", // TODO
    year: "2026", // TODO
    image: "/images/project-3.png", // TODO
  },
  // TODO: เพิ่มโครงการอื่น ๆ ได้ตามต้องการ (ขั้นต่ำ 3 โครงการ)
];

export default projects;
