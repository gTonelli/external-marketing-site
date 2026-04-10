export const CONFIG = {
  needs: {
    hero: {
      title: (
        <>
          You’re Registered for the <em>Uncover Your Needs & Find True Connection Masterclass</em>{' '}
          Masterclass!
        </>
      ),
      subtitle: 'Your Masterclass access link has been sent to your Email.',
      videoId: '44b97433cb8cc0eded54c5ccd8c44867',
      thumbnailSrc:
        'https://pds-strapi-bucket.s3.ca-central-1.amazonaws.com/needs_masterclass_video_thumbnail_640554cd7f.jpg',
      videoLabel: 'Watch this video to learn more about your Masterclass',
      emailInstructions: [
        {
          title: 'Your custom link to watch:',
          text: 'Check your email for the subject “You’re now registered for our Masterclass with Thais Gibson, PhD.”.',
        },
        {
          title: "Important: Didn't see the email?",
          text: 'If you’re a Gmail user, check your Promotions tab. To make sure you don’t miss future updates, move our email to your Primary inbox. Still can’t find it? Check spam or search: Thais Gibson',
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
      imageSrc: '/images/Masterclass/various-devices-mockup.png',
      imageAlt: 'Access to the Personal Development School on various devices',
      ctaLabel: 'SIGN UP TODAY',
      ctaLink: '/masterclass/membership',
    },
  },
  'learn-to-trust': {
    hero: {
      title: (
        <>
          You're Registered for the <em>Heal From Cheating & Learn to Trust Again</em> Masterclass!
        </>
      ),
      subtitle: 'Your private access link has been sent to your email.',
      videoId: '266ffda0f207eec49141a63a42952cf3',
      thumbnailSrc:
        'https://pds-strapi-bucket.s3.ca-central-1.amazonaws.com/heal_from_cheating_learn_to_trust_again_masterclass_video_thumbnail_ca0ce7c225.jpg',
      videoLabel: 'Watch this video to learn more about your Masterclass',
      emailInstructions: [
        {
          title: 'Your custom link to watch:',
          text: 'Check your email for the subject “You’re now registered for our Masterclass with Thais Gibson, PhD.”.',
        },
        {
          title: "Important: Didn't see the email?",
          text: 'If you’re a Gmail user, check your Promotions tab. To make sure you don’t miss future updates, move our email to your Primary inbox. Still can’t find it? Check spam or search: Thais Gibson',
        },
      ],
    },
    membership: {
      title: 'Continue Your Healing Inside The Personal Development School',
      copy: [
        'If this Masterclass resonates with you, you can go deeper inside The Personal Development School.',
        'With one simple membership, you’ll get access to a full library of courses designed to help you understand emotional needs, improve communication, and create deeper, more fulfilling relationships.',
        'You’ll also gain access to live group coaching and a global community of people committed to personal growth.',
        'Start healing from betrayal, rebuilding trust, and creating safer, more fulfilling relationships with step-by-step guidance from Thais Gibson.',
      ],
      imageSrc: '/images/Masterclass/various-devices-mockup.png',
      imageAlt: 'Access to the Personal Development School on various devices',
      ctaLabel: 'START HEALING TODAY',
      ctaLink: '/masterclass/membership',
    },
  },
}
