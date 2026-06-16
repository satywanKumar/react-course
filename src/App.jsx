import './App.css'
import Student from './Student'
import Footer from './Footer'
import Header from './Header'
import Student2 from './Student2'
import Student3 from './Student3'
import Demo from './Demo'
import Product from './Product'
import Shop from './Shop'
import Demo2 from './Demo2'
import Event from './Event'
import Child from './Child'
import State from './State'
import Value from './Value'
import Subscribe from './Subscribe'
import Condition from './Condition'
import Array  from './Array'
import StudentList from './StudentList'
import Bulb from './Bulb'
import ProductList from './ProductList'
import ContactList from './ContactList'
const App = ()=>{
    // const productName = "hp";
    // const productPrice = 4778;

    // const DataReciever = (d)=>{
    //     console.log('from app component',d)
    // }

    return (
        <div>
           {/* <Header></Header>
           <div style={{display:'flex',gap:'10px'}}>
            <Student></Student>
           <Student></Student>
           </div>
           <Footer/> */}
           {/* <Student2/> */}
           {/* <Student3/> */}
           {/* <Demo/> */}
           {/* <Product pName="MSI" price="75000" /> */}
           {/* <Product pName={productName} price = {444458}/> */}
           {/* <Product data={{name:'msi',price:4565688}} data2={{discount:50}} data3 = "mast laptop hai" data4 = {[20,30,45]}/> */}
           
           {/* <Product data = {{name:'Dell', price:454484}}></Product>
           <Product data = {{name:'HP', price:787855}}></Product>
           <Product data = {{name:'MSI', price:8888779}}></Product> */}


           {/* <Shop data={{shopName:'Satya ka dukan',contact:9876543210}}/>
           <Shop data={{shopName:'Bhai ka dukan',contact:99888778}}/> */}

           {/* <Shop data={{shopName:'Bhai ka dukan',contact:99888778}}>
            <button>Call now</button>
            </Shop> */}

            {/* <Shop data={{shopName:'satya ka dukan',contact:99888778}}>
            <button>contact now</button>
            <button>call now</button>
            </Shop> */}

            {/* <Demo2 name="satywan" email="sk@gmail.com"/> */}
            {/* <Event/> */}

            {/* <Child receiver = {DataReciever}/> */}

            {/* <State/> */}
            {/* <Value/> */}
            {/* <Subscribe/> */}
            {/* <Condition/> */}
            {/* <Array/> */}
            {/* <StudentList/> */}
            {/* <Bulb/> */}
            {/* <ProductList/> */}
            <ContactList/>
            

        </div>
    )
}

export default App;