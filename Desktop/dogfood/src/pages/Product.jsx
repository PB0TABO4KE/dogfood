import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.css";
import Loader from "../components/Loader";
import { Percent, HeartFill, TruckFront, Award, } from "react-bootstrap-icons";

const Product = ({ token }) => {
    
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
    
    return <>
    <section className="section">


        {product?.name ? <>

        <div className="product__title">
            <h2 className="product__name">{product?.name}</h2>
            <div className="product__title__bottom">
            <span className="product__artikul">Артикул: {product?._id}</span>
            <span className="product__review__cnt"> {averageRating} / 5 </span>
            <span className="product__review__cnt">Отзывов: {reviewCnt} шт.</span>
            </div>
        </div>
        <div className="product__discount">{product?.discount} <Percent/></div>
        <div className="product__main">
        
            <img className="product__picture" src={product?.pictures} alt={product?.name} />
            <div className="product__shop_and_deliver">
                <span className="product__old__price">{product?.price}  ₽</span>
                <br/>
                <span className="product__new__price">{product?.price * (100 - product?.discount) / 100} ₽</span>
                
                <div className="product__add__cart">
                <input type="number" className="product__cart__cnt" placeholder="1" />
                <button className="product__cart__btn">В корзину</button>
                </div>
                <div className="product__add__favorites"><HeartFill /> В избранное</div>
                <div className="product__delivery__garanty"><TruckFront /><div className="product__delivery__garanty_text"><h3>Это доставка</h3><span>Доставка курьером —— от 399 ₽</span><span>Доставка в пункт выдачи — от 199 ₽</span></div></div>
                <div className="product__delivery__garanty"><Award /> <div className="product__delivery__garanty_text"><h3>Это гарантия</h3><span>Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все возможное, чтобы удовлетворить ваши нужды.</span></div></div>
                </div>
                
               
                

        </div>
            <mark>{product?.price} ₽</mark>
        </>
            : <Loader />
        }
</section>
    </>
}

export default Product;