import up from '../../assets/chart-up.svg';
import down from '../../assets/chart-down.svg';

const TableRow = ({coin: {
        image ,
        symbol ,
        name ,
        current_price ,
        price_change_percentage_24h : price_change ,
        total_volume
    }}) => {

    return (
            <tr>
                <td>
                    <div>
                        <img src={image} alt={name} />
                        <span>{symbol.toUpperCase()}</span>
                    </div>
                </td>
                <td>{name}</td>
                <td>${current_price.toLocaleString()}</td>
                <td>{price_change.toFixed(2)}%</td>
                <td>{total_volume.toLocaleString()}</td>
                <td><img src={price_change > 0 ? up : down} /></td>
            </tr>
    );
};

export default TableRow;