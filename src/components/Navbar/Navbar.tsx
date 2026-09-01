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
  return (
    <nav className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
      <div className="flex items-center justify-between rounded-full border-2 border-[#17111F] bg-[#FFF8F3]/95 px-4 py-3 shadow-[5px_5px_0px_#17111F] backdrop-blur-md">
        <a
          href="#home"
          className="rounded-full bg-[#17111F] px-4 py-2 text-sm font-black text-white"
        >
          ALAA ✦
        </a>

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

        <a
          href="#contact"
          className="rounded-full bg-[#FF4FD8] px-4 py-2 text-xs font-black text-white"
        >
          LET&apos;S TALK
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
