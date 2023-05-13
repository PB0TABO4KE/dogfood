import Card from "../components/Card";
import { useEffect } from "react";



const Catalog = ({goods, serverGoods}) => {
    return (<div className = "container">
    
    {goods?.map(g => <Card key={g._id} {...g} img={g.pictures} /> )}
    </div>
    )
}

export default Catalog;