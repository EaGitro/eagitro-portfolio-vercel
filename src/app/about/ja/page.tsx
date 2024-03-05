import { shadcnThemeStyle, shadcnThemeUniqueStyle } from "~/common/utils/consts";
import { cn } from "~/lib/utils";
import TechStackImages from "~/components/my-components/TechStackImages";


export default function AboutJa() {

    return (
        <>
            <h1 className={cn(shadcnThemeStyle.h1)}>
                {`{ Ea Gitro }`}
            </h1>
            <h2 id="自己紹介" className={cn(shadcnThemeUniqueStyle.h2_my5)}>自己紹介</h2>
            <ul className={cn(shadcnThemeStyle.ul)}>
                <li>名前: EaGitro</li>
                <li>年齢: ??</li>
                <li>出身: 東京</li>
                <li>自然言語: 日本語(母国語), 英語(TOEIC 730点 レベル)</li>
            </ul>
            <h2 id="技術スタックと好きな方面" className={shadcnThemeUniqueStyle.h2_my5}>技術スタックと好きな方面</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 items-end">
                <TechStackImages />
            </div>
            <p>(The original <a href="https://go.dev/blog/gopher" className={cn(shadcnThemeStyle.a)}>Go gopher</a> was designed by <a href="https://www.instagram.com/reneefrench/" className={cn(shadcnThemeStyle.a)}>Renée French</a>.)</p>
            <p>({`"`}Arduino{`"`} is is a registered trademark of the <a href="https://www.arduino.cc/" className={cn(shadcnThemeStyle.a)}>Arduino</a>.)</p>


            <ul className={cn(shadcnThemeStyle.ul)}>
                <li>低レイヤだったりバックエンドだったりが興味あります
                    <ul className={cn(shadcnThemeStyle.ul)}>
                        <li>でもあんまりできてません</li>
                    </ul>
                </li>
                <li>フロントエンドもやります
                    <ul className={cn(shadcnThemeStyle.ul)}>
                        <li>なぜかそっちがメインになりつつあります</li>
                    </ul>
                </li>
                <li>実はインフラにも興味あります
                    <ul className={cn(shadcnThemeStyle.ul)}>
                        <li>少しだけ実機を触ったことがあり、その時に目覚めました</li>
                    </ul>
                </li>
            </ul>
            <h2 id="好きなこと" className={cn(shadcnThemeUniqueStyle.h2_my5)}>好きなこと</h2>
            <ul className={cn(shadcnThemeStyle.ul)}>
                <li>モノづくりが大好きです</li>
                <li>いろいろと考え事するのも好きです</li>
                <li>「なぜ」を突き詰めるのがすごい好きです</li>
            </ul>
            <p className={cn(shadcnThemeStyle.p)}>ちっちゃい頃からとにかく何か作るのが好きです。自分の作ったもので誰かが幸せになってくれるといいなと思いつつアプリを作ってます。</p>
            <p className={cn(shadcnThemeStyle.p)}>ぼけーっと考え事でもしながら本を読むのが好きなのですが、あんまり忙しくて出来てません。読みたい本だけがたまってます。</p>
            <p className={cn(shadcnThemeStyle.p)}>調べることが大好きなのですが、特に「なぜ」と思ったものをとことん突き詰めることがよくあります。そうやって調べたものは <a href="/articles" className={cn(shadcnThemeStyle.a)}><code>Articles</code></a> にあるので見ていただけると嬉しいです。</p>
        </>
    )
}