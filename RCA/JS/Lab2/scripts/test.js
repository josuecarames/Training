let num = parseInt(window.prompt("Type a number"));

const addArray = function(num) {
    let n = [];
    while (num != (/^[0-9.,]+$/)) {
        n.push(num);
    }
    return n.reverse;
}

console.log(addArray(num));