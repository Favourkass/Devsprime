import { render, screen, cleanup } from '@testing-library/react';
import blogData from '../components/blogCard/data';
import BlogCard from '../components/blogCard';


describe('test blog card image', () => {
  it('show that blog card has an image', () => {
    render(<BlogCard blog={blogData} />)
    const staticCardImage = screen.getByRole("img");
    expect(staticCardImage).toHaveAttribute('src');
  })
});

describe('test blog card Title', () => {
  it('check that blog card has a title', () => {
    render(<BlogCard blog={blogData} />)
    const statisticvValue = screen.findAllByText(/Lorem ipsum dolor/i);
    expect(statisticvValue).toBeTruthy();
    cleanup()

  })
});

describe('test blog card body', () => {
  it('check that blog card has a body', () => {
    render(<BlogCard blog={blogData} />)
    const statisticvValue = screen.findAllByText(/Lorem ipsum dolor, s.molestiae obcaecati quaerat/i);
    expect(statisticvValue).toBeTruthy();
    cleanup()

  })
});



