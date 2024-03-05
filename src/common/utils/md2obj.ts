
type MemberTypeContent = {
    c: (string | tagObj)[]
}
type tagObj = {
    a?: MemberTypeContent & {
        link: string;
    },
    p?: MemberTypeContent,
    h1?: MemberTypeContent,
    h2?: MemberTypeContent,
    h3?: MemberTypeContent,
    h4?: MemberTypeContent,
    h5?: MemberTypeContent,
    code?:MemberTypeContent,
    pre?:MemberTypeContent,
    b?:MemberTypeContent,
    i?:MemberTypeContent,
}
type htmlObj = Array<tagObj>

export function md2obj(md: string) {
    const lines = md.split("\n");
    let obj:htmlObj = [];
    let prev = undefined;

    for(const line of lines){
        
    }
}