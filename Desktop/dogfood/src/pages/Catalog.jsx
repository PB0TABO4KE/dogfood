import Card from "../components/Card";
import { useState, useEffect } from "react";



const Catalog = ({ goods, setServerGoods }) => {

    const [sort, setSort] = useState(null);

    const filterSt = {
        gridColumnEnd: "span 4",
        display: "flex",
        gap: "20px"
    }
    const sortHandler = (vector) => {
        if (vector === sort) {
            setSort(null)
            setServerGoods(old => old.sort((a,b) => new Date (a.created_at).getTime() - new Date (b.created_at).getTime()))
        }
        else {
            setSort(vector);
            goods.sort((a, b) => {
                return vector === "up" ? (a.price - b.price) : (b.price - a.price)
            })
        }
    }
    return (<div className="container">
        <div style={filterSt}>

            {/*Сортировка*/}
            <button style={{ background: sort === "up" ? "orange" : "rgb(239, 239, 239)" }} onClick={() => sortHandler("up")}>По возрастанию цены</button>
            <button style={{ background: sort === "down" ? "orange" : "rgb(239, 239, 239)" }} onClick={() => sortHandler("down")}>По убыванию цены</button>
            {/*Фильтрация*/}
            <button>Новинки</button>
            <button>Скидки</button>
         
        </div>
        {goods?.map(g => <Card key={g._id} {...g} img={g.pictures} setServerGoods={setServerGoods} />)}
    </div>
    )
}

export default Catalog;