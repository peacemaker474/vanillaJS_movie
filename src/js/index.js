import { viewHeader } from './components/viewHeader';
import main from './components/main';
import detail from "./components/detail";
import '../css/main.css';

const navigateTo = (url, id) => {
    history.pushState(null, null, url);
    router(id);
}

const router = async (id) => {
    const routes = [
        {
            path: "/",
            view: () => {
                viewHeader();
                main();
            }
        },
        {
            path: `/detail/${id}`,
            view: () => {
                document.querySelector("header").innerHTML = "";
                detail();
            }
        },
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            rotue: routes[0],
            isMatch: true
        };
    }
    match.route.view();
}

window.addEventListener("popstate", router)

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", evt => {
        if (evt.target.matches("[data-link")) {
            evt.preventDefault();
            navigateTo(evt.target.href, evt.target.id);
        }
    })
    router();
})