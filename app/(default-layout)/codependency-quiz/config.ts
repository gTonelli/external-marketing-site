import { ICarouselQuizSlide } from '@/components/Carousel/variants/CarouselQuiz'
import { IQuizOutputs } from '@/components/Quiz'
import * as Yup from 'yup'

export const CODEPENDENCY_SLIDES: ICarouselQuizSlide[] = [
  {
    img: 'external-quiz-slide-1.png',
    text: 'Takes less than a minute!',
  },
  {
    img: 'external-quiz-slide-2.png',
    text: 'Get a free codependency & boundary report!',
  },
  {
    img: 'external-quiz-slide-3.png',
    text: `Transform relationships to become a priority to others!`,
  },
]

export const CODEPENDENCY_QUIZ_QUESTIONS = [
  'Do you say yes to others when you want to say no?',
  'Do you find yourself being triggered by others setting a boundary with you?',
  'Is your sense of self-confidence governed by how much approval you get from others?',
  'Do you lose yourself in relationships/get afraid of being swallowed whole?',
  'Do you suppress your emotions or “pretend” you are okay when you aren’t?',
  'Do you avoid speaking your truth in order to avoid conflict?',
  'Do you believe mistakes = failure? Do you put excessive pressure on yourself?',
  'Do you have to needed to feel alive? Do you need to stand out in order to feel like you matter?',
  'Do you feel resentment towards others because you are repressing your needs? ',
  'Are other people the center of your universe and you come last?',
]

export const codependencyQuizValidationSchema = Yup.object().shape({
  question_1: Yup.number().defined('*All inputs must be filled in.'),
  question_2: Yup.number().defined('*All inputs must be filled in.'),
  question_3: Yup.number().defined('*All inputs must be filled in.'),
  question_4: Yup.number().defined('*All inputs must be filled in.'),
  question_5: Yup.number().defined('*All inputs must be filled in.'),
  question_6: Yup.number().defined('*All inputs must be filled in.'),
  question_7: Yup.number().defined('*All inputs must be filled in.'),
  question_8: Yup.number().defined('*All inputs must be filled in.'),
  question_9: Yup.number().defined('*All inputs must be filled in.'),
  question_10: Yup.number().defined('*All inputs must be filled in.'),
})

export const CODEPENDENCY_QUIZ_RESULTS: IQuizOutputs[] = [
  {
    clientTag: 'codependency-quiz-not',
    min: 0,
    max: 4,
    report: [
      'You are not experiencing codependency and you do have good boundaries. Chances are, you have relatively healthy boundaries and are able to create a healthy relationship dynamic that is considerate to yourself and others. If you are looking to build healthy relationships or improve a current relationship, check out our 12 Pillars to Building Secure Relationships. ',
      'You will gain FREE access to this course for 7 days so that you can learn the skills needed to make a relationship last, grow a better connection with someone more quickly and easily work through any relationship challenge more effectively. ',
    ],
  },
  {
    clientTag: 'codependency-quiz-moderate',
    min: 4,
    max: 6,
    report: [
      'You are experiencing moderate codependency and struggling with boundaries. Codependency can be a disruptive factor that will actually prevent you from building a thriving relationship with the people you love. This is because it causes us to people-please, repress our needs and then experience resentment.',
      'When we have codependent relationships, we are more likely to expect others to mind-read, struggle to communicate our needs and are often left feeling taken advantage of and alone. ',
      'Codependent individuals often experience feeling like nobody cares about them the way they care for others and they may experience burnout in relationships. They may also feel extreme fear of others abandoning them or pulling away. ',
      'Codependency is actually the result of deeply unmet needs from childhood, not learning healthy boundaries and being in a family dynamic where you are left feeling unseen, unheard and as if your personal needs don’t matter. Alternatively, codependency can also be caused by a cycle of romantic relationships that leave you feeling this way. ',
      'Individuals with codependent patterns are on a path towards constantly feeling let down by others, unimportant to people and as if they come last until they learn to shift out of codependent “agreements.”',
      'When we can introspect about who we truly are, learn what we want and begin to communicate in a powerful way that inspires others to see you and meet your needs, relationships can quickly transform.',
      'When we also realize that healthy boundaries and the ability to kindly say “no” to others (when necessary) actually creates more connection – we can also transform relationships. ',
      'Communicating your true “yes’s” and “no’s” is a joining – not a separation. It is you being able to communicate your authentic self to the people you love and you being able to share your truth.',
      'It can be scary at first, but there are simple tools that can assist you in developing exactly the 3 major steps to communicating your needs and learning healthy boundaries. Learning these steps will dramatically improve your current relationships and also allow you to grow new relationships with people who are emotionally available. ',
      'If codependency is sabotaging your love life, friendships or family relationships, you can gain access to our “Transforming Codependency to Create Thriving Relationships” course for FREE for 7 days. This course will give you the exact tools you need to transform codependency into authentic connection where you can feel seen, heard and important by the people you love. This will teach you everything you need to know about exactly how to do this in as little as 7 days. ',
    ],
  },
  {
    clientTag: 'codependency-quiz-codependent',
    min: 6,
    max: CODEPENDENCY_QUIZ_QUESTIONS.length,
    report: [
      'You are experiencing codependency and struggling with boundaries. Codependency can be a disruptive factor that will actually prevent you from building a thriving relationship with the people you love. This is because it causes us to people-please, repress our needs and then experience resentment.',
      'When we have codependent relationships, we are more likely to expect others to mind-read, struggle to communicate our needs and are often left feeling taken advantage of and alone. ',
      'Codependent individuals often experience feeling like nobody cares about them the way they care for others and they may experience burnout in relationships. They may also feel extreme fear of others abandoning them or pulling away. ',
      'Codependency is actually the result of deeply unmet needs from childhood, not learning healthy boundaries and being in a family dynamic where you are left feeling unseen, unheard and as if your personal needs don’t matter. Alternatively, codependency can also be caused by a cycle of romantic relationships that leave you feeling this way. ',
      'Individuals with codependent patterns are on a path towards constantly feeling let down by others, unimportant to people and as if they come last until they learn to shift out of codependent “agreements.”',
      'When we can introspect about who we truly are, learn what we want and begin to communicate in a powerful way that inspires others to see you and meet your needs, relationships can quickly transform.',
      'When we also realize that healthy boundaries and the ability to kindly say “no” to others (when necessary) actually creates more connection – we can also transform relationships. ',
      'Communicating your true “yes’s” and “no’s” is a joining – not a separation. It is you being able to communicate your authentic self to the people you love and you being able to share your truth.',
      'It can be scary at first, but there are simple tools that can assist you in developing exactly the 3 major steps to communicating your needs and learning healthy boundaries. Learning these steps will dramatically improve your current relationships and also allow you to grow new relationships with people who are emotionally available. ',
      'If codependency is sabotaging your love life, friendships or family relationships, you can gain access to our “Transforming Codependency to Create Thriving Relationships” course for FREE for 7 days. This course will give you the exact tools you need to transform codependency into authentic connection where you can feel seen, heard and important by the people you love. This will teach you everything you need to know about exactly how to do this in as little as 7 days. ',
    ],
  },
]
