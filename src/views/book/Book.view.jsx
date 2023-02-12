import { component$ } from '@builder.io/qwik';
import styles from './Book.module.scss';

export default component$(() => {
  return (
    <div class={styles.wrapper}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ECE6DA"
          fill-opacity="1"
          d="M0,192L120,170.7C240,149,480,107,720,112C960,117,1200,171,1320,197.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <div class={styles.container}>
        <h1 class={styles.title}>Hope's Garden Song</h1>
        <p class={styles.description}>
          A song about the garden of hope, where we can grow our dreams and make
          them come true.
        </p>
      </div>
    </div>
  );
});
