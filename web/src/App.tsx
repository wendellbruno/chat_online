import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./routes";
import { ChatProvider } from "./context";

function App() {
 return (
  <BrowserRouter>
  <ChatProvider>
  <RoutesApp />
  </ChatProvider>
  </BrowserRouter>
 );
}

export default App;
