import './App.css';
import Navbar from './Components/Navbar';
import {useState} from 'react';


function App() {
  let [quantity,setQuantity] = useState(0);
  let [pic,setPic] = useState(1);
  
  function changeImage(e){
    updateThumbnails();
    e.target.style.opacity="0.5";
    e.target.style.border="4px solid orange";
    if(e.target.id==="one"){ 
      document.getElementById('product').style.backgroundImage= "url(" + require('./image-product-1.jpg') +")";
      setPic(1);     
    }else if(e.target.id==="two"){
      document.getElementById('product').style.backgroundImage = "url(" + require('./image-product-2.jpg') +")";
      setPic(2); 
    }else if(e.target.id==="three"){
      document.getElementById('product').style.backgroundImage = "url(" + require('./image-product-3.jpg') +")"; 
      setPic(3);
    }else if(e.target.id==="four"){
      document.getElementById('product').style.backgroundImage= "url(" + require('./image-product-4.jpg') +")"; 
      setPic(4);
    }
  }
  function updateThumbnails(){
    Array.from(document.getElementsByClassName('thumbnail')).forEach(ele=>{
      ele.style.opacity="1";
      ele.style.border="none";
    })
  }
  function plus(e){
    if(quantity===10){
      setQuantity(10);
    }else{
      setQuantity(quantity+1);
    }
    
  }
  function minus(e){
    if(quantity===0){
      setQuantity(0);
    }else{
      setQuantity(quantity-1);
    }
    
  }
  function left(e){
    if(pic===1){
      document.getElementById('product').style.backgroundImage= "url(" + require('./image-product-4.jpg') +")";
      setPic(4);
    }else if(pic===2){
      document.getElementById('product').style.backgroundImage= "url(" + require('./image-product-1.jpg') +")";
      setPic(1);
    }else if(pic===3){
      document.getElementById('product').style.backgroundImage= "url(" + require('./image-product-2.jpg') +")";
      setPic(2);
    }else if(pic===4){
      document.getElementById('product').style.backgroundImage= "url(" + require('./image-product-3.jpg') +")";
      setPic(3);
    }
  }
  function right(e){
    if(pic===1){
      document.getElementById('product').style.backgroundImage= "url(" + require('./image-product-2.jpg') +")";
      setPic(2);
    }else if(pic===2){
      document.getElementById('product').style.backgroundImage= "url(" + require('./image-product-3.jpg') +")";
      setPic(3);
    }else if(pic===3){
      document.getElementById('product').style.backgroundImage= "url(" + require('./image-product-4.jpg') +")";
      setPic(4);
    }else if(pic===4){
      document.getElementById('product').style.backgroundImage= "url(" + require('./image-product-1.jpg') +")";
      setPic(1);
    }
  }
  function trash(e){
    setQuantity(0);
  }
  let props = {
    quantity : quantity,
    remove : trash
  }
  return (
    
    <div className="App">
      <Navbar {...props}/>
      <main>
        <div className="main-left">
          <button id="product" className="product-image"></button>
          <button id="move-left" onClick={e=>left(e)}><i className="bi bi-chevron-left"></i></button>
          <button id="move-right" onClick={e=>right(e)}><i className="bi bi-chevron-right"></i></button>
          <div className="thumbnails">
            <button id="one" className="thumbnail-1 thumbnail" onClick={e=>changeImage(e)}></button>
            <button id="two" className="thumbnail-2 thumbnail" onClick={e=>changeImage(e)}></button>
            <button id="three" className="thumbnail-3 thumbnail" onClick={e=>changeImage(e)}></button>
            <button id="four" className="thumbnail-4 thumbnail" onClick={e=>changeImage(e)}></button>
          </div>
        </div>
        <div className="main-right">
          <div className="product-heading">SNEAKER COMPANY</div>
          <div className="product-heading-2">Fall Limited Edition <br/>Sneaker</div>
          <div className="product-para">These low profile sneakers are you perfect casual wear <br/> companion. Featuring a durable rubber outer-sole, they'll <br/> withstand everything the weather can offer.</div>
          <div className="product-price">
            <div className="price-1">
              <div>$127.00</div>
              <div>50%</div>
            </div>
            <div className="price-2"><s>$250.00</s></div>
          </div>
          <div className="product-buttons">
            <div className="quantity">
              <button id="quantity-plus" onClick={e=>plus(e)}><b><i className="bi bi-plus"></i></b></button>
              <div>{quantity}</div>
              <button id="quantity-minus" onClick={e=>minus(e)}><b><i className="bi bi-dash"></i></b></button>
            </div>
            <button id="buy">Buy Now</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
