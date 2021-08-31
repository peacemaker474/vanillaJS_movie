const API_KEY = "a9dc1bd31af50bb46c99983404356308";
const BOX_API = "766ffd1db8655b81fd4eccd8075e8123";

const getYDate = () => {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate() - 1;
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    let yesterday = `${year}${month}${day}`;

    return yesterday;
}


const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: API_KEY,
        language: "ko-KR"
    }
});

const boxOfficeAPI = axios.create({
    baseURL: "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?",
    params: {
        key: BOX_API,
        targetDt: `${getYDate()}`,
    }
})


const getAPI = {
    upcoming: () => api.get("movie/upcoming"),
    boxOffice: () => boxOfficeAPI.get(),
    searchMain: title => api.get(`search/movie`, {
        params: {
            query: decodeURIComponent(title),
        }
    }),
}


export { getAPI };
