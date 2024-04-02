import Link from 'next/link'
import { TOptions, TQuizQuestions } from './useAttachmentQuiz'
import { Storage } from '@/modules/Storage'
import { IconName } from '@fortawesome/fontawesome-common-types'

export const quizPillSelectOptions = [
  'Anxiety',
  'Stress',
  'Loneliness',
  'Avoidance',
  'Self-Esteem',
  'Relationship Challenge',
] as const

export const defaultQuizQuestionOptions: TOptions = [
  {
    heading: 'Disagree',
    iconName: 'face-frown',
    value: 0,
  },
  {
    iconName: 'circle',
    value: 0,
  },
  {
    heading: 'Neutral',
    iconName: 'face-meh',
    value: 0,
  },
  {
    iconName: 'circle',
    value: 0.5,
  },
  {
    heading: 'Agree',
    iconName: 'face-smile',
    value: 1,
  },
]

export const defaultQuestions: TQuizQuestions = [
  {
    heading: 'Introduce Yourself',
    subheading:
      'Share your name, email, and tell us about your attachment style knowledge, so we can create you a personalized experience.',
  },
  {
    heading: "What's your name?",
    subheading: "We'll use this to personalize your experience.",
    formInputData: {
      type: 'text',
      autocomplete: 'name',
      placeholder: 'Type your name here',
    },
  },
  {
    heading: 'Nice to meet you!',
    imgSrc: '/icons/wink-face.svg',
    duration: 2,
    headingConstructor: () => {
      const userFullName = Storage.get('userFullName')
      if (userFullName) return `Nice to meet you ${userFullName}!`
    },
  },
  {
    heading: 'What is your email address?',
    subheading: (
      <i>
        Your email saves your personalized report so you can see it later. We store your information
        securely, in line with our{' '}
        <Link
          className="underline"
          href="https://university.personaldevelopmentschool.com/pages/privacy"
          target="_blank">
          privacy policy
        </Link>{' '}
        and{' '}
        <Link
          className="underline"
          href="https://university.personaldevelopmentschool.com/pages/terms"
          target="_blank">
          terms & conditions.
        </Link>
      </i>
    ),
    formInputData: {
      type: 'email',
      autocomplete: 'email',
      placeholder: 'Type your email here',
    },
  },
  {
    type: 'OptionSelect',
    heading: 'When it comes to attachment styles, you are:',
    'data-key': 'attachment-knowledge',
    subheading: 'Why we ask?',
    options: [
      {
        heading: 'Informed',
        subheading: 'You know more than the average person.',
        iconName: 'face-smile',
        value: 'informed',
      },
      {
        heading: 'Curious',
        subheading: 'You know a bit, but want to know more.',
        iconName: 'face-raised-eyebrow',
        value: 'curious',
      },
      {
        heading: 'Skeptical',
        subheading: 'You’re not convinced yet.',
        iconName: 'face-confused',
        value: 'skeptical',
      },
    ],
  },
  {
    heading: `We'll reward that curiosity. But first, let's get to know you!`,
  },
  {
    heading: 'Getting to Know You: Unveiling the Basics',
    subheading:
      'Unveil the essentials and shape your personalized journey by sharing your age, gender, and relationship status!',
  },
  {
    heading: 'How old are you?',
    subheading: 'Why we ask?',
    formInputData: {
      autocomplete: 'age',
      placeholder: 'Type your age here',
      type: 'number',
    },
  },
  {
    type: 'OptionSelect',
    'data-key': 'gender',
    heading: 'What is your gender?',
    subheading: 'Why we ask?',
    options: [
      { heading: 'Male', iconName: 'user-vneck-hair', value: 'male' },
      { heading: 'Female', iconName: 'user-vneck-hair-long', value: 'female' },
      { heading: 'Other', iconName: 'user-vneck', value: 'other' },
    ],
  },
  {
    type: 'OptionSelect',
    'data-key': 'relationship-status',
    heading: 'What is your current situation?',
    subheading: 'Why we ask?',
    options: [
      { heading: "I'm Single", iconName: 'user', value: 'single' },
      { heading: "I'm in a relationship", iconName: 'heart', value: 'relationship' },
      { heading: "I'm married", iconName: 'rings-wedding', value: 'married' },
    ],
  },
  {
    heading: 'Goals',
    subheading:
      "Share your goals with us, and let's pinpoint the areas where you need assistance, ensuring tailored recommendations to support your journey.",
  },
  {
    type: 'PillSelect',
    'data-key': 'focus-areas',
    heading: 'Choose the areas you want to focus',
    subheading: "Select all that matter to you, and we'll explore them together.",
    options: quizPillSelectOptions,
  },
  {
    type: 'OptionSelect',
    'data-key': 'relationship-satisfaction',
    heading: 'How would you rate your current satisfaction in your relationship?',
    options: [
      {
        heading: 'Unsatisfied',
        iconName: 'face-frown',
        value: 'unsatisfied',
      },
      {
        iconName: 'circle',
        value: 'somewhat-unsatisfied',
      },
      {
        heading: 'Neutral',
        iconName: 'face-meh',
        value: 'neutral',
      },
      {
        iconName: 'circle',
        value: 'somewhat-satisfied',
      },
      {
        heading: 'Satisfied',
        iconName: 'face-smile',
        value: 'satisfied',
      },
    ],
  },
  {
    heading: 'The Attachment Quiz',
    subheading: 'Answer each question as best as you can to uncover your attachment style!',
    duration: 2,
  },
  {
    heading:
      'I can be very emotionally present with others (friends, family, partners, strangers), but it takes me a while to build trust and share vulnerable things about myself.',
    association: 'fa',
  },
  {
    heading: 'I often put other people in my life on a big pedestal. (Partner, friends, family)',
    association: 'ap',
  },
  {
    heading:
      'I feel naturally comfortable and safe expressing my feelings and needs to loved ones.',
    association: 'sa',
  },
  {
    heading: 'I feel very upset when others infringe on my need for space or time alone. ',
    association: 'da',
  },
  {
    heading:
      "I am willing to work through challenges in a relationship before suddenly trying to leave the relationship itself. (If you're not in a relationship, think of how you would handle conflict in a partnership.)",
    association: 'sa',
  },
  {
    heading: 'I tend to be out of touch with my emotions quite frequently.',
    association: 'da',
  },
  {
    heading:
      "I am very attuned to others' needs and often put them before my own and resent it later.",
    association: 'fa',
  },
  {
    heading:
      'I constantly want to be emotionally closer to my partner. This can also apply to my close friendships or romantic interests.',
    association: 'ap',
  },
  {
    heading: 'I am effective at compromising and communicating.',
    association: 'sa',
  },
  {
    heading:
      'It is very difficult for me to set boundaries unless I am angry. I can sometimes set excessive boundaries and push people away too dramatically out of anger.',
    association: 'fa',
  },
  {
    heading:
      'If I notice my partner showing any signs of coldness, I panic and want to get closer as quickly as possible. This often happens to me in friendships as well.',
    association: 'ap',
  },
  {
    heading:
      'It is not uncommon for me to experience inward emotional turbulence throughout the duration of my romantic relationship. This applies to close family members as well.',
    association: 'fa',
  },
  {
    heading:
      'I often feel very hot or very cold towards my partner or family members. I tend to operate in extremes in how I relate to others.',
    association: 'fa',
  },
  {
    heading: 'I know that I am worthy of a healthy, happy relationship. ',
    association: 'sa',
  },
  {
    heading:
      'When I feel hurt by a loved one, I often have a strong fight or flight response. I find myself wanting to push this person as far away as possible. (Friends, family, romantic relationship).',
    association: 'fa',
  },
  {
    heading:
      'I do not feel as though I need anything from my romantic partner or loved ones. It can be difficult to conceptualize how others would meet a lot of my needs.',
    association: 'da',
  },
  {
    heading: 'I do not enjoy being out of romantic relationships. I often fear being alone.',
    association: 'ap',
  },
  {
    heading:
      "If a loved one's behavior hurts me, I will express my feelings and try to understand what caused them to act that way. ",
    association: 'sa',
  },
  {
    heading:
      'I hunger for closeness, but I fear the emotional difficulty of it at the same time (friends, family, romantic partners). ',
    association: 'fa',
  },
  {
    heading:
      'I do not like making social plans with others in advance. I often fear being trapped by commitments with other people. ',
    association: 'da',
  },
  {
    heading: 'I find that setting boundaries comes naturally to me. ',
    association: 'sa',
  },
  {
    heading: 'I focus much more on the relationships in my life than I do on myself.',
    association: 'ap',
  },
  {
    heading: 'I often feel protective over my space, privacy and belongings. ',
    association: 'da',
  },
  {
    heading:
      'I generally feel invaded when my partner or loved ones demand too much physical affection. ',
    association: 'da',
  },
  {
    heading:
      'I would prefer to spend most of my free time with my partner if I were to be in a romantic relationship. It would be hard for me to want to do things separately.',
    association: 'ap',
  },
  {
    heading: 'I feel that it is easy to be vulnerable with my romantic partner or loved ones.',
    association: 'sa',
  },
  {
    heading:
      'I find that my partner or loved ones usually emotionally recover from conflict before I do. ',
    association: 'da',
  },
  {
    heading: 'I deeply fear being abandoned by my partner or love interests. ',
    association: 'ap',
  },
  {
    type: 'OptionSelect',
    'data-key': 'quiz-discovery-method',
    heading: 'How did you discover the quiz or learn about the Personal Development School?',
    subheading: 'Why we ask?',
    options: [
      {
        heading: 'Online Search',
        iconName: 'search-plus',
        value: 'online-search',
      },
      {
        heading: 'Friend/Family Referral',
        iconName: 'face-smile-plus',
        value: 'referral',
      },
      {
        heading: 'Other',
        iconName: 'plus-circle',
        value: 'other',
      },
    ],
  },
  {
    heading: (
      <>
        We're crafting <strong>your personalized results</strong> – just a moment longer! Your
        well-being is our priority.
      </>
    ),
    duration: 3,
    screens: [
      {
        heading: (
          <>
            We reference over <strong>1000 case studies</strong> when we develop our products
          </>
        ),
        duration: 3,
      },
      {
        heading: (
          <>
            <strong>98% of our customers</strong> say their relationships are getting better after
            joining The Personal Development School
          </>
        ),
        duration: 3,
      },
    ],
  },
]

