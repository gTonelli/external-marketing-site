export type TLoveLanguagesAssociation =
  | 'wordsOfAffirmation'
  | 'qualityTime'
  | 'actsOfService'
  | 'physicalTouch'
  | 'receivingGifts'
type TLoveLanguagesAssociationType = 'quizQuestion'
export type TLoveLanguagesQuestionOption = { label: string; association: TLoveLanguagesAssociation }
export type TLoveLanguagesQuestion = {
  question: string
  associationType: TLoveLanguagesAssociationType
  options: TLoveLanguagesQuestionOption[]
}

export const LOVE_LANGUAGES_QUIZ_QUESTIONS: TLoveLanguagesQuestion[] = [
  {
    question:
      'When you think about a really good day with someone you care about, what stands out most?',
    associationType: 'quizQuestion',
    options: [
      {
        label: 'Feeling fully engaged in whatever you were doing together',
        association: 'qualityTime',
      },
      { label: 'Feeling remembered in a small but tangible way', association: 'receivingGifts' },
      { label: 'Feeling relaxed and comfortable around them', association: 'physicalTouch' },
      { label: 'Knowing things were taken care of', association: 'actsOfService' },
      { label: 'Feeling understood or reassured', association: 'wordsOfAffirmation' },
    ],
  },
  {
    question: 'What tends to make you feel closest to someone over time?',
    associationType: 'quizQuestion',
    options: [
      { label: 'Shared experiences and focused time together', association: 'qualityTime' },
      { label: 'Clear expressions of care or interest', association: 'wordsOfAffirmation' },
      { label: 'Ease and warmth between you', association: 'physicalTouch' },
      { label: 'Reliability in everyday situations', association: 'actsOfService' },
      { label: 'Thoughtful gestures that show intention', association: 'receivingGifts' },
    ],
  },
  {
    question:
      'When someone wants to make it up to you after a misunderstanding, what matters most?',
    associationType: 'quizQuestion',
    options: [
      { label: 'Taking time to reconnect without distractions', association: 'qualityTime' },
      { label: 'Seeing changed behavior or follow-through', association: 'actsOfService' },
      { label: 'A small but intentional gesture', association: 'receivingGifts' },
      { label: 'Hearing sincere acknowledgment', association: 'wordsOfAffirmation' },
      { label: 'Re-establishing closeness', association: 'physicalTouch' },
    ],
  },
  {
    question: 'What makes you feel most secure in a relationship?',
    associationType: 'quizQuestion',
    options: [
      { label: 'Knowing you can rely on them', association: 'actsOfService' },
      {
        label: 'Feeling considered even when you’re not around',
        association: 'wordsOfAffirmation',
      },
      { label: 'Feeling at ease physically and emotionally', association: 'physicalTouch' },
      { label: 'Feeling prioritized in their schedule', association: 'qualityTime' },
      { label: 'Knowing where you stand with someone', association: 'receivingGifts' },
    ],
  },
  {
    question: 'Which of the following is most meaningful to you?',
    associationType: 'quizQuestion',
    options: [
      {
        label: 'When someone helps me with something around the house',
        association: 'actsOfService',
      },
      { label: 'Spending alone time with someone I love', association: 'qualityTime' },
      { label: 'When someone buys me something I needed', association: 'receivingGifts' },
      { label: 'When someone I love is physically affectionate', association: 'physicalTouch' },
      { label: 'When someone I’m close to encourages me', association: 'wordsOfAffirmation' },
    ],
  },
  {
    question: 'What makes you feel most connected to someone else?',
    associationType: 'quizQuestion',
    options: [
      {
        label: 'When someone communicates that they appreciate things about me',
        association: 'wordsOfAffirmation',
      },
      { label: 'Intimacy through touch', association: 'physicalTouch' },
      {
        label: 'When they do something practical for me like fill the gas tank or cook dinner',
        association: 'actsOfService',
      },
      {
        label: 'When someone buys me a meaningful token of appreciation',
        association: 'receivingGifts',
      },
      {
        label: 'When someone is very present for a meaningful conversation',
        association: 'qualityTime',
      },
    ],
  },
  {
    question: 'What do you do when you are expressing affection toward people you love?',
    associationType: 'quizQuestion',
    options: [
      {
        label: 'I do nice things for them like cook them a meal or bring them a coffee',
        association: 'actsOfService',
      },
      { label: 'I hug them or become affectionate toward them', association: 'physicalTouch' },
      { label: 'I buy them thoughtful things', association: 'receivingGifts' },
      { label: 'I share what I love about them', association: 'wordsOfAffirmation' },
      {
        label: 'I try to spend as much time being present with them as possible',
        association: 'qualityTime',
      },
    ],
  },
  {
    question: 'When someone cares about you, how do you usually notice first?',
    associationType: 'quizQuestion',
    options: [
      { label: 'Through what they consistently do', association: 'actsOfService' },
      { label: 'Through how comfortable you feel around them', association: 'physicalTouch' },
      { label: 'Through the effort they put into small details', association: 'receivingGifts' },
      { label: 'Through how they make time for you', association: 'qualityTime' },
      { label: 'Through what they say and how they say it', association: 'wordsOfAffirmation' },
    ],
  },
  {
    question:
      'In close relationships, what do you tend to pay the most attention to?',
    associationType: 'quizQuestion',
    options: [
      { label: 'Subtle shifts in energy or mood', association: 'physicalTouch' },
      { label: 'What tasks, actions, or activities need to be done', association: 'actsOfService' },
      { label: 'Small details that feel personal or symbolic', association: 'receivingGifts' },
      {
        label: 'How a conversation lands',
        association: 'wordsOfAffirmation',
      },
      {
        label: 'How often you actually get uninterrupted moments together',
        association: 'qualityTime',
      },
    ],
  },
]
