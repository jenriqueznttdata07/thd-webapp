import { Provider } from "react-redux";
import { store } from ".";
import { persistStore } from "redux-persist";

persistStore(store);

interface ReduxProviderProps {
    children: React.ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }: ReduxProviderProps) => {
    return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider;