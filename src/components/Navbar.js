import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import {
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
  HomeIcon,
  LogoutIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid';

import Logo from '../svgs/logo';
import UserDropdownMenu from './UserDropdownMenu';
import { UserAuth } from 'src/firebase/context/AuthContext';

const solutions = [
  {
    name: 'Home',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/',
    icon: HomeIcon,
  },
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MainNavbar() {
  const { user, logout } = UserAuth();
  return (
    <header>
      <Popover className="relative bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
          <div className="flex justify-between items-center px-3 py-1 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link className="cursor-pointer" href="/">
                <a rel="noopener">
                  <Logo
                    className="sr-only"
                    fill="#fff"
                    height="60"
                    width="120"
                  />
                </a>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white bg-opacity-25 rounded-lg p-2 inline-flex items-center justify-center text-sky-800 filter backdrop-blur-md border-2 border-sky-800 hover:text-sky-800 hover:bg-gray-100  ">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group
              as="nav"
              className="hidden md:flex lg:space-x-6 space-x-1"
            >
              <Link href="/">
                <a
                  rel="noopener"
                  className="flex bg-white bg-opacity-40 hover:bg-opacity-80 transition duration-500 py-1 px-4 rounded-full text-base font-medium text-white hover:text-gray-600"
                >
                  Home
                </a>
              </Link>
              <Link href="#">
                <a
                  rel="noopener"
                  className="flex bg-white bg-opacity-40 hover:bg-opacity-80 transition duration-500 py-1 px-4 rounded-full text-base font-medium text-white hover:text-gray-600"
                >
                  About us
                </a>
              </Link>
              <Link href="#">
                <a
                  rel="noopener"
                  className="flex bg-white bg-opacity-40 hover:bg-opacity-80 transition duration-500 py-1 px-4 rounded-full text-base font-medium text-white hover:text-gray-600"
                >
                  Blog
                </a>
              </Link>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'bg-opacity-80 text-gray-600' : 'bg-opacity-40',
                        'group inline-flex items-center text-base bg-white bg-opacity-40 hover:bg-opacity-80 transition duration-200 py-1 px-4 rounded-full font-medium text-white hover:text-gray-600'
                      )}
                    >
                      <span>More</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'bg-opacity-80' : 'bg-opacity-40',
                          'ml-2 h-5 w-5 group-hover:text-gray-600 transition duration-200 '
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white bg-opacity-70 rounded-xl filter backdrop-blur-md px-5 py-6 sm:gap-8 sm:p-8">
                            {solutions.map((item) => (
                              <Link href={item.href} key={item.name}>
                                <a
                                  rel="noopener"
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-opacity-80 hover:backdrop-blur-sm"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-gray-800"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              {user ? (
                <UserDropdownMenu user={user} logout={logout} />
              ) : (
                <>
                  <Link href="/login">
                    <a
                      rel="noopener"
                      className="whitespace-nowrap bg-white bg-opacity-40 hover:bg-opacity-80 transition duration-500 py-1 px-4 rounded-full text-base font-medium text-white hover:text-gray-600"
                    >
                      Sign in
                    </a>
                  </Link>
                  <Link href="/register">
                    <a
                      rel="noopener"
                      className="ml-5 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 bg-white bg-opacity-80 hover:bg-opacity-60 transition duration-500 rounded-full text-base font-medium text-gray-600"
                    >
                      Get Started
                      <ChevronRightIcon
                        className={classNames(
                          'text-gray-600 h-5 w-5 group-hover:text-gray-500 '
                        )}
                        aria-hidden="true"
                      />
                    </a>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="flex justify-end absolute top-0 z-20 inset-x-0 p-2 transition duration-200 transform origin-top-right md:hidden"
          >
            <div className="rounded-xl w-3/4 shadow-lg ring-1 ring-black ring-opacity-5 bg-white bg-opacity-70 filter backdrop-blur-md divide-y-2 divide-sky-200">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Logo height="80" fill="#0ea5e9" width="120" />
                  </div>
                  <div className="-mr-2 flex items-center">
                    <Popover.Button className="bg-white rounded-lg dark:bg-slate-900 p-2 inline-flex items-center justify-center text-gray-400 hover:opacity-50 tarnsition duration-200 ">
                      <span className="sr-only">Close menu</span>
                      <XIcon
                        className="h-6 w-6 text-sky-500"
                        aria-hidden="true"
                      />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                          rel="noopener"
                          className="-m-3 p-3 flex justify-center items-center rounded-md hover:bg-gray-50 mobile-hover:active:bg-gray-50 tarnsition duration-150"
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-sky-500"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-lg font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                {/* <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-slate-50 dark:hover:text-gray-400"
                  >
                    Pricing
                  </Link>

                  <Link
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-slate-50 dark:hover:text-gray-400"
                  >
                    Blog
                  </Link>
                  <Link
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-slate-50 dark:hover:text-gray-400"
                  >
                    About
                  </Link>
                  <Link
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-slate-50 dark:hover:text-gray-400"
                  >
                    Help Center
                  </Link>
                </div> */}
                {/* <div className="flex flex-col justify-center items-center"> */}
                <div className="flex justify-center items-center">
                  {user ? (
                    <button
                      type="button"
                      onClick={logout}
                      className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-sky-500 hover:bg-sky-600"
                    >
                      <LogoutIcon
                        className={classNames(
                          'text-white mr-2 h-5 w-5 group-hover:text-gray-500 '
                        )}
                        aria-hidden="true"
                      />
                      Logout
                    </button>
                  ) : (
                    <div className="flex-col">
                      <Link href="/register">
                        <a
                          rel="noopener"
                          className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border rounded-2xl shadow-sm text-base font-medium text-white bg-gradient-to-r from-sky-400 via-cyan-500 to-pink-300 mobile-hover:hover:opacity-75 hover:opacity-75"
                        >
                          Get Started
                          <ChevronRightIcon
                            className={classNames(
                              'text-white ml-1 h-5 w-5 group-hover:text-gray-500 '
                            )}
                            aria-hidden="true"
                          />
                        </a>
                      </Link>
                      <p className="mt-6 text-center text-base font-medium text-gray-500 dark:text-slate-50">
                        Existing user?{' '}
                        <Link href="/login">
                          <a
                            rel="noopener"
                            className="text-sky-600 hover:text-sky-500"
                          >
                            Sign in
                          </a>
                        </Link>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}
