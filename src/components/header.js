import headerList from '../store/store';

const body = document.body;
const { navList } = headerList;

const createElementTag = () => {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    navList.map(item => {
        const li = document.createElement("li");
        li.textContent = item.ko;
        li.className = `nav_${item.en}`;
        ul.append(li);
    })

    nav.append(ul);
    header.append(nav);
    body.append(header);
}

const render = () => {
    createElementTag();
}

export default render;