import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimations = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    const updateScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", updateScroll);

    const animationFrame = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(animationFrame);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      /*
       * =========================
       * HERO
       * =========================
       */

      const hero = document.querySelector("#home");
      const heroTitle = document.querySelector("#hero-title");
      const heroCharacter = document.querySelector("#hero-character");

      if (hero && heroTitle && heroCharacter) {
        const heroAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
            pin: true,
          },
        });

        heroAnimation
          .to(heroTitle, {
            y: -150,
            scale: 0.85,
            rotation: -3,
            ease: "none",
          })
          .to(
            heroCharacter,
            {
              x: 150,
              y: 150,
              rotation: 8,
              scale: 0.8,
              ease: "none",
            },
            "<",
          );

        const stickers = gsap.utils.toArray(".hero-sticker");

        if (stickers.length > 0) {
          heroAnimation.to(
            stickers,
            {
              y: -100,
              rotation: 10,
              stagger: 0.1,
              ease: "none",
            },
            "<",
          );
        }
      }

      /*
       * =========================
       * ABOUT
       * =========================
       */

      const aboutTitle = document.querySelector("#about-title");
      const aboutCharacter = document.querySelector("#about-character");

      if (aboutTitle) {
        gsap.from(aboutTitle, {
          scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
          x: -150,
          opacity: 0,
          rotation: -5,
        });
      }

      if (aboutCharacter) {
        gsap.from(aboutCharacter, {
          scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "center center",
            scrub: 1,
          },
          x: 150,
          opacity: 0,
          scale: 0.7,
          rotation: 8,
        });
      }

      /*
       * =========================
       * SKILLS
       * =========================
       */

      const skillBubbles = gsap.utils.toArray(".skill-bubble");

      if (skillBubbles.length > 0) {
        gsap.from(skillBubbles, {
          scrollTrigger: {
            trigger: "#skills",
            start: "top 80%",
            end: "center center",
            scrub: 1,
          },
          y: 100,
          scale: 0.5,
          opacity: 0,
          stagger: 0.08,
        });
      }

      /*
       * =========================
       * CERTIFICATES
       * =========================
       */

      const certificateCards = gsap.utils.toArray(".certificate-card");

      if (certificateCards.length > 0) {
        gsap.from(certificateCards, {
          scrollTrigger: {
            trigger: "#certificates",
            start: "top 80%",
            end: "center center",
            scrub: 1,
          },
          y: 150,
          scale: 0.7,
          opacity: 0,
          stagger: 0.15,
        });
      }

      /*
       * =========================
       * PROJECTS
       * =========================
       */

      const projectCards = gsap.utils.toArray(".project-card");

      if (projectCards.length > 0) {
        gsap.from(projectCards, {
          scrollTrigger: {
            trigger: "#projects",
            start: "top 80%",
            end: "center center",
            scrub: 1,
          },
          y: 150,
          scale: 0.7,
          opacity: 0,
          stagger: 0.2,
        });
      }

      /*
       * =========================
       * JOURNEY
       * =========================
       */

      const journeyItems = gsap.utils.toArray(".journey-item");

      if (journeyItems.length > 0) {
        gsap.from(journeyItems, {
          scrollTrigger: {
            trigger: "#journey",
            start: "top 80%",
            end: "center center",
            scrub: 1,
          },
          x: -100,
          opacity: 0,
          stagger: 0.15,
        });
      }

      /*
       * =========================
       * CONTACT
       * =========================
       */

      const contactTitle = document.querySelector("#contact-title");

      if (contactTitle) {
        gsap.from(contactTitle, {
          scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            end: "center center",
            scrub: 1,
          },
          y: 150,
          scale: 0.7,
          opacity: 0,
        });
      }

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();

      lenis.destroy();

      gsap.ticker.remove(animationFrame);
    };
  }, []);
};

export default useScrollAnimations;
