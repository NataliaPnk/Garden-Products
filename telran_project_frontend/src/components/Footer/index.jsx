import React from "react";
import s from "./index.module.css";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <h2>Contact</h2>

      <div className={s.container}>
        <div>
          <span>Phone</span>
          <p>
            <a href="tel:+499999999999">+49 999 999 99 99</a>
          </p>
        </div>

        <div>
          <span>Socials</span>
          <div>
            <a href="https://www.instagram.com">
              {" "}
              <BiLogoInstagramAlt className={s.icons} />
            </a>
            <a href="https://www.whatsapp.com">
              {" "}
              <IoLogoWhatsapp className={s.icons} />
            </a>
          </div>
        </div>

        <div>
          <span>Address</span>
          <p>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
        </div>

        <div>
          <span>Working Hours</span>
          <p>24 hours a day</p>
        </div>
      </div>

      <div className={s.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1214.2045793849852!2d13.37414470082905!3d52.50793403780704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1732452227989!5m2!1sru!2sde"
          width="100%"
          height="350px"
          style={{ borderRadius: "12px", border: "none" }}
          allowfullscreen=""
          loading="lazy"
          referrerp
          referrerpolicy="no-referrer-when-downgrade"
          title="Tel-Ran"
        ></iframe>
      </div>
    </footer>
  );
}
