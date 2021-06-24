import { render } from '@testing-library/react';

import CourseCard from '../components/courseCard';

describe('CourseCard component', () => {
    test('checks for props', () => {
        render(<CourseCard />)
        const card = document.getElementById('CourseCard')
        expect(card).toBeInTheDocument();
    })
})
