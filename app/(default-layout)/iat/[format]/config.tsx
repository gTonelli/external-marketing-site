import { externalRoutes } from '@/utils/constants'

export const AB_CART_COPY = {
  live: {
    formatLabel: 'LIVE',
    seo: {
      title: 'Last Chance to Join the Life-Altering IAT™ Program',
      description:
        'Take your career, life, and finances to the next level by finishing your sign-up for our Live IAT™ Program today, so you don’t miss our next cohort!',
    },
    hero: {
      heading: 'Save Your Spot in Our Certified Live IAT™ Relationship Coaching Program!',
      subheading: 'LIMITED SPOTS LEFT! BOOK YOUR FREE CALL TO SAVE YOUR SPOT (& GET A BONUS GIFT)!',
    },
  },
  'on-demand': {
    formatLabel: 'ON DEMAND',
    seo: {
      title: 'Don’t Miss Out on the IAT™ Program',
      description:
        'You can become a certified coach on your own schedule! Choose the payment plan that works best for your On-Demand IAT™ Program today.',
    },
    hero: {
      heading: 'Join the Relationship Coaching Program That Works on YOUR Time!',
      subheading: 'BOOK YOUR FREE CALL TO SIGN UP (& GET A BONUS GIFT)!',
    },
  },
  shared: {
    benefits: [
      'Master cutting-edge tools that are only accessible in this revolutionary program',
      'Use these proprietary tools to help all people live happier, more fulfilled, and empowered lives',
      'Step into a fulfilling and rewarding career with limitless impact and income potential',
      'Stand out in a competitive market with a signature coaching method that attracts clients',
      'Gain access to a supportive worldwide community of like-minded coaches and mentors',
      'Join a growing global movement and be part of an inspiring and caring community',
      'Be the “boss” and build and run a profitable, results-driven practice',
      'Achieve financial freedom with consistent, high-end income',
      'Design your ideal lifestyle, working when and how you choose',
      'Become a sought-after expert in a booming $7 trillion industry',
    ],
    higherLevelSteps: [
      'Book a call with our IAT™ Coaching Specialist on a date and time that works for you.',
      'Get your questions answered, discuss your Relationship Coaching goals, and talk through the next steps.',
      'Receive your bonus gift when you join the call.',
    ],
    faqs: {
      common: [
        {
          question:
            'Can I join this training if I have no prior coaching experience? Is it a good fit for me and my current career goals?',
          answer: `Absolutely! This course is specifically designed for anyone new to coaching, existing coaches and therapists who would like to learn more about attachment theory, or anyone who wants to gain emotional mastery and radically improve their relationships. If you want more information, [set up a call with our coaching specialist](${externalRoutes.higherLevelMelanie}).`,
        },
        {
          question:
            'How is the Integrated Attachment Theory™ Certification training different from other coaching schools and programs?',
          answer: `What makes our training different is that we provide a complete, comprehensive curriculum that ensures success. Not only do we provide you with the theory and practical tools of Integrated Attachment Theory™ that will help change lives, but we also help you maximize its potential by building your own business from it.`,
        },
        {
          question: 'Is this program accredited or recognized by any professional organizations?',
          answer: `Yes, the Integrated Attachment Theory™ Program is accredited by the Association for Coaching® (AC), which is one of the largest third-party coaching accreditations in the world. It is a leading independent and not-for-profit professional body dedicated to promoting best practices and raising the awareness and standards of coaching worldwide.`,
        },
        {
          question:
            'Will I be learning the exact coaching strategy and tools used by Thais Gibson with her coaching clients?',
          answer: `Yes, you will! This exclusive course opens up your eyes and opportunities in your personal life and career. It's what made Thais one of the leading experts in personal development, too.`,
        },
        {
          question: 'Are there prerequisites for joining the program?',
          answer: `Nope! Anyone can take it without any prior experience. In fact, we'll give you the Prerequisites video courses at the start of the Program so you get the foundational information and tools to help you start your coaching journey.`,
        },
      ],
      ondemandOnly: [
        {
          question: 'What are the differences between the Live and On-Demand options?',
          answer: `The only difference is the classroom experience. Apart from that, you’ll get access to the same features as the Live Program IAT™, including pre-recorded video modules, essential client resources, and business materials to build your coaching practice.`,
        },
        {
          question: 'Can I balance this program with a full-time job?',
          answer: `You sure can! Many of our graduates got their certifications while working full-time. The flexibility and on-demand nature of our training formats mean you can definitely do it. If you signed up for the On-Demand option, you can choose when you want to learn. With the Live option, everything is recorded, so you can always come back to watch and study later.`,
        },
        {
          question: 'Can I switch between live and on-demand training formats?',
          answer: `Unfortunately, you can’t switch between the actual training formats. All Live sessions will have recorded copies so you can watch them back if you missed them.`,
        },
      ],
    },
  },
}
