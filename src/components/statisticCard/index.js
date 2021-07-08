import React from 'react';
import { StatisticWrapper, StatisticContainer } from './style';

function StatisticCard({data}) {
    return (
        <StatisticWrapper>
            <StatisticContainer
                key={data.id}
                src={data.img}
                count={data.count}
                label={data.label}
            />
        </StatisticWrapper>
    )
}

export default StatisticCard;
