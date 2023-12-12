import { RotatingLines } from 'react-loader-spinner';
import TableRow from './TableRow';

import styles from './TableCoin.module.css';

const TableCoin = ({coins , isLoading , setChart}) => {
    return (
        <div className={styles.container}>
            {isLoading ? (
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                />
            ) : (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Coin</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>24h</th>
                            <th>Total volume</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {coins.map((coin) => (<TableRow key={coin.id} coin={coin} setChart={setChart} />))}   
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TableCoin;