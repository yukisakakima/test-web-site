import httpClient from '@/libs/httpClient'

// 気になる求人情報一覧取得関数
export const fetchFavoriteJobs = async () => {
  try {
    const response = await httpClient.get('/jobs/favorite')
    return response.data
  } catch (error) {
    console.error('お気に入り求人の取得に失敗しました', error)
    throw error
  }
}

// 気になる求人登録関数(addに変えた方がいい？)
export const updateFavoriteStatus = async (jobId: string, isFavorite: boolean) => {
  // ここで isFavorite を使用しているか確認
  try {
    const response = await httpClient.post(`/jobs/favorite/${jobId}`, { isFavorite })
    return response.data
  } catch (error) {
    console.error('お気に入りの更新に失敗しました', error)
    throw error
  }
}

// 気になる求人削除関数
export const removeFavoriteJob = async (jobId: string) => {
  try {
    await httpClient.post(`/jobs/favorite`, { jobId })
  } catch (error) {
    console.error('お気に入り求人の削除に失敗しました', error)
    throw error
  }
}
