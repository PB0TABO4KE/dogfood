import "./style.css";


const News = ({ description, title, url, urlToImage }) => {

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