import './App.css'
import Student from './Student'
import Footer from './Footer'
import Header from './Header'
const App = ()=>{
    return (
        <div>
           <Header></Header>
           <div style={{display:'flex',gap:'10px'}}>
            <Student></Student>
           <Student></Student>
           </div>
           <Footer/>
        </div>
    )
}

export default App;