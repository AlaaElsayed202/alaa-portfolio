import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
      <div className="rounded-full border-2 border-[#17111F] bg-[#FFF8F3]/95 px-4 py-3 shadow-[5px_5px_0px_#17111F] backdrop-blur-md">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="rounded-full bg-[#17111F] px-4 py-2 text-sm font-black text-white"
          >
            ALAA ✦
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-xs font-black transition hover:bg-[#FFD44D]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Let's Talk */}
          <a
            href="#contact"
            className="hidden rounded-full bg-[#FF4FD8] px-4 py-2 text-xs font-black text-white sm:block"
          >
            LET&apos;S TALK
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="rounded-full border-2 border-[#17111F] bg-[#FF4FD8] px-4 py-2 text-lg font-black text-white transition hover:-translate-y-0.5 md:hidden"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-4 border-t-2 border-[#17111F] pt-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl border-2 border-[#17111F] bg-white px-4 py-3 text-sm font-black transition hover:translate-x-1 hover:bg-[#FFD44D]"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border-2 border-[#17111F] bg-[#AAF35E] px-4 py-3 text-center text-sm font-black"
              >
                LET&apos;S TALK →
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;