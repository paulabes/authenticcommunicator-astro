export interface HoldingPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  dateFormatted: string;
}

export const holdingPosts: HoldingPost[] = [
  {
    slug: 'speak-confidently-in-a-work-presentation',
    title: 'How to speak confidently in a work presentation',
    excerpt: 'The small shifts in breath, posture, and pacing that turn a nervous briefing into a room-commanding moment.',
    category: 'Public Speaking',
    image: '/images/Speak-in-a-presentation-at-work.jpg',
    dateFormatted: 'Coming soon',
  },
  {
    slug: 'managing-performance-anxiety-before-a-speaking-event',
    title: 'Managing performance anxiety before a speaking event',
    excerpt: 'Opera-stage techniques for calming the nervous system and stepping into high-stakes moments with clarity.',
    category: 'Performance Anxiety',
    image: '/images/manage-performace-anxiety-before-a-speaking-event.jpg',
    dateFormatted: 'Coming soon',
  },
  {
    slug: 'why-great-ideas-fail-without-powerful-delivery',
    title: 'Why great ideas fail without powerful delivery',
    excerpt: 'Brilliance alone does not persuade. How voice, pace, and presence decide whether your ideas land.',
    category: 'Public Speaking',
    image: '/images/why-great-Ideas-fail-without-powerful-delivery.jpg',
    dateFormatted: 'Coming soon',
  },
  {
    slug: 'the-untapped-potential-of-play',
    title: 'The untapped potential of play',
    excerpt: 'Why playfulness is the shortest route to authentic, magnetic communication - and how to access it on demand.',
    category: 'Communication',
    image: '/images/the-untapped-potential-of-play.jpg',
    dateFormatted: 'Coming soon',
  },
  {
    slug: 'the-power-of-measurable-results-in-communication-training',
    title: 'The power of measurable results in communication training',
    excerpt: 'What actually changes when you invest in communication coaching - and how to measure it beyond the vibe.',
    category: 'Communication',
    image: '/images/the-power-of-measurable-results-in-communication-training.jpg',
    dateFormatted: 'Coming soon',
  },
];
