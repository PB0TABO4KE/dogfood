import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.css";
import Loader from "../components/Loader";
import MobileAddCart from "../components/General/MobileAddCart";
import { Percent, HeartFill, TruckFront, Award, } from "react-bootstrap-icons";
import { useContext } from "react";
import Ctx from "../context"

const Product = () => {
    const { token } = useContext(Ctx);



    const [reviewCnt, setReviewCnt] = useState(0);
    const [product, setProduct] = useState({});

    const [reviewRating, setRatingStat] = useState(0);

    const { id } = useParams()


    useEffect(() => {
        fetch(`https://api.react-learning.ru/products/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.err) {
                    console.log(data);
                    setProduct(data);
                    setReviewCnt(data.reviews.length)
                    setRatingStat(data.reviews)
                }


            })
    }, [token]);


    const getAverage = (numbers) => {
        let sum = 0;
        for (let i = 0; i < numbers.length; i += 1) {
            sum += numbers[i].rating;
        }
        return sum / numbers.length;
    };
    const averageRating = (getAverage(reviewRating));

    function averageRatingIsNan(averageRating) {
        if (isNaN(averageRating)) {
            return "0"
        }
        else {
            return averageRating;
        }
    }

    const averageRatingNotNan = averageRatingIsNan(averageRating);


    return <>
        <section className="container__product">


            {product?.name ? <>

                <h2 className="product__name">{product?.name}</h2>


                <div className="product__synopsis">
                    <span className="product__artikul">Артикул: {product?._id}</span>
                    <span className="product__review__cnt"> {averageRatingNotNan} / 5 </span>
                    <span className="product__review__cnt">Отзывов: {reviewCnt} шт.</span>
                </div>

                <img className="product__picture" src={product?.pictures} alt={product?.name} />

                <div className="product__price">
                    <span className="product__old__price">{product?.price}  ₽</span>
                    <br />
                    <span className="product__new__price">{product?.price * (100 - product?.discount) / 100} ₽</span>
                </div>

                <div className="product__add__cart">
                    <input type="number" className="product__cart__cnt" placeholder="1" />
                    <button className="product__cart__btn">В корзину</button>
                </div>


                <div className="product__add__favorites"><HeartFill /> В избранное</div>

                <div className="product__delivery"><div className="product__delivery__garanty__ico"><TruckFront /></div><div className="product__delivery__garanty__text"><h3>Доставка по всему Миру!</h3><span>Доставка курьером —— от 399 ₽</span><br /><span>Доставка в пункт выдачи — от 199 ₽</span></div></div>
                <div className="product__garanty"><div className="product__delivery__garanty__ico"><Award /></div> <div className="product__delivery__garanty__text"><h3>Гарантия качества</h3><span>Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все возможное, чтобы удовлетворить ваши нужды.</span></div></div>

                <div className="product__description">
                    <h3>Описание</h3>
                    {product?.description}</div>
                <div className="product__char">
                    <h3>Характеристики</h3>
                    {product?.description}</div>

                {product?.reviews[0] &&
                    <div className="product__review">
                        <h3>Отзывы</h3>
                        {product?.reviews[0]?.author.name}
                        {product?.reviews[0]?.created_at}
                        {product?.reviews[0]?.rating}
                        {product?.reviews[0]?.text}
                        {product?.reviews[0]?.updated_at}
                    </div>
                }

<MobileAddCart />                

            </>
                : <Loader />
            }
        </section>
    </>
}

export default Product;