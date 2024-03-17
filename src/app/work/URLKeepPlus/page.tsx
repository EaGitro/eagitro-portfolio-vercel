import ReactMarcdown from "react-markdown"
import { shadcnThemeStyleArticle } from "~/common/utils/consts"
import { defaultComponentsSetting } from "~/common/utils/reactMdComponentsSetting"

export default function URLKeepPlus() {
    return (
        <>
        <h1 className={shadcnThemeStyleArticle.h1}>Chrome拡張機能 「URLKeep+」</h1>
        <ReactMarcdown
            components={defaultComponentsSetting}
        >
            {`
## 機能 
- タブ情報の取得・表示
- キーワード、グループ名、メモをつけての URL の保存 
- 保存した URL の分類別表示

## 詳細
Chromeから提供されているAPIを用いてタブ情報を取得し、ある処理を施した上でローカルストレージに保存するChrome拡張機能を作成した。  
具体的には、現在開いているタブの中でユーザーが保存したいタブについて、キーワードやグループ名といった識別情報とメモといった補足情報とともに保存することができ、さらに保存したタブを識別情報毎にカテゴライズし、ブラウザ上で再表示することができるというものである。

操作方法等については ↓
[![capture](/work-card-imgs/URLKeepPlus_capture.GIF)](https://github.com/EaGitro/URLKeepPlus)

## ストーリ
開発の経緯としては、既存の拡張機能に不満があったということが挙げられる。  
具体的には、今まで使用していた既製品には、一度に保存・展開という機能しかなく、分類やデータの加工などができなかった。
既存品にないならば作ってしまえと考え、制作に至った。

苦労した点としては、当時ChromeExtensionAPIに大型バージョンアップがあったばかりであり、参照できる資料が公式ドキュメント以外にほとんどなかったことが挙げられる。しかしそのような中であっても自分が好きな「調べもの」を活かし、公式ドキュメントや海外のコミュニティから情報を収集して自分の中に落とし込んでいった。
結果としてウェブストアでの公開までこぎつけることができ、現在は友人に使ってもらいながら改良を続けている。

## 技術
React, TypeScript, Bootstrap

## 技術選定理由
はじめは生のJSで記述していたが、ロジックが煩雑になるにつれて開発が困難になっていった。
そこで一度はこの開発を中止していたが、React と TypeScript という新たな技術を身に付けたことで再チャレンジし、完成までこぎつけることができた。

## URIs
- ChromeWebStore: [https://chromewebstore.google.com/detail/urlkeep+/mhjmgbgkkpikgohjidjgipahbnehkdkd](https://chromewebstore.google.com/detail/urlkeep+/mhjmgbgkkpikgohjidjgipahbnehkdkd)
- GitHub: [https://github.com/EaGitro/URLKeepPlus](https://github.com/EaGitro/URLKeepPlus)

`}
        </ReactMarcdown>
        </>
    )
}