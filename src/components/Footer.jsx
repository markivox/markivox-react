import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const LIGHT_LOGO = 'https://customer-assets.emergentagent.com/job_a1707d78-faa3-44d5-8163-23df0a418775/artifacts/ms3qlv59_Untitled%20design%20%283%29_X-Design%20%282%29.png';

const serviceLinks = [
  { name: 'Social Media Marketing', path: '/services/social-media-marketing' },
  { name: 'SEO Optimization', path: '/services/seo-optimization' },
  { name: 'Google Ads Management', path: '/services/google-ads-management' },
  { name: 'Website Development', path: '/services/website-development' },
  { name: 'Marketing Strategy', path: '/services/marketing-strategy' },
];

export default function Footer() {
  return (
    <footer data-testid="main-footer" className="bg-white">
      <div className="h-1 bg-gradient-to-r from-[#6A3DF0] to-[#D946EF]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link to="/">
              <img src={LIGHT_LOGO} alt="Markivox" className="h-10 w-auto object-contain mb-4" />
            </Link>
            <p className="text-[#64748B] text-sm leading-relaxed mb-5">
              Where Brands Find Their Voice. Strategic digital marketing services that attract the right audience and scale your business.
            </p>
            <a
              href="https://www.instagram.com/markivox/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="instagram-link"
              className="inline-flex items-center gap-2 text-[#6A3DF0] hover:text-[#D946EF] transition-colors text-sm font-medium"
            >
              <Instagram size={17} />
              @markivox
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-[#1F1F1F] text-sm mb-4 font-['Space_Grotesk']">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#64748B] hover:text-[#6A3DF0] text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#1F1F1F] text-sm mb-4 font-['Space_Grotesk']">Company</h3>
            <ul className="space-y-2.5">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms & Conditions', path: '/terms' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#64748B] hover:text-[#6A3DF0] text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#1F1F1F] text-sm mb-4 font-['Space_Grotesk']">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 flex-shrink-0 text-[#6A3DF0]" />
                <a href="mailto:hello.markivox@gmail.com" className="text-[#64748B] hover:text-[#6A3DF0] text-sm transition-colors break-all">
                  hello.markivox@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 flex-shrink-0 text-[#6A3DF0]" />
                <a href="tel:+919274702081" className="text-[#64748B] hover:text-[#6A3DF0] text-sm transition-colors">
                  +91 92747 02081
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-[#6A3DF0]" />
                <span className="text-[#64748B] text-sm">Serving Businesses Across India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#64748B] text-xs">
            © {new Date().getFullYear()} Markivox. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="text-[#64748B] hover:text-[#6A3DF0] text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[#64748B] hover:text-[#6A3DF0] text-xs transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
