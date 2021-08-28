import { getAPI } from "../api/api";
const root = document.getElementById("root");

const createElementUpcoming = (data) => {
    data.map(item => {
        const image = new Image();
        image.src = item.backdrop_path && `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`;

        root.append(image);
    })
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