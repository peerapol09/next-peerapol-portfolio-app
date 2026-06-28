วางไฟล์รูปภาพจริงไว้ในโฟลเดอร์นี้ เช่น
- profile.jpg            (ใช้กับ data/profile.js → profileImage)
- project-1.jpg, project-2.jpg, project-3.jpg  (ใช้กับ data/projects.js)
- gallery-1.jpg ... gallery-6.jpg              (ใช้กับ data/gallery.js)

จากนั้นแก้ path ในไฟล์ data/*.js ให้เป็น "/images/ชื่อไฟล์.jpg" แทนลิงก์ picsum.photos ที่เป็น placeholder อยู่ตอนนี้
ไม่ต้องตั้งค่า next.config.mjs เพิ่ม เพราะรูป local ใช้ next/image ได้ทันที
