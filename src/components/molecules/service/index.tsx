import { motion } from "framer-motion";
import { animateView, serviceItems } from "../db";
import Template from "../template";
import EachElement from "../Element";

export const MainService = () => {
  return (
    <Template>
      <main className="container mt-10">
        <div>
          <h2
            className="text-2xl text-center font-anton"
            style={{ letterSpacing: "1px" }}
          >
            My <span className="text-secondary">Services</span>
          </h2>
          <p className="text-center text-sm mt-5">
            Let's explore my professional journey, beginning with my experience
            and highlighting key accomplishments. I'll omit specific details and
            focus on noteworthy achievements that showcase my expertise and
            skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <EachElement
            of={serviceItems}
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
                className="border-2 border-white overflow-hidden shadow-md p-6 transition-transform transform hover:scale-105 duration-300"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-56 object-cover mb-6 rounded-lg"
                />
                <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                <p className="text-gray-500 mb-4">{item.desc}</p>
                <ul className="list-disc pl-5">
                  <EachElement
                    of={item.list}
                    render={(listItem, index) => (
                      <li key={index} className="mb-2">
                        {listItem}
                      </li>
                    )}
                  />
                </ul>
              </motion.div>
            )}
          />
        </div>
      </main>
    </Template>
  );
};
