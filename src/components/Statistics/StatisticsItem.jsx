const StatisticsItem = ({ data }) => (
    <li>
        <span>{ data.label}</span>
        <span>{ data.percentage}%</span>
    </li>
)

export {StatisticsItem}