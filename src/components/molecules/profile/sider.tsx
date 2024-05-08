import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
import { animateViewleft } from "../db";
import { motion } from "framer-motion";

function ProfileAside() {
  return (
    <motion.aside
      variants={animateViewleft}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className="relative flex-1  "
    >
      <div className=" bg-black border-2 h-full border-b-white px-5 py-10">
        <div className="flex justify-center">
          <img
            src="../img/me.svg"
            alt="me"
            className="w-44 border border-white rounded-full"
          />
        </div>
        <div className="flex flex-col gap-4 mt-10">
          <h4 className="font-anton" style={{ letterSpacing: "1px" }}>
            JUAINI
          </h4>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus,
            illo!
          </p>
          <div className="flex justify-between border-b pb-2">
            <span className="text-xl">
              <FaGoogle />
            </span>
            <a
              href="mailto:juaini742@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              send
            </a>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-xl">
              <FaGithub />
            </span>
            <a
              href="https://github.com/Juaini742?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              see more
            </a>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-xl">
              <FaLinkedin />
            </span>
            <a
              href="https://www.instagram.com/juainii_/?igsh=cDBnczkyZHBxcnh3"
              target="_blank"
              rel="noopener noreferrer"
            >
              see more
            </a>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}

export default ProfileAside;
