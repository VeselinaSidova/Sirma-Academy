function calculateArea(figure, a, b) {
    let area = 0;
    switch (figure) {
        case 'square':
            area = a * a;
            break;
        case 'rectangle':
            area = a * b;
            break;
        case 'circle':
            let radius = a;
            area = Math.PI * radius * radius;
            break;
        case 'triangle':
            area = a / 2 * b;
            break;
    }
    console.log(area.toFixed(2));
}

calculateArea("square", 5);
calculateArea("rectangle", 10, 3.5);
calculateArea("triangle", 4.5, 20);
calculateArea("circle", 10);
