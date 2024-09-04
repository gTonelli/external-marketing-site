import { Link } from '@/components/Link'
import { EExternalRoutes } from '@/utils/constants'

export const REPORT_COPY = {
  fa: {
    banner: {
      style: 'Fearful Avoidant',
      video: 'https://storage.googleapis.com/pds_videos/FA_pdf_50.mp4',
      vector: 'couple-vector-fa.svg',
    },
    copy1: {
      header: 'A few things about you:',
      list: [
        'You’re a compassionate, empathetic, and giving person.',
        'You love supporting your partner through their challenges.',
        'You thrive when you have a deep romantic connection.',
      ],
    },
    copy2: {
      header: 'But in your relationships, these things can make you feel anxious:',
      list: [
        'You worry that the person you trust might betray or leave you any second.',
        'You over-analyze your partner’s interactions for signs that something is off.',
        'You feel resentful when your partner doesn’t match the effort you’re putting in.',
        'You feel guilty because you sometimes question if there’s someone better for you.',
        'You struggle between wanting both closeness as well as distance from your partner.',
      ],
    },
    copy3: {
      header: 'And when things don’t go your way, you tend to:',
      leftCopy: [
        {
          title: 'Be harsh with your words',
          copy: 'You can have outbursts because you’ve suppressed your anger for too long.',
        },
        {
          title: 'Be spiteful',
          copy: 'You may indirectly hurt your partner to make them feel how you feel.',
        },
      ],
      rightCopy: [
        {
          title: 'Flip-flop between hot and cold',
          copy: 'You can quickly change gears from being very loving to very distant when you notice changes in your partner’s behavior patterns that feel threatening.',
        },
        {
          title: 'Avoid expressing how you feel',
          copy: 'You let things bottle up because you don’t want to be a burden or appear weak or foolish.',
        },
      ],
    },
    copy4: {
      header: 'Some of the things you’re guilty of telling yourself are:',
      list: [
        'I don’t matter',
        'I’m unlovable',
        'Everyone I love will eventually hurt or leave me.',
        'There’s something wrong with me, and I don’t deserve to be loved until I fix it.',
      ],
    },
    copy5: {
      leftCopy: {
        header: 'For you to feel safe in a relationship, the top things that you need are:',
        list: [
          'A healthy balance of closeness and space.',
          'Reassurance.',
          'Trust.',
          'Matched effort.',
          'Appreciation.',
        ],
      },
      rightCopy: {
        header: 'The best type of partners for you are people that:',
        list: [
          'Can meet your needs for trust, reassurance, closeness and space, matched effort, and appreciation.',
          'Are great communicators.',
        ],
      },
    },
    copy6: {
      header: 'For your relationships to work, the things you need to work on are:',
      list: [
        'Exploring and understanding what your specific needs are and where they come from.',
        'Correcting your damaging beliefs about yourself and forming healthier ones.',
        'Learning how to reassure yourself of your partner’s love for you.',
        'Learning how to create healthy trust in a relationship.',
        'Learning how to ask for more connection or space when you need either.',
        'Learning how to set better boundaries when it comes to how you give love.',
        'Learning healthy coping strategies for when you’re feeling anxious, guilty, angry, or resentful.',
      ],
    },
    copy7: {
      header: 'Because of your fearful avoidant attachment style, you:',
      list: [
        'Struggle to find a partner that understands your need for space as well as closeness.',
        'Push people away, limiting your chances of having a long-term relationship.',
        'Question your relationships and asking yourself, “Do they really like me?.”',
        'Experience intense feelings of resentment when you give too much.',
        'Live your day-to-day life feeling unworthy, unlovable, and like you don’t matter.',
      ],
    },
    copy8: {
      header: 'It’s 100% Possible To Change Your Attachment Style!',
      p1: 'Even though your attachment style forms in your early childhood, you can take your healing into your own hands, change your patterns, and start getting the love you deserve.',
      p2: (
        <>
          This is what I teach you how to do in{' '}
          <u>
            <Link
              label="The Fearful Avoidant to Securely Attached Program"
              url="https://attachment.personaldevelopmentschool.com/limited-offer/fa"
              target="_blank"
            />
          </u>{' '}
          at The Personal Development School.
        </>
      ),
      p3: (
        <>
          This online program is designed to bring you the breakthrough you need to rid yourself of
          your anxieties, change your beliefs, and improve how you communicate so you can start
          feeling more certain and more worthy in your relationships in{' '}
          <u>just a matter of weeks.</u>
        </>
      ),
    },
    copy9: {
      leftCopy: {
        header:
          'Taking this video-based online program at your own pace, you’ll learn, step by step, how to:',
        list: [
          'Pinpoint where your attachment style comes from and how your childhood shaped it.',
          'Identify your needs and learn how to express them to your partner.',
          'Break your bad communication habits and start asking for what you need.',
          'Reprogram your damaging beliefs and form healthier ones.',
          'Build a more positive relationship with yourself.',
        ],
      },
      rightCopy: {
        header:
          'Completing this customized program for fearful avoidant attachments is what you need to start:',
        list: [
          'Attracting the type of partners that meet your needs for closeness and space perfectly.',
          'Being kinder to yourself and develop a stronger sense of self-worth.',
          'Dating people that always feel good to you without feeling bored.',
          'Learning to commit to a relationship rather than checking out when it gets serious.',
          'Learning how to trust others and give them the benefit of the doubt.',
          'Change your “hot and cold” behaviors to be more consistent with your partner.',
          'Rid yourself of “worst case scenario” thinking.',
        ],
      },
    },
    footer: {
      title: (
        <>
          <span className="text-primary">The Fearful Avoidant to Securely Attached Program</span> is
          the quickest, most results-oriented, and most affordable way to restart your love life in
          a matter of weeks.
        </>
      ),
      copy: 'ARE YOU READY TO START OVER AND START ENJOYING RELATIONSHIPS THAT MAKE YOU FEEL ALIVE, WORTHY, AND CERTAIN?',
      ctaLink: 'https://attachment.personaldevelopmentschool.com/limited-offer/fa',
      image: { name: 'footer-fa-couple.jpg', altText: 'A happy couple' },
    },
  },
  ap: {
    banner: {
      style: 'Anxious Preoccupied',
      video: 'https://storage.googleapis.com/pds_videos/AP_pdf_50.mp4',
      vector: 'couple-vector-ap.svg',
      variantHeader:
        ', Unlock Life-Changing Insights Into Your Anxious Preoccupied Attachment Style To Turn Your Dream Relationships Into Reality!',
      variantSubheader:
        ' – Join thousands of people worldwide who’ve transformed their lives and relationships with our revolutionary approach! Watch this video to learn more! ',
      videoCopy:
        'Thanks for watching the video! Now is your opportunity to learn our powerful tools and strategies for becoming securely attached! You’ll be ready to experience and embrace truly loving and committed relationships without any fears.',
      ctaLabel: 'START MY TRANSFORMATION',
    },
    copy1: {
      header: 'You’re a great partner and friend!',
      list: [
        'You love connecting deeply.',
        'You’re very attuned to other people’s needs.',
        'You value being in long-term relationships.',
      ],
    },
    copy2: {
      header: 'But in your relationships, these things can make you feel anxious:',
      list: [
        'You worry that the person you trust may leave you.',
        'You feel intense panic when you sense your loved one is pulling away.',
        'You over-analyze your partner’s interactions for how much they are (or aren’t) loving you.',
      ],
    },
    copy3: {
      header: 'And when things don’t go your way, you tend to:',
      leftCopy: [
        {
          title: 'Obsessively try to re-establish contact',
          copy: 'You’ll send many texts without a response, excessively call, or hang around places your partner goes.',
        },
        {
          title: 'Jump to conclusions',
          copy: 'You assume the absolute worst if your partner is absent or less warm towards you.',
        },
        {
          title: 'Play games',
          copy: 'You might try to make your partner jealous, pretend to be too busy for them, or take a long time to respond.',
        },
      ],
      rightCopy: [
        {
          title: 'Keep scores',
          copy: 'You make note of how long it takes your partner to respond to you and whether or not they met your expectations on things.',
        },
        {
          title: 'Get passive aggressive',
          copy: 'You can be snappy towards your partner, taking indirect jabs at them.',
        },
        {
          title: 'Threaten to leave',
          copy: 'You make empty threats that you’ll break up with them when you don’t actually want to.',
        },
      ],
    },
    copy4: {
      header: 'Some of the things you’re guilty of telling yourself are:',
      list: [
        'I’m not good enough',
        'Everyone I love will eventually leave me',
        'There’s something wrong with me, and I don’t deserve to be loved.',
      ],
    },
    copy5: {
      leftCopy: {
        header: 'For you to feel safe in a relationship, the top things that you need are:',
        list: ['Reassurance.', 'Consistent communication.', 'Deep connection.', 'Validation.'],
      },
      rightCopy: {
        header: 'The best type of partners for you are people that:',
        list: [
          'Can meet your needs for reassurance, connection, consistency, and validation.',
          'Are great communicators.',
        ],
      },
    },
    copy6: {
      header: 'For you to feel safe in a relationship, the top things that you need are:',
      list: [
        'Exploring and understanding what your specific needs are and where they come from.',
        'Learning how to break your bad communication habits.',
        'Correcting your damaging beliefs and forming healthier ones.',
        'Learning how to reassure yourself of your partner’s love for you.',
        'Learning how to ask for more connection when you need it.',
        'Developing a healthier relationship with yourself.',
        'Learning how to set better boundaries when it comes to how you give love.',
      ],
    },
    copy7: {
      header: 'Because of your anxious preoccupied attachment style, you:',
      list: [
        'Keep attracting and dating people that are emotionally unavailable to you.',
        'Stay in relationships that aren’t in alignment with you.',
        'Keep putting yourself last.',
        'Lose sleep worrying that you’re going to end up alone.',
      ],
    },
    copy8: {
      header: 'It’s 100% Possible To Change Your Attachment Style!',
      p1: 'Even though your attachment style forms in your early childhood, you can take your healing into your own hands, change your patterns, and start getting the love you deserve.',
      p2: (
        <>
          This is what I teach you how to do in{' '}
          <u>
            <Link
              label="The Anxious Preoccupied to Securely Attached Program"
              url="https://attachment.personaldevelopmentschool.com/limited-offer/ap"
              target="_blank"
            />
          </u>{' '}
          at The Personal Development School.
        </>
      ),
      p3: (
        <>
          This online program is designed to bring you the breakthrough you need to rid yourself of
          your anxieties, change your beliefs, and improve how you communicate so you can start
          feeling more certain and more worthy in your relationships in{' '}
          <u>just a matter of weeks.</u>
        </>
      ),
    },
    copy9: {
      leftCopy: {
        header:
          'Taking this video-based online program at your own pace, you’ll learn, step by step, how to:',
        list: [
          'Identify your needs and learn how to express them to your partner.',
          'Break your bad communication habits and start asking for what you need.',
          'Reprogram your damaging beliefs and form healthier ones.',
          'Gain control over your emotions in real time with practical techniques and strategies.',
          'Foster a healthier and more nurturing relationship with yourself.',
        ],
      },
      rightCopy: {
        header:
          'Completing this customized program for anxious attachments is what you need to start:',
        list: [
          'Knowing and understanding yourself and your triggers better.',
          'Attracting the type of relationships that make you feel seen, connected, and certain.',
          'Avoiding situationships and getting the long-term love you crave and deserve.',
          'Mending or restarting your current relationship for the better.',
          'Navigating your love life with less fear, distress, anxiety, and conflict.',
        ],
      },
    },
    footer: {
      title: (
        <>
          <span className="text-primary">The Anxious Preoccupied to Securely Attached Program</span>{' '}
          is the quickest, most results-oriented, and most affordable way to restart your love life
          in a matter of weeks.
        </>
      ),
      copy: 'ARE YOU READY TO START OVER AND START ENJOYING RELATIONSHIPS THAT MAKE YOU FEEL ALIVE, WORTHY, AND CERTAIN?',
      ctaLink: 'https://attachment.personaldevelopmentschool.com/limited-offer/ap',
      image: { name: 'footer-ap.jpg', altText: 'Happy women' },
    },
  },
  da: {
    banner: {
      style: 'Dismissive Avoidant',
      video: 'https://storage.googleapis.com/pds_videos/DA_pdf_50.mp4',
      vector: 'couple-vector-da.svg',
    },
    copy1: {
      header: 'A few things about you:',
      list: [
        'You’re highly self-sufficient.',
        'Your freedom and space are important to you.',
        'You think of yourself as a logical and practical person.',
        'You’d describe yourself as more of a thinker than a feeler.',
      ],
    },
    copy2: {
      header: 'But in your relationships, these things can make you feel anxious:',
      list: [
        'You don’t always understand what’s expected from you.',
        'You don’t like relying on someone else to meet your needs.',
        'You can feel suffocated or trapped when your partner demands too much from you.',
        'Needing to be vulnerable with another person is scary to you.',
      ],
    },
    copy3: {
      header: 'And when things don’t go your way, you tend to:',
      leftCopy: [
        {
          title: 'Withdraw and switch off your emotions',
          copy: 'You can quickly shut down, distance yourself, and avoid addressing the problem upfront.',
        },
        {
          title: 'Stonewall',
          copy: 'You can get very cold towards your partner or speak with silence to let them know you’re upset.',
        },
      ],
      rightCopy: [
        {
          title: 'Find flaws',
          copy: 'You focus on the negative qualities of your partner to justify pushing them away.',
        },
        {
          title: 'Get passive aggressive',
          copy: 'You can drop side comments about previous things your partner has done that were left unresolved.',
        },
      ],
    },
    copy4: {
      header: 'Some of the things you’re guilty of telling yourself are:',
      list: [
        'I’m better off on my own',
        'People want too much from me',
        'Something is wrong with me',
        'Being vulnerable is too dangerous',
      ],
    },
    copy5: {
      leftCopy: {
        header: 'For you to feel safe in a relationship, the top things that you need are:',
        list: [
          'Space and independence.',
          'Patience.',
          'Appreciation and acknowledgement for your efforts.',
          'Cooperation.',
        ],
      },
      rightCopy: {
        header: 'The best type of partners for you are people that:',
        list: [
          'Can meet your needs for space, independence, and cooperation while acknowledging your efforts.',
          'Don’t overly criticize or overwhelm you.',
        ],
      },
    },
    copy6: {
      header: 'For your relationships to work, the top things that you need are"',
      list: [
        'Exploring and understanding what your specific needs are and where they come from.',
        'Learning how to break your bad communication habits.',
        'Correcting your damaging beliefs and forming healthier ones.',
        'Learning how to ask for more connection when you need it.',
        'Developing a healthier relationship with yourself.',
        'Learning how to slowly become comfortable with being vulnerable.',
      ],
    },
    copy7: {
      header: 'Because of your dismissive avoidant attachment style, you:',
      list: [
        'Push yourself into isolation and shut the world out, making you feel lonely.',
        'Deprive yourself of the fulfilling relationships you could be having.',
        'Keep hurting people with your distance.',
        'Keep re-affirming the belief that you’re not cut out for relationships, when you can be.',
      ],
    },
    copy8: {
      header: 'It’s 100% Possible To Change Your Attachment Style!',
      p1: 'Even though your attachment style forms in your early childhood, you can take your healing into your own hands, change your patterns, and start getting the love you deserve.',
      p2: (
        <>
          This is what I teach you how to do in{' '}
          <u>
            <Link
              label="The Dismissive Avoidant to Securely Attached Program"
              url="https://attachment.personaldevelopmentschool.com/limited-offer/da"
              target="_blank"
            />
          </u>{' '}
          at The Personal Development School.
        </>
      ),
      p3: (
        <>
          This online program is designed to bring you the breakthrough you need to rid yourself of
          your anxieties, change your beliefs, and improve how you communicate so you can start
          feeling more certain and more worthy in your relationships in{' '}
          <u>just a matter of weeks.</u>
        </>
      ),
    },
    copy9: {
      leftCopy: {
        header:
          'Taking this video-based online program at your own pace, you’ll learn, step by step, how to:',
        list: [
          'Pinpoint where your attachment style comes from and how your childhood shaped it.',
          'Identify your needs and learn how to express them to your partner.',
          'Break your bad distancing habits and start asking for what you need instead.',
          'Reprogram your damaging beliefs around relationships and form healthier ones.',
          'Practice being vulnerable with others in a way that feels comfortable.',
        ],
      },
      rightCopy: {
        header:
          'Completing this customized program for dismissive avoidant attachments is what you need to start:',
        list: [
          'Putting an end to pushing people away.',
          'Attracting the type of relationships that give you the space and freedom that you need.',
          'Mending or restarting your current relationship for the better.',
          'Navigating your love life with less fear, distress, anxiety, and conflict.',
          'Connecting with people better and enjoying more fulfilling relationships.',
        ],
      },
    },
    footer: {
      title: (
        <>
          <span className="text-primary">The Dismissive Avoidant to Securely Attached Program</span>{' '}
          is the quickest, most specific, and most affordable way to restart your love life in a
          matter of weeks.
        </>
      ),
      copy: 'ARE YOU READY TO START OVER AND START OVER AND STOP PUSHING PEOPLE AWAY?',
      ctaLink: 'https://attachment.personaldevelopmentschool.com/limited-offer/da',
      image: { name: 'footer-da-couple.jpg', altText: 'A happy couple' },
    },
  },
  sa: {
    banner: {
      style: 'Secure Attached',
      video: 'https://storage.googleapis.com/pds_videos/SA_pdf_50.mp4',
      vector: 'couple-vector-sa.svg',
    },
    copy1: {
      header: 'You’re a great partner and friend!',
      list: [
        'You’re an empathetic person who connects with people easily.',
        'You feel confident in who you are.',
        'You let people in easily but have healthy boundaries too.',
        'You have strong conflict-resolution skills.',
      ],
    },
    copy2: {
      header: 'But in your relationships, these things can make you feel anxious:',
      list: [
        'You end up in relationships that feel wildly out of balance.',
        'Your relationships can drain you.',
        'You get frustrated with poor communication.',
        'You struggle to understand exactly how to support your partner.',
        'You don’t always get the respect or appreciation you deserve for your efforts.',
        'Sometimes you get triggered, but you don’t know why (meaning you have yet to uncover what your secondary attachment style is).',
      ],
    },
    copy3: {
      header: '',
      leftCopy: [],
      rightCopy: [],
    },
    copy4: {
      header: '',
      list: [],
    },
    copy5: {
      leftCopy: {
        header: 'For you to feel safe in a relationship, the top things that you need are:',
        list: [
          'Clear communication.',
          'Healthy boundaries.',
          'Mutual understanding.',
          'Respect.',
          'Healthy foundations.',
        ],
      },
      rightCopy: {
        header: 'The best type of partners for you are people that:',
        list: ['Are actively working on themselves.', 'Are great communicators.'],
      },
    },
    copy6: {
      header:
        'You might not recognize it, but sometimes your secondary attachment style* can get in the way, causing you to feel:',
      list: [
        'Anxious when your partner pulls away or gets distant.',
        'Irritated and trapped when your partner doesn’t give you your space.',
        'On-edge when you notice signs of possible betrayal.',
      ],
    },
    copy7: {
      header: 'Without making these improvements, you might continue to:',
      list: [
        'End up in more unfulfilling relationships.',
        'Experience your anxious side coming out sometimes.',
        'Face more communication barriers between yourself and your partner.',
        'Never entirely understand different types of people as well as you could.',
        'Keep trying to support others the best you can but keep feeling like you’re getting it wrong.',
      ],
    },
    copy8: {
      header:
        'Navigating your relationships with more certainty and confidence can be as easy as 1,2,3.',
      p1: 'Even though relationships can be complex in nature, gaining the right tools and sharpening your communication skills can make navigating them much easier.',
      p2: (
        <>
          This is what I teach you how to do in{' '}
          <u>
            <Link
              label="The Emotional Healing Program"
              url="https://attachment.personaldevelopmentschool.com/limited-offer/sa"
              target="_blank"
            />
          </u>{' '}
          at The Personal Development School.
        </>
      ),
      p3: (
        <>
          This online program is designed to bring you the breakthrough you need to rid yourself of
          your anxieties, change your beliefs, and improve how you communicate so you can start
          feeling more certain and more worthy in your relationships in{' '}
          <u>just a matter of weeks.</u>
        </>
      ),
    },
    copy9: {
      leftCopy: {
        header:
          'Taking this video-based online program at your own pace, you’ll learn, step by step, how to:',
        list: [
          'Communicate appropriately with partners who have insecure attachment styles.',
          'Understand others better so you can relate to their challenges more effectively.',
          'Develop greater self-awareness by uncovering your secondary attachment style.',
          'Create healthy relationships that feel harmonious, connected, and that last.',
          'Reprogram your damaging beliefs and form healthier ones.',
        ],
      },
      rightCopy: {
        header:
          'Completing this customized program for secure attachments is what you need to start:',
        list: [
          'Getting your loved ones to open up to you more clearly.',
          'Putting a finger on what causes you anxiety in certain situations.',
          'Consistently getting the love and respect you deserve.',
          'Resolving challenges with confidence, knowing you have all the right tools.',
        ],
      },
    },
    footer: {
      title: (
        <>
          <span className="text-primary">The Emotional Healing Program</span> is the quickest, most
          results-oriented, and most affordable way to transform your love life into its truest
          potential in a matter of weeks.
        </>
      ),
      copy: 'ARE YOU READY TO TAKE YOUR COMMUNICATION SKILLS TO THE NEXT LEVEL AND START ENTERING BALANCED PARTNERSHIPS?',
      ctaLink: 'https://attachment.personaldevelopmentschool.com/limited-offer/sa',
      image: { name: 'footer-sa-couple.jpg', altText: 'A happy couple' },
    },
  },
}

