import React from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/DashboardLayout';
import Users from '@/Components/Dashboard/Users/Users';

export default function Club() {
  return (
    <>
        <Head title = "Admin - Club" />

        <DashboardLayout>

            <Users />

        </DashboardLayout>
    </>
  )
}