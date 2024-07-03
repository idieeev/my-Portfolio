import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const Menu = ({ show, onClose, }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex h-[100vh] items-end justify-center opacity-80 bg-red-700 ${
        show ? "block" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-black h-[100vh] opacity-50"
        onClick={onClose}
      ></div>
      <div
        className={`${
          show ? "modal-div2" : ""
        } bg-black rounded-t-lg shadow-lg h-[100vh] overflow-auto w-full sx:w-[100%]  p-6 transform transition-transform duration-800 `}
      >
        <div className="h-[2vh]">
          <button
            className="text-gray-700 h-[100%] zoom-2 font-bold text-xl mb-4 ml-[90%]"
            onClick={onClose}
          >
            <CloseIcon style={{ width: "50px", height: "50px" }} />
          </button>
        </div>
        <div>
          <div className="flex sx:w-[100%] sx:mt-[20px] flex-wrap gap-[30px] text-[18px] items-center font-[500] text-[white]">
            <h1 className="text-[30px] text-center w-[100%]">Fazliddin</h1>
            <h1 className="btn sx:text-[40px]  p-[5px] w-[100%] text-center sx:hidden ">
              Home
            </h1>
            <h1

              className="btn sx:text-[20px]  w-[100%] text-center p-[5px] "
            >
              About
            </h1>
            <h1

              className="btn sx:text-[20px]  w-[100%] text-center  p-[5px]"
            >
              Portfolio
            </h1>
            <h1
              className="btn sx:text-[20px]  w-[100%] text-center  p-[5px]"
            >
              Blog
            </h1>
            <h1
              className="btn sx:text-[20px]  w-[100%] text-center  p-[5px]"
            >
              Contact
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;