import ReactMarcdown from "react-markdown"
import {defaultComponentsSetting} from "~/common/utils/reactMdComponentsSetting"



export default function ArticleAboutPage(){

    return (
        <ReactMarcdown
        components={defaultComponentsSetting}
        >
            {
                `
# hoge
## huga

- a
  - aa
- a
[ii](example.com)


> hoge

- a
  - hoge
                `
            }
        </ReactMarcdown>
    )
}