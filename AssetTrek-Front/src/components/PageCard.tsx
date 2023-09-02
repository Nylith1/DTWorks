import axios from "axios";
import DropdownButton from "./DropdownButton";

interface CandleCardProps {
  shouldFetch: () => void;
  candle: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
}

function PageCard({ shouldFetch, candle }: CandleCardProps) {
  function base64ToUint8Array(base64: string) {
    var binaryString = atob(base64);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

  const handleDeleteButtonClick = async (id: string) => {
    await axios.delete(`https://localhost:7071/ForCandela/remove-candle/${id}`);
    shouldFetch();
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
    <>
      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
        <div className="flex justify-end">
          <DropdownButton>
            <li>
              <a
                onClick={() => handleDeleteButtonClick(candle.id)}
                className=" cursor-pointer block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Remove
              </a>
            </li>
          </DropdownButton>
        </div>
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
}

export default PageCard;
