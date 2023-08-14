//target the html element
const BASE_URL = 'http://localhost:5000/';

const dataList = document.getElementById('dataList');
const noData = document.getElementById('noData');

const fetchStories = async() => {
    const response = await fetch(BASE_URL + 'getTimeStories');
    const data = await response.json();

    if(!data.length) {
        return noData.innerHTML = 'No featured stories'
    }

    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="list-container">
                <h2>${item.title}</h2>
                <a href="${item.link}" target="_blank">Visit link</a>
            </div>
        `;
        dataList.appendChild(listItem);
    });
}

fetchStories();

