export default function TrustBanner() {
  const BADGES = [
    {
      icon: "local_fire_department",
      title: "Freshly Fried",
      subtitle: "Made to order daily",
    },
    {
      icon: "workspace_premium",
      title: "Premium Ingredients",
      subtitle: "No compromises on quality",
    },
    {
      icon: "handshake",
      title: "Partner Kantin",
      subtitle: "Trusted by 5+ campuses",
    },
  ];

  return (
    <section id="partners" className="bg-surface-container-low py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
        {BADGES.map((badge) => (
          <div
            key={badge.title}
            className="flex items-center gap-4 group"
          >
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl">
                {badge.icon}
              </span>
            </div>
            <div>
              <h4 className="font-headline font-bold text-lg sm:text-xl">
                {badge.title}
              </h4>
              <p className="text-on-surface-variant text-sm">
                {badge.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
