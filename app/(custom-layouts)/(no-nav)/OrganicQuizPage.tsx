'use client'
// core
import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button/Button'
import { List } from '@/components/List'
import { AttachmentQuiz } from '@/components/AttachmentQuiz/AttachmentQuiz'
import { faInstagram, faYoutube } from '@awesome.me/kit-545b942488/icons/classic/brands'
import { faCheckCircle, faPenToSquare } from '@awesome.me/kit-545b942488/icons/classic/regular'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// modules
import Mixpanel from '@/modules/Mixpanel'
// style
import './style.css'

export default function OrganicQuizPage() {
  // ================= State =======================
  const [viewQuiz, setViewQuiz] = useState(false)

  // ================= Refs =======================
  const quizSectionRef = useRef<HTMLDivElement>(null)

  // ================== Events =====================
  const onStartQuiz = useCallback(() => {
    if (!viewQuiz) {
      Mixpanel.track.QuizStarted({
        quiz_name: 'Attachment Style Quiz',
      })
      setViewQuiz((prev) => !prev)
    }
    quizSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [viewQuiz])

  return (
    <Page page_name="Attachment Style Quiz">
      <Section
        className="bg-hero min-h-52 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-screen-xl !m-0 lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className="bg-hero-mobile lg:hidden" />

        <div className="relative text-left p-4 z-5 lg:col-span-7">
          <h1 className="mb-4">
            Struggling in Your Relationships? Discover Your Attachment Style in Just 5 Minutes
          </h1>

          <p className="tracking-33 mb-4">
            <strong>
              UNLOCK THE KEY TO LOVING AND SECURE RELATIONSHIPS WITH OUR FREE ATTACHMENT STYLE QUIZ!
            </strong>
          </p>

          <p className="mb-4">
            <strong>
              Created by Thais Gibson, a trusted personal development coach and attachment expert!
            </strong>
          </p>

          <Button label="START THE QUIZ!" onClick={onStartQuiz} />
        </div>
      </Section>

      <Section>
        <h2 className="mb-4">The Secret to Stronger, Healthier Relationships Starts Here</h2>

        <p className="tracking-33 mb-8">
          <strong>TAKE OUR FREE ATTACHMENT STYLE QUIZ TO UNCOVER YOUR ATTACHMENT STYLE</strong>
        </p>

        <p className="mb-4">
          <strong>
            Your attachment style shapes your beliefs about love, the way you connect and
            communicate in relationships, and how you approach personal growth and self-awareness.
            By discovering and understanding yours, you can:
          </strong>
        </p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <Image
              alt="PDS features mockup"
              src="/images/AttachmentQuiz/pds-mockup.jpg"
              width={970}
              height={578}
            />
          </div>

          <div className="text-left">
            <List
              classNameIcon="!text-primary mr-2"
              classNameListItems="mb-4"
              icon={faCheckCircle}
              listItems={[
                'Create deeper, more meaningful connections',
                'Establish healthy boundaries and communication',
                'Feel valued and secure in your relationships',
                'Build greater harmony and respect with loved ones',
                'Develop the self-confidence to take on life’s challenges',
              ]}
            />

            <p className="mb-2">
              <strong>
                Discover how your attachment style was formed—and how to transform it so you can
                strengthen your relationships and yourself.
              </strong>
            </p>

            <p className="text-gray-600 text-sm">
              <em>
                Disclaimer: This quiz and report are meant to be a personal exploration into your
                attachment style and are not intended to be used as a diagnostic tool––or to treat,
                cure, or prevent any condition.
              </em>
            </p>

            {!viewQuiz && <Button className="my-4" label="START THE QUIZ!" onClick={onStartQuiz} />}
          </div>
        </div>

        <div ref={quizSectionRef} className="w-full">
          {viewQuiz && (
            <div className="w-full flex justify-center mx-auto py-8">
              <AttachmentQuiz
                className="!max-w-5xl"
                quizName="Attachment Style Quiz"
                quiz_traffic_source="organic"
                showStartButton={false}
              />
            </div>
          )}
        </div>
      </Section>

      <Section className="bg-[#f5fbfc]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="text-left">
            <h2 className="mb-4">What are the Four Attachment Styles?</h2>

            {[
              "Your attachment style is the single largest predictor of success in your relationships—whether you're single, dating, or married.",
              'It is based on Attachment Theory, which focuses on how your childhood experiences impact adult relationships, shaping how you communicate, develop trust, handle conflict, and form connections.',
              'There are four styles—three insecure, one secure. Insecure styles create emotional roadblocks, but here’s the good news: they’re not permanent.',
              'Your insecure attachment style isn’t fixed—you can change it with awareness, effort, and the right approach!',
              'Explore our in-depth guide on attachment styles for a full breakdown of how they develop and what they mean for you and your relationships.',
            ].map((copy, idx) => (
              <p key={`theory_${idx}`} className="mb-4">
                {copy}
              </p>
            ))}

            <Link
              href="https://blog.personaldevelopmentschool.com/post/what-is-an-attachment-style"
              target="_blank">
              <Button label="READ OUR ATTACHMENT STYLE GUIDE" />
            </Link>
          </div>

          <div>
            <Image
              src="/images/ReportsOld/couple-vector-ap.svg"
              alt="Vectorized image of a couple sitting under night sky"
              width={483}
              height={483}
            />
          </div>
        </div>

        <div className="grid gap-8 text-left my-16 lg:grid-cols-2">
          <div>
            <h3 className="mb-4">Anxious Preoccupied</h3>

            <p>
              If you're anxiously attached, relationships can leave you feeling insecure, unsafe, or
              constantly on edge due to a deep-rooted fear of abandonment. You crave closeness, seek
              constant reassurance, and feel intense anxiety when a loved one pulls away. While this
              behavior can come off as "clingy," it's a defense mechanism rooted in fear. However,
              there are effective strategies to break free from this pattern and build healthier,
              more secure connections.{' '}
              <Link
                className="text-primary underline"
                href="https://university.personaldevelopmentschool.com/pages/the-ap"
                target="_blank">
                Read more about Anxiously Preoccupied in our guide here.
              </Link>
            </p>
          </div>

          <div>
            <h3 className="mb-4">Dismissive Avoidant</h3>

            <p>
              As a Dismissive Avoidant, emotions can feel "like a burden" that you don't know how to
              carry. When things get emotional or intense, you might pull away—physically or
              emotionally—to protect yourself. Your need for space can create friction in
              relationships, especially when you desire deeper connection and affection but fear
              intimacy. The challenge lies in changing your approach and finding a healthy balance
              between closeness and independence without losing yourself.{' '}
              <Link
                className="text-primary underline"
                href="https://university.personaldevelopmentschool.com/pages/the-da"
                target="_blank">
                Read more about Dismissive Avoidant in our guide here.
              </Link>
            </p>
          </div>

          <div>
            <h3 className="mb-4">Fearful Avoidant (Disorganized Attachment)</h3>

            <p>
              The "hot and cold" push-pull of a Fearful Avoidant attachment style often feels like emotional whiplash, hence the term “Disorganized Attachment”. One minute, you're seeking closeness; the next, you're withdrawing in fear. This inner conflict makes relationships feel chaotic and confusing because you're torn between getting attached and your need for independence. Healing from this Disorganized Attachment is possible through targeted tools and strategies designed to restore balance and help you find emotional security.{' '}
              <Link
                className="text-primary underline"
                href="https://university.personaldevelopmentschool.com/pages/the-fa"
                target="_blank">
                Read more about Fearful Avoidant in our guide here.
              </Link>
            </p>
          </div>

          <div>
            <h3 className="mb-4">Secure Attached</h3>

            <p>
              If you have a secure attachment, relationships likely feel comfortable, stable, and
              fulfilling. You thrive in relationships with other secure individuals who are looking
              for long-term, meaningful connections but struggle with insecurely attached people due
              to different beliefs and communication patterns. The best part? Anyone can develop a
              secure attachment style with subconscious reprogramming tools and strategies, leading
              to healthier relationships and greater emotional fulfillment.{' '}
              <Link
                className="text-primary underline"
                href="https://university.personaldevelopmentschool.com/pages/the-sa"
                target="_blank">
                Read more about Securely Attached in our guide here.
              </Link>
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="mb-8">Want to learn more? Let us help you.</h2>

        <div className="grid gap-8 text-left lg:grid-cols-2">
          {LEARN_MORE_LINKS.map((item, idx) => (
            <Link
              key={`learn_more_${idx}`}
              href={item.link}
              className="hover:no-underline"
              target="_blank">
              <div className="flex bg-white-secondary rounded-2xl p-8">
                <div className="w-full mr-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3>{item.title}</h3>

                    <div className="w-20 lg:hidden">
                      <div className="w-16 h-16 flex justify-center items-center rounded-full bg-white">
                        {item.icon}
                      </div>
                    </div>
                  </div>

                  <p className="mb-4">{item.copy}</p>

                  <p className="tracking-33">
                    <strong>{item.label}</strong>
                  </p>
                </div>

                <div className="hidden w-20 lg:flex">
                  <div className="w-20 h-20 flex justify-center items-center rounded-full bg-white">
                    {item.icon}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </Page>
  )
}

const LEARN_MORE_LINKS = [
  {
    title: 'Follow Us',
    copy: 'Follow us on Instagram for a daily dose of relationship insights, expert tips, and practical strategies.',
    icon: <FontAwesomeIcon className="!text-[#be86d4]" icon={faInstagram} size="2x" />,
    label: 'FOLLOW US NOW!',
    link: 'https://www.instagram.com/thepersonaldevelopmentschool',
  },
  {
    title: 'Read Our Blog',
    copy: 'Get expert insights on attachment styles, relationships, personal growth, and more with our blog.',
    icon: <FontAwesomeIcon className="!text-[#4d5bec]" icon={faPenToSquare} size="2x" />,
    label: 'EXPLORE OUR BLOG!',
    link: 'https://blog.personaldevelopmentschool.com/',
  },
  {
    title: 'Watch the Latest Vidoes',
    copy: 'Learn directly from Thais Gibson with our extensive library of industry-leading and life-changing YouTube videos.',
    icon: <FontAwesomeIcon className="!text-tertiary" icon={faYoutube} size="2x" />,
    label: 'WATCH VIDEOS NOW!',
    link: 'https://www.youtube.com/@ThePersonalDevelopmentSchool',
  },
  {
    title: 'Learn About Our School',
    copy: 'Get more information about who we are, what we do, and how we’ll help your transformational journey.',
    icon: <Image alt="PDS Logo" src="/images/pds-icon.png" width={36} height={36} />,
    label: 'LEARN MORE HERE!',
    link: 'https://university.personaldevelopmentschool.com/pages/about',
  },
]
