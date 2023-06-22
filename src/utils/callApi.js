import axios from "axios";

const call_api = async () => {
  const res = await axios.get(
    "https://0bff10b1-9e94-477d-a69f-0e4c63078a37.mock.pstmn.io",
    {
      headers: {
        "x-api-key":
          "PMAK-61325d70088f41003cdecd8a-dcb8940943ee694609eb0faf438043248d",
      },
    }
  );
  return res.data.data;
};

export default call_api;
