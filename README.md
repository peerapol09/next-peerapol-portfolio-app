# next-peerapol-portfolio-app

Portfolio Website ส่วนตัว พัฒนาด้วย **Next.js (App Router)** สำหรับใช้ประกอบการสมัครงานตำแหน่ง
Front-end Developer / Full Stack Developer / Software Developer / Web Developer / UX-UI Developer

> งานวิชา Web Application Development — Midterm S-69

## พัฒนาด้วยเครื่องมือ

- [Next.js](https://nextjs.org/) (App Router, JavaScript)
- React
- `next/image` สำหรับ Image Optimization
- `next/font/google` สำหรับ Font Optimization — ใช้ฟอนต์ 3 ตัว: **Space Grotesk**, **Inter**, **JetBrains Mono**
- Deploy บน [Vercel](https://vercel.com/)

## โครงสร้างหน้า (Routes)

| หน้า      | Route          |
| --------- | -------------- |
| Home      | `/`            |
| About Me  | `/about`       |
| Skills    | `/me/skills`   |
| Projects  | `/me/projects` |
| Gallery   | `/me/gallery`  |
| Contact   | `/contact`     |

## แนวคิดการออกแบบ

ธีมของเว็บนี้ได้แรงบันดาลใจจาก **Code Editor**: แถบ Sidebar ทางซ้ายทำหน้าที่เป็น Navigation
โดยตั้งชื่อแต่ละลิงก์เป็นชื่อไฟล์ที่สื่อถึงเนื้อหาของหน้านั้น ๆ (เช่น `about.tsx`, `skills.json`,
`projects.map()`) และทุกหน้าใช้ "แท็บไฟล์" (`PageHeader`) เป็นองค์ประกอบซิกเนเจอร์ที่ซ้ำกันทุกหน


| | | |
| :---: | :---: | :---: |
| <img src="https://github.com/user-attachments/assets/2e2ed104-84e1-46ff-a912-9354bb6dd13b" width="300"> | <img src="https://github.com/user-attachments/assets/3c889ea5-b8d3-433e-b646-04a3a63b4bf7" width="300"> | <img src="https://github.com/user-attachments/assets/2fa2ddbe-a045-413f-8a65-61425ca89a19" width="300"> |
| <img src="https://github.com/user-attachments/assets/0cc864ef-bbf7-4833-9b86-99417174228e" width="300"> | <img src="https://github.com/user-attachments/assets/80d5e03d-87f1-445c-9228-f8dafd2dcb3d" width="300"> | <img src="https://github.com/user-attachments/assets/664a466a-dbc2-4cd8-8a80-e094d125f696" width="300"> |
| [ภาพที่ 7] | [ภาพที่ 8] | [ภาพที่ 9] |

