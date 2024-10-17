import { EExternalRoutes } from '@/utils/constants'
import { cloneDeep } from 'lodash'

export const ROYAL_RUMBLE = {
  moneyBackGuaranteeCopy: [
    'All programs at The Personal Development School are backed by our Risk Free 100% money back guarantee!',

    "If you take our program and don't get the results you were looking for, we will issue you a FULL REFUND within 7 days of your purchase, no hard feelings and NO questions asked!",

    'You will walk away with the self awareness and emotional skills you’ve been missing to overcome the #1 obstacle that’s been preventing you from developing a healthy and happy relationship that lasts.',
  ],

  LEARNHOWTO_SEGMENT_IMAGES: [
    {
      alt: 'A man and woman lying on the couch smiling at each other. The man is holding a remote and lying on his back, the woman is sitting upright smiling down at him.',
      width: 200,
      height: 91,
      deskImageURL: 'rr-learn-tl-1.png',
    },

    {
      alt: 'A mockup of Thais teaching a live webinar with several students on-screen.',
      width: 200,
      height: 107,
      deskImageURL: 'rr-learn-tl-2.png',
    },

    {
      alt: 'Multiple images iina  collage: 3 of PDS, features like webinars, courses and the dashboard. 4 small iumages of people, 3 smiling and 1 working on a laptop.',
      width: 200,
      height: 160,
      deskImageURL: 'rr-learn-tl-3.png',
    },

    {
      alt: "2 images and a quote: One image is of a persdon writing on paper, another image of a couple sitting close reading something together. Quote: 'This is the best decision I've ever made for myself.'",
      width: 200,
      height: 103,
      deskImageURL: 'rr-learn-tl-4.png',
    },
  ],

  EXCLUSIVEBONUS_SEGMENT: [
    <>
      Gain <strong>free access to our library of over 50 bonus courses</strong> on personal
      development including - understanding others’ attachment styles, emotional mastery and
      overcoming burnout!
    </>,

    <>
      My <strong>weekly live webinars</strong> where you can ask me your own questions, share your
      experience, and discuss your challenges in an informal and intimate environment with other
      members.
    </>,

    <>
      <strong>Priority access</strong> to all upcoming promotions, offers, and new programs at The
      Personal Development School.
    </>,

    <>
      The chance to attend <strong>our regular events and socials</strong> to connect with myself,
      The Personal Development School team, and other members.
    </>,

    <>
      An invitation to our <strong>online forum and Facebook group</strong> where you have the
      opportunity to interact with a supportive community like-minded individuals who are equally
      dedicated to their healing.
    </>,
  ],

  STILLNOTSURE_SEGMENT: {
    copy1: [
      <>
        <strong>We hear you.</strong>
      </>,

      <>
        You could tackle your healing on your own, reading dozens of books on attachment styles, or
        turn to your friends or journaling practices to work through your traumas. But many of our
        members come to us after attempting these healing methods{' '}
        <strong>and seeing limited results or change.</strong>
      </>,

      'Sometimes what you need is more support, and guidance from someone who will take you through the exercises you need to really understand yourself, face yourself, and re-program your beliefs. Speaking from experience and from the experience of our members, it’s extremely difficult to do that all on your own.',
    ],

    copy3:
      'We are committed to helping you gain more self awareness and teaching you how to develop the habits and thought processes you need to see long-lasting change.',
  },

  TESTIMONIAL_SEGMENT: [
    {
      avatar: 'avatar_carrie.jpeg',
      name: 'Carrie L',
      testimonial: `Hi! I’m Carrie from northern California, USA. I’ve been a member of the PDS school since around June, 2020. This experience has been a life changer for me.  I have always been a seeker and self-improvement fan, but the courses and webinars with Thais as well as the zoom meetings with the community led by Mike, have given me actionable tools and a supportive safe space to discuss and practice them.  I am so fortunate to have found this school and so many friendly folks to share this journey!`,
    },
    {
      avatar: 'avatar_tappy.jpg',
      name: 'Tapanga P',
      testimonial: `I discovered PDS shortly after my 19th birthday, even being one of the youngest in the school, everyone is so welcoming!!
        I really love how Thais Gibson covers so many topics and goes above and beyond to cater to the needs of the members. The post-webinar breakout rooms have so many brilliant, and like-minded individuals who I always look forward to talking to!
        PDS has had such an amazing impact on my relationships, my self-esteem and has given me valuable self-awareness. The tools within PDS have provided me with the strength, and ability to heal, almost completely from my anxiety, and I feel so much more confident within myself 😊`,
    },
    {
      avatar: 'avatar_jake.png',
      name: 'Jake J',
      testimonial: `PDS has impacted my life immensely. From creating a healthy relationship to self, improving my family dynamics, impacting my awareness of my subconscious programming, to providing the skills/tools for improving my communication with others in all relationships. It has honestly changed my life for the better and am on my path towards becoming a more secure person. Not to sound too much like an infomercial, but I don’t know where I would be in my life without this place. They have created such an amazing community that is extremely supportive and is full of wonderful people. PDS has grown into something I am very proud to be a part of and look forward to seeing where this journey takes me.`,
    },
    {
      avatar: 'avatar_leona.jpg',
      name: 'Leona',
      testimonial: `Joining PDS was the single best decision I made last year as it opened my eyes to the possibility that I could dramatically improve the quality of my relationships and that my past did not have to define my future. I learned about my attachment style, core wounds and personality needs and how these have been affecting the quality of my life currently. Thais gives clear instructions as to how you can reprogramme your subconscious mind, learn to communicate more effectively and excel in all 7 areas of your life to get rid of so many roadblocks that may be holding you back from living your best life. The PDS community is a truly supportive environment for personal growth and healing, my only regret is that I did not find all this out sooner as it has been truly life changing for me! ❤️
        `,
    },
  ],

  ap: {
    TITLE: 'Anxious Preoccupied',

    HERO_SECTION: {
      headline:
        'Are You Ready For A Committed, Intimate, And Loving Relationship With Someone Who Values And Prioritizes You?',
      subheadline: `The First Step Is Watching The Short Video Below To Learn And Understand Your Relationship Patterns – And How They’re Shockingly Accurate!`,
      videoURL: 'https://storage.googleapis.com/pds_videos/RoyalRumbleAPshortvideo.mp4',
      title: 'Who Is The Anxious Preoccupied?',
      copy: 'As we send over your personalized report, take a few moments to watch this short video and read on to discover your anxious preoccupied attachment style. You’ll learn about your relationship and personal patterns and how to start your healing journey to become securely attached.',
    },

    BANNER_SEGMENT: {
      headline: `YOUR FEAR OF ABANDONMENT MAY BE GETTING IN THE WAY OF YOU FORMING HEALTHY RELATIONSHIPS THAT LAST`,
      copy: [
        'You’re an extremely empathetic person who has mastered the art of connecting with others on a deep and real level. You may be a social butterfly or deeply value being in long-term relationships. You’re an expert at reading people and are the person your friends turn to when they need help. Yet, ironically, your relationships are often a huge source of your pain in your life.',

        'Because you have such an enormous desire for deep connections, losing the people closest to you is one of your biggest fears. This deep fear causes you to do whatever it takes to stay close to them, even if it means sacrificing your own needs and boundaries in the process.',

        'Your underlying fear of abandonment is amplified in romantic relationships, especially when you find yourself dating someone who likes their space, someone who isn’t very emotionally expressive, or someone who doesn’t appear to really “need” you. When you’re met with these situations, you constantly feel like you’re giving and giving and giving, but getting nothing back in return. All of this leads you to wonder “why aren’t I enough?”.',

        'Because of this internal struggle, it’s common for you to become angry and resentful towards your partner when they’re not meeting your expectations. Not knowing how to express yourself best, you may pick fights with your partner constantly, pushing them away, only to reaffirm your beliefs that you’re going to be abandoned to end up alone.',
      ],
    },

    FAMILIAR_SEGMENTS: {
      traits: [
        [
          {
            title: 'Worrying About Breakups',
            copy: 'Once you’ve formed a strong romantic connection and feel attached to them, you soon start to worry about how long it’s going to last for.',
          },

          {
            title: 'Keeping Score',
            copy: 'Because of your skill at reading people, you can be hyper-sensitive to how much your partner is (or isn’t) loving you, over-analyzing your interactions.',
          },
        ],

        [
          {
            title: 'Jumping to Conclusions',
            copy: 'You feel intense feelings of panic when you sense your loved one is pulling away. Unanswered texts can get your head spinning.',
          },

          {
            title: 'Fearing Abandonment',
            copy: 'You spend a great deal of time feeling on edge worrying that the person or people you’ve put the most trust in might leave you one day.',
          },
        ],

        [
          {
            title: 'Taking Forever to Heal',
            copy: 'Rather than accepting relationship endings guilt-free, you catch yourself telling yourself “I’m unlovable” or “I’m not good enough”.',
          },

          {
            title: 'Putting Yourself Last',
            copy: 'You spend so much time putting other people’s wants and needs that you do a poor job assessing what you need and want from others.',
          },
        ],
      ],
      headline: `If you relate to these statements and if it feels like your relationships have pushed you to the point of exhaustion, you’re not alone. And here's what you need to understand:`,
      subHeadline: `You Are Not Broken! These Are Just Your Patterns - And Your Patterns Can Be Changed.`,
      subheadlineTwo:
        'Use the Anxious Preoccupied to Securely Attached Program to Create Deep Inner Healing, Lasting Connection and Success in Your Love Life in 30 Days!',
      subHeadlineMobile: [
        'You Are Not Broken!',

        'These Are Just Your Patterns - And Your Patterns Can Be Changed.',
      ],
    },

    ATTACHMENT_ORIGIN_SEGMENT: {
      copy1: [
        <>
          Your attachment style and the relationship challenges it brings are{' '}
          <strong>not your fault</strong>, they are a reflection of your story.
        </>,

        'An Anxious Preoccupied attachment style is what you end up with if you received inconsistent emotional support from your primary caregivers during your childhood. It doesn’t mean that you were severely neglected, but maybe in your early years your parents weren’t around much due to their work schedule or because they were busy taking care of your siblings. Or maybe they were present physically, but were cold or withdrawn, unable to express themselves, relate to you, or understand what you needed from them at the time.',
      ],

      copy2: `These early experiences contribute to how you perceive love and the role you play in your relationships to earn it. When you’ve felt forgotten or unheard as a child, you may try to make up for this through several behaviors in your adulthood. You might people-please those you care about and do whatever it takes to get closer to them. All of this is a subconscious coping mechanism that ties in with your fear of abandonment and is a subconscious strategy to stop them from leaving you. 
  
  The problem is that carrying your fears and anxious behaviors into adulthood can lead to major imbalances in your relationships and can sabotage special connections.`,

      heading1: `
        Not developing an awareness of your patterns or taking action to break them is a receipt for painful heartbreak.`,

      heading2: `
        What if I told you there was a way to change your attachment style and your beliefs without having to spend thousands of dollars on therapy or coaching sessions?`,
      heading3:
        'Use the Anxious Preoccupied to Securely Attached Program to Create Deep Inner Healing, Lasting Connection and Success in Your Love Life in 30 Days!',
    },

    THAIS_SEGMENT: {
      copy: `
        The Anxious Preoccupied to Securely Attached Program is your personal invitation to break free from your attachment trauma and create the love, safety, and connection that you deeply crave – and know, deep down, that you do deserve.`,
    },

    GAINACCESS_SEGMENT: [
      'This online program is designed to show you, step by step, how to reprogram your attachment style by teaching you highly-targeted and effective tools based on the latest research and my decades of experience counseling couples and individuals.',

      <>
        My system differs from other personal development programs because it’s designed to{' '}
        <strong>work directly with your subconscious mind</strong> – which is ESSENTIAL for any
        lasting change to occur.
      </>,
    ],

    HOWPROGRAMWORK_SEGMENT: [
      `Register for the program`,

      `Make your way through the program’s online videos at your own pace`,

      `Access your workbooks and complete your exercises`,

      `Attend optional weekly webinars and Q&As`,

      `Participate in our online communities for further discussions as you please`,

      `Get your certificate of completion`,

      `Access your course materials again whenever you need a refresh`,
    ],

    WHATPROGRAMCOVER_SEGMENT: {
      copy: [
        <>
          The Anxious Preoccupied to Securely Attached program gives you access to{' '}
          <strong>a tailored online course</strong> you can complete on your own schedule. Through
          the course of videos, highly effective exercises, and my support through intimate
          webinars, together we'll tackle a list of other emotional issues that you might deal with
          in your life that come from your attachment trauma, like:
        </>,
      ],
      bullets: [
        `Codependency and enmeshment`,
        `Having a lack of boundaries`,
        `People-pleasing`,
        `Self sabotaging`,
        `Difficulty communicating needs`,
        `Having trust issues`,
      ],
    },

    LEARNHOWTO_SEGMENT: [
      {
        title: 'Find your way',
        copy: 'Navigate love with less fear, distress and anxiety.',
      },

      {
        title: 'Feel seen',
        copy: 'Feel seen, heard, and connected in your relationships with others.',
      },

      {
        title: 'Feel confident',
        copy: 'Improve the relationship within yourself.',
      },

      {
        title: 'Be certain',
        copy: 'Gain a sense of certainty in your relationships.',
      },
    ],

    STILLNOTSURE_SEGMENT: {
      copy2: [
        'Or maybe you feel like you’re better off working with a therapist or relationship coach in a private capacity. We are big advocates of seeking therapy here at The Personal Development School, but advise you to consider the amount of time, money, and insurance benefits budget it can take you to shop for the right one.',

        'Even then, the risk with some types of talk therapies or working with a relationship coach is that not all types of therapy are designed to tackle attachment trauma, which lives in the body and deep in your subconscious. Without working with the most qualified type of therapist trained to help you do the unconscious work to heal your core wounds, you can end up seeing limited progress for quite the monthly bill (between $150-200 per session).',
      ],
    },

    BESTSELF_SEGMENT: {
      subheading: `All of this is achievable through as little as 10 minutes of coursework a day.`,

      bullets: [
        [
          {
            title: '1. No More Anxious Energy',
            copy: `Instead of being a ball of anxious energy in relationships, you feel calm, safe, seen and connected.`,
          },
          {
            title: '2. Healing More Quickly ',
            copy: `Having the tools to recover from breakups in a much healthier way with compassion for yourself.`,
          },
        ],

        [
          {
            title: '3. Accepting Yourself ',
            copy: `Feeling deserving of love — without needing to overgive or strive for perfection to feel accepted by others.`,
          },
          {
            title: '4. Being Able to Self-Soothe',
            copy: `Being able to pause, reflect, and regulate your emotions instead of reacting on auto-pilot or taking situations personally.`,
          },
        ],

        [
          {
            title: '5. Feeling Less Alone',
            copy: `Because no matter what life throws at you, you know there is one person who finally loves you unconditionally and who will never abandon you again - and that’s YOU.`,
          },
          {
            title: '6. Knowing Yourself Better',
            copy: `Being attuned to your needs, your wants, and your boundaries. Having a healthier relationship with yourself knowing you always have your own back.`,
          },
        ],

        [
          {
            title: '7. No Longer Fearing Your Future ',
            copy: `Feeling confident in your future and assured that with all your emotional awareness and mastery, you will no doubt end up with the person that’s right for you.`,
          },
        ],
      ],
    },
    MYQUESTION_SEGMENT: {
      subheading1: [
        'I get it — you might feel paralyzed by the material you have to learn, worried about facing your traumas, or feel doubtful that you have what it takes to commit to yourself.',

        <>
          <strong>
            But we’re going to do this together. My team and I will be there to support you every
            step of the way.
          </strong>
        </>,
      ],

      subheading2: [
        <>
          <strong>The biggest risk you can take is doing nothing at all.</strong>
        </>,

        'Signing up for a program at The Personal Development School is your chance to step in and put an end to your vicious attachment cycles.',

        <>
          <strong>
            Too many people let their attachment styles, their beliefs, and their subconscious
            relationship patterns control their whole lives. But not you. It doesn’t have to be you
            too.
          </strong>
        </>,
      ],

      bullets: [
        `Repeating your same relationship cycles over and over again with no way out, not knowing where to start to create real change.`,

        `Continuing to feel a deep sense of disappointment with yourself for the choices you make when you attempt to get closer to people and salvage relationships that are not in alignment with what you want.`,

        `Having to go through the motions of yet another painful breakup a few months down the line.`,

        `Worrying constantly about living up to the fear that you’re going to end up alone.`,

        `Spending day to day struggling to shut out the voices in your head that say “I can’t change”, “I’m not good enough”, and “everyone I love will leave me”.`,
      ],
    },

    OFFER_SEGMENT: {
      copy: [
        'Facing yourself to create true, lasting change from within is challenging. We get it.',

        'And healing your attachment traumas and reprogramming your thoughts, patterns, and beliefs doesn’t happen overnight.',

        <>
          <strong>
            But it CAN happen with the right support and guidance. That’s what my team and I are
            here for.
          </strong>
        </>,
        'All you need to do is take that brave first step.',

        'You’ve landed here because you’re being given the chance to radically transform yourself by gaining the tools you’ve been missing.',

        'By making a small yet substantial investment in bettering yourself, you will be on your way to developing the skills you’ve been missing to attract, create, develop, and keep the relationships you want to live a fulfilling life.',

        'It’s time to look at your emotional self in the mirror.',

        <>
          <strong>Do you like what you see? Or are you ready to step up?</strong>
        </>,
        'Enroll in The Anxious Preoccupied to Securely Attached Program now and prepare to create the safe home within yourself you’ve been looking for all along.',
      ],

      bullets: [
        `Additional free access to the entire Personal Development School library of courses including - Understanding Others' Attachment Styles, Emotional Mastery and Overcoming Burnout!`,
        `Weekly live webinars with Thais Gibson`,
        `Access to 100s of pre-recorded webinars`,
        `Private online forum, support groups, and Facebook group`,
        `Regular events and socials`,
        `24/7 live chat functionality`,
      ],
    },
  },

  da: {
    TITLE: 'Dismissive Avoidant',

    HERO_SECTION: {
      headline:
        'Do You Want A Happy, Harmonious Relationship That Still Allows You To Be Independent And Have Free Time?',
      subheadline: `The First Step Is Watching The Short Video Below To Learn And Understand Your Relationship Patterns – And How They’re Shockingly Accurate!`,
      videoURL: 'https://storage.googleapis.com/pds_videos/RoyalRumbleDAshortvideo.mp4',
      title: 'Who Is The Dismissive Avoidant?',
      copy: 'While we send your personalized report, watch this short video and read on to learn about your dismissive avoidant attachment style, including your relationship patterns and fears, and how you can start your healing journey to become securely attached.',
    },

    BANNER_SEGMENT: {
      headline: `YOUR FEAR OF VULNERABILITY MAY BE GETTING IN THE WAY OF YOU FORMING HEALTHY RELATIONSHIPS THAT LAST`,
      copy: [
        'You like to do your own thing and value your freedom, space, and independence. Because you thrive independently, you value your time spent out of romantic relationships. You are a very logical and practical person when it comes to making decisions and appreciate whenever people are direct, clear, and specific with what they need from you, be it at work, or in your friendships, family, or romantic relationships. Identifying as more of a “thinker” than a “feeler”, you are much more comfortable expressing what you think about situations to friends and family than what you feel about them. Being vulnerable with others is difficult for you and oversharing or being around intense emotions generally makes you feel uncomfortable. You feel a lot more in control and relaxed when you are able to choose when and where you’ll be with people, how close, and for how long. You’ve never been great at putting language to your feelings or sitting with them in the present so you might have a tendency to escape into your work, books, podcasts, video games, the news, or travel instead, enjoying the more mental rather than emotional investments they require from you.',

        'When it comes to romantic relationships, you can have a pretty hard time navigating them. They often feel overwhelming and you can never quite understand what’s expected from you. It seems like no matter what you do, you just can’t seem to get it right. Incredibly self-sufficient with an attitude that the only person you can rely on is yourself, you have a hard time believing that you should ever have to rely on a partner to meet your needs. When faced with the pressures of meeting someone else’s needs, you can feel suffocated. Long term relationships and long term commitments can make you feel trapped at one point or another and you worry constantly that being involved might mean losing that independence that you value so much.',

        'Your only strategy when you feel this inner conflict is to detach from others, distance yourself, and get very protective over your time and space alone. It’s so common for you to go to great lengths to avoid letting people in, that it can come across like you don’t need your partner, friends, or family at all. The truth is that you do value their connection, you just feel wildly misunderstood and don’t know how to get out of your head or let your guard down to truly connect.',
      ],
      variantSubheader:
        'Keep Reading to Learn About Your Dismissive Avoidant Attachment Style And How You Can Heal It…',
      variantCopy1: [
        'You like to do your own thing and value your freedom, space, and independence outside relationships.',
        'You identify as more of a “thinker” than a “feeler” and want control over when, where, how close, and how long you’ll be with people.',
        'You’re uncomfortable being vulnerable around others and have never been great at expressing or sitting with intense emotions.',
        'You believe that you’re the only person you can rely on.',
        'You feel suffocated when faced with the pressures of meeting someone else’s needs.',
        'You feel trapped or fearful you’ll lose your independence when committing to long-term relationships.',
      ],
      variantCopy2: [
        <>
          <strong>
            That’s the thing about dismissive avoidants: your only coping strategy is to detach and
            distance yourself from others and get very protective about your independence, coming
            across as if you don’t need your partner, friends, or family.
          </strong>
        </>,
        'The truth is that you value their connection; you just feel wildly misunderstood and don’t know how to get out of your head or let your guard down to truly connect.',
        'So, how do you overcome these fears so that you can form a lasting and secure relationship with someone special?',
      ],
      variantCopy3: [
        "In each course, I'll teach you tailored concepts, tools, and strategies that guide your transformation from dismissive avoidant to securely attached, helping you create and foster the relationships you desire.",
        <>
          You’ll learn to conquer your fears, let down your barriers, overcome your patterns, and
          open yourself to forming loving relationships with emotionally available people in less
          than less than <em>30 days</em>.
        </>,
        <>
          Achieve your personal and relationship goals through on-demand courses – all created and
          developed by me, Thais Gibson – author, industry leader, and co-founder of The Personal
          Development School.{' '}
          <strong>
            Click the button below to enroll and gain exclusive access. This is 30% off for life,
            for a limited time only!
          </strong>
        </>,
      ],
    },
    FAMILIAR_SEGMENTS: {
      traits: [
        [
          {
            title: 'Keeping Walls Up',
            copy: 'You enjoy making new connections and having conversations but prefer to keep up a strong wall. Part of you fears people truly knowing or seeing you for who you are. It’s almost like you’re keeping some sort of secret.',
          },

          {
            title: 'Taking Criticism to Heart',
            copy: 'You are quite sensitive to criticism though you may never show it. When bosses, partners, or friends make comments on something you haven’t done perfectly, you take it to heart and can end up attacking yourself for your flaws.',
          },
        ],
        [
          {
            title: 'Having Relationship Anxiety',
            copy: 'You can enjoy the dating phase of relationships but start to get extremely irritable and anxious when relationships start to demand your consistent time, energy, and attention.',
          },

          {
            title: 'Avoiding Vulnerability',
            copy: 'As much as you would like to learn how to be vulnerable with others, you equate being vulnerable with bringing some sort of bad consequences, so will always back out.',
          },
        ],
        [
          {
            title: 'Feeling Trapped',
            copy: 'When it comes to being in a romantic relationship, you simply cannot help feeling trapped and suffocated by your partner’s demands, even when you truly love the person.',
          },

          {
            title: 'Shutting Others Out',
            copy: 'You have had several arguments with partners, family, and friends who repeat that you appear “cold”, have your walls up too high, and are shutting people out.',
          },
        ],
        [
          {
            title: 'Switching Off Your Emotions',
            copy: 'Believing that emotions make you weak, you’re a master at diminishing them to a degree you secretly know is concerning. You may not have cried to unleashed any anger or disappointment in years as a result.',
          },

          {
            title: 'Constantly Being Blamed',
            copy: 'In romantic relationships, it’s a normal occurrence for you to feel like you are always being blamed for things you shouldn’t be blamed for.',
          },
        ],
      ],
      headline: `If you relate to these statements and if you worry that you’ll never be able to feel safe, open up, truly connect, and have fulfilling relationships, you’re not alone. And here's what you need to understand:`,
      subHeadline: `You Are Not Broken! These Are Just Your Patterns - And Your Patterns Can Be Changed.`,
      subheadlineTwo:
        'Use the Dismissive Avoidant to Securely Attached Program to Create Deep Inner Healing, Lasting Connection and Success in Your Love Life in 30 Days!',
      subHeadlineMobile: [
        'You Are Not Broken!',

        'These Are Just Your Patterns - And Your Patterns Can Be Changed.',
      ],
    },
    ATTACHMENT_ORIGIN_SEGMENT: {
      copy1: [
        <>
          Your attachment style and the relationship challenges it brings are{' '}
          <strong>not your fault</strong>, they are a reflection of your story.
        </>,

        'A Dismissive Avoidant attachment style is what you end up with if you received a lack of emotional support or harsh criticism from your primary caregivers during your childhood. Maybe in your early years your parents weren’t around much due to their work schedule or because they were busy taking care of your siblings. Or maybe they were quite harsh on you when you expressed your feelings, shaming you for them or telling you, for example, that crying was “wrong”. You might have grown up in a home with a controlling or authoritarian caregiver who placed very high expectations on you. When you didn’t meet their idea of perfection, you were criticized or even shamed for falling below the mark.',
      ],
      copy2: `As a result, you learned to take care of your own needs for emotional connection and developed a subconscious fear or block around opening up to others. Because you didn't feel like you were able to express and show your entire self to your parents, you now have a hard time feeling safe when doing that to others. Learning that displaying certain emotions was wrong, you became an expert at bottling things up and repressing your emotions for no one to see. And since you were regularly criticized and were always trying to meet impossible expectations, it’s likely that today you’re very sensitive to criticism and can feel a lot of shame around your own imperfections.
  
  With a past that has made emotional connection feel unpredictable and even scary, you can now find it difficult and overwhelming to connect with others, regularly withdrawing back to yourself as the only person you can rely on. 
      
  The problem is that carrying your fear of connection and your avoidant behaviors into your adulthood can lead to major imbalances in your relationships as you push people away and can sabotage special connections.
      `,
      heading1: `
      Not developing an awareness of your patterns or taking action to break them is a recipe for destructive isolation, painful heartbreak, and a lack of fulfilling relationships in your life.`,
      heading2: `
      What if I told you there was a way to break these unconscious patterns and beliefs, re-write your story, and change your attachment style without having to spend thousands of dollars on therapy or coaching sessions?`,
      heading3:
        'Use the Dismissive Avoidant to Securely Attached Program to Create Deep Inner Healing, Lasting Connection and Success in Your Love Life in 30 Days!',
    },
    THAIS_SEGMENT: {
      copy: `
      The Dismissive Avoidant to Securely Attached Program is your personal invitation to break free from your attachment trauma and destructive isolation patterns to create the love, safety, and connection that you deeply crave – and know, deep down, that you do deserve.`,
    },
    GAINACCESS_SEGMENT: [
      'This online program is designed to show you, step by step, how to reprogram your attachment style by teaching you highly-targeted and effective tools based on the latest research and my decades of experience counseling couples and individuals.',

      <>
        My system differs from other personal development programs because it’s designed to{' '}
        <strong>work directly with your subconscious mind</strong> – which is ESSENTIAL for any
        lasting change to occur.
      </>,
    ],
    HOWPROGRAMWORK_SEGMENT: [
      `Register for the program`,

      `Make your way through the program’s online videos at your own pace`,

      `Access your workbooks and complete your exercises`,

      `Attend optional weekly webinars and Q&As`,

      `Participate in our online communities for further discussions as you please`,

      `Get your certificate of completion`,

      `Access your course materials again whenever you need a refresh`,
    ],
    WHATPROGRAMCOVER_SEGMENT: {
      copy: [
        <>
          The Dismissive Avoidant to Securely Attached program gives you access to{' '}
          <strong>a tailored online course</strong> you can complete at your own convenience.
        </>,

        "Through the course videos, highly effective exercises, and my support through intimate webinars, together we'll tackle a list of other emotional issues that you might deal with in your life that come from your attachment trauma, like:",
      ],
      bullets: [
        `Bottling things up`,
        `Feeling constant anxiety around your relationships`,
        `Putting up walls`,
        `Avoiding your emotions and the emotions of those around you`,
      ],
    },
    LEARNHOWTO_SEGMENT: [
      {
        title: 'Understand your emotions',
        copy: 'Get comfortable with experiencing the full range of your feelings.',
      },
      {
        title: 'Reprogram core wounds',
        copy: 'And the painful stories you tell yourself.',
      },
      {
        title: 'Express your needs',
        copy: 'So you no longer have to shut down or withdraw to cope.',
      },
      {
        title: 'Learn to compromise',
        copy: 'Distinguish between compromising and making sacrifices to yourself.',
      },
    ],

    STILLNOTSURE_SEGMENT: {
      copy2: [
        'Or maybe you feel like you’re better off working with a therapist or relationship coach in a private capacity. We are big advocates of seeking therapy here at The Personal Development School, but advise you to consider the amount of time, money, and insurance benefits budget it can take you to shop for the right one.',

        'Even then, the risk with some types of talk therapies or working with a relationship coach is that not all types of therapy are designed to tackle attachment trauma, which lives in the body and deep in your subconscious. Without working with the most qualified type of therapist trained to help you do the unconscious work to heal your core wounds, you can end up seeing limited progress for quite the monthly bill (between $150-200 per session).',
      ],
    },
    BESTSELF_SEGMENT: {
      subheading: `The Dismissive Avoidant to Securely Attached Program is the missing piece to help you get there.`,
      bullets: [
        [
          {
            title: '1. Letting People in',
            copy: `Saying goodbye to a sense of shame you carry about yourself and feeling like you can allow people to get to know you for who you are. No more keeping people at arm’s length or keeping secrets.`,
          },
          {
            title: '2. Understanding What’s Expected',
            copy: `Having a much better understanding of what your partners, friends, and family need from you and knowing how to deliver what they need without so much ambiguity.`,
          },
        ],
        [
          {
            title: '3. No More Attacking Yourself',
            copy: `Being able to respond to criticism less intensely, without attacking yourself or carrying the weight of negative feedback for days.`,
          },
          {
            title: '4. Kissing Your Anxiety Goodbye',
            copy: `Feeling a new sense of calm in relationships as they continue to grow. No longer feeling anxious and resentful when partners demand your time and attention.`,
          },
        ],
        [
          {
            title: '5. Feeling Free',
            copy: `No longer feeling trapped, suffocated, and agitated when entering long-term relationships and commitments. Being able to give your partner your very best self as a result.`,
          },
          {
            title: '6. Accepting Help',
            copy: `Having the skills you need to rely on and accept the help of others as you cope with pressure, anxiety and fears that can arise in everyday life.`,
          },
        ],
        [
          {
            title: '7. Feeling Your Emotions',
            copy: `No longer spending significant emotional energy to diminish your negative feelings, and knowing how to sit with them and let them pass instead.`,
          },
          {
            title: '8. Practicing Being Vulnerable',
            copy: `Having healthier beliefs about what it means to be vulnerable. Being able to practice being vulnerable with the people closest to you.`,
          },
        ],
      ],
    },
    MYQUESTION_SEGMENT: {
      subheading1: [
        'I get it — you might feel paralyzed by the material you have to learn, worried about facing your traumas, or feel doubtful that you have what it takes to commit to yourself.',

        <>
          <strong>
            But we’re going to do this together. My team and I will be there to support you every
            step of the way.
          </strong>
        </>,
      ],

      subheading2: [
        <>
          <strong>The biggest risk you can take is doing nothing at all.</strong>
        </>,

        'Signing up for a program at The Personal Development School is your chance to step in and put an end to your vicious attachment cycles.',

        <>
          <strong>
            Too many people let their attachment styles, their beliefs, and their subconscious
            relationship patterns control their whole lives. But not you. It doesn’t have to be you
            too.
          </strong>
        </>,
      ],
      bullets: [
        `Repeating your same relationship cycles over and over again with no way out, not knowing where to start to create real change.`,

        `Pushing yourself deeper into a lonely isolation and continuing to shut the world out, leaving your friends, family, and partner perplexed.`,

        `Never learning how to get in tune with your feelings and risking potentially close and supportive relationships that could last a lifetime.`,

        `Continuing to deal with a consistent and unshakable sense of anxiety around all your relationships, be it your friendships, partnerships, family, or working relationships.`,

        `Forever battling with the criticizing and crippling voices in your head that tell you “bad things will happen when I open up,”, “I am defective,” “I’m just not cut for relationships,” and “people want too much from me.”`,

        `Never learning any new and healthy coping strategies for coping with your fears. Forever pulling away from people only to realize you don’t feel any better when you’re all alone.`,
      ],
    },
    OFFER_SEGMENT: {
      copy: [
        'Facing yourself to create true, lasting change from within is challenging. We get it.',

        'And healing your attachment traumas and reprogramming your thoughts, patterns, and beliefs doesn’t happen overnight.',

        <>
          <strong>
            But it CAN happen with the right support and guidance. That’s what my team and I are
            here for.
          </strong>
        </>,

        'All you need to do is take that brave first step.',

        'You’ve landed here because you’re being given the chance to radically transform yourself by gaining the tools you’ve been missing.',

        'By making a small yet substantial investment in bettering yourself, you will be on your way to developing the skills you’ve been missing to attract, create, develop, and keep the relationships you want to live a fulfilling life.',

        'It’s time to look at your emotional self in the mirror.',

        <>
          <strong>Do you like what you see? Or are you ready to step up?</strong>
        </>,

        'Enroll in The Dismissive Avoidant to Securely Attached Program now and prepare to create the safe home within yourself you’ve been looking for all along.',
      ],
      bullets: [
        `Additional free access to the entire Personal Development School library of courses including - Understanding Others' Attachment Styles, Emotional Mastery and Overcoming Burnout!`,
        `Weekly live webinars with Thais Gibson`,
        `Access to 100s of pre-recorded webinars`,
        `Private online forum, support groups, and Facebook group`,
        `Regular events and socials`,
        `24/7 live chat functionality`,
      ],
    },
  },
  fa: {
    TITLE: 'Fearful Avoidant',

    HERO_SECTION: {
      headline: 'Are you ready to start having the best relationships of your life?',
      subheadline: `The first step is watching the video below and understand your relationship patterns – and how they’re shockingly accurate!`,
      videoURL: 'https://storage.googleapis.com/pds_videos/FA_Funnel_Control.mp4',
      title: 'Who Is The Fearful Avoidant?',
      copy: 'While we email your personalized report, read on to discover your fearful avoidant attachment style, your relationship and personal patterns, and how you can start your healing journey to become securely attached.',
    },

    BANNER_SEGMENT: {
      headline: `YOUR FEAR OF BETRAYAL MAY BE GETTING IN THE WAY OF YOU FORMING HEALTHY RELATIONSHIPS THAT LAST`,
      copy: [
        'You are a passionate, empathetic person who has been through some big challenges in life. You might feel that your life and relationships have always been a bit of a rollercoaster. While you are very strong and independent, a part of you longs to have someone care for you the way that you care for others.',

        'As a giving person, you may find that you give until you burn out. This can cause you to feel overwhelmed by others in relationships and even resentful at times. A big trigger for you is the feeling of being taken advantage of. You are excellent at showing up for other people when they are going through a hard time and are always there for others to lean on. And yet, you may fear truly letting people in and depending on others - causing you to feel that relationships are one-sided at times. It can be hard for you to reach out to others to ask for help and support.',

        'In your romantic relationships, it can be difficult for you to trust that others will stick around in the long-run. You may fear being abandoned or assume that relationships won’t last because one of you will eventually get bored. You may also find that you fear being lied to, cheated on or betrayed in some way. This often doesn’t happen until you deeply attach to someone, but once you do - it can feel like you are always on high alert, waiting for the other shoe to drop.',

        'In the history of your adult romantic relationships, you may experience a lot of feeling “hot and cold.” One day you may feel deeply connected and committed to a relationship, and the next you may feel really discouraged, frustrated and withdrawn. Fearful Avoidant Attachment Styles often go back and forth in their mind between optimism and doubt when it comes to their relationships. This tends to happen the most intensely when there is a deeper connection and people are getting close to you. It can be scary for you to trust others and to let people in. This can lead to arguments, feeling like you are on a rollercoaster in relationships and feeling frustrated and let down by the people you love.',
      ],
    },
    FAMILIAR_SEGMENTS: {
      traits: [
        [
          {
            title: 'Always On Alert',
            copy: 'Even when you’re in strong romantic relationships and friendships, you are highly suspicious of people at the same time, always scanning for signs of betrayal or wondering if they really do like you.',
          },

          {
            title: 'Constant Dissatisfaction',
            copy: 'When you’re in a relationship, you can experience an underlying sense of worry that you could be missing out on something better, which can make you feel guilty.',
          },
        ],
        [
          {
            title: 'Instant Turn-Offs',
            copy: 'For some reason you can never pinpoint, you can be quite attracted to new people, but instantly change your mind when they’re interested in you.',
          },

          {
            title: 'Intense Feelings of Anger and Resentment',
            copy: 'When you “over-give” and struggle to set healthy boundaries – you can feel taken advantage of only to later feel angry and resentful.',
          },
        ],
        [
          {
            title: 'Feelings of Low Self-Worth',
            copy: 'You may have had several relationships where you felt unseen and weren’t reassured, and ended up telling yourself things like “I’m unlovable” or “I don’t matter”.',
          },

          {
            title: 'Not Feeling Deserving Enough',
            copy: 'On some level, you’re convinced that there’s something wrong with you and that you need to fix whatever “it” is before you can be fully loved.',
          },
        ],
      ],
      headline: `If you relate to these statements and if you worry that you’ll never be able to feel safe, trust, and have fulfilling relationships, you’re not alone. And here's what you need to understand:`,
      subHeadline: `You Are Not Broken! These Are Just Your Patterns - And Your Patterns Can Be Changed.`,
      subheadlineTwo:
        'Use the Fearful Avoidant to Securely Attached Program to Create Deep Inner Healing, Lasting Connection and Success in Your Love Life in 30 Days!',
      subHeadlineMobile: [
        'You Are Not Broken!',

        'These Are Just Your Patterns - And Your Patterns Can Be Changed.',
      ],
    },
    ATTACHMENT_ORIGIN_SEGMENT: {
      copy1: [
        <>
          Your attachment style and the relationship challenges it brings are{' '}
          <strong>not your fault</strong>, they are a reflection of your story.
        </>,

        'A Fearful Avoidant attachment style is what arises when you’ve experienced inconsistent emotional support from your primary caregivers in your early childhood. You most likely came from a tumultuous household that was filled with polarity. Maybe you had a strong emotional connection with one of your parents, but a lot of avoidance with the other. Or maybe one (or both) of your parents were emotionally supportive but at infrequent times, so you never really knew what to expect. If either one of them was very hot and cold with you, you probably began to understand that their love was conditional — based on you performing well or behaving a certain way.',
      ],
      copy2: `Being exposed to such unpredictability in your childhood means that you subconsciously developed an impending sense of betrayal in relationships, came to believe that vulnerability will result in pain, and started to believe that love is something that has to be earned. Now as an adult, you have grown up with an innate sense of distrust that you just can’t shake, always wondering what people’s true intentions are, never feeling entirely safe to let your guard down, and resentfully over-giving to get approval from the people closest to you.  
  
  The problem is that these attitudes and beliefs about love and connection are now draining your energy and blocking you from your chance at developing the strong sense of trust and personal boundaries that you need to build the long-lasting and fulfilling relationships you truly want. 
      
  Carrying your fear of betrayal and your avoidant behaviors into your adulthood can lead to major imbalances in your relationships as you push people away and can sabotage special connections.`,
      heading1: `
      Not developing an awareness of your patterns or taking action to break them is a recipe for destructive isolation, painful heartbreak, and a lack of fulfilling relationships in your life.`,
      heading2: `
      What if I told you there was a way to break these unconscious patterns and beliefs, re-write your story, and change your attachment style without having to spend thousands of dollars on therapy or coaching sessions?`,
      heading3:
        'Use the Fearful Avoidant to Securely Attached Program to Create Deep Inner Healing, Lasting Connection and Success in Your Love Life in 30 Days!',
    },
    THAIS_SEGMENT: {
      copy: `
      The Fearful Avoidant to Securely Attached Program is your personal invitation to break free from your attachment trauma and destructive patterns to create the love, safety, and connection that you deeply crave – and know, deep down, that you do deserve.`,
    },
    GAINACCESS_SEGMENT: [
      'This online program is designed to show you, step by step, how to reprogram your attachment style by teaching you highly-targeted and effective tools based on the latest research and my decades of experience counseling couples and individuals.',

      <>
        My system differs from other personal development programs because it’s designed to{' '}
        <strong>work directly with your subconscious mind</strong> – which is ESSENTIAL for any
        lasting change to occur.
      </>,
    ],
    HOWPROGRAMWORK_SEGMENT: [
      `Register for the program`,

      `Make your way through the program’s online videos at your own pace`,

      `Access your workbooks and complete your exercises`,

      `Attend optional weekly webinars and Q&As`,

      `Participate in our online communities for further discussions as you please`,

      `Get your certificate of completion`,

      `Access your course materials again whenever you need a refresh`,
    ],
    WHATPROGRAMCOVER_SEGMENT: {
      copy: [
        <>
          The Fearful Avoidant to Securely Attached program gives you access to{' '}
          <strong>a tailored online course</strong> you can complete at your own convenience.
        </>,

        "Through the course videos, highly effective exercises, and my support through intimate webinars, together we'll tackle a list of other emotional issues that you might deal with in your life that come from your attachment trauma, like:",
      ],
      bullets: [
        <>
          Your needs{' '}
          <strong>
            so that you can have deep connection without compromising your freedom and independence
          </strong>
        </>,
        <>
          Your insecurities/fears (with tools to overcome them),{' '}
          <strong>so that you can feel confident and stable in your love life</strong>
        </>,
        <>
          Expectations{' '}
          <strong>
            so that you understand your personal roadmap and can uphold the standards you deserve
          </strong>
        </>,
        <>
          Boundaries{' '}
          <strong>
            so that you can stop burning out and feeling taken advantage of in relationships
          </strong>
        </>,
        <>
          Strategies you need to communicate and interact with others{' '}
          <strong>
            so that you can have the quality of relationship you actually want to be in
          </strong>
        </>,
        <>
          It ALSO gives you specific tools to quickly recognize others' attachment styles and to
          understand their needs, fears and boundaries{' '}
          <strong>so that you can feel safe trusting others and letting your guard down</strong>
        </>,
      ],
    },
    LEARNHOWTO_SEGMENT: [
      {
        title: 'Reprogram betrayal wounds',
        copy: 'Let go of painful fears that block you from trusting others.',
      },
      {
        title: 'Communicate better',
        copy: 'When you need more space or more connection.',
      },
      {
        title: 'Self-soothe',
        copy: 'When experiencing anger or resentment.',
      },
      {
        title: 'Create passionate relationships',
        copy: 'Without feeling like you’re on high alert all the time.',
      },
    ],

    STILLNOTSURE_SEGMENT: {
      copy2: [
        'Or maybe you feel like you’re better off working with a therapist or relationship coach in a private capacity. We are big advocates of seeking therapy here at The Personal Development School, but advise you to consider the amount of time, money, and insurance benefits budget it can take you to shop for the right one.',

        'Even then, the risk with some types of talk therapies or working with a relationship coach is that not all types of therapy are designed to tackle attachment trauma, which lives in the body and deep in your subconscious. Without working with the most qualified type of therapist trained to help you do the unconscious work to heal your core wounds, you can end up seeing limited progress for quite the monthly bill (between $150-200 per session).',
      ],
    },

    BESTSELF_SEGMENT: {
      subheading: `The Fearful Avoidant to Securely Attached Program is the missing piece to help you get there.`,
      bullets: [
        [
          {
            title: '1. Feeling Relaxed',
            copy: `Instead of feeling anxious or confused in your relationships, you feel calm, safe and at ease because you’re no longer on high alert all the time.`,
          },
          {
            title: '2. Having an Open Heart',
            copy: `Welcoming new connections with an open heart, without questioning people’s intentions, putting aside your expectation of being betrayed.`,
          },
        ],
        [
          {
            title: '3. Knowing How to Self-Soothe',
            copy: `Trusting that you’ll always be able to work through challenges and will have your own back, no matter what life throws at you.`,
          },
          {
            title: '4. Being Kinder To Yourself',
            copy: `Allowing yourself to take healthy breaks from your career and passion projects without it impacting your sense of self worth.`,
          },
        ],
        [
          {
            title: '5. Having More Self Awareness',
            copy: `Knowing exactly when you’re being triggered by too much closeness or too much inconsistency and being able to identify and communicate your anxieties to others then and there.`,
          },
          {
            title: '6. Feeling Less Alone',
            copy: `Having a new sense of love for yourself and who you are. Ridding yourself of the voices in your head that tell you that you’re not good enough.`,
          },
        ],
      ],
    },
    MYQUESTION_SEGMENT: {
      subheading1: [
        'I get it — you might feel paralyzed by the material you have to learn, worried about facing your traumas, or feel doubtful that you have what it takes to commit to yourself.',

        <>
          <strong>
            But we’re going to do this together. My team and I will be there to support you every
            step of the way.
          </strong>
        </>,
      ],
      subheading2: [
        <>
          <strong>The biggest risk you can take is doing nothing at all.</strong>
        </>,

        'Signing up for a program at The Personal Development School is your chance to step in and put an end to your vicious attachment cycles.',

        <>
          <strong>
            Too many people let their attachment styles, their beliefs, and their subconscious
            relationship patterns control their whole lives. But not you. It doesn’t have to be you
            too.
          </strong>
        </>,
      ],
      bullets: [
        `Pushing away more and more people when they try to get close to you and foster potentially meaningful, long lasting relationships.`,

        `Putting yourself in more arguments where you’ve unintentionally overanalyzed your partner’s behavior, accusing them of betrayal.`,

        `Continuing to question your relationships and ask yourself “do they really like me?”`,

        `Facing intense feelings of anger the next time you give too much only to receive too little back.`,

        `Continuing to battle with your perfectionism and high standards that only perpetuate your feelings of inadequacy.`,

        `Living a life of feeling unworthy, unlovable, and like you don’t matter.`,
      ],
    },
    OFFER_SEGMENT: {
      copy: [
        'Facing yourself to create true, lasting change from within is challenging. We get it.',
        'And healing your attachment traumas and reprogramming your thoughts, patterns, and beliefs doesn’t happen overnight.',

        <>
          <strong>
            But it CAN happen with the right support and guidance. That’s what my team and I are
            here for.
          </strong>
        </>,

        'All you need to do is take that brave first step.',

        'You’ve landed here because you’re being given the chance to radically transform yourself by gaining the tools you’ve been missing.',

        'By making a small yet substantial investment in bettering yourself, you will be on your way to developing the skills you’ve been missing to attract, create, develop, and keep the relationships you want to live a fulfilling life.',

        'It’s time to look at your emotional self in the mirror.',

        <>
          <strong>Do you like what you see? Or are you ready to step up?</strong>
        </>,

        'Enroll in The Fearful Avoidant to Securely Attached Program now and prepare to create the safe home within yourself you’ve been looking for all along.',
      ],
      bullets: [
        `Additional free access to the entire Personal Development School library of courses including - Understanding Others' Attachment Styles, Emotional Mastery and Overcoming Burnout!`,
        `Weekly live webinars with Thais Gibson`,
        `Access to 100s of pre-recorded webinars`,
        `Private online forum, support groups, and Facebook group`,
        `Regular events and socials`,
        `24/7 live chat functionality`,
      ],
    },
  },
  sa: {
    TITLE: 'Secure',

    HERO_SECTION: {
      headline:
        'Are You Ready To Find That Spark In Your Love Life Again – And Meet A Loving And Secure Partner?',
      subheadline: `The First Step Is Watching This Short – And Shockingly Accurate – Video About Being A Securely Attached Person!`,
      videoURL: 'https://storage.googleapis.com/pds_videos/RoyalRumbleSAshortvideo.mp4',
      title: 'Who Is The Securely Attached?',
      copy: 'While we email your personalized report, watch this video and read on to discover your secure attachment style, how it impacts your relationships and patterns, and how to use it to find, nurture, and maintain a long-lasting and loving relationship.',
    },

    BANNER_SEGMENT: {
      headline: `BUT WITHOUT KNOWING HOW TO COMMUNICATE BEST WITH DIFFERENT TYPES OF PARTNERS, YOU MAY KEEP ENDING UP IN UNFULFILLING RELATIONSHIPS`,
      copy: [
        'You’re a warm and friendly person who feels comfortable in relationships (both intimate and platonic). You connect with people easily, generally feel confident in who you are, and have a strong sense of self-worth. You are quite good at communicating your needs, feelings, and opinions to others. Letting people in is easy for you because you feel safe, can set healthy boundaries, and have the skills to step away from situations that don’t deserve your time. When faced with relationship problems with your partner, friends, family, or coworkers, you see most problems as solvable and have strong conflict resolution skills. When you are faced with situations that are triggering, you are able to sit with your emotions and regulate them appropriately. When it comes to supporting others, you are an empathetic listener and are happy to be their rock. Your romantic relationships are generally stable and you don’t have a problem with long-term commitments. However, you can sometimes end up in relationships that feel wildly out of balance and that can drain you. Although you are very adaptable to different types of people, you sometimes struggle to understand how they operate and what exactly you need to do to fully support them.',
      ],
      variantSubheader:
        'Keep Reading to Learn About Your Secure Attachment Style And How It Impacts Your Relationships…',
      variantCopy1: [
        'You’re a warm and friendly person who feels comfortable in long-term relationships and has a strong sense of self-worth.',
        'You are good at communicating your needs, feelings, and opinions to others and have strong conflict-resolution skills.',
        'You can set healthy boundaries and avoid situations that don’t deserve your time.',
        'You get frustrated with poor communication and when others struggle to express themselves.',
        "You see the problems as solvable, but sometimes your partner doesn't.",
        "You don't have a problem with long-term commitments in relationships.",
        'You’re an empathetic listener when your partner, friends, or family need you.',
      ],
      variantCopy2: [
        <>
          <strong>
            That’s the thing about securely attached individuals: you can sometimes end up in
            relationships that feel wildly out of balance, which can drain you emotionally,
            mentally, and spiritually.
          </strong>
        </>,
        'Although you are very adaptable to different types of people, you sometimes struggle to understand how they operate and what exactly you need to do to fully support them.',
        'So, how do you find a genuinely balanced, robust, and loving relationship?',
      ],
      variantCopy3: [
        'Our courses will teach you how to navigate loving relationships with individuals who have insecure attachment styles, so you can foster and create fulfilling, lasting relationships.',
        <>
          In each course, I'll teach you concepts, tools, and strategies that can be used for as
          little as <em>10 minutes a day</em>. You’ll learn how to return the balance to your
          relationships, improve communication, remove conflict, and understand different attachment
          styles to form new loving relationships in less than <em>30 days</em>.
        </>,
        <>
          Achieve your personal and relationship goals through on-demand courses – all created and
          developed by me, Thais Gibson – author, industry leader, and co-founder of The Personal
          Development School.{' '}
          <strong>
            Click the button below to enroll and gain exclusive access. This is 30% off for life,
            for a limited time only!
          </strong>
        </>,
      ],
    },
    FAMILIAR_SEGMENTS: {
      traits: [
        [
          {
            title: 'Getting Frustrated with Poor Communication',
            copy: 'You get frustrated when others struggle to express themselves. For example, you can find it very hard to understand when someone has emotional outbursts after bottling up their resentments for months.',
          },

          {
            title: 'Finding it Difficult to Relate to Insecure People',
            copy: 'Despite your empathetic nature, you can have a hard time relating to people’s fears of commitment, abandonment issues, or trust issues having never experienced these same things yourself.',
          },
        ],
        [
          {
            title: 'Being in Unfulfilling Relationships',
            copy: 'Even though you have the skills to make your relationships work, you have ended up in some relationships that made you feel frustrated, anxious, or stuck.',
          },
        ],
      ],
      headline: `If you relate to these statements and if it feels like your relationships have pushed you to the point of exhaustion, you’re not alone. And here's what you need to understand:`,
      subHeadline: `With The Right Tools, You Can Make Sure That Your Relationships Always Feel Harmonious.`,
      subheadlineTwo: '',
      subHeadlineMobile: [
        `With The Right Tools, You Can Make Sure That Your Relationships Always Feel Harmonious.`,
      ],
    },
    ATTACHMENT_ORIGIN_SEGMENT: {
      copy1: [
        'Your attachment style and the relationship challenges it brings are a reflection of your story.',

        'If your attachment style is Securely Attached, it’s likely that you had a healthy relationship with both of your caregivers during childhood. You were probably encouraged to express yourself, and your needs for emotional and physical support were consistently met. That’s why as an adult, it’s easier for you to create supportive, communicative relationships with others. Unlike the 3 insecure attachment styles – Anxious-Preoccupied, Dismissive Avoidant and Fearful Avoidant – you don’t experience much anxiety or fear when in a relationship because you didn’t experience attachment traumas in your relationships as a child.',
      ],
      copy2: `Insecure attachment styles (Anxious Preoccupied, Fearful Avoidant, Dismissive Avoidant) can have a tendency to bottle up their emotions, pull away, send mixed signals by coming close and then moving away again, have difficulty communicating their needs, or putting up huge walls all in an effort to manage their deep-rooted fears of abandonment or betrayal. All of this can be extremely hard to relate to as someone who has never had the same traumatic experiences. 
  
  A second thing to note is although you might have scored as Securely Attached on your quiz, everyone also has their secondary attachment style which can get triggered in particularly emotional situations. Depending on the type of partner you’re with and the situation, your secondary attachment style can surface, bringing along all of its associated relationship challenges. For that reason, it’s worthwhile to spend some time exploring the different attachment styles to enhance your self awareness in an effort to improve your relationships.
      `,
      heading1: `
      Not developing awareness of your own patterns or taking the time to understand the different attachment styles can lead to repetitive confusion in your relationships.`,
      heading2: `
      What if I told you there was a simple way to take your relationships to the next level by gaining the knowledge you’ve been missing?`,
      heading3: '',
      heading4: '',
    },
    THAIS_SEGMENT: {
      copy: `
      This is your personal invitation to improve your self awareness and communication skills even further and create the love and connection that you deserve.`,
    },
    GAINACCESS_SEGMENT: [
      'My system differs from other personal development programs because it’s designed to work directly with your subconscious mind – which is ESSENTIAL for any lasting change to occur.',

      'All courses are intended to improve your emotional well-being, self-awareness, and communication skills.',

      'You also get access to in-depth quizzes to help you discover your secondary attachment style, and how your attachment style can change with friends, family, and partners. This will arm you with new awareness on which situations cause you to shift into an insecure attachment style.',
    ],
    HOWPROGRAMWORK_SEGMENT: [
      `Register for the program`,

      `Make your way through the program’s online videos at your own pace`,

      `Access your workbooks and complete your exercises`,

      `Attend optional weekly webinars and Q&As`,

      `Participate in our online communities for further discussions as you please`,

      `Get your certificate of completion`,

      `Access your course materials again whenever you need a refresh`,
    ],
    WHATPROGRAMCOVER_SEGMENT: {
      copy: [
        <>
          The Emotional Healing program gives you access to{' '}
          <strong>a tailored online course</strong> you can complete at your own convenience. These
          courses tackle topics including:
        </>,
      ],
      bullets: [
        `Belief reprogramming`,
        `Discovering, embracing, and fulfilling your personal needs`,
        `Overcoming unworthiness`,
        `Releasing resentment`,
        `Learning forgiveness`,
        `Reparenting your inner child`,
      ],
    },
    LEARNHOWTO_SEGMENT: [
      {
        title: 'Communicate appropriately',
        copy: 'With partners who have insecure attachment styles.',
      },
      {
        title: 'Understand others better',
        copy: 'Relate to and support others through their challenges.',
      },
      {
        title: 'Develop self awareness',
        copy: 'By uncovering your secondary attachment style.',
      },
      {
        title: 'Create healthy relationships',
        copy: 'That feel harmonious, connected, and that last.',
      },
    ],

    STILLNOTSURE_SEGMENT: { copy2: [] },

    BESTSELF_SEGMENT: {
      subheading: `The Emotional Healing Program at The Personal Development School is the missing piece to help you get there.`,
      bullets: [
        [
          {
            title: '1. You were able to “get” your loved ones',
            copy: `You knew how to get your loved ones to open up to you about their fears and struggles in a healthy way because you have a much deeper understanding of what they’ve been through.`,
          },
          {
            title: '2. Were aware of what situations trigger you',
            copy: `By knowing your secondary attachment style, you could put a finger on what’s causing you anxiety in certain situations and relationships.`,
          },
        ],
        [
          {
            title: '3. You developed new lifelong communication tools',
            copy: `You had everything you needed to create healthy, connected relationships.`,
          },
          {
            title: '4. You felt relaxed and content in your relationships',
            copy: `You were able to consistently get the love and respect that you deserve.`,
          },
        ],
        [
          {
            title: '5. You had no more trouble building and maintaining relationships ',
            copy: `Having easy and harmonious relationships because you now have the tools to resolve challenges.`,
          },
        ],
      ],
    },
    MYQUESTION_SEGMENT: {
      subheading1: [
        'I get it — you might feel paralyzed by the material you have to learn or might feel doubtful that you have what it takes to commit to a program.',

        <>
          <strong>But my team and I will be there to support you every step of the way.</strong>
        </>,
      ],
      subheading2: [
        <>
          <strong>The biggest risk you can take is doing nothing at all.</strong>
        </>,

        <>
          <strong>
            Signing up for a program at The Personal Development School is your chance to maximize
            your awareness and put an end to misunderstandings and relationships that are not
            serving you.
          </strong>
        </>,
      ],
      bullets: [
        `Ending up in more unfulfilling relationships.`,

        `Never quite knowing why an anxious side of you comes out sometimes.`,

        `Facing more communication barriers between yourself and your partner.`,

        `Never quite understanding different types of people.`,

        `Constantly trying to support others the best you can but still getting it wrong.`,
      ],
    },
    OFFER_SEGMENT: {
      copy: [
        'Doing the work to create true, lasting change from within is challenging. We get it.',

        'But all you need to do is take the first step.',

        <>
          <strong>
            You’ve landed here because you’re being given the chance to radically transform yourself
            and your life by gaining the tools you’ve been missing.
          </strong>
        </>,

        'By making a small yet substantial investment in bettering yourself, you will be on your way to developing the skills you’ve been missing to develop stronger connections and open yourself up to the relationships you need to live a fulfilling life.',

        'Get your membership started to dive straight into The Emotional Healing Program and prepare to start connecting with others in a much better way.',
      ],
      bullets: [
        `Additional free access to the entire Personal Development School library of courses including - Understanding Others' Attachment Styles, Emotional Mastery and Overcoming Burnout!`,
        `Weekly live webinars with Thais Gibson`,
        `Access to 100s of pre-recorded webinars`,
        `Private online forum, support groups, and Facebook group`,
        `Regular events and socials`,
        `24/7 live chat functionality`,
      ],
    },
  },
  OFFER_CARD: {
    heading: `Get everything for just $67/month`,
    headingColor: 'primary',
    subheading: 'ONLY',
    price: '$67',
    trialSubheading: '',
    trialPrice: '$0',
  },
  FAQs: [
    {
      question:
        'I just want to heal my attachment style with a single course, I’m not sure I want to become a monthly member. Can’t I just purchase the course relevant to my attachment style?',

      answer: `The monthly membership offers an integrated approach to healing your attachment style, your emotions and your relationships by targeting your subconscious mind.
    
  Included with the monthly membership are courses on reprogramming each of the 4 attachment styles – but as you’ll discover, **attachment trauma often causes other issues** – such as codependency or people pleasing – to name a few – which require their own courses. So to equip you with the tools you need to best heal your attachment style, the membership gives you **access to 45+ courses – giving you access to a “university” of emotional support**.
    
  Plus, included with the membership is access to **weekly LIVE webinars and Q&A calls**. As attachment trauma was formed as a result of the relationships in your early years – it can **best be healed in relationship with others**. So through our webinars, online community (forum), group chats and Facebook group – you’ll be supported by me and other members and receive a more **integrated approach to healing**.
    
  We have found that out of the thousands of students who have become more securely attached, they have done so as a result of this integrated approach rather than taking single courses on their own.
    
  This is deep, life-changing work, and I want to provide you with the best support possible.`,
    },

    {
      question: 'Can I cancel anytime?',
      answer: `Absolutely. If you feel that the Personal Development School is not for you, **you can cancel your membership at any time – no questions asked.**
    
  We have a very high success rate of students becoming more securely attached and fulfilled in all areas after becoming members of the school, and I’m confident that if you become a member – you will too. But if for whatever reason it no longer feels like the right fit or time for you, you can cancel.`,
    },

    {
      question: 'I’m on the fence about becoming a member. Do you offer a money-back guarantee?',
      answer: `Yes, to help you make the best decision for you, we offer a no-questions asked 7-day money back guarantee – meaning there is absolutely no risk if you become a member today, and then later decide that the school is not for you.`,
    },

    {
      question:
        'Wow, that’s a lot of courses and support I get access to, why is it so reasonably priced?',
      answer: `The short answer is: I want to help as many people as I possibly can!
    
  I’m incredibly passionate about sharing what’s become my life’s work and this integrated approach to healing attachment trauma because **I know it works – as long as you do**. I have developed a system and tools that are highly effective – and I want to make them as accessible as possible.`,
    },

    {
      question: 'I’m considering other courses or therapy – why should I trust you?',
      answer: `It’s important you feel confident in your decision to work with me.
    
  I have added some testimonials on this page, but I urge you to do your own research by **checking out the Personal Development School’s YouTube Channel** to see thousands of user-generated reviews on the hundreds of videos I create to see if my style resonates with you.`,
    },
  ],
}

