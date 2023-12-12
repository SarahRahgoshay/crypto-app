import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart";

const HomePage = () => {

    const [data , setData] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [page , setPage] = useState(1);
    const [currency , setCurrency] = useState("usd");
    const [chart , setChart] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const fetchCoins = async () => {
            const res= await fetch(getCoinList(page , currency))
            const json = await res.json()
            setData(json);
            setIsLoading(false)
        }
        fetchCoins();
    }, [page , currency])

    return (
        <div>
           <Search currency={currency} setCurrency={setCurrency} />
           <TableCoin coins= {data} isLoading={isLoading} setChart={setChart} />
           <Pagination page={page} setPage={setPage} />
           { !!chart && <Chart chart={chart} setChart={setChart} /> }
        </div>
    );
};

export default HomePage;