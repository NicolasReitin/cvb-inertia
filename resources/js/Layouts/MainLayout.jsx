import React from 'react';
import { Head } from '@inertiajs/react';

import Header from '@/Layouts/Header';
import Footer from '@/Layouts/Footer';

export default function MainLayout({ children, title = 'CVB' }) {
  return (
    <>
      <Head title={title} />

      <Header />

      <main className="min-h-screen">
        {children}
      </main>
      
      <Footer />
    </>
  );
}
