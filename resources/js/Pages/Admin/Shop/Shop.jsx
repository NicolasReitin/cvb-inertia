import React from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Shop() {
  return (
    <>
        <Head title = "Admin - Club" />

        <DashboardLayout>
          <h1>La boutique</h1>

          <div>Shop</div>

        </DashboardLayout>
    </>
  )
}