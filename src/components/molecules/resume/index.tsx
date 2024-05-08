import { BsFillPersonVcardFill } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import { motion } from "framer-motion";
import skills, { animateView, history } from "../db";
import Template from "../template";
import EachElement from "../Element";

export const MainResume = () => {
  return (
    <Template>
      <main className="container mt-10">
        <div>
          <h2
            className="text-2xl text-center font-anton"
            style={{ letterSpacing: "1px" }}
          >
            My <span className="text-secondary">Resume</span>
          </h2>
          <p className="text-center text-sm mt-5">
            Let's take a look at my resume, starting from my educational
            background and a few noteworthy achievements throughout my life. I
            may not include all personal data and will only highlight a few that
            I consider significant
          </p>
        </div>
        <div className="w-full rounded-md  mt-5">
          <div
            className="bg-fixed flex gap-2 items-center px-5 py-8 rounded-3xl text-xl text-white"
            style={{
              backgroundImage: "url(../img/servicebg.jpg)",
              backgroundSize: "cover",
            }}
          >
            <BsFillPersonVcardFill /> <strong>Experience</strong>
          </div>
          <EachElement
            of={history.certificate}
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
                className="flex flex-col gap-3 p-5"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:h-32 overflow-hidden">
                  <div className="w-full md:w-[50%]">
                    <h3 className="mb-5 font-bold">{item.leftName}</h3>
                    <div className="flex gap-3 text-sm italic">
                      <p>{item.status}</p>
                      <p>{item.year}</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <p>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            )}
          />
          <div
            className="bg-fixed flex gap-2 items-center px-5 py-8 rounded-3xl text-xl text-white"
            style={{
              backgroundImage: "url(../img/servicebg.jpg)",
              backgroundSize: "cover",
            }}
          >
            <PiStudentFill /> <strong>Formal Education</strong>
          </div>
          <EachElement
            of={history.educate}
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
                className="flex flex-col gap-3 p-5"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:h-32 overflow-hidden">
                  <div className="w-full md:w-[50%]">
                    <h3 className="mb-5 font-bold">{item.leftName}</h3>
                    <div className="flex gap-3">
                      <p>{item.status}</p>
                      <p>{item.year}</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <h3 className="mb-5">{item.rightName}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            )}
          />
          <div
            className="bg-fixed flex gap-2 items-center px-5 py-8 rounded-3xl text-xl text-white"
            style={{
              backgroundImage: "url(../img/servicebg.jpg)",
              backgroundSize: "cover",
            }}
          >
            <PiStudentFill /> <strong>Nonformal Education</strong>
          </div>
          <div className="flex flex-col gap-3 p-5">
            <div className="flex flex-col sm:flex-row gap-4 sm:h-32 overflow-hidden">
              <div className="w-full md:w-[50%]">
                <h3 className="mb-5 font-bold">Full-Stack Developer</h3>
                <div className="flex gap-3">
                  <p>Harisenin.com</p>
                  <p>2024</p>
                </div>
              </div>
              <div className="w-full">
                <h3 className="mb-5">Experience Certificate</h3>
                <p>Grade Point Average (GPA) 3.90 | 4.00 </p>
              </div>
            </div>
          </div>
          <div
            className="bg-fixed flex gap-2 items-center px-5 py-8 rounded-3xl text-xl text-white"
            style={{
              backgroundImage: "url(../img/servicebg.jpg)",
              backgroundSize: "cover",
            }}
          >
            <FaCode /> <strong>Skills</strong>
          </div>
          <div className="flex gap-3 p-5 flex-wrap justify-center">
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
                  className="flex items-center gap-1 px-5 rounded-full border border-black hover:bg-primary trans-400"
                >
                  <span className={item.bgColor}>{item.icon}</span>
                  {item.name}
                </motion.div>
              )}
            />
          </div>
        </div>
      </main>
    </Template>
  );
};
