import { component$ } from '@builder.io/qwik';
import styles from './About.module.scss';
import FacebookIcon from '@/static/facebook.svg';
import InstagramIcon from '@/static/instagram.svg';
import aboutMe from '../../data/aboutMe.json';
import markdown from '../../utils/markdown.js';

export default component$(() => {
  return (
    <div class={styles.wrapper}>
      <div class={styles.container}>
        <div class={styles.descriptionContainer}>
          <h1 class={styles.name}>
            <span>Johanna Cannelongo</span>
          </h1>
          {/* <div class={styles.pointsContainer}>
          {description.points.map((point) => (
            <p class={styles.point}>{point}</p>
          ))}
        </div> */}

          <div
            class={styles.description}
            dangerouslySetInnerHTML={markdown(aboutMe.description)}
          ></div>

          <div class={styles.buttonContainer}>
            {aboutMe.buttons.map(({ button }: any) => (
              <a class={styles.button} href={button.link}>
                {button.text}
              </a>
            ))}
          </div>

          <div class={styles.socialContainer}>
            <a href={aboutMe.facebook} class={styles.socialLink}>
              <img
                src={FacebookIcon}
                alt="Facebook"
                class={styles.socialIcon}
              />
            </a>
            <a href={aboutMe.instagram} class={styles.socialLink}>
              <img
                src={InstagramIcon}
                alt="Instagram"
                class={styles.socialIcon}
              />
            </a>
          </div>
        </div>
        <div
          class={styles.imageContainer}
          style={{ backgroundImage: `url("${aboutMe.backgroundImage}")` }}
        >
          <img src={aboutMe.image} alt="Johanna" class={styles.image} />
        </div>
      </div>
      <svg
        class={styles.wave}
        style="transform:rotate(0deg); transition: 0.3s"
        viewBox="0 0 1440 120"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop>
            <stop stop-color="rgba(235, 216, 200, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style="transform:translate(0, 0px); opacity:1"
          fill="url(#sw-gradient-0)"
          d="M0,24L60,36C120,48,240,72,360,84C480,96,600,96,720,82C840,68,960,40,1080,26C1200,12,1320,12,1440,16C1560,20,1680,28,1800,38C1920,48,2040,60,2160,54C2280,48,2400,24,2520,22C2640,20,2760,40,2880,48C3000,56,3120,52,3240,58C3360,64,3480,80,3600,74C3720,68,3840,40,3960,30C4080,20,4200,28,4320,32C4440,36,4560,36,4680,42C4800,48,4920,60,5040,58C5160,56,5280,40,5400,34C5520,28,5640,32,5760,42C5880,52,6000,68,6120,68C6240,68,6360,52,6480,48C6600,44,6720,52,6840,46C6960,40,7080,20,7200,20C7320,20,7440,40,7560,40C7680,40,7800,20,7920,24C8040,28,8160,56,8280,60C8400,64,8520,44,8580,34L8640,24L8640,120L8580,120C8520,120,8400,120,8280,120C8160,120,8040,120,7920,120C7800,120,7680,120,7560,120C7440,120,7320,120,7200,120C7080,120,6960,120,6840,120C6720,120,6600,120,6480,120C6360,120,6240,120,6120,120C6000,120,5880,120,5760,120C5640,120,5520,120,5400,120C5280,120,5160,120,5040,120C4920,120,4800,120,4680,120C4560,120,4440,120,4320,120C4200,120,4080,120,3960,120C3840,120,3720,120,3600,120C3480,120,3360,120,3240,120C3120,120,3000,120,2880,120C2760,120,2640,120,2520,120C2400,120,2280,120,2160,120C2040,120,1920,120,1800,120C1680,120,1560,120,1440,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
        ></path>
      </svg>
    </div>
  );
});
