// components
import { List } from '../List'
import { faCircleCheck } from '@awesome.me/kit-545b942488/icons/classic/regular'
// config
import { IAT_COPY as IAT } from '@/app/(default-layout)/iat/config'

export const IATFormats = () => {
  return (
    <>
      <h3 className="text-left my-8">Live Training Format</h3>

      <div className="flex flex-col text-left lg:flex-row space-y-10 lg:space-y-0 lg:space-x-[60px]">
        <div>
          <h4 className="mb-4">Prerequisite Week 1-4</h4>

          <List
            className="mb-4"
            classNameIcon="!text-primary"
            classNameListItems="font-bold mb-2"
            icon={faCircleCheck}
            listItems={IAT.training.live_training.prerequisite_week.heading}
          />

          {IAT.training.live_training.prerequisite_week.copy.map((copy, i) => (
            <p key={`live_training_prerequisite_copy_${i}`} className="mb-4">
              {copy}
            </p>
          ))}

          <p className="font-bold uppercase tracking-33">Week One</p>

          <List
            className="mt-2"
            classNameIcon="!text-primary"
            classNameListItems="mb-2"
            icon={faCircleCheck}
            listItems={IAT.training.live_training.prerequisite_week.week1}
          />

          <p className="font-bold uppercase tracking-33 mt-4">Week Two</p>

          <List
            className="mt-2"
            classNameIcon="!text-primary"
            classNameListItems="mb-2"
            icon={faCircleCheck}
            listItems={IAT.training.live_training.prerequisite_week.week2}
          />

          <p className="font-bold uppercase tracking-33 mt-4">Week Three</p>

          <List
            className="mt-2"
            classNameIcon="!text-primary"
            classNameListItems="mb-2"
            icon={faCircleCheck}
            listItems={IAT.training.live_training.prerequisite_week.week3}
          />

          <p className="font-bold uppercase tracking-33 mt-4">Week Four</p>

          <List
            className="mt-2"
            classNameIcon="!text-primary"
            classNameListItems="mb-2"
            icon={faCircleCheck}
            listItems={IAT.training.live_training.prerequisite_week.week4}
          />
        </div>

        <div>
          <h4 className="mb-4">Intensive Training Week 5-12</h4>

          <List
            className="mt-2"
            classNameIcon="!text-primary"
            classNameListItems="font-bold mb-2"
            icon={faCircleCheck}
            listItems={IAT.training.live_training.intensive_week.heading}
          />

          {IAT.training.live_training.intensive_week.copy.map((copy, i) => (
            <p key={`live_training_intensive_week_copy_${i}`} className="mb-4">
              {copy}
            </p>
          ))}

          <p className="font-bold uppercase tracking-33">
            {IAT.training.live_training.intensive_week.features.heading}
          </p>

          <List
            className="mt-2"
            classNameIcon="!text-primary"
            classNameListItems="mb-2"
            icon={faCircleCheck}
            listItems={IAT.training.live_training.intensive_week.features.copy}
          />

          <p className="font-bold mt-4">
            {IAT.training.live_training.intensive_week.features.subheading}
          </p>
        </div>
      </div>

      <div className="w-full h-[2px] bg-black mt-4"></div>

      <h3 className="text-left my-8">On-Demand Training Format</h3>

      <div className="flex flex-col text-left lg:flex-row space-y-7 lg:space-y-0 lg:space-x-[60px]">
        <div className="max-w-[498px]">
          {IAT.training.on_demand_training.left_section.map((copy, i) => (
            <p key={`on_demand_training_left_section_copy_${i}`} className="mb-4">
              {copy}
            </p>
          ))}
        </div>

        <div>
          <p className="font-bold">{IAT.training.on_demand_training.right_section.heading}</p>

          <List
            className="mt-2"
            classNameIcon="!text-primary"
            classNameListItems="mb-2"
            icon={faCircleCheck}
            listItems={IAT.training.on_demand_training.right_section.course_material}
          />
        </div>
      </div>

      <div className="w-full text-center bg-primary-light rounded-3xl p-8 my-8 lg:py-12">
        <h3>Complete Your Certification Exam</h3>

        <p className="max-w-2xl mt-4 mx-auto">
          <strong>
            Whichever format you choose, you’ll be invited to complete your certification exam at
            the end of your 12 weeks.
          </strong>
        </p>
      </div>
    </>
  )
}
