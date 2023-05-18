import "./style.css";
import { useState, useContext} from "react";
import Ctx from "../../context"


const SearchHeader = ({ arr, user }) => {
    const {setGoods} = useContext(Ctx);
    const [text, setText] = useState("");

    const searchByText = (e) => {
        //e.target - обращение к тегу, на котором произошло событие//
        let val = e.target.value;
        setText(val);
        //let result = arr.filter(el => el.name.toLowerCase().includes(val.toLowerCase()))//
        let result = arr.filter(el => new RegExp(val, "i").test(el.name));
        setGoods(result);
        console.log(result);
    }

    return (<>
        {user && <>
            <div className="search-header">
                <input type="search" placeholder="Поиск" value={text} onChange={searchByText} />
            </div>
        </>}

    </>)
}

export default SearchHeader;