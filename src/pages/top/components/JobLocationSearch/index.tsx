import { FC } from 'react'
import {
  BaseSpacing,
  BaseHeadingWithBar,
  BaseCard,
  BaseGridLayout,
  BaseGridItem,
  BaseHeading,
  BaseFlexBox,
  BaseInternalLink,
} from '@/components/bases'

interface Prefecture {
  prefectureName: string
}

interface Region {
  regionName: string
  prefectures: Prefecture[]
}

interface JobLocationSearchProps {
  regions: Region[]
}

const JobLocationSearch: FC<JobLocationSearchProps> = ({ regions }) => {
  return (
    <>
      <BaseSpacing top="6xl">
        <BaseSpacing bottom="4xl">
          <BaseHeadingWithBar>勤務地から探す</BaseHeadingWithBar>
        </BaseSpacing>
        <BaseCard>
          <BaseGridLayout col={2} gapX="lg">
            {regions.map((region) => (
              <BaseGridItem col={1} key={region.regionName}>
                <BaseHeading level="h3" fontSize="lg" fontWeight="bold">
                  {region.regionName}
                </BaseHeading>
                <BaseSpacing top="2xl" bottom="3xl">
                  <BaseFlexBox gap="lg" flexWrap="wrap">
                    {region.prefectures.map((prefecture) => (
                      <BaseInternalLink to={''} key={prefecture.prefectureName}>
                        {prefecture.prefectureName}
                      </BaseInternalLink>
                    ))}
                  </BaseFlexBox>
                </BaseSpacing>
              </BaseGridItem>
            ))}
          </BaseGridLayout>
        </BaseCard>
      </BaseSpacing>
    </>
  )
}

export default JobLocationSearch
