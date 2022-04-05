const API_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

const displaybutton = document.getElementById("displayButton");
let i;
let mainUsers;
let clients;
let table = document.getElementById("customer-table");


displaybutton.addEventListener("click", displayInCustomersInTable);

function displayInCustomersInTable(){    

    fetch(API_ENDPOINT)
    .then((response) => {
        return response.json();//Always use this to convert this to proper format
    })
    .then((users)=> {
        clients = users;
        for (i=0; i<clients.length; i++) {
            display(clients[i]);
        }
    })
    .catch((error) => {
        console.log(error.message);
    })
    .finally(()=> {
        console.log("DONE");
    })
}

function display(aClient){

    let customerDataRow = document.createElement("tr");
    let customerDataCells1 = document.createElement("td");
    let customerDataCells2 = document.createElement("td");
    let customerDataCells3 = document.createElement("td");
    let customerDataCells4 = document.createElement("td");
    let customerDataCells5 = document.createElement("td");

    const {id, name, username, email, phone} = clients[i];
    customerDataCells1.innerHTML = id;
    customerDataCells2.innerHTML = name;
    customerDataCells3.innerHTML = username;
    customerDataCells4.innerHTML = email;
    customerDataCells5.innerHTML = phone;

    customerDataRow.appendChild(customerDataCells1);
    customerDataRow.appendChild(customerDataCells2);
    customerDataRow.appendChild(customerDataCells3);
    customerDataRow.appendChild(customerDataCells4);
    customerDataRow.appendChild(customerDataCells5);
    table.appendChild(customerDataRow);
}
