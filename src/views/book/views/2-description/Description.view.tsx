import { component$ } from '@builder.io/qwik';
import styles from './Description.module.scss';

export default component$(() => {
  const description = {
    description:
      "This story takes place in a special beloved broken garden, among tender, broken-hearted animals that weep over its unexpected destruction from a terrible winter storm right before the highly anticipated celebration of Spring. <br/> The hurting and confused animals, who lose their favorite tree and their precious Lily flower, learn what it means to weep together, grieve together and HOPE together too. In the midst of their journey of pain, a special butterfly friend, named “Hope” teaches them a new song to sing. Through a journey of questioning, doubt, anger, and honest wrestling… <br/> They come to discover that their “Great Gardener” who weeps with them, is always working, always close, always doing a new thing even when they can't see Him.",
    image: '/images/HopesGarden2.jpeg',
  };

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
            src={description.image}
            alt="Hope's Garden Song"
          />
        </div>
        <div class={styles.descriptionContainer}>
          {description.description.split('<br/>').map((paragraph) => (
            <p class={styles.description}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
});
