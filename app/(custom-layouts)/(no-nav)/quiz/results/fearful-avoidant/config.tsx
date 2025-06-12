// utils
import { externalRoutes } from '@/utils/constants'

export const SIMPLIFIED_RESULTS_CONFIG = {
  fa: {
    ctaURL: externalRoutes.checkoutSimplifiedFa,
    hero: {
      header: "You're a Fearful Avoidant!",
      copy: 'Your report is on its way! Check your inbox.',
      segway: '',
      subheader:
        "You're 1 Step Away To Having Healthy, Loving Relationships – Without Being Fearful!",
    },
    heroVideo: {
      videoSrc: 'https://storage.googleapis.com/pds_videos/FA_VSL_Funnel.mp4',
      videoThumbnailAlt: 'Fearful Avoidant video thumbnail',
      label: 'Special One-Time Invitation',
      segway: '',
      heading: (
        <>
          Claim Your Offer And Get The{' '}
          <span className="text-primary">7-Days to Transform Relationships</span> Course
        </>
      ),
      subheader: '(Included free with our All Access Pass)',
      copy: 'The NEW WAY to understand and overcome your relationship fears, uncover your needs, and create a powerful connection with someone special without compromising your freedom, independence, and boundaries.',
      ctaLabel: 'YES! I WANT A HEALTHY RELATIONSHIP',
    },
    outcomes: {
      segway1: '',
      header: 'Are you ready to start having the best relationships of your life?',
      copy: [
        'Being a Fearful Avoidant can make relationships feel chaotic and challenging – despite your desire to connect with others. This fear leads you to swing from hot to cold when things become serious, struggle with unexpected emotions, and worry about abandonment and trusting others.',
        "But it doesn't have to be this way.",
        'It is absolutely possible to create the deep connection you want in relationships without being exposed emotionally and losing your independence.',
        <>
          Our <strong>7-Days to Transform Relationships Course</strong> offers simple yet powerful
          tools to overcome your painful relationship patterns and negative emotions while building
          and fostering a loving, trusted, and exciting relationship with transparency and openness.
        </>,
        <>
          Take it as part of our <strong>All-Access Pass</strong> Membership to experience the
          profound and transformational change you desire in yourself and your relationships.
        </>,
      ],
      listItems: undefined,
      copy2: undefined,
      segway2: [],
    },
    course: {
      header: (
        <>
          <span className="lg:block">Here’s Everything You’re Getting With Your </span>

          <span className="text-primary">7 Days to Transform Relationships Course:</span>
        </>
      ),
      courseImageSrc: '/images/SimplifiedFAPage/7-day-transform-laptop-mockup.jpg',
      listItems: [
        'A personalized roadmap so you can understand why you act the way you do and how to change those habits.',
        'A detailed process to recognize your needs and desires so you can meet them yourself and when in a relationship.',
        'Simple strategies to create healthy boundaries and communication skills that stop you from burning out in relationships.',
        'Powerful techniques to overcome your insecurities and fears, empowering you to become confident and stable in your love life.',
        "Specific tools to quickly recognize others' attachment styles and to understand their needs, fears, and boundaries.",
        'A suite of tools to build confidence and self-belief to live a healthier, happier life with yourself and others.',
      ],
      ctaLabel: 'YES! I WANT A HEALTHY RELATIONSHIP',
      segway: '',
    },
    results: {
      header: (
        <>
          <span className="md:block">Those Who Take Our 7 Days to </span>

          <span>Transform Relationships Course:</span>
        </>
      ),
      listItemsLeft: [
        'Learn to trust a partner who wants to grow with them',
        'Are happy and excited to be in a passionate relationship',
        'Overcome their fears about being in a relationship',
        'Feel seen and understood by their partner',
      ],
      listItemsRight: [
        'Stop the ups and downs in a relationship',
        'Keep the excitement alive in a relationship',
        'Heal themselves from childhood trauma',
        'Move past painful relationship wounds',
      ],
    },
    bonus: {
      segway: '',
      header: 'And As A Special Bonus:',
      programCopy: [
        <>
          When you join today, you will receive the{' '}
          <strong>7 Days to Transform Relationships Course</strong> and an exclusive one-time offer
          with our <strong>All-Access Pass!</strong>
        </>,
        <>
          This membership gives you comprehensive and unlimited access to everything we offer at
          <strong> The Personal Development School</strong>, including:
        </>,
      ],
      listItems: [
        'All courses and programs that teach you the secret ingredients to understand other attachment styles and what motivates them to invest in relationships.',
        'Our unique, groundbreaking, proprietary process – Integrated Attachment Theory™ – and how it’s unlike anything you’ve ever seen before. It works fast, is simple to use, and helps anyone, anywhere!',
        "Live weekly webinars and Q&As, hosted by myself and our registered coaches, where you'll get to ask questions about your life while learning new tools to overcome challenges.",
        'Invitation to our private online community where you can connect with other members who are also going through this life-changing journey.',
        'And much more!',
      ],
      offerCopy: [
        <>
          You unlock everything for one price of just <strong>$67/month</strong> instead of paying
          $197 for the <strong>7 Days to Transform Relationships Course</strong> alone.
        </>,
        <>
          <em className="block">*Single course normal price $197</em>

          <em>*All-Access Pass normal price $97</em>
        </>,
      ],
    },
    testimonial: {
      header:
        'With Us, Fearful Avoidants Are Now Enjoying Vibrant, Healthy, & Loving Relationships!',
    },
    footer: {
      header:
        'Get The 7 Days to Transform Relationships Course & Start Having A Healthy, Loving Relationship – Without Any Fears',
      pricing: (
        <>
          Enjoy the All-Access Pass For Just <span className="line-through">$97</span> $67/month
        </>
      ),
      disclaimer:
        'If you’re not happy for any reason, your membership is backed by a 7-day, risk-free, money-back guarantee.',
      ctaLabel: 'YES! I WANT A HEALTHY RELATIONSHIP',
    },
  },
  faVariant: {
    ctaURL: externalRoutes.checkoutRegularSubscription,
    hero: {
      header: 'Your Attachment Style is Fearful Avoidant.',
      copy: 'Your report is on its way! Check your inbox.',
      segway:
        'Are you ready to start building relationships where you finally feel safe, seen, and securely connected? At the Personal Development School we have a tailored program that gives you the right tools you need to start building the loving relationships you crave. Watch the video to learn more.',
      subheader:
        "You're 1 Step Away To Having Healthy, Loving Relationships – Without Being Fearful!",
    },
    heroVideo: {
      videoSrc: 'https://storage.googleapis.com/pds_videos/FA_VSL_Funnel.mp4',
      videoThumbnailAlt: 'Fearful Avoidant video thumbnail',
      label: 'Special One-Time Invitation for Fearful Avoidants',
      segway:
        'At The Personal Development School, this is where everything shifts—your results are just the beginning of building love that feels safe, real, and never costs you your freedom.',
      heading: (
        <>
          Start Your Personalized{' '}
          <span className="text-primary">Fearful Avoidant to Securely Attached</span> Program
        </>
      ),
      subheader: '(Included with All Access Pass–Now 30% Off!)',
      copy: 'What makes this program different? It’s designed specifically for Fearful Avoidants like you. This all-inclusive program will help you overcome relationship fear, rebuild trust, and finally feel safe being loved.',
      ctaLabel: 'YES — I’M READY TO START HEALING',
    },
    outcomes: {
      segway1:
        'You’ve taken the first step by understanding your patterns. Now it’s time to heal them. That’s why we created this program at The Personal Development School: to help you feel safe, seen, and empowered in love.',
      header: 'You’ve Spent Years Guarding Your Heart. Now Let’s Teach It to Feel Safe Again.',
      copy: [
        'Fearful Avoidant patterns don’t mean something’s wrong with you; they mean your subconscious mind is programmed to protect you from inconsistency, rejection, and pain.',
        'But now, those same patterns are keeping you stuck, leaving you missing out on loving relationships.',
        <>
          That’s why we created the <strong>Fearful Avoidant to Securely Attached</strong> program!
          It's designed to help you gently reprogram your survival strategies and start building
          secure, healthy, lasting love.
        </>,
        'With this program, you’ll start uncovering:',
      ],
      listItems: [
        'What triggers your panic, withdrawal, or shutdown patterns',
        'How to feel your emotions safely — without losing control',
        'How to create closeness without feeling trapped',
      ],
      copy2:
        'Plus, you’ll do it in a community built just for you, guided by an expert in attachment theory who understands your exact experience.',
      segway2: [
        'Our team at The Personal Development School developed this system to help you understand your patterns, express your needs, and feel confident setting healthy boundaries.',
        'Inside the program, we walk you step-by-step through the tools, techniques, and breakthroughs that have helped thousands of people just like you feel secure in love.',
      ],
    },
    course: {
      header:
        'Your Personalized Program Was Built to Help Fearful Avoidants Feel Safe in Love — Fast',
      courseImageSrc: '/images/SimplifiedFAPage/fa-to-sa-program.svg',
      listItems: [
        'A step-by-step roadmap that explains why you pull away, panic, or self-sabotage, and exactly how to shift those behaviors',
        'Tools to help you recognize and meet your emotional needs without guilt, fear, or overthinking',
        'Simple frameworks to build boundaries that keep you safe without cutting people off',
        'Techniques to calm your nervous system and feel secure when love shows up',
        'Clarity around your partner’s (or future partner’s) attachment style — so you stop misreading their intentions',
        'Confidence-boosting exercises that help you trust yourself in relationships, even when it feels uncomfortable',
      ],
      ctaLabel: 'YES! I WANT A LOVE THAT LASTS!',
      segway:
        'When you follow our proprietary methods found inside The Personal Development School courses, you’ll finally experience what it feels like to be securely loved, without fear, confusion, or overthinking.',
    },
    results: {
      header: 'What Life Looks Like After You Start Healing with Us:',
      listItemsLeft: [
        "You'll finally feel safe being close to someone without waiting for it to fall apart.",
        "You'll stop shutting down during conflict and know what you need now.",
        "You'll trust yourself to stay present in love, even when things get vulnerable.",
        "You'll build calm, trusting partnerships without emotional whiplash.",
      ],
      listItemsRight: [
        "You'll stop overthinking, withdrawing, or going hot-and-cold.",
        "You'll feel seen, heard, and supported without losing independence.",
        "You'll start healing deep emotional wounds from past relationships and childhood.",
        "You'll reconnect with excitement, connection, and clarity in dating or long-term love.",
      ],
    },
    bonus: {
      segway:
        'This kind of transformation doesn’t have to take years—you’ll notice changes in as little as 7 days with our proprietary, evidence-based methodology, only available inside your All-Access Pass.',
      header:
        'When You Join Today, You’ll Unlock the Full Platform to Rewire Your Attachment Style — for Just $67/month',
      programCopy: [
        <>
          Your personalized <strong>Fearful Avoidant to Securely Attached</strong> program is just
          the beginning. With your <strong>All-Access Pass Membership</strong>, you’ll get access to
          the entire support system at The Personal Development School, built to support you every
          step of the way.
        </>,
        <>
          Here’s everything you get with your <strong>All-Access Pass Membership</strong>:
        </>,
      ],
      listItems: [
        'Instant access to self-paced, expert-designed courses to help you reprogram relationship patterns at the root, not just manage the symptoms',
        'Full access to our Integrated Attachment Theory™ healing model, our proven, step-by-step approach to help you become securely attached faster than traditional therapy alone',
        'Weekly live webinars and Q&A sessions with Thais and our certified coaches, where you can get direct answers and new tools for real-life challenges',
        'Supportive member community, your safe space to connect, grow, and feel understood by others on the same healing path',
      ],
      offerCopy: [
        'Instead of paying $197 for a single course or the regular monthly price of $97, you’ll get everything—your personalized Fearful Avoidant to Securely Attached Program and the All-Access Pass—for just $67/month.',
      ],
    },
    testimonial: {
      header:
        'With Us, Fearful Avoidants Are Now Enjoying Vibrant, Healthy, & Loving Relationships!',
    },
    footer: {
      header:
        'Get The Fearful Avoidant to Securely Attached Program & Start Having A Healthy, Loving Relationship – Without Any Fears',
      pricing: (
        <>
          Enjoy the All-Access Pass For Just <span className="line-through">$97</span> $67/month
        </>
      ),
      disclaimer:
        'If you’re not happy for any reason, your membership is backed by a 7-day, risk-free, money-back guarantee.',
      ctaLabel: 'YES! I WANT A HEALTHY RELATIONSHIP',
    },
  },
  ap: {
    ctaURL: externalRoutes.checkoutRegularSubscription,
    hero: {
      header: 'Your Attachment Style is Anxious Preoccupied.',
      copy: 'Your report is on its way! Check your inbox.',
      segway:
        'Are you ready to start building relationships where you finally feel safe, wanted, and loved? At the Personal Development School we have a tailored program that gives you the right tools you need to start building lasting, loving relationships you crave. Watch the video to learn more.',
      subheader:
        'You’re Just One Step Away from Feeling Loved, Secure, and Chosen – Without Overthinking Everything!',
    },
    heroVideo: {
      videoSrc: 'https://storage.googleapis.com/pds_videos/RoyalRumbleAPshortvideo.mp4',
      videoThumbnailAlt: 'Anxious Preoccupied video thumbnail',
      label: 'Special One-Time Invitation',
      segway: '',
      heading: (
        <>
          Claim Your Offer And Get The{' '}
          <span className="text-primary">Anxious Preoccupied to Securely Attached</span> Program
        </>
      ),
      subheader: '(Included with All Access Pass–Now 30% Off!)',
      copy: 'The NEW WAY to understand and overcome your relationship fears, uncover your needs, and create a powerful connection with someone special without the fear of rejection, abandonment, or being “too much.”',
      ctaLabel: 'YES! I WANT A LOVE THAT LASTS!',
    },
    outcomes: {
      segway1:
        'You’re not broken—you’ve just never been given the right tools to heal. That’s why we created this program at The Personal Development School: to help you feel safe, seen, and empowered in love.',
      header: 'You Don’t Have to Keep Feeling Like the One Who Loves More',
      copy: [
        'We understand what it feels like to give your all in relationships and still feel unsure—and we’ve created a roadmap to help you change that pattern for good.',
        "If you're constantly craving closeness, overanalyzing every interaction, and tiptoeing around someone just to avoid being pushed away, you’re not needy, and you’re not too much. You’re just longing for the safety and reassurance you’ve never truly had.",
        'You want love that feels steady, mutual, and safe.',
        'But when you’re attached to someone, it can feel like emotional whiplash—pulled in one moment, shut out the next. It’s a painful cycle that leaves you doubting yourself, anxious, and emotionally worn thin.',
        <>
          That’s exactly why we created the{' '}
          <strong>Anxious Preoccupied to Securely Attached</strong> Program—to help you end the
          confusion and finally feel emotionally secure in love, without needing to chase or
          over-give to be chosen. And it’s available through your <strong>All-Access Pass</strong>.
        </>,
      ],
      listItems: undefined,
      copy2: undefined,
      segway2: [
        'Our team at The Personal Development School developed this system to help you understand your patterns, express your needs, and feel confident setting healthy boundaries.',
        'Inside the program, we walk you step-by-step through the tools, techniques, and breakthroughs that have helped thousands of people just like you feel secure in love.',
      ],
    },
    course: {
      header: (
        <>
          <span className="lg:block">Here’s Everything You’re Getting With Your </span>
          <span className="text-primary">Anxious Preoccupied to Securely Attached</span> Program:
        </>
      ),
      courseImageSrc: '/images/SimplifiedFAPage/ap-to-sa-program.svg',
      listItems: [
        'A personalized roadmap to understand your patterns and feel more in control of your emotions.',
        'A step-by-step process to identify and express your needs without fear of pushing someone away.',
        'Clear, gentle strategies to set boundaries and speak up without guilt or fear of losing love.',
        'Powerful techniques to soothe insecurity and show up with calm, confidence, and self-worth.',
        'Practical tools to recognize others’ attachment styles so you stop taking their distance personally.',
        'A complete toolkit to build lasting self-trust and feel emotionally secure, on your own and in love.',
      ],
      ctaLabel: 'YES! I WANT A LOVE THAT LASTS',
      segway:
        'When you follow our proprietary methods found inside The Personal Development School courses, you’ll finally experience what it feels like to be securely loved, without fear, confusion, or overthinking.',
    },
    results: {
      header: (
        <>
          <span className="md:block">When You Take the Anxious Preoccupied to</span>

          <span>Securely Attached Program, You Will:</span>
        </>
      ),
      listItemsLeft: [
        'Finally trust that you’re not the only one investing—and feel the peace of being with someone who wants to grow with you',
        'Wake up feeling wanted, chosen, and secure in a relationship that doesn’t leave you guessing',
        'Quiet the fear of being “too much” or “not enough” and feel safe letting love in without losing yourself',
        'Experience what it’s like to feel deeply seen, heard, and emotionally prioritized',
      ],
      listItemsRight: [
        'Break free from the exhausting cycle of highs and lows—and create a relationship that feels stable and exciting',
        'Learn how to keep the spark alive without over-functioning or people-pleasing to hold someone’s attention',
        'Begin healing the core wounds of abandonment and invisibility that started long before your last relationship',
        'Release the pain of past relationships that left you feeling unworthy, unseen, or always waiting for someone to show up',
      ],
    },
    bonus: {
      segway: '',
      header: 'And As A Special Bonus:',
      programCopy: [
        <>
          When you join today, you will receive the{' '}
          <strong>Anxious Preoccupied to Securely Attached Program</strong> and an exclusive
          one-time offer with our <strong>All-Access Pass!</strong>
        </>,
        <>
          This membership gives you comprehensive and unlimited access to everything we offer at
          <strong> The Personal Development School</strong>, including:
        </>,
      ],
      listItems: [
        'All courses and programs that teach you the secret ingredients to understand other attachment styles and what motivates them to invest in relationships.',
        'Our unique, groundbreaking, proprietary process – Integrated Attachment Theory™ – and how it’s unlike anything you’ve ever seen before. It works fast, is simple to use, and helps anyone, anywhere!',
        "Live weekly webinars and Q&As, hosted by myself and our registered coaches, where you'll get to ask questions about your life while learning new tools to overcome challenges.",
        'Invitation to our private online community where you can connect with other members who are also going through this life-changing journey.',
        'And much more!',
      ],
      offerCopy: [
        <>
          You unlock everything for one price of just <strong>$67/month</strong> instead of paying
          $197 for the <strong>Anxious Preoccupied to Securely Attached Program</strong> alone.
        </>,
        <>
          <em className="block">*Single course normal price $197</em>

          <em>*All-Access Pass normal price $97</em>
        </>,
      ],
    },
    testimonial: {
      header: 'Anxious Preoccupied Individuals Are Finally Feeling Safe, Loved, and Chosen.',
    },
    footer: {
      header:
        'Get the Anxious Preoccupied to Securely Attached Program & Finally Feel Safe, Loved, and Secure in Your Relationship—Without Fear of Losing It.',
      pricing: (
        <>
          Enjoy the All-Access Pass For Just <span className="line-through">$97</span> $67/month
        </>
      ),
      disclaimer:
        'If you’re not happy for any reason, your membership is backed by a 7-day, risk-free, money-back guarantee.',
      ctaLabel: 'YES! I WANT A HEALTHY RELATIONSHIP',
    },
  },
}
