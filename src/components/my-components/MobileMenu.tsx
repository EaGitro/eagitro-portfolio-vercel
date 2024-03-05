import { SideMenuValuesProps } from "~/common/types/propsTypes"
import { ClassNameType } from "~/common/types/otherUtilTypes"
import SideMenu from "./SideMenu"


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "~/components/ui/sheet"


type Props = SideMenuValuesProps & ClassNameType




export default function MobileMenu(props: Props) {


    return (
        <div className={props.className}>
            <div className="basis-1/24 m-2">
            <Sheet>
                <SheetTrigger>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="#FFE4C9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            className="feather feather-align-justify">
                            <line x1="21" y1="10" x2="3" y2="10"></line>
                            <line x1="21" y1="6" x2="3" y2="6"></line>
                            <line x1="21" y1="14" x2="3" y2="14"></line>
                            <line x1="21" y1="18" x2="3" y2="18"></line>
                        </svg>
                    </div>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>side menu</SheetTitle>
                        <SheetDescription>
                            Menu
                        </SheetDescription>
                    </SheetHeader>
                    <SideMenu sideMenuValue={props.sideMenuValue}></SideMenu>
                </SheetContent>
            </Sheet>
            </div>
        </div>
    )
}