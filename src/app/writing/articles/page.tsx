import { shadcnThemeStyleArticle } from "~/common/utils/consts";
import MyBreadcrumb from "~/components/my-components/MyBreadcrumb";
import ArticleCardsComponents from "./_contents/ArticleCardsComponent";

export default function Articles() {
    return (
        <>
            <MyBreadcrumb></MyBreadcrumb>
            <h1 className={shadcnThemeStyleArticle.h1}>{`{ Writing/Articles }`}</h1>
            <h2 className={shadcnThemeStyleArticle.h2}>記事一覧</h2>
            <ArticleCardsComponents></ArticleCardsComponents>

        </>
    )
}