import { externalRoutes } from '@/utils/constants'
import { cloneDeep } from 'lodash'

export const EMAIL_RESULTS = {
  needs: {
    ap: {
      title: {
        text_start: 'Are You Making These ',
        text_purple: '5 Relationship Mistakes?',
        text_end: '',
      },
      body: 'Watch this video to learn about some of your most common behaviors as an anxious preoccupied, what this says about your needs, and how to start meeting those needs in a healthier way.',
      videoUrlID: 'https://storage.googleapis.com/pds_videos/NeedsAP_AttachmentStyleSeries.mp4',
      cardText:
        'Discover what you need in your relationships and learn how to get it from your partner when you enroll in The Personal Development School’s All-Access Program.',
    },

    da: {
      title: {
        text_start: 'Are You Making These ',
        text_purple: '5 Relationship Mistakes?',
        text_end: '',
      },
      body: 'Watch this video to learn about some of your most common behaviors as a dismissive avoidant, what this says about your needs, and how to start meeting those needs in a healthier way.',
      videoUrlID: 'https://storage.googleapis.com/pds_videos/NeedsDA_AttachmentStyleSeries.mp4',
      cardText:
        'Discover what you need in your relationships and learn how to get it from your partner when you enroll in The Personal Development School’s All-Access Program.',
    },

    fa: {
      title: {
        text_start: 'Are You Making These ',
        text_purple: '5 Relationship Mistakes?',
        text_end: '',
      },
      body: 'Watch this video to learn about some of your most common behaviors as a fearful avoidant, what this says about your needs, and how to start meeting those needs in a healthier way.',
      videoUrlID: 'https://storage.googleapis.com/pds_videos/NeedsFA_AttachmentStyleSeries.mp4',
      cardText:
        'Discover what you need in your relationships and learn how to get it from your partner when you enroll in The Personal Development School’s All-Access Program.',
    },

    sa: {
      title: {
        text_start: 'Do You Keep Experiencing A Disconnect In Your Relationships? ',
        text_purple: 'This Can Help!',
        text_end: '',
      },
      body: 'Watch this video to learn what your needs are as a securely attached person and why it is that you may be having trouble connecting to other attachment styles.',
      videoUrlID: 'https://storage.googleapis.com/pds_videos/NeedsSA_AttachmentStyleSeries.mp4',
      cardText:
        'Learn how to understand people better and start building more harmonious relationships immediately when you enroll in The Personal Development School’s All-Access Program.',
    },
  },

  beliefs: {
    ap: {
      title: {
        text_start: 'Want To Heal Your Attachment Style? Here’s The ',
        text_purple: '#1 thing ',
        text_end: 'You Can Start Doing To Heal It.',
      },
      body: 'Watch this video to learn a powerful reprogramming technique that will help you change the beliefs that are holding you back in your relationships.',
      videoUrlID:
        'https://storage.googleapis.com/pds_videos/BeliefsAPFADA_AttachmentStyleSeries.mp4',
      cardText:
        'Learn more effective tools and techniques for creating lasting change in your life when you enroll in The Personal Development School’s All-Access Program.',
    },
    da: {
      title: {
        text_start: 'Want to Heal Your Attachment Style? Here’s the ',
        text_purple: '#1 thing ',
        text_end: 'You Can Start Doing to Heal it.',
      },
      body: 'Watch this video to learn a powerful reprogramming technique that will help you change the beliefs that are holding you back in your relationships.',
      videoUrlID:
        'https://storage.googleapis.com/pds_videos/BeliefsAPFADA_AttachmentStyleSeries.mp4',
      cardText:
        'Learn more effective tools and techniques for creating lasting change in your life when you enroll in The Personal Development School’s All-Access Program.',
    },

    fa: {
      title: {
        text_start: 'Want To Heal Your Attachment Style? Here’s The ',
        text_purple: '#1 thing ',
        text_end: 'You Can Start Doing To Heal It.',
      },
      body: 'Watch this video to learn a powerful reprogramming technique that will help you change the beliefs that are holding you back in your relationships.',
      videoUrlID:
        'https://storage.googleapis.com/pds_videos/BeliefsAPFADA_AttachmentStyleSeries.mp4',
      cardText:
        'Learn more effective tools and techniques for creating lasting change in your life when you enroll in The Personal Development School’s All-Access Program.',
    },

    sa: {
      title: {
        text_start: 'Is Your ',
        text_purple: 'Secondary Attachment Style ',
        text_end: 'Getting Activated and Affecting Your Relationships?',
      },
      body: 'Watch this video to learn why your secondary attachment style matters and some of the ways it might be showing up in your relationships.',
      videoUrlID: 'https://storage.googleapis.com/pds_videos/BeliefsSA_AttachmentStyleSeries.mp4',
      cardText:
        'Uncover your secondary attachment style and learn how to heal it when you enroll in The Personal Development School’s All-Access Program.',
    },
  },
}

