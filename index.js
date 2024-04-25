document.addEventListener("DOMContentLoaded", () => {
    fetchGetEVData();
    createRandomBtn(); // call the function to push random button 
})
//this is to get data from db.json
function fetchGetEVData() {
    fetch("http://localhost:3000/EV")
    .then(resp => resp.json())
    .then(data => {
      console.log("Data fetched successfully:", data); // Log fetched data to console
            data.forEach(EV => showCars(EV));
        })
    }
  //create a card
function showCars(EV) {
  //get ev-collection 
    const evCollection = document.getElementById("ev-collection");
        const div = document.createElement("div")
        div.classList.add("card");
  //create images variable to add to div 
    const img = document.createElement("img")
        img.src = EV.ImageLink
        img.classList.add("car-img")
    
 //create h2 variable to give title for card
    const h2 = document.createElement("h2")
    h2.textContent = EV.Company
  
 //create p document for model, price, and range
    const p = document.createElement("p")
        p.textContent = EV.Model

 // create p2 for price 
    const price = document.createElement("p2")
        price.textContent = EV.Price  

 //create p3 for range
    const range = document.createElement("p3")
        range.textContent = EV.Range

 // create a form for user's info name, email, the day to test drive, and submit button
    const form = document.createElement("form")
        form.classList.add("comment-form")
 //create a label for name
        const userName = document.createElement("Label")
            userName.textContent = "Name: ";
            const userInput = document.createElement("input")
            userName.type = "text"
            userInput.name = "name";
  //create a label for email          
        const userEmail = document.createElement("label")
            userEmail.textContent = "Email: ";
            const inputEmail = document.createElement("input")
            inputEmail.type = "email";
            userEmail.name = "email";
 // create a email label and input
        const dateLabel = document.createElement("label")
        dateLabel.textContent = "Schedule Test Drive: "
        const dateInput = document.createElement("input")
        dateInput.type = "date";
        dateInput.name = "date";
 //create a submit button to submit form 
        const submitBtn = document.createElement("input")
        submitBtn.type = "submit"
        submitBtn.value = "submit"
 // handling submit
            const handleSubmit = (event) => {
                event.preventDefault();
                const name = userInput.value;
                const email = inputEmail.value;
                const date = dateInput.value;
                if (!name || !email || !date) {
                    alert("Please complete all fields before submitting the form.");
                    return;
                  }

                alert("Your Test Drive reservaton has been completed");
                form.reset();  
            };
    form.addEventListener("submit", handleSubmit)
        
//going to append the form to the card DOM
    form.appendChild(userName);
    form.append(userInput);
//create a break to have another input bellow
    form.appendChild(document.createElement("br"))
//going to append the email form to the card DOM    
    form.appendChild(userEmail);
    form.append(inputEmail);
//going to create a break to put date label and input bellow
    form.appendChild(document.createElement("br"))
//going to append date label and input to the DOM
    form.appendChild(dateLabel)
    form.append(dateInput);
//adding a break to put submit button bellow 
    form.appendChild(document.createElement("br"))
//appending submit button to form 
    form.appendChild(submitBtn)

//connect the data to html div to be able to send to the DOM       
div.append (img, h2, p, price, range, form)
    evCollection.append(div)
}
function createRandomBtn() {
    const randomBtn = document.getElementById("randomBtn");
    randomBtn.classList.add("random-btn");
  
    randomBtn.addEventListener("click", () => {
      const cards = document.querySelectorAll(".card");
      const randomIndex = Math.floor(Math.random() * cards.length);
  
      cards.forEach((card, index) => {
        if (index === randomIndex) {
          card.style.display = "block"; // Show the selected card
        } else {
          card.style.display = "none"; // Hide the other cards
        }
      });
    });
  }