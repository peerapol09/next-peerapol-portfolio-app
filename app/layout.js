/* =============================================================
   app/layout.js
   Root Layout: ครอบทุกหน้าด้วย NavBar + Footer (Shared Components)
   และโหลดฟอนต์จาก Google Fonts ผ่าน next/font (Font Optimization)
   ใช้ฟอนต์ 3 ตัว: Space Grotesk (หัวข้อ), Inter (เนื้อหา), JetBrains Mono (โค้ด/แท็ก)
   ============================================================= */

import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// ฟอนต์ที่ 1: ใช้กับหัวข้อ (Display)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

// ฟอนต์ที่ 2: ใช้กับเนื้อหาทั่วไป (Body)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// ฟอนต์ที่ 3: ใช้กับป้าย/แท็ก/โค้ด เพื่อให้ได้ฟีล code editor (Mono)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// TODO: แก้ title/description ให้เป็นชื่อ-นามสกุลและตำแหน่งจริงของตัวเอง
export const metadata = {
  title: "Peerapol — Portfolio",
  description:
    "Portfolio website ของ Peerapol สำหรับสมัครงานสาย Web / Front-end / Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      >
        <div className="app-shell">
          <NavBar />
          <main className="app-main">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
