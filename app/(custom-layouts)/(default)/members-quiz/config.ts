import { IQuizCardProps } from '@/components/QuizCard'

export const QUIZ_PAGE = {
  // introSection
  section_1: {
    header: 'What’s Your Attachment Style',
    subHeader: 'TAKE OUR FREE QUIZ NOW TO FIND OUT!',
  },
  //   howToUseQuizzesSection
  section_3: {
    header: 'How To Use These Quizzes',
    content: `Curious to discover whether you’ve become more secure in your romantic relationships since becoming a member of the Personal Development School or since the first time you took our Attachment Style Quiz for romantic relationships?
        
          Re-take the quiz again and use it as a tool periodically to monitor your progress.
      
          Plus, since your attachment style influences every relationship in your life, we have created two brand new quizzes that will allow you to discover what your attachment style is with your friends and family too!`,
  },
  // attachmentStylesSection
  section_4: {
    header: 'What Are The 4 Attachment Styles?',
    description:
      'Each attachment style comes with different characteristics that positively or negatively impact your relationships. Here’s a quick recap of each of them:',
  },
  // understandingIsImportantSection
  section_5: {
    header: 'Why Understanding Your Attachment Style Is So Important?',
    description: `Your attachment style was formed during early childhood as a result of the interactions, experiences and perceptions that you encountered. 
          
          In essence, your attachment style is like your mind’s rule book telling you how to form attachments with, and behave around, other people.
      
          Since your attachment style can change in different types of relationships, we’ve created three different quizzes for you to learn more about your style in every kind of relationship!`,
    listStart: 'It influences your ability to:',
    list: [
      'Build thriving relationships that last',
      'Communicate your needs and boundaries ',
      'Be vulnerable and form deep connections ',
      'Authentically express your true self ',
    ],
    listEnd: '... and so much more.',
  },
}

export const ATTACHMENT_STYLES = [
  {
    title: `Anxious Preoccupied`,
    content: `Relationships can often make you feel anxious, unsafe or insecure because you likely have a subconscious fear of abandonment. 
          
          As a result, you seek more closeness in your relationships, and can feel afraid if you sense a loved one is pulling away. `,
    assetUrl: '/images/MembersQuiz/ap.svg',
  },
  {
    title: 'Fearful Avoidant',
    content: `Relationships can feel chaotic, confusing and overwhelming because you swing between being avoidant and anxious.
          
          Depending on the relationship, you can shift between being "hot and cold," often feeling confused about your feelings.`,
    assetUrl: '/images/MembersQuiz/fa.svg',
  },
  {
    title: 'Dismissive Avoidant',
    content: `Intense emotions can feel overwhelming and can cause you to pull away from others. You may find yourself withdrawing from arguments or triggering situations.
          
          This need for independence can cause challenges in your relationships and inner conflict for you, because deep down, you want to connect with others.`,
    assetUrl: '/images/MembersQuiz/da.svg',
  },
  {
    title: 'Securely Attached',
    content: `You often feel comfortable and at ease in relationships. You’re also good at communicating your needs and feelings, and feel open to vulnerability in your relationships.
          
          However, sometimes you can experience difficulty when relating to those who aren’t as secure in relationships.`,
    assetUrl: '/images/MembersQuiz/sa.svg',
  },
]