export const offerSectionSelfImprovementSlides = [
  {
    heading: 'Take the Course',
    subheading: 'Start your journey with our fundamental course – The Handbook For A Better Life.',
  },
  {
    heading: 'Say Hi to the Community',
    subheading:
      'Connect, share experiences, and embark on your journey with like-minded individuals!',
  },
  {
    heading: 'Learn New Exercises',
    subheading:
      'Practice real-world scenarios and reinforce your learning through practical exercises.',
  },
  {
    heading: 'Practice in Real-Life',
    subheading: "Apply what you've learned in everyday life with your friends and new community.",
  },
  {
    heading: 'Finish the Course',
    subheading: "You're almost there! Complete the course and show what you've learned.",
  },
  {
    heading: 'Experience Improvements in Your Life',
    subheading:
      'Embrace and reflect on the substantial improvements in your life and relationship dynamics.',
  },
  {
    heading: 'Live Coaching with Thais',
    subheading:
      'Continue to gain more transformative insights and expert guidance in live webinars with Thais Gibson.',
  },
]

export const mockupSectionCards = [
  {
    heading: 'Courses',
    imgSrc: '/images/AttachmentQuizResults/V2/results-mockup-1.png',
    imgAlt:
      "A mockup of the PDS dashboard on a computer monitor and a mockup of one of Thais' coursers on a phone.",
    listItems: [
      'Uncover where your fears comes from and how to challenge them.',
      'Learn to build healthy coping strategies and implement healthy patterns.',
      'Explore your relationship and personal needs and how to reach them.',
    ],
  },
  {
    heading: 'Webinars',
    imgSrc: '/images/AttachmentQuizResults/V2/results-mockup-2.png',
    imgAlt:
      'A mockup of Thais teaching a webinar on a computer monitor and a mockup of the webinar library on a phone.',
    listItems: [
      'Attend live webinars to learn more insights while connecting with like-minded people.',
      'Join live Q&A webinars to ask personal questions you need answers to!',
      'Explore our webinar library to watch webinars about challenges, outcomes, and solutions.',
    ],
  },
  {
    heading: 'Community',
    imgSrc: '/images/AttachmentQuizResults/V2/results-mockup-3.png',
    imgAlt:
      'A mockup of the Community forum on a computer monitor and a mockup of a PDS social event on a phone.',
    listItems: [
      'Interact with certified coaches and learn about changing our attachment style.',
      'Feel supported and loved by joining our welcoming and friendly online community.',
      'Discuss your challenges, share your journey, and develop healthy relationships with fellow members.',
    ],
  },
]

