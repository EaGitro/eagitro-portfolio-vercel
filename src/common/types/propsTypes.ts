import { sideMenuValues } from "../utils/consts"
export type SideMenuValuesProps = {
    sideMenuValue: (typeof sideMenuValues)[number] | ""
}