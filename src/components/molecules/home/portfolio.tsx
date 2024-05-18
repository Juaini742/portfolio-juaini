import { FaStar } from "react-icons/fa";
import { animateView, courses, ItemType } from "../db";
import EachElement from "../Element";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";

function HomePortfolio() {
  const [visible, setVisible] = useState(false);
  const [selectItem, setSelectItem] = useState<ItemType | null>(null);

  const handleVisible = (item: ItemType | null): void => {
    setVisible(!visible);
    setSelectItem(item);
  };
  return (
    <section className="container mt-10">
      <h2
        className="text-2xl font-anton animate-bounce"
        style={{ letterSpacing: "1px" }}
      >
        PORTFOLIO
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <EachElement
          of={courses}
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
              className="border border-white overflow-hidden shadow-md shadow-slate-500 group"
            >
              <div className="w-full h-[220px] flex items-end overflow-hidden group-hover:scale-110 trans-300">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="bg-black text-white p-3">
                <div className="flex justify-between">
                  <h3 className="font-bold font-prociono text-sm">
                    {item.title}
                  </h3>
                  <div className="text-[10px] flex items-center gap-1">
                    {item.rating}
                    <span className="text-yellow-500">
                      <FaStar />
                    </span>
                  </div>
                </div>
                <div className="mt-5 border-t-2 flex justify-between pt-5">
                  <div className="flex justify-between w-full">
                    <div className="flex items-center gap-3">
                      <div>
                        <img
                          src={item.profile}
                          alt="me"
                          className="w-10 border border-white rounded-full"
                        />
                      </div>
                      <div>
                        <h6 className="font-bold text-[11px]">{item.name}</h6>
                        <span className="text-[11px]">{item.jop}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => handleVisible(item)}
                        className="text-[10px] px-3"
                      >
                        See detail
                      </button>
                      <a
                        href={item.demo}
                        target="_blank"
                        className="text-[10px] px-3"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        />
      </div>

      {visible && (
        <Modal handleVisible={handleVisible} selectItem={selectItem} />
      )}
    </section>
  );
}

export default HomePortfolio;
