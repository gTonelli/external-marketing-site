import { Section } from '../../config'

export default function AttachmenbtQuizV2ResultsPage({ params }: { params: string[] }) {
  console.log('Params')

  return (
    <Section>
      <h1>Made for Graham Tonelli</h1>

      <strong>
        Next comes your attachment style report in your email! It’s a roadmap that is based on your
        attachment style and the goals you want to focus on. Keep reading to learn more! 
      </strong>

      <p>
        As a fearful avoidant, you desire a deeply connective, supportive, and trusting relationship
        with a healthy balance of closeness and space. But your fear of being vulnerable and relying
        on someone else leads you to believe you'll be betrayed, making you pull away or flip-flop
        from hot to cold when you get too close to someone.
      </p>

      <p>
        Your beliefs about love and connections are getting in the way of forming healthy,
        long-lasting, and loving relationships.
      </p>

      <p>
        Your results below show how you scored on all four attachment styles: Fearful, Anxious,
        Dismissive, and Secure.
      </p>
    </Section>
  )
}
