import MainLayout from "../components/MainLayout";

function AssetsPage() {
  // const [name, setAssetName] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [inputValue, setInputValue] = useState("");

  // // const fetchProgramStatus = () => {
  // //   axios.get("https://localhost:7071/Asset/get-assets").then((response) => {
  // //     setStatusMessage(response.data);
  // //   });
  // // };

  // const addAsset = () => {
  //   axios.post("https://localhost:7071/Asset/add", {
  //     name: name,
  //     quantity: quantity,
  //   });
  // };
  // const [showToast, setShowToast] = useState(true);
  // const [toastMessage, setToastMessage] = useState("");
  // const [toastMessageHeader, setToastMessageHeader] = useState("");
  // const [toastType, setToastType] = useState("");

  // const validateEnteredData = () => {
  //   if (parseFloat(quantity) <= 0 || isNaN(parseFloat(quantity))) {
  //     setToastMessage("Wrong quantity entered. Quantity has to be more than zero.");
  //     setToastMessageHeader("Error");
  //     setToastType("danger");
  //     setShowToast(true);
  //   } else {
  //     addAsset();
  //     setToastMessage("Your information was saved");
  //     setToastType("success");
  //     setToastMessageHeader("Saved");
  //   }
  // };

  // return (
  //   <div>
  //     <div className="position-absolute top-0 start-0 m-2">
  //       <Stack direction="horizontal" gap={3}>
  //         <Form.Control
  //           className="me-auto"
  //           type="number"
  //           min="0"
  //           onChange={(e) => setQuantity(e.target.value)}
  //           placeholder="Add your item here..."
  //         />
  //         <Form.Control
  //           className="me-auto"
  //           placeholder="Add your item here..."
  //         />
  //         <Form.Control
  //           className="me-auto"
  //           placeholder="Add your item here..."
  //         />
  //         <Button onClick={validateEnteredData} variant="primary" className="mb-2">
  //           Add asset
  //         </Button>{' '}
  //       </Stack>
  //     </div>
  //     <ToastContainer position="bottom-end" className="m-2">
  //       <Toast bg={toastType} show={showToast} onClose={_ => setShowToast(false)}>
  //         <Toast.Header>
  //           <img
  //             src="holder.js/20x20?text=%20"
  //             className="rounded me-2"
  //             alt=""
  //           />
  //           <strong className="me-auto">{toastMessageHeader}</strong>
  //         </Toast.Header>
  //         <Toast.Body>{toastMessage}</Toast.Body>
  //       </Toast>
  //     </ToastContainer>
  //   </div>
  // );

  return (
    <MainLayout>
      <>
        <div className="fixed top-auto z-50 w-full h-16 border-y bg-white border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <div className="grid h-full max-w-lg grid-cols-4 font-medium">
            <button
              data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>

              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                Add asset
              </span>
            </button>
          </div>
        </div>

        <div
          id="authentication-modal"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  Sign in to our platform
                </h3>
                <form className="space-y-6" action="#">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      required
                    ></input>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    ></input>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                          required
                        ></input>
                      </div>
                      <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Lost Password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login to your account
                  </button>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?{" "}
                    <a
                      href="#"
                      className="text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Create account
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </MainLayout>
  );
}

export default AssetsPage;
