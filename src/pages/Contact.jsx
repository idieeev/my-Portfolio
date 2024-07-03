import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Contact = ({ show, onClose }) => {
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
        <div>
          <h1 className="text-[30px] font-bold text-[gray] text-center ">
            SAY HELLO{" "}
          </h1>
          <h1 className="text-[50px] font-bold text-[#bbb9b9] text-center  mt-[10px]">
            CONTACT ME
          </h1>
        </div>
        <div className="flex justify-between sx:flex-row-reverse l:flex-row-reverse  text-white items-center pl-[100px] pr-[100px] pt-[20px] pb-[20px] sx:p-[10px] l:flex-wrap l:p-[10px] xl:flex-wrap xl:p-[10px]">
          <div className="w-[55%] sx:w-[100%] l:w-[100%] xl:w-[100%]">
            <h1 className="text-[38px] font-bold text-[#bbb9b9] text-center ">
              Contact Form
            </h1>
            <form className="mt-[30px]">
              <div className="flex justify-between items-center">
                <input
                  className="w-[48%] font-bold h-[50px] border-[#383838] outline-none bg-transparent border-[1.5px] text-[gray] pl-[10px] text-[18px]"
                  placeholder="Name"
                  type="text"
                />
                <input
                  className="w-[48%] font-bold bg-transparent border-[#383838] outline-none h-[50px] border-[1.5px] text-[gray] pl-[10px] text-[18px]"
                  placeholder="Email Address"
                  type="text"
                />
              </div>
              <div className="mt-[20px]">
                <input
                  className="w-[100%]  font-bold bg-transparent border-[#383838] outline-none h-[50px] border-[1.5px] text-[gray] pl-[10px] text-[18px]"
                  placeholder="Subject"
                  type="text"
                />
              </div>
              <div className="mt-[20px]">
                <textarea
                  className="border-[1.5px] font-bold border-[#383838] h-[25vh]  text-[gray] text-[18px] outline-none p-[10px] bg-transparent w-[100%]"
                  placeholder="Message"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="mt-[20px]">
                <button
                  type="submit"
                  className="w-[150px] font-bold hover:text-[white] hover:border-[white] h-[47px] border-[1.5px] border-[gray] text-[gray] bg-transparent rounded-[27px]  "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="w-[42%] sx:w-[100%] sx:mt-[10px] l:w-[100%] xl:w-[100%]">
            <div>
              <h1 className="text-[#bbb9b9] text-center text-[40px] font-bold">
                Contact Info
              </h1>
            </div>
            <div className="mt-[20px]">
              <p className="text-[18px] text-[gray] font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <div className="mt-[30px]">
                <div className="flex gap-[15px]  w-[60%] mt-[20px]">
                  <div className="w-[16%] sx:w-[22%] border-[2px] rounded-full text-[gray] border-[gray]">
                    {
                      <EmailIcon
                        sx={{
                          width: "80%",
                          height: "60%",
                          margin: "auto",
                          display: "block",
                          mt: 1,
                        }}
                      />
                    }
                  </div>
                  <div className="w-[67%]  text-[gray] font-bold">
                    <h1>Email</h1>
                    <h1>fazliddinidiev@gmail.com</h1>
                  </div>
                </div>
                <div className="flex gap-[15px]  w-[60%] mt-[20px]">
                  <div className="w-[16%] sx:w-[22%] border-[2px] rounded-full text-[gray] border-[gray]">
                    {
                      <InstagramIcon
                        sx={{
                          width: "80%",
                          height: "60%",
                          margin: "auto",
                          display: "block",
                          mt: 1,
                        }}
                      />
                    }
                  </div>
                  <div className="w-[67%] text-[gray] font-bold">
                    <h1>Instagram</h1>
                    <h1>idiev.18</h1>
                  </div>
                </div>
                <div className="flex gap-[15px]  w-[60%] mt-[20px]">
                  <div className="w-[16%] sx:w-[22%] border-[2px] rounded-full text-[gray] border-[gray]">
                    {
                      <LocalPhoneIcon
                        sx={{
                          width: "80%",
                          height: "60%",
                          margin: "auto",
                          display: "block",
                          mt: 1,
                        }}
                      />
                    }
                  </div>
                  <div className="w-[67%] text-[gray] font-bold">
                    <h1>Phone</h1>
                    <h1>+992903777824</h1>
                  </div>
                </div>
                <div className="flex gap-[15px]  w-[60%] mt-[20px]">
                  <div className="w-[16%] sx:w-[22%] border-[2px] rounded-full text-[gray] border-[gray]">
                    {
                      <ContactMailIcon
                        sx={{
                          width: "80%",
                          height: "60%",
                          margin: "auto",
                          display: "block",
                          mt: 1,
                        }}
                      />
                    }
                  </div>
                  <div className="w-[67%] text-[gray] font-bold">
                    <h1>Address</h1>
                    <h1>Dushanbe,Tajikistan </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
