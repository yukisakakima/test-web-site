// import { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { Article } from '@/libs/api/articleApi'
// import { Job } from '@/libs/api/jobApi'
// import { LocationData } from '@/libs/api/jobApi'
// import { Occupation } from '@/libs/api/occupationApi'
// import { updateFavoriteStatus } from '@/libs/api/favoriteApi'
// import { onToastOpen } from '@/libs/store/slice/toastSlice'
// import { fetchJobs } from '@/libs/api/jobApi'
// import { fetchArticles } from '@/libs/api/articleApi'
// import { fetchEvents } from '@/libs/api/eventApi'
// import { fetchOccupation } from '@/libs/api/occupationApi'
// import { fetchFavoriteJobs } from '@/libs/api/favoriteApi'

// export const useTop = () => {
//   const dispatch = useDispatch()

//   const navigate = useNavigate()

//   const [occupation, setOccupation] = useState<Occupation[]>([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [scrollbarWidth, setScrollbarWidth] = useState(0)
//   // モーダルの表示状態を管理するステート
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   // 各求人の「気になる」状態を管理するステート
//   const [favorites, setFavorites] = useState<{ [jobId: string]: boolean }>({})
//   //未ログイン時の気になるボタンを押した時のモーダルの出現
//   const [isFavoriteModalOpen, setIsFavoriteModalOpen] = useState(false)
//   // selectorのvalue
//   const [selector, setSelector] = useState<string | null>(null)

//   // 地方と都道府県の選択状態を管理するステート
//   const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
//   const [selectedPrefecture, setSelectedPrefecture] = useState<string[]>([])
//   // クリックされた都道府県
//   const [clickedPrefecture, setClickedPrefecture] = useState<string | null>(null)
//   // 記事情報を格納するステート
//   const [articles, setArticles] = useState<Article[]>([])
//   // 新着求人情報を格納するステート
//   const [jobs, setJobs] = useState<Job[]>([])
//   // 地方と県のデータを格納するステート
//   const [regions, setRegions] = useState<LocationData[]>([])
//   // イベント情報を格納するステート
//   const [events, setEvents] = useState<Event[]>([])

//   //login状態を取得
//   // const isLogin = useSelector((state: RootState) => state.auth.isLogin)

//   // スクロールバーの幅を計算する関数
//   const ScrollbarWidth = () => {
//     const width = window.innerWidth - document.documentElement.clientWidth
//     setScrollbarWidth(width)
//   }

//   // モーダルを開閉する関数
//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen)
//   }

//   //リセットボタン
//   const handleReset = () => {
//     setIsModalOpen(false)
//     setSelectedRegion(null)
//     setClickedPrefecture(null)
//     setSelector(null)
//   }

//   //! モーダルを開閉する関数を作ってたはずが、関数の役割を超えてしまっている！！！！！
//   //! 元の関数名はtoggleFavoriteModal
//   const handleFavoriteAction = async (jobId?: string) => {
//     if (!jobId) return
//     if (favorites[jobId]) {
//       // 追加済みの場合、気になる一覧画面へ遷移
//       navigate('/favorites')
//       return
//     }

//     // 未追加の場合、気になる求人に追加
//     try {
//       const response = await updateFavoriteStatus(jobId, true)

//       if (!response.status) {
//         // トースト通知を表示
//         dispatch(
//           onToastOpen({
//             status: 'error',
//             message: 'お気に入りの更新に失敗しました。',
//           })
//         )
//         return
//       }

//       // APIの応答に基づいて状態を更新
//       setJobs((prevJobs) =>
//         prevJobs.map((job) => {
//           if (job.jobId === jobId) {
//             return { ...job, isFavorite: response.result.isFavorite } // 更新されたお気に入り状態を設定
//           }
//           return job
//         })
//       )
//       // トースト通知を表示
//       dispatch(
//         onToastOpen({
//           status: 'success',
//           message: 'お気に入りに追加しました。',
//         })
//       )
//     } catch (error) {
//       console.error('お気に入りの更新に失敗しました', error)
//       // エラー時のトースト通知
//       dispatch(
//         onToastOpen({
//           status: 'error',
//           message: 'お気に入りの更新に失敗しました。',
//         })
//       )
//     }
//   }

//   //地域がクリックされた時の処理
//   const handleRegionClick = (regionName: string) => {
//     // 選択された地域名を設定
//     setSelectedRegion(regionName)

//     // 選択された地域に対応する地域データを検索
//     const selectedRegionData = regions.find((region) => region.regionName === regionName)

//     if (selectedRegionData) {
//       // 地域データが見つかった場合、その地域の都道府県名のリストを設定
//       const prefectureNames = selectedRegionData.prefectures.map(
//         (prefecture) => prefecture.prefectureName
//       )
//       setSelectedPrefecture(prefectureNames)
//     } else {
//       // 地域データが見つからない場合、都道府県のリストを空に設定
//       setSelectedPrefecture([])
//     }

