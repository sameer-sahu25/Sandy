import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

import wSketching from "@/assets/works/sketching.png";
import wAcrylic from "@/assets/works/acrylic.png";
import wObjectSketch from "@/assets/works/object-sketch.png";
import wMonochrome from "@/assets/works/monochromatic.png";
import wComic from "@/assets/works/comic-strip.png";
import wRendering from "@/assets/works/rendering.png";

import lumi1 from "@/assets/projects/lumi-1.png";
import lumi2 from "@/assets/projects/lumi-2.png";
import capsul1 from "@/assets/projects/capsul-1.png";
import capsul2 from "@/assets/projects/capsul-2.png";
import entwine1 from "@/assets/projects/entwine-1.png";
import entwine2 from "@/assets/projects/entwine-2.png";

import chase1 from "@/assets/projects/chase-1.png";
import chase2 from "@/assets/projects/chase-2.png";
import stoolStep1 from "@/assets/projects/stool-step-1.png";
import stoolStep2 from "@/assets/projects/stool-step-2.png";
import stoolStep3 from "@/assets/projects/stool-step-3.png";
import stoolStep4 from "@/assets/projects/stool-step-4.png";
import embAfter from "@/assets/projects/embroidery-after.png";
import embBefore from "@/assets/projects/embroidery-before.png";
import photo1 from "@/assets/projects/photo-1.png";
import photo2 from "@/assets/projects/photo-2.png";
import photo3 from "@/assets/projects/photo-3.png";
import photo4 from "@/assets/projects/photo-4.png";
import photo5 from "@/assets/projects/photo-5.png";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------- shared building blocks ---------- */

