import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

// Компоненты

import { Header, Footer, MobileMenu } from "./components/General";
import Search from "./components/Search";
import Modal from "./components/Modal";


import Promo from "./components/Promo/Promo";
import PromoLukovnikov from "./components/PromoLukovnikov/PromoLukovnikov";
import PromoFlex from "./components/PromoFlex/PromoFlex";
import banner_pic_1 from "./assets/images/banner_pic_1.png";
import banner_pic_2 from "./assets/images/banner_pic_2.png";
import banner_pic_3 from "./assets/images/banner_pic_3.png";
import banner_pic_4 from "./assets/images/banner_pic_4.png";
import banner_pic_5 from "./assets/images/banner_pic_5.png";
import banner_pic_6 from "./assets/images/banner_pic_6.png";
import cardsData from "./assets/data"; //data.json//

//Страницы
import Draft from "./pages/Draft";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
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
            fetch("https://api.react-learning.ru/products?page=1&limit=100", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    console.log(data.products);
                    setServerGoods(data.products);
                })
        }
    }, [token])
    //useEffect(() => {console.log("Модалка изменилась")}, [modalActive])//




    useEffect(() => {
        //console.log("товары с сервера подгрузились");
        setGoods(serverGoods);
    }, [serverGoods]);


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
    console.log("id " + goods[0]?._id);
    
    return (

        <React.Fragment>

            <Header user={user} setModalActive={setModalActive} setGoods={setGoods} serverGoods={serverGoods} />
            <MobileMenu user={user} setModalActive={setModalActive} />
            <main>

                {/*<Search arr={serverGoods} upd={setGoods} />*/}
                {/*SPA - Single Page Application */}
                {/*
                <nav>
                    <Link to="/"> Главная</Link>
                    <Link to="/catalog"> Каталог</Link>
                    <Link to="/draft"> Старый код</Link>
                </nav>*/}

                <Routes>
                    <Route path="/" element={<Main />} />

                    <Route path="/catalog" element={<Catalog goods={goods} serverGoods={serverGoods} />} />

                    <Route path="/draft" element={<Draft />} />

                    <Route path="/profile" element={<Profile user={user} setUser={setUser} color="yellow" />} />

                    <Route path="/product/:id" element={<Product token={token}/>} />
                </Routes>

                <PromoFlex type="lg" header="Подарок за первый заказ!" text="Лёгкое говяжье — пластины" pic={banner_pic_1} />
                <Card img={goods[0]?.pictures} name={goods[0]?.name} price={goods[0]?.price} id={goods[0]?._id} discount={goods[0]?.discount} />
                <Card img={goods[1]?.pictures} name={goods[1]?.name} price={goods[1]?.price} id={goods[1]?._id} discount={goods[1]?.discount} />
                <Card img={goods[2]?.pictures} name={goods[2]?.name} price={goods[2]?.price} id={goods[2]?._id} discount={goods[2]?.discount} />
                <Card img={goods[3]?.pictures} name={goods[3]?.name} price={goods[3]?.price} id={goods[3]?._id} discount={goods[3]?.discount} />


                <PromoFlex header="Наборы для дрессировки" text="от 840 ₽" pic={banner_pic_6} />
                <PromoFlex header="Микс масел" text="пищевая здоровая натуральная добавка" pic={banner_pic_3} />

                <Card img={goods[4]?.pictures} name={goods[4]?.name} price={goods[4]?.price} id={goods[4]?._id} discount={goods[4]?.discount} />
                <Card img={goods[5]?.pictures} name={goods[5]?.name} price={goods[5]?.price} id={goods[5]?._id} discount={goods[5]?.discount} />
                <Card img={goods[6]?.pictures} name={goods[6]?.name} price={goods[6]?.price} id={goods[6]?._id} discount={goods[6]?.discount} />
                <Card img={goods[7]?.pictures} name={goods[7]?.name} price={goods[7]?.price} id={goods[7]?._id} discount={goods[7]?.discount} />

                <PromoFlex header="Рога северного оленя" text="от 10 до 30 кг" pic={banner_pic_2} />
                <PromoFlex header="Слипы из шеи индейки" text="100 % натуральное" pic={banner_pic_4} />

                <Card img={goods[8]?.pictures} name={goods[8]?.name} price={goods[8]?.price} id={goods[8]?._id} discount={goods[8]?.discount} />
                <Card img={goods[9]?.pictures} name={goods[9]?.name} price={goods[9]?.price} id={goods[9]?._id} discount={goods[9]?.discount} />
                <Card img={goods[10]?.pictures} name={goods[10]?.name} price={goods[10]?.price} id={goods[10]?._id} discount={goods[10]?.discount} />
                <Card img={goods[11]?.pictures} name={goods[11]?.name} price={goods[11]?.price} id={goods[11]?._id} discount={goods[11]?.discount} />
                

                <PromoFlex type="lg" header="Подарок за десятый заказ!" text="Лёгкое говяжье — кубики" pic={banner_pic_5} />
               
            </main>

            <Footer />
            <Modal active={modalActive} setActive={setModalActive} setUser={setUser} />
        </React.Fragment>
    )
}

export default App;