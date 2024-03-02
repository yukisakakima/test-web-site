import {
  BaseCard,
  BaseFlexBox,
  BaseGridItem,
  BaseGridLayout,
  BaseHeadingWithBar,
  BaseInternalLink,
  BaseSpacing,
  BaseTypography,
} from '@/components/bases'
import { ArrowRightIcon } from '@/components/bases/BaseIcons'
import { FC } from 'react'

interface Item {
  name: string
}

interface Occupation {
  name: string
  count: number
  items: Item[]
}

interface JobTypeSearchProps {
  occupation: Occupation[]
}

const JobTypeSearch: FC<JobTypeSearchProps> = ({ occupation }) => {
  return (
    <>
      <BaseSpacing top="6xl">
        <BaseSpacing bottom="4xl">
          <BaseHeadingWithBar>職種から探す</BaseHeadingWithBar>
        </BaseSpacing>
        <BaseCard>
          <BaseGridLayout col={3} gapX="2xl" gapY="2xl">
            {occupation.map((occupation, index) => (
              <BaseGridItem col={1} style={{ borderBottom: '1px solid #D5D5D5' }} key={index}>
                <BaseFlexBox gap="md" alignItems="center">
                  <BaseTypography tag="div">
                    <BaseInternalLink to={''} style={{ fontWeight: '700' }}>
                      {occupation.name}（{occupation.count} 件）
                    </BaseInternalLink>
                    <BaseSpacing top="md" bottom="md">
                      <BaseTypography tag="p" fontSize="sm" className="textClamp">
                        {/* mapとjoinで */}
                        {occupation.items.map((item) => item.name).join('、')}
                      </BaseTypography>
                    </BaseSpacing>
                  </BaseTypography>
                  <ArrowRightIcon />
                </BaseFlexBox>
              </BaseGridItem>
            ))}
          </BaseGridLayout>
        </BaseCard>
      </BaseSpacing>
    </>
  )
}

export default JobTypeSearch
