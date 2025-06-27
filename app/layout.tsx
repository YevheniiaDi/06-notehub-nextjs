import './globals.css';
import { ReactNode } from 'react';
import TanStackProvider from './components/TanStackProvider/TanStackProvider';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: 'NoteHub',
  description: 'Manage your personal notes efficiently',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {children}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
