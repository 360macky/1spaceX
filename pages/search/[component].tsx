import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import usePhysicalData from '../../hooks/usePhysicalData';
import SearchCard from '../../components/SearchCard';
import classNames from 'classnames';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { PhysicalData } from '../../hooks/usePhysicalData';

const Capsules = () => {
  const router = useRouter();
  const { component } = router.query;
  const [searchText, setSearchText] = useState('');
  const [resultFitered, setResultFitered] = useState<any>([]);
  const [numberOfResults, setNumberOfResults] = useState(10);
  const [isFirstSearch, setIsFirstSearch] = useState(false);
  const searchForm = useRef(null);
  const { data, result, setData }: PhysicalData = usePhysicalData();
  const { transcript, listening } = useSpeechRecognition();

  useEffect(() => {
    if (!component) {
      return;
    }
    setData(component);
  }, [component]);

  useEffect(() => {
    if (!result) {
      return;
    }
    setResultFitered(result);
    return () => {};
  }, [result]);

  useEffect(() => {
    if (transcript) {
      setSearchText(transcript);
    }
    return () => {};
  }, [transcript, listening]);

  const speechToText = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
  };

  const filterSearch = (result, component, search) => {
    switch (component) {
      case 'capsules':
        return result.filter((capsule) => {
          if (capsule.serial !== null && capsule.last_update !== null) {
            return (
              capsule.serial.toLowerCase().includes(search.toLowerCase()) ||
              capsule.last_update.toLowerCase().includes(search.toLowerCase())
            );
          }
          return false;
        });
      case 'cores':
        return result.filter((core) => {
          if (core.serial !== null && core.last_update !== null) {
            return (
              core.serial.toLowerCase().includes(search.toLowerCase()) ||
              core.last_update.toLowerCase().includes(search.toLowerCase())
            );
          }
          return false;
        });
      case 'launches':
        return result.filter((launch) => {
          if (launch.name !== null) {
            return launch.name.toLowerCase().includes(search.toLowerCase());
          }
          return false;
        });
      case 'payloads':
        return result.filter((payload) => {
          if (payload.name !== null) {
            return payload.name.toLowerCase().includes(search.toLowerCase());
          }
          return false;
        });
      case 'rockets':
        return result.filter((rocket) => {
          if (rocket.description !== null) {
            return rocket.description
              .toLowerCase()
              .includes(search.toLowerCase());
          }
          return false;
        });
      default:
        break;
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!isFirstSearch) {
      setIsFirstSearch(true);
    }
    const searchResponse = filterSearch(result, component, searchText);
    setResultFitered(searchResponse);
  };
  return (
    <main className="flex justify-center items-center flex-col min-h-[76vh]">
      <div className="flex flex-col justify-center md:w-[768px] gap-y-4 text-center">
        <div className="flex justify-center py-10">
          <h1 className="dark:text-white text-5xl md:text-6xl dark:text-transparent font-space capitalize bg-clip-text bg-gradient-to-t font-bold from-yellow-500 to-yellow-600">
            {component}
          </h1>
        </div>
        <form
          className="flex items-center"
          onSubmit={handleSearch}
          ref={searchForm}
        >
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="voice-search"
              className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full pl-10 p-2.5  dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500 font-space"
              placeholder="Write the search term here..."
              required
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={speechToText}
            >
              <svg
                aria-hidden="true"
                className={classNames(
                  'w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white',
                  {
                    'dark:text-yellow-500 animate-pulse': listening,
                  }
                )}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-3 ml-2 text-base font-medium text-white bg-amber-700 rounded-lg border border-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-900 font-space"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 sm:mr-2 -ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="hidden sm:inline-flex">Search</span>
          </button>
        </form>
      </div>
      <div className="flex justify-center flex-col pb-8">
        <div
          className={classNames('pt-8 text-center dark:text-gray-300', {
            hidden: !isFirstSearch,
          })}
          role="status"
        >
          <p>{resultFitered.length} results that matched your search</p>
        </div>
        <div
          className="pt-8 pb-6 flex gap-x-4 gap-y-4 lg:w-[1024px] flex-wrap justify-center"
          role="list"
        >
          {resultFitered.length > 0 &&
            resultFitered
              .slice(0, numberOfResults)
              .map((item, index) => (
                <SearchCard type={component} key={index} information={item} />
              ))}
        </div>
        {resultFitered.length >= 10 && (
          <button
            className="self-center px-5 py-3 font-medium text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            onClick={() => {
              setNumberOfResults(numberOfResults + 10);
            }}
          >
            Load 10 more results
          </button>
        )}
      </div>
    </main>
  );
};

export default Capsules;
