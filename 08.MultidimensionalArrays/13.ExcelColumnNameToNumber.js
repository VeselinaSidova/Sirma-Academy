function convertExcelcolumnToNumber(columnLetters) {
    const aASCII = 65;
    let columnNumber = 0;

    for (let i = 0; i < columnLetters.length; i++) {
        columnNumber = columnNumber * 26 + (columnLetters.charCodeAt(i) - aASCII + 1);
    }

    console.log(columnNumber);
}

convertExcelcolumnToNumber('AB');
convertExcelcolumnToNumber('A');
convertExcelcolumnToNumber('C');
convertExcelcolumnToNumber('CZ');
convertExcelcolumnToNumber('MM');
convertExcelcolumnToNumber('AAA');
