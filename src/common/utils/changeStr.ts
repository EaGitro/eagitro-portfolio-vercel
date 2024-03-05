
/**
 * Change Chars into MATHEMATICAL BOLD SCRIPT
 * @param str 
 * @example 𝓐 𝓑 𝓒 𝓓 𝓔 𝓕 𝓖 𝓗 𝓘 𝓙 𝓚 𝓛 𝓜 𝓝 𝓞 𝓟 𝓠 𝓡 𝓢 𝓣 𝓤 𝓥 𝓦 𝓧 𝓨 𝓩 𝓪 𝓫 𝓬 𝓭 𝓮 𝓯 𝓰 𝓱 𝓲 𝓳 𝓴 𝓵 𝓶 𝓷 𝓸 𝓹 𝓺 𝓻 𝓼 𝓽 𝓾 𝓿 𝔀 𝔁 𝔂 𝔃 
 */
export function mathematicalBoldStr(str: string) {
    const asciiPoints = {
        A: 65,
        Z: 90,
        a: 97,
        z: 122
    }
    let ans = ""
    for (let i of str) {
        let point: number = i.codePointAt(0)!;
        if (asciiPoints.a <= point && point <= asciiPoints.z) {
            ans += String.fromCodePoint(point + 119945)
        } else if (asciiPoints.A <= point && point <= asciiPoints.Z) {
            ans += String.fromCodePoint(point + 119951)
        } else {
            ans += i
        }
    }
    return ans;
}

/**
 * Change Chars into MATHEMATICAL SCRIPT
 * @param str 
 * @example 𝒜 ℬ 𝒞 𝒟 ℰ ℱ 𝒢 ℋ ℐ 𝒥 𝒦 ℒ ℳ 𝒩 𝒪 𝒫 𝒬 ℛ 𝒮 𝒯 𝒰 𝒱 𝒲 𝒳 𝒴 𝒵 𝒶 𝒷 𝒸 𝒹 ℯ 𝒻 ℊ 𝒽 𝒾 𝒿 𝓀 𝓁 𝓂 𝓃 ℴ 𝓅 𝓆 𝓇 𝓈 𝓉 𝓊 𝓋 𝓌 𝓍 𝓎 𝓏 
 */
export function mathematicalStr(str: string) {
    const asciiPoints = {
        A: 65,
        Z: 90,
        a: 97,
        z: 122
    }
    let ans = "";


    const specialChars = {
        101:8495,    // e
        103:119892,  // g
        111:8500     // o
    } as const;
    

    for (let i of str) {
        let point: number = i.codePointAt(0)!;
        // console.log(point)
        if (asciiPoints.a <= point && point <= asciiPoints.z && !(point in specialChars)) {
            ans += String.fromCodePoint(point + 119893)
        }else if(point in specialChars){
            console.log(point)
            const specialPoints = point as keyof typeof specialChars
            ans += String.fromCodePoint(specialChars[specialPoints])
        } else if (asciiPoints.A <= point && point <= asciiPoints.Z) {
            ans += String.fromCodePoint(point + 119899)
        } else {
            ans += i
        }
    }
    return ans;
} 

