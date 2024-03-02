import { useState, useEffect } from 'react'

export default function useScrollbarWidth() {
  const [scrollbarWidth, setScrollbarWidth] = useState(0)

  useEffect(() => {
    // スクロールバーの幅を計算する関数
    const updateWidth = () => {
      const width = window.innerWidth - document.documentElement.clientWidth
      setScrollbarWidth(width)
    }

    // ウィンドウがリサイズされたときに実行
    window.addEventListener('resize', updateWidth)
    // コンポーネントがマウントされたときに実行
    updateWidth()

    // クリーンアップ関数
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return scrollbarWidth
}