export const CONFIG: IQuizCardProps[] = [
  // Romantic
  {
    id: '1',
    type: 'romantic',
    title: 'Romantic Quiz',
    description:
      'Do you struggle to build healthy and happy relationships that last? Take the quiz to discover your unique challenges and patterns in romantic relationships.',
    image: '/images/MembersQuiz/quiz-romantic.svg',
    isNew: false,
    color: 'pink',
    colorSecondary: 'bg-pink-secondary',
    colorLight: 'bg-pink-light',
    colorDark: 'bg-pink-dark',

    introBgDesktop: '/images/MembersQuiz/quiz-results-romantic-intro-desktop-bg.svg',
    introBgMobile: '/images/MembersQuiz/quiz-results-romantic-intro-mobile-bg.svg',

    questions: [
      // 1
      {
        question:
          'I can be very emotionally present when I am starting to date, but it takes me a while to share vulnerable things about myself.',
        styleAssociation: 'fa',
        styleAssociationValue: 1,
      },
      // 2
      {
        question: ' I practice excellent self-care tendencies for both myself and my partner. ',
        styleAssociation: 'sa',
        styleAssociationValue: 1,
      },
      // 3
      {
        question: ' I often put my partner on a big pedestal and feel inferior to them.',
        styleAssociation: 'ap',
        styleAssociationValue: 1,
      },
      //   4
      {
        question: ' I feel irritated or impatient easily around my partner.',
        styleAssociation: 'da',
        styleAssociationValue: 1,
      },
      //   5
      {
        question: 'I feel comfortable around my partner and enjoy their company.',
        styleAssociation: 'sa',
        styleAssociationValue: 1,
      },
      // 6
      {
        question: ' I often struggle to trust a partner in my romantic relationships.',
        styleAssociation: 'fa',
        styleAssociationValue: 1,
      },
      // 7
      {
        question:
          ' I need a lot more space from my romantic partners than they usually need from me.',
        styleAssociation: 'da',
        styleAssociationValue: 1,
      },
      // 8
      {
        question:
          ' I will sometimes call or text repetitively when I’m not getting a response from my loved one.',
        styleAssociation: 'ap',
        styleAssociationValue: 1,
      },
      // 9
      {
        question:
          'I consistently communicate my feelings and needs in romantic relationships and actively listen  to others when they communicate theirs. I easily work to make effective compromises.',
        styleAssociation: 'sa',
        styleAssociationValue: 1,
      },
      // 10
      {
        question:
          'I tend to be out of touch with my emotions quite frequently and it can take me a long time to  develop romantic feelings for someone.',
        styleAssociation: 'da',
        styleAssociationValue: 1,
      },
      // 11
      {
        question:
          'I am very attuned to my partner’s needs and notice when there is any change in behavior. This  sometimes can create stress or a feeling of distrust when a pattern changes in someone else’s  behavior.',
        styleAssociation: 'fa',
        styleAssociationValue: 1,
      },
      // 12
      {
        question: 'I do not like spending time alone and would prefer to be with my partner. ',
        styleAssociation: 'ap',
        styleAssociationValue: 1,
      },
      // 13
      {
        question: 'I constantly want to be emotionally closer to my partner.',
        styleAssociation: 'ap',
        styleAssociationValue: 1,
      },
      // 14
      {
        question: 'I know how to process my emotions effectively when I feel upset. ',
        styleAssociation: 'sa',
        styleAssociationValue: 1,
      },
      // 15
      {
        question:
          'I do not like when people ask me personal questions when we are getting to know each other.',
        styleAssociation: 'da',
        styleAssociationValue: 1,
      },
      // 16
      {
        question:
          'I worry that my partner will fall out of love with me or eventually get bored of me.',
        styleAssociation: 'ap',
        styleAssociationValue: 1,
      },
      // 17
      {
        question:
          'I feel a lot of shame when others give me feedback about my behavior in our relationship.',
        styleAssociation: 'da',
        styleAssociationValue: 1,
      },
      // 18
      {
        question:
          'I have very strong emotions in relationships and can easily go from hot to cold.',
        styleAssociation: 'fa',
        styleAssociationValue: 1,
      },
      // 19
      {
        question: 'I strongly dislike feeling vulnerable to others.',
        styleAssociation: 'da',
        styleAssociationValue: 1,
      },
      // 20
      {
        question:
          'If I notice my partner showing any signs of coldness, I panic and want to get closer as quickly as  possible.',
        styleAssociation: 'ap',
        styleAssociationValue: 1,
      },
      // 21
      {
        question:
          'I do not hold grudges easily or keep resentments long. I do, however, know how to set a healthy  boundary with an unhealthy person if necessary.',
        styleAssociation: 'sa',
        styleAssociationValue: 1,
      },
      // 22
      {
        question: 'I often express anger very strongly when I feel hurt, powerless or betrayed.',
        styleAssociation: 'fa',
        styleAssociationValue: 1,
      },
      // 23
      {
        question:
          'I don’t feel as if any boundaries are necessary between myself and a romantic partner.',
        styleAssociation: 'ap',
        styleAssociationValue: 1,
      },
      // 24
      {
        question:
          'I feel as though conflict is resolvable and feel equipped to work through problems effectively.',
        styleAssociation: 'sa',
        styleAssociationValue: 1,
      },
      // 25
      {
        question:
          'It is not uncommon for me to experience inward emotional turbulence throughout the duration  of my romantic relationship.',
        styleAssociation: 'fa',
        styleAssociationValue: 1,
      },
      // 26
      {
        question: 'I can be cold and stand-offish at times when I don’t know others very well.',
        styleAssociation: 'da',
        styleAssociationValue: 1,
      },
      // 27
      {
        question: 'I often feel very hot or very cold towards my partner or loved one.',
        styleAssociation: 'fa',
        styleAssociationValue: 1,
      },
      // 28
      {
        question: 'I know that I am worthy of a healthy, happy relationship.',
        styleAssociation: 'sa',
        styleAssociationValue: 1,
      },
    ],

    results: {
      FA: {
        description: {
          title: 'Fearful Avoidant',
          content: `As a fearful avoidant, romantic relationships can be very confusing, overwhelming and cause a lot of inward emotional turbulence for you. 
                        
            This is because you experience both anxious and avoidant tendencies, which can cause you to swing between being hot and cold with your romantic partners. 
  
            On one hand, you deeply crave love, connection and closeness, but on the other – you deeply fear it. This constant straddling between two opposites is what causes you to “flip flop” so much. 
            
            Some common characteristics of a fearful avoidant attachment style include:`,
        },

        strengths: [
          'Highly empathetic',
          'Attuned to the emotions and needs of others',
          'Can connect deeply with others',
        ],

        challanges: [
          '“Hot and cold” in relationships due to confusion and fears',
          'Experiences distrust due to a fear of betrayal',
          'Prone to anger and resentment',
        ],

        howWasItFormed: {
          title: 'How Was Your Attachment Style Formed?',
          content: `As you may already know, attachment styles are formed during childhood (although they may shift based on experiences you have later in life). 
  
              In childhood, it is likely that you experienced some form of emotional volatility in your household which caused you to subconsciously associate love with betrayal. 
  
              As a result, you likely struggle with feeling comfortable with vulnerability in your adulthood romantic relationships, and oscillate between craving connection and fearing it.`,

          assetUrl: '/images/MembersQuiz/quiz-results-fa.svg',
        },

        whatDoesItMean: {
          title: 'How Do These Characteristics Play Out In Romantic Relationships?',
          content: `When you first start dating someone, you’re often very emotionally present, which makes your love interests feel very seen and connected. 
  
            But over time, you may start to pull away when:
            
            • the stakes feel higher and more vulnerability is involved
            • when emotions get too intense (yours or the other person’s)
            • old wounds are triggered 
            • your needs go unmet
            
            This is usually where the dynamic becomes more challenging, particularly if you’re dating someone who is more anxiously attached, because as you pull away, they try to regain closeness by leaning in, which only makes you pull further away.`,
          content2: `And as a result, relationships can feel very confusing and painful for both you and your partners. 
  
              It’s likely that you’re also naturally empathetic and highly attuned to the needs and emotions of others, which is actually a bit of a superpower of yours! But the downside to this is that you notice when there is a small change in behavior – and then may attach negative meaning to it.
            
              This can cause feelings of distrust that your partner will betray you, and as a result, can trigger strong emotional responses, resentment and a lot of stress in your relationships. `,
          assetUrl: '/images/MembersQuiz/quiz-results-bg.svg',
        },

        wordsOfEcouragement: {
          title: '',
          content: `The good news is that you do have a chance as an adult to change these automatic, subconscious patterns. And once you do, you can build and maintain a healthy and lasting relationship that makes you feel safe, calm, loved and deeply connected. `,
          assetUrl: '',
        },

        // graph: {
        //   title: 'Your Secondary Attachment Style & Why It Matters',
        //   content: `Attachment styles are formed in varying proportions based on the experiences that you may have had. This means that you may carry other characteristics from other attachment styles that surface in specific situations.

        //               This is why it’s important to also address your secondary attachment style so you can work on any additional behaviors or thinking patterns that might be subconsciously sabotaging your relationships or causing you inner turmoil.`,
        //   assetUrl: '',
        // },

        secondaryStyle: {
          title: 'Your Secondary Attachment Style & Why It Matters',
          description: `Attachment styles are formed in varying proportions based on the experiences that you may have had. This means that you may carry other characteristics from other attachment styles that surface in specific situations.
  
            This is why it’s important to also address your secondary attachment style so you can work on any additional behaviors or thinking patterns that might be subconsciously sabotaging your relationships or causing you inner turmoil.`,
        },

        // recommendedCourses: ['1', '2', '3'],

        nextSteps: {
          title: 'Your Next Steps And Recommended Courses',
          content: `What we recommend is that you first work on your primary attachment style – which is the style you see at the top of your chart with the highest percentage, and then after that, move onto your secondary attachment style, which is your next highest percentage.
  
            To help you get started with your transformation, below we have recommended some specific courses based on your results that’ll help you become more securely attached and build lasting relationships. 
            
            Many of our students who have taken these courses have reported being more securely attached within months of doing the course work. So we’re sure if you put in the effort, the same is possible for you too. `,
        },

        otherQuizzes: {
          title: 'What’s Your Attachment Style With Friends, Family & Romantic Partners?',
          content: `Did you know that your attachment style is the single largest predictor of whether your relationships thrive… or whether they hardly ever survive?
  
            And not just your romantic relationships – but your relationships with your friends and family relationships too
            
            To discover your attachment style in each of these areas - take another quiz!`,
        },
      },
      DA: {
        description: {
          title: 'Dismissive Avoidant',
          content: `As someone with a dismissive avoidant attachment style, it’s likely that you feel uncomfortable with vulnerability and intense emotions.
  
            And as a result, you may withdraw in emotionally triggering situations and highly value your individuality. 
            
            Common characteristics of a dismissive avoidant attachment style include:`,
        },

        strengths: [
          'Analytical, logical and practical when making decisions',
          'Can be deeply empathetic and attuned to people’s feelings',
          'Intelligent, good imagination',
        ],

        challanges: [
          'Fears commitment and giving up sense of self',
          'Experiences inner turmoil due to conflicting needs – fears vulnerability and connection, but deeply craves it',
          'Can be very sensitive to criticism',
        ],

        howWasItFormed: {
          title: 'How Was Your Attachment Style Formed?',
          content: `As you may already know, attachment styles are formed during childhood (although they may shift based on experiences you have later in life). 
  
            In childhood, it is likely that you experienced some form of emotional neglect – meaning your needs around connection were largely unmet. You may have also been shamed for having certain emotions.
            
            So as an adult, you find it difficult, and even overwhelming, to connect with others.`,
          assetUrl: '/images/MembersQuiz/quiz-results-da.svg',
        },

        whatDoesItMean: {
          title: 'How Do These Characteristics Play Out In Romantic Relationships?',
          content: `It’s likely that you need a lot more space from romantic partners than what they need from you. 
  
            When you first start dating someone, you may find it quite challenging to open up as you struggle with vulnerability and don’t like to be asked personal questions. 
            
            In fact, intense emotions can feel overwhelming because you might have been shamed for them as a child. This is why as an adult, you might prefer to get your needs for connection met through things rather than people. 
            
            This can cause your romantic partners to think that you don’t need them. When in fact, you really do what to connect, it’s just that vulnerability and connection can feel scary. As a result of this conflict in needs, you experience a lot of inner turmoil.`,
          content2: ``,
          assetUrl: '/images/MembersQuiz/quiz-results-bg.svg',
        },

        wordsOfEcouragement: {
          title: '',
          content: `The good news is that you do have a chance as an adult to change these automatic, subconscious patterns. And once you do, you can build and maintain a healthy and lasting relationship that makes you feel safe, calm, loved and connected.`,
        },

        secondaryStyle: {
          title: 'Your Secondary Attachment Style & Why It Matters',
          description: `Attachment styles are formed in varying proportions based on the experiences that you may have had. This means that you may carry other characteristics from other attachment styles that surface in specific situations.
  
            This is why it’s important to also address your secondary attachment style so you can work on any additional behaviors or thinking patterns that might be subconsciously sabotaging your relationships or causing you inner turmoil.`,
        },

        nextSteps: {
          title: 'Your Next Steps And Recommended Courses',
          content: `What we recommend is that you first work on your primary attachment style – which is the style you see at the top of your chart with the highest percentage, and then after that, move onto your secondary attachment style, which is your next highest percentage.
  
            To help you get started with your transformation, below we have recommended some specific courses based on your results that’ll help you become more securely attached and build lasting relationships. 
            
            Many of our students who have taken these courses have reported being more securely attached within months of doing the course work. So we’re sure if you put in the effort, the same is possible for you too. `,
        },

        otherQuizzes: {
          title: 'What’s Your Attachment Style With Friends, Family & Romantic Partners?',
          content: `Did you know that your attachment style is the single largest predictor of whether your relationships thrive… or whether they hardly ever survive?
  
            And not just your romantic relationships – but your relationships with your friends and family relationships too
            
            To discover your attachment style in each of these areas - take another quiz!`,
        },
      },
      AP: {
        description: {
          title: 'Anxious Preoccupied',
          content: `As someone who has an anxious preoccupied attachment style, relationships can make you feel unsafe, and on edge because you have a subconscious fear that you’ll be abandoned. 
  
            This can lead to people pleasing in your relationships as you may put other people on pedestals and abandon your own wants, needs and boundaries to keep others close.
            
            This imbalance can then lead to resentment and may inadvertently result in the very thing you fear the most: your love interests pulling away.
            
            Common characteristics of a anxious preoccupied attachment style include:`,
        },

        strengths: [
          'Highly empathetic and giving with time, energy and emotions',
          'Attuned to the emotions, needs and wants of others',
          'A natural at connecting deeply with others',
        ],

        challanges: [
          'May abandon yourself through excessive people pleasing to avoid being left',
          'Can feel quite insecure in relationships, which can lead to “needy” behaviors',
          'Struggles to identify and communicate needs and boundaries, which leads to resentment',
        ],

        howWasItFormed: {
          title: 'How Was Your Attachment Style Formed?',
          content: `As you may already know, attachment styles are formed during childhood (although they may shift based on experiences you have later in life). 
  
            In childhood, it is likely that you experienced inconsistent emotional support – meaning your needs around connection were sometimes unmet.
            
            As a result, you often felt abandoned as a child, so as an adult, you may try to make up for this by people pleasing in your romantic relationships.`,
          assetUrl: '/images/MembersQuiz/quiz-results-ap.svg',
        },

        whatDoesItMean: {
          title: 'How Do These Characteristics Play Out In Romantic Relationships?',
          content: `Dating can make you feel unsettled, and even sometimes insecure, especially if the person you’re dating has more avoidant tendencies.
  
            It’s likely that you’re an expert at reading other people, and may instinctively people-please in an attempt to keep others close to you. 
            
            This is a subconscious strategy to stop them from leaving you – it is not intentional. But what this means is that you often find yourself doing things for other people so that you feel loved, even if it goes against what you really want or need.`,
          content2: `This can secretly make you feel resentful and angry, and a bit conducive to a long-term relationship. 
  
            Anxious attachments also tend to be very empathetic and highly attuned to the needs and emotions of others, which means you notice subtle changes in behavior. 
            
            The downside of this is that if you notice any subtle changes in behavior, you may panic and try to get closer to them again as quickly as possible. This fear can be so strong that you end up doing things such as repeatedly texting or calling, even if they don’t respond.`,
          assetUrl: '/images/MembersQuiz/quiz-results-bg.svg',
        },

        wordsOfEcouragement: {
          title: '',
          content: `The good news is that you do have a chance as an adult to change these automatic, subconscious patterns. And once you do, you can build and maintain a healthy and lasting relationship that makes you feel safe, calm, loved and deeply connected.`,
        },

        secondaryStyle: {
          title: 'Your Secondary Attachment Style & Why It Matters',
          description: `Attachment styles are formed in varying proportions based on the experiences that you may have had. This means that you may carry other characteristics from other attachment styles that surface in specific situations.
  
            This is why it’s important to also address your secondary attachment style so you can work on any additional behaviors or thinking patterns that might be subconsciously sabotaging your relationships or causing you inner turmoil.`,
        },

        nextSteps: {
          title: 'Your Next Steps And Recommended Courses',
          content: `What we recommend is that you first work on your primary attachment style – which is the style you see at the top of your chart with the highest percentage, and then after that, move onto your secondary attachment style, which is your next highest percentage.
  
            To help you get started with your transformation, below we have recommended some specific courses based on your results that’ll help you become more securely attached and build lasting relationships. 
            
            Many of our students who have taken these courses have reported being more securely attached within months of doing the course work. So we’re sure if you put in the effort, the same is possible for you too. `,
        },

        otherQuizzes: {
          title: 'What’s Your Attachment Style With Friends, Family & Romantic Partners?',
          content: `Did you know that your attachment style is the single largest predictor of whether your relationships thrive… or whether they hardly ever survive?
  
            And not just your romantic relationships – but your relationships with your friends and family relationships too
            
            To discover your attachment style in each of these areas - take another quiz!`,
        },
      },
      SA: {
        description: {
          title: 'Secure Attachment',
          content: `As a securely-attached individual, it’s likely that you feel at ease in relationships because you’re comfortable with communicating your needs, expressing your emotions and setting boundaries. 
  
            You’re also comfortable with letting people into your intimate space and being vulnerable because you’re confident in who you are as a person.
            
            Common characteristics of a secure attachment style include:`,
        },

        strengths: [
          'At ease in relationships',
          'Natural ability to express needs, boundaries and emotions',
          'Comfortable with vulnerability and intimacy',
        ],

        challanges: [
          'Can find it difficult to relate to those with more insecure attachment styles',
          'May feel stuck or frustrated in relationships that make you unhappy',
          'Can feel confused when challenges arise',
        ],

        howWasItFormed: {
          title: 'How Was Your Attachment Style Formed?',
          content: `As you may already know, attachment styles are formed during childhood (although they may shift based on experiences you have later in life). 
  
            It’s likely that you had a healthy relationship with both of your caregivers during childhood. 
            
            You were probably encouraged to express yourself, and your needs for emotional and physical support were consistently met. 
            
            That’s why as an adult, it’s easier for you to create supportive, communicative relationships with others.`,
          assetUrl: '/images/MembersQuiz/quiz-results-sa.svg',
        },

        whatDoesItMean: {
          title: 'How Do These Characteristics Play Out In Romantic Relationships?',
          content: `As someone who is securely attached, it’s likely that you’re able to consistently communicate your feelings and needs in romantic relationships, and actively listen when others communicate theirs. 
  
            Because you feel confident in who you are, and know that you’re deserving of a healthy, happy relationship, you don’t enter into dating or relationships with many fears. 
            
            As a result, you’re able to express yourself authentically and vet potential partners from a secure place. 
            
            When in a relationship, you tend to really enjoy your partner’s company and put care and effort into nurturing them and the relationship.
            
            You’re also able to process your emotions when you get upset and you don’t hold onto grudges for long periods. `,
          content2: `However, you might experience problems if you struggle to relate to your partner when they’re not as secure in relationships as you are. 
  
            If you’re with someone who has a lot of fears, insecurities or who can’t communicate needs, boundaries and emotions as easily as you can, it can be difficult for you to understand their behavior. 
            
            This can lead to conflict and both parties feeling misunderstood and unseen.
            
            What’s more, when you’re feeling this way, it can trigger your secondary attachment style.`,
          assetUrl: '/images/MembersQuiz/quiz-results-bg.svg',
        },

        wordsOfEcouragement: {
          title: '',
          content: `The good news is, with the right tools, your relationships can feel deeply connected, harmonious and safe.`,
        },

        secondaryStyle: {
          title: 'Your Secondary Attachment Style & Why It Matters',
          description: `Attachment styles are formed in varying proportions based on the experiences that you may have had. This means that you may carry other characteristics from other attachment styles that surface in specific situations.
  
            This is why it’s important to also address your secondary attachment style so you can work on any additional behaviors or thinking patterns that might be subconsciously sabotaging your relationships or causing you inner turmoil.`,
        },

        nextSteps: {
          title: 'Your Next Steps And Recommended Courses',
          content: `What we recommend is that you first work on your primary attachment style – which is the style you see at the top of your chart with the highest percentage, and then after that, move onto your secondary attachment style, which is your next highest percentage.
  
            To help you get started with your transformation, below we have recommended some specific courses based on your results that’ll help you become more securely attached and build lasting relationships. 
            
            Many of our students who have taken these courses have reported being more securely attached within months of doing the course work. So we’re sure if you put in the effort, the same is possible for you too. `,
        },

        otherQuizzes: {
          title: 'What’s Your Attachment Style With Friends, Family & Romantic Partners?',
          content: `Did you know that your attachment style is the single largest predictor of whether your relationships thrive… or whether they hardly ever survive?
  
            And not just your romantic relationships – but your relationships with your friends and family relationships too
            
            To discover your attachment style in each of these areas - take another quiz!`,
        },
      },
    },
  },

  // Family
  {
    id: '2',
    type: 'family',
    title: 'Family Quiz',
    description:
      'Do you struggle to break free from certain patterns and behaviors within your family? Take this quiz to understand why.',
    image: '/images/MembersQuiz/quiz-family.svg',
    isNew: true,
    color: 'teal',
    colorSecondary: 'bg-teal-secondary',
    colorLight: 'bg-teal-light',
    colorDark: 'bg-teal-dark',

    introBgDesktop: '/images/MembersQuiz/quiz-results-family-intro-desktop-bg.svg',
    introBgMobile: '/images/MembersQuiz/quiz-results-family-intro-mobile-bg.svg',

    questions: [
      {
        question:
          'When I feel hurt, I want to push my family members away and sometimes will say mean things  that I regret later.',
        styleAssociation: 'fa',
        styleAssociationValue: 1,
      },
      {
        question:
          'I try to rely as little as possible on my family for emotional support. We do not usually discuss  emotions with each other.',
        styleAssociation: 'da',
        styleAssociationValue: 1,
      },
      {
        question:
          'I am good at listening to other people’s needs in my family as well as at expressing my own.',
        styleAssociation: 'sa',
        styleAssociationValue: 1,
      },
      {
        question:
          'I have a habit of chronically people-pleasing family members in hopes that they will value me  more.',
        styleAssociation: 'ap',
        styleAssociationValue: 1,
      },
      {
        question: 'I avoid being alone or excluded by family members at all costs.',
        styleAssociation: 'ap',
        styleAssociationValue: 1,
      },
      {
        question:
          'If I have a conflict with a member of my family, I will express my feelings and try to understand  what caused them to act that way.',
        styleAssociation: 'sa',
        styleAssociationValue: 1,
      },
      {
        question: 'There is a history of chronic conflict and chaos in my family dynamic.',
        styleAssociation: 'fa',
        styleAssociationValue: 1,
      },
      {
        question:
          'I avoid too much emotional closeness with my family members and prefer to keep things light,  easy and distant.',
        styleAssociation: 'da',
        styleAssociationValue: 1,
      },
      {
        question:
          'I sometimes feel as though I am constantly chasing after love and approval from members in my  family.',
        styleAssociation: 'ap',
        styleAssociationValue: 1,
      },
      {
        question:
          'I find it difficult to trust others in my family dynamic and am often suspicious.',
        styleAssociation: 'fa',
        styleAssociationValue: 1,
      },
      {
        question:
          'I find that setting boundaries comes naturally to me and I am comfortable communicating about  them.',
        styleAssociation: 'sa',
        styleAssociationValue: 1,
      },
      {
        question:
          'I often threaten to stop talking to members of my family but usually change my mind later.',
        styleAssociation: 'fa',
        styleAssociationValue: 1,
      },
      {
        question:
          'I often avoid conflict and feel very hurt by criticism from anyone in my family.',
        styleAssociation: 'da',
        styleAssociationValue: 1,
      },
      {
        question:
          'I talk about any resentments I have with members of my family and try to actively work through  them in healthy ways.',
        styleAssociation: 'sa',
        styleAssociationValue: 1,
      },
      {
        question:
          'I become afraid and anxious if I feel a family member being disconnected or distant.',
        styleAssociation: 'ap',
        styleAssociationValue: 1,
      },
      {
        question:
          'I spend much more time wondering about what others think of me than I spend reflecting about  what I personally want out of life/what makes me happy.',
        styleAssociation: 'ap',
        styleAssociationValue: 1,
      },
      {
        question:
          'I am often either very present with family members or quite avoidant with family members –  there is usually not a middle ground.',
        styleAssociation: 'fa',
        styleAssociationValue: 1,
      },
      {
        question:
          'If I don’t feel included in family events or conversations, I can become sad and anxious.',
        styleAssociation: 'ap',
        styleAssociationValue: 1,
      },
      {
        question: 'I often feel protective over my space, privacy and belongings.',
        styleAssociation: 'da',
        styleAssociationValue: 1,
      },
      {
        question: 'I am emotionally stable in my family relationships.',
        styleAssociation: 'sa',
        styleAssociationValue: 1,
      },
      {
        question:
          'I tend to operate in extremes between being very emotionally available and then requiring time  and space to myself.',
        styleAssociation: 'fa',
        styleAssociationValue: 1,
      },
      {
        question: 'I find it too easy to open up to people and sometimes “over-share” with others.',
        styleAssociation: 'ap',
        styleAssociationValue: 1,
      },
      {
        question:
          'I do not express my needs to others easily because I prefer to meet my needs on my own.',
        styleAssociation: 'da',
        styleAssociationValue: 1,
      },
      {
        question: 'I prefer to avoid any physical affection with family members (ex. Hugs).',
        styleAssociation: 'da',
        styleAssociationValue: 1,
      },
      {
        question: 'I hunger for closeness, but often fear being truly vulnerable to my family.',
        styleAssociation: 'fa',
        styleAssociationValue: 1,
      },
      {
        question: 'I feel that it is easy to express my needs to members of my family.',
        styleAssociation: 'sa',
        styleAssociationValue: 1,
      },
      {
        question: 'I trust my family members and know that we can rely on one another if needed.',
        styleAssociation: 'sa',
        styleAssociationValue: 1,
      },
      {
        question:
          'My family members know that I am independent and prefer to handle life situations on my own.',
        styleAssociation: 'da',
        styleAssociationValue: 1,
      },
    ],

    results: {
      FA: {
        description: {
          title: 'Fearful Avoidant',
          content: `As a fearful avoidant, it’s likely that there is a history of chronic conflict in your family dynamics.
  
            As a result, you experience both anxious and avoidant tendencies, which cause you to swing between craving connection and being emotionally present, to fearing vulnerability and withdrawing from your family.
            
            Some common characteristics of a fearful avoidant attachment style include:`,
        },

        strengths: [
          'Highly empathetic',
          'Attuned to the emotions and needs of others',
          'Can connect deeply with others',
        ],

        challanges: [
          'Oscillate between being emotionally available and very withdrawn',
          'When hurt, you push family away and say things that you later regret',
          'Often suspicious and finds it difficult to trust family members',
        ],

        howWasItFormed: {
          title: 'How Was Your Attachment Style Formed?',
          content: `As you may already know, attachment styles are formed during childhood (although they may shift based on experiences you have later in life). 
  
            In childhood, it is likely that you experienced some form of emotional volatility in your household which caused you to subconsciously associate closeness with betrayal and conflict. 
            
            As a result, vulnerability may make you feel uncomfortable in your family, even though subconsciously, you desperately crave it.`,
          assetUrl: '/images/MembersQuiz/quiz-results-fa.svg',
        },

        whatDoesItMean: {
          title: 'How Do These Characteristics Play Out In Family Relationships?',
          content: `As a fearful avoidant, it’s likely that you experienced a lot of chaos and conflict in your family dynamic growing up. 
  
            As a result, in adulthood, you may associate vulnerability, closeness and love – with betrayal and fear. 
            
            On one hand, you hunger for closeness and want to be vulnerable with your family, but you also have built-in negative associations to this kind of intimacy, which puts you on high alert. 
            
            It’s hard for you not to be suspicious of their intentions, so you find it difficult to trust as you have a deep fear of betrayal.
            
            This conflict between wanting connection and also fearing it causes you to oscillate between being very emotionally present, and being very withdrawn and needing space.
            
            Often there is no middle ground, which can cause a lot of inner unrest, and conflict with family members. `,
          content2: `It’s likely that you also struggle to communicate your needs and boundaries – and that other people in your family do, too. 
  
            Which means that resentments can brew and strong emotional responses are not uncommon, which often later leads to regret or family members temporarily cutting each other off.
            
            However, you still crave love, connection and closeness. And so does your family. It’s just that you have negative associations to vulnerability, making it harder for you to let down your guard, communicate your needs and boundaries, and to trust that just maybe, behind their own pain, they want what’s best for you. `,
          assetUrl: '/images/MembersQuiz/quiz-results-bg.svg',
        },

        wordsOfEcouragement: {
          title: '',
          content: `The good news is that you do have a chance as an adult to change these automatic, subconscious patterns, and to learn how to relate with your family in healthy ways so you can feel safe, calm and connected.`,
        },

        // graph: {
        //   title: 'Your Secondary Attachment Style & Why It Matters',
        //   content: `Attachment styles are formed in varying proportions based on the experiences that you may have had. This means that you may carry other characteristics from other attachment styles that surface in specific situations.

        //               This is why it’s important to also address your secondary attachment style so you can work on any additional behaviors or thinking patterns that might be subconsciously sabotaging your relationships or causing you inner turmoil.`,
        //   assetUrl: '',
        // },

        secondaryStyle: {
          title: 'Your Secondary Attachment Style & Why It Matters',
          description: `Attachment styles are formed in varying proportions based on the experiences that you may have had. This means that you may carry other characteristics from other attachment styles that surface in specific situations.
  
            This is why it’s important to also address your secondary attachment style so you can work on any additional behaviors or thinking patterns that might be subconsciously sabotaging your relationships with your family members, and causing you inner turmoil. `,
        },

        // recommendedCourses: ['1', '2', '3'],

        nextSteps: {
          title: 'Your Next Steps And Recommended Courses',
          content: `What we recommend is that you first work on your primary attachment style – which is the style you see at the top of your chart with the highest percentage, and then after that, move onto your secondary attachment style, which is your next highest percentage.
  
            To help you get started with your transformation, below we have recommended some specific courses based on your results that’ll help you become more securely attached and build healthy relationships with your family. 
            
            Many of our students who have taken these courses have reported being more securely attached within months of doing the course work. So we’re sure if you put in the effort, the same is possible for you too.`,
        },

        otherQuizzes: {
          title: 'What’s Your Attachment Style With Friends, Family & Romantic Partners?',
          content: `Did you know that your attachment style is the single largest predictor of whether your relationships thrive… or whether they hardly ever survive?
  
            This is not just your family relationships – but your relationships with your friends and romantic relationships too.
            
            To discover your attachment style in each of these areas - take another quiz!`,
        },
      },
      DA: {
        description: {
          title: 'Dismissive Avoidant',
          content: `As someone with a dismissive avoidant attachment style, it’s likely that you rely on your family as little as possible for emotional support, and that you rarely discuss emotions with each other. 
  
            To avoid conflict and criticism, you prefer to keep things light and easy, and to manage your life with as little involvement from others as possible.
            
            Common characteristics of a dismissive avoidant attachment style include:`,
        },

        strengths: [
          'Analytical, logical and practical when making decisions',
          'Can be deeply empathetic and attuned to people’s feelings',
          'Can be very supportive with more practical matters',
        ],

        challanges: [
          'Feels very uncomfortable being vulnerable or too emotional with family',
          'Very private and protective over personal space, belongings and life',
          'Avoids conflict and feels hurt easily by criticism',
        ],

        howWasItFormed: {
          title: 'How Was Your Attachment Style Formed?',
          content: `As you may already know, attachment styles are formed during childhood (although they may shift based on experiences you have later in life). 
  
            In childhood, it is likely that you experienced some form of emotional neglect – meaning your needs around connection were largely unmet. You may have also been shamed for having certain emotions.
            
            So as an adult, you find it difficult, and even overwhelming, to connect emotionally with others.`,
          assetUrl: '/images/MembersQuiz/quiz-results-da.svg',
        },

        whatDoesItMean: {
          title: 'How Do These Characteristics Play Out In Family Relationships?',
          content: `It’s likely that you rely on your family as little as possible for emotional support, or any support for that matter, as you’re used to meeting your own needs. 
  
            In fact, emotions are rarely discussed within the family, and to keep this “safe” distance between others and your emotions, you prefer to keep things light and easy, and to avoid conflict at all costs. 
            
            And if conflict does arise, you often feel very hurt if criticized because it reminds you of when you were shamed or criticized as a child for expressing certain emotions, or for getting something wrong.
            
            You also may become easily annoyed when others infringe on your personal space as you’re very protective of your time and belongings.`,
          content2: `Although it might seem like you’re fiercely independent and perfectly equipped to meet all of your needs, this separation from those you love causes you a lot of inner turmoil.
  
            The thing is, you really do want to connect on a deeper level, it’s just that vulnerability and intense emotions can make you feel scared and overwhelmed. 
            
            You got so used to taking care of your emotions and needs as a child, you may not know how to let people in as an adult.`,
          assetUrl: '/images/MembersQuiz/quiz-results-bg.svg',
        },

        wordsOfEcouragement: {
          title: '',
          content: `The good news is that you do have a chance as an adult to change these automatic, subconscious patterns so you can build healthy, safe and connected relationships with your family as an adult.`,
        },

        secondaryStyle: {
          title: 'Your Secondary Attachment Style & Why It Matters',
          description: `Attachment styles are formed in varying proportions based on the experiences that you may have had. This means that you may carry other characteristics from other attachment styles that surface in specific situations.
  
            This is why it’s important to also address your secondary attachment style so you can work on any additional behaviors or thinking patterns that might be subconsciously sabotaging your relationships with your family members, and causing you inner turmoil. `,
        },

        nextSteps: {
          title: 'Your Next Steps And Recommended Courses',
          content: `What we recommend is that you first work on your primary attachment style – which is the style you see at the top of your chart with the highest percentage, and then after that, move onto your secondary attachment style, which is your next highest percentage.
  
            To help you get started with your transformation, below we have recommended some specific courses based on your results that’ll help you become more securely attached and build healthy relationships with your family. 
            
            Many of our students who have taken these courses have reported being more securely attached within months of doing the course work. So we’re sure if you put in the effort, the same is possible for you too.`,
        },

        otherQuizzes: {
          title: 'What’s Your Attachment Style With Friends, Family & Romantic Partners?',
          content: `Did you know that your attachment style is the single largest predictor of whether your relationships thrive… or whether they hardly ever survive?
  
            This is not just your family relationships – but your relationships with your friends and romantic relationships too.
            
            To discover your attachment style in each of these areas - take another quiz!`,
        },
      },
      AP: {
        description: {
          title: 'Anxious Preoccupied',
          content: `As someone who has an anxious preoccupied attachment style, you may have a deep fear that you’ll be excluded or abandoned by your family.
  
            This fear causes you to subconsciously people please in an attempt to maintain the relationships with your family. However, this behaviour can cause you to neglect your personal needs and create challenges in your family dynamics. 
            
            Some common characteristics of an anxious preoccupied attachment style include:`,
        },

        strengths: [
          'Highly empathetic and giving with time, energy and emotions',
          'Attuned to the emotions, needs and wants of others',
          'A natural at connecting deeply with others',
        ],

        challanges: [
          'Constant worry that your family will exclude or abandon you',
          'Prone to people pleasing and self-abandonment to avoid being left out',
          'Feels like you’re constantly chasing after love and approval by family members',
        ],

        howWasItFormed: {
          title: 'How Was Your Attachment Style Formed?',
          content: `As you may already know, attachment styles are formed during childhood (although they may shift based on experiences you have later in life). 
  
            In childhood, it’s likely that you experienced inconsistent emotional support – meaning your needs around connection were sometimes unmet.
            
            As a result, you often felt abandoned as a child, so as an adult, you chronically people please and seek approval to avoid being abandoned.`,
          assetUrl: '/images/MembersQuiz/quiz-results-ap.svg',
        },

        whatDoesItMean: {
          title: 'How Do These Characteristics Play Out In Family Relationships?',
          content: `It’s likely that you may feel insecure in your family relationships because you have a deep, subconscious fear that they’ll abandon or exclude you.
  
            In fact, this fear might be so strong that you have a habit of chronically people pleasing in the hope that they’ll love and approve of you more. 
            
            This is a subconscious strategy to keep yourself safe – it’s not intentional. But as a result, it’s likely that you abandon yourself constantly in an attempt to get your family’s validation.
            
            You may even find yourself spending a lot of time wondering what others think of you and how happy they are with your life choices, rather than you focusing on what you want in life.`,
          content2: `That being said, you’re most likely a natural at connecting deeply, and you’re highly attuned to the emotions and needs of others. But the downside to this is if you notice a subtle shift in the family dynamic where you feel less connected, or you discover that you’ve been left out of a family event, you can become quite sad or anxious. 
  
            To restore connection, you may people please and do anything to regain closeness and get their approval, especially as you don’t like to spend too much time on your own. This keeps you trapped in a cycle of self-abandonment, which can lead to insecurity, loneliness and challenges with self-love. 
            
            It’s likely that you feel very comfortable with sharing personal information about yourself with your family, but as you struggle with boundaries, sometimes you may overshare in an attempt to feel connected. `,
          assetUrl: '/images/MembersQuiz/quiz-results-bg.svg',
        },

        wordsOfEcouragement: {
          title: '',
          content: `The good news is that you do have a chance as an adult to change these automatic, subconscious patterns. And once you do, you can build and maintain healthy family relationships that make you feel safe, calm, loved and deeply connected.`,
        },

        secondaryStyle: {
          title: 'Your Secondary Attachment Style & Why It Matters',
          description: `Attachment styles are formed in varying proportions based on the experiences that you may have had. This means that you may carry other characteristics from other attachment styles that surface in specific situations.
  
            This is why it’s important to also address your secondary attachment style so you can work on any additional behaviors or thinking patterns that might be subconsciously sabotaging your relationships with your family members, and causing you inner turmoil. `,
        },

        nextSteps: {
          title: 'Your Next Steps And Recommended Courses',
          content: `What we recommend is that you first work on your primary attachment style – which is the style you see at the top of your chart with the highest percentage, and then after that, move onto your secondary attachment style, which is your next highest percentage.
  
            To help you get started with your transformation, below we have recommended some specific courses based on your results that’ll help you become more securely attached and build healthy relationships with your family. 
            
            Many of our students who have taken these courses have reported being more securely attached within months of doing the course work. So we’re sure if you put in the effort, the same is possible for you too.`,
        },

        otherQuizzes: {
          title: 'What’s Your Attachment Style With Friends, Family & Romantic Partners?',
          content: `Did you know that your attachment style is the single largest predictor of whether your relationships thrive… or whether they hardly ever survive?
  
            This is not just your family relationships – but your relationships with your friends and romantic relationships too.
            
            To discover your attachment style in each of these areas - take another quiz!`,
        },
      },
      SA: {
        description: {
          title: 'Secure Attachment',
          content: `As a securely-attached individual, it’s likely that you feel at ease with your family because you’re comfortable with communicating your needs, expressing your emotions and setting boundaries. 
  
            Overall, you feel emotionally stable in your family relationships and like you can trust them to be there for you when needed.
            
            Common characteristics of a secure attachment style include:`,
        },

        strengths: [
          'Feel comfortable with giving and receiving love and support ',
          'Natural ability to express needs, boundaries and emotions ',
          'Feels emotionally stable and able to resolve conflicts when they arise',
        ],

        challanges: [
          'Can struggle to relate with family members who have an insecure attachment style',
          'May feel frustrated with people who often have emotional problems',
          'Can feel confused when challenges arise and other people don’t communicate effectively',
        ],

        howWasItFormed: {
          title: 'How Was Your Attachment Style Formed?',
          content: `As you may already know, attachment styles are formed during childhood (although they may shift based on experiences you have later in life). 
  
            It’s likely that you had a healthy relationship with your caregivers during childhood. 
            
            You were probably encouraged to express yourself, and your needs for emotional and physical support were consistently met. 
            
            That’s why as an adult, it’s easy for you to maintain and build supportive, communicative relationships with your family.`,
          assetUrl: '/images/MembersQuiz/quiz-results-sa.svg',
        },

        whatDoesItMean: {
          title: 'How Do These Characteristics Play Out In Family Relationships?',
          content: `As someone who is securely attached, it’s likely that you’re able to consistently communicate your feelings and needs with your family and actively listen when they express theirs. 
  
            If conflicts do arise, or someone oversteps a boundary, you know how to effectively resolve the issue and communicate what you need in the situation, while giving the other person a chance to express how they feel.
            
            You’re also able to self-soothe and deal with personal problems on your own when they arise, yet you’re also comfortable with sharing personal information and struggles with your family. 
            
            Overall, you feel emotionally stable in your family dynamic and trust them to offer support when needed.`,
          content2: `However, where you might experience problems is that you can struggle to relate to family members who have a more insecure attachment style.
  
            It can be hard for you to understand why they don’t just calmly say what they mean and need, or why they regularly have emotional struggles with others, or within themselves.
            
            This can lead to conflict and both parties feeling misunderstood and unseen.
            
            What’s more, when you’re feeling this way, it can trigger your secondary attachment style – which might make you become more avoidant or anxious, depending on the situation.`,
          assetUrl: '/images/MembersQuiz/quiz-results-bg.svg',
        },

        wordsOfEcouragement: {
          title: '',
          content: `The good news is, you can learn how to better understand and relate to your loved ones and reprogram your secondary attachment style so that you can improve your relationships and feel more connected, harmonious and calm.`,
        },

        secondaryStyle: {
          title: 'Your Secondary Attachment Style & Why It Matters',
          description: `Attachment styles are formed in varying proportions based on the experiences that you may have had. This means that you may carry other characteristics from other attachment styles that surface in specific situations.
  
            This is why it’s important to also address your secondary attachment style so you can work on any additional behaviors or thinking patterns that might be subconsciously sabotaging your relationships with your family members, and causing you inner turmoil. `,
        },

        nextSteps: {
          title: 'Your Next Steps And Recommended Courses',
          content: `What we recommend is that you first work on your primary attachment style – which is the style you see at the top of your chart with the highest percentage, and then after that, move onto your secondary attachment style, which is your next highest percentage.
  
            To help you get started with your transformation, below we have recommended some specific courses based on your results that’ll help you become more securely attached and build healthy relationships with your family. 
            
            Many of our students who have taken these courses have reported being more securely attached within months of doing the course work. So we’re sure if you put in the effort, the same is possible for you too.`,
        },

        otherQuizzes: {
          title: 'What’s Your Attachment Style With Friends, Family & Romantic Partners?',
          content: `Did you know that your attachment style is the single largest predictor of whether your relationships thrive… or whether they hardly ever survive?
  
            This is not just your family relationships – but your relationships with your friends and romantic relationships too.
            
            To discover your attachment style in each of these areas - take another quiz!`,
        },
      },
    },
  },

  // Friends
  {
    id: '3',
    type: 'friends',
    title: 'Friends Quiz',
    description:
      'How do you feel and show up in your friendships? Take this quiz to discover how you connect in your friendships.',
    image: '/images/MembersQuiz/quiz-friends.svg',
    isNew: true,
    color: 'orange',
    colorSecondary: 'bg-orange-secondary',
    colorLight: 'bg-orange-light',
    colorDark: 'bg-orange-dark',

    introBgDesktop: '/images/MembersQuiz/quiz-results-friends-intro-desktop-bg.svg',
    introBgMobile: '/images/MembersQuiz/quiz-results-friends-intro-mobile-bg.svg',

    questions: [
      {
        question:
          'I can oscillate between being very emotionally available in friendships to becoming very  withdrawn, especially when I feel that my emotional energy has been over-used.',
        styleAssociation: 'fa',
        styleAssociationValue: 1,
      },
      {
        question:
          'I am able to show up to support close friends regularly and I also feel comfortable receiving  support from my close friends.',
        styleAssociation: 'sa',
        styleAssociationValue: 1,
      },
      {
        question: 'I sometimes become needy and afraid of being abandoned by my friends.',
        styleAssociation: 'ap',
        styleAssociationValue: 1,
      },
      {
        question: 'I prefer to keep my distance from sharing anything emotional with my friends.',
        styleAssociation: 'da',
        styleAssociationValue: 1,
      },
      {
        question:
          'I feel completely comfortable around my friends and consistently enjoy their company.',
        styleAssociation: 'sa',
        styleAssociationValue: 1,
      },
      {
        question:
          'I can easily feel taken advantage of by friendships, leaving me to feel angry or resentful.',
        styleAssociation: 'fa',
        styleAssociationValue: 1,
      },
      {
        question:
          'I feel very irritable and annoyed when others infringe on my need for space or time alone.',
        styleAssociation: 'da',
        styleAssociationValue: 1,
      },
      {
        question: 'I prefer not to spend as little time alone as possible.',
        styleAssociation: 'ap',
        styleAssociationValue: 1,
      },
      {
        question:
          'I make clear and conscious choices about what type of friends I want to surround myself with.',
        styleAssociation: 'sa',
        styleAssociationValue: 1,
      },
      {
        question: 'I tend to be out of touch with my emotions quite frequently.',
        styleAssociation: 'da',
        styleAssociationValue: 1,
      },
      {
        question: 'I hold onto grudges in friendships.',
        styleAssociation: 'fa',
        styleAssociationValue: 1,
      },
      {
        question:
          'I would rather go to my friends with any problems I’m facing at work because I have difficulty  working things through on my own.',
        styleAssociation: 'ap',
        styleAssociationValue: 1,
      },
      {
        question: 'I actively fear being excluded by my friends.',
        styleAssociation: 'ap',
        styleAssociationValue: 1,
      },
      {
        question: 'I know how to process my emotions and meet my own needs when I get upset.',
        styleAssociation: 'sa',
        styleAssociationValue: 1,
      },
      {
        question:
          'I am slow to make friends, but will often keep the same friends for very long periods of time.',
        styleAssociation: 'da',
        styleAssociationValue: 1,
      },
      {
        question: 'I worry that my friends will lose interest in me or eventually get bored of me.',
        styleAssociation: 'ap',
        styleAssociationValue: 1,
      },
      {
        question: 'I am effective at compromising and communicating with friends.',
        styleAssociation: 'sa',
        styleAssociationValue: 1,
      },
      {
        question:
          'I have a tendency to hold things in when I’m upset with friends and sometimes I eventually cut  them off instead of discussing these things.',
        styleAssociation: 'fa',
        styleAssociationValue: 1,
      },
      {
        question: 'I strongly dislike feeling vulnerable in front of my friends.',
        styleAssociation: 'da',
        styleAssociationValue: 1,
      },
      {
        question:
          'If I notice my friends showing any signs of coldness, I panic and want to get closer as quickly as  possible.',
        styleAssociation: 'ap',
        styleAssociationValue: 1,
      },
      {
        question:
          'I am good at forgiving if a friend hurts me, but I will also set healthy boundaries if I feel I need  to.',
        styleAssociation: 'sa',
        styleAssociationValue: 1,
      },
      {
        question: 'I often express anger very strongly when I feel hurt, powerless or betrayed.',
        styleAssociation: 'fa',
        styleAssociationValue: 1,
      },
      {
        question:
          'I don’t feel as if I boundaries are ever necessary between myself and a close friend.',
        styleAssociation: 'ap',
        styleAssociationValue: 1,
      },
      {
        question:
          'I feel as though conflict is resolvable and feel equipped to work through problems effectively.',
        styleAssociation: 'sa',
        styleAssociationValue: 1,
      },
      {
        question:
          'It is not uncommon for me to experience inward emotional turbulence as well as frequent  arguments in my friendships.',
        styleAssociation: 'fa',
        styleAssociationValue: 1,
      },
      {
        question: 'I can be cold and stand-offish at times when I don’t know others very well.',
        styleAssociation: 'da',
        styleAssociationValue: 1,
      },
      {
        question:
          'I often take a very long time to have emotional or vulnerable conversations of any kind in  friendships.',
        styleAssociation: 'fa',
        styleAssociationValue: 1,
      },
      {
        question: 'I know that I am worthy of healthy, happy friendships.',
        styleAssociation: 'da',
        styleAssociationValue: 1,
      },
    ],

    results: {
      FA: {
        description: {
          title: 'Fearful Avoidant',
          content: `As a fearful avoidant, friendships can cause a lot of inward emotional turbulence for you. 
  
            This is because you experience both anxious and avoidant tendencies, which can cause you to swing between being very emotionally available, to being very withdrawn and even drained by your friendships. 
            
            On one hand, you deeply crave connection and closeness, but on the other – friendships can bring up a lot of fears and uneasiness, too.
            
            Some common characteristics of a fearful avoidant attachment style include:`,
        },

        strengths: [
          'Highly empathetic',
          'Attuned to the emotions and needs of others',
          'Can connect deeply with others',
        ],

        challanges: [
          'Oscillate between being emotionally available and very withdrawn',
          'Holds onto grudges and can experience frequent arguments in friendshsips',
          'Often feels taken advantage of, which causes anger and resentment',
        ],

        howWasItFormed: {
          title: 'How Was Your Attachment Style Formed?',
          content: `As you may already know, attachment styles are formed during childhood (although they may shift based on experiences you have later in life). 
  
            In childhood, it is likely that you experienced some form of emotional volatility in your household which caused you to subconsciously associate closeness with betrayal or disappointment. 
            
            As a result, vulnerability may make you feel uncomfortable in your friendships, even though deep down, you desperately crave it.`,
          assetUrl: '/images/MembersQuiz/quiz-results-fa.svg',
        },

        whatDoesItMean: {
          title: 'How Do These Characteristics Play Out In Friendships?',
          content: `As a fearful avoidant, it is likely that you have some fears around betrayal and your worthiness, which can put you on high alert in your friendships.
  
            On one hand, when you first click with a new friend, you can be extremely emotionally present and great at forming a deep connection. 
            
            However, if you start to feel like your emotional energy is being overused or like you’re being taken advantage of, you can become very withdrawn. 
            
            This is because as a fearful avoidant, you sometimes struggle to communicate needs and boundaries with people, and can fall into people pleasing behaviors which can make you feel exhausted.`,
          content2: `And rather than communicate how you’re feeling or establish necessary boundaries if someone has upset you or overstepped the mark, you internalize these feelings which can lead to resentment and anger. 
  
            Over time, this can lead to grudges and frequent arguments in your friendships, or you may even cut friends out of your life rather than share how you feel.
            
            The problem is that you deeply crave love, connection and closeness. It’s just that you have some negative associations to intimacy, which stem from your childhood. This can make it harder for you to let down your guard and trust that others really do want to be a good friend to you.`,
          assetUrl: '/images/MembersQuiz/quiz-results-bg.svg',
        },

        wordsOfEcouragement: {
          title: '',
          content: `The good news is that you do have a chance as an adult to change these automatic, subconscious patterns. And once you do, you can build and maintain healthy and lasting friendships that make you feel safe, calm, loved and deeply connected.`,
        },

        secondaryStyle: {
          title: 'Your Secondary Attachment Style & Why It Matters',
          description: `Attachment styles are formed in varying proportions based on the experiences that you may have had. This means that you may carry other characteristics from other attachment styles that surface in specific situations.
  
            This is why it’s important to also address your secondary attachment style so you can work on any additional behaviors or thinking patterns that might be preventing you from having deeply connected and harmonious friendships, or causing you inner turmoil.`,
        },

        nextSteps: {
          title: 'Your Next Steps And Recommended Courses',
          content: `What we recommend is that you first work on your primary attachment style – which is the style you see at the top of your chart with the highest percentage, and then after that, move onto your secondary attachment style, which is your next highest percentage.
  
            To help you get started with your transformation, below we have recommended some specific courses based on your results that’ll help you become more securely attached and build lasting friendships. 
            
            Many of our students who have taken these courses have reported being more securely attached within months of doing the course work. So we’re sure if you put in the effort, the same is possible for you too. `,
        },

        otherQuizzes: {
          title: 'What’s Your Attachment Style With Friends, Family & Romantic Partners?',
          content: `Did you know that your attachment style is the single largest predictor of whether your relationships thrive… or whether they hardly ever survive?
  
            This is not just your family relationships – but your relationships with your friends and romantic relationships too.
            
            To discover your attachment style in each of these areas - take another quiz!`,
        },
      },
      DA: {
        description: {
          title: 'Dismissive Avoidant',
          content: `As someone with a dismissive avoidant attachment style, it’s likely that you take your time building friendships as you find it very difficult to be vulnerable or share anything emotional early on.
  
            And as a result, you may come across as being stand-offish, or even get annoyed when others infringe on your personal space or try to get too close too soon.
            
            Common characteristics of a dismissive avoidant attachment style include:`,
        },

        strengths: [
          'Analytical, logical and practical when making decisions',
          'Can be deeply empathetic and attuned to people’s feelings',
          'Once trust has been built, will keep friends for a very long time',
        ],

        challanges: [
          'Dislikes being vulnerable or too emotional with friends',
          'Is often out of touch with emotions and can come across as being “cold”',
          'Can feel annoyed when others infringe on your personal space',
        ],

        howWasItFormed: {
          title: 'How Was Your Attachment Style Formed?',
          content: `As you may already know, attachment styles are formed during childhood (although they may shift based on experiences you have later in life). 
  
            In childhood, it is likely that you experienced some form of emotional neglect – meaning your needs around connection were largely unmet. You may have also been shamed for having certain emotions.
            
            So as an adult, you find it difficult, and even overwhelming, to connect with others.`,
          assetUrl: '/images/MembersQuiz/quiz-results-da.svg',
        },

        whatDoesItMean: {
          title: 'How Do These Characteristics Play Out In Friendships?',
          content: `It’s likely that you need a lot of space from your friends, and can get irritated easily or come across as being “cold” when they infringe on your personal space, or if they ask you too many personal questions.
  
            This is because you’re often out of touch with your emotions and feel very uncomfortable with being vulnerable, or sharing anything emotional, especially early on in a friendship.
            
            In fact, the reason intense emotions can feel so overwhelming is because you might have been shamed for them as a child. This is why as an adult, you might prefer to get your needs for connection met through things, rather than people. `,
          content2: `Given this, it can take you a really long time to build close friendships, but once you do, you tend to keep the same friends for a very long time. Plus, given your logical, analytical mind, you can be great at giving practical advice!
  
            But when it comes to connecting emotionally with friends, you like to keep a divide between them and the vulnerable part of yourself. 
            
            This can cause issues in your friendship, and also make you feel very lonely. The thing is, you really do what to connect, it’s just that vulnerability and connection can feel scary. And as a result of this conflict in needs, you experience a lot of inner turmoil.`,
          assetUrl: '/images/MembersQuiz/quiz-results-bg.svg',
        },

        wordsOfEcouragement: {
          title: '',
          content: `The good news is that you do have a chance as an adult to change these automatic, subconscious patterns. And once you do, you can build and maintain healthy and lasting friendships that make you feel safe, calm, loved and connected. `,
        },

        secondaryStyle: {
          title: 'Your Secondary Attachment Style & Why It Matters',
          description: `Attachment styles are formed in varying proportions based on the experiences that you may have had. This means that you may carry other characteristics from other attachment styles that surface in specific situations.
  
            This is why it’s important to also address your secondary attachment style so you can work on any additional behaviors or thinking patterns that might be preventing you from having deeply connected and harmonious friendships, or causing you inner turmoil.`,
        },

        nextSteps: {
          title: 'Your Next Steps And Recommended Courses',
          content: `What we recommend is that you first work on your primary attachment style – which is the style you see at the top of your chart with the highest percentage, and then after that, move onto your secondary attachment style, which is your next highest percentage.
  
            To help you get started with your transformation, below we have recommended some specific courses based on your results that’ll help you become more securely attached and build lasting friendships. 
            
            Many of our students who have taken these courses have reported being more securely attached within months of doing the course work. So we’re sure if you put in the effort, the same is possible for you too. `,
        },

        otherQuizzes: {
          title: 'What’s Your Attachment Style With Friends, Family & Romantic Partners?',
          content: `Did you know that your attachment style is the single largest predictor of whether your relationships thrive… or whether they hardly ever survive?
  
            This is not just your family relationships – but your relationships with your friends and romantic relationships too.
            
            To discover your attachment style in each of these areas - take another quiz!`,
        },
      },
      AP: {
        description: {
          title: 'Anxious Preoccupied',
          content: `As someone who has an anxious preoccupied attachment style, you may feel quite insecure in your friendships because you have a deep fear that you’ll be excluded or abandoned. 
  
            These fears may cause you to abandon yourself to please others and put your friends on pedestals, which causes an imbalance and may lead to “needy” behaviors in an attempt to get closer to them. 
            
            Some common characteristics of an anxious preoccupied attachment style include:`,
        },

        strengths: [
          'Highly empathetic and giving with time, energy and emotions',
          'Attuned to the emotions, needs and wants of others',
          'A natural at connecting deeply with others',
        ],

        challanges: [
          'Constant worry that friends will exclude you, abandon you, or will get bored with you',
          'Prone to people pleasing and self-abandonment to avoid being left',
          'Struggle to identify and communicate needs & boundaries, and to self-soothe when upset',
        ],

        howWasItFormed: {
          title: 'How Was Your Attachment Style Formed?',
          content: `As you may already know, attachment styles are formed during childhood (although they may shift based on experiences you have later in life). 
  
            In childhood, it is likely that you experienced inconsistent emotional support – meaning your needs around connection were sometimes unmet.
            
            As a result, you often felt abandoned as a child, so as an adult, you abandon yourself in your friendships to avoid being left by others.`,
          assetUrl: '/images/MembersQuiz/quiz-results-ap.svg',
        },

        whatDoesItMean: {
          title: 'How Do These Characteristics Play Out In Friendships?',
          content: `It’s likely that you feel quite insecure in your friendships because you fear being abandoned, excluded or like others might get bored of you.
  
            These fears can cause you to become very preoccupied with how safe and liked you feel in your social circles, which leads to people pleasing to keep people close to you.
            
            This is a subconscious strategy to stop them from leaving you – it is not intentional. 
            
            But what this means is that you often find yourself doing things for other people so that you feel loved, even if it goes against what you really want or need.
            
            What’s more, because you’re so outwardly focused on others, you might even find it hard to identify what your needs and boundaries actually are, which can lead to resentment and you living in a state of continual self-abandonment.`,
          content2: `It’s likely that you rely on your friends to help you self-soothe and deal with problems, rather than being able to calm yourself and work through issues on your own first. 
  
            You’re most probably also very empathetic and highly attuned to the needs and emotions of others, which makes you a great friend. 
            
            But the downside to this superpower is that if you notice any subtle changes in behavior, you panic and may even assume that you’ve done something wrong. As a result, you’ll try to regain closeness as soon as possible, especially as you don’t like to spend too much time on your own. `,
          assetUrl: '/images/MembersQuiz/quiz-results-bg.svg',
        },

        wordsOfEcouragement: {
          title: '',
          content: `The good news is that you do have a chance as an adult to change these automatic, subconscious patterns. And once you do, you can build and maintain healthy and lasting friendships that make you feel safe, calm, loved and deeply connected.`,
        },

        secondaryStyle: {
          title: 'Your Secondary Attachment Style & Why It Matters',
          description: `Attachment styles are formed in varying proportions based on the experiences that you may have had. This means that you may carry other characteristics from other attachment styles that surface in specific situations.
  
            This is why it’s important to also address your secondary attachment style so you can work on any additional behaviors or thinking patterns that might be preventing you from having deeply connected and harmonious friendships, or causing you inner turmoil.`,
        },

        nextSteps: {
          title: 'Your Next Steps And Recommended Courses',
          content: `What we recommend is that you first work on your primary attachment style – which is the style you see at the top of your chart with the highest percentage, and then after that, move onto your secondary attachment style, which is your next highest percentage.
  
            To help you get started with your transformation, below we have recommended some specific courses based on your results that’ll help you become more securely attached and build lasting friendships. 
            
            Many of our students who have taken these courses have reported being more securely attached within months of doing the course work. So we’re sure if you put in the effort, the same is possible for you too. `,
        },

        otherQuizzes: {
          title: 'What’s Your Attachment Style With Friends, Family & Romantic Partners?',
          content: `Did you know that your attachment style is the single largest predictor of whether your relationships thrive… or whether they hardly ever survive?
  
            This is not just your family relationships – but your relationships with your friends and romantic relationships too.
            
            To discover your attachment style in each of these areas - take another quiz!`,
        },
      },
      SA: {
        description: {
          title: 'Secure Attachment',
          content: `As a securely-attached individual, it’s likely that you feel at ease in friendships because you’re comfortable with communicating your needs, expressing your emotions and setting boundaries. 
  
            As a result, you find it easy to make friends and to give and receive support, because deep down, you know that you’re worthy of healthy, happy friendships.
            
            Common characteristics of a secure attachment style include:`,
        },

        strengths: [
          'At ease in friendships – feels comfortable with giving and receiving support',
          'Natural ability to express needs, boundaries and emotions',
          'You believe that you’re worthy of healthy, happy friendships',
        ],

        challanges: [
          'Can find it difficult to relate to those with an insecure attachment style',
          'May feel frustrated with friends who have constant emotional problems',
          'Can feel confused when challenges arise and other people don’t communicate properly',
        ],

        howWasItFormed: {
          title: 'How Was Your Attachment Style Formed?',
          content: `As you may already know, attachment styles are formed during childhood (although they may shift based on experiences you have later in life). 
  
            It’s likely that you had a healthy relationship with both of your caregivers during childhood. 
            
            You were probably encouraged to express yourself, and your needs for emotional and physical support were consistently met. 
            
            That’s why as an adult, it’s easier for you to create supportive, communicative friendships with others.`,
          assetUrl: '/images/MembersQuiz/quiz-results-sa.svg',
        },

        whatDoesItMean: {
          title: 'How Do These Characteristics Play Out In Friendships?',
          content: `As someone who is securely attached, it’s likely that you’re able to consistently communicate your feelings and needs in friendships, and actively listen when others express theirs. 
  
            Because you feel comfortable in the relationship to yourself, you feel at ease around your friends and consistently enjoy their company. 
            
            And if conflicts do arise, or someone oversteps a boundary, you know how to effectively resolve the issue and communicate what you need in the situation. 
            
            You’re no stranger to compromising where necessary too, and enjoying giving and receiving support in equal measures.
            
            You’re also able to self-soothe and deal with personal problems on your own when they arise, yet you’re also comfortable with sharing personal information and struggles with your friends.`,
          content2: `However, where you might experience problems is that you can struggle to relate to your friends if they have a more insecure attachment style, and therefore may have more anxiety and fears in friendships than you. 
  
            It can be hard for you to understand why they don’t just calmly say what they mean and need, or why they can be more sensitive.
            
            Or why they regularly have emotional struggles with others, or within themselves.
            
            This can lead to conflict and both parties feeling misunderstood and unseen.
            
            What’s more, when you’re feeling this way, it can trigger your secondary attachment style – which might make you become more avoidant or anxious, depending on the situation.`,
          assetUrl: '/images/MembersQuiz/quiz-results-bg.svg',
        },

        wordsOfEcouragement: {
          title: '',
          content: `The good news is, you can learn how to better understand and relate to your loved ones and reprogram your secondary attachment style so that you can improve your relationships and feel more connected, harmonious and calm. `,
        },

        secondaryStyle: {
          title: 'Your Secondary Attachment Style & Why It Matters',
          description: `Attachment styles are formed in varying proportions based on the experiences that you may have had. This means that you may carry other characteristics from other attachment styles that surface in specific situations.
  
            This is why it’s important to also address your secondary attachment style so you can work on any additional behaviors or thinking patterns that might be preventing you from having deeply connected and harmonious friendships, or causing you inner turmoil.`,
        },

        nextSteps: {
          title: 'Your Next Steps And Recommended Courses',
          content: `What we recommend is that you first work on your primary attachment style – which is the style you see at the top of your chart with the highest percentage, and then after that, move onto your secondary attachment style, which is your next highest percentage.
  
            To help you get started with your transformation, below we have recommended some specific courses based on your results that’ll help you become more securely attached and build lasting friendships. 
            
            Many of our students who have taken these courses have reported being more securely attached within months of doing the course work. So we’re sure if you put in the effort, the same is possible for you too. `,
        },

        otherQuizzes: {
          title: 'What’s Your Attachment Style With Friends, Family & Romantic Partners?',
          content: `Did you know that your attachment style is the single largest predictor of whether your relationships thrive… or whether they hardly ever survive?
  
            This is not just your family relationships – but your relationships with your friends and romantic relationships too.
            
            To discover your attachment style in each of these areas - take another quiz!`,
        },
      },
    },
  },
]
