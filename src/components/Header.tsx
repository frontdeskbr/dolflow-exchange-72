import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* Hamburger Toggle BTN */}
          <button
            aria-controls="sidebar"
            aria-expanded="false"
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span className="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white"></span>
                <span className="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white"></span>
                <span className="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white"></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span className="absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white"></span>
                <span className="delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white"></span>
              </span>
            </span>
          </button>
          {/* Hamburger Toggle BTN */}

          <a className="block flex-shrink-0 lg:hidden" href="index.html">
            <img src="/images/logo/logo-icon.svg" alt="Logo" />
          </a>
        </div>

        <div className="hidden sm:block">
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div className="relative">
              <button className="absolute left-0 top-1/2 -translate-y-1/2">
                <svg
                  className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                    fill=""
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                    fill=""
                  />
                </svg>
              </button>

              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent pl-9 pr-4 text-black focus:outline-none dark:text-white xl:w-125"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* Dark Mode Toggler */}
            <li>
              <label
                htmlFor="darkMode"
                className="relative m-0 block h-7.5 w-14 rounded-full bg-stroke p-0 dark:bg-[#5A616B]"
              >
                <input
                  type="checkbox"
                  id="darkMode"
                  className="dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
                />
                <span className="absolute left-[3px] top-1/2 flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear dark:translate-x-[2.625rem]">
                  <span className="dark:hidden">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.99998 11.9999C10.2091 11.9999 12 10.2091 12 7.99993C12 5.79075 10.2091 3.99993 7.99998 3.99993C5.79081 3.99993 3.99998 5.79075 3.99998 7.99993C3.99998 10.2091 5.79081 11.9999 7.99998 11.9999Z"
                        fill="#969AA1"
                      />
                      <path
                        d="M8.00002 15.3125C7.63127 15.3125 7.33127 15.0625 7.33127 14.6875V13.6875C7.33127 13.3125 7.58127 13.0625 8.00002 13.0625C8.41877 13.0625 8.66877 13.3125 8.66877 13.6875V14.6875C8.66877 15.0625 8.36877 15.3125 8.00002 15.3125Z"
                        fill="#969AA1"
                      />
                      <path
                        d="M8.00002 3.9375C7.63127 3.9375 7.33127 3.6875 7.33127 3.3125V2.3125C7.33127 1.9375 7.58127 1.6875 8.00002 1.6875C8.41877 1.6875 8.66877 1.9375 8.66877 2.3125V3.3125C8.66877 3.6875 8.36877 3.9375 8.00002 3.9375Z"
                        fill="#969AA1"
                      />
                      <path
                        d="M13.25 8.6875H12.25C11.875 8.6875 11.625 8.4375 11.625 8.0625C11.625 7.6875 11.875 7.4375 12.25 7.4375H13.25C13.625 7.4375 13.875 7.6875 13.875 8.0625C13.875 8.4375 13.625 8.6875 13.25 8.6875Z"
                        fill="#969AA1"
                      />
                      <path
                        d="M4.25 8.6875H3.25C2.875 8.6875 2.625 8.4375 2.625 8.0625C2.625 7.6875 2.875 7.4375 3.25 7.4375H4.25C4.625 7.4375 4.875 7.6875 4.875 8.0625C4.875 8.4375 4.625 8.6875 4.25 8.6875Z"
                        fill="#969AA1"
                      />
                      <path
                        d="M11.4687 12.7187C11.25 12.7187 11.0312 12.6562 10.875 12.5C10.5625 12.1875 10.5625 11.6875 10.875 11.375L11.5625 10.6875C11.875 10.375 12.375 10.375 12.6875 10.6875C13 11 13 11.5 12.6875 11.8125L12 12.5C11.8437 12.6562 11.625 12.7187 11.4687 12.7187Z"
                        fill="#969AA1"
                      />
                      <path
                        d="M4.53125 5.28125C4.3125 5.28125 4.09375 5.21875 3.9375 5.0625C3.625 4.75 3.625 4.25 3.9375 3.9375L4.625 3.25C4.9375 2.9375 5.4375 2.9375 5.75 3.25C6.0625 3.5625 6.0625 4.0625 5.75 4.375L5.0625 5.0625C4.90625 5.21875 4.6875 5.28125 4.53125 5.28125Z"
                        fill="#969AA1"
                      />
                      <path
                        d="M12 12.5C11.8437 12.6562 11.625 12.7187 11.4687 12.7187C11.25 12.7187 11.0312 12.6562 10.875 12.5C10.5625 12.1875 10.5625 11.6875 10.875 11.375L11.5625 10.6875C11.875 10.375 12.375 10.375 12.6875 10.6875C13 11 13 11.5 12.6875 11.8125L12 12.5Z"
                        fill="#969AA1"
                      />
                      <path
                        d="M4.53125 5.28125C4.3125 5.28125 4.09375 5.21875 3.9375 5.0625C3.625 4.75 3.625 4.25 3.9375 3.9375L4.625 3.25C4.9375 2.9375 5.4375 2.9375 5.75 3.25C6.0625 3.5625 6.0625 4.0625 5.75 4.375L5.0625 5.0625C4.90625 5.21875 4.6875 5.28125 4.53125 5.28125Z"
                        fill="#969AA1"
                      />
                    </svg>
                  </span>
                  <span className="hidden dark:inline-block">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.3533 10.62C14.2466 10.44 13.9533 10.16 13.1533 10.2933C12.92 10.3333 12.6866 10.3533 12.4533 10.3533C9.88659 10.3533 7.67993 8.77333 6.66659 6.45333C5.87993 4.69333 6.24659 2.6 7.52659 1.32C8.09993 0.746667 8.24659 0.346667 8.09993 0.0533333C7.95326 -0.24 7.48659 -0.0266667 7.13326 0.04C3.33326 0.893333 0.613262 4.22667 0.613262 8.16C0.613262 12.8267 4.38659 16.6 9.05326 16.6C12.0266 16.6 14.6933 15.0267 15.9999 12.6667C16.2399 12.2267 16.0799 11.7067 15.5466 11.28C15.2533 11.08 14.9066 10.9067 14.3533 10.62Z"
                        fill="#969AA1"
                      />
                    </svg>
                  </span>
                </span>
              </label>
            </li>
            {/* Dark Mode Toggler */}

            {/* Notification Menu Area */}
            <li className="relative">
              <a
                className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
                href="#"
              >
                <span className="absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1">
                  <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
                </span>

                <svg
                  className="fill-current duration-300 ease-in-out"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1999 14.9343L15.6374 14.0624C15.5249 13.8937 15.4687 13.7249 15.4687 13.528V7.67803C15.4687 6.01865 14.7655 4.47178 13.4718 3.31865C12.4312 2.39053 11.0812 1.7999 9.64678 1.6874V1.1249C9.64678 0.787402 9.36553 0.478027 8.9999 0.478027C8.63428 0.478027 8.35303 0.759277 8.35303 1.1249V1.65928C8.29678 1.65928 8.24053 1.65928 8.18428 1.6874C4.92178 2.05303 2.4749 4.66865 2.4749 7.79053V13.528C2.44678 13.8093 2.39053 13.9499 2.33428 14.0343L1.7999 14.9343C1.63115 15.2155 1.63115 15.553 1.7999 15.8343C1.96865 16.0874 2.2499 16.2562 2.55928 16.2562H8.38115V16.8749C8.38115 17.2124 8.6624 17.5218 9.02803 17.5218C9.36553 17.5218 9.67490 17.2405 9.67490 16.8749V16.2562H15.4687C15.778 16.2562 16.0593 16.0874 16.228 15.8343C16.3968 15.553 16.3968 15.2155 16.1999 14.9343ZM3.23428 14.9905L3.43115 14.653C3.5999 14.3718 3.68428 14.0343 3.74053 13.6405V7.79053C3.74053 5.31553 5.70928 3.23428 8.3249 2.95303C8.35303 2.95303 8.38115 2.95303 8.4374 2.95303C10.9843 2.95303 13.1624 5.1874 13.1624 7.79053V13.528C13.1624 13.9499 13.2468 14.3437 13.4155 14.653L13.6124 14.9905H3.23428Z"
                    fill=""
                  />
                </svg>
              </a>
            </li>
            {/* Notification Menu Area */}

            {/* Chat Notification Area */}
            <li className="relative">
              <a
                className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
                href="#"
              >
                <svg
                  className="fill-current duration-300 ease-in-out"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9688 1.57495H7.03135C3.43135 1.57495 0.506348 4.41558 0.506348 7.90308C0.506348 11.3906 3.2781 14.2312 6.87810 14.2312H7.8281V16.8094C7.8281 17.1469 8.10935 17.4562 8.4751 17.4562C8.84085 17.4562 9.1221 17.175 9.1221 16.8094V14.2312H10.9688C14.5688 14.2312 17.4938 11.3906 17.4938 7.90308C17.4938 4.41558 14.5688 1.57495 10.9688 1.57495ZM10.9688 12.9375H9.1221C8.75635 12.9375 8.4751 13.2187 8.4751 13.5844V15.1875V13.5844C8.4751 13.2187 8.19385 12.9375 7.8281 12.9375H6.8781C4.02185 12.9375 1.74385 10.8 1.74385 7.9312C1.74385 5.0625 4.02185 2.925 6.8781 2.925H10.9688C13.8251 2.925 16.1031 5.0625 16.1031 7.9312C16.1031 10.8 13.8251 12.9375 10.9688 12.9375Z"
                    fill=""
                  />
                  <path
                    d="M5.42812 7.28442C5.04687 7.28442 4.73437 7.59692 4.73437 7.9501C4.73437 8.30327 5.04687 8.61577 5.42812 8.61577C5.80937 8.61577 6.12187 8.30327 6.12187 7.9501C6.12187 7.59692 5.80937 7.28442 5.42812 7.28442Z"
                    fill=""
                  />
                  <path
                    d="M9.00015 7.28442C8.6189 7.28442 8.3064 7.59692 8.3064 7.9501C8.3064 8.30327 8.6189 8.61577 9.00015 8.61577C9.3814 8.61577 9.6939 8.30327 9.6939 7.9501C9.6939 7.59692 9.3814 7.28442 9.00015 7.28442Z"
                    fill=""
                  />
                  <path
                    d="M12.5719 7.28442C12.1906 7.28442 11.8781 7.59692 11.8781 7.9501C11.8781 8.30327 12.1906 8.61577 12.5719 8.61577C12.9531 8.61577 13.2656 8.30327 13.2656 7.9501C13.2656 7.59692 12.9531 7.28442 12.5719 7.28442Z"
                    fill=""
                  />
                </svg>
              </a>
            </li>
            {/* Chat Notification Area */}
          </ul>

          {/* User Area */}
          <div className="relative">
            <a className="flex items-center gap-4" href="#">
              <span className="hidden text-right lg:block">
                <span className="block text-sm font-medium text-black dark:text-white">
                  Thomas Anree
                </span>
                <span className="block text-xs">UX Designer</span>
              </span>

              <span className="h-12 w-12 rounded-full">
                <img src="/images/user/user-01.jpg" alt="User" />
              </span>

              <svg
                className="hidden fill-current sm:block"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                  fill=""
                />
              </svg>
            </a>
          </div>
          {/* User Area */}
        </div>
      </div>
    </header>
  )
}

export default Header