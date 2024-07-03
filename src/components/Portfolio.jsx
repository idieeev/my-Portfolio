import React from "react";
import "../App.css";

import CloseIcon from "@mui/icons-material/Close";
import instagram from "../assets/instagram.png";
import online from "../assets/online.png";
import sanduk from "../assets/sanduk.png";
import panel from "../assets/panel.png";

const Portfolio = ({ show, onClose }) => {
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
        } bg-black rounded-t-lg shadow-lg h-[100vh] overflow-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-6 transform transition-transform duration-800`}
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
            MY PROJECTS
          </h1>
        </div>
        <div className="pl-[100px] pr-[100px] pt-[30px] pb-[30px] flex justify-between items-center text-[gray] flex-wrap sx:p-[10px] l:p-[10px] l:flex-wrap xl:p-[10px] xl:flex-wrap">
          <div className="project w-[47%] font-bold  border-[3px] rounded-3xl p-[20px] border-[gray] sx:w-[100%] sx:mt-[10px] l:w-[100%] l:mt-[20px] xl:w-[100%] xl:mt-[20px]">
            <img
              className=" w-[100%] h-[100%] rounded-3xl"
              src={instagram}
              alt=""
            />
            <h1 className="text-[30px] mt-[10px] font-bold">Instagram</h1>
            <h1 className="text-[18px]">Instagram with React Vite</h1>
          </div>
          <div className="project w-[47%] font-bold border-[3px] rounded-3xl p-[20px] border-[gray] sx:w-[100%] sx:mt-[10px] l:w-[100%] l:mt-[20px] xl:w-[100%] xl:mt-[20px]">
            <img
              className=" w-[100%] h-[100%] rounded-2xl"
              src={online}
              alt=""
            />
            <h1 className="text-[30px] mt-[10px] font-bold">Online Store </h1>
            <h1 className="text-[18px]">Online Store with React Vite</h1>
          </div>
          <div className="project w-[47%] font-bold border-[3px] rounded-3xl mt-[40px] p-[20px] border-[gray] sx:w-[100%] sx:mt-[10px] l:w-[100%] l:mt-[20px] xl:w-[100%] xl:mt-[20px]">
            <img
              className=" w-[100%] h-[100%] mt-[10px] rounded-2xl"
              src={panel}
              alt=""
            />
            <h1 className="text-[30px] font-bold">
              Admin Panel on Online Store{" "}
            </h1>
            <h1 className="text-[18px]">Admin Panel with React Vite</h1>
          </div>
          <div className="project w-[47%] font-bold border-[3px] rounded-3xl mt-[40px] p-[20px] border-[gray] sx:w-[100%] sx:mt-[10px] l:w-[100%] l:mt-[20px] xl:w-[100%] xl:mt-[20px]">
            <img
              className=" w-[100%] h-[100%] rounded-2xl"
              src={sanduk}
              alt=""
            />
            <h1 className="text-[30px] font-bold mt-[10px]">
              Sanduk microCredits Organization
            </h1>
            <h1 className="text-[18px]">Sanduk with React Vite</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
