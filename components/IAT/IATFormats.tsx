// components
import { List } from '../List'
import { IATCurriculumCard } from './IATCurriculumCard'
import { faCircleCheck } from '@awesome.me/kit-545b942488/icons/classic/regular'
// config
import { IAT_COPY as IAT } from '@/app/(default-layout)/iat/config'

export const IATFormats = ({ isVariant = false }: { isVariant?: boolean }) => {
  return (
    <>
      {isVariant ? (
        <h3 className="text-primary my-8">OPTION 1: Live Training Format</h3>
      ) : (
        <h3 className="text-left my-8">Live Training Format</h3>
      )}

      <div
        className={`flex flex-col text-left lg:flex-row space-y-10 lg:space-y-0 lg:space-x-[60px] ${
          isVariant ? 'lg:space-x-0' : ''
        }`}>
        <div className={isVariant ? 'lg:flex-1 lg:pr-[30px]' : ''}>
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

          {!isVariant ? (
            <>
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
            </>
          ) : (
            <>
              {IAT.itinerary.slice(0, 4).map((week, index) => (
                <IATCurriculumCard
                  className="!p-4"
                  classNameHeading="!normal-case"
                  classNameTrigger="!pb-0"
                  key={`itinerary1_${index}`}
                  heading={week.heading}
                  initialOpenState={index == 0 ? true : false}
                  listItems={week.listItems}
                  textBottom={week.textBottom}
                  textTop={week.textTop}
                />
              ))}
            </>
          )}
        </div>

        <div className={isVariant ? 'lg:flex-1 lg:pl-[30px]' : ''}>
          <h4 className="mb-4">Intensive Training Week 5-12</h4>

          <List
            className="mt-2"
            classNameIcon="!text-primary"
            classNameListItems="font-bold mb-2"
            icon={faCircleCheck}
            listItems={IAT.training.live_training.intensive_week.heading}
          />

          {!isVariant ? (
            <>
              {IAT.training.live_training.intensive_week.copy1.map((copy, i) => (
                <p key={`live_training_intensive_week_copy1_${i}`} className="mb-4">
                  {copy}
                </p>
              ))}

              <ul className="!pl-4 !list-disc mb-4">
                {IAT.training.live_training.intensive_week.list.map((item, i) => (
                  <li key={`live_training_intensive_week_list_${i}`} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>

              {IAT.training.live_training.intensive_week.copy2.map((copy, i) => (
                <p key={`live_training_intensive_week_copy2_${i}`} className="mb-4">
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
            </>
          ) : (
            <>
              <p>{IAT.training.live_training.intensive_week.copy1.slice(0, 2).join(' ')}</p>

              {IAT.itinerary.slice(4).map((week, index) => (
                <IATCurriculumCard
                  className="!p-4"
                  classNameHeading="!normal-case"
                  classNameTrigger="!pb-0"
                  key={`itinerary2_${index}`}
                  heading={week.heading}
                  initialOpenState={false}
                  listItems={week.listItems}
                  textBottom={week.textBottom}
                  textTop={week.textTop}
                />
              ))}
            </>
          )}
        </div>
      </div>

      {isVariant && (
        <div className="text-left">
          <p className="font-bold uppercase tracking-33">
            {IAT.training.live_training.intensive_week.copy1[2]}
          </p>

          <List
            className="mt-2"
            classNameIcon="!text-primary"
            classNameListItems="mb-2"
            icon={faCircleCheck}
            listItems={IAT.training.live_training.intensive_week.list}
          />

          {IAT.training.live_training.intensive_week.copy2.map((copy, i) => (
            <p key={`live_training_intensive_week_copy2_${i}`} className="mb-4">
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

          <div className="w-full bg-primary font-semibold text-white text-center rounded-20 px-8 py-4 mb-4">
            <p>
              Nothing is left out. You don’t have to “figure it out” on your own. You have the
              entire roadmap in your hands.
            </p>

            <p>
              Picture yourself confidently leading sessions where clients walk away lighter, freer,
              and grateful—and your business growing naturally through referrals and repeat clients.
            </p>

            <p>
              No more dragging yourself to an unfulfilling job. Instead, imagine the freedom to work
              from anywhere, set your own schedule, and build a business rooted in impact,
              abundance, and significance.
            </p>
          </div>
        </div>
      )}

      <div className="w-full h-[2px] bg-black mt-4"></div>

      {isVariant ? (
        <h3 className="text-primary my-8">OPTION 2: On-Demand Training Format</h3>
      ) : (
        <h3 className="text-left my-8">On-Demand Training Format</h3>
      )}

      <div className="flex flex-col text-left lg:flex-row space-y-7 lg:space-y-0 lg:space-x-[60px]">
        <div className={`max-w-[498px] ${isVariant ? 'lg:max-w-full' : ''}`}>
          {IAT.training.on_demand_training.left_section.map((copy, i) => (
            <p key={`on_demand_training_left_section_copy_${i}`} className="mb-4">
              {copy}
            </p>
          ))}
        </div>

        {!isVariant && (
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
        )}
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
