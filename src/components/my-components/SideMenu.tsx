import { Badge, badgeVariants } from "~/components/ui/badge"
// import * as React from "react"
import { cn } from "~/lib/utils"
import Link from "next/link"
import { SideMenuValuesProps } from "~/common/types/propsTypes"
import { ClassNameType } from "~/common/types/otherUtilTypes"
import { sideMenuValues } from "~/common/utils/consts"

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"

import Image from 'next/image'


type Props = SideMenuValuesProps & ClassNameType

export default function SideMenu(props: Props): React.ReactNode {

    /**
     * @example <Link key="sidemenu-About" href="/about" className={badgeVariants({variant:"secondary"})}>About</Link>
     */
    let badges: Array<React.JSX.Element> = [];

    let rowCnt = 5;

    for (const i of sideMenuValues) {
        badges.push(
            <Link key={`sidemenu-${i}`} href={`/${i == "Home" ? "" : i.toLowerCase()}`} className={cn(`row-start-${rowCnt++}`,badgeVariants({ variant: i == props.sideMenuValue ? "secondary" : "outline" }))}>{i}</Link>
        )
    }


    const a = "hoge"


    return (
        <div
            className={cn("grid grid-rows-12 grid-flow-col gap-4 items-start", props.className)}
        >
            <div className="row-start-3 row-span-2">
                <Avatar>
                    <AvatarImage src="/eagitro-kotlin.png" >
                    {/* <Image src="/eagitro-kotlin.png" alt="eagitro's icon"></Image> */}
                    </AvatarImage>
                    <AvatarFallback>EaGitro</AvatarFallback>
                </Avatar>
            </div>
            {/* <Badge>
                <Link
                    href={"/"}
                // className="text-sm font-medium transition-colors hover:text-primary"
                >
                    Home
                </Link>
            </Badge>

            <Badge>
                <Link
                    href={"/about"}
                // className="text-sm font-medium transition-colors hover:text-primary"
                >
                    About
                </Link>
            </Badge>

            <Link
                href={"/works"}
                className="text-sm font-medium transition-colors hover:text-primary"
            >
                Works
            </Link>

            <Link
                href={"/articles"}
                className="text-sm font-medium transition-colors hover:text-primary"
            >
                Articles
            </Link> */}
            {badges}




        </div>
    )
}