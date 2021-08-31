let rememberBox;

const createrElementMainPoster = (data) => {
    const header = document.querySelector("header");
    const posterDiv = document.createElement("div");
    const posterTitle = document.createElement("h2");
    const buttonDiv = document.createElement("div");

    posterDiv.className = `header__main-poster`;
    posterTitle.className = `header__main-title`;
    buttonDiv.className = `header__main-buttonBox`;

    for (let i = 1; i < data.length + 1; i++) {
        const posterBtn = document.createElement("button");
        posterBtn.id = i;
        posterBtn.className = `header__main-button`;
        buttonDiv.append(posterBtn);
    }

    posterDiv.append(posterTitle);
    posterDiv.append(buttonDiv);
    header.append(posterDiv);
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

const handleMainPoster = async (data) => {
    const getData = await data;
    createrElementMainPoster(getData);
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

export default handleMainPoster;