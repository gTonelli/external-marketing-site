//IAT Quiz Page + AttachmentQuiz Page
export const EXTERNALQUIZQUESTIONS = [
  {
    question: 'Are you in a relationship?',
    association: 'relationshipStatus',
    associationType: 'userInfo',
    options: ['Yes', 'No'],
  },
  {
    question:
      'I can be very emotionally present with others (friends, family, partners, strangers), but it takes me a while to build trust and share vulnerable things about myself.',
    association: 'fa',
    associationType: 'quizQuestion',
  },
  {
    question: 'I often put other people in my life on a big pedestal. (Partner, friends, family)',
    association: 'ap',
    associationType: 'quizQuestion',
  },
  {
    question:
      'I feel naturally comfortable and safe expressing my feelings and needs to loved ones.',
    association: 'sec',
    associationType: 'quizQuestion',
  },
  {
    question: 'I feel very upset when others infringe on my need for space or time alone. ',
    association: 'da',
    associationType: 'quizQuestion',
  },
  {
    question:
      "I am willing to work through challenges in a relationship before suddenly trying to leave the relationship itself. (If you're not in a relationship, think of how you would handle conflict in a partnership.)",
    association: 'sec',
    associationType: 'quizQuestion',
  },
  {
    question: 'I tend to be out of touch with my emotions quite frequently.',
    association: 'da',
    associationType: 'quizQuestion',
  },
  {
    question:
      "I am very attuned to others' needs and often put them before my own and resent it later.",
    association: 'fa',
    associationType: 'quizQuestion',
  },
  {
    question:
      'I constantly want to be emotionally closer to my partner. This can also apply to my close friendships or romantic interests.',
    association: 'ap',
    associationType: 'quizQuestion',
  },
  {
    question: 'I am effective at compromising and communicating.',
    association: 'sec',
    associationType: 'quizQuestion',
  },
  {
    question:
      'It is very difficult for me to set boundaries unless I am angry. I can sometimes set excessive boundaries and push people away too dramatically out of anger.',
    association: 'fa',
    associationType: 'quizQuestion',
  },
  {
    question:
      'If I notice my partner showing any signs of coldness, I panic and want to get closer as quickly as possible. This often happens to me in friendships as well.',
    association: 'ap',
    associationType: 'quizQuestion',
  },
  {
    question:
      'It is not uncommon for me to experience inward emotional turbulence throughout the duration of my romantic relationship. This applies to close family members as well.',
    association: 'fa',
    associationType: 'quizQuestion',
  },
  {
    question:
      'I often feel very hot or very cold towards my partner or family members. I tend to operate in extremes in how I relate to others.',
    association: 'fa',
    associationType: 'quizQuestion',
  },
  {
    question: 'I know that I am worthy of a healthy, happy relationship. ',
    association: 'sec',
    associationType: 'quizQuestion',
  },
  {
    question:
      'When I feel hurt by a loved one, I often have a strong fight or flight response. I find myself wanting to push this person as far away as possible. (Friends, family, romantic relationship).',
    association: 'fa',
    associationType: 'quizQuestion',
  },
  {
    question:
      'I do not feel as though I need anything from my romantic partner or loved ones. It can be difficult to conceptualize how others would meet a lot of my needs.',
    association: 'da',
    associationType: 'quizQuestion',
  },
  {
    question: 'I do not enjoy being out of romantic relationships. I often fear being alone.',
    association: 'ap',
    associationType: 'quizQuestion',
  },
  {
    question:
      "If a loved one's behavior hurts me, I will express my feelings and try to understand what caused them to act that way. ",
    association: 'sec',
    associationType: 'quizQuestion',
  },
  {
    question:
      'I hunger for closeness, but I fear the emotional difficulty of it at the same time (friends, family, romantic partners). ',
    association: 'fa',
    associationType: 'quizQuestion',
  },
  {
    question:
      'I do not like making social plans with others in advance. I often fear being trapped by commitments with other people. ',
    association: 'da',
    associationType: 'quizQuestion',
  },
  {
    question: 'I find that setting boundaries comes naturally to me. ',
    association: 'sec',
    associationType: 'quizQuestion',
  },
  {
    question: 'I focus much more on the relationships in my life than I do on myself.',
    association: 'ap',
    associationType: 'quizQuestion',
  },
  {
    question: 'I often feel protective over my space, privacy and belongings. ',
    association: 'da',
    associationType: 'quizQuestion',
  },
  {
    question:
      'I generally feel invaded when my partner or loved ones demand too much physical affection. ',
    association: 'da',
    associationType: 'quizQuestion',
  },
  {
    question:
      'I would prefer to spend most of my free time with my partner if I were to be in a romantic relationship. It would be hard for me to want to do things separately.',
    association: 'ap',
    associationType: 'quizQuestion',
  },
  {
    question: 'I feel that it is easy to be vulnerable with my romantic partner or loved ones.',
    association: 'sec',
    associationType: 'quizQuestion',
  },
  {
    question:
      'I find that my partner or loved ones usually emotionally recover from conflict before I do. ',
    association: 'da',
    associationType: 'quizQuestion',
  },
  {
    question: 'I deeply fear being abandoned by my partner or love interests. ',
    association: 'ap',
    associationType: 'quizQuestion',
  },
  {
    question: 'How familiar are you with attachment theory?',
    association: 'attachmentFamiliarity',
    associationType: 'userInfo',
    options: ['Not at all', 'A little', 'Somewhat familiar', 'Very familiar'],
  },
  {
    question: 'What are you hoping to acheive today?',
    association: 'intent',
    associationType: 'userInfo',
    options: [
      'Figure out how to get my ex back',
      'Learn more about myself and heal (self-esteem, anxiety, depression, etc.)',
      'Improve my current relationship',
      "Understand the person I'm dating",
      'Finding a compatible partner',
    ],
  },
  {
    question: 'How old are you?',
    association: 'age',
    associationType: 'userInfo',
    options: ['Prefer not to say', '18-24', '25-34', '35-44', '45-54', '55+'],
  },
  {
    question: 'What is your gender?',
    association: 'gender',
    associationType: 'userInfo',
    options: ['Prefer not to say', 'Male', 'Female', 'Other'],
  },
]

