import { motion } from "framer-motion";
import { animateView, whyHireMe } from "../db";
import EachElement from "../Element";

export const HomeHire = () => {
  return (
    <section className="container overflow-hidden py-10 mt-10">
      <h2
        className="text-2xl font-anton animate-bounce"
        style={{ letterSpacing: "1px" }}
      >
        HIRE ME
      </h2>

      <div className="flex sm:flex-row flex-col justify-between gap-5 mt-10 text-center text-white">
        <EachElement
          of={whyHireMe}
          render={(item, index) => (
            <motion.div
              key={index}
              variants={animateView}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              className={`${
                index === 1 || index === 2 ? "border-x-2" : ""
              } flex flex-col items-center hover:bg-white hover:text-black trans-300 hover:rounded-lg p-3`}
            >
              <span className="text-6xl mb-3">{item.icon}</span>
              <h3>
                {index + 1}. {item.title}
              </h3>
              <p className="text-[10px]">{item.desk}</p>
            </motion.div>
          )}
        />
      </div>
    </section>
  );
};
