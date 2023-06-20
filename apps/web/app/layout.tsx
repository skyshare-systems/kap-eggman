import "./globals.css";

export const metadata = {
  title: "$Egg Man",
  description: "$Egg Man to $EGG MAN",
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
