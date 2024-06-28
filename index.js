document.addEventListener("DOMContentLoaded", () => {
    fetchGetEVData();// ()=> defining the callback function to load html content to load
    createRandomBtn(); // call the function for random button to give random EV
  })
//dom Content Loaded is to load the html file 
//and when an event function is called it triggers an action
//This is to get/retrieve data from db.json
function fetchGetEVData() {
    fetch("http://localhost:3000/EV")
    .then(resp => resp.json())
    .then(data => {
            console.log("Data fetched successfully:", data); // Log fetched data json objects to console
            data.forEach(EV => showCars(EV));
        })
        //if promise failed to load data from json file
        //then it will show error 
        .catch(error => {
          console.error('Error fetching the json data', error)
        })
      }

//Create a card
function showCars(EV) {
//Fetch data for ev-collection HTML and create structure to cards
  const evCollection = document.getElementById("ev-collection");
    const div = document.createElement("div")
    div.classList.add("card");
//Create images variable to add to div 
  const img = document.createElement("img")
    img.src = EV.ImageLink
    img.classList.add("car-img")
    
 //Create h2 variable to give title for card
  const h2 = document.createElement("h2")
    h2.textContent = EV.Company
  
 //Create p document for model, price, and range
  const p = document.createElement("p")
    p.textContent = EV.Model

 //Create p for price 
  const price = document.createElement("p")
    price.textContent = EV.Price  

 //create p for range
  const range = document.createElement("p")
    range.textContent = EV.Range

 //Create a form for user's info name, email, the day to test drive, and submit button
  const form = document.createElement("form")
    form.classList.add("comment-form")
 //Create a label for name
  const userName = document.createElement("Label")
    userName.textContent = "Name: ";
  const userInput = document.createElement("input")
    userName.type = "text"
    userInput.name = "name";
//Create a label for email          
  const userEmail = document.createElement("label")
    userEmail.textContent = "Email: ";
  const inputEmail = document.createElement("input")
    inputEmail.type = "email";
    userEmail.name = "email";
//Create a email label and input
        const dateLabel = document.createElement("label")
        dateLabel.textContent = "Schedule Test Drive: "
        const dateInput = document.createElement("input")
        dateInput.type = "date";
        dateInput.name = "date";
//Create a submit button to submit form 
        const submitBtn = document.createElement("input")
        submitBtn.type = "submit"
        submitBtn.value = "submit"
//Handling submit function eventListener
function handleSubmit(event) {
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
//add like button 
  const likeBtns = document.createElement("button")
    likeBtns.textContent = "like";
    likeBtns.addEventListener("click", (event) => {
      event.preventDefault();
      alert(`You have liked the ${EV.Model}`)
    })

    
//callback
    form.addEventListener("submit", handleSubmit)      
//Going to append the form to the card DOM
    form.appendChild(userName);
    form.append(userInput);
//Create a break to have another input bellow
    form.appendChild(document.createElement("br"))
//Going to append the email form to the card DOM    
    form.appendChild(userEmail);
    form.append(inputEmail);
//Going to create a break to put date label and input bellow
    form.appendChild(document.createElement("br"))
//Going to append date label and input to the DOM
    form.appendChild(dateLabel)
    form.append(dateInput);
//Adding a break to put submit button bellow 
    form.appendChild(document.createElement("br"))
//Appending submit button to form 
    form.appendChild(submitBtn)

//Connect the data to html div to be able to send to the DOM       
div.append (img, h2, p, price, range, form, likeBtns)
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
