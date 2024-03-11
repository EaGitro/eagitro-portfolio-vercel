export const sideMenuValues = ["Home", "About", "Work", "Writing"] as const;

export const shadcnThemeStyle = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2:"scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
    h3:"scroll-m-20 text-2xl font-semibold tracking-tight",
    h4:"scroll-m-20 text-xl font-semibold tracking-tight",
    p: "leading-7 [&:not(:first-child)]:mt-6",
    a:"font-medium underline underline-offset-4",
    ul:"my-6 ml-6 list-disc [&>li]:mt-2",
    code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
    blockquote:"mt-6 border-l-2 pl-6 italic"


} as const;

export const shadcnThemeUniqueStyle = {
    h2_my5 : `mb-11 mt-16 ${shadcnThemeStyle.h2}`,

}as const;


export const shadcnThemeStyleArticle = {
    h1: shadcnThemeStyle.h1,
    h2:shadcnThemeUniqueStyle.h2_my5,
    h3:shadcnThemeStyle.h3,
    h4:shadcnThemeStyle.h4,
    p:shadcnThemeStyle.p,
    a:shadcnThemeStyle.a,
    ul:shadcnThemeStyle.ul,
    code:shadcnThemeStyle.code,
    blockquote:shadcnThemeStyle.blockquote
}

export const fontSettings = {
    cursive: "tracking-widest font-cursive",
}
