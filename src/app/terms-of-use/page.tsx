'use client';

import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/animations/FadeInSection";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white">
      <FadeInSection direction="down" delay={0.2}>
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/app-icon.png"
              alt="Tadabbur AI"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className="text-xl font-semibold text-black">Tadabbur AI</span>
          </Link>
        </header>
      </FadeInSection>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <FadeInSection delay={0.4}>
          <h1 className="text-4xl font-bold text-black mb-4">Terms of Use</h1>
          <div className="text-gray-600 mb-8 space-y-1">
            <p><strong>Last updated:</strong> August 18, 2025</p>
          </div>
        </FadeInSection>

        <div className="prose max-w-none">
          <FadeInSection delay={0.6}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Respect for Privacy and Confidentiality</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Users are prohibited from recording or sharing sensitive conversations or information that would violate U.S. privacy laws. This includes confidential communications, private discussions, or any other exchanges legally protected from unauthorized disclosure.
                </p>
                <p>
                  Tadabbur AI does not condone and cannot be held liable for any unauthorized uploading of content that violates institutional policies, copyright law, or privacy laws. Users are fully responsible for ensuring their activities on the platform comply with all applicable legal and institutional requirements.
                </p>
                <p>
                  By using our platform, you agree to indemnify Tadabbur AI against any legal consequences resulting from the unauthorized distribution of material. We trust our users to respect intellectual property, privacy, and institutional policies while using Tadabbur AI.
                </p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.7}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">License to View Tadabbur AI Content</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Provided you comply with these Terms of Use, Tadabbur AI grants you a limited, personal, non-exclusive, non-commercial, revocable, and non-transferable license to access and use the content on our platform. This is strictly for personal, non-commercial, educational use.
                </p>
                <p>
                  You agree not to copy, or access content via automated means (e.g., scripts, bots, or data extraction tools) unless authorized by Tadabbur AI.
                </p>
                <p>
                  If you purchase a subscription or license to access Tadabbur content, it is for individual use only and cannot be shared with others. We may enforce reasonable limits on access to protect against unauthorized use, including limits on time, device usage, or the quantity of materials accessed.
                </p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.8}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Refund Policy for Tadabbur AI</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-black mb-3">1. Eligibility for Refunds</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Refunds are generally only available under the following conditions:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>You are within the first 30 days of your subscription purchase or renewal.</li>
                    <li>The subscription was not used excessively or in violation of our Terms of Service.</li>
                    <li>Technical issues that are caused by Tadabbur AI and could not be resolved within a reasonable time after the issue was reported.</li>
                    <li>Accidental or duplicate payments.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-black mb-3">2. No Refunds for Inactive Accounts</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We do not provide refunds for unused or inactive accounts. If you forget to cancel your subscription and it renews automatically, you are still responsible for that charge. Please ensure you manage your subscription settings in your account.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-black mb-3">3. Refund Request Process</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    To request a refund:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Email our support team at <a href="mailto:support@hashtech.app" className="text-blue-600 hover:text-blue-800 underline">support@hashtech.app</a> with the subject line "Refund Request."</li>
                    <li>Include the following details: your name, email address, subscription plan, and the reason for your refund request.</li>
                    <li>Our team will review your request and respond within 5-7 business days.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-black mb-3">4. Pro-Rated Refunds</h3>
                  <p className="text-gray-700 leading-relaxed">
                    If you cancel your subscription partway through a billing cycle, you may be eligible for a pro-rated refund based on the number of unused days in the billing period.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-black mb-3">5. Non-Refundable Cases</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Refund requests made after 30 days of subscription purchase.</li>
                    <li>Refunds for promotional offers, discounts, or special pricing.</li>
                    <li>Monthly subscription fees after the initial 30-day period.</li>
                    <li>Termination of your account due to a violation of our Terms of Service.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-black mb-3">6. Payment Processing Time</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Once your refund request is approved, the refund will be processed through the original payment method. Depending on your financial institution, it may take up to 7-14 business days for the funds to appear in your account.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-black mb-3">7. Changes to This Policy</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Tadabbur AI reserves the right to modify or update this refund policy at any time. We will notify users of any significant changes by posting the updated policy on our website.
                  </p>
                </div>
              </div>
            </section>
          </FadeInSection>
        </div>

        <FadeInSection delay={0.9}>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </FadeInSection>
      </main>
    </div>
  );
}