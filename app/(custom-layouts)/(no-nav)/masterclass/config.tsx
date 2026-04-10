import { externalRoutes } from '@/utils/constants'

const titleSlugs = ['needs', 'learn-to-trust'] as const

export type TMasterclassTitle = (typeof titleSlugs)[number]

export const MasterclassTitleSlugs = titleSlugs.map((title) => ({ title })) as {
  title: TMasterclassTitle
}[]

type TSEODetails = {
  title: string
  description: string
  robots: string
}

type TSEOConfig = {
  [K in TMasterclassTitle]: {
    registrationPage: TSEODetails
    thankYouPage: TSEODetails
    secondarySalesPage: TSEODetails
    livePage: TSEODetails
    replayPage: TSEODetails
  }
}

export const SEO_CONFIG: TSEOConfig = {
  needs: {
    registrationPage: {
      title: 'Uncover Your Needs & Find True Connection Masterclass | Free Masterclass',
      description:
        'Feel disconnected or stuck in relationship patterns? Discover your emotional needs and learn how to create deeper, more fulfilling connections in this free masterclass with Thais Gibson.',
      robots: 'index, follow, max-snippet:-1',
    },
    thankYouPage: {
      title: 'You’re Now Registered for The Uncover Your Needs & Find True Connection Masterclass',
      description:
        'You’re registered! Access your Uncover Your Needs & Find True Connection masterclass and learn how to identify emotional needs, improve communication, and create deeper, more fulfilling relationships.',
      robots: 'noindex',
    },
    secondarySalesPage: {
      title: 'Build Secure, Fulfilling Relationships That Last | Join PDS Today',
      description:
        'Join The Personal Development School to understand your emotional needs, improve communication, and build deeply fulfilling relationships with courses, tools, and live coaching.',
      robots: 'noindex',
    },
    livePage: {
      title: 'Uncover Your Needs & Find True Connection Masterclass by Thais Gibson',
      description:
        'Watch the free masterclass and learn how to identify your emotional needs, improve communication, and create deeper, more fulfilling relationships with Thais Gibson.',
      robots: 'noindex',
    },
    replayPage: {
      title: 'Uncover Your Needs & Find True Connection Masterclass by Thais Gibson',
      description:
        'Watch the free masterclass and learn how to identify your emotional needs, improve communication, and create deeper, more fulfilling relationships with Thais Gibson.',
      robots: 'noindex',
    },
  },
  'learn-to-trust': {
    registrationPage: {
      title: 'Heal From Cheating & Learn to Trust Again Masterclass | Free Masterclass',
      description:
        'Struggling to trust after betrayal? Discover how to heal cheating-related wounds, stop overthinking, and build safe, secure relationships in this free masterclass with Thais Gibson.',
      robots: 'index, follow, max-snippet:-1',
    },
    thankYouPage: {
      title: 'You’re Now Registered for The Heal From Cheating & Learn to Trust Again Masterclass',
      description:
        "You're registered! Check your email for your masterclass access link and learn how to heal from cheating, rebuild trust, and create healthier relationships.",
      robots: 'noindex',
    },
    secondarySalesPage: {
      title: 'Heal Trust After Cheating & Feel Safe in Love Again | Join PDS Today',
      description:
        'Join The Personal Development School to heal trust wounds from cheating, stop overthinking, and rebuild self-trust. Access courses, tools, and coaching to create safe, secure relationships.',
      robots: 'noindex',
    },
    livePage: {
      title: 'Heal From Cheating & Learn to Trust Again Masterclass by Thais Gibson',
      description:
        'Watch the masterclass and learn how to heal trust wounds, stop overthinking, and rebuild confidence in love after betrayal with Thais Gibson.',
      robots: 'noindex',
    },
    replayPage: {
      title: 'Heal From Cheating & Learn to Trust Again Masterclass by Thais Gibson',
      description:
        'Watch the masterclass and learn how to heal trust wounds, stop overthinking, and rebuild confidence in love after betrayal with Thais Gibson.',
      robots: 'noindex',
    },
  },
}

