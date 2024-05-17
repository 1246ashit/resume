import "./globals.css";

export const metadata = {
  title: "俊杰的履歷",
  description: "俊杰寫的",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}