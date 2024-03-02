import { FC } from 'react'
import {
  BaseButton,
  BaseCard,
  BaseFlexBox,
  BaseInput,
  BaseSelect,
  BaseTypography,
} from '@/components/bases'
import { AccountIcon, LocationIcon, SearchIcon } from '@/components/bases/BaseIcons'
import { useNavigate } from 'react-router-dom'

interface JobSearchFormProps {
  selector: string | null
  isModalOpen: boolean
  setIsModalOpen: (value: boolean) => void
}

const JobSearchForm: FC<JobSearchFormProps> = ({ selector, isModalOpen, setIsModalOpen }) => {
  const navigate = useNavigate()

  //*NOTE:
  const options = [
    { label: '正社員', value: '正社員' },
    { label: 'パート・アルバイト', value: 'パート・アルバイト' },
    { label: '派遣', value: '派遣' },
    { label: '契約社員', value: '契約社員' },
    { label: '業務委託', value: '業務委託' },
    { label: 'フリーランス', value: 'フリーランス' },
  ]
  //*NOTE:勤務地についてのモーダルのトグル
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  //*NOTE:検索ボタンを押した後の処理
  const handleSearchClick = () => {
    navigate('jobs/search-results')
  }

  return (
    <BaseTypography tag="div" style={{ position: 'relative' }}>
      <BaseCard
        py="2xl"
        px="2xl"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          padding: '24px 40px',
        }}
      >
        <BaseFlexBox gap="2xl">
          <BaseFlexBox style={{ width: '100%', maxWidth: '224px' }}>
            <BaseSelect placeholder="雇用形態" options={options}>
              <AccountIcon />
            </BaseSelect>
          </BaseFlexBox>
          <BaseFlexBox style={{ width: '100%', maxWidth: '144px' }}>
            {/* //*NOTE:ボタンを模したInput、type、text */}
            <BaseInput
              type="text"
              placeholder="勤務地"
              onClick={toggleModal}
              value={selector || ''}
              readOnly
              style={{ cursor: 'pointer' }}
            >
              <LocationIcon />
            </BaseInput>
          </BaseFlexBox>
          <BaseFlexBox style={{ width: '100%', maxWidth: '352px' }}>
            <BaseInput placeholder="キーワード">
              <SearchIcon />
            </BaseInput>
          </BaseFlexBox>
          <BaseButton onClick={handleSearchClick} style={{ width: '100%', maxWidth: '128px' }}>
            検索
          </BaseButton>
        </BaseFlexBox>
      </BaseCard>
    </BaseTypography>
  )
}

export default JobSearchForm
