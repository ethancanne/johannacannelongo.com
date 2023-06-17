import { component$ } from '@builder.io/qwik';
import styles from './PhotoList.module.scss';
import hopesGardenSong from '../../../../data/hopesGardenSong.json';

export default component$(() => {
  return (
    <div class={styles.container}>
      <div class={styles.photoContainer}>
        {hopesGardenSong.imageCarousel.map((photo: any, index) => (
          <div class={styles.photo} key={index}>
            <img
              loading="lazy"
              width="200"
              height="300"
              src={photo.image}
              alt={photo?.description}
            />
            {photo?.description && (
              <div class={styles.caption}>{photo?.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});
