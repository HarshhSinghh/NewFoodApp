import React from "react";
import logo from "../../public/logo.png";
const Footer = () => {
  return (
    <div className="flex ">
      <footer className="footer p-10 bg-base-200 text-base-content flex  border flex-col text-center sm:flex-row pl-20 sm:gap-72 ">
        <aside className=" p-4">
          <img src={logo} alt="" width={150} className="" />
          <p className=" -left-6">
            FooDie <br />
            Providing Delicious Food Since 1982
          </p>
        </aside>
        <div className="footer flex gap-28 ">
          <nav className="">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="hidden  sm:flex  flex-col">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
            <a className="link link-hover">Copyright</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
