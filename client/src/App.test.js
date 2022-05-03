import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
 



test('it check onClick show more button', async () => {
    render(<App />);
    const showMore = screen.getAllByText(/show more/i)[0]
    fireEvent.click(showMore)
    await waitFor(() => screen.getByText(/employee/i))
    const close = screen.getByText(/close/i)
    fireEvent.click(close)
});
