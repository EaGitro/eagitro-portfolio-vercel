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
        return (
            <Link href={`news/${i}`} key={i}>
            <Card  className={"w-100 my-5"}>
                <CardHeader className={shadcnThemeStyleArticle.h3}>
                    {(()=>{
                        let titleAndSubTitle:Array<JSX.Element>=[];
                        if (c.title.en!=undefined){
                            titleAndSubTitle.push(<CardTitle key={"t"}>{c.title.en}</CardTitle>)
                            if (c.title.ja!=undefined){
                                titleAndSubTitle.push(<CardDescription key={"d"}>{c.title.ja}</CardDescription>)
                            }
                        }else{
                            titleAndSubTitle.push(<CardTitle key={"t"}>{c.title.ja}</CardTitle>)
                        }
                        return titleAndSubTitle
                    })()}
                </CardHeader>
                <CardContent>
                    {c.content!=undefined?c.content.slice(0,80).replace(/(\[.*?\])|(\(.*?\))/g, '').replace(/[^\w\s\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}ーa-zA-Z0-9]|_/gu, '')+"...":""}
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