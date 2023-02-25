import { component$ } from '@builder.io/qwik';
import styles from './Footer.module.scss';
import FacebookIcon from '@/static/facebook.svg';
import InstagramIcon from '@/static/instagram.svg';

export default component$(() => {
  const socialLinks = {
    facebook: 'https://www.facebook.com/johannacannelongo',
    instagram: 'https://www.instagram.com/johannacannelongo',
  };

  return (
    <div class={styles.container}>
      <p>Copyright © 2023 Johanna Cannelongo. All rights reserved.</p>
      <div class={styles.socialContainer}>
        <a href={socialLinks.facebook} class={styles.socialLink}>
          <img src={FacebookIcon} alt="Facebook" class={styles.socialIcon} />
        </a>
        <a href={socialLinks.instagram} class={styles.socialLink}>
          <img src={InstagramIcon} alt="Instagram" class={styles.socialIcon} />
        </a>
      </div>
    </div>
  );
});
