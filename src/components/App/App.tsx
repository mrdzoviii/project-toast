import ToastPlayground from "components/ToastPlayground";
import Footer from "components/Footer";
import ToastProvider from "components/ToastProvider";

function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
      <Footer />
    </ToastProvider>
  );
}

export default App;
