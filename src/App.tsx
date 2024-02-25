import { Content } from './components/content/Content.tsx';
import { Footer } from './components/footer/Footer.tsx';
import { Header } from './components/header/Header.tsx';

function App() {


    return (
        <div className="app">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default App
