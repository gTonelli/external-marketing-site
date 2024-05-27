import { SignupForm } from './Forms/SignupForm'

export const PodcastForm = ({ id }: { id?: string }) => {
  return (
    <SignupForm
      id={id}
      userTags={['podcast']}
      listIds={[55]}
      successMessage="Thank you for joining!"
    />
  )
}
