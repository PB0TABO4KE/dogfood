import logout_ico from "../assets/icons/logout_ico.svg";
import { useNavigate } from "react-router";

const Profile = ({ user, color, setUser }) => {
const navigate = useNavigate();

    const capitonStyle = {
    fontWeight: "bold",
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
<div className="profile__greetings">
    Добро пожаловать,<br/>
    <span style={capitonStyle}>{user}</span>
    !
</div>
<div className="profile__log">
{<a href="" title="Выйти" className="profile__logout" onClick={logOut}><img src={logout_ico} className="profile__logout" alt="Выйти" />Выйти</a>}
</div>
</>)
}

export default Profile;