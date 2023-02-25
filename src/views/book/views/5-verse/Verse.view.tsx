import { component$ } from '@builder.io/qwik';
import styles from './Verse.module.scss';

export default component$(() => {
  const verse = '"Behold, I am making all things new." (Rev. 21:5)';

  return (
    <div class={styles.container}>
      <p>{verse}</p>
      <a
        href="https://www.amazon.com/Hopes-Garden-Song-Johanna-Cannelongo/dp/1662918925"
        class={styles.button}
      >
        Preorder
      </a>
    </div>
  );
});
