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
              alt="Catch Up Mobility"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className="text-xl font-semibold text-black">Catch Up</span>
          </Link>
        </header>
      </FadeInSection>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <FadeInSection delay={0.4}>
          <h1 className="text-4xl font-bold text-black mb-4">Terms of Use</h1>
          <div className="text-gray-600 mb-8">
            <p><strong>Last updated:</strong> 17-August-2025</p>
          </div>
        </FadeInSection>

        <div className="prose max-w-none">
          <FadeInSection delay={0.6}>
            <section className="mb-8">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Welcome to Catch Up Mobility (&quot;App&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). By downloading, accessing, or using our App, you agree to be bound by these Terms of Use. If you do not agree, please do not use the App.
                </p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.7}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Use of the App</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The App is provided for personal, non-commercial use only.
                </p>
                <p>
                  You agree not to misuse the App, attempt to disrupt its functionality, or use it for unlawful purposes.
                </p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.8}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Accounts & Data</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Some features may require creating an account. You are responsible for keeping your login details secure.
                </p>
                <p>
                  You agree to provide accurate and up-to-date information.
                </p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.9}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Transportation Information</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The App provides navigation, station, and route information to assist your travel.
                </p>
                <p>
                  While we strive to provide accurate and timely information, we cannot guarantee that schedules, delays, or availability will always be correct. Always verify critical information with official transportation providers.
                </p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.0}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Intellectual Property</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  All content, design, and features of the App are owned by us or licensed to us.
                </p>
                <p>
                  You may not copy, modify, or distribute any part of the App without prior permission.
                </p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.1}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Privacy</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Your use of the App is also governed by our Privacy Policy.
                </p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.2}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Limitation of Liability</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We are not responsible for any loss, delay, or inconvenience arising from the use of the App.
                </p>
                <p>
                  Use the App at your own risk.
                </p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.3}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Refund Policy for Catch Up</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-black mb-3">1. Eligibility for Refunds</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Refunds are generally only available under the following conditions:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>You are within the first 30 days of your subscription purchase or renewal.</li>
                    <li>The subscription was not used excessively or in violation of our Terms of Service.</li>
                    <li>Technical issues that are caused by Catch Up and could not be resolved within a reasonable time after the issue was reported.</li>
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
                    <li>Email our support team at <a href="mailto:catchupmobility@gmail.com" className="text-blue-600 hover:text-blue-800 underline">catchupmobility@gmail.com</a> with the subject line &quot;Refund Request.&quot;</li>
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
                  <h3 className="text-lg font-medium text-black mb-3">7. Changes to Terms</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may update these Terms from time to time. Continued use of the App after updates means you accept the revised Terms.
                  </p>
                </div>
              </div>
            </section>
          </FadeInSection>
        </div>

        <FadeInSection delay={1.4}>
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