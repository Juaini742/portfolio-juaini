import Template from "../template";
import HomeHero from "./hero";
import { HomeHire } from "./hire";
import HomePortfolio from "./portfolio";
import HomeScore from "./score";

function MainHome() {
  return (
    <Template>
      <HomeHero />
      <HomeScore />
      <HomeHire />
      <HomePortfolio />
    </Template>
  );
}

export default MainHome;
