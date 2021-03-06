import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserIcon } from '@heroicons/react/solid';
import { LogoutIcon, DesktopComputerIcon } from '@heroicons/react/outline';

export default function UserDropdownMenu(props) {
  const email = props.user.email;
  const username = props.user.displayName;
  const userImage = props.user.photoURL;
  const logout = props.logout;

  const Loader = ({ src }) => {
    return `${src}`;
  };

  return (
    <div className="text-right z-20">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center items-center rounded-md bg-transparent bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {userImage ? (
              <div>
                <Image
                  className="h-10 w-10 rounded-full hover:opacity-90"
                  src={userImage}
                  loader={Loader}
                  height={40}
                  width={40}
                  alt="User Dropdown Menu"
                />
              </div>
            ) : (
              <div className="bg-white bg-opacity-60 filter backdrop-blur-sm flex justify-center items-center h-9 w-9 hover:bg-gray-500 rounded-full p-1">
                <UserIcon className="h-7 w-7 text-sky-400" />
              </div>
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <div className="text-gray-900 w-full overflow-x-auto text-left rounded-md px-2 py-2 text-sm">
                    <p className="text-xstext-gray-700 text-xs">Signed in as</p>
                    {username ? username : email}
                  </div>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <div>
                    <Link href="/">
                      <a
                        rel="noopener"
                        className={`${
                          active ? 'bg-sky-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <DesktopComputerIcon
                            className="mr-2 h-5 w-5 text-sky-400"
                            aria-hidden="true"
                          />
                        ) : (
                          <DesktopComputerIcon
                            className="mr-2 h-5 w-5 text-sky-400"
                            aria-hidden="true"
                          />
                        )}
                        Dashboard
                      </a>
                    </Link>
                  </div>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logout}
                    className={`${
                      active ? 'bg-sky-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <LogoutIcon
                        className="mr-2 h-5 w-5 text-sky-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <LogoutIcon
                        className="mr-2 h-5 w-5 text-sky-400"
                        aria-hidden="true"
                      />
                    )}
                    logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
