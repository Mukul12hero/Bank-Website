// step: 1.......................................
document.getElementById('withdraw-btn').addEventListener('click', function () {
    
    // step: 2......................................
    const withdrawField = document.getElementById('withdraw-field')
    //   console.log(withdrawField)
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)
    //   console.log(newWithdrawAmount)


    // step: 3...........................
    if(isNaN(newWithdrawAmount)){
      alert('please give a number')
      return;
    }

    // step: 4.......................................
    withdrawField.value = '';


    // step: 5.......................................
    const withdrawTotalElement = document.getElementById('withdraw-total')
    // console.log(withdrawTotalElement);
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)
    // console.log(previousWithdrawTotal)


    // step: 8......................................
    const ballanceTotalElement = document.getElementById('ballance-total')
    // console.log(ballanceTotalElement)
    const previousBallanceTotalString = ballanceTotalElement.innerText;
    const previousBallanceTotal = parseFloat(previousBallanceTotalString)
    // console.log(previousBallanceTotal);


    // step: 6........................................
    if(newWithdrawAmount > previousBallanceTotal){
        alert('bank e ato taka nai');
        return;
    }


    // step: 7.........................................
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    // step: 9...........................................
    const currentBallanceTotal = previousBallanceTotal - newWithdrawAmount;
    ballanceTotalElement.innerText = currentBallanceTotal;

})