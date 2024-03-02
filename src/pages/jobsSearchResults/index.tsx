import {
  BaseBreadcrumb,
  BaseButton,
  BaseCard,
  BaseCheckbox,
  BaseDefineDescription,
  BaseDefineList,
  BaseDefineTeam,
  BaseFlexBox,
  BaseGridItem,
  BaseGridLayout,
  BaseHeading,
  BaseHeadingWithBar,
  BaseImage,
  BaseLabel,
  BaseInput,
  BaseInputLabel,
  BasePagination,
  BaseSelect,
  BaseSpacing,
  BaseTypography,
} from '@/components/bases'
import { SearchIcon, FavoriteIcon } from '@/components/bases/BaseIcons'
import { FC, useState, useEffect } from 'react'
import { ThePageLoading } from '@/components/layouts'
import Image from '@/assets/images/image1.png'

const JobsSearchResultsPage: FC = () => {
  const breadcrumbs = [{ label: 'トップ', link: '/' }, { label: '求人検索結果一覧' }]
  const options = [
    { label: '新着順', value: '新着順' },
    { label: '締切が近い順', value: '締切が近い順' },
  ]

  const [clickPage, setClickPage] = useState(1)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    //! データ読み込みのシミュレーション
    setTimeout(() => {
      setIsLoading(false) //! ここでデータが読み込まれたと仮定
    }, 2000) //! 2秒後に読み込み完了
  }, [])

  return (
    <>
      {isLoading ? (
        <ThePageLoading />
      ) : (
        <>
          <BaseSpacing bottom="5xl">
            <BaseBreadcrumb breadcrumbs={breadcrumbs}></BaseBreadcrumb>
          </BaseSpacing>
          <BaseGridLayout col={3} gapX="5xl">
            <BaseGridItem col={1}>
              <BaseCard>
                <BaseSpacing bottom="4xl">
                  <BaseHeading level="h2" fontSize="md" fontWeight="bold">
                    フリーキーワード
                  </BaseHeading>
                  <BaseSpacing top="lg">
                    <BaseInput placeholder="キーワード">
                      <SearchIcon />
                    </BaseInput>
                  </BaseSpacing>
                </BaseSpacing>

                <BaseSpacing bottom="4xl">
                  <BaseHeading level="h2" fontSize="md" fontWeight="bold">
                    勤務地
                  </BaseHeading>
                  <BaseSpacing top="lg" bottom="lg">
                    <BaseTypography>未選択</BaseTypography>
                  </BaseSpacing>
                  <BaseButton variant="outlined">変更する</BaseButton>
                </BaseSpacing>

                <BaseSpacing bottom="4xl">
                  <BaseHeading level="h2" fontSize="md" fontWeight="bold">
                    職種
                  </BaseHeading>
                  <BaseSpacing top="lg" bottom="lg">
                    <BaseTypography>未選択</BaseTypography>
                  </BaseSpacing>
                  <BaseButton variant="outlined">変更する</BaseButton>
                </BaseSpacing>

                <BaseSpacing bottom="4xl">
                  <BaseHeading level="h2" fontSize="md" fontWeight="bold">
                    雇用形態
                  </BaseHeading>
                  <BaseSpacing top="lg">
                    <BaseFlexBox flexDirection="column" gap="md">
                      <BaseFlexBox gap="md">
                        <BaseCheckbox id="checkbox-1" />
                        <BaseInputLabel htmlFor="checkbox-1">正社員（2）</BaseInputLabel>
                      </BaseFlexBox>
                      <BaseFlexBox gap="md">
                        <BaseCheckbox id="checkbox-2" />
                        <BaseInputLabel htmlFor="checkbox-2">
                          パート・アルバイト（120）
                        </BaseInputLabel>
                      </BaseFlexBox>
                      <BaseFlexBox gap="md">
                        <BaseCheckbox id="checkbox-3" />
                        <BaseInputLabel htmlFor="checkbox-3">派遣（0）</BaseInputLabel>
                      </BaseFlexBox>
                      <BaseFlexBox gap="md">
                        <BaseCheckbox id="checkbox-4" />
                        <BaseInputLabel htmlFor="checkbox-4">契約社員（0）</BaseInputLabel>
                      </BaseFlexBox>
                    </BaseFlexBox>
                  </BaseSpacing>
                </BaseSpacing>

                <BaseSpacing bottom="4xl">
                  <BaseHeading level="h2" fontSize="md" fontWeight="bold">
                    こだわり条件
                  </BaseHeading>
                  <BaseSpacing top="lg">
                    <BaseFlexBox flexDirection="column" gap="md">
                      <BaseFlexBox gap="md">
                        <BaseCheckbox id="checkbox-5" />
                        <BaseInputLabel htmlFor="checkbox-5">職種未経験歓迎（0）</BaseInputLabel>
                      </BaseFlexBox>
                      <BaseFlexBox gap="md">
                        <BaseCheckbox id="checkbox-6" />
                        <BaseInputLabel htmlFor="checkbox-6">社会人未経験歓迎（0）</BaseInputLabel>
                      </BaseFlexBox>
                      <BaseFlexBox gap="md">
                        <BaseCheckbox id="checkbox-7" />
                        <BaseInputLabel htmlFor="checkbox-7">第二新卒歓迎（1）</BaseInputLabel>
                      </BaseFlexBox>
                    </BaseFlexBox>
                  </BaseSpacing>
                </BaseSpacing>

                <BaseButton bgColor="accent">
                  <SearchIcon fill="white" />
                  検索条件を変更
                </BaseButton>
              </BaseCard>
            </BaseGridItem>

            <BaseGridItem col={2}>
              <BaseHeadingWithBar>求人検索結果一覧</BaseHeadingWithBar>
              <BaseSpacing top="4xl">
                <BaseFlexBox justifyContent="space-between">
                  <BaseFlexBox gap="sm" alignItems="end">
                    <BaseTypography tag="p" fontSize="2xl" fontWeight="bold">
                      2,467
                    </BaseTypography>
                    <BaseTypography tag="p">件中 1～50件 を表示</BaseTypography>
                  </BaseFlexBox>
                  {/* 設定方法が正しいか？ */}
                  <BaseFlexBox style={{ width: '176px' }}>
                    <BaseSelect placeholder="並び替え" options={options} />
                  </BaseFlexBox>
                </BaseFlexBox>
              </BaseSpacing>

              <BaseSpacing top="4xl">
                <BaseCard>
                  <BaseFlexBox gap="xl">
                    <BaseTypography tag="div">
                      <BaseHeading level="h2" fontWeight="bold" color="accent">
                        サンプル株式会社
                      </BaseHeading>
                      <BaseSpacing top="2xl">
                        <BaseTypography tag="p">
                          未経験歓迎の営業職 / 月平均残業10h / 完全週休2日制test
                        </BaseTypography>
                      </BaseSpacing>
                      <BaseSpacing top="lg">
                        <BaseFlexBox gap="sm">
                          <BaseLabel>第二新卒歓迎</BaseLabel>
                          <BaseLabel>第二新卒歓迎</BaseLabel>
                          <BaseLabel>第二新卒歓迎</BaseLabel>
                        </BaseFlexBox>
                      </BaseSpacing>
                    </BaseTypography>
                    <BaseTypography tag="div">
                      <BaseImage alt="サンプル株式会社画像" src={Image} />
                    </BaseTypography>
                  </BaseFlexBox>
                  <BaseSpacing top="5xl">
                    <BaseDefineList>
                      <BaseDefineTeam>雇用形態</BaseDefineTeam>
                      <BaseDefineDescription>正社員</BaseDefineDescription>
                      <BaseDefineTeam>仕事内容</BaseDefineTeam>
                      <BaseDefineDescription>
                        ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入り
                        ます。ここにテキストが入ります。
                      </BaseDefineDescription>
                      <BaseDefineTeam>対象となる方</BaseDefineTeam>
                      <BaseDefineDescription>
                        ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入り
                        ます。ここにテキストが入ります。
                      </BaseDefineDescription>
                      <BaseDefineTeam>勤務地</BaseDefineTeam>
                      <BaseDefineDescription>ここにテキストが入ります。</BaseDefineDescription>
                      <BaseDefineTeam>給料</BaseDefineTeam>
                      <BaseDefineDescription>800万円 / 28歳</BaseDefineDescription>
                    </BaseDefineList>
                    <BaseSpacing top="4xl">
                      <BaseFlexBox gap="4xl">
                        <BaseButton variant="outlined">
                          <FavoriteIcon />
                          気になる
                        </BaseButton>
                        <BaseButton>応募する</BaseButton>
                      </BaseFlexBox>
                    </BaseSpacing>
                  </BaseSpacing>
                </BaseCard>
              </BaseSpacing>
            </BaseGridItem>
          </BaseGridLayout>

          <BaseSpacing top="6xl">
            <BasePagination
              total={3}
              page={clickPage}
              isPrevActive={true}
              isNextActive={true}
              onPageChange={(newClickPage) => setClickPage(newClickPage)}
            ></BasePagination>
          </BaseSpacing>
        </>
      )}
    </>
  )
}

export default JobsSearchResultsPage
