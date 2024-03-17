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
## 開発体制
共同開発(3名)

## 概要・機能: 
- Arduino をテニスラケットに装着しラケットを振ろう!!
- 「start」ボタンを押してから1秒間のラケットの軌跡が表示されるよ!!!

![poster](https://raw.githubusercontent.com/EaGitro/a-bottle-of-ocha_m5stick_tennis/main/doc/static/shoukai01.png)

## 詳細:
- Arduino から加速度情報を取得し、情報をハードに保持しつつ JSON 形式にしてサーバに送信。
- サーバにて数秒分のデータを保持し、APIとしてそのデータを提供。
- フロントエンド側にてそのAPIをfetchしデータを取得。軌跡を描画する。

![構成](https://raw.githubusercontent.com/EaGitro/a-bottle-of-ocha_m5stick_tennis/main/doc/static/setumei.png)

**更に詳しい説明** については [私のGitHub](https://github.com/EaGitro/a-bottle-of-ocha_m5stick_tennis) に記載してあるので是非見てください!!!!(私が書いたので何かあればご指摘ください)

## 自身の担当領域:
- Arduino を用いたコーディングすべて。(C++)
- Python(flask) を用いたサーバ構築全般。
- フロントエンド側のバックエンドとのやり取り部分とデータの加工。
- ドキュメント整理

(加速度を用いた軌道計算やDockerを用いたコンテナ化、フロントエンドの描画部分は友人が担当)

## 開発経緯:
大学の講義での一環ではあるが、「マイコンを用いて何かワクワクするものを作ろう!」という自由な講義であったため、通常の共同開発やハッカソンと変わることはない。   

このようなアプリケーションを作ろうとしたきっかけとしては、同じチーム内にテニスコーチのアルバイトをしている友人がおり、その友人が「テニスラケットの動きがリアルタイムで見られたら面白いよね」といったことがきっかけであった。  

当初のアイデアとしては「テニスがうまい人と自分のラケットの振り方を比較したら面白いのではないか」「せっかくマイコンを使っているので、リアルタイムでラケットから上手さを評価する音がでたら面白いのではないか」といったアイデアが出た。  

チーム内で実現可能性や期限を見ながら話し合い、できる範囲でより面白いものを作ろうとした結果、初めに述べた機能を実装するに至った。
今後は上記の機能を含めたアップデートを進めていきたいと考えている。

## 技術:
HTML, CSS, JavaScript, p5.js, Python(flask), Docker, nginx

## 技術選定理由:
自身がサーバサイド・ハード担当であり、技術選定に対して裁量を持っていたため、はじめは PythonAnywhere という一般的なホスティングサービスを使おうとしていた。  
しかしながら以下の理由から、ホスティングサービスを使うことは難しいと判断し、チーム内のメンバーに対して Docker 等で自分たちのパソコン上でやり取りする方法はないか意見を求めた。結果、 Docker を用いた方法で公開することとした。  
- 理由:
	- 「ラケットを振る」という短い時間のなかで、高いフレームレートが必要であったことで、頻繁に大量のデータを送信する必要があった。
	- またArduinoというハードの特徴上保持できるデータ量に限界があった。具体的には20回分のデータしか保持することしかできず、1秒に1回サーバにPOSTするにしても50msに1度しかデータが取得できなかった。
	- 加えてホスティングサービスの仕様上か、沢山のデータを送受信するとそれ以上の送受信が数秒停止するということが起きた。

`}
        </ReactMarcdown></>
    )
}