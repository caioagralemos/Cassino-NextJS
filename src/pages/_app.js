import "@/styles/globals.css";
import { Fragment, useEffect, useState } from "react";
import DenseAppBar from "../../components/UI/navbar";
import Cookies from "js-cookie";

export default function App({ Component, pageProps }) {
  const [money, setMoney] = useState(0);
  
  useEffect(() => {
    const token = Cookies.get("money");
    if (token) {
      setMoney(parseInt(token));
    }
  }, [])
  

  return (
    <Fragment>
      <DenseAppBar money={money} />
      <Component {...pageProps} money={money} setMoney={setMoney} />
    </Fragment>
  );
}
