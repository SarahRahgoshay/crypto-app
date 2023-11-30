import { RotatingLines } from 'react-loader-spinner';
import TableRow from './TableRow';

const TableCoin = ({coins , isLoading}) => {
    return (
        <div>
            {isLoading ? (
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                />
            ) : (
                <table>
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
                        {coins.map((coin) => (<TableRow key={coin.id} coin={coin}/>))}   
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TableCoin;