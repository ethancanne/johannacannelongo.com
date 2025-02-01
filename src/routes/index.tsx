import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import AboutView from '~/views/about/About.view';
import BookView from '~/views/book/Book.view';
import FooterView from '~/views/footer/Footer.view';

export default component$(() => {
  return (
    <div class={'container'}>
      <AboutView />
      <BookView />
      <FooterView />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Johanna Cannelongo',
  meta: [
    {
      name: 'description',
      content:
        'Johanna is a Jesus follower, wife, mother of eight (four adopted), and writer from Maryland. Johanna is passionate about helping families navigate grief and trauma, and founded the nonprofit Giashope.org to support orphans and the vulnerable.',
    },
  ],
};
