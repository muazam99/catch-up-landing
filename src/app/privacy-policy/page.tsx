'use client';

import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/animations/FadeInSection";

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-black mb-4">Privacy Policy</h1>
          <div className="text-gray-600 mb-8 space-y-1">
            <p><strong>Effective:</strong> August 17, 2025</p>
            <p><strong>Last Updated:</strong> August 17, 2025</p>
          </div>
        </FadeInSection>

        <div className="prose max-w-none">
          <FadeInSection delay={0.6}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Welcome to Tadabbur AI</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We care about your privacy and want to make sure you understand how we handle your information when using our app. Below, we explain what information we collect, how we use it, and the choices you have regarding your data.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.7}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tadabbur AI is powered by Hashtech, a self-funded company focused on integrating tech solutions and Islam.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.8}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Information We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-black mb-3">App Stats and Analytics:</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    To keep Tadabbur AI running efficiently, we collect minimal data such as:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Number of notes you create</li>
                    <li>Number of chats you engage in</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    We use third-party services to manage and analyze this data.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black mb-3">User Data:</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We collect user data such as:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Email</li>
                    <li>Name</li>
                    <li>Profile picture</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    This data is used to personalize your experience and is not shared with third parties.
                  </p>
                </div>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.9}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Cookies and Other Technologies</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  At Tadabbur AI, we prioritize your privacy and don't rely on third-party "cookies" or similar tracking technologies (e.g., web beacons). However, we use in-house cookies to improve functionality and your experience:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Communications Cookies:</strong> Ensure smooth data flow and help identify/fix errors.</li>
                  <li><strong>Essential Cookies:</strong> Vital for features like language preferences and transaction verification.</li>
                  <li><strong>Analytical Cookies:</strong> Help us understand how you interact with our services for optimization.</li>
                </ul>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.0}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Beyond Cookies</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We may use "click-through URLs" in emails to track engagement. If you prefer not to be tracked, avoid clicking links in our emails.
                </p>
                <p>
                  Most cookie data is non-personal. If local laws treat IP addresses as personal data, we protect them accordingly.
                </p>
                <p>
                  If non-personal data is combined with personal data, it is treated as protected personal information.
                </p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.1}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Third-Party Partners</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We rely on trusted third-party services:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>
                    <Link 
                      href="https://firebase.google.com/support/privacy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Firebase
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="https://www.revenuecat.com/privacy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      RevenueCat
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="https://sentry.io/privacy/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Sentry
                    </Link>
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  These services may collect/process some of your data—please review their policies for details.
                </p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.3}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Your Rights</h2>
              <div className="space-y-3 text-gray-700">
                <p><strong>Delete Your Data:</strong>You have the right to request the permanent deletion of your information from our system at any time.</p>
                <p><strong>Contact Us:</strong> For questions or support, email <a href="mailto:support@hashtech.app" className="text-blue-600 hover:text-blue-800 underline">support@hashtech.app</a>.</p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.4}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Contact Information</h2>
              <div className="space-y-2">
                <p className="text-gray-700 leading-relaxed">For further inquiries:</p>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-lg">📧</span>
                  <span><strong>Email:</strong> <a href="mailto:support@hashtech.app" className="text-blue-600 hover:text-blue-800 underline">support@hashtech.app</a></span>
                </div>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.5}>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <p className="text-gray-700 leading-relaxed">
                <strong>Thank you for choosing Tadabbur AI!</strong> We're here to support you on your Quran-learning journey.
              </p>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection delay={1.6}>
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