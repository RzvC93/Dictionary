const dictionary = [];

function validateAndAddWord() {
    const wordInput = document.querySelector(".input-word").value.trim();
    const descInput = document.querySelector(".input-desc").value.trim();
    const errorMsg = document.getElementById('add-error-msg');

    errorMsg.textContent = "";
    if (wordInput === "" || descInput === "") {
        errorMsg.textContent = 'Please fill in both fields.';
        return;
    }
    addWord(wordInput, descInput);
    document.querySelector(".input-word").value = "";
    document.querySelector(".input-desc").value = "";
}

function addWord(wordInput, descInput) {
    const entriesErrorMsg = document.getElementById('word-list-error-msg');
    entriesErrorMsg.textContent = "";
    if (dictionary.some(entry => entry.word === wordInput)) {
        entriesErrorMsg.textContent = 'This word is already in the list.';
    } else {
        dictionary.push({word: wordInput, description: descInput});
        displayEntries();
    }
}

function displayEntries() {
    const entryList = document.getElementById('word-list');
    entryList.innerHTML = "";
    dictionary.forEach(entry => {
        const listItem = document.createElement("li");
        const wordSpan = document.createElement("span");
        wordSpan.textContent = entry.word;
        listItem.appendChild(wordSpan);
        listItem.appendChild(document.createTextNode(`: ${entry.description}`));
        entryList.appendChild(listItem);
        entryList.appendChild(document.createElement("hr"));
    });
}

function searchWord() {
    const searchInput = document.getElementById('search-input').value.trim();
    const resultOutput = document.getElementById('result-output');
    const resultErrorMsg = document.getElementById('result-error-msg');

    resultOutput.innerHTML = "";
    resultErrorMsg.textContent = ""; 

    if (searchInput === "") {
        resultErrorMsg.textContent = "Please enter a word to search.";
        return;
    }

    const foundWord = dictionary.find(entry => entry.word.toLowerCase() === searchInput.toLowerCase());
    if (foundWord) {
        const wordSpan = document.createElement("span");
        wordSpan.textContent = foundWord.word;
        resultOutput.appendChild(wordSpan);
        resultOutput.appendChild(document.createTextNode(`: ${foundWord.description}`));
    } else {
        resultErrorMsg.textContent = "Word not found.";
    }

    document.getElementById('search-input').value = "";
}