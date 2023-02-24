import { component$ } from '@builder.io/qwik';
import styles from './Intro.module.scss';

export default component$(() => {
  return (
    <div class={styles.container}>
      <div class={styles.descriptionContainer}>
        <h1 class={styles.title}>Hope's Garden Song</h1>
        <p class={styles.quote}>A powerful metaphor</p>
        <p class={styles.introText}>
          This book was written help hurting families learn to sing a new song
          of HOPE together, while also cultivating a safe space for their deep
          sorrows.
        </p>

        <a href="/book" class={styles.button}>
          Preorder
        </a>
      </div>

      <div class={styles.imageContainer}>
        <div class={styles.wave}>
          <img src="/images/wave-1.png" alt="" />
        </div>
        <div class={styles.wave + ' ' + styles.wave2}>
          <img src="/images/wave.png" alt="" />
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
