import type {Element} from 'hast'
import { cn } from '~/lib/utils'
import { shadcnThemeStyleArticle } from './consts'


// type Components = Partial<{
//   [TagName in keyof JSX.IntrinsicElements]:
//     // Class component:
//     | (new (props: JSX.IntrinsicElements[TagName] & ExtraProps) => JSX.ElementClass)
//     // Function component:
//     | ((props: JSX.IntrinsicElements[TagName] & ExtraProps) => JSX.Element | string | null | undefined)
//     // Tag name:
//     | keyof JSX.IntrinsicElements
// }>

export function H1(props: JSX.IntrinsicElements["h1"]){
    const {children, className,...rest} = props
    return(
    <h1 className={cn(shadcnThemeStyleArticle.h1, className)}  {...rest}>
        {props.children}
    </h1>
    )
}

export function H2(props: JSX.IntrinsicElements["h2"]){
    const {children, className,...rest} = props
    return(
    <h2 className={cn(shadcnThemeStyleArticle.h2, className)}  {...rest}>
        {props.children}
    </h2>
    )
}

export function H3(props: JSX.IntrinsicElements["h3"]){
    const {children, className,...rest} = props
    return(
    <h3 className={cn(shadcnThemeStyleArticle.h3, className)}  {...rest}>
        {props.children}
    </h3>
    )
}

export function H4(props: JSX.IntrinsicElements["h4"]){
    const {children, className,...rest} = props
    return(
    <h4 className={cn(shadcnThemeStyleArticle.h4, className)}  {...rest}>
        {props.children}
    </h4>
    )
}

export function P(props: JSX.IntrinsicElements["p"]){
    const {children, className,...rest} = props
    return(
    <p className={cn(shadcnThemeStyleArticle.p, className)}  {...rest}>
        {props.children}
    </p>
    )
}

export function Ul(props: JSX.IntrinsicElements["ul"]){
    const {children, className,...rest} = props
    return(
    <ul className={cn(shadcnThemeStyleArticle.ul, className)}  {...rest}>
        {props.children}
    </ul>
    )
}

export function Blockquote(props: JSX.IntrinsicElements["blockquote"]){
    const {children, className,...rest} = props
    return(
    <blockquote className={cn(shadcnThemeStyleArticle.blockquote, className)}  {...rest}>
        {props.children}
    </blockquote>
    )
}

export function A(props: JSX.IntrinsicElements["a"]){
    const {children, className,...rest} = props
    return(
    <a className={cn(shadcnThemeStyleArticle.a, className)}  {...rest}>
        {props.children}
    </a>
    )
}