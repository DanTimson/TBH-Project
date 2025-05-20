import { Routes, Route } from 'react-router-dom';
import TrainPage from './pages/train1'; // твоя страница поездов
import HotelPage from './pages/hot'; // создай этот файл
import TrainPage2 from './pages/train2';   // и этот тоже
import InputPageExample from './index.jsx'
import CartPage from './pages/Cart';
import TrainDetailsPage from './pages/TrainDetails_1';
import RoomDetailsPage from './pages/HotelRoomPage';

export default function App2() {
  return (
    <Routes>
        <Route path="/" element={<InputPageExample />} />
        <Route path="/train1" element={<TrainPage />} />
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/train2" element={<TrainPage2 />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/train1/:id" element={<TrainDetailsPage />} />
        <Route path="/room-details/:id" element={<RoomDetailsPage />} />
    </Routes>
  );
}