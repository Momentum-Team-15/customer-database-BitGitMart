const customerContainer = document.querySelector("#customerContain")

function buildDirectory(customerArray){
    for (let customer of customerArray) {
        let customerDiv = document.createElement("div"); 
        customerDiv.classList.add("customer"); 

        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }

        let name = document.createElement("p"); 
        name.innerText = `${capitalize(customer.name.first)} ${capitalize(customer.name.last)}`;

        let street = document.createElement("p")
        street.innerText = `Address: ${customer.location.street.number} ${customer.location.street.name},`; 

        let location = document.createElement("p"); 
        location.innerText = `${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`; 

        let email = document.createElement("p"); 
        email.innerText = `Email: ${customer.email}`; 

        let birth = document.createElement("p"); 
        birth.innerText = `DOB: ${moment(customer.dob.date).format("MMM Do YYYY")}`;

        let large = document.createElement("img"); 
        large.src = `${customer.picture.large}`; 

        let phone = document.createElement("p") 
        phone.innerText = `${customer.phone}`; 

        let registered = document.createElement("p")
        registered.innerText = `Registered: ${moment(customer.registered.date).format("MMM Do YYYY")}`
   
        customerDiv.appendChild(name); 
        customerDiv.appendChild(street); 
        customerDiv.appendChild(location); 
        customerDiv.appendChild(email); 
        customerDiv.appendChild(birth); 
        customerDiv.appendChild(large); 
        customerDiv.appendChild(phone); 
        customerDiv.appendChild(registered); 

        customerContainer.appendChild(customerDiv); 
    }
} 

buildDirectory(customers)
  

  function hidePeople(container) {
    let personDivs = container.querySelectorAll(".customer");
    for (let div of personDivs) {
      container.removeChild(div);
    }}

    function showPeople(container) {
        let personDivs = container.querySelectorAll(".customer"); 
        for (let div of personDivs) {
            container.addChild(div);
        }
      }

  const showMeButton = document.querySelector("#test")
  
  showMeButton.addEventListener("click", (event) => {
    if (showMeButton.innerText === "Pop the peepz!") {
      hidePeople(customerContainer);
      showMeButton.innerText = "Peep ye peeps!";
    } else {
      showPeople(customerContainer);
      showMeButton.innerText = "Pop the Peepz!";
    }
  })