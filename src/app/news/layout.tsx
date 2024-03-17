import PageLayoutComp from "~/components/my-components/PageLayoutComp";
// import SideMenu from "~/components/my-components/SideMenu"

export default function NewsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <PageLayoutComp sideMenuValue="News">{children}</PageLayoutComp>
        </>
    )
}