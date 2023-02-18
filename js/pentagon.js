function pentagonCalculation(incrasing) {
    
    // pentagon Calculations 
    const pentagon = (0.5 * 6 * 10);

    // pentagon result section
    const pentagonResult = document.getElementById('pentagon-result');
    pentagonResult.innerText = pentagon;
    pentagonResult.style.backgroundColor = 'red';
    pentagonResult.style.color = 'white';
}

// pentagon event handler section
document.getElementById('btn-pentagon').addEventListener('click', function () {
    pentagonCalculation();
});
