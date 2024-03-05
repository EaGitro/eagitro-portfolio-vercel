export const sideMenuValues = ["Home", "About", "Works", "Articles"] as const;

export const shadcnThemeStyle = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2:"scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
    p: "leading-7 [&:not(:first-child)]:mt-6",
    a:"font-medium underline underline-offset-4",
    ul:"my-6 ml-6 list-disc [&>li]:mt-2",
    inlineCode: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",


} as const;

export const shadcnThemeUniqueStyle = {
    h2_my5 : `mb-11 mt-16 ${shadcnThemeStyle.h2}`,

}as const;

export const fontSettings = {
    cursive: "tracking-widest font-cursive",
}
