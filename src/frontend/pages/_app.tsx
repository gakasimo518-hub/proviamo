import type { AppProps } from 'next/app';
import '../shared/theme/colors.css';
import '../shared/theme/typography.css';
import '../shared/theme/spacing.css';
import '../shared/theme/components.css';
import '../shared/theme/layout.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthProvider } from '../utils/auth';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token && router.pathname !== '/login') {
      router.replace('/login');
    }
  }, [router]);

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}