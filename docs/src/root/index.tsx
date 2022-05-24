import { useEffect, useState } from 'react';
import { ThemeProvider } from '@joshdschneider/formation';
import Nav from './nav';
import RootRoutes from './routes';
import './_root.scss';

function Root() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    let item = localStorage.getItem('formation_theme');
    if (item === 'dark') setTheme('dark');
  }, []);

  function toggleTheme(): void {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('formation_theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('formation_theme', 'light');
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <RootRoutes />
    </ThemeProvider>
  );
}

export default Root;