const PageWrap = ({
  id,
  tone = "bg-secondary/40",
  children,
}: {
  id?: string;
  tone?: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative overflow-hidden rounded-[2.5rem] ${tone} grain shadow-card`}
    >
      <motion.div style={{ y }} className="relative">
        {children}
      </motion.div>
    </section>
  );
};

const Eyebrow = ({ n, label }: { n: string; label: string }) => (
  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
    <span className="font-hand text-2xl text-primary">{n}</span>
    <span className="h-px w-10 bg-foreground/40" />
    {label}
  </div>
);

const reveal = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

/* ---------- 01 · Cover ---------- */

const Cover = () => (
  <PageWrap id="cover" tone="bg-foreground text-background">
    <div className="relative px-8 py-24 md:py-40 md:px-20 min-h-[90vh] flex flex-col justify-between">
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-primary/40 animate-blob animate-float rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent/30 animate-blob rounded-full blur-2xl" style={{ animationDelay: "3s" }} />

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal} className="relative">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.5em] text-background/60">
          <Sparkles className="w-4 h-4 text-primary" /> Volume · 01
        </div>
      </motion.div>

      <div className="relative">
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE }}
          className="font-hand text-4xl md:text-6xl text-primary mb-2"
        >
          creative
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
          className="font-display text-[18vw] md:text-[14rem] leading-[0.85] tracking-tight"
        >
          PORT<em className="font-hand italic text-primary">folio</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 text-lg uppercase tracking-[0.25em] font-medium text-background"
        >
          By Sandhyarani Prusty
        </motion.p>
      </div>

      <div className="relative flex items-end justify-between text-sm text-background/50">
        <span>2025 Edition</span>
        <span className="font-hand text-2xl text-background/80">— turn the page</span>
      </div>
    </div>
  </PageWrap>
);

/* ---------- 02 · About ---------- */

const About = () => (
  <PageWrap id="about-page" tone="bg-secondary/60">
    <div className="grid md:grid-cols-12 gap-10 px-8 py-20 md:px-20 md:py-32">
      <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="md:col-span-5 relative">
        <Eyebrow n="02" label="Chapter one" />
        <h3 className="mt-6 font-display text-6xl md:text-8xl leading-[0.9]">
          About <em className="font-hand text-primary">me</em>.
        </h3>
        <div className="mt-10 inline-block">
          <div className="font-hand text-4xl text-accent rotate-[-4deg] inline-block px-6 py-3 border-2 border-dashed border-accent/50 rounded-2xl">
            hi, i'm Sandhya ✿
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="md:col-span-7 space-y-6 text-lg md:text-xl leading-relaxed text-foreground/80"
      >
        <p>
          My name is <span className="font-medium text-foreground">Sandhyarani Prusty</span>. I'm a creative and curious person who loves to learn new things and think about new ideas.
        </p>
        <p>
          I really like to design and to express my thoughts through activities like sketching, painting, embroidery, stitching, and crafting. These things have made me more patient and made me pay more attention to the little things.
        </p>
        <p>
          For me, designing isn't just about making things look nice; it's also about finding simple and meaningful ways to solve problems. I draw inspiration from the things I see in my day-to-day life as well as from nature and my surroundings.
        </p>
        <p className="font-hand text-3xl text-primary pt-4">
          I want to grow and make work that is simple, useful, and meaningful.
        </p>
      </motion.div>
    </div>
  </PageWrap>
);

/* ---------- 03 · Product Design intro ---------- */

const ProductIntro = () => (
  <PageWrap id="product-intro" tone="bg-highlight/30">
    <div className="px-8 py-28 md:py-44 md:px-20 text-center relative">
      <Eyebrow n="03" label="Section two" />
      <motion.h3
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: EASE }}
        className="mt-8 font-display text-[16vw] md:text-[12rem] leading-[0.85]"
      >
        Product
        <br />
        <em className="font-hand text-primary not-italic">design</em>
      </motion.h3>
      <p className="mt-10 font-hand text-3xl text-foreground/70">
        objects that solve, soothe & belong.
      </p>
    </div>
  </PageWrap>
);

/* ---------- 04 · Lumi ---------- */

const Lumi = () => (
  <PageWrap id="lumi" tone="bg-card">
    <div className="grid md:grid-cols-2 gap-0 items-stretch min-h-[80vh]">
      <div className="relative bg-gradient-warm flex items-center justify-center p-8 md:p-14">
        <div className="absolute inset-0 grain opacity-100" />
        <div className="relative grid gap-5 w-full max-w-xl">
          <motion.img
            initial={{ opacity: 0, y: 40, rotate: -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            src={lumi1}
            alt="Lumi — render views (front, side, back)"
            className="w-full rounded-2xl shadow-card"
          />
          <motion.img
            initial={{ opacity: 0, y: 40, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE, delay: 0.15 }}
            src={lumi2}
            alt="Lumi — concept sketches"
            className="w-full rounded-2xl shadow-card"
          />
        </div>
      </div>
      <div className="p-10 md:p-20 flex flex-col justify-center">
        <Eyebrow n="04" label="Product 01" />
        <h3 className="mt-6 font-display text-7xl md:text-9xl leading-[0.85]">
          Lumi<span className="text-primary">.</span>
        </h3>
        <p className="mt-3 font-hand text-3xl text-accent">a friendly bedside companion</p>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-xl">
          A smart bedside table designed for children and patients, combining furniture with a friendly AI assistant. With built-in storage, mobility wheels, reminders, and emergency support, it offers a safe, practical, and user-friendly bedside solution.
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-4 text-sm">
          {["AI Assistant", "Storage", "Mobile Wheels", "Reminders", "Emergency SOS", "Soft-touch finish"].map((f) => (
            <li key={f} className="rounded-2xl bg-muted/60 px-4 py-3 font-medium">
              ✦ {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </PageWrap>
);

/* ---------- 05 · Capsul ---------- */

const Capsul = () => (
  <PageWrap id="capsul" tone="bg-accent/20">
    <div className="grid md:grid-cols-2 gap-0 min-h-[80vh] items-stretch">
      <div className="p-10 md:p-20 flex flex-col justify-center order-2 md:order-1">
        <Eyebrow n="05" label="Product 02" />
        <h3 className="mt-6 font-display text-7xl md:text-9xl leading-[0.85]">
          <em className="font-hand text-accent">Capsul</em>
        </h3>
        <p className="mt-3 uppercase tracking-[0.3em] text-sm text-muted-foreground">Roll · Lock · Carry</p>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-xl">
          A compact and portable organizer designed for everyday essentials. It features multiple containers of varying sizes enclosed within a secure zippered pouch. Its rollable form with a thread-lock mechanism makes it space-saving, travel-friendly, and easy to carry.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {["Travel-friendly", "Modular", "Thread-lock", "Compact"].map((t) => (
            <span key={t} className="rounded-full border border-foreground/20 px-4 py-2 text-sm">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="relative bg-gradient-dream flex items-center justify-center p-8 md:p-14 order-1 md:order-2">
        <div className="absolute inset-0 grain opacity-100" />
        <div className="relative grid gap-5 w-full max-w-xl">
          <motion.img
            initial={{ opacity: 0, y: 40, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            src={capsul1}
            alt="Capsul — concept sketches"
            className="w-full rounded-2xl shadow-card"
          />
          <motion.img
            initial={{ opacity: 0, y: 40, rotate: -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE, delay: 0.15 }}
            src={capsul2}
            alt="Capsul — final product photography"
            className="w-full rounded-2xl shadow-card"
          />
        </div>
      </div>
    </div>
  </PageWrap>
);

/* ---------- 06 · Entwine ---------- */

const Entwine = () => (
  <PageWrap id="entwine" tone="bg-primary/15">
    <div className="grid md:grid-cols-2 gap-0 min-h-[80vh] items-stretch">
      <div className="relative bg-foreground text-background flex items-center justify-center p-8 md:p-14">
        <div className="absolute inset-0 grain opacity-100" />
        <div className="absolute top-6 left-6 z-10 font-hand text-3xl text-primary">two scents · one form</div>
        <div className="relative grid gap-5 w-full max-w-xl mt-10">
          <motion.img
            initial={{ opacity: 0, y: 40, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            src={entwine1}
            alt="Entwine — final product photography"
            className="w-full rounded-2xl shadow-card"
          />
          <motion.img
            initial={{ opacity: 0, y: 40, rotate: 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE, delay: 0.15 }}
            src={entwine2}
            alt="Entwine — concept sketch"
            className="w-full rounded-2xl shadow-card"
          />
        </div>
      </div>
      <div className="p-10 md:p-20 flex flex-col justify-center">
        <Eyebrow n="06" label="Product 03" />
        <h3 className="mt-6 font-display text-7xl md:text-9xl leading-[0.85]">
          Ent<em className="font-hand italic gradient-text">wine</em>.
        </h3>
        <p className="mt-3 uppercase tracking-[0.3em] text-sm text-muted-foreground">Individuality · Within unity</p>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-xl">
          A perfume bottle design symbolizing the bond between two individuals. Two inner compartments hold different scents, representing individuality within unity, while the intertwined form expresses harmony, connection, and togetherness.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
          <div className="border-l-2 border-primary pl-4">
            <div className="font-display text-3xl">Her</div>
            <div className="text-sm text-muted-foreground">floral · soft</div>
          </div>
          <div className="border-l-2 border-accent pl-4">
            <div className="font-display text-3xl">Him</div>
            <div className="text-sm text-muted-foreground">woody · warm</div>
          </div>
        </div>
      </div>
    </div>
  </PageWrap>
);

/* ---------- 07 · Game design intro + The Chase ---------- */

const TheChase = () => (
  <PageWrap id="the-chase" tone="bg-foreground text-background">
    <div className="relative px-8 py-20 md:px-20 md:py-32">
      <div className="absolute -top-32 -left-20 w-[400px] h-[400px] bg-primary/40 animate-blob rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/30 animate-blob rounded-full blur-3xl" style={{ animationDelay: "2s" }} />

      <div className="relative grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <Eyebrow n="07" label="Game design" />
          <h3 className="mt-6 font-display text-7xl md:text-[9rem] leading-[0.85]">
            The
            <br />
            <em className="font-hand italic text-primary">Chase</em>.
          </h3>
          <p className="mt-8 text-lg leading-relaxed text-background/70 max-w-xl">
            A 4-player board game based on strategy and pursuit, where one cop chases three thieves. Players collect coins while avoiding capture, creating an engaging balance of competition, movement, and quick decision-making.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            {[
              { k: "4", v: "players" },
              { k: "1", v: "cop" },
              { k: "3", v: "thieves" },
              { k: "∞", v: "fun" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-background/20 px-5 py-3">
                <div className="font-display text-3xl text-primary leading-none">{s.k}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-background/60 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-5 grid gap-5">
          <motion.img
            initial={{ opacity: 0, y: 40, rotate: -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            src={chase1}
            alt="The Chase — rules & board sketch"
            className="w-full rounded-2xl shadow-card"
          />
          <motion.img
            initial={{ opacity: 0, y: 40, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE, delay: 0.15 }}
            src={chase2}
            alt="The Chase — final product photos"
            className="w-full rounded-2xl shadow-card"
          />
        </div>
      </div>
    </div>
  </PageWrap>
);

/* ---------- 08 · Foldable Stool ---------- */

const Stool = () => (
  <PageWrap id="stool" tone="bg-highlight/40">
    <div className="grid md:grid-cols-2 gap-0 min-h-[70vh] items-stretch">
      <div className="p-10 md:p-20 flex flex-col justify-center">
        <Eyebrow n="08" label="Model · Craft" />
        <h3 className="mt-6 font-display md:text-9xl leading-[0.85] text-8xl">
          Foldable
          <br />
          <em className="font-hand text-primary not-italic">STOOL</em>
        </h3>
        <p className="mt-8 text-lg leading-relaxed text-foreground/80 max-w-xl">
          I created a portable stool from ice cream sticks, wooden sticks, and cardboard. The design involved an interlocking mechanism that allowed easy folding and opening of the stool, which is light in weight and stable.
        </p>
        <div className="mt-8 inline-flex items-center gap-3 self-start rounded-full bg-foreground text-background px-5 py-2 text-sm">
          ✦ Around 3–4 inches
        </div>
      </div>
      <div className="relative flex items-center justify-center p-8 md:p-14 bg-card">
        <div className="absolute inset-0 grain opacity-100" />
        <div className="relative grid grid-cols-2 gap-4 w-full">
          {[stoolStep1, stoolStep2, stoolStep3, stoolStep4].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
              className="relative"
            >
              <img
                src={img}
                alt={`Foldable stool — step ${i + 1}`}
                className="w-full aspect-square object-cover rounded-2xl shadow-card"
              />
              <span className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-display flex items-center justify-center text-sm shadow-card">
                {i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </PageWrap>
);

/* ---------- 09 · Embroidery (Before / After) ---------- */

const Embroidery = () => (
  <PageWrap id="embroidery" tone="bg-accent/15">
    <div className="px-8 py-20 md:px-20 md:py-32">
      <Eyebrow n="09" label="Hand · Thread" />
      <h3 className="mt-6 font-display text-7xl md:text-9xl leading-[0.85]">
        Embroidery
        <br />
        <em className="font-hand text-accent not-italic">design</em>.
      </h3>

      <div className="mt-16 grid md:grid-cols-2 gap-8">
        {[
          { label: "Before", img: embBefore, tone: "bg-muted" },
          { label: "After", img: embAfter, tone: "bg-gradient-warm" },
        ].map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.15, ease: EASE }}
            className={`relative rounded-[2rem] overflow-hidden ${b.tone} aspect-auto grain shadow-card group`}
          >
            <img
              src={b.img}
              alt={`Embroidery ${b.label}`}
              className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute top-6 left-6 font-hand text-5xl text-background drop-shadow-lg">
              {b.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </PageWrap>
);

/* ---------- 10 · Photography ---------- */

const Photography = () => (
  <PageWrap id="photography" tone="bg-foreground text-background">
    <div className="px-8 py-20 md:px-20 md:py-32 relative">
      <Eyebrow n="10" label="Eye · Light" />
      <h3 className="mt-6 font-display text-7xl md:text-[10rem] leading-[0.85]">
        Photo
        <em className="font-hand italic text-primary">graphy</em>.
      </h3>
      <p className="mt-4 uppercase tracking-[0.4em] text-background/60 text-sm">Skills</p>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
        {[photo1, photo2, photo3, photo4, photo5].map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: EASE }}
            className={`relative overflow-hidden rounded-2xl ${
              i === 0 ? "md:row-span-2 aspect-[3/5] md:aspect-auto" : "aspect-[4/5]"
            } group shadow-card`}
          >
            <img
              src={src}
              alt={`Photo ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </div>
  </PageWrap>
);

/* ---------- 11 · Other works ---------- */

const Other = () => (
  <PageWrap id="other" tone="bg-secondary/60">
    <div className="px-8 py-20 md:px-20 md:py-32">
      <Eyebrow n="11" label="More" />
      <h3 className="mt-6 font-display text-7xl md:text-9xl leading-[0.85]">
        Other <em className="font-hand text-primary not-italic">works</em>.
      </h3>
      <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
        A collection of sketches, paintings, and tiny experiments — the in-between pieces that fuel the bigger projects.
      </p>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {[
          { t: "Sketching", c: "Pencil studies from life", img: wSketching },
          { t: "Acrylic Painting", c: "Krishna on canvas", img: wAcrylic },
          { t: "Rendering", c: "Color pencil realism", img: wRendering },
          { t: "Monochromatic sketching", c: "Ballpoint in blue", img: wMonochrome },
          { t: "Comic strip", c: "Story in three frames", img: wComic },
          { t: "Object sketch", c: "Ink form studies", img: wObjectSketch },
        ].map((w, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: EASE }}
            className="group relative overflow-hidden rounded-[1.5rem] bg-card shadow-soft lift"
          >
            <div className="aspect-[4/5] overflow-hidden bg-muted/30 flex items-center justify-center">
              <img
                src={w.img}
                alt={w.t}
                className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="p-5 flex items-center justify-between">
              <div>
                <div className="font-display text-xl">{w.t}</div>
                <div className="text-sm text-muted-foreground">{w.c}</div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </PageWrap>
);

/* ---------- 12 · Thank you ---------- */

const ThankYou = () => (
  <PageWrap id="thanks" tone="bg-gradient-warm text-background">
    <div className="px-8 py-32 md:py-44 md:px-20 text-center relative">
      <div className="absolute inset-0 grain opacity-100" />
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
        className="font-hand text-5xl md:text-7xl text-background/90"
      >
        Thank you
      </motion.p>
      <motion.h3
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
        className="mt-6 font-display text-[14vw] md:text-[10rem] leading-[0.85]"
      >
        for viewing<span className="text-background">.</span>
      </motion.h3>
      <p className="mt-10 text-background/80 text-lg">
        Find me on{" "}
        <a className="underline underline-offset-4 font-medium" href="https://www.instagram.com/__sandhya_._/" target="_blank" rel="noreferrer">
          @__sandhya_._
        </a>{" "}
        ·{" "}
        <a className="underline underline-offset-4 font-medium" href="mailto:sandhyaaa.0122@gmail.com">
          sandhyaaa.0122@gmail.com
        </a>
      </p>
    </div>
  </PageWrap>
);

/* ---------- Public component ---------- */

export const WorkPages = () => (
  <div className="space-y-10 md:space-y-16">
    <Cover />
    <About />
    <ProductIntro />
    <Lumi />
    <Capsul />
    <Entwine />
    <TheChase />
    <Stool />
    <Embroidery />
    <Photography />
    <Other />
    <ThankYou />
  </div>
);

export default WorkPages;
