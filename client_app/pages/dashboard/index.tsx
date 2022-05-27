import React from 'react';
import { useMe } from '../../context/AuthContext';

export default function Dashboard() {
  const { user, refetch } = useMe();

  console.log(user);

  return (
    <div className="relative px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
      <div className="absolute inset-x-0 h-80">
        <div className="absolute inset-y-0 z-0 w-full h-full bg-[#F4F8FB] lg:w-full" />
      </div>
      <div className="pt-16 lg:pt-20">
        <div className="relative">
          <div className="grid gap-12 row-gap-8 lg:grid-cols-8">
            <div className="col-span-5">
              <h1 className="text-dark text-3xl font-head font-semibold flex items-center mb-8">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
                  <svg
                    className="w-8 h-8 text-white"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <span className="ml-4">Order Summary</span>
              </h1>
              <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-5 duration-300 transform bg-white border shadow-sm hover:-translate-y-2 flex justify-between items-center rounded-xl">
                  <div className="">
                    <h6 className="mb-2 font-semibold leading-5">
                      Total Sales
                    </h6>
                    <p className="text-sm text-gray-900">$460.00</p>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                    <svg
                      className="w-10 h-10 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-5 duration-300 transform bg-white border shadow-sm hover:-translate-y-2 flex justify-between items-center rounded-xl">
                  <div className="">
                    <h6 className="mb-2 font-semibold leading-5">
                      Total Revenue
                    </h6>
                    <p className="text-sm text-gray-900">$460.00</p>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                    <svg
                      className="w-10 h-10 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-5 duration-300 transform bg-white border shadow-sm hover:-translate-y-2 flex justify-between items-center rounded-xl">
                  <div className="">
                    <h6 className="mb-2 font-semibold leading-5">
                      Total Sales
                    </h6>
                    <p className="text-sm text-gray-900">$460.00</p>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                    <svg
                      className="w-10 h-10 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <h1 className="text-dark text-3xl font-head font-semibold flex items-center mb-8">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
                  <svg
                    className="w-8 h-8 text-white"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <span className="ml-4">Payme</span>
              </h1>
              <div className="p-5 rounded-xl bg-white shadow-sm text-[#9e9e9e]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                debitis, aut temporibus nisi beatae repellat quod corrupti non
                quas delectus similique.
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-16">
          <h1 className="text-dark text-3xl font-head font-semibold flex items-center mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
              <svg
                className="w-8 h-8 text-white"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <span className="ml-4">Orders</span>
          </h1>
          <div className="p-6 rounded-xl bg-white shadow">
            <div className="container mx-auto w-full">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Order ID
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Role
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Created at
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          status
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              Jean marc
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Admin
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            12/09/2020
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">active</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              Jean marc
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Admin
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            12/09/2020
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">active</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              Jean marc
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Admin
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            12/09/2020
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">active</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
                      >
                        <svg
                          width="9"
                          fill="currentColor"
                          height="8"
                          className=""
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 "
                      >
                        1
                      </button>
                      <button
                        type="button"
                        className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                      >
                        2
                      </button>
                      <button
                        type="button"
                        className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100"
                      >
                        3
                      </button>
                      <button
                        type="button"
                        className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                      >
                        4
                      </button>
                      <button
                        type="button"
                        className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
                      >
                        <svg
                          width="9"
                          fill="currentColor"
                          height="8"
                          className=""
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">The doctor said</h6>
              <p className="text-sm text-gray-900">
                Baseball ipsum dolor sit amet cellar rubber win hack tossed.
                Slugging catcher slide bench league, left fielder nubber.
              </p>
            </div>
            <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">That is the true</h6>
              <p className="text-sm text-gray-900">
                We meet at one of those defining moments - a moment when our
                nation is at war, our economy is in turmoil, and the American
                promise has been threatened once more.
              </p>
            </div>
            <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Those options</h6>
              <p className="text-sm text-gray-900">
                Strategic high-level 30,000 ft view. Drill down re-inventing the
                wheel at the end of the day but curate imagineer, or to be
                inspired is to become creative.
              </p>
            </div>
            <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Swearem ipsum</h6>
              <p className="text-sm text-gray-900">
                Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et.
                Vestibulum placerat purus ut nibh aliquam fringilla. Aenean et
                tortor diam, id tempor elit.
              </p>
            </div>
            <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Webtwo ipsum</h6>
              <p className="text-sm text-gray-900">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
                perspiciatis unde omnis.
              </p>
            </div>
            <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Lookout flogging</h6>
              <p className="text-sm text-gray-900">
                Flatland! Hypatia. Galaxies Orion's sword globular star cluster?
                Light years quasar as a patch of light gathered by gravity
                Vangelis radio telescope.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
