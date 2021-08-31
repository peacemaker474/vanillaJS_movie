import headerList from "../store/store";;
import mainPoster from './mainPoster';

const root = document.getElementById("root");
const { navList } = headerList;

// 검색 Modal 영역

const modalSearchForm = () => {
    const searchForm = document.querySelector(".modal-search");
    const searchLabel = document.querySelector(".modal-label");

    searchLabel.addEventListener("click", () => {
        searchForm.classList.toggle("modal-search");
    });
}


// 메인 NavList 영역

const handleNavList = (li, a, item) => {
    if (typeof item.ko !== "undefined") {
        a.textContent = item.ko;
        a.href = `"./${item.en}"`;
        li.append(a);
    } else {
        const form = document.createElement("form");
        const input = document.createElement("input");
        const label = document.createElement("label");

        form.className = "search-form modal-search";
        input.className = "search-form__input";
        label.className = "seacrh-form__label modal-label";

        input.type = "text";
        input.placeholder = `영화 제목을 입력하세요.`;

        form.append(input);
        form.append(label);
        li.append(form);
    }
}

// Header 영역

const createElementHeader = () => {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const logoBox = document.createElement("div");

    nav.className = `main_nav`;
    ul.className = `main-nav__lists`;
    li.className = `main-nav__main-logo`;
    logoBox.className = `main-logo__container`;

    logoBox.textContent = `1405`;

    navList.map(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        handleNavList(li, a, item);
        li.className = `main-nav__list main-nav__${item.en}`;
        ul.append(li);
    });

    li.prepend(logoBox);
    ul.prepend(li);
    nav.append(ul);
    header.append(nav);
    root.append(header);

}

// 추가적으로 제어하는 영역

const headerRender = () => {
    const checkRequestAPI = document.querySelector(".upcoming-list__content");
    createElementHeader();
    modalSearchForm();
    if (checkRequestAPI !== null) {
        mainPoster();
    }
}

export default headerRender;