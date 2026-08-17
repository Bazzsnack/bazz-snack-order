export default function Footer() {
  return (
    <footer className="relative bg-[#1A1A1A] w-full pt-16 pb-8 border-t-[8px] border-primary">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="font-headline font-bold text-3xl text-white">
              <span className="text-primary">Bazz</span> Snack
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Pusat snack kekinian dengan cita rasa premium. Dipercaya ratusan pelanggan sejak 2024.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#1A1A1A] hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-sm">facebook</span>
              </a>
              <a href="https://www.instagram.com/bazzsnack?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#1A1A1A] hover:bg-primary hover:text-white transition-colors">
                {/* SVG for Instagram since material doesn't have it natively sometimes */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm text-white uppercase tracking-widest">Tautan Cepat</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#home" className="text-sm text-gray-400 hover:text-primary transition-colors">Beranda</a></li>
              <li><a href="#menu" className="text-sm text-gray-400 hover:text-primary transition-colors">Menu Favorit</a></li>
              <li><a href="#ulasan" className="text-sm text-gray-400 hover:text-primary transition-colors">Ulasan Pelanggan</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm text-white uppercase tracking-widest">Kontak Kami</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-sm text-primary mt-0.5">call</span>
                <span className="text-sm text-gray-400">Order via WhatsApp<br/>(Link di keranjang)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-sm text-primary mt-0.5">location_on</span>
                <span className="text-sm text-gray-400">Jl. Pacet No.46, Kembang Sore,<br/>Pacet, Mojokerto 61374</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-4 bg-[#222222] p-6 rounded-2xl border border-gray-800">
            <h4 className="font-bold text-sm text-white uppercase tracking-widest">STAY IN THE LOOP!</h4>
            <p className="text-sm text-gray-400">Dapatkan info promo spesial & menu baru kami.</p>
            <form className="flex flex-col gap-3 mt-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Alamat Email" 
                className="bg-white text-black px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary"
              />
              <button 
                type="button"
                className="bg-primary text-white font-bold uppercase tracking-wider text-sm px-4 py-3 rounded-lg hover:bg-primary-dim transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800 gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Bazz Snack. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-1 font-semibold text-gray-400">
            Dibuat dengan <span className="text-primary mx-1 text-sm">♥</span> untuk Mojokerto
          </div>
        </div>
      </div>
    </footer>
  );
}
