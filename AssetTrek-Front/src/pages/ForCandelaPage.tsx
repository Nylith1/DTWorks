import { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import axios from "axios";
import CandleEditModal from "../modals/CandleEditModal";
import PageCard from "../components/PageCard";

function ForCandelaPage() {
  const [candles, setCandles] = useState([
    { id: "", name: "", price: 0, image: "" },
  ]);
  const [shouldFetch, setShouldFetch] = useState(true);

  useEffect(() => {
    if (shouldFetch) {
      console.log("fetching...");
      fetchCandles();
    }
  }, [shouldFetch]);

  const fetchCandles = async () => {
    await axios
      .get("https://localhost:7071/ForCandela/get-candles")
      .then((response) => {
        setCandles(response.data);
      })
      .finally(() => setShouldFetch(false));
  };

  return (
    <MainLayout>
      <div className="fixed top-auto z-5 w-full h-16 border-y bg-white border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="fixed top-auto z-10 w-full h-16 border-b bg-white border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <div className="grid h-full max-w-lg grid-cols-4 font-medium">
            <button
              data-modal-target="authentication-modal"
              data-modal-show="authentication-modal"
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 border-gray-200 border-r hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>

              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                Add candle
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-cols- gap-4">
        {candles.map((candle) => {
          return (
            <PageCard
              shouldFetch={() => setShouldFetch(true)}
              candle={candle}
            ></PageCard>
          );
        })}
      </div>

      <CandleEditModal onClose={() => setShouldFetch(true)} />
    </MainLayout>
  );
}

export default ForCandelaPage;
