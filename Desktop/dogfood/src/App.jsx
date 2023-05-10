import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

// Компоненты

import { Header, Footer, MobileMenu } from "./components/General";
import Search from "./components/Search";
import Modal from "./components/Modal";
import SearchHeader from "./components/SearchHeader";
import cardsData from "./assets/data"; //data.json//

import Promo from "./components/Promo/Promo";
import PromoLukovnikov from "./components/PromoLukovnikov/PromoLukovnikov";
import PromoFlex from "./components/PromoFlex/PromoFlex";
import banner_pic_1 from "./assets/images/banner_pic_1.png";

//Страницы
import Draft from "./pages/Draft";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import Profile from "./pages/Profile";

import Card from "./components/Card";




const App = () => {
    
    const [token, setToken] = useState(localStorage.getItem("rockToken"));
    const [user, setUser] = useState(localStorage.getItem("rockUser"));
    
    const [modalActive, setModalActive] = useState(false);
// Товары из БД
    const [serverGoods, setServerGoods] = useState([]);
    //Товары для поиска и фильтрации
    const [goods, setGoods] = useState(serverGoods);

    useEffect(() => {
        if (token) {
            fetch("https://api.react-learning.ru/products", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setServerGoods(data.products);
                })
        }
    }, [token])
    //useEffect(() => {console.log("Модалка изменилась")}, [modalActive])//

    


    useEffect (() => {
       // console.log("товары с сервера подгрузились");
        setGoods(serverGoods);
    }, [serverGoods])


    useEffect(() => {
        console.log("User was changed")
        if (user) {
            setToken(localStorage.getItem("rockToken"));
        }
        else {
            setToken("");
        }
        console.log("U ", user);
        console.log("t ", token);
    }, [user])
    return (

        <React.Fragment>

            <Header user={user} setModalActive={setModalActive} setGoods={setGoods} />
            <MobileMenu user={user} setModalActive={setModalActive} />
            <main>


                {/*SPA - Single Page Application */}
                {/*
                <nav>
                    <Link to="/"> Главная</Link>
                    <Link to="/catalog"> Каталог</Link>
                    <Link to="/draft"> Старый код</Link>
                </nav>*/}
                <Routes>
                    <Route path="/" element={<Main />} />

                    <Route path="/catalog" element={<Catalog />} />

                    <Route path="/draft" element={<Draft />} />

                    <Route path="/profile" element={<Profile user={user} setUser={setUser} color="yellow" />} />

                </Routes>
                <PromoLukovnikov header="Это заголовок" text="Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать" pic={banner_pic_1} />
                <PromoLukovnikov header="Это заголовок" text="Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать" pic={banner_pic_1} />
                <PromoFlex header="Это заголовок" text="Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать" pic={banner_pic_1} />
                <PromoFlex header="Это заголовок" text="Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать" pic={banner_pic_1} />
                <PromoFlex type="lg" header="Это заголовок" text="Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать" pic={banner_pic_1} />
                <PromoFlex type="lg" header="Это заголовок" text="Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать" pic={banner_pic_1} />
                <PromoLukovnikov type="lg" header="Это заголовок" text="Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать" pic={banner_pic_1} />
                <PromoLukovnikov type="lg" header="Это заголовок" text="Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать" pic={banner_pic_1} />
                <PromoFlex type="sm" header="Это заголовок" text="Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать" pic={banner_pic_1} />
                <PromoFlex type="sm" header="Это заголовок" text="Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать" pic={banner_pic_1} />
                <PromoLukovnikov type="sm" header="Это заголовок" text="Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать" pic={banner_pic_1} />
                <PromoLukovnikov type="sm" header="Это заголовок" text="Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать Это очень длинный текст, чтобы проверить, как именно он будет отображаться на баннере и придумать, как его правильно сверстать" pic={banner_pic_1} />



            </main>

            <Footer />
            <Modal active={modalActive} setActive={setModalActive} setUser={setUser} />
        </React.Fragment>
    )
}

export default App;