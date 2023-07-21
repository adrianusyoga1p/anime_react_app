import Index from "./Index"
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Popular from './pages/Popular'
import Complete from './pages/Complete'
import UpComing from './pages/UpComing'
import OnGoing from "./pages/OnGoing"
import DetailAnime from "./pages/DetailAnime"

function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Index/>}/>    
                <Route path='/popular' element={<Popular/>} />
                <Route path='/ongoing' element={<OnGoing/>} />
                <Route path='/complete' element={<Complete/>} />
                <Route path='/upcoming' element={<UpComing/>} />
                <Route path='/detailanime/:id' element={<DetailAnime/>} />
                <Route path='/popular/detailanime/:id' element={<DetailAnime/>}/>
                <Route path='/ongoing/detailanime/:id' element={<DetailAnime/>} />
                <Route path='/complete/detailanime/:id' element={<DetailAnime/>} />
                <Route path='/upcoming/detailanime/:id' element={<DetailAnime/>} />
            </Routes>
        </>
    )
}

export default App
