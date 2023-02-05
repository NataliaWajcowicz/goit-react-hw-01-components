import React from 'react';
import data from './data.json';
import { StatisticsItem } from './StatisticsItem';

const Statistics = props => (
    <section>
        <h2>Upload stats</h2>
        <ul>
            {data.map(el => (
                <StatisticsItem key ={el.id} data={el}/>
            ))}
        </ul>
    </section>
);

export {Statistics}