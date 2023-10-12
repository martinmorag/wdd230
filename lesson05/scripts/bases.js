document.addEventListener('DOMContentLoaded', function() {
    const placement = document.querySelector('#favchap');
    const theButton = document.querySelector('button');
    const theList = document.querySelector('#list');

    // Load saved chapters from local storage on page load
    const savedChapters = JSON.parse(localStorage.getItem('chapters')) || [];

    function addChapter(chapterName) {
        const li = document.createElement('li');
        li.textContent = chapterName;

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

    theButton.addEventListener('click', () => {
        const chapter = placement.value.trim();
        if (chapter !== '') {
            addChapter(chapter);
            placement.value = '';
            placement.focus();
        } else {
            alert('Please insert your favorite chapter of the Book of Mormon');
        }
    });

    // Load saved chapters into the list only if there are no existing list items
    if (theList.children.length === 0) {
        savedChapters.forEach((chapter) => {
            addChapter(chapter);
        });
    }

    function saveChapters() {
        const chapters = Array.from(theList.children).map((li) => li.textContent);
        localStorage.setItem('chapters', JSON.stringify(chapters));
    }

    placement.focus();
});
