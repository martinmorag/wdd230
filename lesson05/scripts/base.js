const placement = document.querySelector('#favchap');
const theButton = document.querySelector('button');
const theList = document.querySelector('#list');

/* load info */
window.addEventListener('load', () => {
    const savedChapters = JSON.parse(localStorage.getItem('chapters')) || [];
    savedChapters.forEach((chapter) => {
        addChapter(chapter);
    });
});

theButton.addEventListener('click', () => {
    const input = placement.value.trim();
    const regex = /^([^0-9]+)([0-9]+)$/; 

    if (regex.test(input)) {
        const [, text, number] = input.match(regex);
        addChapter(text, parseInt(number, 10));
        placement.value = '';
    } else {
        const messageLi = document.createElement('li');
        messageLi.textContent = 'Please insert your favorite book of the Book of Mormon followed by a chapter';
        theList.appendChild(messageLi);
        setTimeout(() => {
            theList.removeChild(messageLi);
        }, 3000);
    }
});

/* function to save and remove chapters */
function addChapter(chapterName, chapterNumber) {
    const li = document.createElement('li');
    li.textContent = `${chapterName} - Chapter ${chapterNumber}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    deleteButton.addEventListener('click', () => {
        theList.removeChild(li);
        saveChapters();
    });

    li.appendChild(deleteButton);
    theList.appendChild(li);

    saveChapters();
}

function saveChapters() {
    const chapters = Array.from(theList.children).map((li) => li.textContent);
    localStorage.setItem('chapters', JSON.stringify(chapters));
}

placement.focus();
