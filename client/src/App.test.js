import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import allProjects from './db';
 



test('it check SchowMore component', async () => {
    render(<App />);
    const showMore = screen.getAllByText(/show more/i)[0]
    fireEvent.click(showMore)
    await waitFor(() => screen.getByText(/employee/i))
    expect(screen.getByText(/employee/i)).toHaveTextContent('Anton')
    const close = screen.getByText(/close/i)
    fireEvent.click(close)
});
