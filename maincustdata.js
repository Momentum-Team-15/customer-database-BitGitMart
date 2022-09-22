//const moment = require("./moment");

const customerContainer = document.querySelector("#customerContain")
// 

function buildDirectory(customerArray){
    for (let customer of customerArray) {
        let customerDiv = document.createElement("div"); 
        customerDiv.classList.add("customer"); 
    

        function capitalizeFirstLetter(string) {
            const capitalized = str.charAt(0).toUpperCase() + str.slice(1); 
        } 

        let name = document.createElement("p"); 
        name.innerText = `${customer.name.title} ${customer.name.first} ${customer.name.last}`;

        let location = document.createElement("p"); 
        location.innerText = `${customer.location.city} ${customer.location.state} ${customer.location.country} ${customer.location.postcode}`; 

        let email = document.createElement("p"); 
        email.innerText = `${customer.email}`; 

        customerDiv.appendChild(name); 
        customerDiv.appendChild(location); 
        customerDiv.appendChild(email); 
    

        customerContainer.appendChild(customerDiv); 
    }
} 

buildDirectory(customers)