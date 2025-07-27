import { useEffect, useState } from 'react';

const exts = ['pdf', 'png', 'jpg', 'jpeg', 'webp'];

export default function useExistingExtension(docId) {
  const [ext, setExt] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function checkExtensions() {
      for (const e of exts) {
        const url = `/assets/documents/${docId}.${e}`;
        try {
          const res = await fetch(url, { method: 'HEAD' });
          if (res.ok && !cancelled) {
            setExt(e);
            return;
          }
        } catch {}
      }
      if (!cancelled) setExt(null);
    }

    checkExtensions();

    return () => { cancelled = true };
  }, [docId]);

  return ext;
}
