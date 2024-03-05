import SideMenu from "~/components/my-components/SideMenu"
import { SideMenuValuesProps } from "~/common/types/propsTypes"
import { ClassNameType } from "~/common/types/otherUtilTypes"
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

            <div className="flex flex-row h-full">
                <div className="shrink basis-1/12 md:basis-1/6 h-full">
                </div>

                <div className="basis-1/12 hidden md:block h-full">
                    <SideMenu sideMenuValue={props.sideMenuValue}></SideMenu>
                </div>
                <div className="basis-1/12 hidden md:block"></div>
                <div className="basis-11/12 h-screen overflow-y-auto flex flex-row md:basis-3/4">
                    <div className="basis-11/12 h-screen md:basis-2/3 mb-5">
                        <div className="h-100 md:py-20 py-24">{props.children}
                        </div>
                    </div>
                    <MobileMenu className="basis-1/12 flex flex-row justify-end md:hidden" sideMenuValue={props.sideMenuValue}>
                        
                    </MobileMenu>
                </div>
            </div>
        </>
    );
}