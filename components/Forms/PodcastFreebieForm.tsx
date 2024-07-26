import { SignupForm } from './SignupForm'

export const PodcastFreebieForm = ({ id }: { id?: string }) => {
  return (
    <SignupForm
      id={id}
      userTags={['podcast-freebie']}
      listIds={[55]}
      successMessage="Thank you for joining!"
      submitButtonLabel="SUBSCRIBE NOW"
    />
  )
}
