// -------------------- Login --------------------
document.getElementById("loginForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  
  const username = document.getElementById("username")?.value;
  const password = document.getElementById("password")?.value;

  if(username === "Emilyhelina.private" && password === "emily1122@"){
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong credentials. Please try again.");
  }
});

// -------------------- Transactions --------------------
const transactions = [
  {date:"2023-01-15", type:"Deposit", amount:50000, status:"Completed"},
  {date:"2023-02-20", type:"Transfer", amount:12000, status:"Completed"},
  {date:"2023-03-18", type:"Deposit", amount:75000, status:"Completed"},
  {date:"2023-04-22", type:"Deposit", amount:30000, status:"Completed"},
  {date:"2023-05-10", type:"Transfer", amount:5000, status:"Completed"},
  {date:"2023-06-25", type:"Deposit", amount:80000, status:"Completed"},
  {date:"2023-07-12", type:"Transfer", amount:20000, status:"Completed"},
  {date:"2023-08-30", type:"Deposit", amount:60000, status:"Completed"},
  {date:"2023-09-18", type:"Transfer", amount:10000, status:"Completed"},
  {date:"2023-10-05", type:"Deposit", amount:45000, status:"Completed"},
  {date:"2023-11-22", type:"Deposit", amount:70000, status:"Completed"},
  {date:"2023-12-31", type:"Transfer", amount:15000, status:"Completed"},
  {date:"2024-01-10", type:"Deposit", amount:90000, status:"Completed"},
  {date:"2024-03-15", type:"Transfer", amount:25000, status:"Completed"},
  {date:"2024-05-20", type:"Deposit", amount:50000, status:"Completed"},
  {date:"2024-07-12", type:"Deposit", amount:75000, status:"Completed"},
  {date:"2024-09-05", type:"Transfer", amount:20000, status:"Completed"},
  {date:"2024-11-22", type:"Deposit", amount:100000, status:"Completed"},
  {date:"2025-01-05", type:"Deposit", amount:80000, status:"Completed"},
  {date:"2025-03-18", type:"Transfer", amount:30000, status:"Completed"},
  {date:"2025-06-10", type:"Deposit", amount:95000, status:"Completed"},
  {date:"2025-08-22", type:"Deposit", amount:40000, status:"Completed"},
  {date:"2025-10-15", type:"Transfer", amount:15000, status:"Completed"},
  {date:"2025-12-30", type:"Deposit", amount:120000, status:"Completed"}
];

// Calculate balance
let balance = 4000000;
transactions.forEach(tx => {
  if(tx.type === "Deposit") balance += tx.amount;
  if(tx.type === "Transfer") balance -= tx.amount;
});

// Populate transactions dynamically
const balanceElement = document.getElementById("balance");
if(balanceElement) balanceElement.innerText = `Available Balance: $${balance.toLocaleString()}`;

const table = document.getElementById("transactionsTable");
if(table){
  transactions.forEach(tx => {
    const row = table.insertRow();
    row.insertCell(0).innerText = tx.date;
    row.insertCell(1).innerText = tx.type;
    row.insertCell(2).innerText = `$${tx.amount.toLocaleString()}`;
    row.insertCell(3).innerText = tx.status;
  });
}