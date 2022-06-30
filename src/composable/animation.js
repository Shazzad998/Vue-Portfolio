import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function useAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const animate = gsap;

  return {
    animate,
  };
}
