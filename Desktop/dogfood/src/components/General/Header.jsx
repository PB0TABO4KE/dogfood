import Logo from "./Logo";
import SearchHeader from "../SearchHeader";
import login_ico from "../../assets/icons/login_ico.svg";
import cardsData from "../../assets/data"; //data.json//
import { CardList, Heart, Bag, PersonCircle } from "react-bootstrap-icons";
// иконки можно найти тут https://icons.getbootstrap.com/ //
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";







const Header = ({ user, setModalActive, setGoods, serverGoods}) => {
    //const [goods, setGoods] = useState(cardsData);
    const navigate = useNavigate();
    const logIn = (e) => {
        e.preventDefault();
        //setUser("lk-band")
        //localStorage.setItem("rockUser", "lk-band");
        setModalActive(true);
        navigate("/profile")
    }
    return <header>
        <Logo />
        <div className="search"><SearchHeader arr={serverGoods} upd={setGoods} /></div>

        <nav className="header__menu">
            {user && <>
                <Link to="/catalog" title="Каталог"><CardList /></Link>
                <Link to="/" title="Избранное"><Heart /></Link>
                <Link to="/" title="Корзина"><Bag /></Link>
                <Link to="/profile" title="Профиль"><PersonCircle /></Link>



            </>}
            {!user && <Link to="" title="Войти" className="header__ico" onClick={logIn}><img src={login_ico} className="header__ico" alt="Войти" />Войти</Link>}
        </nav>
    </header>
}

export default Header;