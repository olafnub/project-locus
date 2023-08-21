console.log("Hey! I'm working!");

let submitButton = document.querySelector("#submit-button");

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("clicked");

    var offerObj = {};
    document.querySelectorAll("input").forEach((el)=>{
        console.log(el.id);
        offerObj[el.id]=el.value;

    });

    console.log(offerObj); // Display the form data object in the console

    $.post("/offer",{data:offerObj});
    
    window.location.href = ("/home/redirect/redirect.html");
})