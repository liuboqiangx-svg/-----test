import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "纸片人男友 - AI 情感陪伴",
  description: "用 AI 模拟真实恋爱体验，情感陪伴、角色扮演、练习反馈",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased h-dvh">
        {children}
      </body>
    </html>
  );
}
