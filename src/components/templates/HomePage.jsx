import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";

const HomePage = () => {

    const [data , setData] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [page , setPage] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        const fetchCoins = async () => {
            const res= await fetch(getCoinList(page))
            const json = await res.json()
            setData(json);
            setIsLoading(false)
        }
        fetchCoins();
    }, [page])

    return (
        <div>
           <TableCoin coins= {data} isLoading={isLoading} />
           <Pagination page={page} setPage={setPage} />
        </div>
    );
};

export default HomePage;