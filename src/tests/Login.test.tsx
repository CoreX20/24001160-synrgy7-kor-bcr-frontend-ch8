// import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Untuk mocking react-router-dom
import Header from '../components/Header';

describe('Header component', () => {
  test('renders header content correctly', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );

    // Test untuk mengecek bahwa judul halaman ada
    const titleElement = screen.getByText(/Sewa & Rental Mobil Terbaik/i);
    expect(titleElement).toBeInTheDocument();

    // Test untuk mengecek bahwa button "Mulai Sewa Mobil" ada jika path bukan '/cars'
    const buttonElement = screen.getByRole('button', { name: /Mulai Sewa Mobil/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('does not render "Mulai Sewa Mobil" button on /cars page', () => {
    render(
      <MemoryRouter initialEntries={['/cars']}>
        <Header />
      </MemoryRouter>
    );

    const buttonElement = screen.queryByRole('button', { name: /Mulai Sewa Mobil/i });
    expect(buttonElement).not.toBeInTheDocument();
  });
});
