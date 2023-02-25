import { component$ } from '@builder.io/qwik';
import styles from './PhotoList.module.scss';

export default component$(() => {
  const photos = [
    { src: '/images/HopesGarden1.jpeg', caption: 'Photo 1' },
    { src: '/images/HopesGarden2.jpeg' },
    { src: '/images/HopesGarden3.jpeg', caption: 'Photo 3' },
    { src: '/images/HopesGarden4.jpeg' },
    { src: '/images/EviemiraBook.jpeg' },
  ];

  return (
    <div class={styles.container}>
      <div class={styles.photoContainer}>
        {photos.map((photo, index) => (
          <div class={styles.photo} key={index}>
            <img src={photo.src} alt={photo.caption} />
            {photo.caption && <div class={styles.caption}>{photo.caption}</div>}
          </div>
        ))}
      </div>
    </div>
  );
});
