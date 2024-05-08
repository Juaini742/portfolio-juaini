import { Key } from "react";
import { ItemType } from "../db";

type ModalProps = {
  selectItem: ItemType | null;
  handleVisible: (item: ItemType | null) => void;
};

const Modal: React.FC<ModalProps> = ({ selectItem, handleVisible }) => {
  return (
    <section
      onClick={() => handleVisible(null)}
      className="w-full fixed z-40 top-10 bottom-0 bg-black left-0 overflow-auto py-10"
    >
      <div className="container overflow-auto">
        <div className="mt-5">
          <div className="rounded-lg shadow-md">
            <img src={selectItem?.img} alt={selectItem?.name} />
          </div>
          <div>
            <div className="mt-5 text-justify">
              <p
                dangerouslySetInnerHTML={{ __html: selectItem?.desc || "" }}
                className="leading-8 text-[12px]"
              />
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 overflow-y-auto">
              {selectItem?.images?.map(
                (item: string | undefined, i: Key | null | undefined) => (
                  <div key={i} className="overflow-hidden">
                    <img src={item} className="hover:scale-110 trans-400" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
