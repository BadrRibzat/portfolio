'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Hi, I'm <span className="text-primary">Badr Ribzat</span>
            </motion.h1>
            
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Full-Stack Developer & AI Specialist
            </motion.h2>
            
            <motion.p
              className="text-lg text-muted-foreground max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Building digital solutions from anywhere in the world. 
              I create web applications, integrate AI technologies, 
              and solve complex problems with clean, efficient code.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
              
              <Button variant="outline" asChild>
                <a href="/BadrRibzat.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
              <Image 
                src="/images/me.jpg" 
                alt="Badr Ribzat" 
                width={320} 
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 right-6 bg-background px-4 py-2 rounded-full shadow-md flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
        <span className="text-sm font-medium">Available Worldwide</span>
      </motion.div>
    </section>
  );
}
