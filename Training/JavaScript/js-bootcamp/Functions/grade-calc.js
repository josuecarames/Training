// students score, total possible score (20, 15) generate the letter grade 
//15/20 -> You got a C (%75)!
//A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalc = function(studentScore, totalPossibleScore){
    const percentage = (studentScore / totalPossibleScore) * 100
    let letterGrade = ""

    if (percentage >= 90) {
        letterGrade = "A"
    } else if (percentage >= 80) {
        letterGrade = "B"
    } else if (percentage >= 70) {
        letterGrade = "C"
    } else if (percentage >= 60) {
        letterGrade = "D"
    } else {
        letterGrade = "F"
    }

    return `You got a ${letterGrade} (%${percentage})`
}

const result = gradeCalc(8, 20)
console.log (result)