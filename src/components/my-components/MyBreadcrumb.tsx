"use client"

import { usePathname } from 'next/navigation';
// import { shadcnThemeStyle, shadcnThemeStyleArticle } from '~/common/utils/consts';
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"

export default function MyBreadcrumb(
    props: {
        title?: string;
    }
) {
    const { title, ...rest } = props;
    const pathnameArr = usePathname().split("/")
    console.log("pathnamearr", pathnameArr)
    const pathLen = pathnameArr.length;

    let breadcrumbArr: Array<JSX.Element> = [];

    breadcrumbArr.push(
        <>
            <BreadcrumbItem key={-1}>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

        </>
    )

    let path2there = "/";
    for (let i = 1; i < pathLen; i++) {
        let dirname = title && i + 1 == pathLen ? title+`(here)` : pathnameArr[i]
        path2there += `${pathnameArr[i]}/`
        breadcrumbArr.push(
            <>
                <BreadcrumbSeparator />
                <BreadcrumbItem key={i}>
                    <BreadcrumbLink href={path2there}>{dirname}</BreadcrumbLink>
                </BreadcrumbItem>

            </>
        )
    }


    return (
        <Breadcrumb {...rest} className={"my-6"}>
            <BreadcrumbList>
                {...breadcrumbArr}
            </BreadcrumbList>
        </Breadcrumb>
    )
}