import React from 'react';
import { statisticWrapper, StatisticContainer } from './style';

function StatisticCard({data}) {
    return (
        <statisticWrapper>
            <StatisticContainer
                key={data.id}
                src={data.img}
                count={data.count}
                label={data.label}
            />
        </statisticWrapper>
    )
}

export default StatisticCard;
