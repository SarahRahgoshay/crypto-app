import up from '../../assets/chart-up.svg';
import down from '../../assets/chart-down.svg';

import styles from './TableCoin.module.css';
import { marketChart } from '../../services/cryptoApi';

const TableRow = ({coin , setChart}) => {

    const {
        id ,
        image ,
        symbol ,
        name ,
        current_price ,
        price_change_percentage_24h : price_change ,
        total_volume
    } = coin

    const showHandler = async () => {
        try{
            const res = await fetch(marketChart(id));
            const json = await res.json()
            setChart({...json , coin})
        }catch{
            setChart(null)
        }
    }    

    return (
            <tr>
                <td>
                    <div className={styles.symbol} onClick={showHandler}>
                        <img src={image} alt={name} />
                        <span>{symbol.toUpperCase()}</span>
                    </div>
                </td>
                <td>{name}</td>
                <td>${current_price.toLocaleString()}</td>
                <td className={ price_change > 0 ? styles.success : styles.error} >{price_change.toFixed(2)}%</td>
                <td>{total_volume.toLocaleString()}</td>
                <td><img src={price_change > 0 ? up : down} /></td>
            </tr>
    );
};

export default TableRow;