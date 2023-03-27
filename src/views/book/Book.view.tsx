import { component$ } from '@builder.io/qwik';
import styles from './Book.module.scss';
import DescriptionView1 from './views/2-description/Description.view';
import DescriptionView2 from './views/3-description/Description.view';
import IntroView from './views/1-intro/Intro.view';
import VerseView from './views/5-verse/Verse.view';
import PhotoListView from './views/4-photoList/PhotoList.view';
import TrailerView from './views/3-trailer/Trailer.view';

//declare prop types

export default component$(() => {
  return (
    <div class={styles.wrapper}>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FFFFFF"
          fill-opacity="1"
          d="M0,192L120,170.7C240,149,480,107,720,112C960,117,1200,171,1320,197.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg> */}
      <IntroView />
      <DescriptionView1 />
      <DescriptionView2 />
      <TrailerView />
      <PhotoListView />
      <VerseView />
    </div>
  );
});
