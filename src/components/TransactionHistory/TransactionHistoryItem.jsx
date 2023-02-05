

const TransactionHistoryItem = ({ transactions }) => (
    <tr>
        <td>{transactions.type}</td>
        <td>{transactions.amount}</td>
        <td>{transactions.currency}</td>
    </tr>

    
);

export { TransactionHistoryItem };