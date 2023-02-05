import { TransactionHistoryItem } from "./TransactionHistoryItem";
import transactions from './transactions.json';

const TransactionHistory = props => (
    <table>
        <thead>
            <tr>Type</tr>
            <tr>Amount</tr>
            <tr>Currency</tr>
        </thead>

        <tbody>
            {transactions.map(el => (
                <TransactionHistoryItem key={el.id} transactions={el} />
            ))}
        </tbody>
    </table>
);

export { TransactionHistory };