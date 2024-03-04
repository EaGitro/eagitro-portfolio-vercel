import SideMenu from "~/components/my-components/SideMenu"
import { SideMenuValuesProps } from "~/common/types/sideMenuTypes"
import { ClassNameType } from "~/common/types/className"
import { sideMenuValues } from "~/common/utils/consts"

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { ScrollArea } from "~/components/my-ui/scroll-area"

import MobileMenu from "~/components/my-components/MobileMenu"

import Image from "next/image"


type Props = SideMenuValuesProps & ClassNameType & {
    children: React.ReactNode;
}
export default function PageLayoutComp(props: Props) {
    console.log(props)
    return (
        <>

            <div className="flex flex-row full-screen">
                <div className="basis-1/6 shrink">
                </div>

                <div className="basis-1/12 hidden md:block">
                    <SideMenu sideMenuValue={props.sideMenuValue}></SideMenu>
                </div>
                <div className="basis-1/12 hidden md:block"></div>
                <div className="basis-5/6 h-full overflow-y-scroll flex flex-row md:basis-3/4">
                    <div className="basis-4/5 grid grid-rows-12 grid-flow-col md:basis-2/3">
                        <div className="row-start-2">{props.children}
                        </div>
                    </div>
                    <MobileMenu className="basis-1/4 flex flex-row justify-end md:hidden" sideMenuValue={props.sideMenuValue}>
                        
                    </MobileMenu>
                </div>
            </div>
        </>
    );
}