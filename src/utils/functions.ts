/**
 * 
 * @param {string} text - The text that we want to slice
 * @param {number} max  - The maximum length of text after slicing
 * @returns The sliced text
 */
export const sliceText = (text:string, max:number = 70) => {
    if(text.length > max) return `${text.slice(0, max)} ...`
    return text;
}