function paralallelogramCalculation(incrasing) {

    
    // paralallelogram Calculations 
    const paralallelogram = 10 * 12;

    // paralallelogram result section
    const paralallelogramResult = document.getElementById('parallelogram-result');
    paralallelogramResult.innerText = paralallelogram;
    document.getElementById('parallelogram-result').style. backgroundColor = 'red';
    document.getElementById('parallelogram-result').style. color = 'white';

   
}

// paralallelogram event handler section
document.getElementById('btn-parallelogram').addEventListener('click', function () {
    paralallelogramCalculation();
})