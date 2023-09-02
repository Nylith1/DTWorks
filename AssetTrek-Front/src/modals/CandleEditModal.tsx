import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import axios from "axios";
import { ImageFileService } from "../services/ImageFileService";

interface CandleEditModalProps {
  onClose: () => void;
}

function CandleEditModal({ onClose }: CandleEditModalProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [imageToDisplay, setImageToDisplay] = useState("");

  const [imageFilePath, setImageFilePath] = useState("");
  const [byteArray, setByteArray] = useState<Uint8Array>(new Uint8Array());

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];

    setImageFilePath(selectedFile ? URL.createObjectURL(selectedFile) : "");

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = () => {
        const arrayBuffer = reader.result;
        if (arrayBuffer instanceof ArrayBuffer) {
          const uint8Array = new Uint8Array(arrayBuffer);
          setByteArray(uint8Array);
        }
      };

      reader.readAsArrayBuffer(selectedFile);
    }
  };

  useEffect(() => {
    {
      setImageToDisplay(ImageFileService.ToDataUrl(byteArray));
    }
    [imageFilePath];
  });

  const addCandle = async () => {
    await axios.post("https://localhost:7071/ForCandela/add-candle", {
      name: name,
      price: price,
      image: ImageFileService.ConvertUint8ArrayToBase64(byteArray),
    });
    onClose();
  };

  return (
    <Modal name="Add new candle">
      <>
        <form className="space-y-6" action="#" onSubmit={addCandle}>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload photo</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PNG, JPG
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            <label className="flex flex-col items-center justify-center w-full pl-2">
              <img className="max-h-64 rounded-lg" src={imageToDisplay}></img>
            </label>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(event) => setName(event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            ></input>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            ></input>
          </div>

          <button
            type="submit"
            data-modal-hide="authentication-modal"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add candle
          </button>
        </form>
      </>
    </Modal>
  );
}

export default CandleEditModal;
