import { component$ } from '@builder.io/qwik';
import styles from './Description.module.scss';

export default component$(() => {
  const description = {
    description:
      "Hope's “garden song” becomes their light in the darkness and the anthem that ultimately comforts their broken hearts as they trust their Good Gardener. This endearing and powerful parable is for all ages and honors both the depths of shared sorrow that families sometimes have to walk through and the overwhelming joy of a deep shared HOPE too.<br/>When read together, this story will give needed language to validate the raw realities of disappointment, trauma and loss, while also celebrating the deeper truth that we can trust all our broken gardens to the Great Gardener's good hands and loving heart.",
    image: '/images/HopesGarden1.jpeg',
  };

  return (
    <div class={styles.wrapper}>
      <div class={styles.descriptionContainer}>
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
        {description.description.split('<br/>').map((paragraph) => (
          <p class={styles.description}>{paragraph}</p>
        ))}
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
