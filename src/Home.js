import React from 'react'
import "./Home.css";
import Product from './Product';


function Home() {
    return (
        <div className="home">  
          <div className="home__container">
          <img className="home__img"  src="/images/home-img.jpg" />
          </div>

          <div className="home__row">
            <Product title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
              img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
              rating={4}
              price="20.3"
              
            />
            <Product
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              img="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
              price="35.3"
              rating={2}
            />
          </div>

          <div className="home__row">
          
            <Product title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              img= "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
              price="150.25"
              rating={5}
            />
            <Product title="New Apple Watch Series 6 (GPS + Cellular, 44mm) - Space Grey Aluminium Case with Black Sport Band"
              price="125.78"
              rating={5}
              img="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <Product title ="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            img="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
              price ="45.8"
              rating={3}
            />
            
          </div>

          <div className="home__row">
          <Product title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 144"
            img= "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            price="213.12"
            rating={4}
          />
            
          </div>
        
          
        </div>
         
        
         
        
        

    
    )
}

export default Home
