export const QUIZ_DETAILED_QUESTIONS = [
  {
    question: 'What is your current relationship status?',
    association: 'relationship',
    options: ['Single', 'In a relationship', 'Divorced or seperated', 'Other'],
  },
  {
    question: 'Why do you want to learn about attachment theory?',
    association: 'relationshipIntend',
    options: ['To understand myself better', 'To understand my partner better'],
  },
  {
    question: 'How would you rate your current satisfaction in your relationship?',
    association: 'relationshipSatisfaction',
    options: [
      'We’re very happy',
      'Things are not how I would like them to be',
      'The relationship may be nearing a breakup',
    ],
  },
  {
    question: 'How much do you know about attachment theory?',
    association: 'attachment',
    options: [
      'First time hearing about it',
      'I know a little bit (watched videos, done some reading)',
      'I feel well-versed in it',
      'I consider myself to be an expert on it',
    ],
  },
  {
    question: 'What is your relationship status?',
    association: 'relationship',
    options: [
      'Short term relationship (less than one year)',
      'Long term relationship (more than one year)',
      'Married',
    ],
  },
  {
    question: 'What is your relationship status?',
    association: 'relationship',
    options: ['Single', 'Recently ended a relationship', 'Still looking'],
  },
]

export const EXTERNALQUIZQUESTIONS = [
  {
    question: 'Are you in a relationship?',
    association: 'relationshipStatus',
    options: ['yes', 'no'],
  },
  {
    question:
      'I can be very emotionally present with others (friends, family, partners, strangers), but it takes me a while to build trust and share vulnerable things about myself.',
    association: 'fa',
  },
  {
    question: 'I often put other people in my life on a big pedestal. (Partner, friends, family)',
    association: 'ap',
  },
  {
    question:
      'I feel naturally comfortable and safe expressing my feelings and needs to loved ones.',
    association: 'sec',
  },
  {
    question: 'I feel very upset when others infringe on my need for space or time alone. ',
    association: 'da',
  },
  {
    question:
      "I am willing to work through challenges in a relationship before suddenly trying to leave the relationship itself. (If you're not in a relationship, think of how you would handle conflict in a partnership.)",
    association: 'sec',
  },
  {
    question: 'I tend to be out of touch with my emotions quite frequently.',
    association: 'da',
  },
  {
    question:
      "I am very attuned to others' needs and often put them before my own and resent it later.",
    association: 'fa',
  },
  {
    question:
      'I constantly want to be emotionally closer to my partner. This can also apply to my close friendships or romantic interests.',
    association: 'ap',
  },
  {
    question: 'I am effective at compromising and communicating.',
    association: 'sec',
  },
  {
    question:
      'It is very difficult for me to set boundaries unless I am angry. I can sometimes set excessive boundaries and push people away too dramatically out of anger.',
    association: 'fa',
  },
  {
    question:
      'If I notice my partner showing any signs of coldness, I panic and want to get closer as quickly as possible. This often happens to me in friendships as well.',
    association: 'ap',
  },
  {
    question:
      'It is not uncommon for me to experience inward emotional turbulence throughout the duration of my romantic relationship. This applies to close family members as well.',
    association: 'fa',
  },
  {
    question:
      'I often feel very hot or very cold towards my partner or family members. I tend to operate in extremes in how I relate to others.',
    association: 'fa',
  },
  {
    question: 'I know that I am worthy of a healthy, happy relationship. ',
    association: 'sec',
  },
  {
    question:
      'When I feel hurt by a loved one, I often have a strong fight or flight response. I find myself wanting to push this person as far away as possible. (Friends, family, romantic relationship).',
    association: 'fa',
  },
  {
    question:
      'I do not feel as though I need anything from my romantic partner or loved ones. It can be difficult to conceptualize how others would meet a lot of my needs.',
    association: 'da',
  },
  {
    question: 'I do not enjoy being out of romantic relationships. I often fear being alone.',
    association: 'ap',
  },
  {
    question:
      "If a loved one's behavior hurts me, I will express my feelings and try to understand what caused them to act that way. ",
    association: 'sec',
  },
  {
    question:
      'I hunger for closeness, but I fear the emotional difficulty of it at the same time (friends, family, romantic partners). ',
    association: 'fa',
  },
  {
    question:
      'I do not like making social plans with others in advance. I often fear being trapped by commitments with other people. ',
    association: 'da',
  },
  {
    question: 'I find that setting boundaries comes naturally to me. ',
    association: 'sec',
  },
  {
    question: 'I focus much more on the relationships in my life than I do on myself.',
    association: 'ap',
  },
  {
    question: 'I often feel protective over my space, privacy and belongings. ',
    association: 'da',
  },
  {
    question:
      'I generally feel invaded when my partner or loved ones demand too much physical affection. ',
    association: 'da',
  },
  {
    question:
      'I would prefer to spend most of my free time with my partner if I were to be in a romantic relationship. It would be hard for me to want to do things separately.',
    association: 'ap',
  },
  {
    question: 'I feel that it is easy to be vulnerable with my romantic partner or loved ones.',
    association: 'sec',
  },
  {
    question:
      'I find that my partner or loved ones usually emotionally recover from conflict before I do. ',
    association: 'da',
  },
  {
    question: 'I deeply fear being abandoned by my partner or love interests. ',
    association: 'ap',
  },
  {
    question: 'I have previous knowledge of attachment theory.',
    association: 'attachment',
  },
  {
    question: 'How old are you?',
    association: 'age',
    options: ['18-24', '25-34', '35-44', '45-54', '55+'],
  },
  {
    question: 'What is your gender?',
    association: 'gender',
    options: ['Male', 'Female', 'Other', 'Prefer not to say'],
  },
]

