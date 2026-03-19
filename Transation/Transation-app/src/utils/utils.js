
export function sum(transactions) {
  return transactions.reduce(
    (acc, t) => {
      const amt = Number(t.amount) || 0;

      if (t.type === "income") acc.income += amt;
      if (t.type === "expense") acc.expense += amt;

      return acc;
    },
    { income: 0, expense: 0 }
  );
}