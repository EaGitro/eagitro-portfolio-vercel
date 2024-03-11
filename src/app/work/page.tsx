import { shadcnThemeStyle, shadcnThemeStyleArticle, shadcnThemeUniqueStyle } from "~/common/utils/consts";
import { cn } from "~/lib/utils";
import { WorkCardsComponent } from "~/components/my-components/topical/workCardImgs";


export default function AboutPage() {
    
    return (
        <>
            <h1 className={cn(shadcnThemeStyleArticle.h1)}>{`{Work}`}</h1>
            <h2 className={cn(shadcnThemeStyleArticle.h2)}>
                Here are some of my projects. ↓
            </h2>
            <WorkCardsComponent></WorkCardsComponent>


        </>
    );
}