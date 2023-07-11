import Index from "./Index"
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Popular from './pages/Popular'
import NewRelease from './pages/NewRelease'
import UpComing from './pages/UpComing'
import OnGoing from "./pages/Ongoing"
import DetailAnime from "./pages/DetailAnime"

function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Index/>}/>    
                <Route path='/popular' element={<Popular/>} />
                <Route path='/ongoing' element={<OnGoing/>} />
                <Route path='/newrelease' element={<NewRelease/>} />
                <Route path='/upcoming' element={<UpComing/>} />
                <Route path='/detailanime/:id' element={<DetailAnime/>} />
            </Routes>
        </>
    )
}

export default App