import Link from "next/link";
import { shadcnThemeStyle, shadcnThemeStyleArticle, shadcnThemeUniqueStyle } from "~/common/utils/consts";
import { JottingAlert } from "~/components/my-components/JottingAlert";


import { Link1Icon } from "@radix-ui/react-icons";
import {Alert} from "~/components/ui/alert"
 
export default function ArticlesPage() {
  return (
    <>
      <h1 className={shadcnThemeStyleArticle.h1}>{`{ Writing }`}</h1>
    

    
      <h2 className={shadcnThemeStyleArticle.h2}>
        <Link href={"/writing/articles"}  className={"flex flex-row"}>
          Articles<Link1Icon/>
        </Link>
      </h2>
      <p className={shadcnThemeStyleArticle.p}>
        ちゃんと「記事」として書いたものです。体裁を整えてあります。Qiita 等へのリンクを含みます。
      </p>


      <h2 className={shadcnThemeStyleArticle.h2}>
        <Link href={"/writing/jottings"} className={"flex flex-row"}>
          
        Jottings<Link1Icon/>
        </Link>
        </h2>
      <p className={shadcnThemeStyleArticle.p}>
        「メモ書き」や「走り書き」、「アイデアの寄せ集め」といった形のモノです。あくまでメモ書きなので体裁は整えておらず、読みにくい可能性があります。また情報の正確性も担保しません。
        この <Link  href={"/writing/jottings"} className={shadcnThemeStyleArticle.a}><code>/writing/jottings</code></Link> カテゴリに属するものには以下のような警告をつけています。
      </p>
      <JottingAlert></JottingAlert>


    </>
  );
}