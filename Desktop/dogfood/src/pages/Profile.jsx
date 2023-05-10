import logout_ico from "../assets/icons/logout_ico.svg";
import { useNavigate } from "react-router";

const Profile = ({ user, color, setUser }) => {
const navigate = useNavigate();

    const capitonStyle = {
    fontWeight: "bold",
    color: color,
    //backgroundImage: `url{$ props}`//
}
const logOut = (e) => {
    e.preventDefault();
    setUser("");
    localStorage.removeItem("rockUser");
    localStorage.removeItem("rockToken");
    localStorage.removeItem("rockId");
    navigate("/");
    // useNavigate()("/")//
}

return (<>
<h1>Личный кабинет</h1>
<div>
    Добро пожаловать,&nbsp;
    <span style={capitonStyle}>{user}</span>
    !
</div>
{<a href="" title="Выйти" className="header__ico" onClick={logOut}><img src={logout_ico} className="header__ico" alt="Выйти" />Выйти</a>}
</>)
}

export default Profile;