import { component$ } from '@builder.io/qwik';
import styles from './Intro.module.scss';
import Arrow from '@/static/arrow.svg';

export default component$(() => {
  return (
    <div class={styles.container}>
      <div class={styles.descriptionContainer}>
        <h1 class={styles.title}>Hope's Garden Song</h1>
        <p class={styles.quote}>A powerful allegory</p>
        <p class={styles.introText}>
          This book was written help hurting families learn to sing a new song
          of HOPE together, while also cultivating a safe space for their deep
          sorrows.
        </p>

        <a
          href="https://www.amazon.com/Hopes-Garden-Song-Johanna-Cannelongo/dp/1662918925"
          class={styles.button}
        >
          Preorder
        </a>
        <div
          class={styles.arrow}
          onClick$={() => {
            const element = document.getElementById('bookDescription');
            element!.scrollIntoView({ behavior: 'smooth' });
            console.log('whoo');
          }}
        >
          <img src={Arrow} alt="Scroll Down" />
        </div>
      </div>

      <div class={styles.imageContainer}>
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
