import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Contact } from '../app/components/Contact';

// Mock de react-i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

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
    section: ({ children, ...props }: { children: React.ReactNode }) => (
      <section {...cleanMotionProps(props)}>{children}</section>
    ),
  },
}));

const mockFetch = vi.fn();

describe('Contact', () => {
  beforeEach(() => {
    global.fetch = mockFetch;
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('renders contact form', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/contact\.form\.name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contact\.form\.email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contact\.form\.message/i)).toBeInTheDocument();
  });

  it('submits form successfully', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    });

    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/contact\.form\.name/i), {
      target: { value: 'Test User' },
    });
    fireEvent.change(screen.getByLabelText(/contact\.form\.email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/contact\.form\.message/i), {
      target: { value: 'Test message' },
    });

    fireEvent.click(screen.getByRole('button', { name: /contact\.form\.submit/i }));

    await waitFor(() => {
      expect(screen.getByText('contact.form.success')).toBeInTheDocument();
    });

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      'https://formspree.io/f/mblpddvd',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          message: 'Test message',
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
    );
  });

  it('handles form submission error', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'));

    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/contact\.form\.name/i), {
      target: { value: 'Test User' },
    });
    fireEvent.change(screen.getByLabelText(/contact\.form\.email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/contact\.form\.message/i), {
      target: { value: 'Test message' },
    });

    fireEvent.click(screen.getByRole('button', { name: /contact\.form\.submit/i }));

    await waitFor(() => {
      expect(screen.getByText('contact.form.error')).toBeInTheDocument();
    });
  });

  it('handles non-ok response from server', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({}),
    });

    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/contact\.form\.name/i), {
      target: { value: 'Test User' },
    });
    fireEvent.change(screen.getByLabelText(/contact\.form\.email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/contact\.form\.message/i), {
      target: { value: 'Test message' },
    });

    fireEvent.click(screen.getByRole('button', { name: /contact\.form\.submit/i }));

    await waitFor(() => {
      expect(screen.getByText('contact.form.error')).toBeInTheDocument();
    });
  });
});