export const AGE_CONFIG = cloneDeep(ROYAL_RUMBLE)

AGE_CONFIG.EXCLUSIVEBONUS_SEGMENT = [
  <>
    <strong>Priority access</strong> to all upcoming events, courses, offers, and new programs at
    The Personal Development School.
  </>,
  <>
    The chance to meet and connect with other members in <strong>our online community</strong> to
    have your personal questions answered.
  </>,
  <>
    <strong>An invitation</strong> to our online Facebook group with like-minded individuals who are
    equally dedicated to their healing.
  </>,
]
AGE_CONFIG.OFFER_CARD.heading = 'GET EVERYTHING FOR JUST $34.99'
AGE_CONFIG.OFFER_CARD.price = '$34.99'
AGE_CONFIG.FAQs = [
  {
    question:
      'I just want to heal my attachment style with a single course; I’m not sure I want to do the whole bundle. Can’t I just purchase the course that is relevant to my attachment style?',
    answer: `You could do that, but there are two very important things to note. 

Firstly, healing your attachment style takes time, practice, and understanding the concepts behind transforming it. As much as one course can help make very powerful and positive changes quickly, it takes an integrated approach to uncover your style, heal it, and become securely attached. Our bundle offers everything you need to make a marvelous start to your journey.

Secondly, buying each course individually is costlier than the bundle package. Add all these courses together and you’re looking at around $299. You’re getting three courses for a grand total of $34.99. But this is for a limited time only – so sign up before it’s gone!  

It’s a steal of a deal and will prepare you to make substantial changes in your life and relationships.`,
  },
  {
    question: 'Can I cancel anytime?',
    answer: `Absolutely. If you feel that this course bundle isn’t working for you, we offer a 7-day money-back guarantee. This means there is no risk if you join today and later decide that the course bundle is not for you.

Inform us about your decision, and we’ll happily process a refund. No hard feelings and no questions asked! Unfortunately, after 7 days, we won’t be able to process a refund. 

Remember: you might feel that it’s not happening for you right away, but remember, it takes effort and time. 

We have a very high success rate of students becoming more securely attached and fulfilled in all areas, and I’m confident you will, too.`,
  },
  {
    question: 'Can I continue my growth and transformation?',
    answer: `Yes, you can. If you’ve completed the course bundle, embraced the positive opportunities, and want to continue your healing and personal growth journey, you can sign up for our All-Access Pass.

This monthly membership includes access to 65+ courses (covering each of the attachment styles, plus codependency, confidence, and many more), live webinars and Q&As with myself (co-founder Thais Gibson) and certified coaches, study groups, and an invitation to our private online community. 

It’s the complete and comprehensive membership that gives you everything you need to continue your growth and healing journey.`,
  },
  {
    question:
      'Wow, that’s a lot of courses and support I get access to, why is it so reasonably priced?',
    answer: `The short answer is: I want to help as many people as I possibly can!
    
  I’m incredibly passionate about sharing what’s become my life’s work and this integrated approach to healing attachment trauma because **I know it works – as long as you do**. I have developed a system and tools that are highly effective – and I want to make them as accessible as possible.`,
  },
  {
    question: 'I’m considering other courses or therapy – why should I trust you?',
    answer: `It’s important you feel confident in your decision to work with me. I understand it can be hard to trust someone with something as important as your relationships, love life, and attachment style. 

This is why I urge you to do your own research. I have added some testimonials to this page, but I recommend checking out The Personal Development School’s YouTube channel. 

There are thousands of user reviews on the hundreds of videos I created to help you see if my style resonates with you. 

You can also check my Instagram, Facebook, and TikTok profiles or read our blogs for more valuable information. If you have any questions, please get in touch with The Personal Development School team. `,
  },
]

