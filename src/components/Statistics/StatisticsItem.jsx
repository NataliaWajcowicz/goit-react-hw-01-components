import css from './style.module.css';

const StatisticsItem = ({ data }) => (
    <li className={css.statsListItem}>
        <span className={css.statsLabel}>{ data.label}</span>
        <span className={css.statsPercentage}>{ data.percentage}%</span>
    </li>
)

export {StatisticsItem}