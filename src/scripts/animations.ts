/**
 * GSAP + ScrollTrigger Animation Initialization
 * Daniel Monettelli Portfolio
 * 
 * This module handles all scroll-based reveal animations
 * using GSAP ScrollTrigger for performant, GPU-accelerated animations.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Global GSAP defaults for consistent, natural feeling
gsap.defaults({
  ease: "power3.out",
  duration: 1,
});

/**
 * Initialize all reveal animations for elements with class .reveal-*
 */
export function initRevealAnimations(): void {
  // Reveal Up
  gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
    gsap.fromTo(
      el,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Reveal Left
  gsap.utils.toArray<HTMLElement>(".reveal-left").forEach((el) => {
    gsap.fromTo(
      el,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Reveal Right
  gsap.utils.toArray<HTMLElement>(".reveal-right").forEach((el) => {
    gsap.fromTo(
      el,
      { x: 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Reveal Scale
  gsap.utils.toArray<HTMLElement>(".reveal-scale").forEach((el) => {
    gsap.fromTo(
      el,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}

/**
 * Staggered children reveal — animates direct children
 */
export function initStaggeredReveals(): void {
  gsap.utils.toArray<HTMLElement>(".stagger-children").forEach((container) => {
    const children = container.children;
    gsap.fromTo(
      children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}

/**
 * Counter animation for stats
 */
export function animateCounter(
  element: HTMLElement,
  target: number,
  duration: number = 2,
  suffix: string = ""
): void {
  const obj = { value: 0 };
  gsap.to(obj, {
    value: target,
    duration,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    onUpdate: () => {
      element.textContent = Math.round(obj.value) + suffix;
    },
  });
}

/**
 * Parallax effect for background elements
 */
export function initParallax(): void {
  gsap.utils.toArray<HTMLElement>(".parallax").forEach((el) => {
    const speed = parseFloat(el.dataset.speed || "0.5");
    gsap.to(el, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: el.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  });
}

/**
 * Skill bar fill animation
 */
export function initSkillBars(): void {
  gsap.utils.toArray<HTMLElement>(".skill-bar-fill").forEach((bar) => {
    const targetWidth = bar.dataset.width || "0%";
    gsap.to(bar, {
      width: targetWidth,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: bar,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });
}

/**
 * Timeline drawing animation
 */
export function initTimeline(): void {
  const timelineLine = document.querySelector(".timeline-line") as HTMLElement;
  if (!timelineLine) return;

  gsap.to(timelineLine, {
    height: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: timelineLine.parentElement,
      start: "top 70%",
      end: "bottom 30%",
      scrub: 1.5,
    },
  });
}

/**
 * Magnetic button hover effect
 */
export function initMagneticButtons(): void {
  document.querySelectorAll<HTMLElement>(".magnetic-btn").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.4,
        ease: "power2.out",
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
    });
  });
}

/**
 * Initialize all animations
 */
export function initAllAnimations(): void {
  initRevealAnimations();
  initStaggeredReveals();
  initParallax();
  // initSkillBars — handled by Skills.astro component script
  // initTimeline  — handled by Experience.astro component script
  initMagneticButtons();
}
