import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import fazliddin from "../assets/idiev.jpg";
import fazl from "../assets/suratFazl.jpg";
import munir from "../assets/munir.jpg";
import cpp from "../assets/cpp.png"
import html from "../assets/html.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import typescript from "../assets/Typescript.svg.png";
import git  from "../assets/GitHub.webp";

import "../App.css";

const Blog = ({ show, onClose }) => {
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
          <h1 className="text-center text-[#8d8c8c] text-[30px] font-bold sx:text-[22px] ">
            ABOUT
          </h1>
          <h1 className="text-center text-[50px] mt-[10px] font-bold sx:text-[30px]">
            MY EDUCATION
          </h1>
        </div>
        <div className="text-white flex justify-between items-center pl-[100px] pr-[100px] pt-[20px] pb-[20px] sx:p-[10px] sx:flex-wrap l:p-[10px] l:flex-wrap xl:p-[10px] xl:flex-wrap">
          <div className="w-[48%] h-[80vh] border-[gray] border-[10px] sx:w-[100%] l:w-[100%] xl:w-[100%]">
            <img
              className="fazl w-[100%] object-cover h-[100%]"
              src={fazl}
              alt=""
            />
          </div>
          <div className="w-[48%] sx:w-[100%] l:w-[100%] xl:w-[100%]">
            <h1 className="text-[40px] font-bold  text-[gray]">
              Elementary School
            </h1>
            <h1 className="text-[18px] mt-[10px] text-[gray] font-bold">
              In 2012, I went to school for the first time. To gymnasium No. 2
              in the Farkhor region with Russian language of instruction. For 11
              years I studied in this school. In 2023 I received my diploma and
              entered Technological Institute of Tajikistan. I am currently
              studying there.
            </h1>
          </div>
        </div>
        <div className="flex justify-between items-center mt-[20px] pl-[100px] pr-[100px] text-[gray] sx:p-[10px] sx:flex-wrap l:p-[10px] l:flex-wrap l:flex-row-reverse xl:flex-wrap xl:flex-row-reverse xl:p-[10px]">
          <div className="w-[52%] sx:w-[100%] l:w-[100%] xl:w-[100%]">
            <h1 className=" text-[50px] mt-[10px] font-bold ">
              My Studies in SoftClub
            </h1>
            <h1 className="text-[18px] mt-[10px] text-[gray] font-bold">
              I studied for 7 months. During this time I learned the programming
              languages ​​Html, Css, Javascript, Typescript, React and others...
            </h1>
            <div className="flex justify-between items-center flex-wrap mt-[20px] sx:p-[10px] sx:flex-wrap ">
              <div className="w-[30%] transform hover:scale-105 hover:duration-[1s] flex p-[10px] items-center gap-[5%] bg-[transparent] cursor-pointer border-[2px] text-[white]  opacity-50 rounded-3xl">
                <div className="w-[47%] sx:w-[100%] ">
                  <h1 className="text-[15px] font-bold">1 month</h1>
                  <h1 className="text-[20px] font-bold">C++</h1>
                </div>
                <div className="w-[47%] sx:w-[100%]">
                  <img src={cpp} alt="" />
                </div>
              </div>
              <div className="w-[30%] flex  transform hover:scale-105 hover:duration-[1s] p-[10px] items-center gap-[5%] bg-[transparent] cursor-pointer border-[2px] text-[white]  opacity-50 rounded-3xl">
                <div className="w-[47%]">
                  <h1 className="text-[15px] font-bold">1 month</h1>
                  <h1 className="text-[18px] font-bold">Html & Css</h1>
                </div>
                <div className="w-[47%]">
                  <img src={html} alt="" />
                </div>
              </div>
              <div className="w-[30%] flex transform hover:scale-105 hover:duration-[1s] p-[10px] items-center gap-[5%] bg-[transparent] cursor-pointer border-[2px] text-[white]  opacity-50 rounded-3xl">
                <div className="w-[47%]">
                  <h1 className="text-[15px] font-bold">2 month</h1>
                  <h1 className="text-[20px] font-bold">JS</h1>
                </div>
                <div className="w-[47%]">
                  <img src={js} alt="" />
                </div>
              </div>
              <div className="w-[30%] mt-[20px] transform hover:scale-105 hover:duration-[1s] flex p-[10px] items-center gap-[5%] bg-[transparent] cursor-pointer border-[2px] text-[white]  opacity-50 rounded-3xl">
                <div className="w-[47%]">
                  <h1 className="text-[15px] font-bold">2 month</h1>
                  <h1 className="text-[20px] font-bold">React</h1>
                </div>
                <div className="w-[47%]">
                  <img src={react} alt="" />
                </div>
              </div>
              <div className="w-[30%] mt-[20px] transform hover:scale-105 hover:duration-[1s] flex p-[10px] items-center gap-[5%] bg-[transparent] cursor-pointer border-[2px] text-[white]  opacity-50 rounded-3xl">
                <div className="w-[47%]">
                  <h1 className="text-[15px] font-bold">1 month</h1>
                  <h1 className="text-[20px] font-bold">TS</h1>
                </div>
                <div className="w-[47%] ">
                  <img
                    className="w-[100%] h-[100%] transform scale-[0.8]"
                    src={typescript}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[30%] mt-[20px] transform hover:scale-105 hover:duration-[1s] flex p-[10px] items-center gap-[5%] bg-[transparent] cursor-pointer border-[2px] text-[white]  opacity-50 rounded-3xl">
                <div className="w-[47%]">
                  <h1 className="text-[15px] font-bold">1 week</h1>
                  <h1 className="text-[20px] font-bold"> GitHub</h1>
                </div>
                <div className="w-[47%] ">
                  <img
                    className="w-[100%] h-[100%] transform scale-[0.8]"
                    src={git}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[44%] border-[10px] h-[80vh]  border-[gray] sx:w-[100%] l:w-[100%] l:mt-[20px] xl:w-[100%] xl:mt-[20px]">
            <img
              className="fazl w-[100%] object-cover h-[100%]"
              src={munir}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
