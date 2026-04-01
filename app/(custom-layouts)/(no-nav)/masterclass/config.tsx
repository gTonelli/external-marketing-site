const titleSlugs = ['needs'] as const

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
      title: '',
      description: '',
      robots: 'index, follow, max-snippet:-1',
    },
    thankYouPage: {
      title: '',
      description: '',
      robots: 'noindex',
    },
    secondarySalesPage: {
      title: '',
      description: '',
      robots: 'noindex',
    },
    livePage: {
      title: '',
      description: '',
      robots: 'noindex',
    },
    replayPage: {
      title: '',
      description: '',
      robots: 'noindex',
    },
  },
}

export const COMMON_CONFIG = {
  studentStories: [
    {
      quote:
        '\u201cI learned more about myself from this course than 1.5 years of therapy \u2013 this is what I was trying to dig into with my therapist, but I didn\u2019t know what I was digging for. This course showed me. Thank you.\u201d',
      author: 'Dawn Neenan',
    },
    {
      quote: '\u201cHands down the most life changing content I\u2019ve ever come across.\u201d',
      author: 'Shannon S',
    },
    {
      quote:
        '\u201cI\u2019ve researched relationships most of my life, but I could never find anything that actually explained my dynamics. Thais explained exactly what I was experiencing \u2014 it felt like she was reading my mind. I\u2019m usually a bit of a skeptic, but I was hooked. I finally understood what was going on and how to fix it.\u201d',
      author: 'Melissa A',
    },
    {
      quote:
        '\u201c I am blown away by the content. So inspiring to know that I am not alone. Going in circles. This journey can end better than how I started. Time to go deeper to reprogram and become a better version of myself.\u201d',
      author: 'Karen Bellamy',
    },
    {
      quote:
        '\u201cJust WOW, how much is this helpful, and I am so grateful to be part of this course. Thank You, Thank You, Thank You. Great content.\u201d',
      author: 'Zuzana Van Haverbeke',
    },
    {
      quote:
        '\u201cI\u2019ve researched relationships most of my life, but I could never find anything that actually explained my dynamics. Thais explained exactly what I was experiencing \u2014 it felt like she was reading my mind. I\u2019m usually a bit of a skeptic, but I was hooked. I finally understood what was going on and how to fix it.\u201d',
      author: 'Melissa A',
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
          Best-selling author of <em>Learning Love</em>
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
}
