import axios from "axios";
import MainLayout from "../components/MainLayout";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";

function AssetsPage() {
  const [name, setAssetName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [assets, setAssets] = useState([{ name: "", quantity: 0 }]);

  const addAsset = async () => {
    await axios.post("https://localhost:7071/Asset/add", {
      name: name,
      quantity: quantity,
    });
    await fetchAssets();
  };

  useEffect(() => {
    fetchAssets();
  });

  const handleDeleteButtonClick = async (name: string) => {
    console.log(name);
    await removeAsset(name);
  };

  const removeAsset = async (name: string) => {
    await axios.post("https://localhost:7071/Asset/remove-asset", {
      name: name,
    });
    fetchAssets();
  };

  const fetchAssets = async () => {
    await axios
      .get("https://localhost:7071/Asset/get-assets")
      .then((response) => {
        setAssets(response.data);
      });
  };

  return (
    <MainLayout>
      <div>
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
                Add asset
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="py-16 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3" key={name}>
                Asset name
              </th>
              <th scope="col" className="px-6 py-3 w-10">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {assets.map((assets) => {
              return (
                <>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 w-6">{assets.quantity}</td>
                    <td className="px-6 py-4">{assets.name}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDeleteButtonClick(assets.name)}
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      <Modal name="Add new asset">
        <>
          <form className="space-y-6" action="#" onSubmit={addAsset}>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Asset name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(event) => setAssetName(event.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="s&p 500"
                required
              ></input>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                onChange={(e) => setQuantity(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              ></input>
            </div>
            <button
              type="submit"
              data-modal-hide="authentication-modal"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add an asset
            </button>
          </form>
        </>
      </Modal>
    </MainLayout>
  );
}

export default AssetsPage;
