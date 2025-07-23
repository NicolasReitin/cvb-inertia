import React from 'react'
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import PostList from '@/Components/Dashboard/Post/PostList';
import CreatePost from '@/Components/Dashboard/Post/CreatePost';


export default function Dashboard() {

  return (
    <>
      <Head title = "Admin - Actualités" />

      <DashboardLayout>

        <div className="">
          <CreatePost />
        </div>
        <div className="liste-actus mt-24">
          <PostList />
        </div>

      </DashboardLayout>
    </>
  );
  
}
