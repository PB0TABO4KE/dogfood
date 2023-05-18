import { useState, useEffect, useContext } from "react";
import Ctx from "../../context"

import "./style.css";

//arr - это список товаров из json-файла//
const Search = ({ arr }) => {
    const {setGoods} = useContext(Ctx);
    const [text, setText] = useState("");
    const [quantity, setQuantity] = useState(arr.length)



useEffect(() => {
    if (text) {
        let result = arr.filter(el => new RegExp(text, "i").test(el.name));
        setGoods(result);
        setQuantity(result.length);
    }
    else {
        setGoods(arr);
        setQuantity(arr.length);
    }
},
[arr])

    const searchByText = (e) => {
        //e.target - обращение к тегу, на котором произошло событие//
        let val = e.target.value;
        setText(val);
        //let result = arr.filter(el => el.name.toLowerCase().includes(val.toLowerCase()))//
        let result = arr.filter(el => new RegExp(val, "i").test(el.name));
        setGoods(result);
        setQuantity(result.length);
        console.log(result);
    }

    return (
        <div className="search-block">
            <input type="search" className="search__common" placeholder="Поиск по сайту" value={text} onChange={searchByText} />

            {/*<input type="search" className="search" placeholder="Поиск по сайту" value={text} onChange={()=> setText(e.target.value)} /> так тоже можно*/}
            <button /*onClick={click}*/>Тяфк</button>
            <hr />
            {/*<div>{text}, {n}, {count}</div>*/}
            <div>По вашему запросу «{text}» найден {quantity} подходящих товаров</div>
        </div>
    )
}

export default Search;