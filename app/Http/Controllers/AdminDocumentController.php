<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminDocumentController extends Controller
{
    public function update(Request $request)
    {
        $docId = $request->input('doc_id');
        $newFile = $request->file('file');

        // 🔁 Vérifie d'abord si un fichier existe déjà
        $existingFile = collect(['pdf', 'png', 'jpg', 'jpeg', 'webp'])
            ->map(fn($ext) => [
                'ext' => $ext,
                'path' => "assets/documents/{$docId}.{$ext}",
            ])
            ->first(fn($item) => file_exists($item['path']));
            
        if (!$existingFile) {
            return back()->withErrors(['file' => 'Fichier original introuvable.']);
        }

        $oldExt = $existingFile['ext'];
        $oldPath = $existingFile['path'];

        // 🔒 Détermine les extensions autorisées selon l'ancien fichier
        $allowedMimeTypes = $oldExt === 'pdf'
            ? ['pdf']
            : ['png', 'jpg', 'jpeg', 'webp'];

        // ✅ Validation dynamique
        $request->validate([
            'doc_id' => 'required|string',
            'file' => ['required', 'file', 'mimes:' . implode(',', $allowedMimeTypes), 'max:20480'],
        ]);

        // 🧼 Supprime l'ancien fichier
        if (file_exists($oldPath)) {
            unlink($oldPath);
        }

        // 🔄 Sauvegarde le nouveau fichier avec sa nouvelle extension
        $newExt = $newFile->getClientOriginalExtension();
        $newFilename = "{$docId}.{$newExt}";
        $newPath = "assets/documents/{$newFilename}";

        $newFile->move(public_path('assets/documents'), $newFilename);

        return back()->with('success', 'Document mis à jour avec succès.');
    }
}
