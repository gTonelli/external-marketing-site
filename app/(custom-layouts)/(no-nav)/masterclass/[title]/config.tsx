import { faUserGroup, faClock, faSmile } from '@awesome.me/kit-545b942488/icons/classic/solid'

export const CONFIG = {
  needs: {
    hero: {
      bgVideoSrc: '/videos/Masterclass/Needs/bgv.mp4',
      trailerVideoId: '0ebd3ca075a678790f95500b71a1fb1a',
      trailerThumbnailSrc:
        'https://pds-strapi-bucket.s3.ca-central-1.amazonaws.com/needs_masterclass_video_thumbnail_640554cd7f.jpg',
      h3: 'Tired of Repeating the Same Emotional Cycles?',
      h1: 'Discover the Hidden Needs Shaping Your Relationships, Motivation, and Happiness to Find Lasting Fulfillment',
      h2: 'Thousands have used the framework in this Discover, Embrace & Fulfill Your Personal Needs Masterclass to identify unmet emotional needs, break painful patterns, and build secure attachment from the inside out.',
    },
    floatingNavLinks: [
      { label: "What You'll Learn", href: '#what-you-will-learn' },
      { label: 'Student Stories', href: '#student-stories' },
      { label: 'Meet Thais Gibson', href: '#meet-thais-gibson' },
      { label: 'Your Learning Journey', href: '#your-learning-journey' },
      { label: 'FAQs', href: '#faq' },
      { label: 'Reserve My Spot', href: '#reserve-my-spot' },
    ],
    whatYouLearn: {
      title: "What You'll Learn",
      stats: [
        {
          backgroundColor: 'bg-[#a0ddff66]',
          icon: faUserGroup,
          label: '60,000+',
          text: 'SUCCESS STORIES',
        },
        {
          backgroundColor: 'bg-[#caecff66]',
          icon: faClock,
          label: '30 Minutes',
          text: 'MASTERCLASS',
        },
        {
          backgroundColor: 'bg-[#dff4ff66]',
          icon: faSmile,
          label: '99.7%',
          text: 'SATISFACTION RATING',
        },
      ],
      learnings: [
        {
          title: 'How to Identify the Needs That Are Shaping Your Relationships',
          description: [
            <>
              Most people don’t realize that their emotional needs are influencing how they show up
              in relationships every single day.
            </>,

            <>
              In this Masterclass,{' '}
              <strong>
                you’ll be guided through a process and exercise to help you uncover your specific
                needs
              </strong>
              , so you can finally understand why you react the way you do, how to communicate your
              needs better, and what’s required for you to finally feel fulfilled.
            </>,
          ],
        },
        {
          title: 'Why You Feel Lonely Even When You’re Not Alone',
          description: [
            <>Loneliness isn’t just about being single.</>,
            <>
              It often shows up when your emotional needs aren’t being met — even if you’re in a
              relationship or surrounded by people.
            </>,
            <>
              You’ll discover why you may feel unseen, unheard, or disconnected, and how everyday
              triggers like conflict, withdrawal, or resentment are signals of deeper unmet needs.
            </>,
          ],
        },
        {
          title: 'Why the Spark Fades….And How to Bring It Back',
          description: [
            <>Many people believe the spark naturally fades over time.</>,
            <>But more often, it fades when emotional needs go unrecognized or unmet.</>,
            <>
              You’ll learn how to identify these needs and how meeting them transforms connection,
              attraction, and emotional closeness.
            </>,
          ],
        },
        {
          title: 'How to Break Cycles of Frustration, Conflict, and Resentment',
          description: [
            <>When needs go unmet, patterns begin to form.</>,
            <>
              You may overgive, shut down, become reactive, or feel stuck in the same repeated
              conflicts.
            </>,
            <>
              You’ll learn how to identify what’s actually driving these patterns so you can shift
              them at the root.
            </>,
          ],
        },
        {
          title: 'How to Create Relationships Where You Feel Truly Seen and Valued',
          description: [
            <>
              When emotional needs are understood and consistently met, relationships feel
              different.
            </>,
            <>
              You’ll learn how to create connections where both people feel supported, appreciated,
              and emotionally fulfilled — instead of misunderstood or alone.
            </>,
          ],
        },
      ],
    },
    studentStories: {
      title: 'Student Stories',
    },
    thais: {
      imageSrc: '/images/Masterclass/thais-on-podcasts.jpg',
      imageAlt: 'Thais Gibson on interviews and podcasts',
    },
    learningJourney: {
      title: 'Your Learning Journey',
      steps: [
        {
          imageSrc: '/images/Masterclass/woman-thinking-writing.jpg',
          imageAlt: 'A woman thinking and writing',
          title: 'The Hidden Needs Driving Your Patterns',
          description:
            'Uncover the unmet emotional needs that have been shaping your reactions, relationship dynamics, and self-sabotaging behaviors. Through a guided exercise, you’ll identify what was missing and see how those unmet needs still influence your decisions today. Clarity replaces confusion.',
        },
        {
          imageSrc: '/images/Masterclass/woman-with-coffee-in-bed.jpg',
          imageAlt: 'A woman with coffee in bed',
          title: 'The Fulfillment Reset',
          description:
            'Learn how to begin meeting your needs in practical, grounded ways, instead of unconsciously depending on others to fill that space. You’ll discover simple daily strategies to create emotional safety, validation, reassurance, and stability from within, so you feel secure regardless of external circumstances.',
        },
        {
          imageSrc: '/images/Masterclass/woman-smiling-writing.jpg',
          imageAlt: 'A woman smiling and writing',
          title: 'The Shift Into Secure Communication',
          description:
            'Move from resentment, shutdown, or overgiving into clear, confident expression. You’ll learn how to communicate your needs without guilt or blame, creating healthier dynamics, deeper connection, and relationships that feel steady instead of triggering. Secure attachment becomes something you practice.',
        },
      ],
    },
    host: {
      title: 'This Masterclass is Hosted by Thais Gibson',
      copy: [
        'Thais is the founder of The Personal Development School and a globally recognized expert in attachment theory, subconscious reprogramming, and emotional healing. She holds a Ph.D. and has over a decade of experience helping individuals rewire core beliefs, heal attachment wounds, and create healthier, more fulfilling relationships.',
        'Through her work, Thais has supported tens of thousands of students worldwide in transforming patterns related to anxious, avoidant, and fearful-avoidant attachment styles. She is known for translating complex psychological concepts into practical, actionable tools that create lasting change.',
        'Thais has developed in-depth programs focused on emotional regulation, reprogramming core wounds, boundaries, and communication. As a host, Thais brings a unique blend of clinical insight, structured learning design, and compassionate guidance to help you deeply understand yourself and create meaningful transformation.',
      ],
      imageSrc: '/images/Masterclass/thais-portrait-1.jpg',
      imageAlt: "Thais Gibson's portrait image",
    },
    faqs: {
      title: 'Frequently Asked Questions',
      copy: 'Get your questions answered before the Discover, Embrace & Fulfill Your Personal Needs Masterclass begins.',
    },
    reserveMySpot: {
      title: 'Join Your Free Masterclass Today',
      imageSrc: '/images/Masterclass/thais-portrait-2.jpg',
      imageAlt: 'Thais Gibson smiling and taking notes',
    },
  },
}
