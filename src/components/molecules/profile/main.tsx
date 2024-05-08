import Template from "../template";
import ProfileRightSide from "./rightSide";
import ProfileAside from "./sider";

function MainProfile() {
  return (
    <Template>
      <main className="container h-full flex flex-col md:flex-row gap-10 items-center mt-5">
        <ProfileAside />
        <ProfileRightSide />
      </main>
    </Template>
  );
}

export default MainProfile;
