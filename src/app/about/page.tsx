import { shadcnThemeStyle, shadcnThemeUniqueStyle, fontSettings } from "~/common/utils/consts";
import { cn } from "~/lib/utils";
import { mathematicalBoldStr, mathematicalStr } from "~/common/utils/changeStr";
import Image from "next/image";
import TechStackImages from "~/components/my-components/TechStackImages";


export default function AboutPage() {
  return (
    <>
      <h1 className={cn(shadcnThemeStyle.h1)}>
        {`{ About Me }`}
      </h1>
      <p className={shadcnThemeStyle.p}>
        If you read Japanese, Please see <a href="/about/ja" className={shadcnThemeStyle.a}>日本語はこちら</a>.
      </p>
      <h2 className={cn(shadcnThemeUniqueStyle.h2_my5, fontSettings.cursive)}>
        {/* {mathematicalStr(`Lemme introduce myself ✨`)} */}
        Lemme introduce myself ✨
      </h2>
      <ul className={cn(shadcnThemeStyle.ul)}>
        <li>Name: Ea Gitro</li>
        <li>Age: ??</li>
        <li>Gender: he/him</li>
        <li>Live in: Tokyo, Japan</li>
        <li>Languages: Japanese(native), English(non-native)</li>
      </ul>

      <h2 className={cn(shadcnThemeUniqueStyle.h2_my5, fontSettings.cursive)}>
        My Tech Stacks ... ⚡
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 items-end">
        <TechStackImages />
      </div>
      <p>(The original <a href="https://go.dev/blog/gopher" className={cn(shadcnThemeStyle.a)}>Go gopher</a> was designed by <a href="https://www.instagram.com/reneefrench/" className={cn(shadcnThemeStyle.a)}>Renée French</a>.)</p>
      <p>({`"`}Arduino{`"`} is is a registered trademark of the <a href="https://www.arduino.cc/" className={cn(shadcnThemeStyle.a)}>Arduino</a>.)</p>

      <h2 className={cn(shadcnThemeUniqueStyle.h2_my5, fontSettings.cursive)}>
        {/* {mathematicalStr(`My favorite things ... 💖`)} */}
        My favorite things ... 💖
      </h2>
      <ul className={cn(shadcnThemeStyle.ul)}>
        <li>To Create something.</li>
        <li>To Imagine my ideas, and to Realize the ideas.</li>
        <li>To Deep-Driving something</li>

      </ul>
      <p className={cn(shadcnThemeStyle.p)}>
        I love to create something. I used to enjoy handcrafts in my childhood, and now I{`'`}m keen on engineering. I{`'`}m glad if I make someone happy with my applications.
      </p>
      <p className={cn(shadcnThemeStyle.p)}>
        Sometimes, I get absorbed in my thoughts. I love imagining my ideas, for example, {`"`}What if combining A and B..?{`"`}, {`"`}Perhaps, X is usable for accomplishing Y..?{`"`}, and so on.
        There are countless possibilities, and I{`'`}ll see the seeds of favorable outcomes.
      </p>

      <p className={cn(shadcnThemeStyle.p)}>
        I love deep-driving anything. I{`'`}m inclined to search anything I{`'`}m curious about. Sometimes I find what I don{`'`}t know, or I{`'`}m craving for how it works, and then I go on an odyssey to discover {`"`}What is it?{`"`} and {`"`}Why it works?{`"`}.
      </p>

    </>
  );
}