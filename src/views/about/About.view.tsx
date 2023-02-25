import { component$ } from '@builder.io/qwik';
import styles from './About.module.scss';
import FacebookIcon from '@/static/facebook.svg';
import InstagramIcon from '@/static/instagram.svg';

export default component$(() => {
  const description = {
    name: 'Johanna Cannelongo',
    description:
      "I am, first and foremost, a daughter of the King! I am also blessed to be the wife to Brian (an incredible daddy, coach and chef), and I am a grateful mama of 8 amazing children - 4 naturally and 4 'supernaturally' by the gift of adoption. We live in Maryland on a little farmette with many fuzzy barnyard buddies (many who are featured in this story), juicy mulberry trees, and a beautiful garden, 'Gianna's Garden of Hope' which was the inspiration for this special story. <br/> Our unique Garden was started under a 'fallen mulberry tree' from the seed of deep pain after our daughter Gianna Lilyfaith, ran ahead of us to heaven at age 6 in the early spring of 2018. Our garden was planted to honor her bravery, light and joy, and it also became a powerful visual of the hope we have in our Good Glorious Gardener, who's stories never end in death! Our garden grew and multiplied into a harvest of wildflower glory which has given us a beautiful glimpse into the glory of our eternal home and the tangible promise Jesus conquered death, and so will we! He is making all things NEW! <br/> I am passionate about helping families navigate the difficult journey of grief, pain, trauma or loss by offering visuals, story, and language to both the deep sorrow and the deeper Hope we have in God's promises. <br/> My family and I founded GIASHOPE.ORG to grow and bloom love and hope for the orphan, poor, hurting and most vulnerable of this world. We also run a therapy farm, GIASHOPE FARM FRIENDS, to nurture hearts with the gift of God's creation.Thank you for your purchase, a majority of the proceeds from the sales of this book will fund the various initiatives of GIASHOPE.org. I am so thankful to our Redeemer who's stories never end in death! Life wins!",
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
    <div class={styles.wrapper}>
      <div class={styles.container}>
        <div class={styles.descriptionContainer}>
          <h1 class={styles.name}>
            <span>{description.name}</span>
          </h1>
          {/* <div class={styles.pointsContainer}>
          {description.points.map((point) => (
            <p class={styles.point}>{point}</p>
          ))}
        </div> */}
          {description.description.split('<br/>').map((paragraph) => (
            <p class={styles.description}>{paragraph}</p>
          ))}
          <div class={styles.buttonContainer}>
            {description.buttons.map((button) => (
              <a class={styles.button} href={button.link}>
                {button.text}
              </a>
            ))}
          </div>

          <div class={styles.socialContainer}>
            <a href={description.facebook} class={styles.socialLink}>
              <img
                src={FacebookIcon}
                alt="Facebook"
                class={styles.socialIcon}
              />
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
      <svg
        class={styles.wave}
        style="transform:rotate(0deg); transition: 0.3s"
        viewBox="0 0 1440 120"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop>
            <stop stop-color="rgba(235, 216, 200, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style="transform:translate(0, 0px); opacity:1"
          fill="url(#sw-gradient-0)"
          d="M0,24L60,36C120,48,240,72,360,84C480,96,600,96,720,82C840,68,960,40,1080,26C1200,12,1320,12,1440,16C1560,20,1680,28,1800,38C1920,48,2040,60,2160,54C2280,48,2400,24,2520,22C2640,20,2760,40,2880,48C3000,56,3120,52,3240,58C3360,64,3480,80,3600,74C3720,68,3840,40,3960,30C4080,20,4200,28,4320,32C4440,36,4560,36,4680,42C4800,48,4920,60,5040,58C5160,56,5280,40,5400,34C5520,28,5640,32,5760,42C5880,52,6000,68,6120,68C6240,68,6360,52,6480,48C6600,44,6720,52,6840,46C6960,40,7080,20,7200,20C7320,20,7440,40,7560,40C7680,40,7800,20,7920,24C8040,28,8160,56,8280,60C8400,64,8520,44,8580,34L8640,24L8640,120L8580,120C8520,120,8400,120,8280,120C8160,120,8040,120,7920,120C7800,120,7680,120,7560,120C7440,120,7320,120,7200,120C7080,120,6960,120,6840,120C6720,120,6600,120,6480,120C6360,120,6240,120,6120,120C6000,120,5880,120,5760,120C5640,120,5520,120,5400,120C5280,120,5160,120,5040,120C4920,120,4800,120,4680,120C4560,120,4440,120,4320,120C4200,120,4080,120,3960,120C3840,120,3720,120,3600,120C3480,120,3360,120,3240,120C3120,120,3000,120,2880,120C2760,120,2640,120,2520,120C2400,120,2280,120,2160,120C2040,120,1920,120,1800,120C1680,120,1560,120,1440,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
        ></path>
      </svg>
    </div>
  );
});
