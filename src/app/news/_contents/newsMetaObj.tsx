// type ZeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
// type OneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
// type YYYY = `20${ZeroToNine}${ZeroToNine} | 19${ZeroToNine}${ZeroToNine}`
// type MM = `0${OneToNine}` | `1${0 | 1 | 2}`
// type DD = `${0}${OneToNine}` | `${1 | 2}${ZeroToNine}` | `3${0 | 1}`
// type YyyyMmDd = `${YYYY}-${MM}-${DD}`

type TwoDigitNumber = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12";
type DayOfMonth = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31";
type YYYMMDD = `${number}-${TwoDigitNumber}-${DayOfMonth}`


type ContentsObjType = Array<
    {
        date: YYYMMDD;
        title: {
            en?: string;
            ja: string;
        } | {
            en: string;
            ja?: string;
        };
        content?: string;
        link?: string;
    }
>
const newsMetaObjTmp: ContentsObjType = [
    {
        date: "2024-03-06",
        title: {
            en: "Welcome to My Portfolio Site."
        },
        content: `
I have created a portfolio website.

I will be adding more and more contents from now on.
Please take a look if you like.

***

ポートフォリオサイトを作りました。

これからどんどんコンテンツを増やしていくので、良かったら見て行ってください。
        `
    },
    {
        date: "2024-03-16",
        title: {
            en: "AtCoder UpGraded to Brown!!!",
            ja: "【AtCoder】入茶しました!!!!!"
        },
        content: `
## AtCoder で入茶しました!!!!

待ちに待った入茶です! ずいぶん長いことやってきましたが、 [ABC345](https://atcoder.jp/contests/abc345) にしてやっと入茶できました!

![nyucha graph](/news/atcoder-nyucha.jfif)

C 問題をパパっと解けたこと、D 問題が難しかったことで、 ${`+48`} も上がりました! ｳﾚｼｲ!!

私の AtCoder は [こちら(Ea_Gitro)](https://atcoder.jp/users/Ea_Gitro)
        `
    },
    {
        date: "2024-03-17",
        title: {
            ja: "Qiitaに記事をアップしました"
        },
        content: `

## 「Go の net/http(とecho) で HTTP リクエストを見てみる」という記事をQiitaに投稿しました!

[![qiita](https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZoPTMzNiZ0eHQ9R28lMjAlRTMlODElQUUlMjBuZXQlMkZodHRwJTI4JUUzJTgxJUE4ZWNobyUyOSUyMCVFMyU4MSVBNyUyMEhUVFAlMjAlRTMlODMlQUElRTMlODIlQUYlRTMlODIlQTglRTMlODIlQjklRTMlODMlODglRTMlODIlOTIlRTglQTYlOEIlRTMlODElQTYlRTMlODElQkYlRTMlODIlOEImdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT01NiZ0eHQtY2xpcD1lbGxpcHNpcyZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPWMwOWM5YmRmMzE2MDE2OGMxNTliMTkzNzA3ZTY1NjRm&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTcxNiZ0eHQ9JTQwZWFfZ2l0cm8mdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT0zMiZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPWEzNDQ1MmQ2YzUzMDM4OGVhZGIxZjYwM2UyMmJhMTQ4&blend-x=142&blend-y=491&blend-mode=normal&s=39af0624cb9a8315e9cac31ece3cbaa2)](https://qiita.com/ea_gitro/items/1557da398dec0e69675f)

Qiita への投稿は2回目となります。        

本当はこちらに書きたかったのですが、まだまだ建設途中なので...

速くバックエンド環境を整えてこちらに投稿できるようにしたいです!!
`
    }

]

export const newsMetaObj: ContentsObjType = newsMetaObjTmp.map((v, i) => {
    return (
        {
            ...v,
            ...{ link: `${i}-${v.date}` }
        }
    )
})


export const newsMetaObjLinkIndex:  { [key: string]: typeof newsMetaObj[number] } = newsMetaObj.reduce((acc, cur) => {
    if (cur.link !== undefined) {
        return {
            ...acc,
            [cur.link]: cur
        };
    } else {
        return acc;
    }
}, {});