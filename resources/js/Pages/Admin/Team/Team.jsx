import React from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Team() {
  return (
    <>
        <Head title = "Admin - Club" />

        <DashboardLayout>
          <h1>Les équipes</h1>

          <div>Equipes</div>

        </DashboardLayout>
    </>
  )
}