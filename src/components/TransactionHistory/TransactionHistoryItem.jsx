import css from './style.module.css';
import PropTypes from 'prop-types';

const TransactionHistoryItem = ({ transactions }) => (
    <tr className={css.tableRows}>
        <td className={css.tableRow}>{transactions.type}</td>
        <td className={css.tableRow}>{transactions.amount}</td>
        <td className={css.tableRow}>{transactions.currency}</td>
    </tr>

    
);

TransactionHistoryItem.propTypes = ({
    transactions: PropTypes.shape({
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
    })
});

export { TransactionHistoryItem };