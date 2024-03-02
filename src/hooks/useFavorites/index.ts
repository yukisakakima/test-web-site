// import { useState, useEffect } from 'react'
// import { fetchFavoriteJobs } from '@/libs/api/favoriteApi'

// export default function useFavorites() {
//   // 各求人の「気になる」状態を管理するステート
//   const [favorites, setFavorites] = useState<{ [jobId: string]: boolean }>({})

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
//   return {favoites, setFavorites}
// }
