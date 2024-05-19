import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const LexendFont = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tunabozkir.com"),
  title: {
    default: "Tuna Bozkir",
    template: "%s | Tuna Bozkir",
  },
  description: "BI Developer, Data Analyst.",
  openGraph: {
    title: "Tuna Bozkir",
    description: "BI Developer, Data Analyst.",
    url: "https://tunabozkir.com",
    siteName: "Tuna Bozkir",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  //twitter: {
    //title: "Tuna Bozkır",
    //card: "summary_large_image",
  //},
  //verification: {
    // google: '',
    // yandex: '',
  //},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${LexendFont.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider
            delayDuration={10}
            skipDelayDuration={10}
            disableHoverableContent
          >
            <div className="flex w-full h-full min-h-full">
              <div className="relative flex w-full h-full flex-col">
                {children}
              </div>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
