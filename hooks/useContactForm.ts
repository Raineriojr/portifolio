import { useState } from 'react';
import { toast } from 'sonner';
export const useContactForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSendWhatsApp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!name || !message) {
      toast.warning('Preencha todos os campos');
      return;
    }

    const phone = process.env.NEXT_PUBLIC_PHONE;
    const text = `Olá, meu nome é ${name}. \n\n ${message}`.trim();

    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappLink, '_blank');
    setName('');
    setMessage('');
  };

  return {
    form: {
      name,
      setName,
      message,
      setMessage,
    },
    handleSendWhatsApp,
  };
};
