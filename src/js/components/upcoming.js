import { getAPI } from "../api/api";

const createElementUpcoming = (data) => {
    const main = document.querySelector("main");

    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    const container = document.createElement("div");

    section.className = `upcoming`;
    h2.className = `upcoming__title`;
    container.className = `upcoming__lists`;

    h2.textContent = `곧 개봉할 영화`;

    data.map(item => {
        const movieList = document.createElement("div");
        const image = new Image();

        movieList.id = item.id;
        movieList.className = `upcoming-list__content`;
        image.src = item.backdrop_path && `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`;

        movieList.append(image);
        container.append(movieList);
    });

    section.append(h2);
    section.append(container);
    main.append(section);

}

const getUpcomingAPI = async () => {
    let upcomingState = {
        loading: true,
        upcoming: [],
    }

    try {
        if (upcomingState.loading === true) {
            const {
                data: { results: upcoming }
            } = await getAPI.upcoming();
            upcomingState.upcoming = [...upcoming];
        } else {
            throw Error("페이지를 새로고침 해주세요.");
        }
    } catch (e) {
        console.log(e);
    } finally {
        upcomingState.loading = false;
        createElementUpcoming(upcomingState.upcoming);
    }
}


const upcomingRender = () => {
    getUpcomingAPI();
}

export default upcomingRender;