import httpClient from '../../httpClient'

//*NOTE:新着求人の情報を全て型定義
export interface Job {
  jobId: string
  companyName: string
  jobDescription: string
  jobImage: string
  publicationStatus: string
  publicationPeriod: {
    startDate: string
    endDate: string
  }
  isFavorite: boolean
  applicationStatus: string
  jobResponsibilities: string
  targetCandidates: string
  employmentId: string
  employmentName: string
  discerningConditions: {
    discerningConditionId: string
    discerningConditionName: string
  }[]
  jobLocationText: string
  salary: string
  salaryIncreaseBonus: string
  allowances: string
  holidays: string
  employeeBenefits: string
  otherAllowances: string
}

//TODO:切り分けた方がいいかも
export interface LocationData {
  regionName: string
  prefectures: {
    prefectureName: string
  }[]
}

//*NOTE:APIレスポンスの型定義を更新
interface JobsResponse {
  result: {
    items: Job[]
    pagination: {
      total: number
      page: number
      offset: number
      isPrevActive: boolean
      isNextActive: boolean
    }
    aggregations: {
      locations: LocationData[]
    }
  }
  status: boolean
}

//*NOTE:新着求人の情報取得関数
export const fetchJobs = async (): Promise<JobsResponse> => {
  try {
    //*NOTE:APIから新着求人の情報を取得
    const response = await httpClient.get<JobsResponse>('/jobs')
    return response.data
  } catch (error) {
    //*NOTE:エラー発生時の処理
    console.error('新着求人の取得に失敗しました', error)
    throw error
  }
}
