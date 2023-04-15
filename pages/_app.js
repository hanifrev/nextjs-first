import "../styles/global.css";
// import "../styles/_faq.scss";
import "../styles/dropdown-check.scss";
import "../styles/accrd.css";
import "../src/component/navtest/styles.css";
import { Provider } from "react-redux";
import store from "../src/app/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
