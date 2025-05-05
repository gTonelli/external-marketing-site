// components
import { Section } from '../Section'
import { VideoThumbnail } from '../Video/variants/VideoThumbnail'

export const IATTestimonialVideo = () => (
  <Section>
    <h2 className="max-w-4xl mx-auto my-4 lg:mb-12">Here's What Our Students Say:</h2>

    <div className="w-fit bg-white rounded-2xl shadow-xl p-4 mx-auto mb-16">
      <VideoThumbnail
        thumbnailUrl="IATPage/IAT-testimonial-thumbnail.png"
        thumbnailAlt="IAT Testimonial Thumbnail"
        srcUrl="https://storage.googleapis.com/pds_videos/Integrated_attachment_theory_coaching_training_testimonials.mp4"
        type="iat-testimonial"
      />
    </div>
  </Section>
)
