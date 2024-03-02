import httpClient from '../../httpClient'

// イベント情報の型定義
export interface Event {
  eventId: string
  eventTitle: string
  eventDetail: string
  thumbnail: string
  publicDate: string
  updateDate: string
}

// APIレスポンスの型定義を更新
interface EventsResponse {
  result: {
    items: Event[]
    pagination: {
      total: number
      page: number
      offset: number
      isPrevActive: boolean
      isNextActive: boolean
    }
  }
  //API応答のステータス（成功かどうか）
  status: boolean
}

// イベント情報取得関数

//戻り値の型定義
export const fetchEvents = async (): Promise<EventsResponse> => {
  try {
    const response = await httpClient.get<EventsResponse>('/events')
    return response.data
  } catch (error) {
    console.error('イベント情報の取得に失敗しました', error)
    throw error
  }
}
