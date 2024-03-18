import { shadcnThemeStyleArticle } from "~/common/utils/consts";
import MyBreadcrumb from "~/components/my-components/MyBreadcrumb";

export default function Jottings(){
    return(
        <>
        <MyBreadcrumb></MyBreadcrumb>
        <h1 className={shadcnThemeStyleArticle.h1}>{`{ Writing/Jottings }`}</h1>
        <p className={shadcnThemeStyleArticle.p}>ｹﾝｾﾂﾁｭｳ ﾃﾞｽ!!<br/>ﾁｮｯﾄ ﾏｯﾃﾃ ｸﾀﾞｻｲ~!</p>
        </>
    )
}