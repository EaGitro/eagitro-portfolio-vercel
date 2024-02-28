import SideMenu from "~/components/my-components/SideMenu"
import { SideMenuValuesProps } from "~/common/types/sideMenuTypes"
import { ClassNameType } from "~/common/types/className"
import { sideMenuValues } from "~/common/utils/consts"

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { ScrollArea } from "~/components/my-ui/scroll-area"



type Props = SideMenuValuesProps & ClassNameType & {
    children: React.ReactNode;
}
export default function PageLayoutComp(props: Props) {
    console.log(props)
    return (
        <>
            <div className="grid grid-cols-12 full-screen">
                <div className="col-start-3 col-end-4">
                    <SideMenu sideMenuValue={props.sideMenuValue}></SideMenu>
                </div>
                <div className="col-start-5 col-end-13 h-full overflow-y-scroll flex flex-row">
                    <div className="basis-2/3 grid grid-rows-12 grid-flow-col">
                        <div className="row-start-2">{props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}