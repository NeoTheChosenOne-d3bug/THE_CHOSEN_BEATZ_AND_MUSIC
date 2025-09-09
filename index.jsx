import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center p-6">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-bold text-indigo mb-6"
      >
        The Chosen Beatz & Music
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-gray-700 text-lg max-w-xl"
      >
        Inspiring Sound. Endless Possibilities.  
        Crafted with passion by <span className="font-semibold">Neo Anthony Vutela</span>.
      </motion.p>

      <Link href="/about">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-indigo text-white rounded-2xl shadow-lg"
        >
          Learn More
        </motion.button>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 w-full max-w-md bg-gray-100 rounded-2xl p-4 shadow-lg"
      >
        <p className="text-sm text-gray-600 mb-2">🎧 Now Playing</p>
        <div className="h-12 bg-indigo-light rounded-xl animate-pulse"></div>
      </motion.div>
    </div>
  );
}