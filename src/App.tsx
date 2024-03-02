import { Routes, Route } from 'react-router-dom'
import { TheDefaultLayout } from './components/layouts'
import Top from '@/pages/top'
import Login from '@/pages/login'
import JobsSearchResults from '@/pages/jobsSearchResults'
import Favorites from '@/pages/favorites'

const App = () => {
  return (
    <TheDefaultLayout>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs/search-results" element={<JobsSearchResults />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </TheDefaultLayout>
  )
}

export default App
