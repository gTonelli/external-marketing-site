interface IQuesion {
  question: string
  association: 'fa' | 'da' | 'ap' | 'sec'
}
// Question count for each style = 7
export const QUESTIONS: IQuesion[] = [
  {
    question:
      'I like to get to know co-workers on a personal level but I do not like to share much about my personal life initially.',
    association: 'fa',
  },
  {
    question: 'I practice healthy boundaries in the workplace.',
    association: 'sec',
  },
  {
    question: 'I often put my co-workers on a pedestal.',
    association: 'ap',
  },
  {
    question: 'I feel irritated or impatient easily around co-workers.',
    association: 'da',
  },
  {
    question: 'I feel comfortable around my colleagues and enjoy their company.',
    association: 'sec',
  },
  {
    question:
      'I put an enormous amount of pressure and expectation on myself at work and then feel angry towards others when they aren’t holding their weight.',
    association: 'fa',
  },
  {
    question: 'I feel very upset when others infringe on my need for space or time alone.',
    association: 'da',
  },
  {
    question: 'I worry about feeling excluded by co-workers.',
    association: 'ap',
  },
  {
    question:
      'I feel comfortable communicating with co-workers even if we have a difference of opinion on a matter.',
    association: 'sec',
  },
  {
    question: 'I tend to be out of touch with my emotions quite frequently.',
    association: 'da',
  },
  {
    question:
      'I am very aware of the behaviors of my co-workers and almost immediately notice if there is a change in their patterns.',
    association: 'fa',
  },
  {
    question: 'I often accidentally over-express my emotions at work.',
    association: 'ap',
  },
  {
    question:
      'I am often distracted by relationships (friends, co-workers, romantic or family)  because I frequently prioritize them over my work.',
    association: 'ap',
  },
  {
    question: 'I know how to process my emotions effectively when I feel upset.',
    association: 'sec',
  },
  // 15
  {
    question:
      'I notice a people’s micro-expressions, body language and tone of voice changing very easily.',
    association: 'fa',
  },
  // 16
  {
    question: 'I spend a lot of time wondering what my colleagues or clients think about me.',
    association: 'ap',
  },
  // 17
  {
    question: 'I am effective at compromising and communicating.',
    association: 'sec',
  },
  // 18
  {
    question:
      'I have very strong emotions about work. I can get very excited or quite angry easily.',
    association: 'fa',
  },
  // 19
  {
    question: 'I strongly dislike feeling vulnerable to others.',
    association: 'da',
  },
  // 20
  {
    question: 'I care a lot about what my colleagues think of me at work.',
    association: 'ap',
  },
  // 21
  { question: 'I do not hold grudges easily or keep resentments long.', association: 'sec' },
  // 22
  {
    question:
      'I often express anger very strongly if I feel hurt, powerless or betrayed by anyone at work.',
    association: 'fa',
  },
  // 23
  {
    question: 'I don’t feel as if I boundaries are necessary between myself and my colleagues.',
    association: 'ap',
  },
  // 24
  {
    question:
      'I feel as though conflict is resolvable and feel equipped to work through problems effectively.',
    association: 'sec',
  },
  // 25
  {
    question: 'I can struggle to trust people in the workplace.',
    association: 'fa',
  },
  // 26
  {
    question: 'I can be cold and stand-offish at times when I don’t know others very well.',
    association: 'da',
  },
  // 27
  {
    question:
      'I can be very sensitive to criticism at work, though I will not outwardly show that criticism affects me.',
    association: 'da',
  },
  // 28
  {
    question: 'I do not like when people ask me about my emotions.',
    association: 'da',
  },
]

interface IResultCorporate {
  title: string
  strengths: string[]
  improvements: string[]
}

interface IResultsCorporate {
  AP: IResultCorporate
  DA: IResultCorporate
  FA: IResultCorporate
  SA: IResultCorporate
}

export const RESULTS: IResultsCorporate = {
  AP: {
    title: 'Anxious Preoccupied',
    strengths: [
      'Your awareness of the feelings and needs of others',
      'Your ability to be thoughtful and inclusive',
      'Your willingness to improve',
    ],
    improvements: [
      'A tendency to people-please and feel resentful',
      'Your strong fear of rejection & criticism',
      'The tendency you have to self-doubt',
    ],
  },
  DA: {
    title: 'Dismissive Avoidant',
    strengths: [
      'Your ability to be resourceful and hardworking',
      'Your attention to detail and thoroughness',
      'Your intellectual capacity',
    ],
    improvements: [
      'A tendency to be cold or blunt',
      'Occasionally being too independent',
      'Your occasional impatience with others',
    ],
  },
  FA: {
    title: 'Fearful Avoidant',
    strengths: [
      'Your resilience and determination',
      'Your awareness of the needs of others',
      'Your ability to continuously grow and improve',
    ],
    improvements: [
      'Becoming too “tunnel-visioned” at times',
      'Feeling suspicious or untrusting',
      'Occasionally being inconsistent',
    ],
  },
  SA: {
    title: 'Secure Attachment',
    strengths: [
      'Your ability to communicate with others',
      'Your ability to be balanced and trustworthy',
      'Your openness to feedback',
    ],
    improvements: [
      'Occasionally having less “grit” than other Styles',
      'Sometimes being unsuspecting',
      'The traits you express in your Secondary Style',
    ],
  },
}
