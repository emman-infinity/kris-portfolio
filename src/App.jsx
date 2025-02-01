import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}