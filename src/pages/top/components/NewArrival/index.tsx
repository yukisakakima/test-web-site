import { FC } from 'react'
import useSelector from '@/hooks/useSelector'
import { useNavigate } from 'react-router-dom'
import { RootState } from '@/libs/store'
import {
  BaseTypography,
  BaseSpacing,
  BaseHeadingWithBar,
  BaseSlider,
  BaseSliderItem,
  BaseCard,
  BaseImage,
  BaseHeading,
  BaseFlexBox,
  BaseButton,
} from '@/components/bases'
import { FavoriteIcon } from '@/components/bases/BaseIcons'
import { Job } from '@/libs/api/jobApi'

interface NewArrivalProps {
  jobs: Job[] //*NOTE:FetchJobでの型定義を取得
  handleFavoriteAction: (jobId: string) => void //TODO: 汎用的なアクションハンドラー
  setIsFavoriteModalOpen: (value: boolean) => void //TODO: 汎用的なアクションハンドラー
}

const NewArrival: FC<NewArrivalProps> = ({
  jobs,
  handleFavoriteAction,
  setIsFavoriteModalOpen,
}) => {
  const navigate = useNavigate()
  //*NOTE:login状態を取得
  const isLogin = useSelector((state: RootState) => state.auth.isLogin)

  return (
    <BaseTypography tag="div" style={{ marginTop: '108px' }}>
      <BaseSpacing bottom="4xl">
        <BaseHeadingWithBar>新着求人</BaseHeadingWithBar>
      </BaseSpacing>
      <BaseSlider itemLength={4}>
        {jobs.map((job) => (
          <BaseSliderItem key={job.jobId}>
            <BaseCard style={{ padding: '0', overflow: 'hidden' }}>
              <BaseImage src={job.jobImage} />
              <BaseSpacing top="lg" bottom="lg" left="lg" right="lg">
                <BaseHeading level="h3" fontSize="lg">
                  {job.companyName}
                </BaseHeading>
                <BaseSpacing top="md" bottom="md">
                  <BaseFlexBox flexDirection="column" rowGap="sm">
                    <BaseTypography tag="p">{job.jobDescription}</BaseTypography>
                  </BaseFlexBox>
                </BaseSpacing>
                {isLogin && job.isFavorite ? (
                  <BaseButton variant="outlined" onClick={() => navigate('/favorites')}>
                    <FavoriteIcon />
                    追加済み
                  </BaseButton>
                ) : (
                  <BaseButton
                    variant="outlined"
                    onClick={() => {
                      if (isLogin) {
                        handleFavoriteAction(job.jobId)
                      } else {
                        setIsFavoriteModalOpen(true)
                      }
                    }}
                  >
                    <FavoriteIcon />
                    気になる
                  </BaseButton>
                )}
              </BaseSpacing>
            </BaseCard>
          </BaseSliderItem>
        ))}
      </BaseSlider>
    </BaseTypography>
  )
}

export default NewArrival
