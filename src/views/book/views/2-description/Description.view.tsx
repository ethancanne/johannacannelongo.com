import { component$ } from '@builder.io/qwik';
import styles from './Description.module.scss';
import hopesGardenSong from '../../../../data/hopesGardenSong.json';
import MarkdownIt from 'markdown-it';

export default component$(() => {
  const markdown = new MarkdownIt();

  return (
    <div class={styles.wrapper} id="bookDescription">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        class={styles.wave}
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,32L48,74.7C96,117,192,203,288,213.3C384,224,480,160,576,138.7C672,117,768,139,864,165.3C960,192,1056,224,1152,208C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div class={styles.container}>
        <div class={styles.imageContainer}>
          <img
            class={styles.image}
            src={hopesGardenSong.secondFeaturedIllustration}
            alt="Hope's Garden Song"
          />
        </div>
        <div
          class={styles.descriptionContainer}
          dangerouslySetInnerHTML={markdown.render(
            hopesGardenSong.secondBookDescription
          )}
        ></div>
      </div>
    </div>
  );
});
