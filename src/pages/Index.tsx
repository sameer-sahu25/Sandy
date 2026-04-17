import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, Instagram, Mail, Sparkles, ArrowUpRight } from "lucide-react";

import portrait from "@/assets/projects/sandhya-portrait.png";

import m1 from "@/assets/models/model-1.png";
import m2 from "@/assets/models/model-2.png";
import m3 from "@/assets/models/model-3.png";
import m4 from "@/assets/models/model-4.png";

import { WorkPages } from "@/components/WorkPages";

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
} as const;

const Section = ({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`relative container py-24 md:py-36 ${className}`}>
    {(eyebrow || title) && (
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-14 md:mb-20 max-w-3xl"
      >
        {eyebrow && (
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-muted-foreground mb-5">
            <span className="h-px w-10 bg-foreground/40" />
            {eyebrow}
          </div>
        )}
        {title && (
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance">{title}</h2>
        )}
      </motion.div>
    )}
    {children}
  </section>
);

const ProjectShowcase = ({
  image,
  align = "left",
  index,
}: {
  image: string;
  align?: "left" | "right";
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [align === "left" ? -2 : 2, align === "left" ? 2 : -2]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`flex ${align === "left" ? "md:justify-start" : "md:justify-end"} justify-center`}
    >
      <motion.div
        style={{ y, rotate }}
        className="group relative max-w-4xl w-full"
      >
        <div className="absolute -inset-6 bg-gradient-warm opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-700" />
        <div className="relative overflow-hidden rounded-[2rem] shadow-card lift bg-card">
          <span className="absolute top-5 left-5 z-10 font-hand text-3xl text-primary">
            #{String(index).padStart(2, "0")}
          </span>
          <img
            src={image}
            alt={`Portfolio page ${index}`}
            loading="lazy"
            className="w-full h-auto block transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const ModelCard = ({ image, title, caption, tone }: { image: string; title: string; caption: string; tone: string }) => (
  <motion.article
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    className="group relative"
  >
    <div className={`absolute -inset-3 rounded-[2.2rem] blur-2xl opacity-50 transition-opacity duration-700 group-hover:opacity-90 ${tone}`} />
    <div className="relative overflow-hidden rounded-[2rem] bg-card shadow-soft lift">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{caption}</p>
      </div>
    </div>
  </motion.article>
);

