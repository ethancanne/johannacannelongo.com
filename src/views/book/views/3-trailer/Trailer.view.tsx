import { component$ } from '@builder.io/qwik';
import styles from './Trailer.module.scss';

export default component$(() => {
  return (
    <div class={styles.container}>
      <h1 class={styles.title}>Book Trailer</h1>

      <div
        class={styles.trailerContainer}
        style="height: 0px; overflow: hidden; padding-top: 56.25%; position: relative; width: 100%;"
      >
        <iframe
          style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"
          src="https://tube.rvere.com/embed?v=yT80zvLa3W4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
});