export const courseCommunityOutcomes = [
  'Create Lasting Connections',
  'Find the Right Partner',
  'Get More Second Dates',
  'Save Your Relationship',
  'Repair Struggling Relationships',
  'Overcome Painful Self-Sabotage',
  'Heal After a Breakup',
  'Get Your Ex Back',
  'Stop Getting Abandoned',
]

export const aapWhatsIncluded = [
  'Unlimited Access to 65+ Video Courses',
  'On-Demand Videos, Available Anywhere, 24/7',
  'Interactive Workbooks and Exercises',
  'Weekly Live Webinars and Q&As with Thais',
  'Support Groups',
  'Form Connections with Our Welcoming Community',
  'Private Online Forums, Facebook Groups ',
  'Supportive Trained IAT-Certified Coaches',
]

export const toolsStrategies = [
  {
    heading: 'Take the Quiz',
    body: 'Congratulations – you’ve discovered you have an anxious preoccupied attachment style.',
  },
  {
    heading: 'Understand Your Attachment Style',
    body: 'Scroll down for insights and check your email for your free personalized report.',
  },
  {
    heading: 'Learn Powerful Tools',
    body: 'Take our suggested courses to practice powerful tools to change your attachment style.',
  },
  {
    heading: 'Build Your Dream Relationships',
    body: 'Become securely attached and create thriving relationships in your life.',
  },
]