export const AGE_REPORT_COPY = {
  fa: {
    copy: (
      <>
        This is what I teach you how to do in{' '}
        <u>
          <Link
            label="The Fearful Avoidant Course Bundle"
            url={EExternalRoutes.THINKIFIC_CHECKOUT_AGE_PRODUCT_FA}
            target="_blank"
          />
        </u>{' '}
        at The Personal Development School.
      </>
    ),
    footerCopy: (
      <>
        <span className="text-primary">The Fearful Avoidant Course Bundle</span> is the quickest,
        most results-oriented, and most affordable way to restart your love life in a matter of
        weeks.
      </>
    ),
    checkoutUrl: EExternalRoutes.THINKIFIC_CHECKOUT_AGE_PRODUCT_FA,
  },
  ap: {
    copy: (
      <>
        This is what I teach you how to do in{' '}
        <u>
          <Link
            label="The Anxious Preoccupied Course Bundle"
            url={EExternalRoutes.THINKIFIC_CHECKOUT_AGE_PRODUCT_AP}
            target="_blank"
          />
        </u>{' '}
        at The Personal Development School.
      </>
    ),
    footerCopy: (
      <>
        <span className="text-primary">The Anxious Preoccupied Course Bundle</span> is the quickest,
        most results-oriented, and most affordable way to restart your love life in a matter of
        weeks.
      </>
    ),
    checkoutUrl: EExternalRoutes.THINKIFIC_CHECKOUT_AGE_PRODUCT_AP,
  },
  da: {
    copy: (
      <>
        This is what I teach you how to do in{' '}
        <u>
          <Link
            label="The Dismissive Avoidant Course Bundle"
            url={EExternalRoutes.THINKIFIC_CHECKOUT_AGE_PRODUCT_DA}
            target="_blank"
          />
        </u>{' '}
        at The Personal Development School.
      </>
    ),
    footerCopy: (
      <>
        <span className="text-primary">The Dismissive Avoidant Course Bundle</span> is the quickest,
        most specific, and most affordable way to restart your love life in a matter of weeks.
      </>
    ),
    checkoutUrl: EExternalRoutes.THINKIFIC_CHECKOUT_AGE_PRODUCT_DA,
  },
  sa: {
    copy: (
      <>
        This is what I teach you how to do in{' '}
        <u>
          <Link
            label="The Secure Attachment Course Bundle"
            url={EExternalRoutes.THINKIFIC_CHECKOUT_AGE_PRODUCT_SA}
            target="_blank"
          />
        </u>{' '}
        at The Personal Development School.
      </>
    ),
    footerCopy: (
      <>
        <span className="text-primary">The Secure Attachment Course Bundle</span> is the quickest,
        most results-oriented, and most affordable way to transform your love life into its truest
        potential in a matter of weeks.
      </>
    ),
    checkoutUrl: EExternalRoutes.THINKIFIC_CHECKOUT_AGE_PRODUCT_SA,
  },
}
