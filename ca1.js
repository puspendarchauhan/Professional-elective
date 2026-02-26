
// // for(let i = 0; i <= 5; i++){
// //     if(i==2){
// //         continue;
// //     }
// //     if(i===3){
// //         break;
// //     }
    
// //     console.log(i)
// // }
// // let num = 10
// // let str = 'hello'
// // let arr = [1,2,3]
// // let obj = {name:"robin", age:10};
// // let e = null
// // let iosk = true
// // console.log(typeof num)
// // console.log(typeof str)
// // console.log(typeof arr)
// // console.log(typeof e)
// // console.log(typeof iosk)
// // Function definition
// // function Name() {
// //   console.log("Hello my name is Puspendar");
// // }

// // Name();
// //  function add(a,b){
// //     return a + b
// //  }
// //  console.log(add())   
// // let arr = [1,2,3,4,5,6]
// // for(let i = 0; i < arr.length;i++){
// //    if(arr[i] % 2 == 0){
// //       console.log(arr[i])
// //    }
// // }

// // const person = {
// //    key:"hello"}
// //    console.log(person.key)

// // const arr = ["html", " css", "js"];
// // arr.push("python")
// // console.log(arr[3])
// // const sales = "toyota"

// // function carType(name){
// //    return name === "honda"? name:"soryy we dont sell this car"
// // }
// // const car = { carn:" city", getcar: carType("honda"), special: sales
// // }
// // console.log(car.carn)
// // console.log(car.getcar)
// // console.log(car.special)

// const color = ["red", "black", "blue"]
// color.forEach((i) => console.log(i))
// let arr = [1,2,3,4]
// arr.forEach((i,a) => console.log(i+3,a))
// // {
// //    arr[i] +=3
// // }
// // console.log(arr)

// for(const i in color){
//    console.log(i, color[i])
// }
// const user = {name:"robin",age : 25, hobby: "coding"}
// for(const index in user){
//    console.log(index,user[index])
// }



// npx create-react-app MYfirstApp

// npx create vite@latest

function sum(transactions) {
  return transactions.reduce(
    (acc, t) => {
      const amt = Number(t.amount) || 0;
      if (amt > 0) acc.income += amt;
      else if (amt < 0) acc.expense += Math.abs(amt);
      return acc;
    },
    { income: 0, expense: 0 }
  );
}

function handleSubmit(text, amount, transactions) {
  const cleanText = (text ?? "").trim();
  const amt = Number(amount);

  // Validation rules
  if (!cleanText || !Number.isFinite(amt) || amt === 0) return transactions;

  // id = max existing id + 1
  let maxId = 0;
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].id > maxId) maxId = transactions[i].id;
  }

  const newTx = { id: maxId + 1, text: cleanText, amount: amt };

  // Add immutably
  return [...transactions, newTx];
}

function renderTransactions(transactions) {
  return transactions.map((t) => `${t.text} : ${t.amount}`);
}

function deleteTransaction(transactions, id) {
  const targetId = Number(id);
  return transactions.filter((t) => t.id !== targetId);
}

function processData(input) {
  const tokens = input.trim().split(/\s+/);
  let i = 0;

  const N = Number(tokens[i++]) || 0;

  let transactions = [];
  for (let k = 0; k < N; k++) {
    const text = tokens[i++] ?? "";
    const amount = Number(tokens[i++]);
    transactions.push({ id: k + 1, text, amount });
  }

  const newText = tokens[i++] ?? "";
  const newAmount = tokens[i++] ?? "0";
  const deleteId = tokens[i++] ?? "0";

  // Simulate React logic
  transactions = handleSubmit(newText, newAmount, transactions);
  transactions = deleteTransaction(transactions, deleteId);

  const totals = sum(transactions);
  const renderedList = renderTransactions(transactions);

  const result = {
    transactions,
    totals,
    renderedList,
  };

  console.log(JSON.stringify(result, null, 2));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
  _input += input;
});
process.stdin.on("end", function () {
  processData(_input);
});