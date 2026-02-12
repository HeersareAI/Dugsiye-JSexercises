const header = document.querySelector("#header");
    const text = document.querySelector(".text");

    console.log(header);
    console.log(text);



function changeContent() {
    const header = document.querySelector("#header");

            // Changing text content
    header.textContent = "Welcome to the DOM!";
}

        
function changeElement() {
    const text = document.querySelector(".text");
     // Changing HTML content
 text.innerHTML = "This content has been <strong>updated</strong>.";
}
function changeButton() {
    const text = document.querySelector("#text");
    text.innerHTML = "this is content has been  <strong>upploaded</strong>";
}
    