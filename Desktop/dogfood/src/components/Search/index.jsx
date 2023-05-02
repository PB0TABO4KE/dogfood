import { useState } from "react";

import "./style.css";

//arr - это список товаров из json-файла//
const Search = ({ arr, upd }) => {
    //let text = "corn";//
    const [text, setText] = useState("");

    const [quantity, setQuantity] = useState(arr.length)

    const [count, updateCount] = useState(0);
    //const [с чем сделать, что сделать(например функция)] = useState(0);//
    let n = 1;
    const click = () => {
        //console.log(n++);//
        updateCount(count + 1);
    }

    const searchByText = (e) => {
        //e.target - обращение к тегу, на котором произошло событие//
        let val = e.target.value;
        setText(val);
        //let result = arr.filter(el => el.name.toLowerCase().includes(val.toLowerCase()))//
        let result = arr.filter(el => new RegExp(val, "i").test(el.name));
        upd(result);
        setQuantity(result.length);
        console.log(result);
    }

    return (
        <div className="search-block">
            <input type="search" className="search" placeholder="Поиск по сайту" value={text} onChange={searchByText} />

            {/*<input type="search" className="search" placeholder="Поиск по сайту" value={text} onChange={()=> setText(e.target.value)} /> так тоже можно*/}
            <button onClick={click}>Тяфк</button>
            <hr />
            {/*<div>{text}, {n}, {count}</div>*/}
            <div>По вашему запросу «{text}» найден {quantity} подходящих товаров</div>
        </div>
    )
}

export default Search;