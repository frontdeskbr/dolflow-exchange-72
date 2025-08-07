import React from 'react'

const Charts: React.FC = () => {
  return (
    <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
      {/* Chart One */}
      <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
        <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
          <div className="flex w-full flex-wrap gap-3 sm:gap-5">
            <div className="flex min-w-47.5">
              <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
                <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
              </span>
              <div className="w-full">
                <p className="font-semibold text-primary">Total Revenue</p>
                <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
              </div>
            </div>
            <div className="flex min-w-47.5">
              <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
                <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
              </span>
              <div className="w-full">
                <p className="font-semibold text-secondary">Total Sales</p>
                <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
              </div>
            </div>
          </div>
          <div className="flex w-full max-w-45 justify-end">
            <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
              <button className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
                Day
              </button>
              <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
                Week
              </button>
              <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
                Month
              </button>
            </div>
          </div>
        </div>

        <div>
          <div id="chartOne" className="ml-5"></div>
        </div>
      </div>
      {/* Chart One */}

      {/* Chart Two */}
      <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
        <div className="mb-3 justify-between gap-4 sm:flex">
          <div>
            <h5 className="text-xl font-semibold text-black dark:text-white">
              Visitors Analytics
            </h5>
          </div>
          <div>
            <div className="relative z-20 inline-block">
              <select
                name=""
                id=""
                className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
              >
                <option value="">Monthly</option>
                <option value="">Yearly</option>
              </select>
              <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54404 0.911945C0.647241 0.808719 0.809051 0.808719 0.912252 0.896932L4.85431 4.60386C4.92785 4.67741 5.15128 4.67741 5.22482 4.60386L9.16688 0.896932C9.33486 0.713814 9.54404 0.713814 9.71203 0.896932C9.94147 1.12637 9.94147 1.50325 9.71203 1.73268L5.13073 6.25998C4.90129 6.48942 4.52441 6.48942 4.29497 6.25998L-0.285766 1.73268C-0.50153 1.50325 -0.50153 1.12637 -0.285766 0.896932C-0.241939 0.852986 -0.168388 0.823564 -0.109521 0.823564C-0.0506544 0.823564 0.023823 0.852986 0.0677 0.896932L4.85431 4.60386C4.92785 4.67741 5.15128 4.67741 5.22482 4.60386L9.16688 0.896932C9.33486 0.713814 9.54404 0.713814 9.71203 0.896932C9.94147 1.12637 9.94147 1.50325 9.71203 1.73268L5.13073 6.25998C4.90129 6.48942 4.52441 6.48942 4.29497 6.25998L-0.285766 1.73268C-0.50153 1.50325 -0.50153 1.12637 -0.285766 0.896932C-0.241939 0.852986 -0.168388 0.823564 -0.109521 0.823564C-0.0506544 0.823564 0.023823 0.852986 0.0677 0.896932L0.47072 1.08816Z"
                    fill="#637381"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="mb-2">
          <div id="chartTwo" className="mx-auto flex justify-center"></div>
        </div>

        <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
          <div className="w-full px-8 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span>
              <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                <span> Desktop </span>
                <span> 65% </span>
              </p>
            </div>
          </div>
          <div className="w-full px-8 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span>
              <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                <span> Tablet </span>
                <span> 34% </span>
              </p>
            </div>
          </div>
          <div className="w-full px-8 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
              <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                <span> Mobile </span>
                <span> 45% </span>
              </p>
            </div>
          </div>
          <div className="w-full px-8 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
              <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                <span> Unknown </span>
                <span> 12% </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Chart Two */}

      {/* Chart Three */}
      <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
        <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
          <div className="flex w-full flex-wrap gap-3 sm:gap-5">
            <div className="flex min-w-47.5">
              <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
                <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
              </span>
              <div className="w-full">
                <p className="font-semibold text-primary">This Week</p>
                <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
              </div>
            </div>
            <div className="flex min-w-47.5">
              <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
                <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
              </span>
              <div className="w-full">
                <p className="font-semibold text-secondary">Previous Week</p>
                <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
              </div>
            </div>
          </div>
          <div className="flex w-full max-w-45 justify-end">
            <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
              <button className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
                Day
              </button>
              <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
                Week
              </button>
              <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
                Month
              </button>
            </div>
          </div>
        </div>

        <div>
          <div id="chartThree" className="ml-5"></div>
        </div>
      </div>
      {/* Chart Three */}

      {/* Map One */}
      <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
        <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
          Region labels
        </h4>
        <div id="mapOne" className="mapOne map-btn h-90"></div>
      </div>
      {/* Map One */}
    </div>
  )
}

export default Charts