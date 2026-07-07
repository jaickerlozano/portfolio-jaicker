import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Navbar } from '../app/components/Navbar';

// Mock de react-i18next: respeta valores por defecto cuando el componente los provee
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, defaultValue?: string) => defaultValue || key,
    i18n: {
      language: 'es',
      changeLanguage: vi.fn(),
    },
  }),
}));

// Mock del hook de tema
vi.mock('../hooks/useTheme', () => ({
  useTheme: () => ({
    theme: 'dark',
    toggleTheme: vi.fn(),
  }),
}));

// Mock de motion/react para simplificar animaciones en tests
vi.mock('motion/react', () => ({
  motion: {
    nav: ({ children, ...props }: { children: React.ReactNode }) => (
      <nav {...props}>{children}</nav>
    ),
    div: ({ children, ...props }: { children: React.ReactNode }) => (
      <div {...props}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('nav.home')).toBeInTheDocument();
    expect(screen.getByText('nav.about')).toBeInTheDocument();
    expect(screen.getByText('nav.projects')).toBeInTheDocument();
    expect(screen.getByText('nav.skills')).toBeInTheDocument();
    expect(screen.getByText('nav.contact')).toBeInTheDocument();
  });

  it('toggles mobile menu on button click', () => {
    render(<Navbar />);
    // Inicialmente solo el menú desktop renderiza los links (el móvil está cerrado)
    expect(screen.getAllByText('nav.home')).toHaveLength(1);

    const toggleButton = screen.getByRole('button', { name: /toggle mobile menu/i });
    fireEvent.click(toggleButton);

    // Al abrirse el menú móvil, cada link aparece dos veces (desktop + mobile)
    expect(screen.getAllByText('nav.home')).toHaveLength(2);
    expect(screen.getAllByText('nav.about')).toHaveLength(2);
    expect(screen.getAllByText('nav.contact')).toHaveLength(2);
  });

  it('renders theme toggle button', () => {
    render(<Navbar />);
    expect(screen.getByRole('button', { name: /switch to/i })).toBeInTheDocument();
  });

  it('renders language toggle button', () => {
    render(<Navbar />);
    expect(screen.getByRole('button', { name: /language\.switch/i })).toBeInTheDocument();
  });
});
