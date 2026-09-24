const CONTACT_LINKS = [
  {
    label: "X / Twitter",
    value: "@Acrepedia",
    href: "https://x.com/Acrepedia",
  },
  {
    label: "LinkedIn",
    value: "Sanpaphat Porntongprasert",
    href: "https://www.linkedin.com/in/sanpaphat-porntongprasert/",
  },
  {
    label: "Email",
    value: "acreforcoding@gmail.com",
    href: "mailto:acreforcoding@gmail.com",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative left-1/2 w-screen -translate-x-1/2 bg-background px-6 py-8 text-black sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1600px] border-y border-black/15">
        <div className="grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 lg:px-10">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col gap-1"
            >
              <span className="text-sm font-semibold uppercase tracking-wide text-black/50">
                {link.label}
              </span>
              <span className="w-fit text-xl font-semibold underline decoration-black/40 underline-offset-4 transition-colors group-hover:text-black/60 sm:text-2xl">
                {link.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
