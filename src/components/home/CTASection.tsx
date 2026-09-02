import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Flame, Zap } from 'lucide-react';
import { CONTACT_PHONE } from '@/config/contact';

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Flame gradient background */}
      <div className="absolute inset-0 bg-gradient-flame" />

      {/* Spotlight overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating glow orbs */}
      <div
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none"
        style={{ animation: 'float 7s ease-in-out infinite' }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-white/10 blur-3xl pointer-events-none"
        style={{ animation: 'float 5s ease-in-out infinite reverse' }}
      />

      <div className="container-full relative z-10 py-16 lg:py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 border border-white/25 rounded-full mb-6">
          <Flame className="h-4 w-4 text-white" />
          <span className="text-white text-xs font-semibold uppercase tracking-widest">
            Industry-Leading Protection
          </span>
        </div>

        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-5 leading-tight">
          Ready to Protect<br className="hidden sm:block" /> Your Fleet?
        </h2>
        <p className="text-white/75 max-w-3xl mx-auto mb-10 text-lg lg:text-xl leading-relaxed">
          Get in touch with our experts to discuss your fire protection requirements.
          We provide customized solutions for all types of heavy machinery.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact?type=general"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-flame-crimson font-bold text-base rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 transition-all duration-200 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Request a Quote
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <a
            href={`tel:${CONTACT_PHONE}`}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold text-base rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-200"
          >
            <Phone className="h-5 w-5 group-hover:animate-bounce" />
            Call Us Now
          </a>
        </div>

        {/* Trust row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
          {['DGMS Approved', 'ISO 9001', 'ISO 14001', '20+ Years Trusted', 'MSME Approved', 'IAF Approved'].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-white/50 rounded-full" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
