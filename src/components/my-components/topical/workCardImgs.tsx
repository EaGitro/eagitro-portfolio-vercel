import { shadcnThemeStyle, shadcnThemeStyleArticle, shadcnThemeUniqueStyle } from "~/common/utils/consts";
import { cn } from "~/lib/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import Image from "next/image";

import Link from "next/link";


type workCardType = {
    name: string;
    description: string;
    img?: {
        src: string;
        alt?: string;
        width?: number;
        height?: number;
    };
    link: string;
    gitLink?:string;
}

export const workCards: Array<workCardType> = [
    {
        name: "URLKeep+",
        description: "A Chrome Extension",
        img: {
            src: "/work-card-imgs/URLKeepPlus_capture.GIF"

        },
        link:"/work/URLKeepPlus",
        gitLink: "https://github.com/EaGitro/URLKeepPlus" // TODO: "/work/urlkeepplus"
    },
    {
        name: "A Bottle of Ocha!",
        description: "An Interactive and fun tennis racquet with Arduino",
        img: {
            src: "/work-card-imgs/a-bottle-of-ocha-01.png"
        },
        gitLink:"https://github.com/EaGitro/a-bottle-of-ocha_m5stick_tennis",
        link: "work/a-bottle-of-ocha"    // TODO: "work/a-bottle-of-ocha"
    },
    {
        name: "Brainfuck",
        description: "An interpreter of Brainf**k with C lang",
        img: {
            src: "/work-card-imgs/brainfuck.png"
        },
        link:"https://github.com/EaGitro/brainfuck"                 // TODO: "/work/brainfuck"
    },
    {
        name: "Analysis notepad app",
        description: "Make more creative notes by looking back again at past ideas you've forgotten too.",
        img:{
            src: "/work-card-imgs/analysis_notepad_app.GIF",
        },
        link:"https://github.com/EaGitro/analysis_notepad_app"

    }
]

export function WorkCardsComponent() {



    return (
        <div className={"grid grid-cols-1 gap-5 md:grid-cols-2"}>
            {
                workCards.map((workCard) => {
                    return (
                        <Card key={workCard.name}><a href={workCard.link} >
                            <CardHeader>
                                <CardTitle className={shadcnThemeStyleArticle.h3}>{workCard.name}</CardTitle>
                                <CardDescription>{workCard.description}</CardDescription>
                            </CardHeader>
                            <CardContent>

                                {workCard.img ? <Image alt={`Image of ${workCard.name}`} src={workCard.img?.src} layout="responsive" objectFit="contain" width={800} height={800}></Image> : <Image src={"/eagitro-kotlin.png"} alt="Ea Gitro's icon"></Image>}
                                {workCard.gitLink? <a href={workCard.gitLink}><div><Image className={"pt-5"} alt={`GitHub link of ${workCard.name}`} src={"/github-mark-black.svg" }  width={40} height={40}></Image></div></a>:null}
                            </CardContent></a>
                        </Card>
                    )
                })
            }
        </div>

    )
}