AGE_CONFIG.ap.FAMILIAR_SEGMENTS.subheadlineTwo =
  'Use the Anxious Preoccupied Course Bundle to Create Deep Inner Healing, Lasting Connection and Success in Your Love Life in 7 Days!'
AGE_CONFIG.ap.ATTACHMENT_ORIGIN_SEGMENT.heading3 =
  'Use the Anxious Preoccupied Course Bundle to Create Deep Inner Healing, Lasting Connection and Success in Your Love Life in 7 Days!'
AGE_CONFIG.ap.THAIS_SEGMENT.copy =
  'The Anxious Preoccupied Course Bundle is your personal invitation to break free from your attachment trauma and create the love, safety, and connection that you deeply crave – and know, deep down, that you do deserve.'
AGE_CONFIG.ap.OFFER_SEGMENT.copy[8] = `Enroll in The Anxious Preoccupied Course Bundle now and prepare to create the safe home within yourself you’ve been looking for all along.`

AGE_CONFIG.da.BANNER_SEGMENT.variantCopy3 = [
  `With the Dismissive Avoidant Course Bundle, I'll teach you tailored concepts, tools, and strategies that guide your transformation from dismissive avoidant to securely attached, helping you create and foster the relationships you desire.`,
  <>
    You’ll learn to conquer your fears, let down your barriers, overcome your patterns, and open
    yourself to forming loving relationships with emotionally available people in less than
    <em> 7 days</em>.
  </>,
  <>
    Your course bundle includes access to three custom courses that you can watch anywhere, anytime.
    These courses are: <br />
    <br />
    1. The <strong>Dismissive Avoidant Introductory Course</strong>, which teaches you everything
    you need to know about how your attachment style affects your relationships and perceptions.{' '}
    <br />
    2. The <strong>Handbook For a Better Life Course</strong>, which outlines what you can do to
    build a fulfilling, purposeful life. <br />
    3. The <strong>Discover, Embrace, and Fulfill Your Personal Needs Course</strong>, which teaches
    you about what your needs are and how to fulfill them yourself to harness your independence and
    autonomy.
  </>,
  <>
    Achieve your personal and relationship goals through on-demand courses – all created and
    developed by me, Thais Gibson – author, industry leader, and co-founder of The Personal
    Development School.{' '}
    <strong>
      Click the button below to enroll and gain exclusive access. Save $265 on this course bundle
      for a limited time only!
    </strong>
  </>,
]
AGE_CONFIG.da.FAMILIAR_SEGMENTS.subheadlineTwo =
  'Use the Dismissive Avoidant Course Bundle to Create Deep Inner Healing, Lasting Connection and Success in Your Love Life in 7 Days!'
