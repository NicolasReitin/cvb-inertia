import React, { useState } from 'react'
import { Head, useForm } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Team() {
  const [activeTab, setActiveTab] = useState('teams');

  return (
    <>
        <Head title = "Admin - Gestion des équipes" />

        <DashboardLayout>
          <h1>Les équipes</h1>

          <div className="p-6">
            <div className="flex space-x-4 border-b mb-6">
              <button
                className={`pb-2 ${activeTab === 'teams' ? 'border-b-2 border-blue-500 font-semibold' : 'text-gray-500'}`}
                onClick={() => setActiveTab('teams')}
              >
                Équipes
              </button>
              <button
                className={`pb-2 ${activeTab === 'players' ? 'border-b-2 border-blue-500 font-semibold' : 'text-gray-500'}`}
                onClick={() => setActiveTab('players')}
              >
                Joueurs
              </button>
            </div>

            {activeTab === 'teams' && <TeamsTab />}
            {activeTab === 'players' && <PlayersTab />}
          </div>

        </DashboardLayout>
    </>
  )
}

function TeamsTab() {
  const { data, setData, post, errors } = useForm({
    name: '',
    division: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('admin.teams.store'));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <label className="block text-sm font-medium">Nom de l’équipe</label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => setData('name', e.target.value)}
          className="w-full border rounded p-2"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Division</label>
        <input
          type="text"
          value={data.division}
          onChange={(e) => setData('division', e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">Créer</button>
    </form>
  );
}

function PlayersTab() {
  const { data, setData, post, errors } = useForm({
    team_id: '',
    firstname: '',
    lastname: '',
    number: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('admin.players.store'));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <label className="block text-sm font-medium">Équipe</label>
        <select
          value={data.team_id}
          onChange={(e) => setData('team_id', e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="">Choisir une équipe</option>
          {/* Liste des équipes à injecter depuis props */}
        </select>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Prénom"
          value={data.firstname}
          onChange={(e) => setData('firstname', e.target.value)}
          className="w-1/2 border rounded p-2"
        />
        <input
          type="text"
          placeholder="Nom"
          value={data.lastname}
          onChange={(e) => setData('lastname', e.target.value)}
          className="w-1/2 border rounded p-2"
        />
      </div>

      <div>
        <input
          type="number"
          placeholder="Numéro"
          value={data.number}
          onChange={(e) => setData('number', e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <button className="bg-green-600 text-white px-4 py-2 rounded">Ajouter</button>
    </form>
  );
}