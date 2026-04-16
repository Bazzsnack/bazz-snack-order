"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6 max-w-7xl mx-auto pt-20"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="z-10 space-y-8 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-highest border border-outline-variant/15">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-label uppercase tracking-widest text-secondary">
              Now Open for Orders
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9]">
            The{" "}
            <span className="text-transparent bg-clip-text liquid-fire">
              Modern
            </span>
            <br />
            Snack Hub
          </h1>

          {/* Subtitle */}
          <p className="text-on-surface-variant text-lg md:text-xl max-w-md leading-relaxed">
            Trusted for 3 years with 200+ community members. Premium editorial
            street food delivered to your door.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#menu"
              className="liquid-fire text-on-primary-fixed font-bold px-8 py-4 rounded-xl ambient-shadow hover:scale-105 active:scale-95 transition-transform"
            >
              Order Sekarang
            </a>
            <a
              href="#menu"
              className="px-8 py-4 rounded-xl border border-outline-variant/30 text-primary font-bold hover:bg-surface-container-low transition-all"
            >
              Explore Menu
            </a>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className="relative hidden lg:block">
          {/* Ambient Glow */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

          {/* Image Card */}
          <div className="relative rounded-[2rem] overflow-hidden aspect-square rotate-3 border-4 border-surface-container-highest">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQuFHUlGu1auA1BoLLWo47gv_SvhF3SCXCEOIdtUukgWTxHBQsziQaPR9VBqTKbufpvhU0VXhI1E4N4wANh-r3HOXvyIDSu_MGYjk_hB3SQqf-WpGDiB2NDrelt6fzr1nqCB7MdyZtBGfpDgNSseOGMFjuVyLVFwHMwQILrNBkyQG6SKVGLNmijf04ux6mUrzI8hVM5K_aIKixuWsxp1Y7xWVFN_dgZTJlvyFhLiWxqOV_-9I2l65dOJqiff36dYr7PEN-RU4vvMlI"
              alt="Signature Risoles"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Testimonial Card */}
          <div className="absolute -bottom-10 -left-10 bg-surface-container-high/80 backdrop-blur-xl p-6 rounded-2xl border border-outline-variant/15 shadow-2xl max-w-xs animate-float">
            <p className="text-sm font-label text-secondary-fixed mb-2 italic">
              &ldquo;The best snacks in town. Period.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-container" />
              <span className="text-xs font-bold">
                Verified Community Member
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
