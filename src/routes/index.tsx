import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import AboutView from '~/views/about/About.view';
import BookView from '~/views/book/Book.view';

export default component$(() => {
  return (
    <div>
      <AboutView />
      <BookView />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Johanna Cannelongo',
  meta: [
    {
      name: 'description',
      content: 'Johanna Cannelongo is a writer, mom, and teacher.',
    },
  ],
};
