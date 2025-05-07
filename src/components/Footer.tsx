import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <Image 
              src="/logo/logo-full.png" 
              alt="Badr Ribzat Logo"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
            <div>
              <p className="text-muted-foreground text-sm">Full-Stack Developer & AI Specialist</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Link
              href="https://github.com/BadrRibzat"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/badr-ribzat14121990/"
              target="_blank"
              className="text-muted-foreground hover:text-blue-600 transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Badr Ribzat. All rights reserved.</p>
          <p className="mt-2">Digital Nomad - Currently exploring the world while coding</p>
        </div>
      </div>
    </footer>
  );
}
