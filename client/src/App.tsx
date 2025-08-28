import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import Myblog from "./components/Myblog";
import Dashboard from "./components/Dashboard";
import BlogForm from "./components/Forms/BlogForm";
import BlogPage from "./components/BlogPage";
import SigninForm from "./components/Forms/SigninForm";
import SignUpForm from "./components/Forms/SignUpForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/myblog" element={<Myblog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog/new" element={<BlogForm />} />
        <Route path="/blog/page" element={<BlogPage />} />
        <Route path="/user/login" element={<SigninForm />} />
        <Route path="/user/signup" element={<SignUpForm />} />
      </Route>
    </Routes>
  );
};

export default App;
