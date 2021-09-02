import "../api/requestAPI/requestMainPoster";

let rememberBox;
let recentHTML = {
    html: null,
    posterdata: null,
    cnt: 0,
};


const viewMainPoster = (data) => {

    const section = document.createElement("section");

    section.className = "header__poster-container";

    const mainPosterTemplate = `
    <div class="header__main-poster">
        <h2 class="header__main-title"></h2>
        <div class="header__main-buttonBox">
            <button class="header__main-button"></button>
            <button class="header__main-button"></button>
            <button class="header__main-button"></button>
        </div>
    </div>
    `;

    if (recentHTML.html === null) {
        section.innerHTML = mainPosterTemplate;
    } else {
        section.innerHTML = recentHTML.html;
    }
    if (data !== undefined) {
        changePosterContent(data);
    }

    return section;
}

const changeMainPoster = (data, item, posterDiv, posterTitle) => () => {
    recentHTML.cnt = 1;
    posterTitle.textContent = data.title;
    posterDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`;

    if (rememberBox !== undefined) {
        rememberBox.style.backgroundColor = "rgb(127, 127, 127)";
    }
    item.style.backgroundColor = "white";
    rememberBox = item;

    if (recentHTML.cnt === 1) {
        recentHTML.html = document.querySelector(".header__poster-container").innerHTML;
    }

}

const changePosterContent = (data) => {
    const getData = data;

    const posterDiv = document.querySelector(".header__main-poster");
    const posterTitle = document.querySelector(".header__main-title");
    const button = document.querySelectorAll(".header__main-button");

    posterTitle.textContent = getData[0].title;
    posterDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${getData[0].backdrop_path})`;
    posterDiv.style.backgroundSize = "cover";
    posterDiv.style.backgroundRepeat = "no-repeat";
    button[0].style.backgroundColor = "white";
    rememberBox = button[0];

    if (recentHTML.cnt === 0) {
        recentHTML.html = document.querySelector(".header__poster-container").innerHTML;
    }

    button.forEach((item, index) => {
        item.addEventListener("click", changeMainPoster(getData[index], item, posterDiv, posterTitle))
    });

    recentHTML.posterdata = data;
}

export default viewMainPoster;