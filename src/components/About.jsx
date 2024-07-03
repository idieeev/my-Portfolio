import React from 'react';

import CloseIcon from "@mui/icons-material/Close";
import fazliddin from "../assets/fazliddin.jpg"
import { Link } from 'react-router-dom';

const Modal = ({ show, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex h-[100vh] items-end justify-center ${
        show ? "block" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-black h-[100vh] opacity-50"
        onClick={onClose}
      ></div>
      <div
        className={`${
          show ? "modal-div" : ""
        } bg-black rounded-t-lg shadow-lg h-[100vh] overflow-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-6 transform transition-transform duration-800 `}
      >
        <div className="h-[2vh]">
          <button
            className="text-gray-700 h-[100%] zoom-2 font-bold text-xl mb-4 ml-[97%] sx:ml-[90%] l:ml-[90%] xl:ml-[90%]"
            onClick={onClose}
          >
            <CloseIcon style={{ width: "50px", height: "50px" }} />
          </button>
        </div>
        <div className="pl-[100px] pr-[100px] pt-[20px] text-white">
          <h1 className="text-center text-[#8d8c8c] text-[30px] font-bold sx:text-[22px]">
            ABOUT
          </h1>
          <h1 className="text-center text-[50px] mt-[10px] font-bold sx:text-[30px]">
            MY RESUME
          </h1>
        </div>
        <div className="flex justify-between items-center overflow-auto mt-[20px] pl-[100px] pr-[100px] sx:p-[10px] sx:flex-wrap l:flex-wrap l:p-[10px] xl:p-[10px] xl:flex-wrap">
          <div className="w-[38%] sx:w-[100%] l:w-[100%] xl:w-[100%]">
            <div className="w-[100%] h-[70vh] border-[10px] border-[gray]">
              <img
                className="w-[100%] h-[100%] object-cover  "
                src={fazliddin}
                alt=""
              />
            </div>
          </div>
          <div className="w-[60%] text-white sx:w-[100%] l:w-[100%] xl:w-[100%]">
            <div className="border-b-[1px] pb-[30px] border-[gray]">
              <h1 className="text-[30px] text-white font-bold">
                FRONTEND DEVELOPER
              </h1>
              <h1 className="mt-[20px] text-[gray] text-[17px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti quis veniam eum totam voluptatem provident vero, sit
                molestias adipisci, ratione ullam nihil similique, perferendis
                consequatur assumenda amet? Nobis, porro provident. Hic libero
                consequatur, corporis quaerat rem nulla, ipsum dolore
                dignissimos sint, in quibusdam earum explicabo minus dicta quos
                expedita numquam totam. Earum quia temporibus facilis, minima
                consectetur vel nihil nostrum!
              </h1>
            </div>
            <div className="flex justify-between items-center mt-[30px]">
              <div className="w-[40%] text-[gray]">
                <h1 className="text-[18px] font-bold mt-[3px]">
                  Name:{" "}
                  <span className="font-[400] text-[17px]">
                    Fazliddin Idiev
                  </span>
                </h1>
                <h1 className="text-[18px] font-bold mt-[3px]">
                  Instagram:{" "}
                  <span className="font-[400] text-[17px]">idiev.18</span>
                </h1>
                <h1 className="text-[18px] font-bold mt-[3px]">
                  Phone:{" "}
                  <span className="font-[400] text-[17px]">+992903777824</span>
                </h1>
              </div>
              <div className="w-[40%] text-[gray]">
                <h1 className="text-[18px] font-bold mt-[3px]">
                  Email:{" "}
                  <span className="font-[400] text-[17px]">
                    fazliddinidiev@gmail.com
                  </span>
                </h1>
                <h1 className="text-[18px] font-bold mt-[3px]">
                  Github:{" "}
                  <a href="https://github.com/idieeev">
                    <span className="font-[400] text-[17px]">
                      https://github.com/idieeev
                    </span>
                  </a>
                </h1>
                <h1 className="text-[18px] font-bold mt-[3px]">
                  Address:{" "}
                  <span className="font-[400] text-[17px]">
                    Dushanbe,Tajikistan
                  </span>
                </h1>
              </div>
            </div>
            <div className="mt-[20px] flex  gap-[20px] items-center">
              <Link to={"/"}>
                <button
                  onClick={onClose}
                  className="w-[150px] h-[40px] border-[2px] hover:text-white hover:border-white duration-500 text-[gray] font-bold border-[gray] bg-transparent  rounded-[20px] "
                >
                  download cv
                </button>
              </Link>
              <a target="blank" href="https://t.me/Idieev">
                <button
                  onClick={onClose}
                  className="w-[120px] h-[40px] border-[2px] hover:text-white hover:border-white duration-500 text-[gray] font-bold border-[gray] bg-transparent  rounded-[20px] "
                >
                  hire me{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;