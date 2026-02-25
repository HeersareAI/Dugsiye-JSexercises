const fromText = document.querySelector("#fromText");
const toText = document.querySelector("#toText");
const translateBtn = document.querySelector("#translateBtn");
const fromLang = document.querySelector("#fromLang");
const toLang = document.querySelector("#toLang");

async function translate() {
    let text = fromText.value;
    let translateFrom = fromLang.value;
    let translateTo = toLang.value;

    if (!text) return;

    toText.placeholder = "Translating...";

    // Using a public API (MyMemory API as an example)
    const apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // Update the UI with the result
        toText.value = data.responseData.translatedText;
    } catch (error) {
        console.error("Translation Error:", error);
        toText.value = "Error: Could not reach API.";
    }
}

translateBtn.addEventListener("click", translate);