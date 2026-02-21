import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Blog() {
  useEffect(() => {
    document.title = 'Blog — Digital Marketing Insights | Markivox';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.setAttribute('content', 'Digital marketing insights, SEO tips, social media strategies, and performance marketing advice from the Markivox team.');
  }, []);

  const [heroRef, heroVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible]   = useScrollAnimation();

  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-[#F9F7FF] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div ref={heroRef} className={`transition-all duration-600 ${heroVisible ? 'anim-fade-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-white border border-[#6A3DF0]/20 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#6A3DF0]" />
              <span className="text-xs font-medium text-[#6A3DF0]">Insights & Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-5 tracking-tight">
              Digital Marketing Blog
            </h1>
            <p className="text-[#64748B] text-lg max-w-xl font-['DM_Sans'] leading-relaxed">
              Practical insights on digital marketing, SEO, paid advertising, and strategies that help businesses grow.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section data-testid="blog-grid" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                data-testid={`blog-card-${post.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-[0_8px_30px_rgba(106,61,240,0.08)] hover:-translate-y-1.5 transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.04)]"
                style={{
                  opacity: gridVisible ? 1 : 0,
                  animation: gridVisible ? `fadeInUp 0.6s ease-out ${i * 120}ms both` : 'none',
                }}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold text-[#6A3DF0] bg-[#F9F7FF] px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#64748B] flex items-center gap-1.5">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-3 leading-snug group-hover:text-[#6A3DF0] transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-[#64748B] text-sm leading-relaxed font-['DM_Sans'] mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#64748B]">{post.date}</span>
                  <span className="text-[#6A3DF0] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read article <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F9F7FF] border-t border-gray-100">
        <div
          ref={ctaRef}
          className={`max-w-7xl mx-auto px-6 md:px-12 text-center transition-all duration-600 ${ctaVisible ? 'anim-scale-in' : 'opacity-0'}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-4">
            Ready to Implement These Strategies?
          </h2>
          <p className="text-[#64748B] text-base mb-8 max-w-lg mx-auto font-['DM_Sans']">
            Let Markivox handle the execution while you focus on running your business.
          </p>
          <Link
            to="/contact"
            data-testid="blog-cta-btn"
            className="bg-gradient-to-r from-[#6A3DF0] to-[#D946EF] text-white px-10 py-4 rounded-full font-semibold text-base hover:opacity-90 hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
          >
            Get a Free Strategy Call
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
