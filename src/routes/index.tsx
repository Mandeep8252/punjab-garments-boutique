import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero.jpg";
import kurtiImg from "@/assets/kurti.jpg";
import nayraImg from "@/assets/nayra.jpg";
import gownImg from "@/assets/gown.jpg";
import suitsImg from "@/assets/suits.jpg";
import cropImg from "@/assets/croptop.jpg";
import jeansImg from "@/assets/jeanstop.jpg";

const TITLE = "Punjab Garments — Elegant Women's Fashion in Chapra, Bihar";
const DESC =
  "Punjab Garments in Gudari Bazar, Chapra: kurti sets, nayra cuts, gowns, suits, crop tops and jeans tops. Open all week, 10 AM – 7 PM. Call 8825192557.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "8825192557";
const ADDRESS =
  "Kapra Patti Bhunja Wala Gali, Gudari Bazar, Takkad Morde, Chapra, Bihar 841301, India";
const MAPS_LINK = "https://maps.app.goo.gl/ybz73mjKjJQ9C9ny6";


const collection = [
  { name: "Kurti Sets", desc: "Everyday grace, finished with fine embroidery.", img: kurtiImg },
  { name: "Nayra Cuts", desc: "Flowing silhouettes made to move with you.", img: nayraImg },
  { name: "Gowns", desc: "Statement pieces for the evenings that matter.", img: gownImg },
  { name: "Suits", desc: "Classic sets with dupattas, tailored beautifully.", img: suitsImg },
  { name: "Crop Tops", desc: "Modern staples in soft, wearable tones.", img: cropImg },
  { name: "Jeans Tops", desc: "Denim-led looks styled for effortless days.", img: jeansImg },
];

function Index() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Draped silk and embroidered fabrics inside Punjab Garments boutique"
          width={1600}
          height={1104}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.2_0.05_25/0.55),oklch(0.2_0.05_25/0.72))]" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <p
            className="animate-rise text-[0.7rem] uppercase tracking-[0.45em] text-gold"
            style={{ animationDelay: "0.15s" }}
          >
            Since always, in Gudari Bazar
          </p>
          <h1
            className="animate-rise mt-6 font-serif text-5xl leading-[1.05] text-primary-foreground sm:text-7xl"
            style={{ animationDelay: "0.3s" }}
          >
            Punjab Garments
          </h1>
          <div
            className="animate-rise rule-gold mx-auto mt-7 h-px w-40"
            style={{ animationDelay: "0.45s" }}
          />
          <p
            className="animate-rise mx-auto mt-7 max-w-md text-base font-light leading-relaxed text-primary-foreground/85 sm:text-lg"
            style={{ animationDelay: "0.55s" }}
          >
            Elegant Women's Fashion, Made for You
          </p>
          <a
            href="#visit"
            className="animate-rise mt-10 inline-flex items-center justify-center border border-gold/70 bg-gold/10 px-10 py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground backdrop-blur-sm transition-all duration-500 hover:bg-gold hover:text-primary hover:tracking-[0.38em]"
            style={{ animationDelay: "0.7s" }}
          >
            Visit Us
          </a>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="text-center">
          <p className="text-[0.68rem] uppercase tracking-[0.4em] text-muted-foreground">
            Our Collection
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">What We Offer</h2>
          <div className="rule-gold mx-auto mt-6 h-px w-28" />
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collection.map((item, i) => (
            <Reveal as="li" key={item.name} delay={i * 90}>
              <article className="group h-full overflow-hidden bg-card shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width={900}
                    height={1100}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                  />
                </div>
                <div className="px-6 py-6 text-center">
                  <h3 className="font-serif text-2xl">{item.name}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ABOUT */}
      <section className="bg-secondary/60 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-[0.68rem] uppercase tracking-[0.4em] text-muted-foreground">
              About Us
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Meet the Owner</h2>
            <div className="rule-gold mx-auto mt-6 h-px w-28" />
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-10 font-serif text-3xl text-primary">Amandeep Singh</p>
            <p className="mt-6 text-base font-light leading-8 text-muted-foreground">
              For years, Punjab Garments has been a quiet corner of Gudari Bazar where women come to
              find something that feels truly theirs. Every piece on our racks is chosen by hand —
              for the way the fabric falls, the finish of the stitching, and the confidence it gives
              the woman wearing it.
            </p>
            <p className="mt-5 text-base font-light leading-8 text-muted-foreground">
              We believe shopping should feel personal. Tell us the occasion and we'll help you find
              the right cut, the right colour and the right fit — with the same care we'd give our
              own family.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="mx-auto max-w-6xl scroll-mt-8 px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="text-center">
          <p className="text-[0.68rem] uppercase tracking-[0.4em] text-muted-foreground">
            Find Us
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Visit Us</h2>
          <div className="rule-gold mx-auto mt-6 h-px w-28" />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="bg-card p-8 shadow-[var(--shadow-soft)] sm:p-10">
              <h3 className="font-serif text-2xl">Our Shop</h3>
              <address className="mt-4 not-italic text-base font-light leading-8 text-muted-foreground">
                {ADDRESS}
              </address>
              <div className="rule-gold my-7 h-px w-full opacity-60" />
              <h3 className="font-serif text-2xl">Opening Hours</h3>
              <p className="mt-3 text-base font-light text-muted-foreground">
                Open all week
                <br />
                10:00 AM – 7:00 PM
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden shadow-[var(--shadow-soft)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.5704904626878!2d84.71193777436547!3d25.784746707654346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992bb930e582f27%3A0xd03fc768debcd10b!2sPunjab%20Garments!5e0!3m2!1sen!2sin!4v1787320757232!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-[380px] w-full lg:h-[440px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer className="bg-primary px-5 pb-28 pt-24 text-primary-foreground sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-serif text-4xl text-primary-foreground sm:text-5xl">Say Hello</h2>
            <div className="rule-gold mx-auto mt-6 h-px w-28" />
            <a
              href={`tel:+91${PHONE}`}
              className="mt-8 inline-block font-serif text-3xl tracking-wide text-gold transition-opacity hover:opacity-80"
            >
              {PHONE}
            </a>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={`tel:+91${PHONE}`}
                className="inline-flex items-center justify-center bg-gold px-9 py-4 text-xs uppercase tracking-[0.3em] text-primary transition-all duration-500 hover:tracking-[0.36em]"
              >
                Call Now
              </a>
              <a
                href={`https://wa.me/91${PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-primary-foreground/40 px-9 py-4 text-xs uppercase tracking-[0.3em] transition-all duration-500 hover:border-gold hover:text-gold hover:tracking-[0.36em]"
              >
                WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-16 border-t border-primary-foreground/15 pt-8">
              <p className="font-serif text-xl">Punjab Garments</p>
              <p className="mt-2 text-sm font-light text-primary-foreground/70">
                Thank you for choosing Punjab Garments.
              </p>
            </div>
          </Reveal>
        </div>
      </footer>

    </main>
  );
}