AGE_CONFIG.da.ATTACHMENT_ORIGIN_SEGMENT.heading3 =
  'Use the Dismissive Avoidant Course Bundle to Create Deep Inner Healing, Lasting Connection and Success in Your Love Life in 7 Days!'
AGE_CONFIG.da.THAIS_SEGMENT.copy =
  'The Dismissive Avoidant Course Bundle is your personal invitation to break free from your attachment trauma and destructive isolation patterns to create the love, safety, and connection that you deeply crave – and know, deep down, that you do deserve.'
AGE_CONFIG.da.BESTSELF_SEGMENT.subheading =
  'The Dismissive Avoidant Course Bundle is the missing piece to help you get there.'
AGE_CONFIG.da.OFFER_SEGMENT.copy[8] =
  'Enroll in The Dismissive Avoidant Course Bundle now and prepare to create the safe home within yourself you’ve been looking for all along.'

AGE_CONFIG.sa.BANNER_SEGMENT.variantCopy3 = [
  `Our Secure Attachment Course Bundle, which includes three personalized courses that you can take anywhere, anytime, will teach you how to navigate loving relationships with individuals who have insecure attachment styles, so you can foster and create fulfilling, lasting relationships.`,
  <>
    In each course, I'll teach you concepts, tools, and strategies that can be used for as little as
    <em>10 minutes</em> a day.
  </>,
  <>
    You’ll learn how to return the balance to your relationships, improve communication, remove
    conflict, and understand different attachment styles to form new loving relationships in less
    than <em>7 days</em>.
  </>,
  <>
    Your course bundle includes access to three custom courses that you can watch anywhere, anytime.
    These courses are: <br /> <br />
    1. The <strong>Repair Any Relationship Course</strong>, which teaches you everything you need to
    know about how to build healthy relationships and fix broken ones. <br />
    2. The <strong>Handbook For a Better Life Course</strong>, which outlines what you can do to
    build a fulfilling, purposeful life. <br /> 3.{' '}
    <strong>The Discover, Embrace, and Fulfill Your Personal Needs Course</strong>, which teaches
    you about what your needs are and how to fulfill them yourself to harness your independence and
    autonomy.
  </>,
  <>
    Achieve your personal and relationship goals through on-demand courses – all created and
    developed by me, Thais Gibson – author, industry leader, and co-founder of The Personal
    Development School.{' '}
    <strong>
      Click the button below to enroll and gain exclusive access. Save $265 on this course bundle
      for a limited time only!
    </strong>
  </>,
]
AGE_CONFIG.sa.BESTSELF_SEGMENT.subheading =
  'The Secure Attachment Bundle at The Development School is the missing piece to help you get there.'
