import css from './style.module.css';
import PropTypes from 'prop-types';

const StatisticsItem = ({ data }) => (
    <li className={css.statsListItem}>
        <span className={css.statsLabel}>{data.label}</span>
        <span className={css.statsPercentage}>{data.percentage}%</span>
    </li>
);

StatisticsItem.propTypes = {
    data: PropTypes.shape({
        label: PropTypes.string,
        percentage: PropTypes.number,
    })
};


export {StatisticsItem}