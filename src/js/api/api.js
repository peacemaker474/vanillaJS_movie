const API_KEY = "a9dc1bd31af50bb46c99983404356308";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: API_KEY,
        language: "ko-KR"
    }
});

const getAPI = {
    upcoming: () => api.get("movie/upcoming"),
}

export { getAPI };
