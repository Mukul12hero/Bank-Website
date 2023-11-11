// step: 1..................................
document.getElementById('deposit-btn').addEventListener('click', function () {

    // step: 2...............................
    const depositField = document.getElementById('deposit-field')
    //   console.log(depositField)
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    //   console.log(newDepositAmount)


    // step: 3...................................
    if(isNaN(newDepositAmount)){
        alert('please give a number')
        return;
      }

    // step: 4...................................
    depositField.value = '';

    // step: 5...................................
    const depositTotalElement = document.getElementById('deposit-total')
    // console.log(depositTotalElement)
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    // console.log(previousDepositTotal)


    // step: 6.......................................
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step: 7........................................
    const ballanceTotalElement = document.getElementById('ballance-total')
    // console.log(ballanceTotalElement)
    const previousBallanceTotalString = ballanceTotalElement.innerText;
    const previousBallanceTotal = parseFloat(previousBallanceTotalString)
    // console.log(previousBallanceTotal);

    // step: 8.............................................
    const currentBallanceTotal = previousBallanceTotal + newDepositAmount;
    ballanceTotalElement.innerText = currentBallanceTotal;

})