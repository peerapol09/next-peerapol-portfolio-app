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
`projects.map()`) และทุกหน้าใช้ "แท็บไฟล์" (`PageHeader`) เป็นองค์ประกอบซิกเนเจอร์ที่ซ้ำกันทุกหน้า

## วิธีติดตั้งและรันโปรเจกต์

```bash
npm install
npm run dev
```

เปิดเบราว์เซอร์ที่ <http://localhost:3000>

## โครงสร้างโปรเจกต์

```
next-peerapol-portfolio-app/
├── app/
│   ├── layout.js          # Root layout + next/font
│   ├── globals.css
│   ├── page.js             # Home (/)
│   ├── about/page.js       # /about
│   ├── me/skills/page.js   # /me/skills
│   ├── me/projects/page.js # /me/projects
│   ├── me/gallery/page.js  # /me/gallery
│   └── contact/page.js     # /contact
├── components/
│   ├── NavBar.js           # Shared Component
│   ├── Footer.js           # Shared Component
│   ├── PageHeader.js       # Shared Component
│   ├── SkillCard.js
│   └── ProjectCard.js
├── data/
│   ├── profile.js          # ข้อมูลส่วนตัว (TODO: แก้เป็นข้อมูลจริง)
│   ├── skills.js
│   ├── projects.js
│   └── gallery.js
└── public/
    ├── images/
    └── resume-placeholder.txt
```

ทุกข้อมูล (ชื่อ, ประวัติ, ทักษะ, โครงการ, รูปภาพ, ข้อมูลติดต่อ) ถูกแยกไว้ในโฟลเดอร์ `data/`
และมีคอมเมนต์ `TODO` กำกับไว้ทุกจุดที่ต้องแก้เป็นข้อมูลจริงก่อนส่งงาน

## Checklist ก่อนส่งงาน

- [ ] แก้ข้อมูลจริงทั้งหมดใน `data/profile.js`, `data/skills.js`, `data/projects.js`, `data/gallery.js`
- [ ] เปลี่ยนรูปภาพ placeholder (picsum.photos) เป็นรูปจริงใน `public/images/`
- [ ] นำไฟล์ Resume จริงไปวางที่ `public/resume.pdf`
- [ ] ใส่ภาพหน้าจอของแต่ละหน้าไว้ด้านล่างนี้
- [ ] Push ขึ้น GitHub และ Deploy ขึ้น Vercel แล้วใส่ลิงก์ด้านล่าง

## ภาพหน้าจอ (Screenshots)

<!-- TODO: แทรกภาพหน้าจอของแต่ละหน้า เช่น
![Home](./screenshots/home.png)
![About](./screenshots/about.png)
![Skills](./screenshots/skills.png)
![Projects](./screenshots/projects.png)
![Gallery](./screenshots/gallery.png)
![Contact](./screenshots/contact.png)
-->

### Home (`/`)

### About Me (`/about`)

### Skills (`/me/skills`)

### Projects (`/me/projects`)

### Gallery (`/me/gallery`)

### Contact (`/contact`)

## ลิงก์

- GitHub Repository: <!-- TODO: ใส่ลิงก์ GitHub repo -->
- Live Demo (Vercel): <!-- TODO: ใส่ลิงก์ domain ที่ deploy บน Vercel -->
