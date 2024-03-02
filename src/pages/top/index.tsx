import { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useScrollbarWidth from '@/hooks/useScrollbarWidth'
import { ThePageLoading } from '@/components/layouts'
import { DefaultTheme } from 'styled-components'
import {
  BaseButton,
  BaseCard,
  BaseFlexBox,
  BaseGridItem,
  BaseGridLayout,
  BaseHeadingWithBar,
  BaseImage,
  BaseInternalLink,
  BaseModal,
  BaseModalTitle,
  BaseMoreLink,
  BaseSelectorItem,
  BaseSelectorList,
  BaseSlider,
  BaseSliderItem,
  BaseSpacing,
  BaseTypography,
} from '@/components/bases'
import HeadImage from '@/assets/images/headImage.png'
import Image from '@/assets/images/image2.png'
import { useTheme } from 'styled-components'
import { fetchArticles, Article } from '@/libs/api/articleApi' // API関数と記事情報の型定義をインポート
import { fetchEvents, Event } from '@/libs/api/eventApi' // API関数とイベント情報の型定義をインポート
import { fetchJobs, Job, LocationData } from '@/libs/api/jobApi'
import { fetchOccupation, Occupation } from '@/libs/api/occupationApi'
import { fetchFavoriteJobs, updateFavoriteStatus } from '@/libs/api/favoriteApi'
import { onToastOpen } from '@/libs/store/slice/toastSlice'
import JobSearchForm from './components/JobSearchForm'
import NewArrival from './components/NewArrival'
import JobLocationSearch from './components/JobLocationSearch'
import JobTypeSearch from './components/JobTypeSearch'

const Top: FC<{ theme?: DefaultTheme }> = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const scrollbarWidth = useScrollbarWidth() //スクロールバーの幅を取得

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    //! データ読み込みのシミュレーション
    setTimeout(() => {
      setIsLoading(false) //! ここでデータが読み込まれたと仮定
    }, 3000) //! 3秒後に読み込み完了
  }, [])

  // const [scrollbarWidth, setScrollbarWidth] = useState(0)

  // スクロールバーの幅を計算する関数
  // const ScrollbarWidth = () => {
  //   const width = window.innerWidth - document.documentElement.clientWidth
  //   setScrollbarWidth(width)
  // }

  // useEffect(() => {
  //   // コンポーネントがマウントされたときに実行
  //   ScrollbarWidth()

  //   // ウィンドウがリサイズされたときに実行
  //   window.addEventListener('resize', ScrollbarWidth)

  //   // クリーンアップ関数
  //   return () => window.removeEventListener('resize', ScrollbarWidth)
  // }, [])

  //! どういうこと？？？
  const theme: DefaultTheme = useTheme()

  // モーダルの表示状態を管理するステート
  const [isModalOpen, setIsModalOpen] = useState(false)

  // モーダルを開閉する関数
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  //リセットボタン
  const handleReset = () => {
    setIsModalOpen(false)
    setSelectedRegion(null)
    setClickedPrefecture(null)
    setSelector(null)
  }

  // 各求人の「気になる」状態を管理するステート
  const [favorites, setFavorites] = useState<{ [jobId: string]: boolean }>({})

  useEffect(() => {
    // このuseEffectフックは、コンポーネントがマウントされた時に一度だけ実行

    // お気に入り状態の初期取得を行う非同期関数
    const fetchFavoriteJobsData = async () => {
      try {
        // fetchFavoriteJobs関数を呼び出して、お気に入り求人のデータを取得
        const data = await fetchFavoriteJobs()

        // 取得したデータから、各求人のお気に入り状態を抽出し、
        // キーが求人ID、値がお気に入り状態（true/false）のオブジェクトを作成
        const favoriteStatus = data.result.items.reduce(
          (acc: { [key: string]: boolean }, job: Job) => {
            acc[job.jobId] = job.isFavorite // 各求人のIDをキーとして、お気に入り状態を設定
            return acc // 累積オブジェクトを返す
          },
          {} // 初期値は空のオブジェクト
        )

        // 作成したお気に入り状態のオブジェクトをステートに設定
        setFavorites(favoriteStatus)
      } catch (error) {
        // データ取得中にエラーが発生した場合、エラーをコンソールに出力
        console.error('お気に入り情報の取得に失敗しました', error)
      }
    }

    // 定義した非同期関数を実行
    // eslint-disable-next-line no-constant-condition
    if (false) {
      fetchFavoriteJobsData()
    }
  }, []) // 空の依存配列を指定して、コンポーネントのマウント時にのみ実行

  //未ログイン時の気になるボタンを押した時のモーダルの出現
  const [isFavoriteModalOpen, setIsFavoriteModalOpen] = useState(false)

  //! モーダルを開閉する関数を作ってたはずが、関数の役割を超えてしまっている！！！！！
  //! 元の関数名はtoggleFavoriteModal
  const handleFavoriteAction = async (jobId?: string) => {
    if (!jobId) return
    if (favorites[jobId]) {
      // 追加済みの場合、気になる一覧画面へ遷移
      navigate('/favorites')
      return
    }

    // 未追加の場合、気になる求人に追加
    try {
      const response = await updateFavoriteStatus(jobId, true)

      if (!response.status) {
        // トースト通知を表示
        dispatch(
          onToastOpen({
            status: 'error',
            message: 'お気に入りの更新に失敗しました。',
          })
        )
        return
      }
      // APIの応答に基づいて状態を更新
      setJobs((prevJobs) =>
        prevJobs.map((job) => {
          if (job.jobId === jobId) {
            return { ...job, isFavorite: response.result.isFavorite } // 更新されたお気に入り状態を設定
          }
          return job
        })
      )
      // トースト通知を表示
      dispatch(
        onToastOpen({
          status: 'success',
          message: 'お気に入りに追加しました。',
        })
      )
    } catch (error) {
      console.error('お気に入りの更新に失敗しました', error)
      // エラー時のトースト通知
      dispatch(
        onToastOpen({
          status: 'error',
          message: 'お気に入りの更新に失敗しました。',
        })
      )
    }
  }

  // 新着求人情報を格納するステート
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    const loadJobs = async () => {
      try {
        setIsLoading(true)
        const data = await fetchJobs()
        setJobs(data.result.items)
      } catch (error) {
        console.error('新着求人情報の読み込みに失敗しました', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadJobs()
  }, [])

  // 記事情報を格納するステート
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setIsLoading(true)
        const data = await fetchArticles()
        console.log(data.result.items)
        setArticles(data.result.items)
      } catch (error) {
        console.error('記事情報の読み込みに失敗しました', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadArticles()
  }, [])

  const [events, setEvents] = useState<Event[]>([]) // イベント情報を格納するステート

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const eventData = await fetchEvents()
        setEvents(eventData.result.items)
      } catch (error) {
        console.error('イベント情報の読み込みに失敗しました', error)
      }
    }

    loadEvents()
  }, [])

  // 地方と県のデータを格納するステート
  const [regions, setRegions] = useState<LocationData[]>([])

  useEffect(() => {
    const loadRegions = async () => {
      try {
        setIsLoading(true)
        const data = await fetchJobs()
        setRegions(data.result.aggregations.locations) // 地方と県のデータを設定
        // ... その他のデータの設定 ...
      } catch (error) {
        console.error('新着求人情報の読み込みに失敗しました', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadRegions()
  }, [])

  // selectorのvalue
  const [selector, setSelector] = useState<string | null>(null)

  // 地方と都道府県の選択状態を管理するステート
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [selectedPrefecture, setSelectedPrefecture] = useState<string[]>([])

  // クリックされた都道府県
  const [clickedPrefecture, setClickedPrefecture] = useState<string | null>(null)

  //地域がクリックされた時の処理
  const handleRegionClick = (regionName: string) => {
    // 選択された地域名を設定
    setSelectedRegion(regionName)

    // 選択された地域に対応する地域データを検索
    const selectedRegionData = regions.find((region) => region.regionName === regionName)

    if (selectedRegionData) {
      // 地域データが見つかった場合、その地域の都道府県名のリストを設定
      const prefectureNames = selectedRegionData.prefectures.map(
        (prefecture) => prefecture.prefectureName
      )
      setSelectedPrefecture(prefectureNames)
    } else {
      // 地域データが見つからない場合、都道府県のリストを空に設定
      setSelectedPrefecture([])
    }

    // 都道府県の選択をリセット
    setClickedPrefecture(null)
  }

  const handlePrefectureClick = (prefectureName: string) => {
    setClickedPrefecture(prefectureName)
  }

  const handleDone = () => {
    setIsModalOpen(false)
    setSelector(clickedPrefecture) // 選択された都道府県をselectorに設定
  }

  const [occupation, setOccupation] = useState<Occupation[]>([])

  useEffect(() => {
    const loadOccupation = async () => {
      try {
        setIsLoading(true)
        const data = await fetchOccupation()
        setOccupation(data)
      } catch (error) {
        console.error('分類・職種の読み込みに失敗しました', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadOccupation()
  }, [])

  return (
    <>
      {isLoading ? (
        <ThePageLoading />
      ) : (
        <>
          <BaseTypography
            tag="div"
            style={{
              backgroundImage: `url(${HeadImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: `calc(100vw - ${scrollbarWidth}px)`,
              height: `calc((100vw - ${scrollbarWidth}px) / 3.657)`,
              margin: `-48px calc((100vw - ${scrollbarWidth}px - ${theme.mediaQuery(
                1000
              )}) / 2 * -1) 0`,
            }}
          ></BaseTypography>

          {/* NOTE:仕事検索フォーム */}
          <JobSearchForm
            selector={selector}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />

          {/* NOTE:新着求人 */}
          <NewArrival
            jobs={jobs}
            handleFavoriteAction={handleFavoriteAction}
            setIsFavoriteModalOpen={setIsFavoriteModalOpen}
          />

          {/* NOTE:住所から検索 */}
          <JobLocationSearch regions={regions} />

          {/* NOTE:職種から検索 */}
          <JobTypeSearch occupation={occupation} />

          <BaseSpacing top="6xl">
            <BaseSpacing bottom="4xl">
              <BaseHeadingWithBar>こだわり条件から探す</BaseHeadingWithBar>
            </BaseSpacing>
            <BaseCard>
              <BaseFlexBox gap="4xl" flexWrap="wrap">
                <BaseInternalLink to={''}>職種未経験歓迎</BaseInternalLink>
                <BaseInternalLink to={''}>社会人未経験歓迎</BaseInternalLink>
                <BaseInternalLink to={''}>第二新卒歓迎</BaseInternalLink>
                <BaseInternalLink to={''}>女性活躍</BaseInternalLink>
                <BaseInternalLink to={''}>第二新卒歓迎</BaseInternalLink>
                <BaseInternalLink to={''}>第二新卒歓迎</BaseInternalLink>
                <BaseInternalLink to={''}>第二新卒歓迎</BaseInternalLink>
                <BaseInternalLink to={''}>在宅ワーク</BaseInternalLink>
                <BaseInternalLink to={''}>完全週休2日制</BaseInternalLink>
                <BaseInternalLink to={''}>服装自由</BaseInternalLink>
                <BaseInternalLink to={''}>女性活躍</BaseInternalLink>
                <BaseInternalLink to={''}>フレックス勤務</BaseInternalLink>
                <BaseInternalLink to={''}>土日祝休み</BaseInternalLink>
              </BaseFlexBox>
            </BaseCard>
          </BaseSpacing>
          <BaseSpacing top="6xl">
            <BaseSpacing bottom="4xl">
              <BaseFlexBox justifyContent="space-between" alignItems="center">
                <BaseHeadingWithBar>仕事探しに役立つ記事</BaseHeadingWithBar>
                <BaseMoreLink to={'/articles'} />
              </BaseFlexBox>
            </BaseSpacing>
            <BaseSlider itemLength={4}>
              {articles.map((article) => (
                <BaseSliderItem key={article.articleId}>
                  <BaseCard style={{ padding: '0', overflow: 'hidden' }}>
                    <BaseImage src={Image} />
                    <BaseSpacing top="lg" bottom="lg" left="lg" right="lg">
                      <BaseTypography tag="p">{article.articleTitle}</BaseTypography>
                    </BaseSpacing>
                  </BaseCard>
                </BaseSliderItem>
              ))}
            </BaseSlider>
          </BaseSpacing>
          <BaseSpacing top="6xl">
            <BaseSpacing bottom="4xl">
              <BaseFlexBox justifyContent="space-between" alignItems="center">
                <BaseHeadingWithBar>イベント・セミナー</BaseHeadingWithBar>
                <BaseMoreLink to={'/events'} />
              </BaseFlexBox>
            </BaseSpacing>
            <BaseSlider itemLength={4}>
              {events.map((event) => (
                <BaseSliderItem key={event.eventId}>
                  <BaseCard style={{ padding: '0', overflow: 'hidden' }}>
                    <BaseImage src={Image} />
                    <BaseSpacing top="lg" bottom="lg" left="lg" right="lg">
                      <BaseTypography tag="p">{event.eventTitle}</BaseTypography>
                    </BaseSpacing>
                  </BaseCard>
                </BaseSliderItem>
              ))}
            </BaseSlider>
          </BaseSpacing>
          <BaseModal isOpen={isModalOpen} onClose={toggleModal}>
            <BaseSpacing bottom="4xl">
              <BaseModalTitle>勤務地</BaseModalTitle>
            </BaseSpacing>
            <BaseGridLayout col={2} gapX="4xl">
              <BaseGridItem col={1}>
                <BaseTypography tag="p">地域を選択</BaseTypography>
                <BaseSelectorList>
                  {regions.map((region) => (
                    <BaseSelectorItem
                      onClick={() => handleRegionClick(region.regionName)}
                      isSelected={selectedRegion === region.regionName}
                      key={region.regionName}
                    >
                      {region.regionName}
                    </BaseSelectorItem>
                  ))}
                </BaseSelectorList>
              </BaseGridItem>
              <BaseGridItem col={1}>
                <BaseTypography tag="p">都道府県を選択</BaseTypography>
                <BaseSelectorList>
                  {selectedPrefecture.map((prefecture: string) => (
                    <BaseSelectorItem
                      key={prefecture}
                      onClick={() => handlePrefectureClick(prefecture)}
                      isSelected={clickedPrefecture === prefecture}
                    >
                      {prefecture}
                    </BaseSelectorItem>
                  ))}
                </BaseSelectorList>
              </BaseGridItem>
            </BaseGridLayout>
            <BaseSpacing top="5xl">
              <BaseFlexBox gap="4xl" justifyContent="center">
                <BaseButton
                  variant="outlined"
                  onClick={handleReset}
                  style={{ width: '100%', maxWidth: '160px' }}
                >
                  リセット
                </BaseButton>
                <BaseButton onClick={handleDone} style={{ width: '100%', maxWidth: '160px' }}>
                  決定
                </BaseButton>
              </BaseFlexBox>
            </BaseSpacing>
          </BaseModal>
          <BaseModal
            isOpen={isFavoriteModalOpen}
            onClose={() => handleFavoriteAction()}
            maxWidth={448}
          >
            <BaseModalTitle>ログインして続ける</BaseModalTitle>
            <BaseSpacing top="4xl">
              <BaseButton onClick={() => navigate('/login')}>ログイン</BaseButton>
            </BaseSpacing>
            <BaseSpacing top="xl">
              <BaseFlexBox justifyContent="center" alignItems="center">
                <BaseInternalLink to={'/signup'}>新規登録はこちら</BaseInternalLink>
              </BaseFlexBox>
            </BaseSpacing>
          </BaseModal>
        </>
      )}
    </>
  )
}

export default Top
