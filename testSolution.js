
// const commentForm = document.getElementById("comment-form");
//       commentForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//          //grab text from comment box
//          const commentInput = document.getElementById("comment");
//          const commentText = commentInput.value;
//          //getting the ul
//          const commentList = document.getElementById("comments");
//            //create li
//          const commentItem = document.createElement("li");
//          //adding the li tetcontent into ul
//          commentItem.textContent = commentText;
//             //appending commentList to the dom
//          commentList.appendChild(commentItem);
//    //clear the text in the box
//          commentInput.value = "";
//       })


// // Fetch EV data from the specified URL
// function fetchEVData() {
//     fetch("http://localhost:3000/EV")
//         .then(response => response.json())
//         .then(data => {
//             console.log("Data fetched successfully:", data);
//             data.forEach(EV => showCars(EV));
//         })
//         .catch(error => {
//             console.error('Error fetching the JSON data', error);
//         });
// }

// // Handle comment submission
// const commentForm = document.getElementById("comment-form");
// commentForm.addEventListener("submit", event => {
//     event.preventDefault();

//     // Grab the comment text from the input field
//     const commentInput = document.getElementById("comment-input");
//     const commentText = commentInput.value;

//     // Create a new list item for the comment
//     const commentItem = document.createElement("li");
//     commentItem.textContent = commentText;

//     // Append the comment item to the list
//     const commentList = document.getElementById("comment");
//     commentList.appendChild(commentItem);

//     // Clear the comment input field
//     commentInput.value = "";
// });


// const newDiv = document.createElement("div")
// newDiv.textContent = "This is new Element"
// document.getElementById("carModel").appendChild(newDiv)

// const ElementBtn = document.createElement("button")
// ElementBtn.textContent = newDiv.textContent;

// const parentElement = document.getElementById("carModel");
// parentElement.appendChild(ElementBtn);