export const COMMON_CONFIG = {
  studentStories: [
    {
      quote:
        '\u201cPDS replaced therapy for me. I was a Fearful Avoidant, and I could not explain why I struggled in relationships. The constant need for connection and the fear of having one was very draining. I am so grateful to PDS that finally I realize that my worth is not related to anything I achieve but to the person that I am. Also learning about other attachment styles helped me to become more compassionate to people around me.\u201d',
      author: 'Athira D.',
      authorPicture: '/images/avatar_athira.jpg',
    },
    {
      quote:
        '\u201cI’ve been a member since June, 2020. This experience has been a life changer for me. I have always been a seeker and self-improvement fan, but the courses and webinars with Thais as well as the zoom meetings with the community led by Mike, have given me actionable tools and a supportive safe space to discuss and practice them.  I am so fortunate to have found this school and so many friendly folks to share this journey!\u201d',
      author: 'Carrie L.',
      authorPicture: '/images/avatar_carrie.jpeg',
    },
    {
      quote:
        '\u201cPDS has impacted my life immensely. From creating a healthy relationship to self, improving my family dynamics, impacting my awareness of my subconscious programming, to providing the skills/tools for improving my communication with others in all relationships. It has honestly changed my life for the better and am on my path towards becoming a more secure person.\u201d',
      author: 'Jake J.',
      authorPicture: '/images/avatar_jake.jpg',
    },
    {
      quote:
        '\u201cJoining PDS was the single best decision I made last year as it opened my eyes to the possibility that I could dramatically improve the quality of my relationships and that my past did not have to define my future. The PDS community is a truly supportive environment, my only regret is that I did not find all this out sooner as it has been truly life changing for me!\u201d',
      author: 'Leona D.',
      authorPicture: '/images/avatar_leona.jpg',
    },
    {
      quote:
        '\u201cI’ve researched relationships most of my life. However, I couldn’t find anything that explained my dynamic in them. I thought about therapy until I stumbled upon Thais’s YouTube channel. She explained EXACTLY what I was experiencing. She literally read my mind! I’m usually a bit of a skeptic but I was hooked! I finally figured out my problem and how to solve it!\u201d',
      author: 'Melissa K.',
      authorPicture: '/images/avatar_melissa.jpg',
    },
    {
      quote:
        '\u201cPDS is an incredible resource. The work is powerful. It’s helped me to heal some hard wounds and change my life to one that is more balanced, more joyful and based in a deep sense of self-love and understanding. You choose how to heal and you get to do it in an environment steeped in compassion, connection, integrity and personal accountability.\u201d',
      author: 'Tamara G.',
      authorPicture: '/images/avatar_tamara.jpg',
    },
  ],
  thais: {
    title: 'Meet Thais Gibson, PhD',
    copy: [
      'Thais Gibson, PhD, is the founder of The Personal Development School and a leading expert in emotional needs, relationship dynamics, and personal transformation.',
      'Through her teaching and training programs, she has helped over 60,000 students across 145+ countries better understand their emotional patterns, improve communication, and build stronger, more fulfilling relationships.',
      'Earlier in her own life, she experienced the same relationship frustrations many people struggle with: feeling misunderstood, repeating the same conflicts, and wondering why connection sometimes fades over time.',
      'This led her to explore a deeper question: why do so many relationships drift into frustration, loneliness, or resentment, even when people genuinely care about each other?',
      'Through years of research, training, and working with clients, she discovered that many of these challenges stem from unrecognized emotional needs that people were never taught how to identify or communicate.',
      'Today, she teaches the tools that help people uncover those needs, find healthy connection with partners, and create relationships where people feel seen, heard, appreciated, and deeply loved.',
      'In this Masterclass, she’ll share the insights that have helped thousands of people create deeper connection and more fulfilling relationships.',
    ],
    credentials: {
      title: 'Credentials',
      list: [
        <>
          Founder of The Personal Development School, one of the largest attachment-focused personal
          growth platforms serving students in 145+ countries
        </>,
        <>
          PhD with 13+ certifications in CBT, NLP, Somatic Experiencing, Internal Family Systems
          (IFS), trauma-informed therapy, and advanced subconscious reprogramming modalities
        </>,
        <>
          Creator of Integrated Attachment Theory<sup>TM</sup>, a proprietary framework for
          reprogramming attachment patterns at the subconscious level
        </>,
        <>
          Best-selling author of <em>The New Attachment Theory</em>
        </>,
      ],
    },
  },
  asSeenOn: {
    title: 'As Seen On',
  },
  faqs: [
    {
      question: 'Can I access the courses without becoming a member?',
      answer:
        'The courses, tools, and webinars are part of The Personal Development School. When you join, you gain access to the full course library and all included resources for as long as your membership remains active.',
    },
    {
      question: 'How do I know where to start inside the membership?',
      answer:
        'Many members begin with courses related to their attachment style, emotional patterns, or relationship challenges. Inside the membership, you’ll find structured courses and resources organized by topic so you can focus on the areas most relevant to your personal growth.',
    },
    {
      question: 'Will I have access to live sessions with Thais Gibson?',
      answer:
        'Yes! Membership includes weekly live webinars with Thais, where she teaches, answers questions, and helps members apply the tools from Integrated Attachment Theory™ to real-life situations.',
    },
    {
      question: 'Can I cancel my membership?',
      answer:
        'Yes. You can cancel your membership at any time through your account settings. Your access will remain active until the end of your current billing period.',
    },
    {
      question: 'Is there a money-back guarantee?',
      answer:
        'Yes. The membership includes a 7-day money-back guarantee, so you can explore the courses and resources risk-free. If you decide it’s not the right fit within the first 7 days, you can request a refund.',
    },
  ],
  host: {
    title: 'This Masterclass is Hosted by Thais Gibson',
    copy: [
      'Thais is the founder of The Personal Development School and a globally recognized expert in attachment theory, subconscious reprogramming, and emotional healing. She holds a Ph.D. and has over a decade of experience helping individuals rewire core beliefs, heal attachment wounds, and create healthier, more fulfilling relationships.',
      'Through her work, Thais has supported tens of thousands of students worldwide in transforming patterns related to anxious, avoidant, and fearful-avoidant attachment styles. She is known for translating complex psychological concepts into practical, actionable tools that create lasting change.',
      'Thais has developed in-depth programs focused on emotional regulation, reprogramming core wounds, boundaries, and communication. As a host, Thais brings a unique blend of clinical insight, structured learning design, and compassionate guidance to help you deeply understand yourself and create meaningful transformation.',
    ],
    imageSrc: '/images/Masterclass/thais-portrait-1.jpg',
    imageAlt: "Thais Gibson's portrait image",
  },
  preWatchSteps: {
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
  connect: {
    support: {
      title: 'Need Support or Help?',
      linkText: 'Visit Our Support Center',
      linkHref: 'https://support.personaldevelopmentschool.com/en/',
    },
    social: {
      title: 'Let’s Connect on Social Media',
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
  app: {
    title: 'The Personal Development School app, now available on Apple and Android',
    copy: 'Take your healing journey anywhere with The Personal Development School app. Now available across Apple and Android devices. Access 70+ in-depth courses, personalized guidance, and proven tools to help you rewire patterns, build secure relationships, and create meaningful, lasting transformation.',
    image: '/images/Masterclass/pds-app.png',
    imageAlt: 'PDS App available on Apple and Android',
  },
  media: {
    title:
      'The Membership Helping Thousands Heal, Grow, and Build Secure, Fulfilling Relationships',
    copy: 'Through Thais Gibson’s work and The Personal Development School, people around the world are learning how to break free from unhealthy patterns, reprogram core beliefs, and step into a more empowered, connected version of themselves.',
    videoId: 'ce68139aa9a0eaab7a36522a37fc237e',
    videoThumbnail:
      'https://pds-strapi-bucket.s3.ca-central-1.amazonaws.com/thais_writing_video_thumbnail_a5e6bc6f9e.jpg',
    articles: [
      {
        logo: '/images/Logo_Brand/us-insider-logo.jpg',
        logoAlt: 'US Insider logo',
        title:
          'Discover the Secrets to Thriving Relationships with Relationship Expert, Thais Gibson',
        copy: 'Thais Gibson’s work has earned the trust of tens of thousands globally, with a staggering 94% satisfaction rate among PDS members. From profound changes in relationships to enhanced emotional well-being and productivity, PDS subscribers experience tangible and intangible benefits that positively impact their lives....',
        linkUrl:
          'https://www.usinsider.com/discover-the-secrets-to-thriving-relationships-with-relationship-expert-thais-gibson/',
        link: 'Read on US Insider',
      },
      {
        logo: '/images/Logo_Brand/international-business-times-logo.png',
        logoAlt: 'International Business Times logo',
        title: "Thais Gibson's PDS: Where Science-Backed Strategies Lead to Tangible Breakthroughs",
        copy: "In a world where toxic relationship patterns can erode happiness and fulfillment, Thais Gibson's PDS stands as a beacon of hope. By embracing science-backed strategies and personalized approaches, PDS empowers individuals to break free from their past and pave the way to a future filled with love, and understanding breakthroughs...",
        linkUrl:
          'https://www.ibtimes.sg/thais-gibsons-pds-where-science-backed-strategies-lead-tangible-breakthroughs-72150',
        link: 'Read on International Business Times',
      },
    ],
  },
  courseCarousel: {
    title: '70+ Transformational Programs for Every Area of Your Life',
    copy: [
      'Inside the All-Access Pass, you’ll also find a full bonus library of programs designed to support every area of your life.',
      'From healing relationship patterns to building confidence, improving communication, regulating emotions, and creating lasting behavioral change — everything is structured to help you move forward in a clear, supported way.',
    ],
  },
  courseLibrary: {
    title: 'A Complete Library for Personal Growth and Relationship Transformation',
    subtitle:
      'Explore the courses that will support your journey and begin creating stronger relationships, greater emotional balance, and lasting fulfillment in your life.',
    categories: [
      {
        label: 'Relationships',
        courses: [
          {
            title: 'How to Heal From a Breakup',
            thumbnail: '/images/course-heal-from-breakup.jpg',
          },
          {
            title: 'Ending Relationship Codependency & Enmeshment',
            thumbnail: '/images/course-codependency-enmeshment.jpg',
          },
          {
            title: 'How to Repair Any Relationship',
            thumbnail: '/images/course-how-to-repair-relationship.jpg',
          },
          {
            title: 'How to Master the Dating Stage of Relationships',
            thumbnail: '/images/course-master-dating-stage.jpg',
          },
          {
            title: 'The Key Pillars to Create a Secure Relationship',
            thumbnail: '/images/course-pillars-to-secure-relationships.jpg',
          },
        ],
      },
      {
        label: 'Confidence',
        courses: [
          {
            title: 'Skyrocket Your Self-Esteem',
            thumbnail: '/images/course-skyrocket-your-self-esteem.jpg',
          },
          {
            title: 'Overcoming Social Anxiety & The Fear of Rejection',
            thumbnail: '/images/course-overcoming-social-anxiety.jpg',
          },
          {
            title: 'Reparenting Your Inner Child',
            thumbnail: '/images/course-reparenting-your-inner-child.jpg',
          },
          {
            title: 'Learning to Love Yourself',
            thumbnail: '/images/course-learning-to-love-yourself.jpg',
          },
          {
            title: 'Goal Setting for Success',
            thumbnail: '/images/course-setting-goals.jpg',
          },
        ],
      },
      {
        label: 'Emotional Healing',
        courses: [
          {
            title: 'The Handbook for a Better Life',
            thumbnail: '/images/course-handbook-for-a-better-life-alt.png',
          },
          {
            title: 'Discover, Embrace & Fulfill Your Personal Needs',
            thumbnail: '/images/course-personal-needs-alt.jpg',
          },
          {
            title: 'Overcoming Unworthiness & Accepting Your Shadow',
            thumbnail: '/images/course-overcoming-unworthiness.jpg',
          },
          {
            title: 'Healthy Habits for Life Mastery',
            thumbnail: '/images/course-healthy-habits-for-life-mastery.jpg',
          },
          {
            title: 'Release Emotions with Somatic Processing',
            thumbnail: '/images/course-somatic-processing.jpg',
          },
        ],
      },
      {
        label: 'Reprogramming Tools',
        courses: [
          {
            title: 'Emotional Mastery & Belief Reprogramming',
            thumbnail: '/images/course-emotional-mastery-alt.png',
          },
          {
            title: '21 Tools to Reprogram the Subconscious Mind',
            thumbnail: '/images/course-21-tools-reprogramming.jpg',
          },
          {
            title: 'Reprogramming Core Wounds Guided Audio',
            thumbnail: '/images/course-reprogramming-core-wounds-audio.jpg',
          },
          {
            title: 'Reprogramming Attachment Styles Guided Audio',
            thumbnail: '/images/course-reprogramming-attachment-styles-audio.jpg',
          },
          {
            title: 'Reparenting & Self-Soothing Guided Audio',
            thumbnail: '/images/course-reparenting-audio.jpg',
          },
        ],
      },
      {
        label: 'Attachment Styles',
        courses: [
          { title: 'Fearful Avoidant Intro Course', thumbnail: '/images/course-fa-to-sa.jpg' },
          { title: 'Anxious Preoccupied Intro Course', thumbnail: '/images/course-ap-to-sa.jpg' },
          { title: 'Dismissive Avoidant Intro Course', thumbnail: '/images/course-da-to-sa.jpg' },
          {
            title: 'Fearful Avoidant Advanced Course',
            thumbnail: '/images/course-fa-advance.jpg',
          },
          {
            title: 'Anxious Preoccupied Advanced Course',
            thumbnail: '/images/course-ap-advance.jpg',
          },
          {
            title: 'Dismissive Avoidant Advanced Course',
            thumbnail: '/images/course-da-advance.jpg',
          },
        ],
      },
    ],
  },
}
