import { Quote } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import "./style.css";


const News = ({ user, author, content, description, publishedAt, title, url, urlToImage }) => {

    return <>
    
    <a href={url} className="news__card" >
    <h3 className="news__name">{title}</h3>
<img src={urlToImage} alt="Картинка" className="news__img" />

<span className="news__description">{description}</span>
<button className="news__btn">Читать источник</button>

</a>

    </>
}


export default News