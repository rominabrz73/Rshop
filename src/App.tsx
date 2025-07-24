import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./component/layout/Layout";
import Routes from "./component/routes/Routes";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";
import { Suspense } from "react";
import Loading from "./component/loading/Loading";
import { Provider } from "react-redux";
import { store } from "./redux/store";


const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Provider store={store}>
        <ShoppingCartContextProvider>
          <QueryClientProvider client={queryClient}>
            <Layout>
              <Suspense fallback={<Loading />}>
                <Routes />
              </Suspense>
            </Layout>
          </QueryClientProvider>
        </ShoppingCartContextProvider>
      </Provider>
    </>
  );
}

export default App;
