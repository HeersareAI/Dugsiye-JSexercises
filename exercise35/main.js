function changeImage() {
    const image = document.querySelector('#image');

    // Gathering User Input
    const url = prompt("Please enter your image URL:");
    const borderColor = prompt("Please enter your desired border color (e.g., 'red' or '#ff0000'):");
    const width = prompt("Enter width in pixels (e.g., 300):");
    const height = prompt("Enter height in pixels (e.g., 200):");
    const borderRadius = prompt("Enter border radius in pixels (e.g., 20):");

    // Applying Attributes
    if (url) {
        image.setAttribute('src', url);
    }

    // Applying Styles
    // Using Template Literals ensures the 'px' unit is appended correctly
    image.style.border = `5px solid ${borderColor}`;
    image.style.width = `${width}px`;
    image.style.height = `${height}px`;
    image.style.borderRadius = `${borderRadius}px`;
    
    // Static styles to make the changes "pop"
    image.style.padding = "10px";
    image.style.backgroundColor = '#cfc2dc';
    image.style.transition = "all 0.5s ease"; // Added for a smooth visual effect!
}