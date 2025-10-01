import whatsappLogo from "@/assets/logo-whatsapp.png";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521981421713?text=Ol%C3%A1%2C%20te%20encontrei%20no%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os%20de%20contabilidade.', '_blank');
  };

  return (
    <div 
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center cursor-pointer group"
    >
      <div className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse">
        <img 
          src={whatsappLogo} 
          alt="WhatsApp" 
          className="w-8 h-8"
        />
      </div>
      <p className="text-xs font-medium text-center mt-2 bg-white px-2 py-1 rounded shadow-md max-w-[120px] leading-tight">
        Clique aqui e Fale conosco
      </p>
    </div>
  );
};

export default WhatsAppFloat;