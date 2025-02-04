import { Provider } from "react-redux";
import { makeStore } from "@/redux/store";

const StoreProvider = ({ children, preloadedState }) => {
  const store = makeStore(preloadedState);
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
