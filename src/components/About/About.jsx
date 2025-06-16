import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <h2 className={styles.heading}>ABOUT</h2>

      <div className={styles.contentWrapper}>
        {/* Left Side: Avatar Image */}
        
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="About Me"
          className={styles.aboutImg}
        />
        {/* Right Side: Cards */}
         <ul className={styles.aboutItems}>
           <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Frontend Icon"
            />
            <div>
            <h3>Frontend Developer</h3>
            <p>
              I’m a front-end developer with experience in building responsive
              and optimized sites.
            </p>
          </div>
          </li>
            <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/serverIcon.png")}
              alt="Backend Icon"
            />
            <div>
            <h3>Backend Developer</h3>
            <p>
              I have experience developing fast and optimized back-end systems
              and APIs.
            </p>
           </div>
            </li>
            <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/uiIcon.png")}
              alt="UI Icon"
            />
             <div >
            <h3>UI/UX Designer</h3>
            <p>
              I have designed landing pages and created visually appealing
              designs using Figma and Canva.
            </p>
        </div>
        </li>
        </ul>
        </div>
    </section>
  );
};
