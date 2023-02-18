function ractangleCalculation(incrasing) {

    // ractangle base input section
    const ractangleWidht = document.getElementById('rectangle-width');
    const ractangleWidhtStrng = ractangleWidht.value;
    const ractangleAmount = parseFloat(ractangleWidhtStrng);

    // ractangle height input section 
    const ractangleHight = document.getElementById('rectangle-length');
    const ractangleHightSractangle = ractangleHight.value;
    const ractangleHightAmount = parseFloat(ractangleHightSractangle);

    // ractanglele Validate inputs
    if (isNaN(ractangleAmount) || isNaN(ractangleHightAmount)) {
        alert("Please enter valid numbers.");
        return;
    }
    if (ractangleAmount <= 0 || ractangleHightAmount <= 0) {
        alert("must be greater than 0.");
        return;
    }
    if (ractangleAmount < 0 || ractangleHightAmount < 0) {
        alert("base and height cannot be negative.");
        return;
    }

    // ractangle Calculations 
    const ractangle = ractangleAmount * ractangleHightAmount;

    // ractangle result section
    const ractangleResult = document.getElementById('rectangle-result');
    ractangleResult.innerText = ractangle;

    // result background color style 
    document.getElementById('rectangle-result').style. backgroundColor = 'red';
    document.getElementById('rectangle-result').style. color = 'white';


    // ractangle input clear section
    const inputFields = document.querySelectorAll('input');
    inputFields.forEach(inputField => {
        inputField.value = '';
    });
}

// ractangle event handler section
document.getElementById('btn-rectangle').addEventListener('click', function () {
    ractangleCalculation();
})