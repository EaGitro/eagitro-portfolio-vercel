import { shadcnThemeStyle, shadcnThemeStyleArticle, shadcnThemeUniqueStyle } from "~/common/utils/consts";
import { cn } from "~/lib/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import { title } from "process";

type ArticleCardType = {
    title: string;
    link: string;
    img?: string;
    id: string | number;
    description?: string;
}

const articleCards: Array<ArticleCardType> = [
    {
        title: "Go の net/http(とecho) で HTTP リクエストを見てみる",
        link: "https://qiita.com/ea_gitro/items/1557da398dec0e69675f",
        img: "https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZoPTMzNiZ0eHQ9R28lMjAlRTMlODElQUUlMjBuZXQlMkZodHRwJTI4JUUzJTgxJUE4ZWNobyUyOSUyMCVFMyU4MSVBNyUyMEhUVFAlMjAlRTMlODMlQUElRTMlODIlQUYlRTMlODIlQTglRTMlODIlQjklRTMlODMlODglRTMlODIlOTIlRTglQTYlOEIlRTMlODElQTYlRTMlODElQkYlRTMlODIlOEImdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT01NiZ0eHQtY2xpcD1lbGxpcHNpcyZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPWMwOWM5YmRmMzE2MDE2OGMxNTliMTkzNzA3ZTY1NjRm&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTcxNiZ0eHQ9JTQwZWFfZ2l0cm8mdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT0zMiZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPWEzNDQ1MmQ2YzUzMDM4OGVhZGIxZjYwM2UyMmJhMTQ4&blend-x=142&blend-y=491&blend-mode=normal&s=39af0624cb9a8315e9cac31ece3cbaa2",
        id: 0,
        description:"Qiitaの記事です"
    }

]

export default function ArticleCardsComponents() {
    return (
        <div className={"grid grid-cols-1 gap-5 md:grid-cols-2"}>
            {
                articleCards.map((articleCard) => {
                    return (
                        <Card key={articleCard.id}>
                            <a href={articleCard.link} >
                                <CardHeader>
                                    <CardTitle className={shadcnThemeStyleArticle.h3}>{articleCard.title}</CardTitle>
                                    <CardDescription>{articleCard.description != undefined ? articleCard.description : ""}</CardDescription>
                                </CardHeader>
                                <CardContent>


                                    {articleCard.img != undefined ?
                                        <img src={articleCard.img} alt={articleCard.title} />
                                        : <></>
                                        }
                                </CardContent>
                            </a>
                        </Card>
                    )
                })
            }
        </div>

    )

} 