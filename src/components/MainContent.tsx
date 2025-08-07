import React from 'react'
import StatsCards from './StatsCards'
import Charts from './Charts'

const MainContent: React.FC = () => {
  return (
    <main>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        {/* Breadcrumb */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-title-md2 font-semibold text-black dark:text-white">
            Dashboard
          </h2>

          <nav>
            <ol className="flex items-center gap-2">
              <li>
                <a className="font-medium" href="index.html">
                  Dashboard /
                </a>
              </li>
              <li className="font-medium text-primary">eCommerce</li>
            </ol>
          </nav>
        </div>
        {/* Breadcrumb */}

        <StatsCards />
        <Charts />
      </div>
    </main>
  )
}

export default MainContent