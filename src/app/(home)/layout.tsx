import PageLayoutComp from "~/components/my-components/PageLayoutComp";


export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    
    return <PageLayoutComp sideMenuValue="Home">{children}</PageLayoutComp>
}