import { component$ } from '@builder.io/qwik';
import styles from './About.module.scss';
import FacebookIcon from '@/static/facebook.svg';
import InstagramIcon from '@/static/instagram.svg';

export default component$(() => {
  const description = {
    name: 'Johanna Cannelongo',
    description:
      'I’m a wife and mama of eight children, four naturally and four “supernaturally” by the gift of adoption. I live in Maryland on a little farmette with my amazing and funny husband, Brian. Often I can be found gardening, in the barnyard chasing goats and chickens, or at my computer writing, reading all the books, or homeschooling my kiddos. Though there is much goodness in the land of the living, there is much grief walking the journey of child loss and navigating that pathway through the desert. My passion is to write from the depths of the wilderness and to pass the blazing torch of light to other wilderness-walkers through the sacred story I’ve been given the honor to steward in this life. Jesus is my song of LIVING HOPE and hope saves my broken soul every day. I write at wildflowerhope.com.',
    points: ['Mom', 'Writer', 'Blogger', 'Teacher', 'Blessed'],
    buttons: [
      { text: 'Non-profit', link: 'https://www.giashope.org/' },
      {
        text: 'Blog',
        link: 'https://www.wildflowerhope.com/',
      },
    ],
    facebook: 'https://www.facebook.com/johanna.cannelongo',
    instagram: 'https://www.instagram.com/johannacannelongo/',
  };
  return (
    <div class={styles.container}>
      <div class={styles.descriptionContainer}>
        <h1 class={styles.name}>
          Hello, I'm <span>{description.name}</span>
        </h1>
        <div class={styles.pointsContainer}>
          {description.points.map((point) => (
            <p class={styles.point}>{point}</p>
          ))}
        </div>
        <p class={styles.description}>{description.description}</p>
        <div class={styles.buttonContainer}>
          {description.buttons.map((button) => (
            <a class={styles.button} href={button.link}>
              {button.text}
            </a>
          ))}
        </div>

        <div class={styles.socialContainer}>
          <a href={description.facebook} class={styles.socialLink}>
            <img src={FacebookIcon} alt="Facebook" class={styles.socialIcon} />
          </a>
          <a href={description.instagram} class={styles.socialLink}>
            <img
              src={InstagramIcon}
              alt="Instagram"
              class={styles.socialIcon}
            />
          </a>
        </div>
      </div>
      <div class={styles.imageContainer}>
        <img
          src="https://stopforflowers1.files.wordpress.com/2019/10/johanna-headshot.jpg?w=736"
          alt="Johanna"
          class={styles.image}
        />
      </div>
    </div>
  );
});
