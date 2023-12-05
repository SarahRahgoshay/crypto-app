import { useEffect, useState } from "react";
import { searchCoin } from "../../services/cryptoApi";
import { RotatingLines } from "react-loader-spinner";
import styles from "./Search.module.css";

const Search = ({currency , setCurrency}) => {  
    const [search , setSearch] = useState("");
    const [coins , setCoins] = useState([]);
    const [isLoading , setIsLoading] = useState(false)

    useEffect( () => {
        const controller = new AbortController();

        const signal = controller.signal;

        setCoins([]);

        if (!search) {
            setIsLoading(false);
            return;
        }

        const searchData = async () => {
            try {
                const res = await fetch(searchCoin(search) , {signal: signal});
                const json = await res.json();
                if (json.coins) {
                    setIsLoading(false);
                    setCoins(json.coins)
                }else{
                    alert(json.status.error_message)
                };
            }catch(error){
                if(error.name !== "AbortError"){
                    alert(error.message)
                }
            }
        }

        setIsLoading(true);
        searchData();

        return () =>  controller.abort();
    } , [search])

    return (
        <div className={styles.searchBox}>
            <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)}  />
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value="usd"> USD </option>
                <option value="eur"> EUR </option>
                <option value="jpy"> JPY </option>
            </select>
            {(!!coins.length || isLoading) && (
                <div className={styles.searchContainer}>
                {isLoading &&  <RotatingLines strokeColor="gray" width="50px" strokeWidth="3"/>}
                <ul>
                    {coins.map((coin)=> (
                        <li key={coin.id}>
                            <img src={coin.thumb} alt={coin.name} />
                            <p>{coin.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            )}
        </div>
    );
};

export default Search;