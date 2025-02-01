import { component$ } from '@builder.io/qwik';
import styles from './Footer.module.scss';
import FacebookIcon from '@/static/facebook.svg';
import InstagramIcon from '@/static/instagram.svg';
import EmailIcon from '@/static/email.svg';

import aboutMe from '../../data/aboutMe.json';

export default component$(() => {
  return (
    <div class={styles.container}>
      <p>
        Copyright © {new Date().getFullYear()} Johanna Cannelongo. All rights
        reserved.
      </p>
      <div class={styles.socialContainer}>
        <a href={aboutMe.facebook} class={styles.socialLink}>
          <img src={FacebookIcon} alt="Facebook" class={styles.socialIcon} />
        </a>
        <a href={aboutMe.instagram} class={styles.socialLink}>
          <img src={InstagramIcon} alt="Instagram" class={styles.socialIcon} />
        </a>
        <a href={'mailto:' + aboutMe.email} class={styles.socialLink}>
          <img src={EmailIcon} alt="email" class={styles.socialIcon} />
        </a>
      </div>
    </div>
  );
});
