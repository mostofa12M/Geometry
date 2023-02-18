// step: 1 add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step: 2 get the deposit amount from the deposit field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // step: 3 get the curent deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepostiTotalString = depositTotalElement.innerText;
    const previousDepostiTotal = parseFloat(previousDepostiTotalString);

    // step: 4 add numbers to set the total deposit
    const currentDepositTotal = previousDepostiTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    // step: 5 get the total amount from the total balance field
    const totalBalance = document.getElementById('balance-total');
    const balanceString = totalBalance.innerText;
    const balance = parseFloat(balanceString);

    // step: 6 calculate balance & deposit
    const newBalance = balance + currentDepositTotal;
    totalBalance.innerText = newBalance;

    // step: 4 clear deposit value amount
    depositField.value = '';
})