// core
import Image from 'next/image'
// components
import { Section } from './Section'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faInfo } from '@awesome.me/kit-545b942488/icons/classic/regular'

export const PDSFeatures = () => {
  return (
    <Section classNameInner="grid gap-4 !max-w-3xl lg:grid-cols-2 lg:gap-6">
      <h2 className="lg:col-span-2">
        What’s Included In Your Transformation Journey With Your All-Access Pass Membership:
      </h2>

      <div className="text-left">
        <h4 className="text-primary mb-4">The Core Program ($999 Value)</h4>

        <ul>
          {config.coreProgram.map((text, i) => (
            <li key={`core_program_item_${i}`} className="flex">
              <FontAwesomeIcon
                className="text-white bg-primary border border-primary rounded-full mr-2"
                icon={faCheckCircle}
              />

              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>

      <Image
        src="/images/SegmentedResultsPages/core-program.png"
        alt="Core program"
        className="w-full"
        width={384}
        height={306}
      />

      <Image
        src="/images/SegmentedResultsPages/bonus-community-access.png"
        alt="Bonus community access"
        className="w-full"
        width={384}
        height={204}
      />

      <div className="text-left">
        <h4 className="text-primary mb-4">Bonus Community Access ($499 Value)</h4>

        <ul>
          {config.bonusCommunityAccess.map((text, i) => (
            <li key={`bonus_community_access_item_${i}`} className="flex">
              <FontAwesomeIcon
                className="text-white bg-primary border border-primary rounded-full mr-2"
                icon={faCheckCircle}
              />

              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-left">
        <h4 className="text-primary mb-4">Bonus Course Library ($1999+ Value)</h4>

        <ul>
          {config.bonusCourseLibrary.map((text, i) => (
            <li key={`bonus_course_library_item_${i}`} className="flex">
              <FontAwesomeIcon
                className="text-white bg-primary border border-primary rounded-full mr-2"
                icon={faCheckCircle}
              />

              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>

      <Image
        src="/images/SegmentedResultsPages/bonus-course-library.png"
        alt="Bonus course library"
        className="w-full"
        width={384}
        height={175}
      />

      <Image
        src="/images/SegmentedResultsPages/tools-trackers.png"
        alt="Tools and trackers"
        className="w-full"
        width={384}
        height={198}
      />

      <div className="text-left">
        <h4 className="text-primary mb-4">Tools and Trackers</h4>

        <ul>
          {config.toolsAndTrackers.map((text, i) => (
            <li key={`tools_and_trackers_item_${i}`} className="flex">
              <FontAwesomeIcon
                className="text-white bg-primary border border-primary rounded-full mr-2"
                icon={faCheckCircle}
              />

              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="!p-4 bg-blue-3 rounded lg:col-span-2 grid gap-4 lg:grid-cols-[21px_1fr]">
        <FontAwesomeIcon
          className="text-blue-darkest bg-transparent border-2 border-blue-darkest rounded-full px-[6px] py-[2px]"
          icon={faInfo}
          size="xs"
        />

        <div className="text-left">
          <p>
            <strong>90-Day Money-Back Guarantee </strong>
          </p>

          <p>
            If you complete all 7 attachment styles courses, follow the 15-Day Kickstart Challenge,
            and still don’t feel like at least 50% securely attached,{' '}
            <strong>we’ll refund every penny*</strong>. That’s how confident we are in your
            transformation.
          </p>

          <p>
            <em>*See more details at the bottom of the page.</em>
          </p>
        </div>
      </div>
    </Section>
  )
}

const config = {
  coreProgram: [
    'Rewiring Relationship Wounds with Neuroscience',
    'Discovering & Meeting Your Core Emotional Needs',
    'Regulating Your Nervous System for Emotional Safety',
    'Setting Healthy Boundaries (Without Guilt)',
    'Mastering Conflict & Communication in Relationships',
    'Rewiring Unhealthy Coping Mechanisms in Love',
  ],

  bonusCommunityAccess: [
    'Live daily classes to practice tools and ask questions (optional attendance)',
    'Live Q&As with Thais Gibson to get ongoing emotional support',
    'Peer connection with others on the same journey',
  ],

  bonusCourseLibrary: [
    'Instant access to our full vault of 70+ courses on attachment styles, relationships, family healing, personal growth, career dynamics, & more',
    'Monthly live trainings on trending relationship and personal growth topics',
  ],

  toolsAndTrackers: [
    'Quizzes, workbooks, and habit trackers to measure and celebrate your growth',
    'Built-in progress dashboard so you always know where you are and what’s next',
  ],
}
