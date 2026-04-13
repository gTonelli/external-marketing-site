'use client'

// core
import { useCallback, useEffect, useState } from 'react'
// components
import { Image } from '@/components/Image'
import { Text } from '@/components/Text/Text'
import { Button } from '@/components/Button/Button'
import { RecaptchaNotice } from '@/components/RecaptchaNotice'
// libraries
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
// utils
import { RESULTS } from '../../config'
import { Page } from '@/components/Page'
// styles
import '../../style.css'

export interface ICorporateQuizResultsPageParams {
  params: { data: [keyof typeof RESULTS, string, string, string, string] }
}

export default function CorporateQuizResultsPage({ params }: ICorporateQuizResultsPageParams) {
  const [result, ap, da, fa, sa] = params.data
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [canViewResults, setCanViewResults] = useState<boolean>(false)
  const { executeRecaptcha } = useGoogleReCaptcha()

  useEffect(() => {
    document.title = 'The Attachment Style Quiz'
    setCanViewResults(Boolean(JSON.parse(localStorage.getItem('canViewResults') || '0')))
  }, [])

  const onSubmitForm = useCallback(async () => {
    if (!firstName || !lastName || !email) {
      // todo
    } else {
      if (!executeRecaptcha) return
      const captchaToken = await executeRecaptcha('corporate_quiz_register')

      const userTag = localStorage.getItem('userTag') || ''

      const data = {
        client_tag: userTag,
        first_name: firstName,
        lastName: lastName,
        email: email,
        'g-recaptcha-response': captchaToken,
      }

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }

      fetch(
        process.env.NEXT_PUBLIC_AC_LEAD_URL ||
          'https://pds-marketing-api.herokuapp.com/api/post/contact',
        options
      )
        .then((response) => {
          localStorage.setItem('canViewResults', '1')
          setCanViewResults(true)
        })
        .catch((error) => {
          console.error(error)
          localStorage.setItem('canViewResults', '1')
          setCanViewResults(true)
        })

      localStorage.setItem('canViewResults', '1')
      setCanViewResults(true)
    }
  }, [firstName, lastName, email, executeRecaptcha])

  return canViewResults ? (
    <Page className="results-page" page_name={'Corporate Quiz Results Page'}>
      {/* MOBILE BACKGROUNDS */}
      <Image
        className="w-full bg-mobile bg-top"
        src="CorporatePage/corporate_bg_result_pink_mobile.png"
        style={{ maxHeight: '300px' }}
      />
      <Image
        className="w-full bg-mobile bg-top opacity-40"
        src="CorporatePage/corporate_bg_result_teal_mobile.png"
        style={{ zIndex: 5 }}
      />

      {/* DESKTOP BACKGROUNDS */}
      <Image
        className="w-full bg-desktop bg-top"
        src="CorporatePage/corporate_bg_result_pink.png"
        style={{ minHeight: '236px' }}
      />
      <Image
        className="w-full bg-desktop bg-top top-20 opacity-40"
        src="CorporatePage/corporate_bg_result_teal.png"
        style={{ zIndex: 5 }}
      />

      <section className="section-about-you text-center relative z-10">
        <Text.Heading
          className="tracking-almost-max mb-2 Text.heading-effra Text.heading-thin"
          content="YOUR ATTACHMENT STYLE IS…"
          size={3}
        />

        <Text.Heading className="mb-36 lg:mb-28" content={RESULTS[result].title} size={1} />

        <Text.Heading className="text-left mb-5 lg:mb-2" content="A Little Bit About You…" />

        <Text.Paragraph
          className="mb-10 text-left"
          content="Your Attachment Style determines how you interact with those around you. Based on your Style, you likely express a unique set of characteristics when communicating with and perceiving others."
        />

        <div className="strengths-and-improvements">
          {/* STRENGTHS */}
          <div className="flex flex-1 flex-col">
            <Text.Paragraph
              className="font-bold tracking-max mb-8 lg:mb-12"
              content="YOUR STRENGTHS"
            />

            {RESULTS[result].strengths.map((i, ii) => (
              <div key={`strength_${ii}`} className="flex items-start mb-4">
                <Image className="mr-5 lg:mr-4" src="CorporatePage/corporate_check-mark.svg" />
                <Text.Paragraph className="mb-0 text-left" content={i} />
              </div>
            ))}
          </div>

          {/* IMPROVEMENTS */}
          <div className="flex flex-1 flex-col">
            <Text.Paragraph
              className="font-bold tracking-max mb-8 lg:mb-12"
              content="AREAS FOR IMPROVEMENT"
            />

            {RESULTS[result].improvements.map((i, ii) => (
              <div key={`improvement_${ii}`} className="flex items-start mb-4">
                <Image className="mr-5 lg:mr-4" src="CorporatePage/corporate_improvement.svg" />
                <Text.Paragraph className="mb-0" content={i} />
              </div>
            ))}
          </div>
        </div>

        <Text.Paragraph
          className="text-left"
          content="Each Attachment Style has their own strengths and weaknesses, and by understanding your style and the style of those around you, you can better communicate and collaborate with those you work with."
        />

        <br />

        <Text
          useMD
          className="text-left"
          content={`Everyone also has 
              **a Secondary Attachment Styles, and yours are reflected in your Attachment Style
              Chart below!**
            `}
        />
      </section>

      <section className="section-about-styles relative z-10">
        <div className="chart">
          <Text.Heading
            className="Text.heading-effra text-left text-2xl pr-3 tracking-max text-primary mb-16 lg:mb-6 lg:pr-0"
            content="YOUR ATTACHMENT STYLE CHART"
          />

          <div className="flex flex-col">
            <ProgressBar progress={ap} title="Anxious Preoccupied" />
            <ProgressBar progress={da} title="Dismissive Avoidant" />
            <ProgressBar progress={fa} title="Fearful Avoidant" />
            <ProgressBar progress={sa} title="Secure Attachment" />
          </div>
        </div>

        <div className="w-full flex flex-col">
          <Text.Heading className="text-left mb-3 lg:mb-5" content="Secondary Attachment Styles" />

          <Text.Paragraph
            className="tracking-max mb-7 lg:mb-5"
            content="AND WHAT THEY MEAN ABOUT YOU"
          />

          <Text.Paragraph content="Attachment Styles are proportional. The Attachment Style that you see at the top of your chart indicates the Style that you predominately express the traits of. However, you may also express traits from other Attachment Styles, which is reflected in your chart through proportional percentages." />
          <br />
          <Text.Paragraph content="Your Attachment Style is formed during your childhood based on the experiences that you had. These experiences create certain adulthood behaviours which are categorized into four Styles: Fearful Avoidant, Dismissive Avoidant, Anxious Preoccupied and Secure Attachment." />
          <br />
          <Text.Paragraph content="Begin by learning about your Primary Attachment Style, and work towards moving it to a Secure Attachment. This will allow you to communicate more clearly, effectively, and improve the relationship you have to yourself and others." />
          <br />
          <Text.Paragraph content="After that, check out some of the courses we offer on your Secondary Attachment Styles! By understanding yourself and those around you, you can begin to create true and long-lasting change in your life." />
        </div>
      </section>
    </Page>
  ) : (
    <Page className="email-page px-2 xs:px-4" page_name="Corporate Quiz Form Page">
      {/* LEFT PART - image */}
      <div className="px-10 lg:px-0 lg:w-auto flex pb-8 lg:pb-32">
        <Image src="CorporatePage/corporate_email.png" />
      </div>

      {/* RIGHT PART - form */}
      <div className="w-full flex flex-col relative z-10" style={{ maxWidth: '550px' }}>
        <Text.Heading className="text-left px-2" content="Results" size={1} />

        <Text.Paragraph
          className="px-2 pb-4 lg:pb-8"
          content="Fill Out the form below to view your free results!"
        />

        <form className="form">
          <input
            className="rounded-full border-2 !border-primary-light-3 px-4 py-3 focus:!outline-primary focus:!border-primary mb-4"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            className="rounded-full border-2 !border-primary-light-3 px-4 py-3 focus:!outline-primary focus:!border-primary mb-4"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            className="rounded-full border-2 !border-primary-light-3 px-4 py-3 focus:!outline-primary focus:!border-primary mb-7"
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            className="button-form py-3 px-8"
            label="SEE MY RESULTS"
            type="submit"
            onClick={onSubmitForm}
          />

          <RecaptchaNotice />
        </form>
      </div>

      {/* BOTTOM BACKGROUND IMAGES */}
      <Image
        className="w-full bg-mobile bg-bottom left-0"
        src="CorporatePage/corporate_bg_email_mobile.png"
      />
      <Image
        className="w-full bg-desktop bg-bottom left-0"
        src="CorporatePage/corporate_bg_email.png"
        style={{ margin: 0 }}
      />
    </Page>
  )
}

interface IProgressBarProps {
  progress: string
  title: string
}
const ProgressBar = ({ progress, title }: IProgressBarProps) => (
  <div className="style-stat">
    <span className="w-44 mb-4 lg:mb-0 lg:mr-8">{title}</span>
    <div className="progressbar">
      <div className="progressbar-fill anim-progress-fill" style={{ maxWidth: `${progress}%` }} />
      <span className="pr-2">{progress} %</span>
    </div>
  </div>
)
