import { useState } from "react";
import Card from "../components/Card"
import Promo from "../components/Promo/Promo"
import cardsData from "../assets/data"; //data.json//



const sizes = ["sm", "lg", "md"];
const adds = [];


/*{<Link to="/" title="Избранное" className="header__ico"><img src={favorite} className="header__ico" alt="Избранное" />Избранное</Link>}/*
/*{<Link to="/" title="Корзина" className="header__ico"><img src={cart} className="header__ico" alt="Корзина" />Корзина</Link>}/*
/*{<Link to="/profile" title="Профиль" className="header__ico"><img src={user_logo} className="header__ico" alt="Профиль пользователя" />Профиль</Link>}/*

/*
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
}*/

const Draft = () => {
    const [goods, setGoods] = useState(cardsData);
    return (

        <div className="container">
            {/*<Card img={cardsData[0].pictures}
                name={cardsData[0].name}
                price={cardsData[0].price}
                />*/}
            {/*<Promo text="Asshole" pic={true} />
                <Promo text="PB0TA_B_O4KE" type="sm" />*/}
            <Promo text="PB0TA_B_O4KE" type="lg" pic="../../assets/images/banner_pic_1.png" />

            

            {goods.map((el, i) => <Card
                key={i}
                img={el.pictures}
                name={el.name}
                price={el.price}
            />)}


            {/*{adds.map((el, i) => <Promo key={i} {...el} type={el.sizes} />)}*/}

            <Promo />
            <Promo />
        </div>
    )
}

export default Draft;