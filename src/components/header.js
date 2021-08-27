import headerList from '../store/store';

const body = document.body;
const { navList } = headerList;

const createElementTag = () => {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const logoBox = document.createElement("div");

    navList.map(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = item.ko;
        a.href = `"./${item.ko}"`;
        li.className = `main-nav__list main-nav__${item.en}`;
        li.append(a);
        ul.append(li);
    });

    nav.className = `main_nav`;
    ul.className = `main-nav__lists`;
    li.className = `main-nav__main-logo`;
    logoBox.className = `main-logo__container`;

    li.prepend(logoBox);
    ul.prepend(li);
    nav.append(ul);
    header.append(nav);
    body.append(header);

}

const render = () => {
    createElementTag();
    const header = document.querySelector("header");
    const mainNav = document.querySelector(".main_nav");

    console.log(header, mainNav);
}

export default render;