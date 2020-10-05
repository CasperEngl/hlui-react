import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';

function App() {
  return (
    <main className="mx-auto p-8 container">
      <Menu>
        {
          ({ open }) => (
            <>
              <Menu.Button className="px-4 py-2 bg-white focus:bg-black hover:bg-black focus:text-white hover:text-white border border-black rounded flex items-center space-x-2">
                <span>Dropdown</span>
                <svg
                  className={[
                    'w-4 h-4 transform transition-transform duration-200 ease-in-out',
                    open
                      ? 'rotate-180'
                      : '',
                  ].join(' ')}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </Menu.Button>
              <Transition
                show={open}
                enter="origin-top-left transform transition duration-150 ease-in-out"
                enterFrom="opacity-0 scale-90 -translate-y-2"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="origin-top-left transform transition duration-100 ease-in-out"
                leaveFrom="opacity-100 scale-100 translate-y-0"
                leaveTo="opacity-0 scale-90 -translate-y-2"
              >
                <Menu.Items static className="mt-2 max-w-sm flex flex-col divide-y divide-black bg-white shadow-xl border border-black rounded">
                  <div className="px-6 py-3 text-xl">
                    Signed in as
                    {' '}
                    <span className="font-bold">casper@adapt.dk</span>
                  </div>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#dashboard"
                        className={classNames('px-6 py-2', {
                          'bg-black text-white': active,
                        })}
                      >
                        Dashboard
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#settings"
                        className={classNames('px-6 py-2', {
                          'bg-black text-white': active,
                        })}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#profile"
                        className={classNames('px-6 py-2', {
                          'bg-black text-white': active,
                        })}
                      >
                        Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#log-out"
                        className={classNames('px-6 py-2', {
                          'bg-black text-white': active,
                        })}
                      >
                        Log out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </>
          )
        }
      </Menu>
    </main>
  );
}

export default App;
