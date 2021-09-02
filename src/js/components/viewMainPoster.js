let rememberBox;

const viewMainPoster = () => {
    const section = document.createElement("section");

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

    section.innerHTML = mainPosterTemplate;
    document.querySelector("header").append(section);
}

const changeMainPoster = (data, item, posterDiv, posterTitle) => () => {
    posterTitle.textContent = data.title;
    posterDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`;

    if (rememberBox !== undefined) {
        rememberBox.style.backgroundColor = "rgb(127, 127, 127)";
    }
    item.style.backgroundColor = "white";
    rememberBox = item;
}

const changePosterContent = (data) => {
    const getData = data;

    const posterDiv = document.querySelector(".header__main-poster");
    const posterTitle = document.querySelector(".header__main-title");
    const button = document.querySelectorAll(".header__main-button");

    posterTitle.textContent = data[0].title;
    posterDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${data[0].backdrop_path})`;
    posterDiv.style.backgroundSize = "cover";
    posterDiv.style.backgroundRepeat = "no-repeat";
    button[0].style.backgroundColor = "white";
    rememberBox = button[0];

    button.forEach((item, index) => {
        item.addEventListener("click", changeMainPoster(getData[index], item, posterDiv, posterTitle))
    });
}

const viewMainPosterRender = (data) => {
    viewMainPoster();
    setTimeout(() => changePosterContent(data), 1000)
}

export default viewMainPosterRender;