import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import axios from 'axios';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const budgetOptions = [
  'Under ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000 – ₹3,00,000',
  '₹3,00,000+',
];

const serviceOptions = [
  'Social Media Marketing',
  'SEO Optimization',
  'Google Ads Management',
  'Website Development',
  'Marketing Strategy & Consulting',
];

const initForm = {
  name: '',
  email: '',
  phone: '',
  company_name: '',
  budget: '',
  services_interested: [],
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const [heroRef, heroVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();

  useEffect(() => {
    document.title = 'Contact Us | Book a Free Consultation | Markivox';
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleService = (svc) => {
    setForm((prev) => ({
      ...prev,
      services_interested: prev.services_interested.includes(svc)
        ? prev.services_interested.filter((s) => s !== svc)
        : [...prev.services_interested, svc],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.name || !form.email || !form.phone || !form.company_name || !form.budget || !form.message) {
      setError('Please fill in all required fields.');
      return;
    }
    if (form.services_interested.length === 0) {
      setError('Please select at least one service you are interested in.');
      return;
    }

    setLoading(true);
    try {
      const payload = {
        ...form,
        services_interested: form.services_interested.join(', '),
      };
      await axios.post(`${BACKEND_URL}/api/contact`, payload);
      setSuccess(true);
      setForm(initForm);
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-[#F9F7FF] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div ref={heroRef} className={`transition-all duration-700 ${heroVisible ? 'anim-fade-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-white border border-[#6A3DF0]/20 px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#6A3DF0]" />
            <span className="text-xs font-medium text-[#6A3DF0]">Free Consultation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-5 tracking-tight">
            Let's Talk About Your Growth
          </h1>
          <p className="text-[#64748B] text-lg max-w-xl font-['DM_Sans'] leading-relaxed">
            Fill in the form and one of our team members will get back to you within 24 hours with a tailored strategy overview.
          </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div ref={formRef} className={`grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 transition-all duration-700 ${formVisible ? 'anim-fade-up' : 'opacity-0'}`}>

            {/* Form */}
            <div>
              {success ? (
                <div data-testid="contact-success" className="bg-[#F9F7FF] border border-[#6A3DF0]/20 rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#6A3DF0] to-[#D946EF] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={28} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-3">
                    Request Received!
                  </h2>
                  <p className="text-[#64748B] font-['DM_Sans'] mb-6">
                    Thank you for reaching out. Our team will review your enquiry and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-[#6A3DF0] text-sm font-medium hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form
                  data-testid="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#1F1F1F] mb-2 font-['Space_Grotesk']">
                        Full Name <span className="text-[#D946EF]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        data-testid="contact-name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full bg-gray-50 border border-gray-200 focus:border-[#6A3DF0] focus:ring-1 focus:ring-[#6A3DF0] rounded-xl px-4 py-3 text-sm text-[#1F1F1F] outline-none transition-all font-['DM_Sans'] placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1F1F1F] mb-2 font-['Space_Grotesk']">
                        Email Address <span className="text-[#D946EF]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        data-testid="contact-email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full bg-gray-50 border border-gray-200 focus:border-[#6A3DF0] focus:ring-1 focus:ring-[#6A3DF0] rounded-xl px-4 py-3 text-sm text-[#1F1F1F] outline-none transition-all font-['DM_Sans'] placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#1F1F1F] mb-2 font-['Space_Grotesk']">
                        Phone Number <span className="text-[#D946EF]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        data-testid="contact-phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-gray-50 border border-gray-200 focus:border-[#6A3DF0] focus:ring-1 focus:ring-[#6A3DF0] rounded-xl px-4 py-3 text-sm text-[#1F1F1F] outline-none transition-all font-['DM_Sans'] placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1F1F1F] mb-2 font-['Space_Grotesk']">
                        Company Name <span className="text-[#D946EF]">*</span>
                      </label>
                      <input
                        type="text"
                        name="company_name"
                        data-testid="contact-company"
                        value={form.company_name}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full bg-gray-50 border border-gray-200 focus:border-[#6A3DF0] focus:ring-1 focus:ring-[#6A3DF0] rounded-xl px-4 py-3 text-sm text-[#1F1F1F] outline-none transition-all font-['DM_Sans'] placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1F1F1F] mb-3 font-['Space_Grotesk']">
                      Monthly Marketing Budget <span className="text-[#D946EF]">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {budgetOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          data-testid={`budget-${option.replace(/\s+/g, '-').toLowerCase()}`}
                          onClick={() => setForm((p) => ({ ...p, budget: option }))}
                          className={`px-4 py-2 rounded-full text-sm border transition-all font-['DM_Sans'] ${
                            form.budget === option
                              ? 'bg-gradient-to-r from-[#6A3DF0] to-[#D946EF] text-white border-transparent'
                              : 'border-gray-200 text-[#64748B] hover:border-[#6A3DF0] hover:text-[#6A3DF0]'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1F1F1F] mb-3 font-['Space_Grotesk']">
                      Services Interested In <span className="text-[#D946EF]">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          data-testid={`service-checkbox-${svc.replace(/\s+/g, '-').toLowerCase()}`}
                          onClick={() => toggleService(svc)}
                          className={`px-4 py-2 rounded-full text-sm border transition-all font-['DM_Sans'] flex items-center gap-2 ${
                            form.services_interested.includes(svc)
                              ? 'bg-[#F9F7FF] border-[#6A3DF0] text-[#6A3DF0]'
                              : 'border-gray-200 text-[#64748B] hover:border-[#6A3DF0] hover:text-[#6A3DF0]'
                          }`}
                        >
                          {form.services_interested.includes(svc) && (
                            <CheckCircle2 size={13} className="text-[#6A3DF0]" />
                          )}
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1F1F1F] mb-2 font-['Space_Grotesk']">
                      Message <span className="text-[#D946EF]">*</span>
                    </label>
                    <textarea
                      name="message"
                      data-testid="contact-message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your business, current marketing challenges, and what you're looking to achieve..."
                      className="w-full bg-gray-50 border border-gray-200 focus:border-[#6A3DF0] focus:ring-1 focus:ring-[#6A3DF0] rounded-xl px-4 py-3 text-sm text-[#1F1F1F] outline-none transition-all font-['DM_Sans'] placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  {error && (
                    <div data-testid="contact-error" className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl font-['DM_Sans']">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    data-testid="contact-submit-btn"
                    disabled={loading}
                    className="bg-gradient-to-r from-[#6A3DF0] to-[#D946EF] text-white px-10 py-4 rounded-full font-semibold text-base hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Consultation Request'
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <aside className="space-y-6">
              <div className="bg-[#F9F7FF] rounded-2xl p-7 border border-gray-100">
                <h2 className="text-xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-6">
                  Contact Information
                </h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Mail size={18} className="text-[#6A3DF0]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#64748B] mb-0.5 font-['DM_Sans']">Email</div>
                      <a href="mailto:hello.markivox@gmail.com" className="text-sm font-medium text-[#1F1F1F] hover:text-[#6A3DF0] transition-colors font-['DM_Sans']">
                        hello.markivox@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Phone size={18} className="text-[#6A3DF0]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#64748B] mb-0.5 font-['DM_Sans']">Phone</div>
                      <a href="tel:+919274702081" className="text-sm font-medium text-[#1F1F1F] hover:text-[#6A3DF0] transition-colors font-['DM_Sans']">
                        +91 92747 02081
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <MapPin size={18} className="text-[#6A3DF0]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#64748B] mb-0.5 font-['DM_Sans']">Location</div>
                      <span className="text-sm font-medium text-[#1F1F1F] font-['DM_Sans']">
                        Serving Businesses Across India
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#6A3DF0] to-[#D946EF] rounded-2xl p-7 text-white">
                <h3 className="font-bold font-['Space_Grotesk'] text-lg mb-3">What to Expect</h3>
                <ul className="space-y-2.5">
                  {[
                    'Response within 24 hours',
                    'No-obligation strategy discussion',
                    'Tailored recommendations',
                    'Clear pricing & timelines',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-white/90 font-['DM_Sans']">
                      <CheckCircle2 size={15} className="text-white flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
