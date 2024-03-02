import httpClient from '@/libs/httpClient'

export interface Occupation {
  classificationId: string
  name: string
  count: number
  items: {
    id: string
    name: string
    count: number
  }[]
}

interface JobsResponse {
  result: {
    aggregations: {
      // 集計データ
      occupations: Occupation[]
    }
    // その他のレスポンスデータ
  }
  status: boolean
}

export const fetchOccupation = async (): Promise<Occupation[]> => {
  try {
    const response = await httpClient.get<JobsResponse>('/jobs')
    return response.data.result.aggregations.occupations //! 後ほど確認
  } catch (error) {
    console.error('職種データの取得に失敗しました', error)
    throw error
  }
}
