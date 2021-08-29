import upcomingRender from "./upcoming";

const root = document.getElementById("root");

const createElementMain = () => {
    const main = document.createElement("main");
    root.append(main);

    upcomingRender();

}

export default createElementMain;