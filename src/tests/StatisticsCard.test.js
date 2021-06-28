import { render, screen, cleanup } from '@testing-library/react';
import StatisticCard from '../components/statisticCard/';
import StatisticData from '../components/statisticCard/data';

describe('test statistic card image', () => {
  it('show that statistic card has an image', () => {
    render(<StatisticCard data={StatisticData} />)
    const staticCardImage = screen.getByRole("img");
    expect(staticCardImage).toHaveAttribute('alt');
  })
});

describe('test statistic card counter', () => {
  it('check that statistic card has a counters', () => {
    render(<StatisticCard data={StatisticData} />)
    const statisticvValue = screen.findAllByText(/5697/i);
    expect(statisticvValue).toBeTruthy();
    cleanup()

  })
});
