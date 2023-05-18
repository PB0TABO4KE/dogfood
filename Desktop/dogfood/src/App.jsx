import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";


// Компоненты
import { Header, Footer, MobileMenu } from "./components/General";
import Modal from "./components/Modal";
import Ctx from "./context";

//Страницы
import Draft from "./pages/Draft";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Favorites from "./pages/Favorites"


const App = () => {


    const [token, setToken] = useState(localStorage.getItem("rockToken"));
    const [user, setUser] = useState(localStorage.getItem("rockUser"));
    const [userId, setUserId] = useState(localStorage.getItem("rockId"));
    const [modalActive, setModalActive] = useState(false);
    const [serverGoods, setServerGoods] = useState([]);
    const [goods, setGoods] = useState([]);
    const [serverNews, setServerNews] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        if (token) {
            fetch("https://api.react-learning.ru/products?page=1&limit=100", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setServerGoods(data.products.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
                })
        }
    }, [token])


    useEffect(() => {
        if (token) {
            fetch("https://newsapi.org/v2/everything?language=ru&q=dogs&q=собака&q=cats&apiKey=25c54a1ab073487a9d99403ec40b5274")
                .then(res => res.json())
                .then(data => {
                    setServerNews(data.articles);
                    })
        }
    }, [token]);

    useEffect(() => {
        if (!goods.length) {
            setGoods(serverGoods);
        }
    }, [serverGoods]);

    useEffect(() => {
        if (!news.length) {
            setNews(serverNews);
        }
    }, [serverNews]);



    useEffect(() => {
        if (user) {
            setToken(localStorage.getItem("rockToken"));
            setUserId(localStorage.getItem("rockId"));
        }
        else {
            setToken("");
            setUserId("");
        }
    }, [user])

    return (
        <Ctx.Provider value={{
            goods: goods,
            setGoods,
            serverGoods,
            news,
            setServerNews
           }}>
        <React.Fragment>
            <Header user={user} setModalActive={setModalActive}  serverGoods={serverGoods} />
            <MobileMenu user={user} setModalActive={setModalActive} />
            <main>
                <Routes>

                    {!user && <>
                        <Route path="/*" element={<Main goods={goods} setModalActive={setModalActive} setServerGoods={setServerGoods} user={user} news={news} setServerNews={setServerNews} />} />

                    </>}

                    {user && <>
                        <Route path="/" element={<Main goods={goods} setModalActive={setModalActive} setServerGoods={setServerGoods} user={user} news={news} setServerNews={setServerNews} />} />

                        <Route path="/catalog" element={<Catalog setServerGoods={setServerGoods} />} />

                        <Route path="/draft" element={<Draft />} />

                        <Route path="/profile" element={<Profile user={user} setUser={setUser} color="yellow" />} />

                        <Route path="/product/:id" element={<Product token={token} />} />

                        <Route path="/favorites" element={<Favorites goods={goods} userId={userId} setServerGoods={setServerGoods} />} />
                    </>}

                </Routes>



            </main>

            <Footer />
            <Modal active={modalActive} setActive={setModalActive} setUser={setUser} />
        </React.Fragment>
        </Ctx.Provider>)
}

export default App;