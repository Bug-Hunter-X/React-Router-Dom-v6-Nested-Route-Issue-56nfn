import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users/>}>
          <Route path=":id" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {return <div>Home</div>}
function About() {return <div>About</div>}
function User() {return <div>User</div>}

function Users() {
  let location = useLocation();
  console.log(location);
  return (
    <div>Users
      <ul>
        <li><a href="/users/123">user 123</a></li>
        <li><a href="/users/456">user 456</a></li>
      </ul>
    </div>
  );
}
export default App;