import { ICarouselQuizSlide } from '@/components/Carousel/variants/CarouselQuiz'
import { IQuizOutputs } from '@/components/Quiz'
import * as Yup from 'yup'

export const LIMERENCE_SLIDES: ICarouselQuizSlide[] = [
  {
    img: 'external-quiz-slide-1.png',
    text: 'Takes less than a minute!',
  },
  {
    img: 'external-quiz-slide-2.png',
    text: 'Get a free limerence report!',
  },
  {
    img: 'external-quiz-slide-3.png',
    text: `Create a powerful connection with the person of your dreams!`,
  },
]

export const lIMERENCE_QUIZ_QUESTIONS = [
  'Do you find yourself fantasizing excessively about this person?',
  'Are you experiencing difficulty focusing because you constantly ruminate about this person? ',
  'Are some of your normal routines being affected by how strong your feelings are? For example, are you having trouble sleeping, experiencing a reduction in appetite or feeling jittery during the day?',
  'Do you experience extreme romantic desire that is significantly stronger than typical attraction?',
  'Do you feel excessively nervous around this person?',
  'Are you sometimes afraid to speak to this person due to an immense fear of being rejected by them?',
  'Do you ever freeze or have difficulty acting like yourself around this person?',
  'Are you currently idealizing this person and putting them on a massive pedestal?',
]

export const limerenceQuizValidationSchema = Yup.object().shape({
  question_1: Yup.number().defined('*All inputs must be filled in.'),
  question_2: Yup.number().defined('*All inputs must be filled in.'),
  question_3: Yup.number().defined('*All inputs must be filled in.'),
  question_4: Yup.number().defined('*All inputs must be filled in.'),
  question_5: Yup.number().defined('*All inputs must be filled in.'),
  question_6: Yup.number().defined('*All inputs must be filled in.'),
  question_7: Yup.number().defined('*All inputs must be filled in.'),
  question_8: Yup.number().defined('*All inputs must be filled in.'),
})

export const LIMERENCE_QUIZ_RESULTS: IQuizOutputs[] = [
  {
    clientTag: 'limerence-quiz-not',
    min: 0,
    max: 1,
    report: [
      'You are not experiencing limerence. Chances are, you are simply experiencing a typical crush or feelings for someone. It is normal to have feelings for someone and is an important part of building a secure relationship. If you are looking to build healthy relationships or improve a current relationship, check out our 12 Pillars to Building Secure Relationships.',
      'You will gain FREE access to this course for 7 days so that you can learn the skills needed to make a relationship last, grow a better connection with someone more quickly and easily work through any relationship challenge more effectively. ',
    ],
  },
  {
    clientTag: 'limerence-quiz-moderate',
    min: 3,
    max: 5,
    report: [
      'You are moderately limerent. Limerence can be a disruptive factor that will actually prevent you from building a thriving relationship with the person you have feelings for. This is because it causes us to people-please, have difficulty feeling confident and not be our authentic self around someone we are feeling limerence towards. ',
      'However, limerence is actually the result of deeply unmet needs from childhood that someone outside of you seems to have met. ',
      'Many people experience limerence because someone made them feel deeply seen, special or wanted and they may be currently and historically lacking having those needs met in their life.',
      'Or perhaps you felt protected by someone or deeply empathized with by the person you are in limerence with. ',
      'When we can turn limerence into healthy attraction by learning what needs are missing for our lives and taking action steps towards empowering those needs in the relationship to ourselves, we are less likely to fall into a limerent state that can actually destroy the connection to the person we want to be with. ',
      'Alternatively, limerence can cause destruction to a relationship if you have limerence for someone other than your partner. In fact, it is the single most common reason for why people cheat. ',
      'If limerence has the potential to sabotage you in either of the two ways listed above, you can gain access to our “Transforming Limerence into Healthy Attraction & Relationship Building” course for FREE for 7 days. This course will give you the exact tools you need to transform limerence into a powerful connection and empower your confidence in as little as 7 days.',
    ],
  },
  {
    clientTag: 'limerence-quiz-limerent',
    min: 5,
    max: lIMERENCE_QUIZ_QUESTIONS.length,
    report: [
      'You are experiencing strong limerence. Limerence can be a sabotaging factor that will actually prevent you from building a thriving relationship with the person you have feelings for. ',
      'This is because it causes us to people-please, have difficulty feeling confident and not be our authentic self around someone we are feeling limerence towards. We may also find ourselves acting irrationally at times around the person we are interested in and experience difficulty focusing on a daily basis. ',
      'However, limerence is actually the result of deeply unmet needs from childhood that someone outside of you seems to have met. ',
      'Many people experience limerence because someone made them feel deeply seen, special or wanted and they may be currently and historically lacking having those needs met in their life.',
      'Or perhaps you felt protected by someone or deeply empathized with by the person you are in limerence with. ',
      'When we can turn limerence into healthy attraction by learning what needs are missing for our lives and taking action steps towards empowering those needs in the relationship to ourselves, we are less likely to fall into a limerent state that can actually destroy the connection to the person we want to be with. ',
      'Alternatively, limerence can cause destruction to a relationship if you have limerence for someone other than your partner. In fact, it is the single most common reason for why people cheat. ',
      'If limerence has the potential to sabotage you in either of the two ways listed above, you can gain access to our “Transforming Limerence Into Healthy Attraction & Relationship Building” course for FREE for 7 days. This course will give you the exact tools you need to transform limerence into a powerful connection and empower your confidence in as little as 7 days. ',
    ],
  },
]