const Index = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProg } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroProg, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroProg, [0, 1], [1, 0]);

  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const move = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const [sent, setSent] = useState(false);

  const marqueeWords = ["Product Design", "Craft", "Embroidery", "Photography", "Sketches", "Game Design", "Curiosity"];

  return (
    <main className="relative overflow-x-hidden bg-gradient-soft">
      {/* Scroll progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-gradient-warm z-[60]"
      />

      {/* Cursor glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed z-0 hidden md:block w-[480px] h-[480px] rounded-full blur-3xl opacity-30 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${cursor.x - 240}px, ${cursor.y - 240}px)`,
          background: "radial-gradient(circle, hsl(var(--primary)/0.6), transparent 60%)",
        }}
      />

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
        <nav className="container flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-2">
            <img src="/websitelogo.ico" alt="SR Logo" className="w-10 h-10 object-contain" />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#models" className="hover:text-foreground transition-colors">Models</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium hover:bg-primary transition-colors"
          >
            Say hello
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" ref={heroRef} className="relative min-h-screen flex items-center pt-28 pb-20 grain">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-primary/30 animate-blob animate-float" />
          <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-accent/30 animate-blob" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] bg-highlight/40 animate-blob" style={{ animationDelay: "4s" }} />
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-muted-foreground mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" /> Creative Portfolio · 2026
          </motion.div>

          <h1 className="font-display font-light text-[15vw] md:text-[10rem] leading-[0.85] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="block pb-2 -mb-2"
            >
              Sandhya<span className="font-hand italic text-primary">rani</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="block gradient-dream font-medium pb-4 -mb-4"
            >
              Prusty.
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-5xl"
          >
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-balance">
              Curious designer & maker — crafting simple, useful, and meaningful objects through sketching, painting, embroidery and product design.
            </p>
            <a href="#about" className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] group">
              Scroll
              <span className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                <ArrowDown className="w-4 h-4" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div className="relative py-8 border-y border-border/60 bg-foreground text-background overflow-hidden">
        <div className="flex marquee-track whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-12 pr-12">
              {marqueeWords.map((w, i) => (
                <span key={i} className="font-display text-3xl md:text-5xl flex items-center gap-12">
                  {w}
                  <span className="text-primary text-2xl">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <Section id="about" eyebrow="About me" title={<>A maker who finds<br /><em className="font-hand text-primary not-italic">meaning</em> in the small things.</>}>
        <div className="grid md:grid-cols-5 gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 relative"
          >
            <div className="absolute -inset-4 bg-gradient-warm rounded-[2rem] blur-2xl opacity-40" />
            <img src={portrait} alt="Sandhyarani Prusty" loading="lazy" className="relative rounded-[2rem] w-full shadow-card" />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-3 space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground"
          >
            <p>
              My name is <span className="text-foreground font-medium">Sandhyarani Prusty</span>. I'm a creative and curious person who loves to learn new things and think about new ideas.
            </p>
            <p>
              I really like to design and to express my thoughts through activities like sketching, painting, embroidery, stitching, and crafting. These things have made me more patient and made me pay more attention to the little things.
            </p>
            <p>
              For me, designing isn't just about making things look nice — it's also about finding simple and meaningful ways to solve problems. I draw inspiration from my day-to-day life, from nature and from my surroundings.
            </p>
            <p className="font-hand text-3xl text-foreground pt-4">
              I want to grow and make work that is simple, useful, and meaningful.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* WORK — every PDF page rebuilt as real HTML sections */}
      <Section id="work" eyebrow="Selected Work" title={<>The <em className="gradient-text not-italic">portfolio</em>, page by page.</>}>
        <WorkPages />
      </Section>

      {/* MODEL PROJECTS */}
      <Section
        id="models"
        eyebrow="Model Projects"
        title={<>Hands-on, <em className="font-hand text-accent not-italic">handmade</em>.</>}
      >
        <p className="max-w-2xl text-lg text-muted-foreground mb-14 -mt-6">
          Physical models and craft pieces — built from paper, foam, sticks and care. Each piece an exercise in patience and detail.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ModelCard image={m1} title="Bedroom Interior" caption="Paper-craft interior with miniature furniture & textures." tone="bg-primary/40" />
          <ModelCard image={m2} title="Heel Model" caption="Sculpted seating, lotus blooms and folded cranes." tone="bg-accent/40" />
          <ModelCard image={m3} title="Krishna Crown" caption="Peacock-feather mukut with paper, beads & pins." tone="bg-highlight/40" />
          <ModelCard image={m4} title="Futuristic Mask" caption="Sketch-to-model exploration of mechanical form." tone="bg-primary/30" />
        </div>
      </Section>

      {/* CONTACT */}
      <section id="contact" className="relative bg-foreground text-background mt-12">
        <div className="absolute inset-0 grain opacity-100" />
        <div className="container relative py-28 md:py-40">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-background/60 mb-6">
              <span className="h-px w-10 bg-background/40" /> Contact
            </div>
            <h2 className="font-display text-6xl md:text-[8rem] leading-[0.9] mb-12">
              Let's <em className="gradient-dream not-italic">create</em><br /> something.
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <motion.form
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 4000);
                (e.target as HTMLFormElement).reset();
              }}
              className="space-y-8"
            >
              <div className="group">
                <label className="block text-xs uppercase tracking-[0.3em] text-background/50 mb-3">Your name</label>
                <input
                  required
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full bg-transparent border-b border-background/30 pb-3 text-xl text-background placeholder:text-background/30 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.3em] text-background/50 mb-3">Email</label>
                <input
                  required
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full bg-transparent border-b border-background/30 pb-3 text-xl text-background placeholder:text-background/30 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.3em] text-background/50 mb-3">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your idea…"
                  className="w-full bg-transparent border-b border-background/30 pb-3 text-xl text-background placeholder:text-background/30 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="group/btn relative inline-flex items-center gap-3 rounded-full bg-background text-foreground px-8 py-4 font-medium overflow-hidden transition-transform hover:scale-[1.03]"
              >
                <span className="absolute inset-0 bg-gradient-warm translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                <span className="relative">{sent ? "Thank you ✦" : "Send message"}</span>
                <ArrowUpRight className="relative w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </button>
            </motion.form>

            {/* Info */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-10"
            >
              <a
                href="mailto:sandhyaaa.0122@gmail.com"
                className="group block border-t border-background/20 pt-8 hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-background/50 mb-3">
                  <Mail className="w-4 h-4" /> Email
                </div>
                <div className="font-display text-3xl md:text-4xl group-hover:text-primary transition-colors">
                  sandhyaaa.0122@gmail.com
                </div>
              </a>
              <a
                href="https://www.instagram.com/__sandhya_._/"
                target="_blank"
                rel="noreferrer"
                className="group block border-t border-background/20 pt-8 hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-background/50 mb-3">
                  <Instagram className="w-4 h-4" /> Instagram
                </div>
                <div className="font-display text-3xl md:text-4xl group-hover:text-primary transition-colors">
                  @__sandhya_._
                </div>
              </a>
              <div className="border-t border-background/20 pt-8">
                <div className="text-xs uppercase tracking-[0.3em] text-background/50 mb-3">Available for</div>
                <div className="flex flex-wrap gap-3">
                  {["Product design", "Craft commissions", "Illustrations", "Collaboration"].map((t) => (
                    <span key={t} className="rounded-full border border-background/30 px-4 py-2 text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-24 pt-8 border-t border-background/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-background/50">
            <div>© {new Date().getFullYear()} Sandhyarani Prusty — Creative Portfolio.</div>
            <div className="font-hand text-2xl text-background/80">Made with care ✦</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