export const SHORTQUIZQUESTIONS = [
  {
    question: 'Are you in a relationship?',
    association: 'relationshipStatus',
    associationType: 'userInfo',
    options: ['Yes', 'No'],
  },
  {
    // 1
    question:
      'I often express anger very strongly when I feel hurt, powerless, or betrayed by someone I love (a potential romantic partner, family member, or close friend).',
    association: 'fa',
    associationType: 'quizQuestion',
  },
  {
    // 2
    question:
      'I don’t like when people I am dating set boundaries with me because it feels like I am being rejected.',
    association: 'ap',
    associationType: 'quizQuestion',
  },
  {
    // 3
    question:
      'I feel conflict is resolvable in close relationships and feel equipped to work through problems effectively.',
    association: 'sec',
    associationType: 'quizQuestion',
  },
  {
    // 4
    question:
      'When I dated people in the past, I often felt like I couldn’t decide whether to stay in or leave relationships. This constant flip-flopping felt exhausting.',
    association: 'fa',
    associationType: 'quizQuestion',
  },
  {
    // 5
    question:
      'I can be cold and stand-offish at times when I don’t know others very well. It takes me time to lower my guard when I’m getting to know someone romantically.',
    association: 'da',
    associationType: 'quizQuestion',
  },
  {
    // 6
    question:
      'I am very present when I am with people in person, but I can be distant or avoidant when I am apart from them.',
    association: 'fa',
    associationType: 'quizQuestion',
  },
  {
    question: 'I know that I am worthy of healthy, happy relationships in my life.', // 7
    association: 'sec',
    associationType: 'quizQuestion',
  },
  {
    // 8
    question:
      'When I am dating someone, I often wish that my partner would take care of their own emotions and needs and involve me less.',
    association: 'da',
    associationType: 'quizQuestion',
  },
  {
    // 9
    question:
      'When I am dating someone and get into an argument, I often think about leaving the relationship immediately and wanting to escape.',
    association: 'fa',
    associationType: 'quizQuestion',
  },
  {
    // 10
    question:
      'I do not feel as though I need much from someone I am dating, and I do not like when people put pressure on me to meet too quickly.',
    association: 'da',
    associationType: 'quizQuestion',
  },
  {
    // 11
    question:
      'In any close relationship, I am good at listening to other people’s needs and expressing my own.',
    association: 'sec',
    associationType: 'quizQuestion',
  },
  {
    // 12
    question:
      'When I start dating someone and developing feelings, I can become very afraid that they will lose feelings and want to end the relationship with me.',
    association: 'ap',
    associationType: 'quizQuestion',
  },
  {
    // 13
    question:
      'I generally do not like being single and often spend time constantly looking for a romantic partner because it is hard for me to be alone. If I’m in a relationship, I want to be with my partner constantly.',
    association: 'ap',
    associationType: 'quizQuestion',
  },
  {
    // 14
    question:
      'If someone’s behavior hurts me in a relationship, I will express my feelings respectfully and try to understand what caused them to act that way.',
    association: 'sec',
    associationType: 'quizQuestion',
  },
  {
    // 15
    question:
      'When I am dating someone, I can easily find myself people-pleasing and hungering for their approval.',
    association: 'ap',
    associationType: 'quizQuestion',
  },
  {
    // 16
    question:
      'I often lose feelings in relationships when people expect a commitment too soon. I like to move slower than most others when I start dating someone.',
    association: 'da',
    associationType: 'quizQuestion',
  },
  {
    question: 'I have previous knowledge of attachment theory.',
    association: 'attachment',
    associationType: 'userInfo',
  },
  {
    question: 'How old are you?',
    association: 'age',
    associationType: 'userInfo',
    options: ['Prefer not to say', '18-24', '25-34', '35-44', '45-54', '55+'],
  },
  {
    question: 'What is your gender?',
    association: 'gender',
    associationType: 'userInfo',
    options: ['Prefer not to say', 'Male', 'Female', 'Other'],
  },
]

