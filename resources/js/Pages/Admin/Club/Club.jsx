import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { documents } from '@/config/documents';
import useExistingExtension from '@/hooks/useExistingExtension';

export default function Club() {
  // State qui stocke un "reloadKey" par document, initialisé à Date.now()
  const [reloadKeys, setReloadKeys] = useState(() => {
    const keys = {};
    documents.forEach(doc => {
      keys[doc.id] = Date.now();
    });
    return keys;
  });

  const handleFileChange = (docId, file, currentFilename) => {
    const currentExt = getExtension(currentFilename);
    const newExt = getExtension(file.name);

    const isPdf = currentExt === 'pdf';
    const isImage = ['png', 'jpg', 'jpeg', 'webp'].includes(currentExt);
    const isNewPdf = newExt === 'pdf';
    const isNewImage = ['png', 'jpg', 'jpeg', 'webp'].includes(newExt);

    if ((isPdf && !isNewPdf) || (isImage && !isNewImage)) {
      alert(`Le fichier sélectionné est invalide. Vous ne pouvez pas remplacer un ${currentExt.toUpperCase()} par un ${newExt.toUpperCase()}.`);
      return;
    }

    const isConfirmed = window.confirm(
      `Êtes-vous sûr de modifier ce fichier ? Cette action est définitive.`
    );
    if (!isConfirmed) return;

    const formData = new FormData();
    formData.append('doc_id', docId);
    formData.append('file', file);

    router.post(route('admin.documents.update'), formData, {
      preserveScroll: true,
      forceFormData: true,
      onSuccess: () => {
        if (currentExt !== newExt) {
          window.location.reload();
        } else {
          // sinon, met à jour juste le reloadKey pour forcer le rafraîchissement du fichier
          setReloadKeys((prev) => ({
            ...prev,
            [docId]: Date.now(),
          }));
        }
      }
    });
  };

  return (
    <>
      <Head title="Admin - Club" />
      <DashboardLayout>
        <h1>Documents</h1>
        <div className="flex justify-center flex-wrap gap-8">
          {documents.map((doc) => (
            <DocumentCard
              key={doc.id}
              doc={doc}
              reloadKey={reloadKeys[doc.id]}
              onFileChange={handleFileChange}
            />
          ))}
        </div>
      </DashboardLayout>
    </>
  );
}

function getExtension(filename) {
  if (!filename) return '';
  return filename.split('.').pop().toLowerCase();
}

function DocumentCard({ doc, onFileChange, reloadKey }) {
  const ext = useExistingExtension(doc.id);

  if (!ext) return <div>Fichier non trouvé</div>;

  // Utilise reloadKey pour le cache-busting
  const fileUrl = `/assets/documents/${doc.id}.${ext}?t=${reloadKey}`;

  const handleChange = (e) => {
    onFileChange(doc.id, e.target.files[0], `${doc.id}.${ext}`);
  };

  return (
    <div className="card border border-gray-300 rounded-xl p-4 w-[400px] h-[560px] flex flex-col justify-between shadow">
      <div className="text-center font-semibold mb-2">{doc.name}</div>

      {ext === 'pdf' ? (
        <iframe
          src={fileUrl}
          width="100%"
          height="560px"
          className="border"
        />
      ) : (
        <img
          src={fileUrl}
          alt={doc.name}
          className="w-full h-[560px] object-contain bg-gray-50 border"
        />
      )}

      <input
        type="file"
        accept="application/pdf,image/png,image/jpeg,image/webp"
        onChange={handleChange}
        className="
          mt-4 w-full text-center text-sm text-gray-600
          file:border file:border-[#4849da]
          file:bg-white
          file:text-[#4849da]
          file:py-1 file:px-3 file:rounded
          hover:file:bg-[#4849da] hover:file:text-white
          file:cursor-pointer
        "
      />
    </div>
  );
}
