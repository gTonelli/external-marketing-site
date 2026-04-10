import {
  faArrowTrendUp,
  faBullseye,
  faFaceSmile,
  faGlobe,
  faHandHoldingSeedling,
  faLightbulb,
  faUsers,
} from '@awesome.me/kit-545b942488/icons/classic/solid'

export const CONFIG = {
  needs: {
    countdown: {
      title: 'Join Now for the Best The Personal Development School Membership Offer',
      subtitle: 'This Special Offer Ends In',
    },
    hero: {
      title: 'Discover What it Feels Like to Be Seen, Understood, and Deeply Connected',
      copy: 'Join The Personal Development School and access a full library of courses, tools, and live group coaching sessions designed to help you understand your emotional needs so you can finally overcome loneliness, reignite the spark in your relationships and experience the kind of love from others that you deserve.',
      videoId: '546da06755eb846463a99dd3b4e9f493',
      thumbnailSrc:
        'https://pds-strapi-bucket.s3.ca-central-1.amazonaws.com/needs_masterclass_video_thumbnail_640554cd7f.jpg',
      videoLabel:
        'Discover how to feel more understood, recognize the triggers behind your reactions, express yourself more clearly, and create relationships where connection feels natural, stable, and deeply fulfilling.',
    },
    navigation: [
      {
        label: 'Why this Membership?',
        href: '#why-this-membership',
      },
      {
        label: 'The Curriculum',
        href: '#the-curriculum',
      },
      {
        label: 'Meet Thais Gibson',
        href: '#meet-thais-gibson',
      },
      {
        label: 'About Membership',
        href: '#about-membership',
      },
      {
        label: 'What Students Say',
        href: '#what-students-say',
      },
    ],
    patterns: {
      title:
        'If You Feel Like You’re Doing Everything Right… But the Same Patterns Keep Appearing…',
      copy1: [
        'If you feel like you’ve been putting in the effort but still find yourself stuck in the same relationship patterns, you’re not alone.',
        'Maybe you’ve read the books, watched the videos, and genuinely want things to change.',
        'Maybe you’ve tried to understand your triggers, like feeling hurt when someone pulls away, becoming frustrated during the same arguments, or withdrawing when things start to feel overwhelming.',
        'And yet, the same patterns keep showing up in your relationships.',
        'You might notice yourself:',
      ],
      listItems1: [
        'Ending relationships after the honeymoon phase when the initial spark fades',
        'Having difficulty giving up unhealthy habits like numbing, bingeing or arguing',
        'Feeling alone in your relationships or concerned about infidelity',
        'Wanting connection, but feeling like you don’t truly understand each other',
      ],
      copy2: [
        'After a while, it can start to feel frustrating because you want more, but something inside stops you from getting there.',
        'The truth is, most relationship challenges aren’t caused by a lack of effort. They’re often the result of emotional triggers revealing needs that were never fully understood or met.',
        'Whether you’re dating, single, or already in a relationship, these patterns can influence who you choose, how you communicate, and how safe connection feels.',
        'Inside The Personal Development School, you’ll learn how to recognize the deeper needs influencing your triggers, like overthinking texts, shutting down during conflict, or feeling suddenly distant from someone you care about.',
        'Instead of feeling stuck in the same conflicts or misunderstandings, you’ll begin learning practical tools that help you:',
      ],
      listItems2: [
        'Keep the spark alive in your relationships and even strengthen it long-term',
        'Meet your own needs in healthy ways that allow you to grow as a person',
        'Understand your needs and your partners needs so that you can connect deeply and feel mutually satisfied in your relationship',
      ],
      copy3: [
        'As your needs become clearer, many patterns that once felt impossible to change begin to shift.',
        'Relationships start to feel more supportive, more stable, and far more fulfilling.',
      ],
      listItems3: [],
      copy4: [],
    },
    socialProof: [
      {
        icon: faUsers,
        iconCircleBg: 'bg-[#F8DDFF]',
        iconColor: 'text-primary',
        title: '60,000+',
        subtitle: 'Students Enrolled',
      },
      {
        icon: faGlobe,
        iconCircleBg: 'bg-[#D9E0FE]',
        iconColor: 'text-[#142BD5]',
        title: '145+',
        subtitle: 'Countries Worldwide',
      },
      {
        icon: faFaceSmile,
        iconCircleBg: 'bg-[#FEE9D5]',
        iconColor: 'text-[#FFA000]',
        title: '99.7%',
        subtitle: 'User Satisfaction Rate',
      },
    ],
    aboutMasterclass: {
      title1: 'Uncovering Your Emotional Needs Transforms Your Relationships',
      copy1: [
        'Many relationship struggles don’t come from a lack of effort. They happen when emotional needs go unrecognized or unspoken.',

        'When those needs aren’t understood, it can show up as triggers like repeated arguments, emotional withdrawal, overthinking small interactions, or the painful feeling of being unseen and misunderstood.',
        'Inside The Personal Development School, you’ll gain access to the Discover, Embrace & Fulfill Your Personal Needs Course, designed to help you uncover the deeper needs shaping your reactions, communication, and relationship dynamics.',
        'Through guided lessons and practical exercises, you’ll learn how to:',
      ],
      image1: '/images/Masterclass/woman-enjoying-coffee.jpg',
      image1Alt: 'A woman enjoying coffee',
      listItems1: [
        'Understand what you truly need in relationships',
        'Communicate your needs more clearly',
        'Create deeper, healthier relationship dynamics',
      ],
      copy2: [
        'As you begin applying these tools, many patterns that once felt confusing start to make sense.',
        'Communication becomes clearer. Conflict becomes easier to navigate. And relationships start to feel more connected, supportive, and fulfilling.',
        'For many people, understanding their emotional needs becomes the turning point that finally allows real change to happen.',
      ],
      title2: '',
      image2: '',
      image2Alt: '',
      copy3: [],
      listItems2: [],
      copy4: [],
    },
    curriculum: {
      title: 'The Curriculum',
      subtitle: 'Your Step-by-Step Path to Healthier, More Connected Relationships',
      image: '/images/Masterclass/needs-masterclass-mockup.png',
      imageAlt: 'Discover, Embrace & Fulfill Your Personal Needs Course can be taken on any device',
      parts: [
        {
          question: (
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center leading-tight">
                <span className="text-xs text-gray-500 uppercase">Part</span>
                <span className="text-3xl text-primary font-bold"> 1</span>
              </div>
              <p className="text-xl font-bold mb-0">Learning Your Needs</p>
            </div>
          ),
          answer: (
            <>
              <p>
                In <strong>Part 1</strong> of the course, you’ll uncover the hidden system that
                quietly drives your decisions, behaviors, and emotional patterns: your subconscious
                needs.
              </p>
              <p>
                You’ll learn what needs you have and how they shape your personality, relationships,
                and sense of fulfillment. You’ll also start to see why certain triggers lead to
                self-sabotage or procrastination, and what to do so that you can start to transform
                your life.
              </p>
              <p>
                Whether you’re single or in a relationship, this course will transform how you
                connect to <em>everyone</em> — and even how you show up for yourself.
              </p>
              <p>
                <strong>Topics include:</strong>
              </p>
              <ul className="list-disc list-outside pl-4">
                <li>
                  <strong>The six types of needs that drive your behavior</strong>, which ones
                  matter most to you, and why.
                </li>
                <li>
                  <strong>
                    How your subconscious mind develops strategies to meet these needs
                  </strong>
                  , so that you can recognize which habits, relationship patterns, and priorities
                  shape your life.
                </li>
                <li>
                  <strong>How your needs control your daily perceptions and behaviors</strong>, so
                  that you can break negative relationship cycles and feel more deeply connected to
                  others.
                </li>
                <li>
                  <strong>
                    How unmet needs can block you from feeling happy, fulfilled and connected in
                    your life and relationships.
                  </strong>
                </li>
              </ul>
            </>
          ),
        },
        {
          question: (
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center leading-tight">
                <span className="text-xs text-gray-500 uppercase">Part</span>
                <span className="text-3xl text-primary font-bold"> 2</span>
              </div>
              <p className="text-xl font-bold mb-0">
                How to End Self-Sabotage, Loneliness, and Unlock Your Inner Potential
              </p>
            </div>
          ),
          answer: (
            <>
              <p>
                In <strong>Part 2</strong>, you’ll learn that the conscious mind cannot outwill the
                subconscious mind.{' '}
                <em>This is why so many people fail their New Year’s resolutions!</em>
              </p>
              <p>
                You’ll learn how your subconscious needs quietly shape your behavior, focus,
                self-worth, relationships, and follow-through.
              </p>
              <p>
                Then, you’ll move through a guided process to understand how to start prioritizing
                and meeting your needs directly.
              </p>
              <p>
                <strong>Topics include:</strong>
              </p>
              <ul className="list-disc list-outside pl-4">
                <li>
                  <strong>
                    How needs form during your childhood, why you self-sabotage, and how to finally
                    end that cycle for good.
                  </strong>
                </li>
                <li>
                  <strong>How your needs shape your self-worth, motivation, and performance</strong>
                  , and how to end critical self-talk.
                </li>
                <li>
                  <strong>How to create simple daily habits to meet your needs efficiently</strong>{' '}
                  so that everything you envision for yourself begins coming to you more easily.
                </li>
              </ul>
            </>
          ),
        },
        {
          question: (
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center leading-tight">
                <span className="text-xs text-gray-500 uppercase">Part</span>
                <span className="text-3xl text-primary font-bold"> 3</span>
              </div>
              <p className="text-xl font-bold mb-0">
                Building Healthier Relationships and Experience Unconditional Love
              </p>
            </div>
          ),
          answer: (
            <>
              <p>
                In <strong>Part 3</strong> of this course, you’ll learn why you may feel alone in
                relationships, or have a tendency to overgive and harbour resentment.
              </p>
              <p>
                You’ll understand why you have unhealthy relationship habits such as withdrawing,
                snapping, overeating, fighting, or “numbing out”.
              </p>
              <p>
                Most importantly, you’ll learn exactly what you have to do to reconnect, express
                your needs to your partner and reignite the spark in your relationship.
              </p>
              <p>
                You’ll also come to understand why unmet needs can lead to infidelity, and how to
                instead learn to meet each other’s needs healthily.
              </p>
              <p>
                <strong>Topics include:</strong>
              </p>
              <ul className="list-disc list-outside pl-4">
                <li>
                  <strong>How to reignite the spark and connection in your relationships</strong> by
                  creating direct strategies to meet your needs and theirs.
                </li>
                <li>
                  <strong>Why you get triggered</strong> and what your emotions are trying to tell
                  you.
                </li>
                <li>
                  <strong>How to track if your needs are being met daily</strong> so that you build
                  lasting self-awareness, communicate needs sooner, and prevent resentment before it
                  begins.
                </li>
              </ul>
            </>
          ),
        },
        {
          question: (
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center leading-tight">
                <span className="text-xs text-gray-500 uppercase">Part</span>
                <span className="text-3xl text-primary font-bold"> 4</span>
              </div>
              <p className="text-xl font-bold mb-0">How to Communicate Your Needs</p>
            </div>
          ),
          answer: (
            <>
              <p>
                In <strong>Part 4</strong>, you’ll learn how to clearly and confidently communicate
                your needs in relationships, at work, and in everyday interactions.
              </p>
              <p>
                You’ll learn a simple, practical communication framework that allows you to share
                what you’re feeling, what you need, and how others can support you – so your
                relationships become more open, connected, and fulfilling instead of filled with
                misunderstandings or unspoken expectations.
              </p>
              <p>
                <strong>Topics include:</strong>
              </p>
              <ul className="list-disc list-outside pl-4">
                <li>
                  <strong>A simple framework for expressing your needs</strong> so that you can
                  communicate clearly without sounding accusatory or creating unnecessary conflict.
                </li>
                <li>
                  <strong>How to translate your needs into specific, actionable requests</strong> so
                  that others actually know how to support you instead of guessing or
                  misunderstanding.
                </li>
                <li>
                  <strong>Why unspoken needs create distance, resentment, and conflict</strong> so
                  that you can replace silent frustration with honest communication.
                </li>
                <li>
                  <strong>
                    How unmet childhood needs can quietly shape your adult relationships
                  </strong>{' '}
                  and how to give love to your inner child.
                </li>
                <li>
                  <strong>How to build daily habits that support your needs consistently</strong> so
                  that you feel more fulfilled, emotionally regulated, and empowered instead of
                  waiting for others to fill the gaps.
                </li>
              </ul>
            </>
          ),
        },
        {
          question: (
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center leading-tight">
                <span className="text-xs text-gray-500 uppercase">Part</span>
                <span className="text-3xl text-primary font-bold"> 5</span>
              </div>
              <p className="text-xl font-bold mb-0">Deepening Connection with Others</p>
            </div>
          ),
          answer: (
            <>
              <p>
                <strong>In Part 5</strong>, you’ll learn how to understand your partner’s needs (and
                how they impact your own) so you can create more connection, less conflict, and far
                fewer “misses” in the way you give and receive love.
              </p>
              <p>
                You’ll discover how personality needs and love languages work together, and why we
                often project our own needs onto the people we care about most.
              </p>
              <p>
                Then you’ll build a practical plan for meeting needs directly through healthy daily
                habits (instead of relying on indirect coping strategies that leave you drained,
                distracted, or resentful).
              </p>
              <p>
                The result: more fulfillment, better focus, and a relationship dynamic where both
                people feel supported on purpose.
              </p>
              <p>You’ll learn:</p>
              <ul className="list-disc list-outside pl-4">
                <li>
                  <strong>How to identify your partner’s needs and love language</strong> so that
                  you can support them in the ways they truly receive.
                </li>
                <li>
                  <strong>
                    How to bridge differences through conscious compromise and weekly check-ins
                  </strong>{' '}
                  so that your relationship stays balanced, intentional, and emotionally safe as
                  life gets busy.
                </li>
                <li>
                  <strong>
                    Why unmet needs lead to indirect strategies (bickering, comfort eating,
                    distraction, avoidance)
                  </strong>{' '}
                  and what exactly to do about it.
                </li>
              </ul>
            </>
          ),
        },
      ],
      copy: [
        'Inside the Discover, Embrace & Fulfill Your Personal Needs course, you’ll learn how to understand the deeper emotional needs shaping your reactions, communication, and relationship patterns.',
        'Through simple lessons and practical exercises, you’ll gain tools that help you feel more emotionally balanced, communicate more clearly, and create stronger, healthier relationships.',
        'Here’s what you’ll learn inside the course:',
      ],
    },
    schedule: {
      title: 'Day by Day Schedule',
      items: [
        {
          title: 'Part 1: Foundations of Needs Awareness',
          lessons: [
            {
              title: 'Lesson 1',
              copy: 'Welcome to the Course',
            },
            {
              title: 'Lesson 2',
              copy: 'Download Your Course Materials',
            },
            {
              title: 'Lesson 3',
              copy: 'The Six Basic Human Needs',
            },
          ],
        },
        {
          title: 'Part 2: Understanding Your Personality Needs',
          lessons: [
            {
              title: 'Lesson 4',
              copy: 'Workbook Exercise: Ranking Your Six Basic Human Needs',
            },
            {
              title: 'Lesson 5',
              copy: 'Learning Your Subconscious Personality Needs',
            },
            {
              title: 'Lesson 6',
              copy: 'The Incredible Impact of Your Personality Needs on Your Life',
            },
          ],
        },
        {
          title: 'Part 3: Expanding Into Your Tertiary Needs',
          lessons: [
            {
              title: 'Lesson 7',
              copy: 'Workbook Exercise: Discovering Your Personality Needs',
            },
            {
              title: 'Lesson 8',
              copy: 'Your Tertiary Needs and the Impact on Your Relationships',
            },
            {
              title: 'Lesson 9',
              copy: 'Workbook Exercise: Healthy Habits and Conscious Strategies to Meet Needs',
            },
          ],
        },
        {
          title: 'Part 4: Expressing Your Needs Effectively',
          lessons: [
            {
              title: 'Lesson 10',
              copy: 'How to Express Your Needs to be Heard and Build Connection',
            },
            {
              title: 'Lesson 11',
              copy: 'Workbook Exercise: Noticing Your Feelings and Needs in Real Time',
            },
            {
              title: 'Lesson 12',
              copy: 'Your Needs in a Relationship',
            },
          ],
        },
        {
          title: 'Part 5: Building Healthy Habits for Needs Fulfillment',
          lessons: [
            {
              title: 'Lesson 13',
              copy: 'Healthy Habits to Get Your Needs Met',
            },
            {
              title: 'Lesson 14',
              copy: 'Workbook Exercise: Basic Steps to Conflict Communication',
            },
            {
              title: 'Lesson 15',
              copy: 'Workbook Exercise: Transforming Self-Sabotage',
            },
          ],
        },
        {
          title: 'Part 6: Deepening Your Practice & Integration',
          lessons: [
            {
              title: 'Lesson 16',
              copy: 'Final Quiz',
            },
            {
              title: 'Lesson 17',
              copy: 'How to Complete the Workbook Exercises (Webinar)',
            },
            {
              title: 'Lesson 18',
              copy: 'Personality Needs Webinar',
            },
          ],
        },
      ],
    },
    bonuses: {
      title: 'Bonus Included When You Join Today',
      items: [
        {
          label: 'Bonus #1',
          title: 'The Personal Development School All-Access Course Library',
          copy: 'In addition to the core program, you’ll get the full Personal Development School course library. This gives you access to a wide range of additional programs covering topics like emotional regulation, communication, boundaries, attachment patterns, and relationship dynamics. You can continue exploring new areas of growth and strengthening your relationships long after completing the main course.',
          image: '/images/Masterclass/needs-bonus-1.png',
          imageAlt: 'The Personal Development School All-Access Course Library',
        },
        {
          label: 'Bonus #2',
          title: 'Relationship Insight Worksheets',
          copy: 'These guided worksheets help you turn what you learn into real-life reflection and action. They walk you through identifying patterns, understanding what’s missing in your relationships, and applying practical steps that support stronger connection and communication.',
          image: '/images/Masterclass/needs-bonus-2.png',
          imageAlt: 'Relationship Insight Worksheets',
        },
        {
          label: 'Bonus #3',
          title: 'Personal Growth Quizzes & Self-Assessments',
          copy: 'Interactive quizzes and self-assessments give you a clearer understanding of your relationship patterns, emotional triggers, and growth opportunities. These tools help you quickly identify where to focus your attention so your learning feels more personalized and effective.',
          image: '/images/Masterclass/needs-bonus-3.png',
          imageAlt: 'Personal Growth Quizzes & Self-Assessments',
        },
      ],
    },
    thais: {
      title: 'Thais Gibson, PhD, Founder of The Personal Development School',
      image: '/images/Masterclass/thais-portrait-3.jpg',
      imageAlt: 'Thais Gibson portrait',
    },
    growthJourney: {
      title: "Here's What Your Personal Growth Journey Could Look Like...",
      subtitle: (
        <>
          After the <strong>Discover, Embrace & Fulfill Your Personal Needs</strong> Course,
          continue your journey to improve all areas of your life.
        </>
      ),
      steps: [
        {
          label: 'First...',
          course: 'Effective Communication Course:',
          description:
            'communicate clearly and confidently, without guilt, resentment, or shutting down.',
          image: '/images/course-expressing-needs-effectively.jpg',
          imageAlt: 'Effective Communication Course',
        },
        {
          label: 'Next...',
          course: 'Skyrocket Your Self-Esteem Course:',
          description:
            'stop relying on external validation and begin building stable, internal self-worth.',
          image: '/images/course-skyrocket-your-self-esteem.jpg',
          imageAlt: 'Skyrocket Your Self-Esteem Course',
        },
        {
          label: 'Then...',
          course: 'Overcoming Loneliness & Creating Fulfilling Connections Course:',
          description:
            'move from feeling disconnected to building secure, meaningful relationships.',
          image: '/images/course-overcoming-lonliness.jpg',
          imageAlt: 'Overcoming Loneliness & Creating Fulfilling Connections Course',
        },
        {
          label: 'Lastly...',
          course: 'How to Repair Any Relationship Course:',
          description:
            'conflict becomes a bridge to deeper understanding instead of a trigger for distance or fear.',
          image: '/images/course-how-to-repair-relationship.jpg',
          imageAlt: 'How to Repair Any Relationship Course',
        },
      ],
    },
    healing: {
      title: 'Find Healing and Growth with The Personal Development School',
      copy: [
        'Join The Personal Development School and access a complete personal growth platform designed to help you build stronger relationships, communicate more clearly, and create meaningful change in your life.',
        'Inside the membership, you’ll find a full library of courses, practical tools, and guided exercises that help you understand your emotional patterns and develop healthier ways to respond to challenges in relationships, work, and everyday life.',
        'With step-by-step guidance, you’ll learn how to create deeper connections, navigate conflict more effectively, and build relationships where you feel seen, heard, and valued.',
      ],
      listItems: [],
      copy2: [],
      image: '/images/Masterclass/thais-on-podcasts.jpg',
      imageAlt: 'Thais Gibson on interviews and podcasts',
    },
    transformation: {
      title: 'Begin Your Transformational Journey with The Personal Development School',
      copy: [
        'As a member, you’ll gain access to the Discover, Embrace & Fulfill Your Personal Needs Course along with a full library of advanced programs designed to help you strengthen communication, improve emotional resilience, and create more fulfilling relationships.',
        'Each program includes practical lessons and exercises that help you apply what you learn directly to your daily life.',
        'You’ll also join a global community of people committed to growth, self-awareness, and building healthier relationships.',
      ],
      image: '/images/Masterclass/various-devices-mockup.png',
      imageAlt: 'Access to the Personal Development School on various devices',
    },
    features: {
      title: 'What’s Included in Your Personal Development School Membership',
      list: [
        {
          title: 'Transformational Courses',
          copy: (
            <>
              <span className="text-primary">
                <strong>Explore a full library of in-depth programs</strong>
              </span>{' '}
              designed to help you improve communication, understand relationship dynamics, and
              create stronger emotional connection in your life.
            </>
          ),
        },
        {
          title: 'Practice Tools for Real Change',
          copy: (
            <>
              <span className="text-primary">
                <strong>
                  Access guided exercises, step-by-step frameworks, and powerful techniques
                </strong>
              </span>{' '}
              you can apply immediately to shift patterns and improve how you respond to challenges.
            </>
          ),
        },
        {
          title: 'Weekly Group Coaching Sessions',
          copy: (
            <>
              <span className="text-primary">
                <strong>Join live group coaching and Q&A sessions with Thais Gibson</strong>
              </span>{' '}
              and expert coaches, where you can deepen your learning and get practical guidance.
            </>
          ),
        },
        {
          title: 'A Global Growth Community',
          copy: (
            <>
              <span className="text-primary">
                <strong>Connect with thousands of members around the world</strong>
              </span>{' '}
              who are committed to healing, personal growth, and building more fulfilling
              relationships.
            </>
          ),
        },
      ],
    },
    transformationJourney: {
      title: 'This is How Transformation Happens',
      intro: [
        'Lasting change doesn\u2019t happen by simply trying harder or learning more information. It happens when you begin to understand the deeper emotional needs and patterns shaping your reactions, communication, and relationships.',
        'Inside The Personal Development School, you learn practical tools that help you recognize these patterns and respond in new, healthier ways. Many members discover that behaviors they once blamed themselves for actually developed as ways to cope with stress, disconnection, or unmet needs. Change doesn\u2019t happen overnight, but with the right tools and support, it can begin sooner than you think.',
      ],
      items: [
        {
          icon: faBullseye,
          title: 'When Connection Starts to Feel Distant, You Know How to Bring It Back',
          copy: [
            'Sometimes relationships can feel lonely or disconnected, even when both people care about each other. Maybe conversations feel surface-level, texts start feeling shorter, or you notice yourself overthinking small interactions. Inside The Personal Development School, you learn how to recognize what\u2019s actually missing in those moments and how to restore connection so both people feel seen, heard, and understood again.',
          ],
        },
        {
          icon: faLightbulb,
          title: 'When Frustration and Resentment Build, You Learn How to Break the Cycle',
          copy: [
            'Unmet needs often turn into recurring arguments, tension, or quiet resentment over time. Small triggers, like feeling unheard during conversations, getting defensive during feedback, or repeating the same disagreements, can slowly build emotional distance. You\u2019ll learn how to recognize what\u2019s really driving those conflicts and how to respond in ways that reduce frustration, improve communication, and help you feel closer again.',
          ],
        },
        {
          icon: faArrowTrendUp,
          title: 'When the Spark Starts to Fade, You Learn How to Reignite It',
          copy: [
            'Many relationships begin with excitement and closeness but gradually lose that sense of passion and appreciation. You might notice triggers like feeling taken for granted, withdrawing emotionally, or wondering why connection suddenly feels harder than it used to. You\u2019ll learn what relationships need to stay strong over time and how to maintain connection, trust, and emotional closeness long after the honeymoon stage.',
          ],
        },
        {
          icon: faHandHoldingSeedling,
          title: 'Growing Alongside a Supportive Community',
          copy: [
            'Lasting change becomes easier when you\u2019re surrounded by people who truly understand the journey you\u2019re on.',
            'Inside The Personal Development School, you\u2019ll connect with members from around the world who are committed to growth, self-awareness, and building healthier relationships, just like you.',
            'Instead of feeling like you have to figure everything out alone, you\u2019ll learn alongside others who share similar struggles, breakthroughs, and goals. Together, you create an environment where transformation feels supported, encouraged, and possible every step of the way.',
          ],
        },
      ],
    },
    buildingRelationships: {
      title: 'Finally Understand How To Build Lasting And Thriving Relationships',
      copy: [
        'The Personal Development School gives you practical tools to improve the way you connect and communicate in your relationships. Through in-depth courses, live group coaching sessions with Thais Gibson, and guided exercises, you’ll learn how to understand what’s actually missing when relationships feel frustrating, distant, or disconnected, and how to bring connection back.',
        'Inside the membership, you’ll learn how to recognize what’s driving your reactions in difficult moments, communicate in ways that reduce conflict, and create relationships where both people feel understood, appreciated, and emotionally supported.',
      ],
      image: '/images/Masterclass/masterclass-membership-mockup.png',
      imageAlt:
        'Membership can be purchased on masterclass pages and be watched on various devices',
      items: [
        {
          title: 'Build Stronger Relationships Through Small, Effective and Practical Steps',
          copy: [
            'Lessons inside the membership are practical and easy to apply, helping you understand why frustration or distance can show up in relationships, and what to do to bring back connection, appreciation, and excitement.',
          ],
          image: '/images/Masterclass/features-1.png',
          imageAlt: 'Build Stronger Relationships Through Small, Effective and Practical Steps',
        },
        {
          title: 'A learning path focused on what matters most to you',
          copy: [
            "Everyone's growth journey looks different.",
            'Some members want to improve communication in relationships. Others want to build stronger boundaries, regulate emotions, or feel more confident navigating life’s challenges.',
            'The curriculum allows you to focus on the areas that matter most to you while moving forward with a clear path for growth.',
          ],
          image: '/images/Masterclass/features-2.png',
          imageAlt: 'A learning path focused on what matters most to you',
        },
        {
          title: 'Learn directly from Thais Gibson, PhD',
          copy: [
            'Inside the membership, you’ll learn from Thais Gibson, founder of The Personal Development School.',
            'Her teachings combine psychological insight with practical tools designed to help people better understand their emotional patterns and create meaningful change in their lives and relationships.',
          ],
          image: '/images/Masterclass/features-3.png',
          imageAlt: 'Learn directly from Thais Gibson, PhD',
        },
        {
          title: 'A global community walking the same path',
          copy: [
            'Inside the community, you’ll connect with people from around the world who are also committed to healing, growth, and building more fulfilling relationships.',
            'Through shared learning and supportive conversations, you’ll be part of a community where personal transformation is encouraged and supported.',
          ],
          image: '/images/Masterclass/features-4.png',
          imageAlt: 'A global community walking the same path',
        },
      ],
    },
    whyJoin: {
      title: 'Why Join The Personal Development School Today',
      items: [
        {
          title: 'Take Advantage of Limited-Time Member Pricing',
          copy: [
            'Right now, you can join The Personal Development School at a reduced membership rate while this special offer is available. Please note this pricing is not available to everyone, and is a limited time offer.',
            'Your membership gives you full access to the entire platform, including courses, practical tools, and live group coaching with Thais Gibson designed to help you improve communication, strengthen relationships, and create meaningful personal growth.',
          ],
        },
        {
          title: 'Start Improving Your Relationships Right Away - Breakthroughs In Minutes',
          copy: [
            'The moment you join, you’ll gain access to the full library of courses and tools so you can begin focusing on the areas that matter most to you.',
            'Whether you want to communicate more clearly, reduce recurring conflict, or build deeper emotional connection, you’ll have immediate access to the guidance and resources that help you start creating change right away.',
            'You’ll also become part of a global community of members committed to growth, self-awareness, and building healthier, more fulfilling relationships.',
          ],
        },
      ],
    },
    media: {
      label: 'THE MEDIA IS RAVING ABOUT THAIS GIBSON',
      title: 'A Leading Voice in Relationships and Emotional Growth',
      copy: [
        'Through her teachings and the Personal Development School, Thais Gibson, PhD has helped 60,000+ people in over 145 countries better understand their emotional patterns and build healthier relationships.',
        'Her work combines psychological insight with practical tools designed to help people create meaningful and lasting personal change.',
      ],
      videoId: 'ce68139aa9a0eaab7a36522a37fc237e',
      thumbnailSrc:
        'https://pds-strapi-bucket.s3.ca-central-1.amazonaws.com/thais_writing_video_thumbnail_a5e6bc6f9e.jpg',
      articles: [
        {
          logo: '/images/Logo_Brand/science-times-logo.png',
          logoAlt: 'Science Times',
          title:
            'Heal, Grow, Love: The Personal Development School Path to Relationship Fulfillment',
          copy: "Gibson Integrated Attachment Theory TM framework was developed from 10+ years of researching neuroscience, working with over 30,000 clients, and integrating over 13 different personal development modalities. It's designed to help you experience massive breakthroughs in all areas of your life...",
          linkUrl:
            'https://www.sciencetimes.com/articles/46874/20231102/heal-grow-love-the-personal-development-school-path-to-relationship-fulfillment.htm',
          link: 'Read on Science Times',
        },
        {
          logo: '/images/Logo_Brand/us-insider-logo.jpg',
          logoAlt: 'US Insider',
          title:
            'Discover the Secrets to Thriving Relationships with Relationship Expert, Thais Gibson',
          copy: 'Thais Gibson’s work has earned the trust of tens of thousands globally, with a staggering 94% satisfaction rate among PDS members. From profound changes in relationships to enhanced emotional well-being and productivity, PDS subscribers experience tangible and intangible benefits that positively impact their lives....',
          linkUrl:
            'https://usinsider.com/discover-the-secrets-to-thriving-relationships-with-relationship-expert-thais-gibson/',
          link: 'Read on US Insider',
        },
        {
          logo: '/images/Logo_Brand/international-business-times-logo.png',
          logoAlt: 'International Business Times',
          title:
            "Thais Gibson's PDS: Where Science-Backed Strategies Lead to Tangible Breakthroughs",
          copy: "In a world where toxic relationship patterns can erode happiness and fulfillment, Thais Gibson's PDS stands as a beacon of hope. By embracing science-backed strategies and personalized approaches, PDS empowers individuals to break free from their past and pave the way to a future filled with love, and understanding breakthroughs...",
          linkUrl:
            'https://www.ibtimes.sg/thais-gibsons-pds-where-science-backed-strategies-lead-tangible-breakthroughs-72150',
          link: 'Read on International Business Times',
        },
      ],
    },
    noRiskMembership: {
      title: 'Try the Membership Risk-Free for 15 Days',
      copy: [
        'Explore everything inside The Personal Development School Membership with no risk.',
        'When you join, you’ll have 15 days to experience the courses, tools, and resources inside The Personal Development School Membership and see how the work resonates with you.',
        'If you decide it’s not the right fit, simply request a refund within the 15-day window and you’ll receive your money back, no questions asked.',
      ],
      image: '/images/Masterclass/15-days-risk-free.svg',
      imageAlt: '15-days-risk-free badge',
    },
    pricing: {
      title: 'Transform Now With The Personal Development School',
      copy: "What's included:",
      items: [
        <>
          <strong>
            Full Access to the Course Library including the Discover, Embrace & Fulfill Your
            Personal Needs Course:
          </strong>{' '}
          Explore in-depth programs designed to help you improve communication, strengthen
          relationships, and create healthier emotional patterns.
        </>,
        <>
          <strong>Weekly Live Group Coaching with Thais Gibson:</strong> Join live group coaching
          sessions and Q&A sessions where you can gain practical guidance and apply what you’re
          learning in real time.
        </>,
        <>
          <strong>Practical Tools for Real Change:</strong> Use guided exercises, proven frameworks,
          and step-by-step techniques designed to help you shift patterns and improve how you
          respond to life’s challenges.
        </>,
        <>
          <strong>A Global Growth Community:</strong> Connect with thousands of members around the
          world who are committed to personal growth, healing, and building more meaningful
          relationships.
        </>,
        <>
          <strong>15-Day Money-Back Guarantee:</strong> Try the membership risk-free and explore
          everything inside the platform with complete peace of mind.
        </>,
      ],
    },
    postPurchase: {
      title: 'What Happens After You Order',
      items: [
        {
          image: '/images/Masterclass/post-purchase-1.png',
          imageAlt: 'Complete purchase at checkout page',
          copy: 'Click the purchase button above and you’ll be take to a secure checkout page.',
        },
        {
          image: '/images/Masterclass/post-purchase-2.png',
          imageAlt: 'Complete your order and check your email for your login instructions.',
          copy: 'Complete your order and check your email for your login instructions.',
        },
        {
          image: '/images/Masterclass/post-purchase-3.png',
          imageAlt:
            'Login from The Personal Development School Home on your devices to get started.',
          copy: 'Login from The Personal Development School Home on your devices to get started.',
        },
      ],
    },
    faqs: [
      {
        question: 'Can I access the courses without becoming a member?',
        answer:
          'The courses, tools, and webinars are part of The Personal Development School. When you join, you gain access to the full course library and all included resources for as long as your membership remains active.',
      },
      {
        question: 'How do I know where to start inside the membership?',
        answer:
          'Many members begin with courses related to their attachment style, emotional patterns, or relationship challenges. Inside the membership, you’ll find structured courses and resources organized by topic so you can focus on the areas most relevant to your personal growth.',
      },
      {
        question: 'Will I have access to live sessions with Thais Gibson?',
        answer:
          'Yes! Membership includes weekly live webinars with Thais, where she teaches, answers questions, and helps members apply the tools from Integrated Attachment Theory™ to real-life situations.',
      },
      {
        question: 'Can I cancel my membership?',
        answer:
          'Yes. You can cancel your membership at any time through your account settings. Your access will remain active until the end of your current billing period.',
      },
      {
        question: 'Is there a money-back guarantee?',
        answer:
          'Yes. The membership includes a 7-day money-back guarantee, so you can explore the courses and resources risk-free. If you decide it’s not the right fit within the first 7 days, you can request a refund.',
      },
    ],
  },
  'learn-to-trust': {
    countdown: {
      title: 'Join Now for the Best The Personal Development School Membership Offer',
      subtitle: 'This Special Offer Ends In',
    },
    hero: {
      title:
        'Heal Your Trust Wounds, Release the Pain of Being Cheated On, and Learn to Trust Again',
      copy: 'Join The Personal Development School and access a full library of courses, tools, and live group coaching sessions. Understand why the cheating happened and heal the trust wounds it created — so you can finally experience love with certainty and clarity.',
      videoId: '546da06755eb846463a99dd3b4e9f493',
      thumbnailSrc:
        'https://pds-strapi-bucket.s3.ca-central-1.amazonaws.com/heal_from_cheating_learn_to_trust_again_masterclass_video_thumbnail_ca0ce7c225.jpg',
      videoLabel:
        'Discover how to stop overthinking, calm anxiety, rebuild trust in yourself and others, and create relationships that feel safe, stable, and aligned.',
    },
    navigation: [
      {
        label: 'Why this Membership?',
        href: '#why-this-membership',
      },
      {
        label: 'The Curriculum',
        href: '#the-curriculum',
      },
      {
        label: 'Meet Thais Gibson',
        href: '#meet-thais-gibson',
      },
      {
        label: 'About Membership',
        href: '#about-membership',
      },
      {
        label: 'What Students Say',
        href: '#what-students-say',
      },
    ],
    patterns: {
      title: 'If You Feel Stuck in Anxiety, Doubt, or Constant Overthinking After Infidelity…',
      copy1: [
        "You're not alone.",
        'And if you’ve tried to move forward — but still feel anxious, confused, or emotionally stuck in your next relationship — there’s a reason for that.',
        'Maybe you’ve been asking yourself:',
      ],
      listItems1: [
        'Why did the cheating happen in the first place?',
        'Was any of it real?',
        'Will I ever be able to truly trust someone else again?',
        'Can I ever really trust myself again?',
      ],
      copy2: ['Or maybe you’re dating again and you feel:'],
      listItems2: [
        'Anxious when they’re on their phone or when they’re slow to respond',
        'The need to check their phone to see if they’re betraying you',
        'Constantly second-guessing yourself and doubting your own intuition.',
        'Wanting so badly to let someone in and trust again, but feeling paralyzed by the fear of being hurt.',
      ],
      copy3: [
        'After a while, it can feel exhausting.',
        'Because you don’t just want to “move on”…',
        "You want to understand what actually happened — so you can move through it, release it, and build the kind of relationship where you don't need walls at all.",
        <>
          <strong>The Real Truth About Cheating</strong>
        </>,
        'Cheating doesn’t just break trust in a relationship.',
        <>
          It creates a deep internal <strong>trust wound</strong>.
        </>,
        'And unless that wound is truly healed…',
        'It continues to show up as:',
      ],
      listItems3: [
        'Anxiety',
        'Hypervigilance',
        'Overthinking',
        'Emotional triggers',
        'Difficulty trusting yourself or others',
      ],
      copy4: [
        'This is why even when you begin dating again…',
        <>
          <strong>The feeling of safety doesn’t fully come back</strong>.
        </>,
      ],
    },
    socialProof: [
      {
        icon: faUsers,
        iconCircleBg: 'bg-[#F8DDFF]',
        iconColor: 'text-primary',
        title: '60,000+',
        subtitle: 'Students Enrolled',
      },
      {
        icon: faGlobe,
        iconCircleBg: 'bg-[#D9E0FE]',
        iconColor: 'text-[#142BD5]',
        title: '145+',
        subtitle: 'Countries Worldwide',
      },
      {
        icon: faFaceSmile,
        iconCircleBg: 'bg-[#FEE9D5]',
        iconColor: 'text-[#FFA000]',
        title: '99.7%',
        subtitle: 'User Satisfaction Rate',
      },
    ],
    aboutMasterclass: {
      title1: 'Healing the Trust Wound Changes Everything',
      copy1: [
        'Inside The Personal Development School, you’ll learn how to go deeper than surface-level advice.',
        'Instead of just trying to “move on” or “just trust again”…',
        'You’ll learn how to:',
      ],
      image1: '/images/Masterclass/woman-drinking-coffee-2.png',
      image1Alt: 'A woman enjoying coffee',
      listItems1: [
        'Identify how being cheated on affected how you see and treat yourself — and give yourself the love and compassion you deserve ',
        'Understand how trust wounds control your emotional reactions',
        'Reprogram the subconscious patterns keeping you stuck',
        'Rebuild trust — starting with yourself',
      ],
      copy2: [
        'Because real healing doesn’t come from time alone.',
        <>
          <strong>It comes from understanding and healing what the experience did to you.</strong>
        </>,
      ],
      title2: 'Overcoming Betrayal & Rebuilding Trust from the Inside Out',
      image2: '/images/Masterclass/woman-writing-2.png',
      image2Alt: 'A woman writing in her journal',
      copy3: [
        <>
          Inside this course, you’ll go beyond awareness and into{' '}
          <strong>real, structured healing</strong>.
        </>,
        'You’ll learn the exact frameworks used to:',
      ],
      listItems2: [
        'Understand why the cheating actually happened so you can release resentment and self-blame for good',
        'Separate facts from painful stories so you stop replaying what happened',
        'Heal the triggers (the jealousy, the fear, the anxiety) so you show up clear-headed in your next relationship',
        'Rebuild self-trust so you can rely on your gut again without second-guessing yourself',
      ],
      copy4: [
        "You didn't choose what happened to you. But you get to choose what you do with it. This isn't about forgetting or pretending it didn't hurt. It's about understanding it so completely that it loses its grip on you, and building the kind of trust in yourself that no one can take away.",
      ],
    },
    curriculum: {
      title: 'The Curriculum',
      subtitle: 'Your Step-by-Step Path to Healing After Betrayal',
      image: '/images/Masterclass/trust-masterclass-mockup.png',
      imageAlt:
        'Overcome Betrayal, Heal Trust Wounds & Move Past Jealousy Course can be taken on any device',
      parts: [
        {
          question: (
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center leading-tight">
                <span className="text-xs text-gray-500 uppercase">Part</span>
                <span className="text-3xl text-primary font-bold"> 1</span>
              </div>
              <p className="text-xl font-bold mb-0">
                Understanding Trust, Betrayal & What Really Happened
              </p>
            </div>
          ),
          answer: (
            <>
              <p>
                In this first part of the course, you’ll gain clarity on what trust actually is —
                and what breaks it.
              </p>
              <p>
                You’ll learn that trust is built through{' '}
                <strong>consistency, emotional safety, and feeling considered</strong> — and why
                when these are disrupted, it impacts your entire emotional system.
              </p>
              <p>You’ll also begin to understand:</p>
              <ul className="list-disc list-outside pl-4 mb-4">
                <li>Why cheating happens (beyond surface explanations)</li>
                <li>How unmet needs and emotional disconnection play a role</li>
                <li>Why you may be personalizing the experience in ways that aren’t accurate</li>
              </ul>
              <p>
                This alone can be extremely impactful:{' '}
                <strong>
                  You stop questioning yourself and replaying experiences — and start seeing the
                  full picture.
                </strong>
              </p>
            </>
          ),
        },
        {
          question: (
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center leading-tight">
                <span className="text-xs text-gray-500 uppercase">Part</span>
                <span className="text-3xl text-primary font-bold"> 2</span>
              </div>
              <p className="text-xl font-bold mb-0">
                Identifying the Trust Wound & Reprogramming It
              </p>
            </div>
          ),
          answer: (
            <>
              <p>
                In this section, you’ll uncover the <strong>core wound created by betrayal.</strong>
              </p>
              <p>This is the belief that gets formed beneath the surface, such as:</p>
              <ul className="list-disc list-outside pl-4 mb-4">
                <li>“I’m not safe”</li>
                <li>“People will always hurt me”</li>
                <li>“I’m not good enough”</li>
              </ul>
              <p>You’ll learn how to:</p>
              <ul className="list-disc list-outside pl-4 mb-4">
                <li>The beliefs that you formed after you were cheated on</li>
                <li>
                  Understand how carrying those beliefs at a subconscious level can negatively
                  impact your life and future relationships
                </li>
                <li>
                  Begin deeplying healing any beliefs you’re subconsciously carrying through guided,
                  step-by-step exercises
                </li>
              </ul>
              <p>
                These beliefs don't fade on their own. Left unexamined, they quietly shape every
                relationship you walk into — who you choose, what you tolerate, and how quickly you
                pull away from the people who are actually safe. This section gives you the tools to
                find them, name them, and stop them from controlling your future.
              </p>
            </>
          ),
        },
        {
          question: (
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center leading-tight">
                <span className="text-xs text-gray-500 uppercase">Part</span>
                <span className="text-3xl text-primary font-bold"> 3</span>
              </div>
              <p className="text-xl font-bold mb-0">Rebuilding Self-Trust & Emotional Stability</p>
            </div>
          ),
          answer: (
            <>
              <p>
                One of the biggest hidden impacts of cheating is not just losing trust in someone
                else…
              </p>
              <p>It’s losing trust in yourself.</p>
              <p>In this part, you’ll learn:</p>
              <ul className="list-disc list-outside pl-4 mb-4">
                <li>Why self-trust breaks down (boundaries, self-criticism, inconsistency)</li>
                <li>How to rebuild trust through small, consistent actions</li>
                <li>How to stop second-guessing yourself and your decisions</li>
              </ul>
              <p>You’ll also develop the ability to:</p>
              <ul className="list-disc list-outside pl-4">
                <li>
                  Show up for your needs so that you can be fully honest about what you want in a
                  relationship
                </li>
                <li>
                  Set boundaries without fear so that the people around you know exactly where you
                  stand
                </li>
                <li>
                  Feel grounded in your choices again so that you move forward with confidence
                  instead of constant doubt
                </li>
              </ul>
            </>
          ),
        },
        {
          question: (
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center leading-tight">
                <span className="text-xs text-gray-500 uppercase">Part</span>
                <span className="text-3xl text-primary font-bold"> 4</span>
              </div>
              <p className="text-xl font-bold mb-0">Trusting Again</p>
            </div>
          ),
          answer: (
            <>
              <p>
                You know what happened. You've processed it, and maybe even forgiven it. But
                trusting someone again still feels like a risk your body won't let you take. Part 4
                helps you rebuild that ability so past betrayal doesn't control how you show up in
                future relationships.
              </p>
              <p>You'll learn:</p>
              <ul className="list-disc list-outside pl-4 mb-4">
                <li>
                  How to recognize when you're reacting to old pain instead of what's actually
                  happening in front of you
                </li>
                <li>
                  How to communicate your needs, fears, and expectations honestly with a new partner
                </li>
                <li>
                  How to tell the difference between real red flags and triggers from your past
                </li>
              </ul>
              <p>Including:</p>
              <ul className="list-disc list-outside pl-4 mb-4">
                <li>Understanding what healthy trust actually looks like and how it's built</li>
                <li>Creating boundaries that protect you without shutting people out</li>
                <li>Letting someone earn your trust at a pace that feels safe</li>
              </ul>
              <p>
                This gives you a real path forward, one where you're choosing people clearly instead
                of testing them constantly.
              </p>
            </>
          ),
        },

        {
          question: (
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center leading-tight">
                <span className="text-xs text-gray-500 uppercase">Part</span>
                <span className="text-3xl text-primary font-bold"> 6</span>
              </div>
              <p className="text-xl font-bold mb-0">
                Moving Forward with Clarity, Confidence, and Peace
              </p>
            </div>
          ),
          answer: (
            <>
              <p>In the final part of the course, everything comes together. You'll gain:</p>
              <ul className="list-disc list-outside pl-4 mb-4">
                <li>
                  Clarity on who you are and what you actually want in a relationship now so that
                  you stop settling for less than what you deserve
                </li>
                <li>
                  Confidence that you can trust yourself to choose well so that the next
                  relationship starts from a completely different place
                </li>
                <li>
                  A path forward without carrying fear, doubt, or the weight of what someone else
                  did to you so that your past finally stays in the past
                </li>
              </ul>
              <p>
                You'll no longer feel like what happened in the past is still deciding things for
                you. You'll feel clear, grounded, and ready to let someone in again on your own
                terms.
              </p>
            </>
          ),
        },
      ],
      copy: [
        "Cheating doesn't just break trust in the other person. It breaks trust in yourself — your judgment, your instincts, your ability to see what's real.",
        'The Overcome Betrayal, Heal Trust Wounds & Move Past Jealousy Course walks you through how to understand what actually happened, rebuild that trust from the inside out, and move into your next relationship with a clear mind and an open heart.',
      ],
    },
    schedule: {
      title: 'Day by Day Schedule',
      items: [
        {
          title: 'Part 1: Foundations of Trust',
          lessons: [
            {
              title: 'Lesson 1',
              copy: 'Welcome & Itinerary',
            },
            {
              title: 'Lesson 2',
              copy: 'What is Trust?',
            },
            {
              title: 'Lesson 3',
              copy: 'Course Workbook (Download)',
            },
          ],
        },
        {
          title: 'Part 2: Understanding Trust Violations',
          lessons: [
            {
              title: 'Lesson 4',
              copy: 'Types of Trust Reparations',
            },
            {
              title: 'Lesson 5',
              copy: 'Jealousy and the 4 Types of Trust Violations',
            },
            {
              title: 'Lesson 6',
              copy: 'The Somatic Experience of Jealousy',
            },
          ],
        },
        {
          title: 'Part 3: Repairing Trust with Others',
          lessons: [
            {
              title: 'Lesson 7',
              copy: 'Repairing & Reprogramming Trust Violations',
            },
            {
              title: 'Lesson 8',
              copy: 'Repairing a Major Trust Violation',
            },
            {
              title: 'Lesson 9',
              copy: 'Improving Your Internal Trust Baseline',
            },
          ],
        },
        {
          title: 'Part 4: Rebuilding Self-Trust',
          lessons: [
            {
              title: 'Lesson 10',
              copy: 'Repairing Self-Trust',
            },
            {
              title: 'Lesson 11',
              copy: 'In-Depth Reprogramming of Self-Trust',
            },
            {
              title: 'Lesson 12',
              copy: 'Course Feedback',
            },
          ],
        },
        {
          title: 'Part 5: Integration & Practice',
          lessons: [
            {
              title: 'Lesson 13',
              copy: 'How to Complete the Workbook Exercises (Part 1)',
            },
            {
              title: 'Lesson 14',
              copy: 'How to Complete the Workbook Exercises (Part 2)',
            },
          ],
        },
      ],
    },
    bonuses: {
      title: 'Bonuses You Unlock When You Join The All-Access Pass Today',
      items: [
        {
          label: 'Bonus #1',
          title: 'The Personal Development School All-Access Course Library',
          copy: 'Access 70+ courses covering emotional regulation, attachment styles, communication, boundaries, and relationship dynamics.',
          image: '/images/Masterclass/needs-bonus-1.png',
          imageAlt: 'The Personal Development School All-Access Course Library',
        },
        {
          label: 'Bonus #2',
          title: 'Guided Healing Worksheets',
          copy: 'Practical exercises to help you process betrayal, identify patterns, and apply what you learn in real time.',
          image: '/images/Masterclass/trust-bonus-2.png',
          imageAlt: 'Guided Healing Worksheets',
        },
        {
          label: 'Bonus #3',
          title: 'Self-Assessments & Relationship Insights',
          copy: 'Tools to help you understand your patterns, triggers, and growth areas so your healing feels personalized and actionable.',
          image: '/images/Masterclass/needs-bonus-3.png',
          imageAlt: 'Personal Growth Quizzes & Self-Assessments',
        },
      ],
    },
    thais: {
      title: 'Thais Gibson, PhD, Founder of The Personal Development School',
      image: '/images/Masterclass/thais-portrait-3.jpg',
      imageAlt: 'Thais Gibson portrait',
    },
    growthJourney: {
      title: "Here's What Your Personal Growth Journey Could Look Like...",
      subtitle: (
        <>
          After the <strong>Overcome Betrayal, Heal Trust Wounds & Move Past Jealousy</strong>{' '}
          Course, continue your journey to improve all areas of your life.
        </>
      ),
      steps: [
        {
          label: 'First...',
          course: 'Effective Communication Course:',
          description:
            'communicate clearly and confidently, without guilt, resentment, or shutting down.',
          image: '/images/course-expressing-needs-effectively.jpg',
          imageAlt: 'Effective Communication Course',
        },
        {
          label: 'Next...',
          course: 'Skyrocket Your Self-Esteem Course:',
          description:
            'stop relying on external validation and begin building stable, internal self-worth.',
          image: '/images/course-skyrocket-your-self-esteem.jpg',
          imageAlt: 'Skyrocket Your Self-Esteem Course',
        },
        {
          label: 'Then...',
          course: 'Learning to Love Yourself Course:',
          description:
            'learn to truly see, support, and show up for yourself so you can feel safe, worthy, and capable of receiving the love.',
          image: '/images/course-learning-to-love-yourself.jpg',
          imageAlt: 'Learning to Love Yourself Course',
        },
        {
          label: 'Lastly...',
          course: 'How to Repair Any Relationship Course:',
          description:
            'conflict becomes a bridge to deeper understanding instead of a trigger for distance or fear.',
          image: '/images/course-how-to-repair-relationship.jpg',
          imageAlt: 'How to Repair Any Relationship Course',
        },
      ],
    },
    healing: {
      title: 'Find Healing, Clarity, and Emotional Peace with The Personal Development School',
      copy: ['Inside the membership, you’ll get:'],
      listItems: [
        'A bonus library of transformational courses',
        'Practical tools you can apply immediately',
        'Weekly optional group coaching and Q&A sessions',
        'A supportive, likeminded global community',
      ],
      copy2: [
        'This is not just about understanding your patterns, it’s about changing them so that they no longer control you.',
      ],
      image: '/images/Masterclass/thais-on-podcasts.jpg',
      imageAlt: 'Thais Gibson on interviews and podcasts',
    },
    transformation: {
      title: 'Begin Your Transformational Journey with The Personal Development School',
      copy: [
        'As a member, you’ll gain access to the Overcome Betrayal & Heal Trust Wounds Course along with a full library of advanced programs designed to help you strengthen communication, improve emotional resilience, and create more fulfilling relationships.',
        'Each program includes practical lessons and exercises that help you apply what you learn directly to your daily life.',
        'You’ll also join a global community of people committed to growth, self-awareness, and building healthier relationships.',
      ],
      image: '/images/Masterclass/various-devices-mockup.png',
      imageAlt: 'Access to the Personal Development School on various devices',
    },
    features: {
      title: 'What’s Included in Your Personal Development School Membership',
      list: [
        {
          title: 'Transformational Courses',
          copy: (
            <>
              <span className="text-primary">
                <strong>Explore a full library of in-depth programs</strong>
              </span>{' '}
              designed to help you improve communication, understand relationship dynamics, and
              create stronger emotional connection in your life.
            </>
          ),
        },
        {
          title: 'Practice Tools for Real Change',
          copy: (
            <>
              <span className="text-primary">
                <strong>
                  Access guided exercises, step-by-step frameworks, and powerful techniques
                </strong>
              </span>{' '}
              you can apply immediately to shift patterns and improve how you respond to challenges.
            </>
          ),
        },
        {
          title: 'Weekly Group Coaching Sessions',
          copy: (
            <>
              <span className="text-primary">
                <strong>Join live group coaching and Q&A sessions with Thais Gibson</strong>
              </span>{' '}
              and expert coaches, where you can deepen your learning and get practical guidance.
            </>
          ),
        },
        {
          title: 'A Global Growth Community',
          copy: (
            <>
              <span className="text-primary">
                <strong>Connect with thousands of members around the world</strong>
              </span>{' '}
              who are committed to healing, personal growth, and building more fulfilling
              relationships.
            </>
          ),
        },
      ],
    },
    transformationJourney: {
      title: 'This is How Transformation Happens',
      intro: [
        `Lasting change doesn't come from forcing yourself to "just get over it." It comes from understanding why the pain keeps showing up the way it does, and learning how to actually move through it instead of around it.`,
      ],
      items: [
        {
          icon: faBullseye,
          title: 'You Begin to Feel Calm Instead of Anxious',
          copy: [
            'You stop constantly scanning for signs of betrayal and start feeling more grounded and secure.',
          ],
        },
        {
          icon: faLightbulb,
          title: 'You Trust Yourself Again',
          copy: ['You no longer second-guess your thoughts, decisions, or boundaries.'],
        },
        {
          icon: faArrowTrendUp,
          title: 'Relationships Start to Feel Steady',
          copy: [
            "You stop bracing for the worst. You stop looking for signs that it's all about to fall apart. As you heal, new relationships start to feel safer, clearer, and more trustworthy.",
          ],
        },
        {
          icon: faHandHoldingSeedling,
          title: 'You Don’t Have to Go Through This Alone',
          copy: [
            'Inside The Personal Development School, you’ll connect with people who understand what you’re going through, and you will have step-by-step guidance as you finally let go of past wounds. ',
            'You’ll learn, grow, and heal in an environment that supports real transformation.',
          ],
        },
      ],
    },
    media: {
      label: 'THE MEDIA IS RAVING ABOUT THAIS GIBSON',
      title: 'A Leading Voice in Relationships and Emotional Growth',
      copy: [
        'Through her teachings and the Personal Development School, Thais Gibson, PhD has helped 60,000+ people in over 145 countries better understand their emotional patterns and build healthier relationships.',
        'Her work combines psychological insight with practical tools designed to help people create meaningful and lasting personal change.',
      ],
      videoId: 'ce68139aa9a0eaab7a36522a37fc237e',
      thumbnailSrc:
        'https://pds-strapi-bucket.s3.ca-central-1.amazonaws.com/thais_writing_video_thumbnail_a5e6bc6f9e.jpg',
      articles: [
        {
          logo: '/images/Logo_Brand/science-times-logo.png',
          logoAlt: 'Science Times',
          title:
            'Heal, Grow, Love: The Personal Development School Path to Relationship Fulfillment',
          copy: "Gibson Integrated Attachment Theory TM framework was developed from 10+ years of researching neuroscience, working with over 30,000 clients, and integrating over 13 different personal development modalities. It's designed to help you experience massive breakthroughs in all areas of your life...",
          linkUrl:
            'https://www.sciencetimes.com/articles/46874/20231102/heal-grow-love-the-personal-development-school-path-to-relationship-fulfillment.htm',
          link: 'Read on Science Times',
        },
        {
          logo: '/images/Logo_Brand/us-insider-logo.jpg',
          logoAlt: 'US Insider',
          title:
            'Discover the Secrets to Thriving Relationships with Relationship Expert, Thais Gibson',
          copy: 'Thais Gibson’s work has earned the trust of tens of thousands globally, with a staggering 94% satisfaction rate among PDS members. From profound changes in relationships to enhanced emotional well-being and productivity, PDS subscribers experience tangible and intangible benefits that positively impact their lives....',
          linkUrl:
            'https://usinsider.com/discover-the-secrets-to-thriving-relationships-with-relationship-expert-thais-gibson/',
          link: 'Read on US Insider',
        },
        {
          logo: '/images/Logo_Brand/international-business-times-logo.png',
          logoAlt: 'International Business Times',
          title:
            "Thais Gibson's PDS: Where Science-Backed Strategies Lead to Tangible Breakthroughs",
          copy: "In a world where toxic relationship patterns can erode happiness and fulfillment, Thais Gibson's PDS stands as a beacon of hope. By embracing science-backed strategies and personalized approaches, PDS empowers individuals to break free from their past and pave the way to a future filled with love, and understanding breakthroughs...",
          linkUrl:
            'https://www.ibtimes.sg/thais-gibsons-pds-where-science-backed-strategies-lead-tangible-breakthroughs-72150',
          link: 'Read on International Business Times',
        },
      ],
    },
    noRiskMembership: {
      title: 'Try the Membership Risk-Free for 15 Days',
      copy: [
        'Explore everything inside The Personal Development School Membership with no risk.',
        'When you join, you’ll have 15 days to experience the courses, tools, and resources inside The Personal Development School Membership and see how the work resonates with you.',
        'If you decide it’s not the right fit, simply request a refund within the 15-day window and you’ll receive your money back, no questions asked.',
      ],
      image: '/images/Masterclass/15-days-risk-free.svg',
      imageAlt: '15-days-risk-free badge',
    },
    pricing: {
      title: 'Transform Now With The Personal Development School',
      copy: "What's included:",
      items: [
        <>
          <strong>
            Full Access to the Course Library including the Overcome Betrayal & Heal Trust Wounds
            Course:
          </strong>{' '}
          Explore in-depth programs designed to help you improve communication, strengthen
          relationships, and create healthier emotional patterns.
        </>,
        <>
          <strong>Weekly Live Group Coaching with Thais Gibson:</strong> Join live group coaching
          sessions and Q&A sessions where you can gain practical guidance and apply what you’re
          learning in real time.
        </>,
        <>
          <strong>Practical Tools for Real Change:</strong> Use guided exercises, proven frameworks,
          and step-by-step techniques designed to help you shift patterns and improve how you
          respond to life’s challenges.
        </>,
        <>
          <strong>A Global Growth Community:</strong> Connect with thousands of members around the
          world who are committed to personal growth, healing, and building more meaningful
          relationships.
        </>,
        <>
          <strong>15-Day Money-Back Guarantee:</strong> Try the membership risk-free and explore
          everything inside the platform with complete peace of mind.
        </>,
      ],
    },
    postPurchase: {
      title: 'What Happens After You Order',
      items: [
        {
          image: '/images/Masterclass/post-purchase-1.png',
          imageAlt: 'Complete purchase at checkout page',
          copy: 'Click the purchase button above and you’ll be take to a secure checkout page.',
        },
        {
          image: '/images/Masterclass/post-purchase-2.png',
          imageAlt: 'Complete your order and check your email for your login instructions.',
          copy: 'Complete your order and check your email for your login instructions.',
        },
        {
          image: '/images/Masterclass/post-purchase-3.png',
          imageAlt:
            'Login from The Personal Development School Home on your devices to get started.',
          copy: 'Login from The Personal Development School Home on your devices to get started.',
        },
      ],
    },
  },
}
