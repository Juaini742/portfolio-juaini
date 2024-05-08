import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function HomeScore() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-10% 0px",
  });
  const animateVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animateVariant}
      transition={{ duration: 1 }}
      className="relative container mt-10 group"
    >
      <div className="absolute top-0 w-full h-full border-2 border-white" />
      <div className="py-8 px-3 md:px-20 bg-black border-2 border-b-white flex gap-5 justify-between items-center transform group-hover:-translate-x-3 group-hover:-translate-y-4 trans-300">
        <div className="flex flex-col text-xl font-anton text-center">
          <span className="font-anton text-6xl">99</span>
          Experience
        </div>
        <div className="flex flex-col text-xl font-anton text-center">
          <span className="font-anton text-6xl">22</span>
          Repository
        </div>
        <div className="flex flex-col text-xl font-anton text-center">
          <span className="font-anton text-6xl">99</span>
          Experience
        </div>
      </div>
    </motion.section>
  );
}

export default HomeScore;
