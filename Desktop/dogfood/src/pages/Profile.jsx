import logout_ico from "../assets/icons/logout_ico.svg";
import { useNavigate } from "react-router";
import Ctx from "../context"
import { useContext, useEffect, useState } from "react";


const Profile = () => {
    const navigate = useNavigate();
    const { user } = useContext(Ctx);
    const { setUser } = useContext(Ctx);
    const { userId } = useContext(Ctx);
    const { token } = useContext(Ctx);
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
    const [userInfo, setUserInfo] = useState({});


    useEffect(() => {
        fetch(`https://api.react-learning.ru/users/${userId}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.err) {
                    console.log(data);
                    setUserInfo(data);
                }
            })
    }, [token]);

    console.log(userInfo);


    return (<>
        <h1>Личный кабинет</h1>
        <section className="profile__grid">

            <div className="profile__left__section">
                <div className="profile__hello__user">
                <span style={capitonStyle}>Добро пожаловать,
                <br />уважаемый {userInfo.name}!</span>
                </div>

                <div className="profile__user_picture"> 
                    <img className="profile__picture" src={userInfo.avatar} alt={userInfo.name} />
                </div>
            </div>


            
            <div className="profile__right__section">
                
                <div className="profile__user_role">
                    Роль: <span>{userInfo.about}</span>
                </div>
                <div className="profile__user_email">
                    Email: <span style={capitonStyle}>{userInfo.email}</span>
                </div>
                <div className="profile__user_group">
                    Группа: <span style={capitonStyle}>{userInfo.group}</span>
                </div>

            </div>
        </section>
        <div className="profile__log">
            {<a href="" title="Выйти" className="profile__logout" onClick={logOut}><img src={logout_ico} className="profile__logout" alt="Выйти" />Выйти</a>}
        </div>
    </>)
}

export default Profile;