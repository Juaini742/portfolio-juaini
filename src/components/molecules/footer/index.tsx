import ALink from "../../atom/a/inedx";
import { sosmed } from "../db";
import EachElement from "../Element";

export const Footer = () => {
  return (
    <footer
      className="bg-fixed mt-10 text-white py-8 rounded-t-3xl"
      style={{
        backgroundImage: "url(../img/servicebg.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="text-center border-b-2 pb-10">
          <h5 className="font-bold mb-2">Get in Touch with me</h5>
          <p>
            Get expert advice for your journey to university delivered to your
            inbox each month. It's short, and worthwhile – we promise!
          </p>
        </div>
        <div className="mt-5">
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-5">
            <EachElement
              of={sosmed}
              render={(item, index) => (
                <ALink
                  key={index}
                  className="uppercase py-5 px-7"
                  href={item.path}
                  text={item.icon}
                />
              )}
            />
          </div>
          <p className="text-center mt-5">
            Copyright © 2024 - <span className="italic">Juaini</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
