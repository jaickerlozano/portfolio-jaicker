import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BentoProjects } from '../app/components/BentoProjects';

// Helper para eliminar props de animación que no reconoce el DOM
const MOTION_PROPS = [
  'initial',
  'animate',
  'exit',
  'transition',
  'whileInView',
  'viewport',
  'whileHover',
  'whileTap',
  'whileFocus',
  'whileDrag',
  'layout',
  'layoutId',
];

const cleanMotionProps = (props: Record<string, unknown>) => {
  return Object.fromEntries(Object.entries(props).filter(([key]) => !MOTION_PROPS.includes(key)));
};

// Mock de motion/react
vi.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode }) => (
      <div {...cleanMotionProps(props)}>{children}</div>
    ),
  },
}));

describe('BentoProjects', () => {
  it('renders projects section', () => {
    render(<BentoProjects />);
    expect(
      screen.getByText((_, node) => node?.textContent === 'Proyectos Destacados')
    ).toBeInTheDocument();
  });

  it('renders all project cards', () => {
    render(<BentoProjects />);
    const projectCards = screen.getAllByRole('heading', { level: 3 });
    expect(projectCards.length).toBeGreaterThanOrEqual(5);
  });

  it('renders project images/videos', () => {
    render(<BentoProjects />);
    const images = screen.queryAllByRole('img');
    const videos = screen.queryAllByRole('video');
    expect(images.length + videos.length).toBeGreaterThan(0);
  });

  it('renders GitHub and live demo links', () => {
    render(<BentoProjects />);
    const githubLinks = screen.getAllByRole('link', { name: /github/i });
    expect(githubLinks.length).toBeGreaterThan(0);

    const demoLinks = screen.getAllByRole('link', { name: /live demo/i });
    expect(demoLinks.length).toBeGreaterThan(0);
  });
});
