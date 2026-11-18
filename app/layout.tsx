import type { Metadata, Viewport } from "next";
import "./globals.css";
import { StoreProvider } from "@/lib/store";
import { AppGate } from "@/components/AppGate";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  title: { default: "Year 11 IGCSE Business (4BS1)", template: "%s · Year 11 IGCSE Business (4BS1)" },
  description:
    "Master Pearson Edexcel IGCSE Business (4BS1 9–1) — AoPS discovery lessons, Grade 9 exam marks-savers, interactive finance explorables, auto-marked papers, procedural drills and Boardroom Bananas sitcom episodes.",
  applicationName: "IGCSE Business 4BS1",
  appleWebApp: { capable: true, statusBarStyle: "default", title: "4BS1 Business" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f766e" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1020" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Apply a saved theme before paint (no flash).
const themeScript = `try{var t=localStorage.getItem("y11bus.theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased">
        <ErrorBoundary>
          <StoreProvider>
            <AppGate>{children}</AppGate>
          </StoreProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
