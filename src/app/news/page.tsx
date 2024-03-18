import { shadcnThemeStyle, shadcnThemeStyleArticle, shadcnThemeUniqueStyle } from "~/common/utils/consts";
import { cn } from "~/lib/utils";
import { WorkCardsComponent } from "~/components/my-components/topical/workCardImgs";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"

import { newsMetaObjLinkIndex } from "./_contents/newsMetaObj";

import Link from "next/link";

export default function NewsPage() {



    const newsCard = Object.keys(newsMetaObjLinkIndex).map((i) => {
        let c = newsMetaObjLinkIndex[i]

        /**
         * markdown の中の `#`, リンクのURL, 画像リンク, 取り消し線の中, を消し、改行や複数空白を空白1つへ
         */
        let cardContentStr = c.content != undefined ? c.content
            .replace(/]\(.*\)/g, "]")   // リンク URL
            .replace(/!\[.*\]/g, "")    // 画像リンクtitle

            .replace(/~~.*~~/g, "")      // 取り消し線
            // .replace(/[^\w\s\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}ーa-zA-Z0-9]|_/gu, '')
            .replace(/[(\-)\*#\[\]\$]/g, "")    // 記号類
            .replace(/```.*$/g, "")             // ブロックコード TODO:FIXF
            .replace(/\n+|\s{2,}/g, " ")                // 改行, 複数の空白 => 空白1つ
            .slice(0, 80)               // ここより上で slice すると 途中で切れて思い通りにならない(リンクが閉じられない、長さが同じにならない)
            + "..." : "";

        return (
            <Link href={`news/${i}`} key={i}>
                <Card className={"w-100 my-5"}>
                    <CardHeader className={shadcnThemeStyleArticle.h3}>
                        {(() => {
                            let titleAndSubTitle: Array<JSX.Element> = [];
                            if (c.title.en != undefined) {
                                titleAndSubTitle.push(<CardTitle key={"t"}>{c.title.en}</CardTitle>)
                                if (c.title.ja != undefined) {
                                    titleAndSubTitle.push(<CardDescription key={"d"}>{c.title.ja}</CardDescription>)
                                }
                            } else {
                                titleAndSubTitle.push(<CardTitle key={"t"}>{c.title.ja}</CardTitle>)
                            }
                            return titleAndSubTitle
                        })()}
                        <CardDescription className="text-right">{c.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {cardContentStr}
                    </CardContent>
                </Card>
            </Link>
        )
    })

    return (
        <>
            <h1 className={shadcnThemeStyle.h1}>{`{ News }`}</h1>
            {...newsCard}
        </>
    )
}