import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Markivox';
  }, []);

  const lastUpdated = 'February 1, 2025';

  return (
    <main>
      <section className="pt-24 pb-12 bg-[#F9F7FF] border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-3 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-[#64748B] text-sm font-['DM_Sans']">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <article className="py-14">
        <div className="max-w-4xl mx-auto px-6 md:px-12 prose-markivox">
          <p>
            This Privacy Policy describes how Markivox ("we", "us", or "our") collects, uses, and protects the personal information you provide when you visit our website or contact us for our services. By using our website, you agree to the practices described in this policy.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect information in the following ways:</p>
          <ul>
            <li><strong>Contact Form Information:</strong> When you submit our consultation form, we collect your name, email address, phone number, company name, marketing budget range, services of interest, and any message you provide.</li>
            <li><strong>Usage Data:</strong> We may collect information about how you interact with our website, including pages visited, time spent, referring URLs, and browser/device information through standard web analytics tools.</li>
            <li><strong>Communication Data:</strong> If you contact us directly by email or phone, we retain records of that communication.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li>To respond to your consultation requests and enquiries</li>
            <li>To provide digital marketing services you have engaged us for</li>
            <li>To communicate updates, proposals, and reports related to your projects</li>
            <li>To improve our website and service offerings based on usage patterns</li>
            <li>To send relevant marketing communications (with your consent, and always with an option to unsubscribe)</li>
            <li>To comply with applicable legal obligations</li>
          </ul>

          <h2>3. How We Store and Protect Your Data</h2>
          <p>
            Your personal information is stored securely in our database systems. We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, or misuse. Access to personal data is restricted to team members who need it to perform their work.
          </p>
          <p>
            While we take reasonable precautions to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but are committed to maintaining best practices for data protection.
          </p>

          <h2>4. Data Sharing and Third Parties</h2>
          <p>We do not sell, rent, or trade your personal information to third parties. We may share your data in the following limited circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> We use trusted third-party tools (such as email delivery services, analytics platforms, and CRM tools) that may process your data on our behalf. These providers are bound by appropriate data processing agreements.</li>
            <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or governmental authority.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, your information may be transferred as part of that transaction, with appropriate protections.</li>
          </ul>

          <h2>5. Cookies and Tracking</h2>
          <p>
            Our website may use cookies and similar tracking technologies to enhance your browsing experience and collect usage analytics. You can configure your browser to reject cookies, though this may affect certain website functionality. We use analytics data only in aggregate form to understand site usage patterns.
          </p>

          <h2>6. Your Rights</h2>
          <p>You have the following rights regarding your personal information:</p>
          <ul>
            <li>The right to access the personal information we hold about you</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to opt out of marketing communications at any time</li>
            <li>The right to data portability in certain circumstances</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at <a href="mailto:hello.markivox@gmail.com" className="text-[#6A3DF0] hover:underline">hello.markivox@gmail.com</a>.
          </p>

          <h2>7. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, including providing services, maintaining business records, and complying with legal obligations. When data is no longer needed, we securely delete or anonymize it.
          </p>

          <h2>8. External Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies before providing any personal information.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            Our services are intended for business use and are not directed at individuals under the age of 18. We do not knowingly collect personal information from children.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will post the updated policy on this page with a revised "last updated" date. Your continued use of our website after any changes constitutes your acceptance of the updated policy.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us:
          </p>
          <ul>
            <li>Email: <a href="mailto:hello.markivox@gmail.com" className="text-[#6A3DF0] hover:underline">hello.markivox@gmail.com</a></li>
            <li>Phone: +91 92747 02081</li>
          </ul>
        </div>
      </article>

      <div className="max-w-4xl mx-auto px-6 md:px-12 pb-14">
        <Link to="/" className="text-[#6A3DF0] text-sm font-medium hover:underline font-['DM_Sans']">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
