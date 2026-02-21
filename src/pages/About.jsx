import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, BarChart3, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const values = [
  { icon: Target,   title: 'Results-Driven',       desc: 'Every decision we make is guided by one question: does this move the business forward? We measure our success by your growth metrics.'                                   },
  { icon: Users,    title: 'True Partnership',      desc: "We work as an extension of your team, not as a vendor. Your business goals become our goals, and we're invested in your long-term success."                           },
  { icon: BarChart3,title: 'Data-Led Decisions',   desc: "We don't rely on gut feeling or creative preference alone. Every strategy recommendation is backed by data, research, and proven frameworks."                          },
  { icon: Zap,      title: 'Continuous Improvement',desc: 'Digital marketing never stands still, and neither do we. We continuously test, learn, and optimize every campaign to improve performance over time.'                 },
];

export default function About() {
  useEffect(() => {
    document.title = 'About Markivox — Digital Marketing Agency | Where Brands Find Their Voice';
  }, []);

  const [heroRef, heroVisible]   = useScrollAnimation();
  const [storyRef, storyVisible] = useScrollAnimation();
  const [missionRef, missionVisible] = useScrollAnimation();
  const [valuesRef, valuesVisible]   = useScrollAnimation();
  const [ctaRef, ctaVisible]         = useScrollAnimation();

  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6A3DF0] opacity-[0.04] rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <div ref={heroRef} className={`max-w-3xl transition-all duration-700 ${heroVisible ? 'anim-fade-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-[#F9F7FF] border border-[#6A3DF0]/20 px-4 py-1.5 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-[#6A3DF0]" />
              <span className="text-xs font-medium text-[#6A3DF0]">About Markivox</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-6 tracking-tight leading-tight">
              Where Brands Find<br />Their Voice
            </h1>
            <p className="text-[#64748B] text-lg font-['DM_Sans'] leading-relaxed max-w-2xl">
              Markivox is a performance-driven digital marketing agency built for businesses that want more than visibility — they want measurable, scalable growth that compounds over time.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-[#F9F7FF] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div ref={storyRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${storyVisible ? 'anim-slide-left' : 'opacity-0'}`}>
              <h2 className="text-3xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-6 tracking-tight">Our Story</h2>
              <div className="space-y-4">
                <p className="text-[#374151] text-base leading-relaxed font-['DM_Sans']">Markivox was founded with a simple but powerful belief: that digital marketing, when done with strategic intent and rigorous measurement, should be the most accountable investment a business makes in its own growth.</p>
                <p className="text-[#374151] text-base leading-relaxed font-['DM_Sans']">We saw too many businesses — brands with real potential — struggling with digital marketing that felt like a cost centre rather than a growth engine. Agencies that delivered reports full of vanity metrics but couldn't connect their work to actual revenue.</p>
                <p className="text-[#374151] text-base leading-relaxed font-['DM_Sans']">Markivox was built to be different. We work with a select number of businesses at a time, treating each as a genuine long-term partnership. Our team brings deep expertise across every major digital channel, combined with the analytical discipline to tie every activity to measurable outcomes.</p>
              </div>
            </div>
            <div className={`grid grid-cols-2 gap-5 transition-all duration-700 ${storyVisible ? 'anim-slide-right' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
              {[
                { number: '350+', label: 'Campaigns Delivered' },
                { number: '90+',  label: 'Businesses Served'   },
                { number: '85%',  label: 'Client Retention'    },
                { number: '100%', label: 'Performance Focus'   },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 text-center shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-50 hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="text-3xl font-bold text-[#6A3DF0] font-['Space_Grotesk'] mb-2">{stat.number}</div>
                  <div className="text-[#64748B] text-sm font-['DM_Sans']">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div
          ref={missionRef}
          className={`max-w-2xl mx-auto px-6 md:px-12 text-center transition-all duration-700 ${missionVisible ? 'anim-scale-in' : 'opacity-0'}`}
        >
          <h2 className="text-3xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-5 tracking-tight">Our Mission</h2>
          <p className="text-[#374151] text-lg leading-relaxed font-['DM_Sans']">
            To make strategic, performance-focused digital marketing accessible to ambitious businesses across India — delivering clarity, accountability, and measurable growth that makes marketing the most productive investment in your business.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#F9F7FF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            ref={valuesRef}
            className={`mb-12 transition-all duration-600 ${valuesVisible ? 'anim-fade-up' : 'opacity-0'}`}
          >
            <h2 className="text-3xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-3 tracking-tight">
              Why Markivox Is the Right Digital Marketing Partner
            </h2>
            <p className="text-[#64748B] text-base max-w-xl font-['DM_Sans']">Four core principles that shape how we work with every client.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-50 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(106,61,240,0.08)] transition-all duration-300"
                  style={{
                    opacity: valuesVisible ? 1 : 0,
                    animation: valuesVisible ? `fadeInUp 0.6s ease-out ${i * 120}ms both` : 'none',
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#6A3DF0] to-[#D946EF] rounded-2xl flex items-center justify-center mb-5">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1F1F1F] mb-3 font-['Space_Grotesk']">{v.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed font-['DM_Sans']">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-10 tracking-tight">What We Do</h2>
          <div className="flex flex-wrap gap-3">
            {[
              ['Social Media Marketing',         '/services/social-media-marketing'],
              ['SEO Optimization',               '/services/seo-optimization'      ],
              ['Google Ads Management',          '/services/google-ads-management' ],
              ['Website Development',            '/services/website-development'   ],
              ['Marketing Strategy & Consulting','/services/marketing-strategy'    ],
            ].map(([name, path]) => (
              <Link
                key={path}
                to={path}
                className="border border-gray-200 hover:border-[#6A3DF0] hover:text-[#6A3DF0] hover:bg-[#F9F7FF] text-[#64748B] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F9F7FF]">
        <div
          ref={ctaRef}
          className={`max-w-7xl mx-auto px-6 md:px-12 text-center transition-all duration-700 ${ctaVisible ? 'anim-scale-in' : 'opacity-0'}`}
        >
          <h2 className="text-3xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-5 tracking-tight">Ready to Work Together?</h2>
          <p className="text-[#64748B] text-base mb-8 max-w-lg mx-auto font-['DM_Sans']">
            Tell us about your business and let's build a marketing strategy designed to achieve your growth goals.
          </p>
          <Link
            to="/contact"
            data-testid="about-cta-btn"
            className="bg-gradient-to-r from-[#6A3DF0] to-[#D946EF] text-white px-10 py-4 rounded-full font-semibold text-base hover:opacity-90 hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
          >
            Start the Conversation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
