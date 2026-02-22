const colorPicker = document.querySelector('#colorPicker');
const previewBox = document.querySelector('#previewBox');
const historyList = document.querySelector('#historyList');
const clearBtn = document.querySelector('#clearBtn');

// 1. Real-time Preview
colorPicker.addEventListener('input', () => {
    previewBox.style.backgroundColor = colorPicker.value;
});

// 2. Add to History when the user finishes selecting
colorPicker.addEventListener('change', () => {
    const selectedColor = colorPicker.value;
    
    // Create the history 
    const li = document.createElement('li');
    li.style.color = selectedColor;
    li.textContent = `Color: ${selectedColor}`;
    
    // style
    li.style.borderLeft = `10px solid ${selectedColor}`;
    li.style.paddingLeft = "5px";
    li.style.marginBottom = "5px";

    historyList.appendChild(li);
});

//Clear History
clearBtn.addEventListener('click', () => {
    historyList.innerHTML = ''; 
});