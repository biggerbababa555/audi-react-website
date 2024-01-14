import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import AudiQ5 from './pages/AudiQ5';
import AudiA5 from './pages/AudiA5';
import AudiQ7 from './pages/AudiQ7';
import AudiRs7 from './pages/AudiRs7';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/AudiQ5" element={<AudiQ5 />} />
        <Route path="/AudiA5" element={<AudiA5 />} />
        <Route path="/AudiQ7" element={<AudiQ7 />} />
        <Route path="/AudiRs7" element={<AudiRs7 />} />


        {/* <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="register" element={<Register />} /> */}
      </Routes>
    </div>
  );
}

export default App;
