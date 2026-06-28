/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // อนุญาตให้ next/image โหลดรูปจากโดเมนภายนอกเหล่านี้ (ใช้เป็นรูป placeholder)
    // ถ้าจะใช้รูปของตัวเอง แนะนำให้ใส่ไฟล์ไว้ใน /public/images แล้วเรียกใช้แบบ local path ได้เลย ไม่ต้องตั้งค่าเพิ่ม
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
};

export default nextConfig;
