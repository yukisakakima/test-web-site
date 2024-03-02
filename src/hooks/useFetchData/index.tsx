// import { useState, useEffect } from 'react'

// export default function useFetchData<T>(
//   fetchFunction: () => Promise<T[]>,
//   dependencies: any[] = []
// ) {
//   const [data, setData] = useState<T[]>([])
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true)
//         const result = await fetchFunction()
//         setData(result)
//       } catch (error) {
//         console.error('データの読み込みに失敗しました', error)
//       } finally {
//         setIsLoading(false)
//       }
//     }
//     fetchData()
//   }, dependencies)

//   return { data, isLoading }
// }
