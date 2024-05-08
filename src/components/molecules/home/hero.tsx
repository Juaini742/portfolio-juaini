import { useInView } from "react-intersection-observer";
import ALink from "../../atom/a/inedx";
import Button from "../../atom/button/inedx";
import { sosmed } from "../db";
import EachElement from "../Element";
import { motion } from "framer-motion";

function HomeHero() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    rootMargin: "-10% 0px",
  });

  const animateVariant = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  const animateVariant2 = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };
  const animateOpacity = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <section
      className="w-full h-full pb-20 pt-10 bg-fixed"
      style={{
        backgroundImage: "url(./img/servicebg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div className="container flex flex-col justify-center items-center h-full relative z-10">
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={animateOpacity}
          transition={{ duration: 2 }}
          className="flex flex-wrap md:flex-nowrap justify-center gap-5"
        >
          <EachElement
            of={sosmed}
            render={(item, index) => (
              <ALink
                key={index}
                className="uppercase py-5 px-7"
                href={item.path}
                text={item.icon}
                target="_blank"
              />
            )}
          />
        </motion.div>

        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={animateOpacity}
          transition={{ duration: 2 }}
          className="w-full md:w-[550px]"
        >
          <Button
            className="w-full md:w-[550px] uppercase py-8 mt-5"
            text="Download curriculum vitae"
            style={{ letterSpacing: "1px" }}
          />
        </motion.div>

        <motion.h1
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={animateVariant}
          transition={{ duration: 1 }}
          className="uppercase text-white font-anton text-[50px] md:text-[80px] text-center"
          style={{ letterSpacing: "3px" }}
        >
          full-stack & <br /> android
        </motion.h1>
        <motion.div
          animate={{
            y: [0, 10],
            opacity: [1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <img
            src="../img/direction.png"
            alt="direction"
            className="w-10 md:w-14"
          />
        </motion.div>
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={animateVariant2}
          transition={{ duration: 1 }}
          className="w-full md:w-[550px] mt-3"
        >
          <h2
            className="text-white text-2xl font-anton mt-2 text-center"
            style={{ letterSpacing: "2px" }}
          >
            JUAINI
          </h2>
          <p className="text-white text-center text-sm">
            A Creative Technologist and skilled programmer, seamlessly blends
            creativity with technological expertise. Explore his innovative
            projects on GitHub for an inspiring glimpse into futuristic
            experiences!
          </p>
        </motion.div>
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)", // Gradient yang menggabungkan warna hitam dengan transparansi
        }}
      />
    </section>
  );
}

export default HomeHero;
