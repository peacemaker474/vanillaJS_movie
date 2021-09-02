import { getAPI } from '../api';
import { viewUpcomingRender } from '../../components/viewUpcoming';

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
        viewUpcomingRender(upcomingState.upcoming);
    }
}

export default getUpcomingAPI;