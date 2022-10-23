import { screen, render } from '@testing-library/react';
import { Icon } from './icon';

describe('Icon', () => {
    it('Renders an SVG', () => {
        render(<Icon name="github" />);
        expect(screen.getByTestId('icon-github')).toBeInTheDocument();
    });
});