AGE_CONFIG.sa.OFFER_SEGMENT.copy[4] =
  'Get started to dive straight into The Secure Attachment Course Bundle and prepare to start connecting with others in a much better way.'

export const AGE_PRICING = {
  fa: {
    copy1: '',
    list: [],
    copy2: '',
    checkoutUrl: '',
  },
  ap: {
    copy1: 'Heal Your Attachment Style in 7 Days with the Anxious Preoccupied Course Bundle.',
    list: [
      'The Anxious Preoccupied Introductory Course, which will answer all of your questions about your attachment style',
      'The Discover, Embrace, and Fulfill Your Personal Needs Course, which will teach you how to understand and meet your own needs and love yourself',
      'The Handbook For a Better Life Course, which will teach you how to navigate dating and relationships with confidence',
      'Access to our supportive community through a private Facebook group',
      '24/7 live chat functionality to have your relationship questions answered',
    ],
    copy2:
      'Enroll in The Anxious Preoccupied Course Bundle now and prepare to create the safe home within yourself you’ve been looking for all along.',
    checkoutUrl: EExternalRoutes.THINKIFIC_CHECKOUT_AGE_PRODUCT_AP,
  },
  da: {
    copy1: 'Heal Your Attachment Style in 7 Days with the Dismissive Avoidant Course Bundle.',
    list: [
      'The Dismissive Avoidant Introductory Course, which will answer all of your questions about your attachment style',
      'The Discover, Embrace, and Fulfill Your Personal Needs Course, which will teach you how to understand and meet your own needs and love yourself',
      'The Handbook For a Better Life Course, which will teach you how to navigate dating and relationships with confidence',
      'Access to our supportive community through a private Facebook group',
      '24/7 live chat functionality to have your relationship questions answered',
    ],
    copy2:
      'Enroll in The Dismissive Avoidant Course Bundle now and prepare to create the safe home within yourself you’ve been looking for all along.',
    checkoutUrl: EExternalRoutes.THINKIFIC_CHECKOUT_AGE_PRODUCT_DA,
  },
  sa: {
    copy1: 'All the tools you need to create the relationship you deserve.',
    list: [
      'The Repair Any Relationship Course, which teaches you everything you need to know about how to build healthy relationships and fix broken ones',
      'The Discover, Embrace, and Fulfill Your Personal Needs Course, which will teach you how to understand and meet your own needs and love yourself',
      'The Handbook For a Better Life Course, which will teach you how to navigate dating and relationships with confidence',
      'Access to our supportive community through a private Facebook group',
      '24/7 live chat functionality to have your relationship questions answered',
    ],
    copy2:
      'Enroll in The Securely Attached Program now and prepare to create the safe home within yourself you’ve been looking for all along.',
    checkoutUrl: EExternalRoutes.THINKIFIC_CHECKOUT_AGE_PRODUCT_SA,
  },
}

