function percentage(){
    const incomeValue= document.getElementById('income-value');
    const totalIncome= parseFloat(incomeValue.value);
    const saveInput= document.getElementById('save-percentage');
    const saveInputValue=parseFloat(saveInput.value); 
    let totalSave= (totalIncome / 100) * saveInputValue;
    return totalSave;
   
}


document.getElementById('calculate-btn').addEventListener('click', function(){


    const food= document.getElementById('food-value');
    const foodInput= parseFloat(food.value);
   
    const rent= document.getElementById('rent-value');
    const rentInput= parseFloat(rent.value);
    const cloths= document.getElementById('cloths-value');
    const clothsInput= parseFloat(cloths.value);
    const incomeValue= document.getElementById('income-value');
    const totalIncome= parseFloat(incomeValue.value);

    const totalExpense= document.getElementById('total-expenses');
    
    
     if (foodInput >= 0 && rentInput >= 0 && clothsInput >= 0 && totalIncome >= 0 ){
        
        // total expenses

    const totalExpensesText = totalExpense.innerText;
  
    let totalExpenses= foodInput + rentInput + clothsInput;
    totalExpense.innerText = totalExpenses;

    // balance 

    const balance= document.getElementById('balance');
    const balanceText= parseFloat(balance.innerText);
    const totalBalance= totalIncome - totalExpenses;
    balance.innerText= totalBalance;
    }
     
    else{
       document.getElementById('negative-error').style.display='block'
    }

    if(totalIncome < totalExpense.innerText){
        document.getElementById('money-spend').style.display= 'block'
        // document.getElementById('negative-error').style.display='none'
        document.getElementById('money-save').style.display= 'none'
    }

   
    food.value = '';
    rent.value = '';
    cloths.value = '';
   
})


// saving section

document.getElementById('save-btn').addEventListener('click', function(){
        
    const saving= document.getElementById('saving-amount');
        percentage();
    
    if(balance.innerText >  percentage()){
        const savingAmountText = saving.innerText;
    saving.innerText = percentage();
       
    }
    else {
        document.getElementById('money-save').style.display= 'block'
        document.getElementById('money-spend').style.display= 'none'
    }


    // remaining balance

    const remainingBalance= document.getElementById('remaining-balance');
    const remainingBalanceText= remainingBalance.innerText;
    let totalRemain= balance.innerText - saving.innerText;
    remainingBalance.innerText = totalRemain;


})


