import { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import axios from "axios";
import CandleEditModal from "../modals/CandleEditModal";

function ForCandelaPage() {
  const [candles, setCandles] = useState([{ name: "", price: 0, image: "" }]);
  const [shouldFetch, setShouldFetch] = useState(true);

  useEffect(() => {
    if (shouldFetch) {
      fetchCandles();
    }
  }, [shouldFetch]);

  function base64ToUint8Array(base64: string) {
    var binaryString = atob(base64);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

  const fetchCandles = async () => {
    await axios
      .get("https://localhost:7071/ForCandela/get-candles")
      .then((response) => {
        setCandles(response.data);
      })
      .finally(() => setShouldFetch(false));
  };

  function toDataUrl(img: Uint8Array) {
    const image = btoa(
      new Uint8Array(img).reduce((data, byte) => {
        return data + String.fromCharCode(byte);
      }, "")
    );

    return `data:image/jpg;base64,${image}`;
  }

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
            <>
              <div className="w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                <div className="px-4 pt-4">
                  <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                    {candle.name}
                  </h5>
                </div>
                <div className="flex-grow">
                  <img
                    className="p-4 h-auto rounded-t-lg"
                    src={toDataUrl(base64ToUint8Array(candle.image))}
                    alt="product image"
                  />
                </div>
                <div className="flex justify-center">
                  <span className="py-4 marg text-3xl font-bold text-gray-900 dark:text-white">
                    {candle.price}€
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <CandleEditModal onClose={() => setShouldFetch(true)} />
    </MainLayout>
  );
}

export default ForCandelaPage;
