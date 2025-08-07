import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import MainContent from './MainContent'

const Dashboard: React.FC = () => {
  useEffect(() => {
    // Initialize TailAdmin scripts
    import('../js/index.js').catch(() => {})
  }, [])

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />
        <MainContent />
      </div>
    </div>
  )
}

export default Dashboard