export type TConfig = typeof ROYAL_RUMBLE & {
  fa: { HERO_SECTION: { list: string[]; titleSubheadline: string; subheadline: any } }
  da: { HERO_SECTION: { list: string[]; titleSubheadline: string; subheadline: any } }
  ap: { HERO_SECTION: { list: string[]; titleSubheadline: string; subheadline: any } }
  sa: { HERO_SECTION: { list: string[]; titleSubheadline: string; subheadline: any } }
}

export const MEL_ROBBINS_CONFIG = cloneDeep(ROYAL_RUMBLE) as TConfig

MEL_ROBBINS_CONFIG.fa.HERO_SECTION.headline =
  'Here’s The ONE Thing That Will Radically Improve Your Relationships Forever'
MEL_ROBBINS_CONFIG.fa.HERO_SECTION.subheadline = (
  <>
    DON'T MISS THIS <strong className="text-green-check">FREE LIMITED TIME</strong> MASTERCLASS
    WHERE I UNCOVER THE SECRET TO FINALLY BUILDING THRIVING, LASTING, AND LOVING RELATIONSHIPS - ON
    YOUR TERMS.
  </>
)
MEL_ROBBINS_CONFIG.fa.HERO_SECTION.titleSubheadline =
  'Our Unique, proprietary process is unlike anything you’ve ever seen before, and is disrupting the relationship coaching industry, because of how fast it works, and how simple it is! As seen with thousands of students in the Personal Development School.'
