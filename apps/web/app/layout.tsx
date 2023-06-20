import "./globals.css";

export const metadata = {
  title: "$EGG MAN",
  description: "$EGG MAN",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
