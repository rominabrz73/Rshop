


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./component/layout/Layout";
import Routes from "./component/routes/Routes";

const queryClient = new QueryClient();

function App() {
  return (
  <>
<QueryClientProvider client={queryClient}>
  <Layout>
      <Routes />
  </Layout>
</QueryClientProvider>
 
 </>
  );
}

export default App;
