import { Noto_Sans_JP, IBM_Plex_Mono, Courier_Prime, Kiwi_Maru, Satisfy, Dancing_Script } from "next/font/google";
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

const kiwiMaru = Kiwi_Maru({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-kiwi-maru",
  display: "swap"
})

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

const satisfy = Satisfy({
  weight: ["400", "400"],
  subsets: ["latin"],
  variable: "--font-satisfy",
  display: "swap"
})

const dancingScript = Dancing_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-dancing",
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
    <html lang="en" className="h-full">
      <body className={cn("font-contents ", courierpr.variable, kiwiMaru.variable, notojp.variable, ibmpm.variable, /*satisfy.variable,*/ dancingScript.variable, "h-full")}>{children}
      </body>
    </html>
  );
}
