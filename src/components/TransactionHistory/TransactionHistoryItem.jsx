import css from './style.module.css';

const TransactionHistoryItem = ({ transactions }) => (
    <tr className={css.tableRows}>
        <td className={css.tableRow}>{transactions.type}</td>
        <td className={css.tableRow}>{transactions.amount}</td>
        <td className={css.tableRow}>{transactions.currency}</td>
    </tr>

    
);

export { TransactionHistoryItem };