'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return (
    <button className="h-10 w-10 rounded-md border bg-transparent"></button>
  );

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="h-10 w-10 rounded-md border flex items-center justify-center bg-transparent hover:bg-accent dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="h-5 w-5 text-gray-100" />
      ) : (
        <Moon className="h-5 w-5 text-gray-900" />
      )}
    </button>
  );
}
