import React from 'react';
import data from './data.json';
import { StatisticsItem } from './StatisticsItem';
import css from './style.module.css';
import PropTypes from 'prop-types';

const Statistics = props => (
    <section className={css.stats}>
        <h2 className={css.statsTitle}>Upload stats</h2>
        <ul className={css.statsList}>
            {data.map(el => (
                <StatisticsItem key ={el.id} data={el}/>
            ))}
        </ul>
    </section>
);

Statistics.propTypes = ({
    props: PropTypes.array
});

export {Statistics}