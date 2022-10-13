import axios from "axios";
import { useCallback, useState } from "react";

const Page = () => {
  const [response, setResponse] = useState<string | null>(null);

  const buttonHandler = useCallback(async () => {
    try {
      const res = await axios.get("/dynamic");
      setResponse(res.data.message);
    } catch (err) {
      if (axios.isAxiosError(err)) setResponse(err?.message);
    }
  }, []);

  return (
    <div>
      <button onClick={buttonHandler}>call api</button>
      {response && <pre>{response}</pre>}
    </div>
  );
};

export default Page;
