export default function FloatingWhatsApp() {
  return (
    <a 
      className="fixed bottom-md right-md z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all group" 
      href="https://wa.me/919348250968" 
      target="_blank" 
      rel="noreferrer"
    >
      <span 
        className="material-symbols-outlined text-white text-3xl" 
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        chat
      </span>
      <span className="absolute right-20 bg-white text-black px-md py-sm rounded-xl font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
}
