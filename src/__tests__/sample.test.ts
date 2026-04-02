import { describe, it, expect } from 'vitest';

describe('Sample Test', () => {
  it('should pass basic assertion', () => {
    expect(1 + 1).toBe(2);
  });

  it('should handle string operations', () => {
    const name = 'Jaicker';
    expect(name.toLowerCase()).toBe('jaicker');
    expect(name.length).toBe(7);
  });

  it('should work with arrays', () => {
    const skills = ['React', 'TypeScript', 'Vite'];
    expect(skills).toHaveLength(3);
    expect(skills).toContain('React');
  });
});
