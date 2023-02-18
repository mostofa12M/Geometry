function rhombusCalculation(incrasing) {

    
    // rhombus Calculations 
    const rhombus = 0.5 * 16 * 8;

    // rhombus result section
    const rhombusResult = document.getElementById('rhombus-result');
    rhombusResult.innerText = rhombus;
    document.getElementById('rhombus-result').style. backgroundColor = 'red';
    document.getElementById('rhombus-result').style. color = 'white';

   
}

// rhombus event handler section
document.getElementById('btn-rhombus').addEventListener('click', function () {
    rhombusCalculation();
})