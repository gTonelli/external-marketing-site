export const CONFIG = {
  needs: {
    hero: {
      title: <>You’re Registered For Your Mindvalley Masterclass!</>,
      subtitle: 'Your Masterclass access link has been sent to your Email.',
      videoId: '',
      thumbnailSrc:
        'https://pds-strapi-bucket.s3.ca-central-1.amazonaws.com/pds_video_thumbnail_3437236ac6.jpg',
      videoLabel: 'Watch this video to learn more about your Masterclass',
      emailInstructions: [
        {
          title: 'Your custom link to watch:',
          text: 'Check your email for the subject “Congratulations - You’re confirmed for the Masterclass”.',
        },
        {
          title: "Important: Didn't see the email?",
          text: 'If you’re a Gmail user, check your Promotions tab. To make sure you don’t miss future updates, move our email to your Primary inbox. Still can’t find it? Check spam or search: Thais Gibson',
        },
      ],
    },
    access: {
      title: 'Simple step to get the most out of this Masterclass',
      steps: [
        {
          image: '',
          imageAlt: '',
          title: '1. Add to your calendar',
          text: "Schedule at least 70 minutes of uninterrupted time for this Masterclass so you can experience Jeffrey Allen's Embrace your Energy Body distraction-free.",
        },
        {
          image: '',
          imageAlt: '',
          title: '2. Share this Masterclass with your friends',
          text: 'Spread the knowledge! Invite your friends to join this Masterclass with you and embark on a transformative learning adventure together.',
        },
      ],
    },
    membership: {
      title: 'Unlock Mindvalley Membership just at $49 a month',
      text: 'As a reward for signing up for this Masterclass get special access to Mindvalley Membership which includes unlimited access to all quests, meditations, meetups, private social network and a lot more.',
      ctaLabel: 'Become A Member Now',
    },
  },
}
