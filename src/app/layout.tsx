'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar'; // Importa tu Navbar
import Footer  from '@/components/Footer';
import { usePathname } from 'next/navigation';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();
  const excludedRoutes = ['/login', '/register', '/biblioteca','/halo','/borderland','/tlof','/among-us', '/gotham' , '/stray' , '/grand']; // Rutas donde no se mostrará el layout
  const shouldShowLayout = !excludedRoutes.includes(pathname);
  return (
    <html lang="es">
      <body className={inter.className}>
        {shouldShowLayout && <Navbar />} {/* Aquí renderizas tu Navbar */}
        <main>{children}</main> {/* Aquí se renderizará el contenido de tus páginas */}
        {shouldShowLayout && <Footer />}
      </body>
    </html>
  );
}
