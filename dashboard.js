document.addEventListener('DOMContentLoaded', function() {
    const balanceDisplay = document.getElementById('currentBalance');
    const transactionsList = document.getElementById('transactionsList');
    const employeeForm = document.getElementById('employeeForm');
    const employeeName = document.getElementById('employeeName');
    const employeeAmount = document.getElementById('employeeAmount');

    let balance = 0;
    let transactions = [];

    function updateBalance() {
        balanceDisplay.textContent = `$${balance.toFixed(2)}`;
    }

    function addTransaction(type, amount, employee = '') {
        transactions.push({ type, amount, employee });
        const li = document.createElement('li');
        li.textContent = `${type}: $${amount.toFixed(2)} ${employee ? 'to ' + employee : ''}`;
        transactionsList.appendChild(li);
    }

    function handleTransaction(event) {
        event.preventDefault();
        const amount = parseFloat(employeeAmount.value);
        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }
        balance -= amount;
        addTransaction('Payment', amount, employeeName.value);
        updateBalance();
        employeeForm.reset();
    }

    employeeForm.addEventListener('submit', handleTransaction);

    // Initial balance setup
    balance = 1000; // Example initial balance
    updateBalance();
    addTransaction('Initial Balance', balance);
});
