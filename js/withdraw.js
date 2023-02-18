document.getElementById('btn-withdraw').addEventListener('click', function(){
    //
    const totalWithdraw = document.getElementById('withdraw-field');
    const newTotalWidthdrawString = totalWithdraw.value;
    const newTotalWithdraw = parseFloat(newTotalWidthdrawString);
    
    //
    const previousWithdraw = document.getElementById('withdraw-total');
    const previousWithdrawString = previousWithdraw.innerText;
    const totalPreviousWithdraw = parseFloat(previousWithdrawString);

    //
    const withdraw = newTotalWithdraw + totalPreviousWithdraw;
    previousWithdraw.innerText = withdraw;

    //
    const newBalance = document.getElementById('balance-total');
    const newbalanceString = newBalance.innerText;
    const totalBalance = parseFloat(newbalanceString);

    //
    const newTotalBalance = totalBalance - withdraw;
    newBalance.innerText = newTotalBalance

    //
    totalWithdraw.value = '';
})