import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms & Conditions | Markivox';
  }, []);

  const lastUpdated = 'February 1, 2025';

  return (
    <main>
      <section className="pt-24 pb-12 bg-[#F9F7FF] border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl font-bold text-[#1F1F1F] font-['Space_Grotesk'] mb-3 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-[#64748B] text-sm font-['DM_Sans']">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <article className="py-14">
        <div className="max-w-4xl mx-auto px-6 md:px-12 prose-markivox">
          <p>
            Please read these Terms and Conditions carefully before using the Markivox website or engaging our digital marketing services. By accessing our website or entering into a service agreement with us, you agree to be bound by these terms.
          </p>

          <h2>1. Services</h2>
          <p>
            Markivox provides digital marketing services including, but not limited to, social media marketing, search engine optimization (SEO), Google Ads management, website development, and marketing strategy consulting. The specific scope, deliverables, timelines, and fees for each engagement are defined in individual service agreements or proposals provided to clients.
          </p>

          <h2>2. Website Use</h2>
          <p>
            The content on this website is provided for general information purposes only. While we make every effort to ensure accuracy, we make no warranties regarding the completeness, reliability, or accuracy of the information. Any action you take based on information from this website is strictly at your own risk.
          </p>
          <p>
            You may not use this website for any unlawful purpose, to transmit any harmful or objectionable content, to attempt unauthorized access to any part of our systems, or in any way that could damage, disable, or impair our website or servers.
          </p>

          <h2>3. Client Obligations</h2>
          <p>To enable us to deliver effective digital marketing services, clients are expected to:</p>
          <ul>
            <li>Provide accurate and complete information about their business, products, and target audience</li>
            <li>Grant necessary access to platforms, accounts, and assets required for the agreed services</li>
            <li>Review and approve creative content and strategic recommendations in a timely manner</li>
            <li>Make payments according to the agreed schedule</li>
            <li>Communicate any changes in business direction, budget, or goals that may affect the strategy</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, images, and software — is the property of Markivox and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our website content without prior written permission.
          </p>
          <p>
            For services delivered to clients: upon full payment of all fees, clients own the final deliverables created specifically for their campaigns. Markivox retains the right to use anonymized or aggregate campaign data for research, reporting, and portfolio purposes (with client identities protected unless express written permission is given).
          </p>

          <h2>5. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential any proprietary information, business strategies, financial data, or trade secrets shared during the course of an engagement. This obligation survives the termination of any service agreement. We treat all client information with the highest level of discretion.
          </p>

          <h2>6. Results and Performance</h2>
          <p>
            Digital marketing results depend on many factors beyond our direct control, including market conditions, platform algorithm changes, competitor activities, and client-side factors such as website quality and offer competitiveness. While we commit to applying best practices and continual optimization, we cannot guarantee specific outcomes such as particular search rankings, conversion rates, or revenue figures.
          </p>
          <p>
            Any performance projections or estimates we provide are based on our experience and available data and should be treated as informational guidance, not guarantees.
          </p>

          <h2>7. Payment Terms</h2>
          <p>
            Payment terms are specified in individual service agreements. Unless otherwise agreed, invoices are due within the timeline stated on the invoice. Late payments may be subject to interest charges as specified in the service agreement. Markivox reserves the right to pause or suspend services for accounts with overdue balances.
          </p>

          <h2>8. Termination</h2>
          <p>
            Either party may terminate a service engagement according to the notice period specified in the relevant service agreement. Upon termination, the client is responsible for fees for all work completed and in-progress up to the termination date. We will provide a handover of all client-owned assets and account access upon termination.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Markivox shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services, even if we have been advised of the possibility of such damages. Our total liability in any circumstance shall not exceed the fees paid by the client in the three months preceding the relevant claim.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in India.
          </p>

          <h2>11. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated revision date. Your continued use of our website or services after any changes constitutes acceptance of the updated terms.
          </p>

          <h2>12. Contact</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us:
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
