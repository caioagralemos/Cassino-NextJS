import "@/styles/globals.css";
import { Fragment, useEffect, useState } from "react";
import DenseAppBar from "../../components/UI/navbar";
import Cookies from "js-cookie";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [money, setMoney] = useState(0.00);
  
  useEffect(() => {
    const token = Cookies.get("money");
    if (token) {
      setMoney(parseFloat(token));
    }
  }, [])
  

  return (
    <Fragment>
      <Head>
        <title>Cassino Next.js</title>
        <link rel="icon" type="image/png" href="https://cdn-icons-png.flaticon.com/512/3425/3425938.png"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DenseAppBar money={money} />
      <Component {...pageProps} money={money} setMoney={setMoney} />
    </Fragment>
  );
}
