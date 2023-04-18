import { Link } from "react-router-dom";
import s from './HomePage.module.scss'

function HomePage() {
    return <section className={s.homeSection}>
        <h1 className={s.wrapper}>This is HomePage! I have no fantasy to create something special =)</h1>
        <Link to={"/tweets"} className={s.link}>See all users </Link>
    </section>;
}

export default HomePage;