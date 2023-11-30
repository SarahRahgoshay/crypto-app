import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../services/cryptoApi";

const HomePage = () => {

    const [data , setData] = useState([]);
    const [isLoading , setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCoins = async () => {
            const res= await fetch(getCoinList())
            const json = await res.json()
            setData(json);
            setIsLoading(false)
        }
        fetchCoins();
    }, [])

    return (
        <div>
           <TableCoin coins= {data} isLoading={isLoading} />
        </div>
    );
};

export default HomePage;