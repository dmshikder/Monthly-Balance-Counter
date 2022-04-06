document.getElementById('calculate-btn').addEventListener('click', function(){
    const food= document.getElementById('food-value');
    const foodInput= parseFloat(food.value);
    
    const rent= document.getElementById('rent-value');
    const rentInput= parseFloat(rent.value);
    const cloths= document.getElementById('cloths-value');
    const clothsInput= parseFloat(cloths.value);
    const incomeValue= document.getElementById('income-value');
    const totalIncome= parseFloat(incomeValue.value);

// total expenses

    let totalExpense= document.getElementById('total-expenses');
    
    const totalExpensesText = totalExpense.innerText;
  
    let totalExpenses= foodInput + rentInput + clothsInput;
    totalExpense.innerText = totalExpenses;

    // balance 

    const balance= document.getElementById('balance');
    const balanceText= parseFloat(balance.innerText);
    const totalBalance= totalIncome - totalExpenses;
    balance.innerText= totalBalance;


    food.value = '';
    rent.value = '';
    cloths.value = '';


})











// console.log(clothsInput) 

