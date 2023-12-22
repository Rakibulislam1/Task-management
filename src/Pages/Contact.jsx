/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import toast from "react-hot-toast";
import { IoIosMail } from "react-icons/io";
import { BiSolidContact } from "react-icons/bi";
import { MdMyLocation } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Typewriter from "typewriter-effect";

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
          "service_8tgyi4j",
          "template_9i5099o",
          form.current,
          "IOtl9gPqrLu2U0d0m"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      toast.success("Message Sent Successfully");
    };
  
    return (
      <section>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-16 gap-6 max-w-7xl lg:mx-auto mx-3">
          <div>
            <h3 className="text-blue-700">CONTACT INFO</h3>
  
            <div
              className="flex items-center gap-5 my-5"
            >
              <div className="bg-blue-700 rounded-lg p-4">
                <IoIosMail className="text-2xl text-white"></IoIosMail>
              </div>
              <div>
                <small className="text-sm text-blue-700">MAIL</small>
                <p className="text-sm font-normal text-blue-700">
                  rirakib03@gmail.com
                </p>
              </div>
            </div>
  
            <div
              className="flex items-center gap-5 my-5"
            >
              <div className="bg-blue-700 rounded-lg p-4">
                <BiSolidContact className="text-2xl text-white"></BiSolidContact>
              </div>
              <div>
                <small className="text-sm text-blue-700">CONTACT</small>
                <p className="text-sm font-normal text-blue-700">+8801621-574994</p>
              </div>
            </div>
  
            <div
              className="flex items-center gap-5"
            >
              <div className="bg-blue-700 rounded-lg p-4">
                <MdMyLocation className="text-2xl text-white"></MdMyLocation>
              </div>
              <div>
                <small className="text-sm text-blue-700">LOCATION</small>
                <p className="text-sm font-normal text-blue-700">
                  Pabna, Bangladesh
                </p>
              </div>
            </div>
  
            <div>
              <h3 className="text-white mt-14 mb-5">Social Info</h3>
  
              <div className="flex items-center gap-5">
                <Link data-aos="zoom-out-left" data-aos-delay="50" data-aos-duration="1000"
                  className="group rounded-full p-4 transition duration-300 ease-in-out bg-blue-700 hover:bg-blue-500"
                  to="https://github.com/Rakibulislam1"
                  target="_blank"
                >
                  <FaGithub className="text-3xl text-white group-hover:text-black transition duration-300 ease-in-out" />
                </Link>
                <Link data-aos="zoom-out-up" data-aos-delay="50" data-aos-duration="1000"
                  className="group rounded-full p-4 transition duration-300 ease-in-out bg-blue-700 hover:bg-blue-500"
                  to="https://www.linkedin.com/in/iamrakib2"
                  target="_blank"
                >
                  <FaLinkedin className="text-3xl text-white group-hover:text-black transition duration-300 ease-in-out" />
                </Link>
                <Link data-aos="zoom-out-down" data-aos-delay="50" data-aos-duration="1000"
                  className="group rounded-full p-4 transition duration-300 ease-in-out bg-blue-700 hover:bg-blue-500"
                  to="https://www.instagram.com/in/iamrakib2"
                  target="_blank"
                >
                  <FaInstagramSquare className="text-3xl text-white group-hover:text-black transition duration-300 ease-in-out" />
                </Link>
              </div>
            </div>
          </div>
  
          <form
            data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000"
            ref={form}
            onSubmit={sendEmail}
            className="bg-gradient-to-br from-[#1E1E1E] via-[#202020] to-[#131313] rounded-3xl p-7 mt-10 md:mt-0"
          >
            <h2 className="text-white lg:text-4xl text-xl font-medium mt-2 mb-7">
              Let's talk{" "}
              <p className="text-[#5B78F6] inline-block">
                {" "}
                <Typewriter
                  options={{
                    strings: ["with us."],
                    autoStart: true,
                    loop: true,
                    cursor: "_",
                  }}
                />
              </p>
            </h2>
  
            <div className="mb-4">
              <input
                className="text-white px-4 py-3 bg-gradient-to-br from-[#505050] via-[#2e2d2d] to-[#1b1b1b] outline-none w-full rounded-lg focus:text-white text-sm"
                id="name"
                type="text"
                name="to_name"
                placeholder="Name *"
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="text-white px-4 py-3 bg-gradient-to-br from-[#505050] via-[#2e2d2d] to-[#1b1b1b] outline-none w-full rounded-lg focus:text-white text-sm"
                id="email"
                type="email"
                name="to_email"
                placeholder="Email *"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                className="text-white px-4 py-3 bg-gradient-to-br from-[#505050] via-[#2e2d2d] to-[#1b1b1b] outline-none w-full rounded-lg focus:text-white text-sm"
                id="message"
                name="message"
                rows={5}
                placeholder="Message *"
                defaultValue={""}
                required
              />
            </div>
            <button
              className="btn bg-gradient-to-br from-[#424242] via-[#333232] to-[#313131] outline-none w-full rounded-lg text-white py-2 px-4 border-none hover:text-[#5B78F6]"
              type="submit"
              value="Send"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;