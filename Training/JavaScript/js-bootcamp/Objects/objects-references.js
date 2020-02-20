//object

let myAccount = {
    fullName: "Josue Carames",
    expenses: 0,
    income: 0
}

//functions

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let resetAccount = function(account) {
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses
    return `Account for ${account.fullName} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

// balance

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)

console.log(getAccountSummary(myAccount))

//reset

resetAccount(myAccount)
console.log(getAccountSummary(myAccount))