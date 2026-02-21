import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Share2, TrendingUp, Target, Globe, Lightbulb,
  CheckCircle2, Star, Users, BarChart3, Award, Rocket,
} from 'lucide-react';
import { services } from '../data/services';
import GrowthVisual from '../components/GrowthVisual';
import { useScrollAnimation, useCounter } from '../hooks/useScrollAnimation';

const iconMap = { Share2, TrendingUp, Target, Globe, Lightbulb };

const stats = [
  { raw: '350+', label: 'Campaigns Delivered', icon: BarChart3 },
  { raw: '90+',  label: 'Businesses Served',   icon: Users     },
  { raw: '85%',  label: 'Client Retention',    icon: Award     },
  { raw: '100%', label: 'Results-Focused',     icon: Rocket    },
];

const whyPoints = [
  { title: 'Built Around Business Goals',       desc: "Every strategy we create starts with understanding your revenue targets, customer profile, and competitive landscape. Marketing for the sake of marketing is not our approach."   },
  { title: 'Performance-First Execution',       desc: "We measure everything that matters — cost per lead, conversion rates, return on ad spend — and optimize relentlessly for performance, not just activity."                       },
  { title: 'Integrated Multi-Channel Expertise',desc: "From SEO to paid social to Google Ads, we bring all channels into a cohesive strategy that multiplies results across your entire marketing funnel."                            },
  { title: 'Clear Communication & Accountability',desc: "You'll always know what we're doing, why we're doing it, and what results it's generating. Transparent reporting and regular check-ins are built into every engagement." },
];

const testimonials = [
  { name: 'Priya Mehta',   business: 'E-Commerce Brand Owner',  rating: 5, review: "Markivox transformed our social media presence. Within 3 months, our Instagram engagement tripled and we saw a 40% increase in website traffic from social channels. Their team genuinely understands digital marketing."         },
  { name: 'Rahul Sharma',  business: 'SaaS Startup Founder',    rating: 5, review: "The Google Ads campaigns Markivox set up for us are generating leads at half the cost we were spending before. The detailed reporting gives complete visibility, and the results speak for themselves."                         },
  { name: 'Anika Patel',   business: 'Healthcare Services',     rating: 5, review: "We were invisible on Google before working with Markivox. Their SEO strategy took us from page 5 to the first page for our key search terms in 6 months. Their approach is methodical and it works."                            },
];

