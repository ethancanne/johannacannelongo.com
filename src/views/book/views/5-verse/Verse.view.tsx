import { component$ } from '@builder.io/qwik';
import styles from './Verse.module.scss';
import hopesGardenSong from '../../../../data/hopesGardenSong.json';

export default component$(() => {
  const verse = '"Behold, I am making all things new." (Rev. 21:5)';

  return (
    <div class={styles.container}>
      <p>{verse}</p>
      <a href={hopesGardenSong.bookLink.url} class={styles.button}>
        {hopesGardenSong.bookLink.text}
      </a>
    </div>
  );
});
