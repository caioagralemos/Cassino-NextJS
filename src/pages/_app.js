import "@/styles/globals.css";
import { Fragment, useState } from "react";
import DenseAppBar from "../../components/UI/navbar";

export default function App({ Component, pageProps }) {
  const [money, setMoney] = useState(0)
  return (
    <Fragment>
      <DenseAppBar money={money} />
      <Component {...pageProps} money={money} setMoney={setMoney} />
    </Fragment>
  );
}