/* ── Animated Stat Card ── */
function StatCard({ raw, label, Icon, delay }) {
  const [ref, visible] = useScrollAnimation();
  const animated = useCounter(raw, 1600, visible);

  return (
    <div
      ref={ref}
      data-testid={`stat-${label.replace(/\s+/g,'-').toLowerCase()}`}
      className={`text-center transition-all duration-500 ${visible ? `anim-fade-up ${delay}` : 'opacity-0'}`}
    >
      <Icon className="mx-auto mb-3 text-[#6A3DF0]" size={22} />
      <div className="text-3xl md:text-4xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-1">
        {raw === '100%' ? '100%' : animated}
      </div>
      <div className="text-[#64748B] text-sm font-['DM_Sans']">{label}</div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = 'Markivox — Digital Marketing Agency | Where Brands Find Their Voice';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.setAttribute('content', 'Markivox is a results-driven digital marketing agency in India. Social media marketing, SEO, Google Ads, website development, and marketing strategy built for measurable growth.');
  }, []);

  const [statsRef, statsVisible]         = useScrollAnimation();
  const [servicesRef, servicesVisible]   = useScrollAnimation();
  const [whyRef, whyVisible]             = useScrollAnimation();
  const [testimonialsRef, testimVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible]             = useScrollAnimation();

  return (
    <main>
      {/* ── HERO ── */}
      <section data-testid="hero-section" className="pt-24 pb-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6A3DF0] opacity-[0.04] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D946EF] opacity-[0.04] rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — Text */}
            <div>
              <div className="hero-badge inline-flex items-center gap-2 bg-[#F9F7FF] border border-[#6A3DF0]/20 px-4 py-1.5 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-[#6A3DF0]" style={{ animation: 'pulseGlow 2s ease-in-out infinite' }} />
                <span className="text-xs font-medium text-[#6A3DF0]">Performance Marketing Agency — India</span>
              </div>

              <h1 className="font-['Space_Grotesk'] font-bold tracking-tight leading-[1.1] mb-7">
                <span className="hero-title-1 block text-4xl sm:text-5xl lg:text-[58px] text-[#6A3DF0]">
                  Digital Marketing Agency
                </span>
                <span className="hero-title-2 block text-4xl sm:text-5xl lg:text-[58px] text-[#1F1F1F]">
                  That Turns Marketing
                </span>
                <span className="hero-title-3 block text-4xl sm:text-5xl lg:text-[58px] text-[#1F1F1F]">
                  Into Measurable Growth
                </span>
              </h1>

              <p className="hero-sub text-[#64748B] text-lg max-w-xl mb-10 leading-relaxed font-['DM_Sans']">
                Strategic digital marketing services designed to attract the right audience, generate qualified leads, and scale your business with measurable performance.
              </p>

              <div className="hero-ctas flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  data-testid="hero-primary-cta"
                  className="bg-gradient-to-r from-[#6A3DF0] to-[#D946EF] text-white px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
                >
                  Let's Talk Growth
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  data-testid="hero-secondary-cta"
                  className="bg-white text-[#1F1F1F] border border-gray-200 px-8 py-3.5 rounded-full font-semibold text-base hover:bg-gray-50 hover:border-[#6A3DF0] hover:text-[#6A3DF0] transition-all duration-200"
                >
                  Book a Free Consultation
                </Link>
              </div>
            </div>

            {/* Right — Growth Visual */}
            <div className="hero-visual hidden lg:flex items-center justify-center px-6">
              <GrowthVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section data-testid="stats-section" className="py-14 bg-[#F9F7FF] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            ref={statsRef}
            className={`text-center text-[#64748B] text-sm mb-10 font-['DM_Sans'] transition-all duration-500 ${statsVisible ? 'anim-fade-up' : 'opacity-0'}`}
          >
            Trusted by 90+ growing businesses across industries.
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <StatCard key={i} raw={s.raw} label={s.label} Icon={s.icon} delay={`d-${i * 100}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section data-testid="services-section" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            ref={servicesRef}
            className={`mb-14 transition-all duration-500 ${servicesVisible ? 'anim-fade-up' : 'opacity-0'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-4 tracking-tight">
              Core Services
            </h2>
            <p className="text-[#64748B] text-base max-w-xl font-['DM_Sans']">
              Outcome-focused digital marketing services tailored for businesses ready to grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Share2;
              const delayMs = [0, 100, 200, 300, 400][i] || 0;
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  data-testid={`service-card-${service.slug}`}
                  className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-[0_8px_30px_rgba(106,61,240,0.1)] hover:-translate-y-1.5 transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.04)]"
                  style={{
                    opacity: servicesVisible ? 1 : 0,
                    animation: servicesVisible ? `fadeInUp 0.6s ease-out ${delayMs + 200}ms both` : 'none',
                  }}
                >
                  <div className="w-12 h-12 bg-[#F9F7FF] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-[#6A3DF0]" size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1F1F1F] mb-3 font-['Space_Grotesk']">{service.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed font-['DM_Sans'] mb-4">{service.shortDesc}</p>
                  <span className="text-[#6A3DF0] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY MARKIVOX ── */}
      <section data-testid="why-section" className="py-24 bg-[#F9F7FF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            ref={whyRef}
            className={`max-w-2xl mb-14 transition-all duration-500 ${whyVisible ? 'anim-fade-up' : 'opacity-0'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-5 tracking-tight">
              Why Markivox Is the Right Digital Marketing Partner for Your Business
            </h2>
            <p className="text-[#64748B] text-base font-['DM_Sans']">
              We don't just run campaigns — we build growth engines aligned to your business goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyPoints.map((point, i) => (
              <div
                key={i}
                data-testid={`why-point-${i}`}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-50 hover:-translate-y-1 transition-all duration-300"
                style={{
                  opacity: whyVisible ? 1 : 0,
                  animation: whyVisible ? `fadeInUp 0.6s ease-out ${i * 120 + 100}ms both` : 'none',
                }}
              >
                <div className="w-9 h-9 bg-gradient-to-r from-[#6A3DF0] to-[#D946EF] rounded-full flex items-center justify-center mb-5">
                  <CheckCircle2 size={17} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#1F1F1F] mb-3 font-['Space_Grotesk']">{point.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed font-['DM_Sans']">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section data-testid="testimonials-section" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            ref={testimonialsRef}
            className={`mb-14 transition-all duration-500 ${testimVisible ? 'anim-fade-up' : 'opacity-0'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] tracking-tight">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                data-testid={`testimonial-${i}`}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(106,61,240,0.08)] hover:-translate-y-1 transition-all duration-300"
                style={{
                  opacity: testimVisible ? 1 : 0,
                  animation: testimVisible ? `fadeInUp 0.65s ease-out ${i * 150}ms both` : 'none',
                }}
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-[#6A3DF0] fill-[#6A3DF0]" />
                  ))}
                </div>
                <p className="text-[#374151] text-sm leading-relaxed font-['DM_Sans'] mb-6">"{t.review}"</p>
                <div>
                  <div className="font-semibold text-[#1F1F1F] text-sm font-['Space_Grotesk']">{t.name}</div>
                  <div className="text-[#64748B] text-xs mt-0.5">{t.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section data-testid="cta-section" className="py-24 bg-[#F9F7FF]">
        <div
          ref={ctaRef}
          className={`max-w-7xl mx-auto px-6 md:px-12 text-center transition-all duration-700 ${ctaVisible ? 'anim-fade-up' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-5 tracking-tight">
            Ready to Turn Your Marketing Into Measurable Growth?
          </h2>
          <p className="text-[#64748B] text-base mb-10 max-w-xl mx-auto font-['DM_Sans']">
            Let's talk about your business goals and build a strategy designed to achieve them.
          </p>
          <Link
            to="/contact"
            data-testid="cta-contact-btn"
            className="bg-gradient-to-r from-[#6A3DF0] to-[#D946EF] text-white px-10 py-4 rounded-full font-semibold text-base hover:opacity-90 hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
          >
            Book a Free Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
