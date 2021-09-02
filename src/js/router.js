import header from './components/header';
import main from './components/main';
import detail from "./components/detail";

const router = (path) => {
    switch (path) {
        case "/":
            header();
            main();
            break;
        case "/detail/":
            detail();
            break;
    }

}


export default router;