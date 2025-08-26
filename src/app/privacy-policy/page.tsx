'use client';

import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/animations/FadeInSection";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white" style={{ scrollBehavior: 'smooth' }}>
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
          <h1 className="text-4xl font-bold text-black mb-4">PRIVACY POLICY</h1>
          <div className="text-gray-600 mb-8">
            <p><strong>Last updated July 23, 2025</strong></p>
          </div>
        </FadeInSection>

        <div className="prose max-w-none">
          <FadeInSection delay={0.6}>
            <section className="mb-8">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  This Privacy Notice for Catch Up Mobility (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), describes how and why we might access, collect, store, use, and/or share (&quot;process&quot;) your personal information when you use our services (&quot;Services&quot;), including when you:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Download and use our mobile application (Catch Up! : Train Navigation), or any other application of ours that links to this Privacy Notice</li>
                  <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                </ul>
                <p>
                  <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:catchupmobility@gmail.com" className="text-blue-600 hover:text-blue-800 underline">catchupmobility@gmail.com</a>.
                </p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.7}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">SUMMARY OF KEY POINTS</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
                </p>
                <p>
                  <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.
                </p>
                <p>
                  <strong>Do we process any sensitive personal information?</strong> Some of the information may be considered &quot;special&quot; or &quot;sensitive&quot; in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.
                </p>
                <p>
                  <strong>Do we collect any information from third parties?</strong> We may collect information from public databases, marketing partners, social media platforms, and other outside sources. Learn more about information collected from other sources.
                </p>
                <p>
                  <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.
                </p>
                <p>
                  <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about when and with whom we share your personal information.
                </p>
                <p>
                  <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.
                </p>
                <p>
                  <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                </p>
                <p>
                  Want to learn more about what we do with any information we collect? Review the Privacy Notice in full.
                </p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.8}>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">TABLE OF CONTENTS</h2>
              <ol className="list-decimal pl-6 space-y-1 text-gray-700">
                <li><a href="#section-1" className="text-blue-600 hover:text-blue-800 underline cursor-pointer">WHAT INFORMATION DO WE COLLECT?</a></li>
                <li><a href="#section-2" className="text-blue-600 hover:text-blue-800 underline cursor-pointer">HOW DO WE PROCESS YOUR INFORMATION?</a></li>
                <li><a href="#section-3" className="text-blue-600 hover:text-blue-800 underline cursor-pointer">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
                <li><a href="#section-4" className="text-blue-600 hover:text-blue-800 underline cursor-pointer">WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</a></li>
                <li><a href="#section-5" className="text-blue-600 hover:text-blue-800 underline cursor-pointer">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
                <li><a href="#section-6" className="text-blue-600 hover:text-blue-800 underline cursor-pointer">DO WE COLLECT INFORMATION FROM MINORS?</a></li>
                <li><a href="#section-7" className="text-blue-600 hover:text-blue-800 underline cursor-pointer">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
                <li><a href="#section-8" className="text-blue-600 hover:text-blue-800 underline cursor-pointer">CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
                <li><a href="#section-9" className="text-blue-600 hover:text-blue-800 underline cursor-pointer">DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
                <li><a href="#section-10" className="text-blue-600 hover:text-blue-800 underline cursor-pointer">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
                <li><a href="#section-11" className="text-blue-600 hover:text-blue-800 underline cursor-pointer">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
              </ol>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.9}>
            <section className="mb-8" id="section-1">
              <h2 className="text-2xl font-semibold text-black mb-4">1. WHAT INFORMATION DO WE COLLECT?</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-black mb-3">Personal information you disclose to us</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>In Short:</strong> We collect personal information that you provide to us.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                    <li>email addresses</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Sensitive Information.</strong> We do not process sensitive information.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by Revenuecat, Sentry and Firebase. You may find their privacy notice link(s) here: <a href="https://www.revenuecat.com/privacy/" className="text-blue-600 hover:text-blue-800 underline">https://www.revenuecat.com/privacy/</a>, <a href="https://sentry.io/privacy/" className="text-blue-600 hover:text-blue-800 underline">https://sentry.io/privacy/</a> and <a href="https://firebase.google.com/support/privacy" className="text-blue-600 hover:text-blue-800 underline">https://firebase.google.com/support/privacy</a>.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-black mb-3">Information automatically collected</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">The information we collect includes:</p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called &quot;crash dumps&quot;), and hardware settings).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-black mb-3">Google API</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our use of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-black mb-3">Information collected from other sources</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>In Short:</strong> We may collect limited data from public databases, marketing partners, and other outside sources.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    In order to enhance our ability to provide relevant marketing, offers, and services to you and update our records, we may obtain information about you from other sources, such as public databases, joint marketing partners, affiliate programs, data providers, and from other third parties. This information includes mailing addresses, job titles, email addresses, phone numbers, intent data (or user behavior data), Internet Protocol (IP) addresses, social media profiles, social media URLs, and custom profiles, for purposes of targeted advertising and event promotion.
                  </p>
                </div>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.0}>
            <section className="mb-8" id="section-2">
              <h2 className="text-2xl font-semibold text-black mb-4">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                </p>
                <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
                  <li>To request feedback. We may process your information when necessary to request feedback and to contact you about your use of our Services.</li>
                  <li>To identify usage trends. We may process information about how you use our Services to better understand how they are being used so we can improve them.</li>
                </ul>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.1}>
            <section className="mb-8" id="section-3">
              <h2 className="text-2xl font-semibold text-black mb-4">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.
                </p>
                <p>
                  <strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents (&quot;third parties&quot;) who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.
                </p>
                <p>The third parties we may share personal information with are as follows:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Cloud Computing Services:</strong> Google Cloud Platform</li>
                  <li><strong>Web and Mobile Analytics:</strong> Google Analytics for Firebase</li>
                  <li><strong>Website Testing:</strong> Google Play Console</li>
                </ul>
                <p>We also may need to share your personal information in the following situations:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                  <li><strong>Offer Wall.</strong> Our application(s) may display a third-party hosted &quot;offer wall.&quot; Such an offer wall allows third-party advertisers to offer virtual currency, gifts, or other items to users in return for the acceptance and completion of an advertisement offer. Such an offer wall may appear in our application(s) and be displayed to you based on certain data, such as your geographic area or demographic information. When you click on an offer wall, you will be brought to an external website belonging to other persons and will leave our application(s). A unique identifier, such as your user ID, will be shared with the offer wall provider in order to prevent fraud and properly credit your account with the relevant reward.</li>
                </ul>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.2}>
            <section className="mb-8" id="section-4">
              <h2 className="text-2xl font-semibold text-black mb-4">4. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>In Short:</strong> We are not responsible for the safety of any information that you share with third parties that we may link to or who advertise on our Services, but are not affiliated with, our Services.
                </p>
                <p>
                  The Services, including our offer wall, may link to third-party websites, online services, or mobile applications and/or contain advertisements from third parties that are not affiliated with us and which may link to other websites, services, or applications. Accordingly, we do not make any guarantee regarding any such third parties, and we will not be liable for any loss or damage caused by the use of such third-party websites, services, or applications. The inclusion of a link towards a third-party website, service, or application does not imply an endorsement by us. We cannot guarantee the safety and privacy of data you provide to any third-party websites. Any data collected by third parties is not covered by this Privacy Notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the Services. You should review the policies of such third parties and contact them directly to respond to your questions.
                </p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.3}>
            <section className="mb-8" id="section-5">
              <h2 className="text-2xl font-semibold text-black mb-4">5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.
                </p>
                <p>
                  We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
                </p>
                <p>
                  When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                </p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.4}>
            <section className="mb-8" id="section-6">
              <h2 className="text-2xl font-semibold text-black mb-4">6. DO WE COLLECT INFORMATION FROM MINORS?</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.
                </p>
                <p>
                  We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent&apos;s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:catchupmobility@gmail.com" className="text-blue-600 hover:text-blue-800 underline">catchupmobility@gmail.com</a>.
                </p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.5}>
            <section className="mb-8" id="section-7">
              <h2 className="text-2xl font-semibold text-black mb-4">7. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>In Short:</strong> You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.
                </p>
                <p>
                  <strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot; below.
                </p>
                <p>
                  However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                </p>
                <p>
                  If you have questions or comments about your privacy rights, you may email us at <a href="mailto:catchupmobility@gmail.com" className="text-blue-600 hover:text-blue-800 underline">catchupmobility@gmail.com</a>.
                </p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.6}>
            <section className="mb-8" id="section-8">
              <h2 className="text-2xl font-semibold text-black mb-4">8. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
                </p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.7}>
            <section className="mb-8" id="section-9">
              <h2 className="text-2xl font-semibold text-black mb-4">9. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.
                </p>
                <p>
                  We may update this Privacy Notice from time to time. The updated version will be indicated by an updated &quot;Revised&quot; date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
                </p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.8}>
            <section className="mb-8" id="section-10">
              <h2 className="text-2xl font-semibold text-black mb-4">10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  If you have questions or comments about this notice, you may email us at <a href="mailto:catchupmobility@gmail.com" className="text-blue-600 hover:text-blue-800 underline">catchupmobility@gmail.com</a> or contact us by post at:
                </p>
                <div className="ml-4">
                  <p>Catch Up Mobility</p>
                  <p>Bandar Amanjaya</p>
                  <p>Sungai Petani, Kedah 08000</p>
                  <p>Malaysia</p>
                </div>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={1.9}>
            <section className="mb-8" id="section-11">
              <h2 className="text-2xl font-semibold text-black mb-4">11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  You have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.
                </p>
              </div>
            </section>
          </FadeInSection>
        </div>

        <FadeInSection delay={2.0}>
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