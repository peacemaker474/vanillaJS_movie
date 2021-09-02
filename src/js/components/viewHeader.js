import viewMainPoster from "./viewMainPoster";

const headerHTML = () => {
    const headerTemplate = `
        <header>
            <nav class="main_nav">
                <ul class="main-nav__lists">
                    <li class="main-nav__main-logo">
                        <div class="main-logo__container">1405</div>
                    </li>
                    <li class="main-nav__list main-nav__movie">
                        <a href="/movie"> 영화 </a>
                    </li>
                    <li class="main-nav__list main-nav__tvShow">
                        <a href="/tvShow"> TV 프로그램 </a>
                    </li>
                    <li class="main-nav__list main-nav__develope">
                        <a href="/develope"> 개발중 </a>
                    </li>
                    <li class="main-nav__list main-nav__search">
                        <form class="search-form modal-search">
                            <input type="text" placeholder="영화 제목을 입력하세요" class="search-form__input" />
                            <label class="seacrh-form__label modal-label"></label>
                        </form>
                    </li>
                </ul>
            </nav>
        </header>
    `;

    document.getElementById("root").innerHTML = headerTemplate;
}

const modalSearchForm = () => {
    const searchForm = document.querySelector(".modal-search");
    const searchLabel = document.querySelector(".modal-label");

    searchLabel.addEventListener("click", () => {
        searchForm.classList.toggle("modal-search");
    });
}

const headerRender = () => {
    headerHTML();
    modalSearchForm();
    console.log(document.querySelector(".header__main-poster"));
}

export { headerRender };