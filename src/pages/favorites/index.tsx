import { BaseHeadingWithBar, BaseSpacing } from '@/components/bases'
import ThePageLoading from '@/components/layouts/ThePageLoading'
import { FC, useState, useEffect } from 'react'

const FavoritesPage: FC = () => {
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
          <BaseSpacing bottom="4xl">
            <BaseHeadingWithBar>気になる求人（件）</BaseHeadingWithBar>
          </BaseSpacing>
        </>
      )}
    </>
  )
}

export default FavoritesPage
