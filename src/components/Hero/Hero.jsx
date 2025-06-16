import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"; // <-- ADD THIS LINE

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,I'm Mrinal</h1> {/* <-- FIX: classNaame to className */}
        <p>
          I am a MERN Full stack developer with 1 year 
          of experience and expertise in both frontend and 
          backend skills.Reach out if you'd like to learn more
        </p>
        <a href="mailto:myemail@mail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero" className={styles.heroImg} /> {/* <-- Added className as per tutorial if you want to style it */}
      <div className={styles.topBlur}></div>      {/* <-- FIX: Corrected div syntax */}
      <div className={styles.bottomBlur}></div>   {/* <-- FIX: Corrected div syntax */}
    </section>
  );
};
