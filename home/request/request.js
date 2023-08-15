console.log("Hey! I'm working!");

let submitButton = document.querySelector("#submit-button");

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let formData = document.getElementById('entire-form').innerHTML;
    $.post("/request",{data:formData})
})