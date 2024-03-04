import { Noto_Sans_JP, IBM_Plex_Mono, Courier_Prime } from "next/font/google";
import "./globals.css";
import { cn } from "~/lib/utils"

/**
 * start [FONT SETTING] ---------
 */
const notojp = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-notojp",
  display: "swap"
});

const ibmpm = IBM_Plex_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-ibmpm",
  display: "swap"
})

const courierpr = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courierpr",
  display: "swap"
})

/**
 * end  [FONT SETTING] ---------
 */

const metadata = {
  title: "EaGitro",
  description: "EaGitro's Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-contents ", courierpr.variable, notojp.variable, ibmpm.variable, "full-screen")}>{children}
      </body>
    </html>
  );
}