export const faqCopy = [
  {
    question: 'How exactly does The Personal Development School work?',
    answer: `It’s really simple, actually. Just choose the course or program you want to work on and do it in your own time. Try the tools 
      and strategies in real life and notice any changes in your relationships or life. You can then sign up for a weekly webinar or 
      Q&A session with Thais to learn more about a specific topic or get a question answered. Then, take a new course to improve another 
      area of your life or relationship. You’ll always have the opportunity to become better and better with us by your side.`,
  },
  {
    question: 'How can I benefit from Thais Gibson’s approach?',
    answer: `Our approach is a comprehensive, easy-to-understand, and simple-to-follow journey to help you achieve your personal and 
    relationship goals. There is no limit to what you can learn and achieve with our courses, programs, and memberships. You’ll benefit 
    by knowing your behaviors, overcoming challenges, and creating new habits that empower your relationships and life. `,
  },
  {
    question: 'What do I get inside The Personal Development School?',
    answer: [
      `1. Unlimited access to 65+ video courses and programs that can be completed anytime, anywhere, and on any device. We always add new 
        courses to cover all scenarios. `,
      `2. Workbooks that contain powerful concepts, tools, and strategies to help form new behaviors, beliefs, and coping mechanisms. Thais 
        will guide you through each workbook, so you can easily practice and use them in real life.`,
      `3. Live weekly webinars and Q&As hosted by Thais or certified coaches. Missed one? No stress; you can access it via our Webinar Library 
        to watch them anytime.`,
      `4. Global community. We have members from over 113+ countries and you can meet them through our online community and support groups.`,
      `5. Online support groups hosted by our certified coaches that provide you with a chance to expand your knowledge.`,
    ],
  },
  {
    question: 'Can I have a one-on-one session with Thais Gibson?',
    answer: `Our courses and programs are designed to be done in your own time, while our webinars and Q&As encourage group discussion. But you 
      can interact with Thais during her live weekly webinars and Q&As. We publish the schedule of upcoming webinars in our Membership dashboard.`,
  },
  {
    question:
      'Will I be able to take full advantage of the program, even if I don’t live in the UK or US?',
    answer: `Yes, you certainly can. Our courses, programs, webinars, and Q&As are specifically designed so anyone worldwide can take them. We have 
      members in over 113+ countries.`,
  },
]

type TFooterCard = {
  heading: string
  body: string
  iconName: IconName
}

export const footerCards: TFooterCard[] = [
  {
    heading: 'Start Your Journey',
    body: 'We’ll create an inspiring and life-changing roadmap tailored to your attachment style and goals.',
    iconName: 'rocket',
  },
  {
    heading: 'Experience Real Change',
    body: 'Thais will guide you step-by-step, empowering you to overcome challenges and experience positive outcomes.',
    iconName: 'shield-check',
  },
  {
    heading: 'Lifelong Support',
    body: 'Join our global community of like-minded members and certified coaches for a lifetime of support.',
    iconName: 'hand-holding-seedling',
  },
]
