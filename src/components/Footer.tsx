export default function Footer() {
  return (
    <footer className="bg-surface w-full py-12 border-t border-outline-variant/10">
      <div className="flex flex-col items-center gap-6 w-full text-center px-6">
        {/* Logo */}
        <div className="font-headline font-bold text-primary text-2xl">
          Bazz Snack
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm font-body font-light">
          <a
            href="#"
            className="text-gray-500 hover:text-white transition-colors"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition-colors"
          >
            Contact
          </a>
          <a
            href="https://wa.me/628XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
          >
            WhatsApp
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm font-body font-light text-gray-500">
          © 2024 Bazz Snack. Premium Editorial Street Food.
        </p>
      </div>
    </footer>
  );
}
