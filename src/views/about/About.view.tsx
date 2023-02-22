import { component$ } from '@builder.io/qwik';
import styles from './About.module.scss';
import FacebookIcon from '@/static/facebook.svg';
import InstagramIcon from '@/static/instagram.svg';

export default component$(() => {
  const description = {
    name: 'Johanna Cannelongo',
    description:
      "I am, first and foremost, a daughter of the King! I am also blessed to be the wife to Brian (an incredible daddy, coach and chef), and I am a grateful mama of 8 amazing children - 4 naturally and 4 'supernaturally' by the gift of adoption. We live in Maryland on a little farmette with many fuzzy barnyard buddies (many who are featured in this story), juicy mulberry trees, and a beautiful garden, 'Gianna's Garden of Hope' which was the inspiration for this special story. Our unique Garden was started under a 'fallen mulberry tree' from the seed of deep pain after our daughter Gianna Lilyfaith, ran ahead of us to heaven at age 6 in the early spring of 2018. Our garden was planted to honor her bravery, light and joy, and it also became a powerful visual of the hope we have in our Good Glorious Gardener, who's stories never end in death! Our garden grew and multiplied into a harvest of wildflower glory which has given us a beautiful glimpse into the glory of our eternal home and the tangible promise Jesus conquered death, and so will we! He is making all things NEW! I am passionate about helping families navigate the difficult journey of grief, pain, trauma or loss by offering visuals, story, and language to both the deep sorrow and the deeper Hope we have in God's promises. My family and I founded GIASHOPE.ORG to grow and bloom love and hope for the orphan, poor, hurting and most vulnerable of this world. We also run a therapy farm, GIASHOPE FARM FRIENDS, to nurture hearts with the gift of God's creation.Thank you for your purchase, a majority of the proceeds from the sales of this book will fund the various initiatives of GIASHOPE.org. I am so thankful to our Redeemer who's stories never end in death! Life wins!",
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
