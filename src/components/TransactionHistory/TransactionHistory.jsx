import { TransactionHistoryItem } from "./TransactionHistoryItem";
import transactions from './transactions.json';
import css from './style.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = props => (
    <table className={css.transactionTable}>
        <thead>
            <tr>
                <th className={css.firstRow}>Type</th>
                <th className={css.firstRow}>Amount</th>
                <th className={css.firstRow}>Currency</th>
            </tr>
        </thead>

        <tbody className={css.tableBody}>
            {transactions.map(el => (
                <TransactionHistoryItem key={el.id} transactions={el} />
            ))}
        </tbody>
    </table>
);

TransactionHistory.propTypes = ({
    props: PropTypes.array,
})

export { TransactionHistory };