MEL_ROBBINS_CONFIG.fa.HERO_SECTION.title =
  'Here’s What You Will Miss Out On As A Fearful Avoidant If You Don’t Watch This Today:'
MEL_ROBBINS_CONFIG.fa.HERO_SECTION.copy =
  '*This is all discussed in Thais Gibson’s appearance on The Mel Robbins Podcast.'
MEL_ROBBINS_CONFIG.fa.HERO_SECTION.videoURL =
  'https://storage.googleapis.com/pds_videos/Mel%20Robbins%20Masterclass.mp4'
MEL_ROBBINS_CONFIG.fa.HERO_SECTION.list = [
  'How this video will help YOU, your relationships with others, and help you understand yourself AND your partner better than ever before.',
  'Finally understand why you are the way you are, what your attachment style means, and how it impacts your relationships, and why now (for the first time) you have the power to change it.',
  'Why Integrated Attachment Theory™ works for everyone – even for people who have spent years using traditional methods and modalities and still struggle with change.',
  'The secret to unlocking and rewiring the subconscious patterns (responsible for 95% of what keeps you stuck), so that you can finally change.',
]

MEL_ROBBINS_CONFIG.da.HERO_SECTION.headline =
  "Don't Miss This ONE Thing That Can Transform Your Relationships!"
