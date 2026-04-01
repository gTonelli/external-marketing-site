import { externalRoutes } from '@/utils/constants'

export const CONFIG = {
  needs: {
    hero: {
      title: (
        <>
          You’re Registered for the <em>Uncover Your Needs & Find True Connection Masterclass</em>
          Masterclass!
        </>
      ),
      subtitle: 'Your Masterclass access link has been sent to your Email.',
      videoId: '0ebd3ca075a678790f95500b71a1fb1a',
      thumbnailSrc:
        'https://pds-strapi-bucket.s3.ca-central-1.amazonaws.com/needs_masterclass_video_thumbnail_640554cd7f.jpg',
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
      title: 'Before You Watch…',
      copy: 'To get the most out of this experience:',
      steps: [
        {
          image: '/images/Masterclass/thank-you-1.jpg',
          imageAlt: 'Blocking time in calendar',
          title: '1. Add to Your Calendar and Block Out the Time',
          text: 'Block out a full hour where you won’t be interrupted. You’ll be guided through an exercise to help you identify the emotional needs that shape relationships.',
        },
        {
          image: '/images/Masterclass/thank-you-2.jpg',
          imageAlt: 'Taking notes',
          title: '2. Have Something to Write With',
          text: 'You’ll be reflecting on your experiences and identifying key insights about your needs and relationship patterns. Writing things down helps you get the most out of the exercise.',
        },
        {
          image: '/images/Masterclass/thank-you-3.jpg',
          imageAlt: 'Two heart objects touching each other',
          title: '3. Invite Someone You Care About!',
          text: 'This Masterclass can be especially powerful when shared. If someone you know has ever felt misunderstood or disconnected in relationships, invite them to watch it with you.',
        },
      ],
    },
    membership: {
      title: 'Continue Your Growth Inside The Personal Development School',
      copy: [
        'If this Masterclass resonates with you, you can go deeper inside The Personal Development School.',
        'With one simple membership, you’ll get access to a full library of courses designed to help you understand emotional needs, improve communication, and create deeper, more fulfilling relationships.',
        'You’ll also gain access to live group coaching and a global community of people committed to personal growth.',
        'Start building stronger connection, clearer communication, and more meaningful relationships with step-by-step guidance from Thais Gibson.',
      ],
      imageSrc: '/images/DatingQuiz/various-devices-mockup.png',
      imageAlt: 'Access to the Personal Development School on various devices',
      ctaLabel: 'SIGN UP TODAY',
      ctaLink: '/masterclass/membership',
    },
    connect: {
      support: {
        title: 'Need support or help?',
        linkText: 'Visit Our Support Center',
        linkHref: 'https://support.personaldevelopmentschool.com/en/',
      },
      social: {
        title: 'Let’s connect on social media',
        links: [
          {
            image: '/images/pds-icon.png',
            imageAlt: 'PDS Icon',
            copy: 'Your daily inspiration',
            linkText: 'YouTube',
            linkHref: externalRoutes.youTube,
          },
          {
            image: '/images/thais_headshot.png',
            imageAlt: 'Thais Gibson',
            copy: 'Your host and founder of PDS',
            linkText: 'Instagram',
            linkHref: externalRoutes.instagram,
          },
        ],
      },
    },
  },
}
