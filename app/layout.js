import "./globals.css";

export const metadata = {
  title: "The Signal — What matters in AI",
  description: "A twice-weekly AI briefing. Real sources, verified links, hard recency limits. Every Monday and Friday.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="newsprint-texture">{children}</body>
    </html>
  );
}
