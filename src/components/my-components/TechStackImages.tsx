import Image from "next/image";

type TechStackType = {
    [K: string]:
    {
        name?: string;
        alt?: string;
        src: string;
        width?: number;
        height?: number;
        link?: string;
    }
};
const techStacks: TechStackType = {
    c: {
        name: "c",
        alt: "c icon",
        src: "/lang-icons/c_original_logo_icon.svg"
    },
    python: {
        alt: "python icon",
        src: "/lang-icons/python-logo-only.svg"
    },
    flask: {
        src: "/lang-icons/flask.svg",
        link: "https://flask.palletsprojects.com/en/3.0.x/"
    },
    go: {
        alt: "gopher icon",
        src: "/lang-icons/gopher.png",
        link: "https://go.dev/"
    },
    ts: {
        name: "ts",
        alt: "typescript icon",
        src: "/lang-icons/ts-logo.svg"
    },
    js: {
        name: "js",
        alt: "javascriot icon",
        src: "/lang-icons/js.png"
    },
    react: {
        name: "react",
        alt: "react icon",
        src: "/lang-icons/react-logo.svg"
    },
    nextjs: {
        alt: "nextjs icon",
        src: "/lang-icons/nextjs-icon-dark-background.svg"
    },
    
    arduino: {
        src: "/lang-icons/Arduino_Logo.png",
        link: "https://www.arduino.cc/"
    },
    ubuntu: {
        src: "/lang-icons/ubuntu-logo.svg",
        width: 1022,
        height: 360
    },
    r: {
        src: "/lang-icons/Rlogo.svg"
    }
} as const;
export default function TechStackImages() {
    
    return (Object.keys(techStacks).map((key) => {
        const imageComp =
            (
                <Image
                    className="block"
                    alt={techStacks[key].alt == undefined ? `${key} icon` : `${techStacks[key].alt}`}
                    src={techStacks[key].src}
                    width={techStacks[key].width == undefined ? 80 : techStacks[key].width}
                    height={techStacks[key].height == undefined ? 80 : techStacks[key].height}
                ></Image>
            )
        return (
            <span key={key}
                className={
                    (() => {
                        let ans = ""
                        if ((techStacks[key].width !== undefined && techStacks[key].height !== undefined)
                            && ((techStacks[key].width ?? 1) / (techStacks[key].height ?? 1) > 1.5)) {
                            ans += "col-span-2"
                        }
                        return ans;
                    })()
                }
            >
                {techStacks[key].link == undefined ? imageComp : <a href={techStacks[key].link}> {imageComp} </a>}
            </span>
        )
    }))
}