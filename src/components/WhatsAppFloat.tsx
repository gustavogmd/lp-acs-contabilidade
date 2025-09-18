import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521981421713?text=Ol%C3%A1%2C%20te%20encontrei%20no%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os%20de%20contabilidade.', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Entrar em contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppFloat;