// Dating Quiz Question Bank
// Each question can either be a quizQuestion (scored) or userInfo (captures demographics/intake)

export type TDatingAssociation =
  | 'relationshipStatus'
  | 'rhythm'
  | 'dating'
  | 'devotion'
  | 'powerStruggle'
export type TDatingAssociationType = 'userInfo' | 'quizQuestion'
export type TDatingQuestionOption = { label: string; association: TDatingAssociation }
export type TDatingQuestion = {
  question: string
  associationType: TDatingAssociationType
  options: TDatingQuestionOption[]
}

// Q1: Relationship status
export const DATING_QUIZ_FIRST_QUESTION: TDatingQuestion = {
  question: 'What is your current relationship status?',
  associationType: 'userInfo',
  options: [
    { label: 'Single', association: 'relationshipStatus' },
    { label: 'In a relationship', association: 'relationshipStatus' },
  ],
}

// Next 10 if user is Single
export const DATING_QUIZ_SINGLE_QUESTIONS: TDatingQuestion[] = [
  {
    question: 'How long into your relationships do you normally experience a break up?',
    associationType: 'quizQuestion',
    options: [
      { label: '3–5 year mark', association: 'rhythm' },
      { label: 'We hardly get started (0–6 months)', association: 'dating' },
      { label: 'After 6 years or longer', association: 'devotion' },
      { label: 'About 1–3 years in', association: 'powerStruggle' },
    ],
  },
  {
    question: 'What are your biggest romantic challenges? (If you had to narrow it down to one)',
    associationType: 'quizQuestion',
    options: [
      {
        label: 'Fearing the more serious commitments (moving in, marriage, kids)',
        association: 'devotion',
      },
      { label: 'Handling arguments and communication', association: 'powerStruggle' },
      { label: 'Getting beyond the first few dates', association: 'dating' },
      {
        label: 'Getting bored once I start getting comfortable with someone',
        association: 'rhythm',
      },
    ],
  },
  {
    question:
      'How would you best describe the way you experience the cycles in your relationships?',
    associationType: 'quizQuestion',
    options: [
      {
        label:
          'Connection and closeness early on but things always end right before the bigger commitments like marriage or kids',
        association: 'devotion',
      },
      {
        label: 'Extreme infatuation followed by a lot of fighting and then a break up',
        association: 'powerStruggle',
      },
      {
        label: 'A lot of early excitement but things rarely become serious',
        association: 'dating',
      },
      {
        label: 'Attraction and excitement, followed by boredom and restlessness',
        association: 'rhythm',
      },
    ],
  },
  {
    question:
      'Which of the following do you struggle with most? (If you had to choose one that is most prevalent)',
    associationType: 'quizQuestion',
    options: [
      { label: 'Settling into a relationship and feeling connected', association: 'rhythm' },
      {
        label: 'My fear of commitment is what sabotages me as things become more serious',
        association: 'devotion',
      },
      {
        label: 'Communicating through challenges or disagreements in a healthy way',
        association: 'powerStruggle',
      },
      { label: 'Getting to know someone beyond a surface level', association: 'dating' },
    ],
  },
  {
    question: 'What are most of your break ups characterized by:',
    associationType: 'quizQuestion',
    options: [
      {
        label:
          'You/your partner are unable to feel comfortable making bigger commitments (marriage, kids), causing you/your partner to end things before they get more serious',
        association: 'devotion',
      },
      {
        label: 'We never get far enough off the ground to even have a “break up”',
        association: 'dating',
      },
      {
        label:
          'You struggle to enjoy the comfort and stability of a relationship because your partner feels bored',
        association: 'rhythm',
      },
      {
        label: 'You love each other but fight so often that the relationship inevitably ends',
        association: 'powerStruggle',
      },
    ],
  },
  {
    question:
      'How would you describe the level of emotional depth in your relationship prior to a break up:',
    associationType: 'quizQuestion',
    options: [
      {
        label: 'We break up because things become too comfortable and we grow apart',
        association: 'rhythm',
      },
      {
        label: 'We have a deep connection but find ourselves endlessly arguing',
        association: 'powerStruggle',
      },
      {
        label: 'Things usually end when the connection is still superficial',
        association: 'dating',
      },
      {
        label:
          'We break up because I/the other person isn’t ready to commit and take things to the next level',
        association: 'devotion',
      },
    ],
  },
  {
    question: 'How do you usually experience conflict in your relationships?',
    associationType: 'quizQuestion',
    options: [
      {
        label: 'We don’t really “disagree” on anything but we pull away from each other over time',
        association: 'rhythm',
      },
      {
        label: 'I don’t usually date someone long enough to even have a real conflict',
        association: 'dating',
      },
      {
        label: 'We tend to shove things under the rug and leave them permanently unaddressed',
        association: 'devotion',
      },
      {
        label: 'Disagreements end up feeling like a war to win who is right or wrong',
        association: 'powerStruggle',
      },
    ],
  },
  {
    question:
      'Which of the following statements best describes the theme of your past relationship challenges?',
    associationType: 'quizQuestion',
    options: [
      { label: 'Difficulty finding our footing and staying connected', association: 'rhythm' },
      {
        label: 'A car that’s missing its engine (we never really get anywhere)',
        association: 'dating',
      },
      {
        label: 'We just can’t seem to get to make the long-term commitments so we break up instead',
        association: 'devotion',
      },
      { label: 'A war for power', association: 'powerStruggle' },
    ],
  },
  {
    question: 'Where do you feel most stuck personally?',
    associationType: 'quizQuestion',
    options: [
      {
        label:
          'I fear commitment and can’t even imagine myself in a “forever” relationship, so I leave',
        association: 'devotion',
      },
      { label: 'I feel like I don’t know how to date in a healthy way', association: 'dating' },
      {
        label:
          'I don’t believe that a healthy relationship is possible for me and sabotage when things go smoothly',
        association: 'rhythm',
      },
      {
        label: 'I struggle to move through conflict and stop sabotaging relationships',
        association: 'powerStruggle',
      },
    ],
  },
  {
    question: 'What is your biggest fear in relationships?',
    associationType: 'quizQuestion',
    options: [
      {
        label: 'Loving someone and then fighting so much that things fall apart',
        association: 'powerStruggle',
      },
      { label: 'Choosing the wrong person', association: 'devotion' },
      { label: 'Never finding a meaningful connection', association: 'dating' },
      { label: 'Dating someone and then becoming bored and growing apart', association: 'rhythm' },
    ],
  },
]

// Next 10 if user is In a relationship
export const DATING_QUIZ_RELATIONSHIP_QUESTIONS: TDatingQuestion[] = [
  {
    question:
      'How long have you currently been together with your partner or dating this person for? (Answer according to the time period, even if you’re dating them and not fully committed yet)',
    associationType: 'quizQuestion',
    options: [
      { label: 'It is still fairly new (0-6 months)', association: 'dating' },
      { label: 'We’ve been together for 1-3 years', association: 'powerStruggle' },
      { label: '3-5 years', association: 'rhythm' },
      { label: 'We’ve been together for more than 5 years', association: 'devotion' },
    ],
  },
  {
    question: 'What are your biggest romantic challenges? (If you had to narrow it down to one)',
    associationType: 'quizQuestion',
    options: [
      {
        label: 'We are struggling to get to a more serious commitment (marriage, kids)',
        association: 'devotion',
      },
      { label: 'We struggle to communicate without fighting', association: 'powerStruggle' },
      {
        label: 'We’ve only been on a few dates and things are falling flat',
        association: 'dating',
      },
      {
        label: 'We’ve been together for a while but it feels like we’re growing apart',
        association: 'rhythm',
      },
    ],
  },
  {
    question: 'How would you best describe the biggest challenges you’re currently facing?',
    associationType: 'quizQuestion',
    options: [
      {
        label: 'We have been together for a while but are arguing a lot and it’s getting difficult',
        association: 'powerStruggle',
      },
      {
        label:
          'We have been together for a while but can’t get on the same page with things like marriage or children',
        association: 'devotion',
      },
      {
        label:
          'We are “seeing each other” but aren’t able to deepen the connection to become exclusive/more serious',
        association: 'dating',
      },
      {
        label: 'It feels like things are becoming “stale” and we are losing our spark',
        association: 'rhythm',
      },
    ],
  },
  {
    question:
      'Which of the following are you struggling with most? (If you had to choose one that is most prevalent)',
    associationType: 'quizQuestion',
    options: [
      {
        label: 'Keeping the spark alive after a few years of being together',
        association: 'rhythm',
      },
      {
        label: 'My fear of commitment is probably what makes things most difficult',
        association: 'devotion',
      },
      {
        label: 'Communicating through challenges or disagreements in a healthy way',
        association: 'powerStruggle',
      },
      {
        label: 'Getting beyond a surface level and connecting more meaningfully',
        association: 'dating',
      },
    ],
  },
  {
    question: 'How would you describe your relationship so far?',
    associationType: 'quizQuestion',
    options: [
      {
        label:
          'We have been together for more than a year but are fighting much more and things are currently rocky',
        association: 'powerStruggle',
      },
      {
        label:
          'We have been together for a short period of time and are still getting to know one another',
        association: 'dating',
      },
      {
        label:
          'We have been together for a few years, but we are struggling to get on the same page with long term plans',
        association: 'devotion',
      },
      {
        label: 'We have been together for a few years, but it feels like our connection is fading',
        association: 'rhythm',
      },
    ],
  },
  {
    question: 'How would you describe the current level of emotional depth in your relationship:',
    associationType: 'quizQuestion',
    options: [
      { label: 'It is still early so things are somewhat superficial', association: 'dating' },
      {
        label:
          'We have a long history together but are not sure about whether we are each other’s “forever” person',
        association: 'devotion',
      },
      {
        label:
          'We had a deep connection, but it feels like we are growing apart after years of being together',
        association: 'rhythm',
      },
      {
        label: 'We have a deep connection but find ourselves endlessly arguing',
        association: 'powerStruggle',
      },
    ],
  },
  {
    question: 'How do you usually experience conflict in your dynamic with your partner?',
    associationType: 'quizQuestion',
    options: [
      {
        label: 'Disagreements end up feeling like a war to win who is right or wrong',
        association: 'powerStruggle',
      },
      {
        label:
          'It feels like there is a looming pressure on both of us to be more serious because we’ve been together a while, but we just seem stuck',
        association: 'devotion',
      },
      {
        label:
          'We don’t really “disagree” on anything but it seems as though the distance between us grows over time',
        association: 'rhythm',
      },
      {
        label: 'We haven’t been together long enough to even have a real conflict',
        association: 'dating',
      },
    ],
  },
  {
    question:
      'Which of the following statements best describes the challenge you’re currently facing in your relationship dynamic?',
    associationType: 'quizQuestion',
    options: [
      {
        label:
          'Difficulty finding our footing and staying connected (we keep drifting further apart)',
        association: 'rhythm',
      },
      {
        label: 'A car that’s missing its engine (we just aren’t getting anywhere)',
        association: 'dating',
      },
      {
        label:
          'We just can’t seem to take things to the next level and start building a life together',
        association: 'devotion',
      },
      { label: 'A war for power (we argue constantly)', association: 'powerStruggle' },
    ],
  },
  {
    question: 'Where do you feel most stuck personally?',
    associationType: 'quizQuestion',
    options: [
      {
        label: 'I fear commitment and can’t even imagine myself in a “forever” relationship',
        association: 'devotion',
      },
      {
        label: 'I feel like I don’t know how to date in a healthy way and build momentum',
        association: 'dating',
      },
      {
        label:
          'I don’t believe that a healthy relationship is possible for me and sabotage when things go smoothly',
        association: 'rhythm',
      },
      {
        label: 'I struggle to move through conflict and stop sabotaging relationships',
        association: 'powerStruggle',
      },
    ],
  },
  {
    question: 'What is your biggest fear in the currently relational dynamic you’re in?',
    associationType: 'quizQuestion',
    options: [
      {
        label: 'That we will argue so much that it will eventually tear us apart',
        association: 'powerStruggle',
      },
      {
        label: 'That we aren’t ready to commit to each other and stay together for the long-run',
        association: 'devotion',
      },
      {
        label:
          'That we won’t be able to get things off the ground and build a relationship together',
        association: 'dating',
      },
      {
        label: 'That we will lose the spark and it will end the relationship',
        association: 'rhythm',
      },
    ],
  },
]