MEL_ROBBINS_CONFIG.da.HERO_SECTION.subheadline = (
  <>
    DON'T MISS THIS <strong className="text-green-check">FREE LIMITED TIME</strong> MASTERCLASS
    WHERE I UNCOVER THE SECRET TO FINALLY BUILDING THRIVING, LASTING, AND LOVING RELATIONSHIPS - ON
    YOUR TERMS.
  </>
)
MEL_ROBBINS_CONFIG.da.HERO_SECTION.title =
  'Here’s What You Will Miss Out On As A Dismissive Avoidant Style If You Don’t Watch This Today:'
MEL_ROBBINS_CONFIG.da.HERO_SECTION.titleSubheadline =
  'Our Unique, proprietary process is unlike anything you’ve ever seen before, and is disrupting the relationship coaching industry, because of how fast it works, and how simple it is! As seen with thousands of students in the Personal Development School.'
MEL_ROBBINS_CONFIG.da.HERO_SECTION.copy =
  '*This is all discussed in Thais Gibson’s appearance on The Mel Robbins Podcast.'
MEL_ROBBINS_CONFIG.da.HERO_SECTION.videoURL =
  'https://storage.googleapis.com/pds_videos/Mel%20Robbins%20Masterclass.mp4'
MEL_ROBBINS_CONFIG.da.HERO_SECTION.list = [
  'Discover exactly who you are in relationships, why you are the way you are, where it comes from, and how you have the power to change it.',
  "Understand why Integrated Attachment Theory™ is the game-changing and practical approach that is transforming people's lives and relationships with ease.",
  'Uncover why after traditional therapy and self-books, you still haven’t experienced profound change and why it’s because you’re not accessing the right part of your brain.',
  'The secret to unlocking and rewiring the subconscious patterns (responsible for 95% of what keeps you stuck), so that you can finally feel like relationships are easy.',
]

MEL_ROBBINS_CONFIG.ap.HERO_SECTION.headline =
  'This ONE Thing Will Finally Ensure a Thriving Love Life'
MEL_ROBBINS_CONFIG.ap.HERO_SECTION.subheadline = (
  <>
    DON'T MISS THIS <strong className="text-green-check">FREE LIMITED TIME</strong> MASTERCLASS
    WHERE I UNCOVER THE SECRET TO FINALLY BUILDING THRIVING, LASTING, AND LOVING RELATIONSHIPS - ON
    YOUR TERMS.
  </>
)
MEL_ROBBINS_CONFIG.ap.HERO_SECTION.title =
  'Here’s What You Will Miss Out On As An Anxious Attachment Style If You Don’t Watch This Today:'
MEL_ROBBINS_CONFIG.da.HERO_SECTION.titleSubheadline =
  'Our Unique, proprietary process is unlike anything you’ve ever seen before, and is disrupting the relationship coaching industry, because of how fast it works, and how simple it is! As seen with thousands of students in the Personal Development School.'
MEL_ROBBINS_CONFIG.ap.HERO_SECTION.copy =
  '*This is all discussed in Thais Gibson’s appearance on The Mel Robbins Podcast.'
MEL_ROBBINS_CONFIG.ap.HERO_SECTION.videoURL =
  'https://storage.googleapis.com/pds_videos/Mel%20Robbins%20Masterclass.mp4'
MEL_ROBBINS_CONFIG.ap.HERO_SECTION.list = [
  'Help you finally release the fears of abandonment and being not good enough, so that you can feel secure and confident in ALL your relationships.',
  'Learn the strategies for keeping relationships connected, committed, and thriving and to withstand the test of time.',
  'Why Integrated Attachment Theory™ works for everyone – even for people who have spent years using traditional methods and modalities and still struggle with change.',
  'The secret to unlocking and rewiring the subconscious patterns (responsible for 95% of what keeps you stuck), so that you can finally build the best relationships of your life.',
]

MEL_ROBBINS_CONFIG.sa.HERO_SECTION.headline =
  'This ONE Thing Can Will Help You Build The Best Relationships Of Your Life With Anyone'
MEL_ROBBINS_CONFIG.sa.HERO_SECTION.subheadline = (
  <>
    DON'T MISS THIS <strong className="text-green-check">FREE LIMITED TIME</strong> MASTERCLASS
    WHERE I UNCOVER THE SECRET TO FINALLY BUILDING THRIVING, LASTING, AND LOVING RELATIONSHIPS - ON
    YOUR TERMS.
  </>
)
MEL_ROBBINS_CONFIG.sa.HERO_SECTION.title =
  'Here’s What You Will Miss Out On As A Secure Attachment If You Don’t Watch This Today:'
MEL_ROBBINS_CONFIG.da.HERO_SECTION.titleSubheadline =
  'Our Unique, proprietary process is unlike anything you’ve ever seen before, and is disrupting the relationship coaching industry, because of how fast it works, and how simple it is! As seen with thousands of students in the Personal Development School.'
MEL_ROBBINS_CONFIG.sa.HERO_SECTION.copy =
  '*This is all discussed in Thais Gibson’s appearance on The Mel Robbins Podcast.'
MEL_ROBBINS_CONFIG.sa.HERO_SECTION.videoURL =
  'https://storage.googleapis.com/pds_videos/Mel%20Robbins%20Masterclass.mp4'
MEL_ROBBINS_CONFIG.sa.HERO_SECTION.list = [
  'Watching this video that describes you and all your relationships to the T, what it means, and how you can make it better than ever.',
  'Discover why relationships can be challenging if you have a partner with a different attachment style, and how to overcome this.',
  'Learning why Integrated Attachment Theory™ is disrupting the relationship industry because its’ unique and powerful approach helps everyone — even securely attached individuals.',
  'The secret to unlocking and rewiring the subconscious patterns (responsible for 95% of what keeps you stuck), so that you can finally feel like relationships are easy.',
]
