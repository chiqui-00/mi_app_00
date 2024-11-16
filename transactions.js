document.addEventListener('DOMContentLoaded', function() {
    const transactionForm = document.getElementById('transactionForm');
    const transactionList = document.getElementById('transactionList');
    const currentBalance = document.getElementById('currentBalance');
    let balance = 0;

    transactionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const type = document.getElementById('transactionType').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const description = document.getElementById('description').value;

        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        if (type === 'deposit') {
            balance += amount;
        } else if (type === 'withdraw') {
            if (balance < amount) {
                alert('Insufficient funds.');
                return;
            }
            balance -= amount;
        }

        const transactionItem = document.createElement('li');
        transactionItem.textContent = `${type === 'deposit' ? '+' : '-'} $${amount.toFixed(2)} - ${description}`;
        transactionList.appendChild(transactionItem);

        currentBalance.textContent = `Current Balance: $${balance.toFixed(2)}`;

        transactionForm.reset();
    });
});
