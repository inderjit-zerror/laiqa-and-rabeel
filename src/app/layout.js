import SiteShell from "@/components/common/SiteShell";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
   <html lang="en">
      <body suppressHydrationWarning>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
