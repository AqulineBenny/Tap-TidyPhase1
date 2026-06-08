import './globals.css';
import Navbar from './Navbar';

export const metadata = {
  title: 'Tap & Tidy - Professional Cleaning Services',
  description: 'Connect with verified professional cleaners. Book trusted cleaning services easily.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}