
tags = ["h1","h2","h3","h4","p","ul","blockquote","a"]

def create_comp(tagnames):
    """以下のような関数を生成する。 react-markdown の components 設定用


    export function H1(props: JSX.IntrinsicElements["h1"] ) {
        const {children, className,...rest} = props
        return (
            <h1 className={cn("shadcnThemeStyleArticle.h1",className)} {...rest}>
                {props.children}
            </h1>
        )
    }
    """
    
    t = ""
    for tag in tagnames:
        tag_u = tag[0].upper() + tag[1:]
        tmp = """
export function {tag_u}(props: JSX.IntrinsicElements["{tag}"]){{
    const {{children, className,...rest}} = props
    return(
    <{tag} className={{cn(shadcnThemeStyleArticle.{tag}, className)}}  {{...rest}}>
        {{props.children}}
    </{tag}>
    )
}}
""".format(tag=tag,tag_u=tag_u)
        t+=tmp
    return t

print(create_comp(tags))






def import_str(tags, importpath):
    t = "import {"
    for tag in tags:
        tag_u = tag[0].upper() + tag[1:]
        t += f"{tag_u}, "
    
    t += f"}} from '{importpath}'"
    return t

print(import_str(tags,"~/common/utils/react-md-elm-config"))


def components_opt(tags):
    t = "components={{\n"
    for tag in tags:
        tag_u = tag[0].upper() + tag[1:]
        t += f"\t{tag}:{tag_u},\n"
    
    t+="}}"
    return t

print(components_opt(tags))
        
    
        
    
    