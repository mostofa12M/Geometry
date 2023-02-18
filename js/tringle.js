function tringleCalculation(incrasing) {

                // tringle base input section
    const tringleBase = document.getElementById('tringle-base');
    const tringleBaseString = tringleBase.value;
    const tringAmount = parseFloat(tringleBaseString);

                // tringle height input section 
    const tringleHight = document.getElementById('tringle-base');
    const tringleHightString = tringleHight.value;
    const tringleHightAmount = parseFloat(tringleHightString);


     // tringle Validate inputs
     if (isNaN(tringAmount) || isNaN(tringleHightAmount)) {
        alert("Please enter valid numbers.");
        return;
    }
    if (tringAmount <= 0 || tringleHightAmount <= 0) {
        alert("must be greater than 0.");
        return;
    }
    if (tringAmount < 0 || tringleHightAmount < 0) {
        alert("base and height cannot be negative.");
        return;
    }

                // tringle Calculations 
    const tringle = 0.5 * tringAmount * tringleHightAmount;

                // tringle result section
    const tringleResult = document.getElementById('tringle-result');
    tringleResult.innerText = tringle;

                // result style
    document.getElementById('tringle-result').style. backgroundColor = 'red';
    document.getElementById('tringle-result').style. color = 'white';

                // tringle input clear section
    const inputFields = document.querySelectorAll('input');
    inputFields.forEach(inputField => {
        inputField.value = '';
    });
}

                // tringle event handler section
document.getElementById('btn-tringle').addEventListener('click', function () {
    tringleCalculation();
})