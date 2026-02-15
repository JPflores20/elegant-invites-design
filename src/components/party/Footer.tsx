import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-12 text-center border-t border-slate-900">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-6 tracking-tighter">
          NEON NIGHT
        </h3>
        
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
        
        <p className="text-slate-600 text-sm tracking-widest uppercase">
          © 2026 StellarDay Design. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
