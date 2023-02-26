import { component$ } from '@builder.io/qwik';
import styles from './Intro.module.scss';
import Arrow from '@/static/arrow.svg';
import hopesGardenSong from '../../../../data/hopesGardenSong.json';

import MarkdownIt from 'markdown-it';

export default component$(() => {
  const markdown = new MarkdownIt();

  return (
    <div class={styles.container}>
      <div class={styles.descriptionContainer}>
        <h1 class={styles.title}>Hope's Garden Song</h1>
        <p class={styles.quote}>A powerful allegory</p>
        <div
          class={styles.introText}
          dangerouslySetInnerHTML={markdown.render(hopesGardenSong.introText)}
        ></div>

        <a href={hopesGardenSong.bookLink.url} class={styles.button}>
          {hopesGardenSong.bookLink.text}
        </a>
        <div
          class={styles.arrow}
          onClick$={() => {
            const element = document.getElementById('bookDescription');
            element!.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <img src={Arrow} alt="Scroll Down" />
        </div>
      </div>

      <div
        class={styles.imageContainer}
        style={{
          backgroundImage: `url("${hopesGardenSong.firstFeaturedIllustration}")`,
        }}
      >
        <div class={styles.wave}>
          <img src="/images/wave-1.png" alt="" />
        </div>

        <img
          class={styles.image}
          src="/images/bookFront.jpg"
          alt="Hope's Garden Song"
        />
      </div>
    </div>
  );
});
