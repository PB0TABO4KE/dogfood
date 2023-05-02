import React, { useState } from "react";
import Promo from "./components/Promo/Promo"; //Promo.jsx//
import Card from "./components/Card"; //index.jsx//
import { Header, Footer } from "./components/General";
import cardsData from "./assets/data"; //data.json//
import Search from "./components/Search";
import Modal from "./components/Modal";

const sizes = ["sm", "lg", "md"];
const adds = [];

let text = "Полёты собак в космос — серия экспериментов, включавших проведение исследований по возможности полётов на и космических ракетах живых существ, наблюдение за поведением животных в условиях таких полётов, а также, изучение сложных явлений в пространстве."
text = text.match(/[^\s,.]+/g);

const rand = (n) => Math.floor(Math.random() * n);

let n = 8;
while (n--) {
    adds.push({
        text: `${text[rand(text.length)].slice(0, 8)} ${text[rand(text.length)]} ${text[rand(text.length)]}`,
        pic: !!Math.round(Math.random()), // !!0 => false - !!1 => true
        sizes: sizes[rand(sizes.length)]
    })
}

const App = () => {
    const [goods, setGoods] = useState(cardsData);
    const [user, setUser] = useState(localStorage.getItem("rockUser"));
    const [modalActive, setModalActive] = useState(false);

    return (

        <React.Fragment>
            <Header user={user} setUser={setUser} setModalActive={setModalActive}/>
            <div className="container">
                {/*<Card img={cardsData[0].pictures}
                name={cardsData[0].name}
                price={cardsData[0].price}
                />*/}
                {/*<Promo text="Asshole" pic={true} />
                <Promo text="PB0TA_B_O4KE" type="sm" />*/}


                <Search arr={cardsData} upd={setGoods} />

                {goods.map((el, i) => <Card
                    key={i}
                    img={el.pictures}
                    name={el.name}
                    price={el.price}
                />)}
                {adds.map((el, i) => <Promo key={i} {...el} type={el.sizes} />)}
            </div>
            <Footer />
            <Modal active={modalActive} setActive={setModalActive}/>
        </React.Fragment>
    )
}

export default App;