import { Disclosure } from '@headlessui/react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
const PlaysFilter = (props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className='py-2 flex  gap-3 bg-white py-4 px-1 max-w-xl w-5/6'>
            {open ? <BiChevronUp /> : <BiChevronDown />}

            <span
              className={
                open
                  ? 'text-vaish-300 max-w-xl w-5/6 '
                  : 'text-gray-700  max-w-xl w-5/6'
              }
            >
              {props.title}
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className='text-gray-500 '>
            <div className='flex  gap-3 flex-wrap bg-white py-4 px-4 max-w-xl w-5/6 '>
              {props.tags.map((tag) => (
                <>
                  <div className='border-2 border-gray-200 p-2'>
                    <span className='text-vaish-300'>{tag}</span>
                  </div>
                </>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default PlaysFilter;
