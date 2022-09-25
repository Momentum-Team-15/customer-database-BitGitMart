const customerContainer = document.querySelector("#customerContain")

function buildDirectory(customerArray){
    for (let customer of customerArray) {
        let customerDiv = document.createElement("div"); 
        customerDiv.classList.add("customer"); 
    

        function capitalizeFirstLetter(string) {
            const capitalized = str.charAt(0).toUpperCase() + str.slice(1); 
        } 

        let name = document.createElement("p"); 
        name.innerText = `${capitalizeFirstLetter(customer.name.title)} ${customer.name.first} ${customer.name.last}`;

        let location = document.createElement("p"); 
        location.innerText = `${customer.location.city} ${customer.location.state} ${customer.location.country} ${customer.location.postcode}`; 

        let email = document.createElement("p"); 
        email.innerText = `${customer.email}`; 

        let birth = document.createElement("p"); 
        birth.innerText = `${moment(customer.dob.date).format("MMM Do YYYY")}`;

        let large = document.createElement("img"); 
        large.src = `${customer.picture.large}`; 

        let phone = document.createElement("p") 
        phone.innerText = `${customer.phone}`; 
   
        customerDiv.appendChild(name); 
        customerDiv.appendChild(location); 
        customerDiv.appendChild(email); 
        customerDiv.appendChild(birth); 
        customerDiv.appendChild(large); 
        customerDiv.appendChild(phone); 

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