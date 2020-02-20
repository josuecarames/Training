//Tip calculator

let getTip = function (total, tipPercent) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(40, .25)

console.log(tip)