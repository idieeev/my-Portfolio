import React from "react";
import { Outlet } from "react-router-dom";
import Modal from "../components/About";
import Contact from "../pages/Contact";
import Blog from "../components/Blog";
import Portfolio from "../components/Portfolio";
import Menu from "../components/Menu";
import "../App.css";

// imports image in Assets
import video from "../assets/itachi.mp4";
import Fazliddin from "../assets/fazliddin.jpg";
import red from "../assets/red.jpeg";
import idiev from "../assets/idiev.jpg";
import fazl from "../assets/suratFazl.jpg";
import { useState, useEffect } from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { IconButton } from "@mui/material";
const Layout = () => {
  const [text, setText] = useState("Developer");
  const [isDeveloper, setIsDeveloper] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDeveloper((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setText(isDeveloper ? "Developer" : "Freelancer");
  }, [isDeveloper]);

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const openModal2 = () => {
    setShowModal2(true);
  };
  const closeModal2 = () => {
    setShowModal2(false);
  };
  const openModal3 = () => {
    setShowModal3(true);
  };
  const closeModal3 = () => {
    setShowModal3(false);
  };
  const openModal4 = () => {
    setShowModal4(true);
  };
  const closeModal4 = () => {
    setShowModal4(false);
  };
  const openModal5 = () => {
    setShowModal5(true);
  };
  const closeModal5 = () => {
    setShowModal5(false);
  };
  return (
    <div>
      <div className="h-[100vh] bg-[red]">
        <div className="navbar flex justify-between sx:p-[10px] sx:flex-wrap ph:p-[10px] xl:p-[20px] ph:flex-wrap l:p-[10px] l:flex-wrap items-center absolute z-10  w-[100%] pl-[100px] pr-[100px] pt-[20px] pb-[20px]">
          <div>
            <h1 className="idiev">Fazliddin</h1>
          </div>
          <div className="text-[white] ph:block sx:block hidden">
            <DragHandleIcon
              onClick={() => {
                openModal5();
              }}
              sx={{ width: "50px", height: "50px" }}
            />
          </div>
          <div className="flex gap-[30px] ph:gap-3 l:gap-3 xl:gap-3 text-[18px] sx:justify-between sx:mt-[20px] ph:mt-[10px] ph:justify-between items-center font-[500] text-[white]">
            <div className="group">
              <h1 className="btn  p-[5px]">Home</h1>
              <h1 className=" bottom-0  border-b-4 border-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></h1>
            </div>

            <div className="group">
              <h1 onClick={() => openModal()} className="btn  p-[5px] ">
                About
              </h1>
              <h1 className=" bottom-0  border-b-4 border-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></h1>
            </div>

            <div className="group">
              <h1 onClick={() => openModal4()} className="btn   p-[5px]">
                Portfolio
              </h1>
              <h1 className=" bottom-0  border-b-4 border-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></h1>
            </div>

            <div className="group">
              <h1 onClick={() => openModal3()} className="btn   p-[5px]">
                Blog
              </h1>
              <h1 className=" bottom-0  border-b-4 border-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></h1>
            </div>

            <div className="group">
              <h1 onClick={() => openModal2()} className="btn   p-[5px]">
                Contact
              </h1>
              <h1 className=" bottom-0  border-b-4 border-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></h1>
            </div>
          </div>
        </div>
        <div className="w-[100%]  h-[100%] bg-[black] ">
          <video
            autoPlay
            muted
            loop
            className="h-[100%] w-[100%] opacity-20 sx:object-cover ph:object-cover l:object-cover xl:object-cover"
          >
            <source src={video} />
          </video>
        </div>
        <div className=" w-[30%] sx:w-[50%] ph:w-[50%] top-[40%] left-[32%] absolute  opacity-70 ">
          <div className=" w-[200px] rounded-full h-[200px] border-[10px] border-[gray]  m-[auto]">
            <img
              className="fazliddin w-[100%]  h-[100%] object-cover rounded-[50%] "
              src={fazl}
              alt=""
            />
          </div>
          <h1 className="text-center text-[50px] font-[600] text-[white] sx:text-[30px] ph:text-[30px] l:text-[40px] ">
            Fazliddin Idiev
          </h1>
          <p className="text-center text-[25px] sx:text-[18px] ph:text-[18px] l:text-[22px] text-[white] font-[600]">
            I'm a <span className="text">{text} </span>
          </p>
        </div>
      </div>
      <div>
        <Modal show={showModal} onClose={closeModal} />
        <Contact show={showModal2} onClose={closeModal2} />
        <Blog show={showModal3} onClose={closeModal3} />
        <Portfolio show={showModal4} onClose={closeModal4} />
        <Menu show={showModal5} onClose={closeModal5} />
      </div>
      <div>
        <div className="group "></div>
      </div>
    </div>
  );
};
export default Layout;
