
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

import { newsMetaObjLinkIndex } from "../_contents/newsMetaObj";
import ReactMarcdown from "react-markdown"

import Link from "next/link";
import { link } from "fs";
import NewsPage from "../page";
import Markdown from "react-markdown";
import { defaultComponentsSetting } from "~/common/utils/reactMdComponentsSetting";
import MyBreadcrumb from "~/components/my-components/MyBreadcrumb";

import { redirect } from "next/navigation";

export default function NewsDetail({ params }: { params: { slug: string } }) {


    if (newsMetaObjLinkIndex[params.slug] != undefined && newsMetaObjLinkIndex[params.slug].content != undefined) {
        const title = newsMetaObjLinkIndex[params.slug].title.en ? newsMetaObjLinkIndex[params.slug].title.en : newsMetaObjLinkIndex[params.slug].title.ja;
        return (
            <>
            <MyBreadcrumb title={params.slug}></MyBreadcrumb>
                <h1 className={shadcnThemeStyleArticle.h1}>{title}</h1>
                <div className="text-right text-right">{newsMetaObjLinkIndex[params.slug].date}</div>
                <ReactMarcdown components={defaultComponentsSetting}>
                    {newsMetaObjLinkIndex[params.slug].content}

                </ReactMarcdown>
            </>
        )
    } else {
        redirect("/news")
    }
}

