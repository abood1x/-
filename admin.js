let poems = [];
let stories = [];

// دالة لإضافة قصيدة جديدة
function addPoem() {
    const title = document.getElementById('poem-title').value.trim();
    const content = document.getElementById('poem-content').value.trim();

    if (title && content) {
        const poem = { title, content };
        poems.push(poem);
        displayPoems();
        document.getElementById('poem-title').value = '';
        document.getElementById('poem-content').value = '';
    } else {
        alert('يرجى ملء جميع الحقول.');
    }
}

// دالة لعرض القصائد
function displayPoems() {
    const poemsContainer = document.getElementById('poems-container');
    poemsContainer.innerHTML = '';

    poems.forEach((poem, index) => {
        const poemDiv = document.createElement('div');
        poemDiv.className = 'poem';
        poemDiv.innerHTML = `
            <h3>${poem.title}</h3>
            <p>${poem.content}</p>
            <button onclick="deletePoem(${index})">حذف</button>
        `;
        poemsContainer.appendChild(poemDiv);
    });
}

// دالة لحذف قصيدة
function deletePoem(index) {
    poems.splice(index, 1);
    displayPoems();
}

// دالة لإضافة قصة جديدة
function addStory() {
    const title = document.getElementById('story-title').value.trim();
    const content = document.getElementById('story-content').value.trim();

    if (title && content) {
        const story = { title, content };
        stories.push(story);
        displayStories();
        document.getElementById('story-title').value = '';
        document.getElementById('story-content').value = '';
    } else {
        alert('يرجى ملء جميع الحقول.');
    }
}

// دالة لعرض القصص
function displayStories() {
    const storiesContainer = document.getElementById('stories-container');
    storiesContainer.innerHTML = '';

    stories.forEach((story, index) => {
        const storyDiv = document.createElement('div');
        storyDiv.className = 'story';
        storyDiv.innerHTML = `
            <h3>${story.title}</h3>
            <p>${story.content}</p>
            <button onclick="deleteStory(${index})">حذف</button>
        `;
        storiesContainer.appendChild(storyDiv);
    });
}

// دالة لحذف قصة
function deleteStory(index) {
    stories.splice(index, 1);
    displayStories();
}

// ربط الأزرار بدوال الإضافة
document.getElementById('add-poem-btn').addEventListener('click', addPoem);
document.getElementById('add-story-btn').addEventListener('click', addStory);
