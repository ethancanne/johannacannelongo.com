import { component$ } from '@builder.io/qwik';
import styles from './Description.module.scss';
import hopesGardenSong from '../../../../data/hopesGardenSong.json';
import markdown from '../../../../utils/markdown.js';

export default component$(() => {
  return (
    <div class={styles.wrapper}>
      <div
        class={styles.descriptionContainer}
        style={{
          backgroundImage: `url("${hopesGardenSong.thirdFeaturedIllustration}")`,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          class={styles.wave}
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,0L48,37.3C96,75,192,149,288,192C384,235,480,245,576,224C672,203,768,149,864,117.3C960,85,1056,75,1152,85.3C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        <div
          class={styles.description}
          dangerouslySetInnerHTML={markdown(
            hopesGardenSong.thirdBookDescription
          )}
        ></div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          class={styles.wave}
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,0L48,37.3C96,75,192,149,288,192C384,235,480,245,576,224C672,203,768,149,864,117.3C960,85,1056,75,1152,85.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
});
