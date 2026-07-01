import type { Metadata } from 'next';
import './globals.css';
import TanstackProvider from '@/providers/TanstackQueryProvider';
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: 'Login | LibraDesk',
  description: 'Institutional Library Management Login',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <ToastContainer />
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
