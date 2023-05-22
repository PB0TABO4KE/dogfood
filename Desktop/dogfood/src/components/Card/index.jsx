import "./style.css";
import { Link } from "react-router-dom";
import { Heart, HeartFill, Percent } from "react-bootstrap-icons";
import { useState, useContext } from "react";
import Ctx from "../../context"


// {img, name, price} - это эквивалентно props (props.img, props.name, props.price)

const Card = ({ img, name, price, _id, discount, tags, likes }) => {
    const { setServerGoods } = useContext(Ctx);
    //Есть ли id пользователя в массив лайков с товарами //
    const [isLike, setIsLike] = useState(likes?.includes(localStorage.getItem("rockId")));

    const updLike = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsLike(!isLike);

        const token = localStorage.getItem("rockToken");
        fetch(`https://api.react-learning.ru/products/likes/${_id}`, {
            method: isLike ? "DELETE" : "PUT",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                // Изменить основной массив с товарами внутри React (на стороне клиента)//
                setServerGoods(function (old) {
                    console.log(old);
                    // Нам надо из массива взять 1 карточку и заменить её. При этом, положение карточки в массиве не должно поменяться. Единственный способ пройтись помассиву, модифицировав его - это метод мап.
                    const arr = old.map(el => {
                        if (el._id === _id) {
                            return data;
                        }
                        else {
                            return el;
                        }
                    })
                    return arr;
                });
            })

    }

    return <Link to={`/product/${_id}`} className="card" >
        {discount > 0 && <span className="card__discount">{discount} <Percent />  </span>}
        <span className="card__like" onClick={updLike}>
            {isLike ?
                <HeartFill /> : <Heart />}
        </span>
        {/* <img src={img} alt="Картинка" className="card__img" />*/}
        <span className="card__img__2" style={{backgroundImage: `url(${img})`}}/>
        
        <span className="card__name">{name}</span>
        <span className="card__price">
            {discount > 0
                ? <>
                    <del>{price}</del>
                    &nbsp;
                    {price * (100 - discount) / 100}
                </>
                :
                price
            }&nbsp;руб</span>
        <button className="card__btn">В корзину</button>
        {/* <span className="card__tags">
        {tags.map (el => <span key={el}>{el}</span>)}
        </span>*/}
    </Link>
}

export default Card;