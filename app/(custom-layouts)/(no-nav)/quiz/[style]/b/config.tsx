// libraries
import { fa1, fa2, fa3, fa4, fa5 } from '@awesome.me/kit-545b942488/icons/classic/solid'
// utils
import { TStyle } from '@/utils/types'
import { List } from '@/components/List'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'

export const config = {
  base: {
    pdsGrowth: (style: TStyle) =>
      style === 'sa'
        ? {
            title: 'The Personal Development School: A Place to Keep Growing',
            copy: [
              'You already have the self-awareness, tools, and emotional strength to navigate relationships with care and confidence.',
              "But when you're surrounded by people who are still healing or learning to communicate, it can be hard to stay grounded without slipping into old roles—like over-functioning, people-pleasing, or emotional caretaking.",
              <>
                <strong>That’s why we created The Personal Development School.</strong>
              </>,
              'The Personal Development School is a space for emotionally intelligent people like you to sharpen your tools, deepen your insight, and stay rooted in self-trust—even when others aren’t there yet.',
              'We offer evidence-based courses, weekly live coaching, and a private, supportive community where secure people can continue expanding their growth.',
            ],
            hook: (
              <>
                It’s not about fixing—it’s about{' '}
                <strong>
                  <em>refining</em>
                </strong>
                .
              </>
            ),
          }
        : {
            title: 'This Is Where We at The Personal Development School Come In',
            subtitle: 'We’ve helped thousands of people just like you. Now, it’s your turn.',
            copy: [
              <>
                You now know what real healing requires:{' '}
                <strong>safety, the right tools, and consistent support</strong>.
              </>,
              'But most people don’t know where to find those things. They’re not taught in school. They’re not easy to Google. And even when you want to heal, it’s hard to know where to start.',
              <>
                <strong>That’s why we created The Personal Development School.</strong>
              </>,
              'The Personal Development School is a dedicated space for healing—offering on-demand courses designed to influence real change, live weekly webinars, and a private community of people who truly understand what you’re working through.',
            ],
            hook: 'It’s designed so you can access everything you need to rewire old patterns and build healthier relationships, all in one place.',
          },

    pdsFeatures: (style: TStyle, attachmentStyleLong: string) =>
      style === 'sa'
        ? [
            {
              title: 'Courses: Tools for Navigating Complex Dynamics',
              text: [
                'You’ll get instant access to 70+ on-demand courses created with our proprietary, neuroscience-backed method.',
                'Designed to support your continued growth, our courses focus on:',
                <>
                  <List
                    classNameIcon="text-primary"
                    icon={faCheckCircle}
                    listItems={[
                      'Navigating relationships with insecure partners or friends',
                      'Holding boundaries without guilt',
                      'Advanced communication and conflict resolution',
                      'Leadership and emotional intelligence in personal and professional settings',
                    ]}
                  />
                </>,
                'Explore whatever fits your needs—whether it’s relationship nuance, workplace communication, or how to support someone you care about without self-abandoning.',
              ],
            },
            {
              title: 'Community: A Space That Matches Your Growth',
              text: [
                'Inside our private, grounded community, you’ll connect with people who get it—people who are secure, emotionally aware, and committed to meaningful relationships.',
                'This is a space for real conversation, honest reflection, and emotional alignment.',
                <>
                  <List
                    classNameIcon="text-primary"
                    icon={faCheckCircle}
                    listItems={[
                      'You’re not here to be the “therapist” in your friendships or relationships.',
                      'You’re here to connect as a whole person—and this is the place to do it.',
                    ]}
                  />
                </>,
              ],
            },
            {
              title: 'Live Webinars: Practice With Support',
              text: [
                'Join our founder and attachment expert, Thais Gibson, PhD, for weekly live Q&A sessions.',
                'Bring real-life questions, reflect on complicated dynamics, and get personalized feedback from someone who’s helped over 30,000 people deepen their relationships.',
                'These aren’t generic webinars. They’re grounded, practical, and tailored to real-world situations—and they help secure individuals like you stay aligned, confident, and connected.',
              ],
            },
          ]
        : [
            {
              title: 'Courses: Your Tools to Change',
              text: [
                'You’ll get immediate access to 70+ on-demand courses, all built using our proprietary, evidence-based method. These courses are designed to help you gently rewire subconscious patterns, shift your attachment style, and regulate your emotions in real time.',
                'It’s not just theory—it’s neuroscience-backed support that creates real, lasting change.',
                <>
                  <em>Start with our {attachmentStyleLong} to Securely Attached program.</em>
                </>,
              ],
            },
            {
              title: 'Community: Your Safe, Judgment-Free Space',
              text: [
                "Inside our private, supportive community, you’ll find people who understand exactly what you're working through. It’s a place where it’s safe to be vulnerable and where real connections can start to grow.",
                <>
                  Here, <strong>you won’t be alone or misunderstood</strong>. Our members have
                  walked a path similar to yours. Because everyone in our community ‘gets it,’
                  you’ll find the courage to open up and explore new ways of relating without losing
                  yourself in the process.
                </>,
              ],
            },
            {
              title: 'Live Webinars: Practice With Support',
              text: [
                'Join weekly live sessions with our founder, Thais Gibson, attachment expert, and PhD, for direct coaching, the opportunity to ask questions, get clarity, and integrate your learning into daily life.',
                'This is where new habits start to take root—through real-time support and gentle accountability.',
              ],
            },
          ],
    healingSteps: (style: TStyle, attachmentStyleLong: string) =>
      style === 'sa'
        ? [
            {
              icon: fa1,
              text: 'Join The Personal Development School with your All-Access Pass (save 30% today!) and unlock access to 70+ courses, live coaching, and our secure community.',
            },
            {
              icon: fa2,
              text: 'Choose the tools that fit your next chapter—whether that’s managing conflict, supporting someone with an insecure style, or deepening your connection to self.',
            },
            {
              icon: fa3,
              text: 'Start integrating the tools into your daily life and relationships—with support along the way.',
            },
            {
              icon: fa4,
              text: 'Join a live webinar with Thais Gibson. Ask questions, gain insight, and reflect in a space that truly supports your growth.',
            },
            {
              icon: fa5,
              text: 'Stay secure in yourself—no matter what’s happening around you. Set clear boundaries, communicate effectively, and continue attracting aligned, emotionally available people into your life.',
            },
          ]
        : [
            {
              icon: fa1,
              text: 'You join The Personal Development School with your All-Access Pass (at 30% off!) Unlock access to 70+ courses, live webinars, and our private community.',
            },
            {
              icon: fa2,
              text: (
                <>
                  You start the <strong>{attachmentStyleLong} to Securely Attached program.</strong>{' '}
                  It introduces the core concepts that help you understand what’s been keeping you
                  stuck.
                </>
              ),
            },
            {
              icon: fa3,
              text: (
                <>
                  You apply new tools to your life, existing relationships, and new relationships
                  and meet people <strong>on the same journey as you.</strong>
                </>
              ),
            },
            {
              icon: fa4,
              text: 'You attend your first live webinar with our founder, Thais Gibson. Get clarity, have your questions answered, and feel supported by someone who understands your experience—and has helped tens of thousands of people like you heal.',
            },
            {
              icon: fa5,
              text: 'You feel calm, clear, and confident—setting boundaries that stick, starting new relationships on the right foot, and finally attracting people who feel safe to love.',
            },
          ],
    testimonials: (style: TStyle) =>
      style === 'sa'
        ? {
            title:
              "Over 30,000 People Have Grown with The Personal Development School—Now It's Your Turn",
            text: [
              'Our tools have helped thousands of people move toward secure attachment—and supported securely attached individuals in staying aligned in a world that doesn’t always make that easy.',
              <>
                <em>
                  You’ve already done the inner work. Now it’s time to protect that progress—and
                  keep growing, with support that matches your mindset.
                </em>
              </>,
            ],
          }
        : {
            title: "Over 30,000 People Have Healed—Now It's Your Turn",
            text: [
              'Thousands have successfully transformed their fearful relationship patterns into secure, loving connections. They now live without fear of abandonment, betrayal, or losing themselves.',
              <>
                <em>You deserve relationships that feel safe, fulfilling, and deeply connected.</em>
              </>,
            ],
          },
    thaisBio: (style: TStyle) =>
      style === 'sa'
        ? [
            <>
              <em>
                Meet one of the first experts to prove that attachment styles can be changed and
                strengthened.
              </em>
            </>,
            'Her background as a relationship therapist and researcher, combined with her personal experience, informs every course and live session she leads.',
            'In our live coaching webinars, you’ll get real-time mentorship, thoughtful support, and a place to explore emotional nuance with someone who truly understands the full spectrum of attachment.',
            'Her goal is simple: to help you stay grounded, self-connected, and empowered in every area of your life.',
          ]
        : [
            <>
              <em>
                Your healing begins with someone who’s been where you are—and knows exactly how to
                help you get where you want to be.
              </em>
            </>,
            'Thais isn’t just a founder. She is an industry leader, and the first person to prove that attachment styles can be changed because she lived with an insecure attachment—and healed. That’s why she created the Personal Development School: to help others do the same.',
          ],
    faqs: [
      {
        question: 'Can I cancel anytime?',
        answer:
          'Yes, easily manage your subscription at any time. Plus, we offer a 7-day money-back guarantee—start risk-free and experience the benefits for yourself.',
      },
      {
        question: 'How quickly will I see results?',
        answer:
          'Most users report noticeable changes within 30 days, with the first results appearing in just 7. ',
      },
      {
        question: "What if I'm new to attachment theory?",
        answer:
          'Our courses and resources are beginner-friendly, designed specifically to guide you step-by-step.',
      },
      {
        question: 'Is the community moderated?',
        answer:
          'Yes, our supportive community is actively moderated to ensure a safe, judgment-free space.',
      },
      {
        question: 'Can I access the materials on my schedule?',
        answer:
          "Yes. All of our courses are on-demand, so you can take them whenever it works for you. Webinars are live each week, and we also offer replays in case you can't attend.",
      },
      {
        question: 'Can I take courses that aren’t designed for my attachment style?',
        answer:
          'Absolutely. You can explore any of our 70+ courses. Even if a course isn’t designed for your specific style, it may help you better understand someone close to you—giving you the tools to improve and strengthen that relationship.',
      },
      {
        question:
          'Can I take the courses and attend webinars at my own pace without feeling overwhelmed?',
        answer:
          'Absolutely. You’re never required to complete content within a strict timeframe. The curriculum is designed to support your personal journey. Go slow or fast—whichever helps you feel safest and most authentic. We want you to maintain your sense of self throughout this process.',
      },
    ],
  },

  fa: {
    title: 'Transform Your Relationships: Finally Feel Safe, Seen, and Loved',

    hookTitle: 'Why Does Every Relationship Feel Like a Balancing Act?',

    hookSubtitle: 'What if it’s not who you’re choosing — but why you’re choosing them? You might:',

    hookListItems: [
      'Be drawn to people who seem perfect on paper—but something always feels off',
      'Feel disappointed again and again, and wonder if your standards are too high',
      'Lower your expectations, give people chances—and end up hurt anyway',
      'Constantly look for signs of betrayal, inconsistency, or emotional danger',
      'Say you want connection, but keep one foot out the door just in case',
    ],

    hookFooter:
      'You crave stable, healthy relationships in every area of your life, but deep down, you don’t believe it’s real—or that it could last.',

    patternListItems: [
      'Who you’re drawn to',
      'How safe you feel when someone gets close',
      'How much you trust people to be consistent and honest',
      'The way you express needs—or hide them',
    ],

    secureCard: [
      <>
        People with <strong>secure attachment</strong> feel safe in love.
      </>,
      'They can depend on others without fear of rejection or losing themselves. They naturally attract people who are consistent, emotionally available, and capable of healthy connection.',
    ],

    insecureCard: [
      <>
        People with <strong>insecure attachment</strong>—like the <strong>Fearful Avoidant</strong>{' '}
        style—often feel unsafe in relationships, even when they deeply want connection.
      </>,
      'When you have a Fearful Avoidant attachment, your nervous system is always on high alert. You may subconsciously choose partners who are emotionally unavailable, inconsistent, or triggering in familiar ways.',
    ],

    patternsDescriptionOne:
      'It’s not about preference—it’s about survival. Their system is drawn to what feels familiar, not what feels healthy.',

    patternsDescriptionTwo: [
      'These patterns develop based on how emotionally safe you felt growing up.',
      <>
        If love was unpredictable in early life, your nervous system learned to expect more of the
        same. It developed <strong>protective mechanisms</strong> designed to help you{' '}
        <strong>survive a difficult situation completely subconsciously.</strong>
      </>,
      <>
        So even now, as an adult, you might find yourself pulled toward people who feel familiar—not{' '}
        <strong>
          because they’re healthy, but because they fit the emotional map you’ve carried since
          adolescence.
        </strong>
      </>,
    ],

    subsconsciousListItems: [
      'It looks for what’s familiar.',
      'It repeats what feels “normal,” even if that normal is painful.',
      'It pulls you toward the people and dynamics that match your earliest experiences—even when those experiences taught you to expect confusion, inconsistency, or betrayal.',
    ],

    repeatedPatternsBodyItems: [
      'If you keep ending up in relationships that feel intense but unstable—romantic or otherwise...',
      'If you attract people who seem great at first but turn out to be inconsistent, unpredictable, or hard to trust...',
      'If you constantly find yourself waiting for the other shoe to drop—in friendships, family dynamics, or dating...',
    ],

    videoSrc: 'https://storage.googleapis.com/pds_videos/FA_Funnel_Control.mp4',

    thaisBio:
      'Thais isn’t just a founder. She is an industry leader, and the first person to prove that attachment styles can be changed because she lived the Fearful Avoidant experience—and healed. That’s why she created The Personal Development School: to help others do the same.',
  },

  da: {
    title: 'Transform Your Relationships: Finally Feel Connected Without Losing Your Independence',

    hookTitle: 'Why Do Relationships Feel So Draining—Even When You Want Connection?',

    hookSubtitle:
      'What if the issue hasn’t been your ability to care, but the way you’ve had to protect your peace?',

    hookListItems: [
      'Feel unsure whether long-term relationships are worth the stress or compromise',
      'Attract people who feel too emotionally dependent, intense, or inconsistent',
      'Value your freedom and independence—but wonder if it’s keeping you from deeper connection',
      'Keep things surface-level to avoid conflict or pressure—but still feel misunderstood',
      'Want support—but feel uneasy when someone gets too close or needs too much from you',
    ],

    hookFooter:
      'You want peace, clarity, and relationships where your space is respected—without losing the option for closeness, too.',

    patternListItems: [
      'What makes you feel overwhelmed—or at ease—in relationships',
      'How much closeness feels safe',
      'Whether you trust others to meet your needs without pressure',
      'The way you express support—or protect your emotional boundaries',
    ],

    secureCard: [
      <>
        People with <strong>secure attachment</strong> trust that love will stay.
      </>,
      'They can depend on others without fear of rejection or losing themselves. They naturally attract people who are consistent, emotionally available, and capable of healthy connection.',
    ],

    insecureCard: [
      <>
        People with <strong>insecure attachment</strong>—like the{' '}
        <strong>Dismissive Avoidant</strong> style—often feel unsafe in relationships, even when
        they deeply want connection.
      </>,
      'When you have a Dismissive Avoidant attachment style, your nervous system is wired to prioritize emotional safety through distance and self-reliance.',
      "You may choose distant partners who don't ask much of you—not because you want disconnection but because that's what feels safe.",
    ],

    patternsDescriptionOne:
      'It’s not about preference—it’s about survival. Their system is drawn to what feels familiar, not what feels healthy.',

    patternsDescriptionTwo: [
      'These patterns develop based on how emotionally safe you felt growing up.',
      <>
        If you were pushed away, left to manage your own emotions, or denied love from your
        caregivers, your nervous system learned to expect more of the same. It developed{' '}
        <strong>protective mechanisms</strong> designed to help you{' '}
        <strong>survive a difficult situation completely subconsciously.</strong>
      </>,
      <>
        So even now, as an adult, you might find yourself pulled toward people who feel familiar—not{' '}
        <strong>
          because they’re healthy, but because they fit the emotional map you’ve carried since
          adolescence.
        </strong>
      </>,
    ],

    subsconsciousListItems: [
      'It looks for what’s familiar.',
      'It repeats what feels “normal,” even if that normal is painful.',
      'It pulls you toward the people and dynamics that match your earliest experiences—even when those experiences taught you that you can’t rely on anyone.',
    ],

    repeatedPatternsBodyItems: [
      'If you find yourself pulling back when someone gets too close—without always knowing why...',
      'If emotional conversations feel overwhelming or unproductive, and you’d rather avoid them...',
      'If you feel unsure whether anyone can really meet your needs without overstepping your boundaries...',
    ],

    videoSrc: 'https://storage.googleapis.com/pds_videos/RoyalRumbleDAshortvideo.mp4',

    thaisBio:
      'Thais isn’t just a founder. She is an industry leader, and the first person to prove that attachment styles can be changed because she lived with an insecure attachment—and healed. That’s why she created The Personal Development School: to help others do the same.',
  },

  ap: {
    title: 'Transform Your Relationships: Finally Feel Secure, Wanted, and Fully Loved',

    hookTitle: 'What if you didn’t have to chase love to keep it?',

    hookSubtitle:
      'You don’t care too much. You’ve just spent too long trying to earn the love you already deserve.',

    hookListItems: [
      'Constantly worry if the people you love will leave',
      'Feel anxious when you don’t get a quick reply or clear reassurance',
      'Try to be the “perfect” partner or friend—hoping it will make them stay',
      'Overextend yourself to meet others’ needs, even when yours go unmet',
      'Feel hurt when you give so much and still question where you stand',
    ],

    hookFooter:
      'You long for connection, consistency, and to be chosen without having to earn it—but deep down, you may worry that love always slips away.',

    patternListItems: [
      'Who you’re drawn to',
      'How safe you feel when someone pulls away',
      'How much you believe you’ll be chosen and loved for who you are',
      'How you show up in relationships with your loved ones',
    ],

    secureCard: [
      <>
        People with <strong>secure attachment</strong> feel safe in love.
      </>,
      'They feel confident being close to others and naturally attract people who are consistent, emotionally available, and clear about their intentions.',
    ],

    insecureCard: [
      <>
        People with <strong>insecure attachment</strong>—like the{' '}
        <strong>Anxious Preoccupied</strong> style—often feel like love is fragile, unpredictable,
        or something they need to earn.
      </>,
      'When you have an Anxious Preoccupied attachment style, your nervous system is wired to fear abandonment.',
      'You may fixate on changes in connection, overextend yourself to hold onto relationships, or feel deeply hurt when your efforts go unreciprocated.',
    ],

    patternsDescriptionOne:
      'It’s not because you’re clingy—it’s because your system is trying to keep you safe. Familiar dynamics feel comforting, even if they leave you anxious and unsure.',

    patternsDescriptionTwo: [
      'These patterns developed based on how emotionally secure you felt growing up. If love in early life was inconsistent—if you felt unseen, emotionally neglected, or like you had to try hard to matter—your nervous system learned that closeness was uncertain and had to be maintained at all costs.',
      'So even now, as an adult, you may find yourself pulled toward people who feel familiar. Not because they’re healthy—but because they match the emotional blueprint you’ve carried for years.',
    ],

    subsconsciousListItems: [
      'It looks for what’s familiar.',
      'It repeats what feels “normal,” even if that normal is painful.',
      'It pulls you toward the people and dynamics that match your earliest experiences—even when those experiences taught you to expect confusion, inconsistency, or betrayal.',
    ],

    repeatedPatternsBodyItems: [
      'If you attract people who seem invested at first, then slowly pull away...',
      'If you keep ending up in relationships where you care more, try harder, or feel like you’re never quite enough...',
      'If you find yourself constantly wondering where you stand—in romantic relationships, friendships, or even family...',
    ],

    videoSrc: 'https://storage.googleapis.com/pds_videos/RoyalRumbleAPshortvideo.mp4',

    thaisBio:
      'Thais isn’t just a founder. She is an industry leader, and the first person to prove that attachment styles can be changed because she lived with an insecure attachment—and healed. That’s why she created The Personal Development School: to help others do the same.',
  },

  sa: {
    title: 'Stay secure. Stay grounded. Stay true to yourself.',

    hookTitle: 'What Does It Mean to Be Securely Attached?',

    hookSubtitle:
      'There are four main attachment styles—each shaped by the emotional experiences you had early in life. They fall into two broad categories: ',

    hookListItems: [
      'Constantly worry if the people you love will leave',
      'Feel anxious when you don’t get a quick reply or clear reassurance',
      'Try to be the “perfect” partner or friend—hoping it will make them stay',
      'Overextend yourself to meet others’ needs, even when yours go unmet',
      'Feel hurt when you give so much and still question where you stand',
    ],

    hookFooter:
      'You long for connection, consistency, and to be chosen without having to earn it—but deep down, you may worry that love always slips away.',

    patternListItems: [
      'Who you’re drawn to',
      'How safe you feel when someone pulls away',
      'How much you believe you’ll be chosen and loved for who you are',
      'How you show up in relationships with your loved ones',
    ],

    secureCard: [
      <>
        People with <strong>secure attachment</strong> feel safe in love.
      </>,
      'They feel confident being close to others and naturally attract people who are consistent, emotionally available, and clear about their intentions.',
    ],

    insecureCard: [
      <>
        People with <strong>insecure attachment</strong>—like the{' '}
        <strong>Anxious Preoccupied</strong> style—often feel like love is fragile, unpredictable,
        or something they need to earn.
      </>,
      'When you have an Anxious Preoccupied attachment style, your nervous system is wired to fear abandonment.',
      'You may fixate on changes in connection, overextend yourself to hold onto relationships, or feel deeply hurt when your efforts go unreciprocated.',
    ],

    patternsDescriptionOne:
      'It’s not because you’re clingy—it’s because your system is trying to keep you safe. Familiar dynamics feel comforting, even if they leave you anxious and unsure.',

    patternsDescriptionTwo: [
      'These patterns developed based on how emotionally secure you felt growing up. If love in early life was inconsistent—if you felt unseen, emotionally neglected, or like you had to try hard to matter—your nervous system learned that closeness was uncertain and had to be maintained at all costs.',
      'So even now, as an adult, you may find yourself pulled toward people who feel familiar. Not because they’re healthy—but because they match the emotional blueprint you’ve carried for years.',
    ],

    subsconsciousListItems: [
      'It looks for what’s familiar.',
      'It repeats what feels “normal,” even if that normal is painful.',
      'It pulls you toward the people and dynamics that match your earliest experiences—even when those experiences taught you to expect confusion, inconsistency, or betrayal.',
    ],

    repeatedPatternsBodyItems: [
      'If you attract people who seem invested at first, then slowly pull away...',
      'If you keep ending up in relationships where you care more, try harder, or feel like you’re never quite enough...',
      'If you find yourself constantly wondering where you stand—in romantic relationships, friendships, or even family...',
    ],

    videoSrc: '',

    thaisBio:
      'Thais isn’t just a founder. She is an industry leader, and the first person to prove that attachment styles can be changed because she lived with an insecure attachment—and healed. That’s why she created The Personal Development School: to help others do the same.',
  },
}