export const QUIZ_DETAILED_QUESTIONS = [
  {
    question: 'What is your current relationship status?',
    association: 'relationship',
    associationType: 'userInfo',
    options: ['Single', 'In a relationship', 'Divorced or seperated', 'Other'],
  },
  {
    question: 'Why do you want to learn about attachment theory?',
    association: 'relationshipIntend',
    associationType: 'userInfo',
    options: ['To understand myself better', 'To understand my partner better'],
  },
  {
    question: 'How would you rate your current satisfaction in your relationship?',
    association: 'relationshipSatisfaction',
    associationType: 'userInfo',
    options: [
      'Prefer not to say',
      'We’re very happy',
      'Things are not how I would like them to be',
      'The relationship may be nearing a breakup',
    ],
  },
  {
    question: 'How much do you know about attachment theory?',
    association: 'attachment',
    associationType: 'userInfo',
    options: [
      'Prefer not to say',
      'First time hearing about it',
      'I know a little bit (watched videos, done some reading)',
      'I feel well-versed in it',
      'I consider myself to be an expert on it',
    ],
  },
  {
    question: 'What is your relationship status?',
    association: 'relationship',
    associationType: 'userInfo',
    options: [
      'Prefer not to say',
      'Short term relationship (less than one year)',
      'Long term relationship (more than one year)',
      'Married',
    ],
  },
  {
    question: 'What is your relationship status?',
    association: 'relationship',
    associationType: 'userInfo',
    options: ['Prefer not to say', 'Single', 'Recently ended a relationship', 'Still looking'],
  },
]

export const QUIZ_STATS = [
  'Built 1.71x stronger relationships, and now enjoy more trust, joy, and lasting connection.',
  'Coping Skills: Our members let go of harmful habits and saw a 53.8% drop in toxic coping mechanisms like binging, numbing, and spiraling.',
  'Felt lighter and more in control, with a 50.6% decrease in daily emotional triggers, enjoying fewer moments of overwhelm and more moments of calm.',
  'Uncovered the root causes of their patterns, gaining 3.38x more clarity about their core wounds.',
  'Approached tough talks with ease and composure, improving their tough-conversation skills by 2.01x.',
  'Became 2.24x stronger at setting healthy boundaries, and are now protecting their energy, reducing conflict, and building self-respect.',
  'Got 2.97x better at recognizing and meeting their needs, leading to more fulfillment and less self-sacrifice.',
  'Boosted their ability to self-regulate by 2.62x and are now staying grounded through stress, frustration, and sadness.',
  'Handled disagreements with more care and cooperation, improving 2.6x in conflict management skills.',
  'Showed up for others with 1.28x more empathy and are now listening better, understanding deeper, and connecting more meaningfully.',
]
