'use client';

import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/animations/FadeInSection";
import StaggerContainer, { staggerChildVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import toast from 'react-hot-toast';

export default function Home() {
  const handleAppStoreClick = () => {
    toast('Coming Soon! Stay tuned.', {
      icon: '📱',
      duration: 3000,
    });
  };

  const handleGooglePlayClick = () => {
    toast('Coming Soon! Stay tuned.', {
      icon: '📱',
      duration: 3000,
    });
  };
  return (
    <div className="min-h-screen bg-white">
      <FadeInSection direction="down" delay={0.2}>
        <header className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/app-icon.png"
              alt="Tadabbur AI"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className="text-xl font-semibold text-black">Tadabbur AI</span>
          </div>
        </header>
      </FadeInSection>

      <main className="flex flex-col items-center text-center px-6">
        <section className="max-w-4xl mx-auto pt-16 pb-12">
          <div className="flex flex-col items-center gap-8">
            <FadeInSection delay={0.4}>
              <div className="flex flex-col items-center gap-1">              
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src="/app-icon.png"
                    alt="Tadabbur AI"
                    width={120}
                    height={120}
                    className="rounded-3xl"
                  />
                </motion.div>
                <h1 className="text-xl font-semibold text-black">Tadabbur AI</h1>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.6}>
              <div className="max-w-3xl">
                <h2 className="text-4xl font-bold text-black mb-4">
                  Enhance your Quran study with AI-powered insights
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Discover deeper meanings and connections in the Quran through intelligent analysis and personalized learning experiences
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={handleAppStoreClick}
                >
                  <Image
                    src="/app_store.png"
                    alt="Download on the App Store"
                    width={200}
                    height={60}
                    className="bg-gray-200 rounded-lg cursor-pointer"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={handleGooglePlayClick}
                >
                  <Image
                    src="/google_play.png"
                    alt="Get it on Google Play"
                    width={200}
                    height={60}
                    className="bg-gray-200 rounded-lg cursor-pointer"
                  />
                </motion.div>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-16">
          <StaggerContainer 
            staggerDelay={0.15} 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center"
          >
            <motion.div 
              variants={staggerChildVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              <div className="w-56 h-[450px] bg-black rounded-[3rem] p-2">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="/screenshot-1.png"
                    alt="App Screenshot 1"
                    width={208}
                    height={426}
                    className="w-full h-full object-cover bg-gray-100"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerChildVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              <div className="w-56 h-[450px] bg-black rounded-[3rem] p-2">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="/screenshot-2.png"
                    alt="App Screenshot 2"
                    width={208}
                    height={426}
                    className="w-full h-full object-cover bg-gray-100"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerChildVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              <div className="w-56 h-[450px] bg-black rounded-[3rem] p-2">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="/screenshot-3.png"
                    alt="App Screenshot 3"
                    width={208}
                    height={426}
                    className="w-full h-full object-cover bg-gray-100"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerChildVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              <div className="w-56 h-[450px] bg-black rounded-[3rem] p-2">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="/screenshot-4.png"
                    alt="App Screenshot 4"
                    width={208}
                    height={426}
                    className="w-full h-full object-cover bg-gray-100"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerChildVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              <div className="w-56 h-[450px] bg-black rounded-[3rem] p-2">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="/screenshot-5.png"
                    alt="App Screenshot 5"
                    width={208}
                    height={426}
                    className="w-full h-full object-cover bg-gray-100"
                  />
                </div>
              </div>
            </motion.div>
          </StaggerContainer>
        </section>

        <section className="max-w-4xl mx-auto py-16">
          <FadeInSection delay={0.2}>
            <h2 className="text-3xl font-bold text-black mb-12 text-center">
              Frequently Asked Questions
            </h2>
          </FadeInSection>
          
          <StaggerContainer staggerDelay={0.1} className="space-y-6">
            <motion.div 
              variants={staggerChildVariants}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-black mb-2">
                What makes Tadabbur AI different from other Quran apps?
              </h3>
              <p className="text-gray-600">
                Tadabbur AI uses advanced artificial intelligence to provide personalized insights, thematic connections, and deeper understanding of Quranic verses based on your learning journey and interests.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerChildVariants}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-black mb-2">
                Is the app available in multiple languages?
              </h3>
              <p className="text-gray-600">
                Yes, Tadabbur AI supports multiple languages including Arabic, English, and other major languages to make Quranic study accessible to Muslims worldwide.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerChildVariants}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-black mb-2">
                How does the AI analysis work?
              </h3>
              <p className="text-gray-600">
                Our AI analyzes Quranic text to identify themes, provide contextual explanations, and suggest related verses, helping you discover deeper meanings and connections in your studies.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerChildVariants}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-black mb-2">
                Is my study data kept private?
              </h3>
              <p className="text-gray-600">
                Absolutely. We prioritize your privacy and ensure that your personal study data is kept secure and private, following the highest standards of data protection.
              </p>
            </motion.div>
          </StaggerContainer>
        </section>
      </main>

      <footer className="bg-gray-100 border-t border-gray-200 py-8 px-6">
        <FadeInSection delay={0.1}>
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/app-icon.png"
                alt="Tadabbur AI"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="text-left">
                <span className="text-lg font-semibold text-black">Tadabbur AI</span>
                <p className="text-sm text-gray-600">© 2025 All rights reserved.</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <Link 
                href="/privacy-policy" 
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-use" 
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </FadeInSection>
      </footer>
    </div>
  );
}