//     // 都道府県の選択をリセット
//     setClickedPrefecture(null)
//   }

//   const handlePrefectureClick = (prefectureName: string) => {
//     setClickedPrefecture(prefectureName)
//   }

//   const handleDone = () => {
//     setIsModalOpen(false)
//     setSelector(clickedPrefecture) // 選択された都道府県をselectorに設定
//   }

//   useEffect(() => {
//     // コンポーネントがマウントされたときに実行
//     ScrollbarWidth()

//     // ウィンドウがリサイズされたときに実行
//     window.addEventListener('resize', ScrollbarWidth)

//     // クリーンアップ関数
//     return () => window.removeEventListener('resize', ScrollbarWidth)
//   }, [])

//   useEffect(() => {
//     const loadJobs = async () => {
//       try {
//         setIsLoading(true)
//         const data = await fetchJobs()
//         setJobs(data.result.items)
//       } catch (error) {
//         console.error('新着求人情報の読み込みに失敗しました', error)
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     loadJobs()
//   }, [])

//   useEffect(() => {
//     //! データ読み込みのシミュレーション
//     setTimeout(() => {
//       setIsLoading(false) //! ここでデータが読み込まれたと仮定
//     }, 3000) //! 3秒後に読み込み完了
//   }, [])

//   useEffect(() => {
//     const loadArticles = async () => {
//       try {
//         setIsLoading(true)
//         const data = await fetchArticles()
//         console.log(data.result.items)
//         setArticles(data.result.items)
//       } catch (error) {
//         console.error('記事情報の読み込みに失敗しました', error)
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     loadArticles()
//   }, [])

//   // これは何しているよ
//   useEffect(() => {
//     const loadEvents = async () => {
//       try {
//         const eventData = await fetchEvents()
//         setEvents(eventData.result.items)
//       } catch (error) {
//         console.error('イベント情報の読み込みに失敗しました', error)
//       }
//     }

//     loadEvents()
//   }, [])

//   useEffect(() => {
//     const loadRegions = async () => {
//       try {
//         setIsLoading(true)
//         const data = await fetchJobs()
//         setRegions(data.result.aggregations.locations) // 地方と県のデータを設定
//         // ... その他のデータの設定 ...
//       } catch (error) {
//         console.error('新着求人情報の読み込みに失敗しました', error)
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     loadRegions()
//   }, [])

//   useEffect(() => {
//     // このuseEffectフックは、コンポーネントがマウントされた時に一度だけ実行

//     // お気に入り状態の初期取得を行う非同期関数
//     const fetchFavoriteJobsData = async () => {
//       try {
//         // fetchFavoriteJobs関数を呼び出して、お気に入り求人のデータを取得
//         const data = await fetchFavoriteJobs()

//         // 取得したデータから、各求人のお気に入り状態を抽出し、
//         // キーが求人ID、値がお気に入り状態（true/false）のオブジェクトを作成
//         const favoriteStatus = data.result.items.reduce(
//           (acc: { [key: string]: boolean }, job: Job) => {
//             acc[job.jobId] = job.isFavorite // 各求人のIDをキーとして、お気に入り状態を設定
//             return acc // 累積オブジェクトを返す
//           },
//           {} // 初期値は空のオブジェクト
//         )

//         // 作成したお気に入り状態のオブジェクトをステートに設定
//         setFavorites(favoriteStatus)
//       } catch (error) {
//         // データ取得中にエラーが発生した場合、エラーをコンソールに出力
//         console.error('お気に入り情報の取得に失敗しました', error)
//       }
//     }

//     // 定義した非同期関数を実行
//     // eslint-disable-next-line no-constant-condition
//     if (false) {
//       fetchFavoriteJobsData()
//     }
//   }, []) // 空の依存配列を指定して、コンポーネントのマウント時にのみ実行

//   useEffect(() => {
//     const loadOccupation = async () => {
//       try {
//         setIsLoading(true)
//         const data = await fetchOccupation()
//         setOccupation(data) //! あとで修正するかも
//       } catch (error) {
//         console.error('分類・職種の読み込みに失敗しました', error)
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     loadOccupation()
//   }, [])

//   return {
//     isFavoriteModalOpen,
//     setIsFavoriteModalOpen,
//     selector,
//     selectedRegion,
//     selectedPrefecture,
//     occupation,
//     isLoading,
//     scrollbarWidth,
//     isModalOpen,
//     toggleModal,
//     favorites,
//     articles,
//     jobs,
//     regions,
//     events,
//     handleReset,
//     handleFavoriteAction,
//     handleRegionClick,
//     handlePrefectureClick,
//     handleDone,
//     // その他必要な変数や関数...
//   }
// }
