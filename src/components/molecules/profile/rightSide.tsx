import { motion } from "framer-motion";
import Button from "../../atom/button/inedx";
import EachElement from "../Element";
import skills from "../db";

function ProfileRightSide() {
  const animateViewright = {
    initial: {
      opacity: 0,
      x: 100,
    },
    visible: { opacity: 1, x: 0 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const animateView = {
    initial: {
      opacity: 0,
      y: 100,
    },
    visible: { opacity: 1, y: 0 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
      },
    }),
  };
  return (
    <div className="flex-1 flex flex-col gap-3">
      <motion.div
        variants={animateViewright}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="px-3 py-8 bg-black border-2 border-b-white flex gap-5 justify-between flex-col items-center "
      >
        <h2 className="font-anton text-xl" style={{ letterSpacing: "1px" }}>
          ABOUT ME
        </h2>
        <p className="text-sm">
          A Creative Technologist and skilled programmer, seamlessly blends
          creativity with technological expertise. Explore his innovative
          projects on GitHub for an inspiring glimpse into futuristic
          experiences!
        </p>
      </motion.div>
      <div className="px-3 py-8 bg-black border-2 border-b-white flex gap-5 justify-between flex-col items-center ">
        <h2 className="font-anton text-xl" style={{ letterSpacing: "1px" }}>
          MY SKILLS
        </h2>
        <div className="flex gap-5 flex-wrap justify-center">
          <EachElement
            of={skills}
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
              >
                <Button
                  className={`px-6 py-6 text-2xl bg-green-600`}
                  text={item.icon}
                  style={{ letterSpacing: "1px" }}
                />
              </motion.div>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileRightSide;
