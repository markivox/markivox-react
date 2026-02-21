import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronRight } from 'lucide-react';
import { getServiceBySlug } from '../data/services';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
        data-testid={`faq-toggle-${q.slice(0, 20).replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="font-semibold text-[#1F1F1F] font-['Space_Grotesk'] text-base pr-4">{q}</span>
        {open ? (
          <ChevronDown size={18} className="text-[#6A3DF0] flex-shrink-0" />
        ) : (
          <ChevronRight size={18} className="text-[#64748B] flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-[#64748B] text-sm leading-relaxed font-['DM_Sans']">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    if (service) {
      document.title = service.metaTitle;
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', service.metaDesc);
    }
  }, [service]);

  const [heroRef, heroVisible]       = useScrollAnimation();
  const [introRef, introVisible]     = useScrollAnimation();
  const [benefitsRef, benefitsVisible] = useScrollAnimation();
  const [processRef, processVisible]   = useScrollAnimation();
  const [faqRef, faqVisible]           = useScrollAnimation();
  const [ctaBotRef, ctaBotVisible]     = useScrollAnimation();

  if (!service) return <Navigate to="/services" replace />;

  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-[#F9F7FF] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 text-sm text-[#64748B] mb-6 font-['DM_Sans']">
            <Link to="/services" className="hover:text-[#6A3DF0] transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span className="text-[#1F1F1F]">{service.title}</span>
          </div>
          <div ref={heroRef} className={`max-w-3xl transition-all duration-700 ${heroVisible ? 'anim-fade-up' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-6 tracking-tight leading-tight">
              {service.heroH1}
            </h1>
            <p className="text-[#64748B] text-lg font-['DM_Sans'] leading-relaxed mb-8">
              {service.shortDesc}
            </p>
            <Link
              to="/contact"
              data-testid="service-detail-cta-top"
              className="bg-gradient-to-r from-[#6A3DF0] to-[#D946EF] text-white px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Get a Free Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div ref={introRef} className={`max-w-3xl transition-all duration-700 ${introVisible ? 'anim-fade-up' : 'opacity-0'}`}>
            {service.intro.map((para, i) => (
              <p key={i} className="text-[#374151] text-base leading-relaxed font-['DM_Sans'] mb-5" style={{ animationDelay: `${i * 100}ms` }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#F9F7FF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className={`text-2xl md:text-3xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-10 tracking-tight transition-all duration-600 ${benefitsVisible ? 'anim-fade-up' : 'opacity-0'}`} ref={benefitsRef}>
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((b, i) => (
              <div
                key={i}
                data-testid={`benefit-${i}`}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-50 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(106,61,240,0.08)] transition-all duration-300"
                style={{
                  opacity: benefitsVisible ? 1 : 0,
                  animation: benefitsVisible ? `fadeInUp 0.6s ease-out ${i * 100 + 150}ms both` : 'none',
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 size={18} className="text-[#6A3DF0] flex-shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-[#1F1F1F] font-['Space_Grotesk'] text-base">{b.title}</h3>
                </div>
                <p className="text-[#64748B] text-sm leading-relaxed font-['DM_Sans'] pl-7">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className={`text-2xl md:text-3xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-10 tracking-tight transition-all duration-600 ${processVisible ? 'anim-fade-up' : 'opacity-0'}`} ref={processRef}>
            Our Process
          </h2>
          <div className="space-y-5 max-w-3xl">
            {service.process.map((step, i) => (
              <div
                key={i}
                data-testid={`process-step-${i}`}
                className="flex items-start gap-6 bg-[#F9F7FF] rounded-2xl p-6 border border-gray-100 hover:-translate-x-1 transition-all duration-300"
                style={{
                  opacity: processVisible ? 1 : 0,
                  animation: processVisible ? `slideInLeft 0.6s ease-out ${i * 120}ms both` : 'none',
                }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#6A3DF0] to-[#D946EF] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold font-['Space_Grotesk']">{step.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1F1F1F] font-['Space_Grotesk'] mb-2">{step.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed font-['DM_Sans']">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F9F7FF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className={`text-2xl md:text-3xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-10 tracking-tight transition-all duration-600 ${faqVisible ? 'anim-fade-up' : 'opacity-0'}`} ref={faqRef}>
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] p-8 border border-gray-50">
            {service.faq.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-6">Explore Other Services</h2>
          <div className="flex flex-wrap gap-3">
            {['Social Media Marketing', 'SEO Optimization', 'Google Ads Management', 'Website Development', 'Marketing Strategy & Consulting'].map((name, i) => {
              const slugs = ['social-media-marketing', 'seo-optimization', 'google-ads-management', 'website-development', 'marketing-strategy'];
              if (slugs[i] === slug) return null;
              return (
                <Link
                  key={i}
                  to={`/services/${slugs[i]}`}
                  className="border border-gray-200 text-[#64748B] hover:border-[#6A3DF0] hover:text-[#6A3DF0] px-4 py-2 rounded-full text-sm transition-colors"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#F9F7FF]">
        <div
          ref={ctaBotRef}
          className={`max-w-7xl mx-auto px-6 md:px-12 text-center transition-all duration-700 ${ctaBotVisible ? 'anim-scale-in' : 'opacity-0'}`}
        >
          <h2 className="text-3xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-4 tracking-tight">Ready to Get Started?</h2>
          <p className="text-[#64748B] text-base mb-8 max-w-lg mx-auto font-['DM_Sans']">
            Book a free consultation and let's discuss how {service.title} can help grow your business.
          </p>
          <Link
            to="/contact"
            data-testid="service-detail-cta-bottom"
            className="bg-gradient-to-r from-[#6A3DF0] to-[#D946EF] text-white px-10 py-4 rounded-full font-semibold text-base hover:opacity-90 hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
          >
            Book Free Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
