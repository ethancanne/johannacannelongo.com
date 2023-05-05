import { component$ } from '@builder.io/qwik';
import styles from './Trailer.module.scss';

export default component$(() => {
  return (
    <div class={styles.container}>
      <h1 class={styles.title}>Book Trailer</h1>
      <div class={styles.trailerContainer}>
        {/* <iframe
          width="560"
          height="315"
          class={styles.trailer}
          src="https://www.youtube.com/embed/yT80zvLa3W4"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe> */}
      </div>
    </div>
  );
});
