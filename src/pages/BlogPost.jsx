import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ChevronRight, Clock } from 'lucide-react';
import { getBlogPostBySlug, blogPosts } from '../data/blogPosts';

function ContentRenderer({ content }) {
  return (
    <div className="prose-markivox">
      {content.map((block, i) => {
        if (block.type === 'intro') {
          return (
            <p key={i} className="text-[#374151] text-lg leading-relaxed font-['DM_Sans'] mb-6 font-medium">
              {block.text}
            </p>
          );
        }
        if (block.type === 'paragraph') {
          return (
            <p key={i} className="text-[#374151] text-base leading-relaxed font-['DM_Sans'] mb-5">
              {block.text}
            </p>
          );
        }
        if (block.type === 'h2') {
          return (
            <h2 key={i} className="text-2xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mt-10 mb-4 tracking-tight">
              {block.text}
            </h2>
          );
        }
        if (block.type === 'h3') {
          return (
            <h3 key={i} className="text-xl font-semibold text-[#1F1F1F] font-['Space_Grotesk'] mt-8 mb-3">
              {block.text}
            </h3>
          );
        }
        if (block.type === 'list') {
          return (
            <ul key={i} className="mb-6 space-y-2">
              {block.items.map((item, j) => (
                <li key={j} className="text-[#374151] text-base font-['DM_Sans'] flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#6A3DF0] flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === 'cta') {
          return (
            <div key={i} className="bg-[#F9F7FF] border border-[#6A3DF0]/20 rounded-2xl p-8 my-10 text-center">
              <p className="text-[#374151] text-base font-['DM_Sans'] mb-5">{block.text}</p>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#6A3DF0] to-[#D946EF] text-white px-8 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Book a Free Consultation
                <ArrowRight size={16} />
              </Link>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Markivox Blog`;
    }
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main>
      {/* Header */}
      <section className="pt-24 pb-12 bg-[#F9F7FF] border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 text-sm text-[#64748B] mb-6 font-['DM_Sans']">
            <Link to="/blog" className="hover:text-[#6A3DF0] transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-[#1F1F1F]">{post.category}</span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-semibold text-[#6A3DF0] bg-white border border-[#6A3DF0]/20 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-[#64748B] flex items-center gap-1.5">
              <Clock size={12} />
              {post.readTime}
            </span>
            <span className="text-xs text-[#64748B]">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] tracking-tight leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-[#64748B] text-lg font-['DM_Sans'] leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Content */}
      <article data-testid="blog-post-content" className="py-14">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
            {/* Main content */}
            <div>
              <ContentRenderer content={post.content} />
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gradient-to-br from-[#6A3DF0] to-[#D946EF] rounded-2xl p-6 text-white">
                  <h3 className="font-bold font-['Space_Grotesk'] text-lg mb-3">Ready to Grow?</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-5 font-['DM_Sans']">
                    Let Markivox build and execute a strategy tailored to your business.
                  </p>
                  <Link
                    to="/contact"
                    className="bg-white text-[#6A3DF0] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-50 transition-colors block text-center"
                  >
                    Free Consultation
                  </Link>
                </div>

                <div className="bg-[#F9F7FF] rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold font-['Space_Grotesk'] text-[#1F1F1F] text-sm mb-4">Our Services</h3>
                  <ul className="space-y-2">
                    {[
                      ['Social Media Marketing', '/services/social-media-marketing'],
                      ['SEO Optimization', '/services/seo-optimization'],
                      ['Google Ads Management', '/services/google-ads-management'],
                      ['Website Development', '/services/website-development'],
                      ['Marketing Strategy', '/services/marketing-strategy'],
                    ].map(([name, path]) => (
                      <li key={path}>
                        <Link to={path} className="text-[#64748B] hover:text-[#6A3DF0] text-sm flex items-center gap-1.5 transition-colors">
                          <ChevronRight size={13} />
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* More Posts */}
      {otherPosts.length > 0 && (
        <section className="py-16 bg-[#F9F7FF] border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-8">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((p) => (
                <Link
                  key={p.id}
                  to={`/blog/${p.slug}`}
                  data-testid={`related-post-${p.slug}`}
                  className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <span className="text-xs font-semibold text-[#6A3DF0] bg-[#F9F7FF] px-2.5 py-1 rounded-full mb-3 inline-block">
                    {p.category}
                  </span>
                  <h3 className="font-bold text-[#1F1F1F] font-['Space_Grotesk'] text-base mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <span className="text-[#6A3DF0] text-xs font-medium inline-flex items-center gap-1">
                    Read article <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
