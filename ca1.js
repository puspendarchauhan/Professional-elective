function sum(transactions) {
    return transactions.reduce((acc, curr) => {
        if (curr.amount > 0) {
            acc.income += curr.amount;
        } else {
            acc.expense += (-curr.amount);   
        }
        return acc;
    }, { income: 0, expense: 0 });
}

function handleSubmit(text, amount, transactions) {
    if (!text || amount === 0) return transactions;

    let maxId = transactions.length
        ? Math.max(...transactions.map(t => t.id))
        : 0;

    let newTransaction = {
        id: maxId + 1,
        text: text,
        amount: amount
    };

    return [...transactions, newTransaction];
}

function renderTransactions(transactions) {
    return transactions.map(t => `${t.text} : ${t.amount}`);
}

function deleteTransaction(transactions, id) {
    return transactions.filter(t => t.id !== id);
}

function processData(input) {
    let lines = input.trim().split("\n").map(l => l.trim());
    let index = 0;

    let n = Number(lines[index++]);
    let transactions = [];

    for (let i = 0; i < n; i++) {
        let [text, amount] = lines[index++].split(" ");
        transactions.push({
            id: i + 1,
            text: text,
            amount: Number(amount)
        });
    }

    let newText = lines[index++];
    let newAmount = Number(lines[index++]);
    let deleteId = Number(lines[index++]);

    transactions = handleSubmit(newText, newAmount, transactions);

    transactions = deleteTransaction(transactions, deleteId);

    let totals = sum(transactions);
    let renderedList = renderTransactions(transactions);

    let output = {
        transactions,
        totals,
        renderedList
    };

    console.log(JSON.stringify(output, null, 2)); 
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";

process.stdin.on("data", input => _input += input);

process.stdin.on("end", () => processData(_input));