import { render, screen } from '@testing-library/react';
import App from './App';

test('renders component', () => {
    render(<App />);
    const component = screen.getByTestId('App');
    expect(component).toBeInTheDocument();
});
