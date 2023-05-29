
const submitButton = document.getElementById("submit__button");
const ratingNumber = document.querySelectorAll(".rating__number");
const ratingCard = document.querySelector(".rating__card");
const thankyouCard = document.querySelector(".thankyou__card");
const thankyouRating = document.querySelector(".thankyou__rating");

let ratingValue;

// rating message
let message;

const ratingHandler = (event) => {
    ratingValue = event.target.innerText;
    message = `<p class="rating__message">You selected ${ratingValue} out of 5</p>`;
}

ratingNumber.forEach((item) => {
    item.addEventListener("click", ratingHandler);
})

const page = document.createElement("p")
page.textContent = "Please enter your rating!"
page.className = "error__message";

// clickhandler function
const clickHandler = () => {
    if(ratingValue) {
        submit(ratingValue);
    } else {
        console.log("Please enter your rating!")
        ratingCard.append(page)
    }
}

// Submit Button Click Event
submitButton.addEventListener("click", clickHandler);


// Submission Phase
function submit(ratingValue) {
    ratingCard.style.display = "none";
    thankyouCard.style.display = "flex";
    thankyouRating.innerHTML = message;
    console.log(ratingValue);
}
