// import "./App.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Admin from "./components/Admin";
// import Add from "./components/Add";
// import Edit from "./components/Edit";
// import View from "./components/View";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Route path="/admin" component={Admin} />
//         <Route path="/add" component={Add} />
//         <Route path="/edit/:id" component={Edit} />
//         <Route path="/view/:id" component={View} />
//         <Route path="*" component={() => <h1>Not Found</h1>} />
//       </Router>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import Add from "./components/Add";
import Edit from "./components/Edit";
import View from "./components/View";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Admin />} />
        <Route path="add" element={<Add />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route path="view/:id" element={<View />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;