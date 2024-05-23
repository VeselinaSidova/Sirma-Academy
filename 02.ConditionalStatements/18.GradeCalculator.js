function gradeCalculator(grade) {
    if (grade >= 90 && grade <= 100) {
        console.log('A');
    } else if (grade >= 80 && grade <= 89) {
        console.log('B');
    } else if (grade >= 70 && grade <= 79) {
        console.log('C');
    } else if (grade >= 60 && grade <= 69) {
        console.log('D');
    } else if (grade >= 0 && grade <= 59) {
        console.log('F');
    }
}

gradeCalculator(95);
gradeCalculator(82);
gradeCalculator(76);
gradeCalculator(65);
gradeCalculator(45);