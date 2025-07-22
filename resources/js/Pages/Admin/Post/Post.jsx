import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import ButtonAddPost from '@/Components/Dashboard/Post/ButtonAddPost';
import PostList from '@/Components/Dashboard/Post/PostList';
import Post from '@/Components/Dashboard/Post/Post';


export default function Dashboard() {

  return (
    <>
      <Head title = "Actualités" />

      <DashboardLayout>

        <Post />

      </DashboardLayout>
    </>
  );
  
}
