import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../services/cryptoApi";

const HomePage = () => {

    const [data , setData] = useState([]);

    useEffect(() => {
        const fetchCoins = async () => {
            const res= await fetch(getCoinList())
            const json = await res.json()
            setData(json)
        }
        fetchCoins();
    }, [])

    return (
        <div>
           <TableCoin coins= {data} />
        </div>
    );
};

export default HomePage;