import { getAPI } from './api';
import mainPoster from '../components/mainPoster';

const getEncodeTitle = (mainTitle, query) => {
    const MAX_COUNT = 3;
    query.map(item => {
        if (+item.rank <= MAX_COUNT) {
            let obj = {
                movieNm: encodeURIComponent(item.movieNm),
                openDt: item.openDt,
            };
            mainTitle.queryTitle.push(obj);
        }
    });
}

const getMainTitle = async (query) => {
    let mainTitle = {
        loading: true,
        queryTitle: [],
        maindata: [],
    }

    getEncodeTitle(mainTitle, query);

    try {
        if (mainTitle.loading === true) {
            for (let i = 0; i < mainTitle.queryTitle.length; i++) {
                let {
                    data: {
                        results: searchTitle
                    }
                } = await getAPI.searchMain(mainTitle.queryTitle[i].movieNm);
                searchTitle.map(item => {
                    if (item.release_date === mainTitle.queryTitle[i].openDt) {
                        mainTitle.maindata.push(item);
                    }
                });
                // for(let search of searchTitle){
                //     if (search.release_date === mainTitle.queryTitle[i].openDt) mainTitle.maindata.push(search);
                // }
            }
        } else {
            throw Error("페이지를 새로고침 하세요!");
        }
    } catch (e) {
        console.log(e);
    } finally {
        mainTitle.loading = false;
        mainPoster(mainTitle.maindata);
    }
}

const getTitle = async () => {
    let titleState = {
        loading: true,
        titledata: [],
    }

    try {
        if (titleState.loading === true) {
            const {
                data: {
                    boxOfficeResult: {
                        dailyBoxOfficeList: titledata
                    }
                }
            } = await getAPI.boxOffice();
            titleState.titledata = [...titledata];
        } else {
            throw Error("페이지를 새로고침 해주세요.");
        }
    } catch (e) {
        console.log(e);
    } finally {
        titleState.loading = false;
        getMainTitle(titleState.titledata);
    }
}

getTitle();

export default getMainTitle;