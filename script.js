const dictionary = [];

function validateAndExtractInputs() {
    const wordInput = document.querySelector(".input-key-word input");
    const descriptionInput = document.querySelector(".input-explanation textarea");

    if (wordInput.value.trim() === "" && descriptionInput.value.trim() === "") {
        //console.log("Both fields are empty. Please enter a word and a description.");
        alert("Both fields are empty. Please enter a word and a description.");
        return;
    }

    if (wordInput.value.trim() === "") {
        //console.log("The word field is empty. Please enter a word.");
        alert("The word field is empty. Please enter a word.");
        return;
    }

    if (descriptionInput.value.trim() === "") {
        //console.log("The description field is empty. Please enter a description.");
        alert("The description field is empty. Please enter a description.");
        return;
    }
    const keyWord = wordInput.value.trim();
    const definition = descriptionInput.value.trim();
    //console.log("Keyword: ", keyWord);
    //console.log("Definition: ", definition);

    addWordToDictionary(keyWord, definition);
    wordInput.value = "";
    descriptionInput.value = "";
}

function addWordToDictionary(keyWord, definition) {
    if (dictionary.some(entry => entry.word === keyWord)) {
        console.log("The word is already in the dictionary.");
        alert("The word is already in the dictionary.");
    } else {
        const wordEntry = {word: keyWord, description: definition};
        dictionary.push(wordEntry);
        //console.log("Congratulations, you have successfully added a new word to the dictionary!");
        //alert("Congratulations, you have successfully added a new word to the dictionary!");
        displayDictionary();
    }
}

function displayDictionary() {
    const dictionaryList = document.getElementById('dictionary-list');
    dictionaryList.innerHTML = "";
    //console.log("Displaying dictionary:", dictionary);
    dictionary.forEach(entry => {
        const listItem = document.createElement("li");
        const keyword = entry.word + ": ";
        listItem.innerHTML = `<span id="dictionary-keyword">${keyword}</span>${entry.description}`;
        dictionaryList.appendChild(listItem);
        const hr = document.createElement("hr");
        dictionaryList.appendChild(hr);
    });
}

function searchWordInDictionary() {
    const searchInput = document.getElementById('dictionar-search');
    const searchTerm = searchInput.value.trim();
    const searchResultDiv = document.getElementById('search-result');
    searchResultDiv.innerHTML = "";
    if (searchTerm === "") {
        searchResultDiv.textContent = "Please enter a word to search.";
        return;
    }
    const foundWord = dictionary.find(entry => entry.word.toLowerCase() === searchTerm.toLowerCase());

    if (foundWord) {
        searchResultDiv.innerHTML = `<span id="dictionary-keyword">${foundWord.word}</span>: ${foundWord.description}`;
    } else {
        searchResultDiv.textContent = "The word is not found in the dictionary.";
    }
    searchInput.value = '';
}