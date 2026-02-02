import { useCallback } from 'react';
import { toast } from 'sonner';

export function useClipboard() {
  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Email copiado com sucesso!');
    } catch (err) {
      console.log('Falha ao copiar o texto', err);
    }
  }, []);
  return {
    copyToClipboard,
  };
}
