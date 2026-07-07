import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Hero } from '../app/components/Hero';

// Mock de react-i18next para devolver las claves de traducción
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

// Mock de motion/react para evitar dependencias de animación en los tests
vi.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode }) => (
      <div {...props}>{children}</div>
    ),
    h1: ({ children, ...props }: { children: React.ReactNode }) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: { children: React.ReactNode }) => <p {...props}>{children}</p>,
  },
}));

describe('Hero', () => {
  it('renders hero section', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders CTA buttons with correct links', () => {
    render(<Hero />);
    const projectsLink = screen.getByRole('link', { name: /view my projects/i });
    expect(projectsLink).toHaveAttribute('href', '#projects');

    const contactLink = screen.getByRole('link', { name: /go to contact section/i });
    expect(contactLink).toHaveAttribute('href', '#contact');
  });

  it('renders availability badge and description', () => {
    render(<Hero />);
    expect(screen.getByText('hero.available')).toBeInTheDocument();
    expect(screen.getByText('hero.description')).toBeInTheDocument();
  });
});
