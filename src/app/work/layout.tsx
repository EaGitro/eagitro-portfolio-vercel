import PageLayoutComp from "~/components/my-components/PageLayoutComp";
// import SideMenu from "~/components/my-components/SideMenu"

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <PageLayoutComp sideMenuValue="Work">{children}</PageLayoutComp>
        </>
    )
}