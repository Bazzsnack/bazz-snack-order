"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#1A1A1A] w-full pt-16 pb-8 border-t-[8px] border-primary">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-12">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-1">
            <div className="relative w-56 h-20">
              <Image 
                src="/images/logo-new.png" 
                alt="Bazz Snack" 
                fill 
                className="object-contain object-left" 
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Pusat snack kekinian dengan cita rasa premium. Dipercaya ratusan pelanggan sejak 2024.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm text-white uppercase tracking-widest">Tautan Cepat</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#home" className="text-sm text-gray-400 hover:text-primary transition-colors">Beranda</a></li>
              <li><a href="#menu" className="text-sm text-gray-400 hover:text-primary transition-colors">Menu Favorit</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm text-white uppercase tracking-widest">Kontak Kami</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z" />
                </svg>
                <a 
                  href="https://www.instagram.com/bazzsnack?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  Bazz Snack
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-xl text-primary shrink-0">location_on</span>
                <span className="text-sm text-gray-400">Jl. Pacet No.46, Kembang Sore,<br/>Pacet, Mojokerto 61374</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
