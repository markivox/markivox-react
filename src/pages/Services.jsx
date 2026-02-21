import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Share2, TrendingUp, Target, Globe, Lightbulb, ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const iconMap = { Share2, TrendingUp, Target, Globe, Lightbulb };

export default function Services() {
  useEffect(() => {
    document.title = 'Digital Marketing Services | Markivox';
  }, []);

  const [heroRef, heroVisible]   = useScrollAnimation();
  const [gridRef, gridVisible]   = useScrollAnimation();
  const [ctaRef, ctaVisible]     = useScrollAnimation();

  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-[#F9F7FF] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            ref={heroRef}
            className={`max-w-2xl transition-all duration-600 ${heroVisible ? 'anim-fade-up' : 'opacity-0'}`}
          >
            <div className="inline-flex items-center gap-2 bg-white border border-[#6A3DF0]/20 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#6A3DF0]" />
              <span className="text-xs font-medium text-[#6A3DF0]">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-5 tracking-tight">
              Digital Marketing Services Built for Results
            </h1>
            <p className="text-[#64748B] text-lg font-['DM_Sans'] leading-relaxed">
              Every service we offer is designed with one goal: measurable business growth. From strategy to execution, we bring the expertise needed to move the metrics that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section data-testid="services-page-grid" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Share2;
              return (
                <div
                  key={service.id}
                  data-testid={`service-item-${service.slug}`}
                  className={`bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(106,61,240,0.1)] hover:-translate-y-1 transition-all duration-300 ${i === 4 ? 'md:col-span-2' : ''}`}
                  style={{
                    opacity: gridVisible ? 1 : 0,
                    animation: gridVisible ? `fadeInUp 0.6s ease-out ${i * 100 + 50}ms both` : 'none',
                  }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-[#F9F7FF] rounded-2xl flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                      <Icon className="text-[#6A3DF0]" size={24} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-3">{service.title}</h2>
                      <p className="text-[#64748B] text-sm leading-relaxed font-['DM_Sans'] mb-4">{service.shortDesc}</p>
                      <div className="flex items-center gap-2 text-sm text-[#64748B] bg-[#F9F7FF] px-3 py-1.5 rounded-lg w-fit mb-5">
                        <span className="font-medium text-[#6A3DF0]">Outcome:</span>
                        <span>{service.outcome}</span>
                      </div>
                      <Link
                        to={`/services/${service.slug}`}
                        data-testid={`service-detail-link-${service.slug}`}
                        className="bg-gradient-to-r from-[#6A3DF0] to-[#D946EF] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
                      >
                        Explore Service
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F9F7FF] border-t border-gray-100">
        <div
          ref={ctaRef}
          className={`max-w-7xl mx-auto px-6 md:px-12 text-center transition-all duration-600 ${ctaVisible ? 'anim-scale-in' : 'opacity-0'}`}
        >
          <h2 className="text-3xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-4 tracking-tight">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-[#64748B] text-base mb-8 max-w-lg mx-auto font-['DM_Sans']">
            Book a free consultation and we'll help you identify the best strategy for your business goals.
          </p>
          <Link
            to="/contact"
            data-testid="services-cta-btn"
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