export const REGULAR_COPY = {
  header: 'The Attachment Style Quiz',
  subheader_mobile: 'TAKE OUR FREE QUIZ TO FIND OUT YOUR ATTACHMENT STYLE!',
  subheader_desktop: 'TAKE OUR FREE QUIZ TO FIND OUT YOUR ATTACHMENT STYLE!',
  headline: 'Start the Quiz Now!',
  breakthroughs_header_mobile: 'Improve Your Relationships Today!',
  copy: `Take this quiz to determine your attachment style. Knowing your attachment style is the first step to creating more meaningful connections, feeling valued and developing more harmony in all of your relationships!`,
  button_label: 'START QUIZ',
  attachment_copy: `Attachment Theory is the single largest predictor of success in your relationships, whether they are
  romantic, familial or platonic.

  There are four types of Attachment Styles, all with different characteristics:`,
}

export const INTENT_COPY = {
  header: 'The Attachment Style Diagnostic Tool',
  subheader_mobile:
    'What is your attachment style? Use our free, easy-to-use tool to find out now!',
  subheader_desktop:
    'What is your attachment style? Use our free, easy-to-use tool to find out now!',
  subheader_second: '',
  headline: 'Heal Your Relationship and Feel More Connected Than Ever!',
  breakthroughs_header_mobile:
    'Understand Why Your Relationships may be Failing - and How You Can Ensure They Succeed!',
  copy: `If you’ve been feeling helpless, stuck or frustrated by the relationships in your life, it is likely due to your attachment style. Our free diagnostic tool will tell you in minutes what your attachment style is, how it is hurting your relationships, and the exact steps you can take to build the best relationships of your life.
  \nJoin over 1,000,000 other learners who have taken our 5-minute free evaluation and who have transformed their relationships from being on the rocks to feeling like they’re back in the honeymoon stage. `,
  button_label: 'BEGIN MY ASSESSMENT',
  attachment_copy: `Attachment Theory is the single largest predictor of success in your relationships, whether they are
  romantic, familial or platonic.

  There are four types of Attachment Styles, all with different characteristics:`,
}