export const FA_EMAIL_RESULTS = {
  'attachment-style': {
    fa: {
      title: {
        text_start: 'Do You Feel Your Attachment Style Is ',
        text_purple: 'Clashing With Your Partner’s? ',
        text_end: 'Here’s Why…',
      },
      body: 'This video gives a detailed breakdown of the key components of each of the four attachment styles, including their childhood and adult behaviors, thoughts, and beliefs. You’ll learn more about your fearful attachment style and how it interacts with others.',
      videoUrlID: 'https://storage.googleapis.com/pds_videos/FA_email2_60.mp4',
      cardText:
        'You have the opportunity to learn how your attachment style affects your life and relationships – and how you can change it – with our All-Access Pass.',
    },
  },
  signs: {
    fa: {
      title: {
        text_start: 'Want Confirmation That ',
        text_purple: 'You Or Your Partner Is A Fearful Avoidant?',
        text_end: '',
      },
      body: 'Watch this video to get your answers! I talk about the 8 major signs, including intense behavior patterns, swinging boundaries, and more, that indicate if you or your partner (or friend, family member) is a fearful avoidant.',
      videoUrlID: 'https://storage.googleapis.com/pds_videos/FA_email3_60.mp4',
      cardText:
        'Our accessible & affordable courses provide the tools and strategies to change your fearful avoidant patterns, thoughts, and beliefs. Just sign up for our All-Access Pass.',
    },
  },
  'top-needs': {
    fa: {
      title: {
        text_start: 'Do You Desire A ',
        text_purple: 'Deep Connection With Trust & Transparency? ',
        text_end: 'Watch to learn more.',
      },
      body: "Knowing your subconscious needs can improve your relationships in leaps and bounds. This video explains your fearful avoidant's emotional and romantic needs, how they come from things you missed out on in childhood, and how they will help you in relationships.",
      videoUrlID: 'https://storage.googleapis.com/pds_videos/FA_email4_60.mp4',
      cardText:
        'Our All-Access Pass is the platform that gives you the tools, extensive knowledge, and supportive community to help you meet your personal and relationship needs.',
    },
  },
  healing: {
    fa: {
      title: {
        text_start: 'Here’s How Your ',
        text_purple: 'Wounds, Expectations & Habits Are Stopping You From Finding Love.',
        text_end: '',
      },
      body: 'In this short video, I take a deep dive into the core wounds, emotions, boundaries, and needs of your fearful avoidant attachment style and how they’re holding you back from finding and embracing the loving, valued, and open relationship you desire.',
      videoUrlID: 'https://storage.googleapis.com/pds_videos/FA_email5_60.mp4',
      cardText:
        'Do you want to learn to finally overcome your fears of abandonment, betrayal, and feeling unloved or trapped? Our All-Access Pass gives you everything you need.',
    },
  },
  'key-tools': {
    fa: {
      title: {
        text_start: 'Are You Ready For The ',
        text_purple: 'Toolbox To Change Your Life & Relationships?',
        text_end: '',
      },
      body: 'It’s all about using the power of subconscious reprogramming (reconditioning) to heal your fearful avoidant style. I’ll walk through one of our most powerful tools, step-by-step, uncovering the roadblocks and how to use it to become securely attached. It’s a toolbox you can use for life!',
      videoUrlID: 'https://storage.googleapis.com/pds_videos/FA_email6_60.mp4',
      cardText:
        'Our All-Access Pass offers the eye-opening and life-changing opportunity to learn more subconscious reprogramming tools to help you become securely attached.',
    },
  },
  'trust-wounds': {
    fa: {
      title: {
        text_start: 'Do You Want To ',
        text_purple: 'Trust Others Again? ',
        text_end: 'Here’s The 3 Key Ways You Can Start Heal Yourself.',
      },
      body: "What’s internal trust? Where do your trust wounds come from? Most importantly, how do you repair them? I explain three key ways you can repair your trust wounds in this short video. This might get uncomfortable, but it means you're actually healing!",
      videoUrlID: 'https://storage.googleapis.com/pds_videos/FA_email7_60.mp4',
      cardText:
        'Why stop healing your trust wounds? Go deeper with our All-Access Pass. We’ll teach you how to create the life and relationships you desire.',
    },
  },
}

export const AGE_PRODUCT_COPY = cloneDeep(EMAIL_RESULTS)

AGE_PRODUCT_COPY.needs.fa.cardText =
  'Discover what you need in your relationships and learn how to get it from your partner when you enroll in The Personal Development School’s Fearful Avoidant Course Bundle.'
AGE_PRODUCT_COPY.needs.ap.cardText =
  'Discover what you need in your relationships and learn how to get it from your partner when you enroll in The Personal Development School’s Anxious Preoccupied Course Bundle.'
AGE_PRODUCT_COPY.needs.da.cardText =
  'Discover what you need in your relationships and learn how to get it from your partner when you enroll in The Personal Development School’s Dismissive Avoidant Course Bundle.'
AGE_PRODUCT_COPY.needs.sa.cardText =
  'Learn how to understand people better and start building more harmonious relationships immediately when you enroll in The Personal Development School’s Secure Attachment Course Bundle.'

AGE_PRODUCT_COPY.beliefs.fa.cardText =
  'Learn more effective tools and techniques for creating lasting change in your life when you enroll in The Personal Development School’s Fearful Avoidant Course Bundle.'

AGE_PRODUCT_COPY.beliefs.ap.cardText =
  'Learn more effective tools and techniques for creating lasting change in your life when you enroll in The Personal Development School’s Anxious Preoccupied Course Bundle.'

AGE_PRODUCT_COPY.beliefs.da.cardText =
  'Learn more effective tools and techniques for creating lasting change in your life when you enroll in The Personal Development School’s Dismissive Avoidant Course Bundle.'

AGE_PRODUCT_COPY.beliefs.sa.cardText =
  'Uncover your secondary attachment style and learn how to heal it when you enroll in The Personal Development School’s Secure Attachmennt Course Bundle.'

export const AGE_PRODUCT_CHECKOUT = {
  fa: externalRoutes.checkoutAgeProductFa,
  ap: externalRoutes.checkoutAgeProductAp,
  da: externalRoutes.checkoutAgeProductDa,
  sa: externalRoutes.checkoutAgeProductSa,
}
