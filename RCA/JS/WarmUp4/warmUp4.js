// larger than X in length, and shorter than Y in length.

let words = ['dog', 'degree', 'castle', 'quick brown fox'];
const findWordsLengthRange = (strArr, x, y) => {
    let arr = [];
    for (let i = 0; i < strArr.length; i++)
    {
        if (strArr[i].length > x && strArr[i].length < y) arr.push(strArr[i]);
    }
    return arr;
}
console.log(findWordsLengthRange(words, 4, 10));