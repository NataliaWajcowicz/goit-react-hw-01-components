import { TransactionHistoryItem } from "./TransactionHistoryItem";
import transactions from './transactions.json';

const TransactionHistory = props => (
    <table>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {transactions.map(el => (
                <TransactionHistoryItem key={el.id} transactions={el} />
            ))}
        </tbody>
    </table>
);

export { TransactionHistory };