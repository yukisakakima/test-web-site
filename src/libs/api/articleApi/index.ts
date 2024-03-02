import httpClient from '../../httpClient'

// 記事情報の型定義
export interface Article {
  articleId: string
  articleTitle: string
  thumbnail: string
  articleDetail: string
  publicDate: string
  updateDate: string
}

// APIレスポンスの型定義
interface ArticlesResponse {
  result: {
    items: Article[]
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

export const fetchArticles = async (
  //APIリクエストに渡すクエリパラメータ
  page: number = 1, //取得するページ番号
  offset: number = 50, //各ページでスキップする記事の数
  limit: number = 10 //1ページあたりの記事の最大数

  //戻り値の型定義
): Promise<ArticlesResponse> => {
  try {
    const response = await httpClient.get<ArticlesResponse>('/articles', {
      params: { page, offset, limit },
    })
    //APIからの応答からdataだけを取り出す
    return response.data
  } catch (error) {
    console.error('記事情報の取得に失敗しました', error)
    throw error
  }
}
