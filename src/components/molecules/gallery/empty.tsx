import { FaRegSmile } from "react-icons/fa";
import Template from "../template";

function GalleryEmpty() {
  return (
    <Template>
      <main className="mt-10 uppercase h-full w-full flex flex-col md:flex-row justify-center items-center">
        <h1 className="text-4xl text-gray text-center">
          Sorry this page is empty
        </h1>
        <span className="mt-5 md:mt-0 md:ml-4 text-4xl text-gray">
          <FaRegSmile />
        </span>
      </main>
    </Template>
  );
}

export default GalleryEmpty;
