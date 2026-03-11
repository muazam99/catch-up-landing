'use client';

import Image from "next/image";
import SignupModal from "@/components/Function/SignupModal";
// import Link from "next/link";
import FadeInSection from "@/components/animations/FadeInSection";
import StaggerContainer, { staggerChildVariants } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
// import toast from 'react-hot-toast';

export default function Home() {
   const handleGooglePlayClick = () => {
     window.open('https://play.google.com/store/apps/details?id=com.catchupmobility.qiyam', '_blank');
   };

  //   const handleAppStoreClick = () => {
  //    window.open('https://apps.apple.com/my/app/catch-up-malaysia-train/id6751648902', '_blank');
  //  };

  return (
    <div className="min-h-screen bg-white">
      <FadeInSection direction="down" delay={0.2}>
        <header className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/app-icon.png"
              alt="Qiyam"
              width={50}
              height={50}
              className="rounded-[9px]"
            />
            <span className="text-xl font-semibold text-black">Qiyam</span>
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
                    alt="Qiyam"
                    width={120}
                    height={120}
                    className="rounded-3xl"
                  />
                </motion.div>
                <h1 className="text-xl font-semibold text-black">Qiyam</h1>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <div className="max-w-3xl">
                <h2 className="text-4xl font-bold text-black mb-4">
                  Strengthen your connection to the Mosque
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                 Track your prayers at the mosque by checking in when you arrive. Build consistency, earn personal streaks, and stay motivated in your daily prayers at mosques.
                </p>
              </div>

              {/* <SignupModal /> button for join early testing */}


            </FadeInSection>

              <FadeInSection delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <SignupModal>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Image
                      src="/app_store.png"
                      alt="Download on the App Store"
                      width={200}
                      height={60}
                      className="bg-gray-200 rounded-lg cursor-pointer"
                    />
                  </motion.div>
                </SignupModal>

               {/* <motion.div
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
                </motion.div> */}

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
              <div className="relative w-56 h-[450px]">
                <Image
                  src="/iphone-frame.png"
                  alt="iPhone Frame"
                  width={224}
                  height={450}
                  className="absolute inset-0 w-full h-full object-contain z-10"
                />
                <div className="absolute top-[25px] left-[17px] w-[190px] h-[385px] overflow-hidden rounded-[2rem]">
                  <Image
                    src="/screenshot-1.jpg"
                    alt="App Screenshot 1"
                    width={190}
                    height={385}
                    className="object-cover w-full h-full"
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
              <div className="relative w-56 h-[450px]">
                <Image
                  src="/iphone-frame.png"
                  alt="iPhone Frame"
                  width={224}
                  height={450}
                  className="absolute inset-0 w-full h-full object-contain z-10"
                />
                <div className="absolute top-[25px] left-[17px] w-[210px] h-[385px] overflow-hidden rounded-[2rem]">
                  <Image
                    src="/screenshot-2.jpg"
                    alt="App Screenshot 2"
                    width={190}
                    height={385}
                    className="object-cover w-full h-full"
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
              <div className="relative w-56 h-[450px]">
                <Image
                  src="/iphone-frame.png"
                  alt="iPhone Frame"
                  width={224}
                  height={450}
                  className="absolute inset-0 w-full h-full object-contain z-10"
                />
                <div className="absolute top-[25px] left-[17px] w-[190px] h-[385px] overflow-hidden rounded-[2rem]">
                  <Image
                    src="/screenshot-3.jpg"
                    alt="App Screenshot 3"
                    width={190}
                    height={385}
                    className="object-cover w-full h-full"
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
              <div className="relative w-56 h-[450px]">
                <Image
                  src="/iphone-frame.png"
                  alt="iPhone Frame"
                  width={224}
                  height={450}
                  className="absolute inset-0 w-full h-full object-contain z-10"
                />
                <div className="absolute top-[25px] left-[17px] w-[190px] h-[385px] overflow-hidden rounded-[2rem]">
                  <Image
                    src="/screenshot-4.jpg"
                    alt="App Screenshot 4"
                    width={190}
                    height={385}
                    className="object-cover w-full h-full"
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
              <div className="relative w-56 h-[450px]">
                <Image
                  src="/iphone-frame.png"
                  alt="iPhone Frame"
                  width={224}
                  height={450}
                  className="absolute inset-0 w-full h-full object-contain z-10"
                />
                <div className="absolute top-[25px] left-[17px] w-[190px] h-[385px] overflow-hidden rounded-[2rem]">
                  <Image
                    src="/screenshot-5.jpg"
                    alt="App Screenshot 5"
                    width={190}
                    height={385}
                    className="object-cover w-full h-full"
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
                How does the check-in work?
              </h3>
              <p className="text-gray-600">
                When you are near a mosque, the app enables a check-in button so you can record the prayer you attended.
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildVariants}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-black mb-2">
                Which languages does the app support?
              </h3>
              <p className="text-gray-600">
                Qiyam is available in English and Bahasa Malaysia for wider accessibility.
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildVariants}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-black mb-2">
               Does Qiyam work worldwide?
              </h3>
              <p className="text-gray-600">
                Yes, as long as mosque locations are available.
              </p>
            </motion.div>
          </StaggerContainer>
        </section>
      </main>
    </div>

  );
}
