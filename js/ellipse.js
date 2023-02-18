function ellipseCalculation(incrasing) {

    
    // ellipse Calculations 
    const ellipse = (3.14 * 10 * 4).toFixed(2);

    // ellipse result section
    const ellipseResult = document.getElementById('ellipse-result');
    ellipseResult.innerText = ellipse;
    document.getElementById('ellipse-result').style. backgroundColor = 'red';
    document.getElementById('ellipse-result').style. color = 'white';

   
}

// ellipse event handler section
document.getElementById('btn-ellipse').addEventListener('click', function () {
    ellipseCalculation();
})