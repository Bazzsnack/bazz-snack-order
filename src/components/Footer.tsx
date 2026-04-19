export default function Footer() {
  return (
    <footer className="relative bg-surface-container-lowest w-full pt-16 pb-8 border-t border-outline-variant/10 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Top Row — Brand + Address + Social */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <h3 className="font-headline font-extrabold text-2xl text-transparent bg-clip-text liquid-fire">
              Bazz Snack
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs">
              Pusat snack kekinian dengan cita rasa premium. Dipercaya ratusan pelanggan sejak 2024.
            </p>
          </div>

          {/* Alamat */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-base">location_on</span>
              Alamat
            </h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Jl. Pacet No.46, Kembang Sore, Petak,
              <br />
              Kec. Pacet, Kabupaten Mojokerto,
              <br />
              Jawa Timur 61374
            </p>
          </div>

          {/* Sosial Media */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
              Ikuti Kami
            </h4>
            <a
              href="https://www.instagram.com/bazzsnack?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 w-fit px-4 py-2.5 rounded-xl bg-surface-container border border-outline-variant/15 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
            >
              {/* Instagram SVG Icon */}
              <svg
                className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z" />
              </svg>
              <span className="text-sm font-semibold text-on-surface-variant group-hover:text-white transition-colors">
                @bazzsnack
              </span>
              <span className="material-symbols-outlined text-sm text-on-surface-variant/50 group-hover:text-primary transition-colors">
                arrow_outward
              </span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent mb-6" />

        {/* Bottom — Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
          <p className="text-xs text-on-surface-variant/60 font-body">
            © 2026 Bazz Snack. Pusat Snack Kekinian
          </p>
        </div>
      </div>
    </footer>
  );
}
