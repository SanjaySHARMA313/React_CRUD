// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import './index.css'
// import React, { useState, useEffect } from 'react'

// function AutoLayoutExample() {
//   const [data, setData] = useState(null);
//   const fetchdata = () => {
//     fetch('https://raw.githubusercontent.com/akshita151199/APIs/main/data').then(async (response) => {
//       let data = await response.json();
//       console.log(data);
//       setData(data.data);
//     })
//   }
//   useEffect(() => {
//     fetchdata()
//   }, [])
//   return (

//     <div className="outerall" >
//       <div className='container' fluid>Lorem ipsum is simply dummy text of the printing</div>
//       <Container fluid>
//         <Row className={'all'} >
//           <Col xs lg="3">
//             <div >
//               <div className='parent'>
//                 <img src='https://img.icons8.com/?size=1x&id=v0XDVMKyv0C9&format=png' width="40px" height="30" ></img>
//                 <div className='name'>Name</div>
//                 <img className='img1' src="https://img.icons8.com/?size=1x&id=99766&format=png" width="40px" height="30" ></img>
//               </div>
//               <div className='home' >
//                 <img src="https://img.icons8.com/?size=512&id=rao0BCkpkn13&format=png" width="40px" height="30" ></img>
//                 <div className='home1'>Home</div></div>

//               <div className='section1'>
//                 <img src='https://img.icons8.com/?size=1x&id=8322&format=png' width="40px" height="30" ></img>
//                 <div className="sectionA" >Section 1</div></div>

//               <div className='section2' >
//                 <img src='https://img.icons8.com/?size=1x&id=0UO7SycNJJFx&format=png' width="40px" height="30"></img>
//                 <div className='sectionB'>Section 2</div></div>

//               <div className="section3" >
//                 <img src='https://img.icons8.com/?size=1x&id=8G289f2VPdDo&format=png' width="40px" height="30"></img>
//                 <div className='sectionC'>Section 3</div></div>

//               <div className='section4'>
//                 <img src='https://img.icons8.com/?size=1x&id=L61wzkErF29z&format=png' width="40px" height="30"></img>
//                 <div className="sectionD">Section 4</div></div>

//               <div className='section5' >
//                 <img src='https://img.icons8.com/?size=1x&id=j77cPFruOjLx&format=png' width="40px" height="30"></img>
//                 <div className="sectionE">Section 5</div></div>

//               <div className='section6' >
//                 <img src='https://img.icons8.com/?size=1x&id=21594&format=png' width="40px" height="30"></img>

//                 <div className="sectionF">Section 6</div></div>

//               <div className='section7' >
//                 <img src="https://img.icons8.com/?size=1x&id=T5p7QyrMraTR&format=png" width="40px" height="30"></img>
//                 <div className="sectionG">Section 7</div></div>

//               <div className='section8' >
//                 <img src='https://img.icons8.com/?size=1x&id=2tdT71Atua5G&format=png' width="40px" height="30"></img>
//                 <div className="sectionH">Section 8</div></div>

//               <div className='sectionI'>
//                 <img src='https://img.icons8.com/?size=1x&id=mWvhtekupxLM&format=png' width="40px" height="30"></img>

//                 <div className='documentation'>Documentation</div></div>

//               <div className='img2'>
//                 <div className='img21'>
//                   <img className='img3' src='https://img.icons8.com/?size=1x&id=v0XDVMKyv0C9&format=png' width="34px" height="27" ></img>
//                   <div className='img31'>$0.90</div>

//                 </div>
//                 <div className='img4'>Buy $XYZ</div></div>
//             </div>
//           </Col>
//           <Col xs lg="6" >




//             <div className='img5'>
//               <div>
//                 <div className='section'>Section</div>
//                 <hr className='img6' /></div>
//               <div className='pimage' >
//                 <img src="https://img.icons8.com/?size=1x&id=105173&format=png" width="29px" height="25"></img>
//                 <div>0.2$XYZ</div>
//                 <div className='tier'>Tier 1 </div>
//               </div>
//             </div>
//             <div className='img26'>
//               <div>Lorem ipsum is simply dummy test of the printing and typesetting industry</div>
//               <div className='tut'>Tutorial</div>
//             </div>
//             <div className='yr2'>
//               <div className='yr1'>
//                 <div className='yr'>Your rewards</div>
//                 <div className='img25'>Customize Link</div></div>
//               <div className='img24'>$0.26231428</div>
//               <div className='img23'>
//                 <div className='img22'> $40 AVAX</div>
//                 <div className='img21'>$10 BNB</div>
//                 <div className='img20'>$210 BTC</div>
//               </div>
//             </div>
//             <div className='img19'>
//               <div className='img117'>
//                 <div className='img17'>
//                   <img className='img16' src="https://image.shutterstock.com/image-vector/money-bag-icon-moneybag-flat-260nw-730820167.jpg" width="40px" height="34"></img>
//                   <div>12.5% of free</div>
//                 </div>
//                 <div className='img15'>Your Referral Link for XYZ</div>
//                 <div className='img14'>
//                   <div>https://unityexchange.design</div>
//                   <img className='img13' src="https://img.icons8.com/?size=1x&id=38878&format=png" width="45px" height="40"></img>
//                 </div>
//               </div>

//               <div className='img117'>
//                 <div className='img17'>
//                   <img className='img16' src="https://image.shutterstock.com/image-vector/money-bag-icon-moneybag-flat-260nw-730820167.jpg" width="40px" height="34"></img>
//                   <div>12.5% of free</div>
//                 </div>
//                 <div className='img15'>Your Referral Link for XYZ</div>
//                 <div className='img14'>
//                   <div>https://unityexchange.design</div>
//                   <img className='img13' src="https://img.icons8.com/?size=1x&id=38878&format=png" width="45px" height="40"></img>
//                 </div>
//               </div>
//             </div>
//             <div className='stb'>
//               <div>
//                 <div className='ftab'>First Tab</div>
//                 <hr className='stab1' /></div>
//               <div className='stab'>Second Tab</div>
//             </div>
//             <div className='lastelm1'>
//               <div>ASSET</div>
//               <div>AMOUNT</div>
//               <div>USER ACCOUNT</div>
//               <div>REFERRAL EARNING</div>
//             </div>
//             {
//               data && data.map((item, ind) => {
//                 return (

//                   <div key={ind} className='lastelm'>

//                     <div className='img29'>
//                       <img src={item.img}></img>


//                       <div className='asset'>{item.asset}</div>
//                       <div>
//                         <div className="ref" >{item.referral_earnings}BNB</div>
//                         <div className='exp'>Expired</div></div>

//                     </div>


//                     <div className='amount'>0xFbE..0f58A7D</div>

//                     <div>
//                       <div className='oobc'>0.0000.BNB</div>
//                       <div className='obsc'>
//                         <div className='bsc'>View on BSC Scan</div>
//                         <img src="https://img.icons8.com/?size=1x&id=38878&format=png" width="30px" height="25"></img></div>
//                     </div></div>)
//               })
//             }

//           </Col>
//           <Col xs lg="3">
//             <div className='img27'>
//               <div className='img28'>
//                 <img src="https://cryptologos.cc/logos/avalanche-avax-logo.png?v=025" width="29px" height="23"></img>
//                 <div className='aval'>avalanche</div>
//               </div>
//               <div className='img30'>
//                 <img src="https://img.icons8.com/?size=1x&id=105173&format=png" width="29px" height="23"></img>
//                 <div className='ox'>0XF6...1353</div>
//               </div>


//             </div>
//             <div className='couter'>
//               <img src="https://img.icons8.com/?size=1x&id=115726&format=png" width="25px" height="20"></img>
//               <div className='cllink'>Custom link</div>

//             </div>
//             <div className='placehold1'>https://testnet.xyz/trade?ref=</div>
//             <input className='placehol' type="text" placeholder="ENTER" />
//             <div className='cll1'>
//               <div className='customlink' >
//                 <img src="https://img.icons8.com/?size=1x&id=12127&format=png" width="30px" height="25"></img>
//                 <div className='cl'>Custom link </div>
//               </div>
//               <div className='cancellink' >

//                 <img src="https://img.icons8.com/?size=1x&id=37901&format=png" width="30px" height="25"></img>
//                 <div>Cancel</div>
//               </div>
//             </div>
//           </Col>
//         </Row>


//       </Container>
//     </div>
//   );
// }

// export default AutoLayoutExample;


// // import React from 'react';
// // import css from'./Forms.css'
// // import index from './index.css'

// // const Forms = () => {
// //   return (
// //     <div><div> <div className='Header'>
// //      <div> <img src="https://manag.freewaysintl.com/manag/upload/1/poze%20noi/e_shop.jpg" width="40px" alt="E-shop image"/>E-shop</div>
// //       <div>Men</div>
// //       <div>Women</div>
// //        <div>Kinds</div>
// //        <div className='image'>
// //        <img src="https://th.bing.com/th/id/OIP.NXKJqYwtaUa8U8ZjJueuBQEsEr?w=188&h=187&c=7&r=0&o=5&pid=1.7 "width="20px" className='search'></img>
// //         <img src="https://www.bing.com/th?id=OIP.wNULHZgGy7kwB3Rdq4hF3AHaHa&w=176&h=170&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" width="20px" className='cart'></img>
// //         <img src="https://th.bing.com/th/id/OIP.2jllEsoZmQFN6wsFEKdl3gHaHa?w=115&h=128&c=7&r=0&o=5&pid=1.7" width="20px" className='logo'></img> </div></div> <hr/>   
// //               <div className='cartlogo'> <h4>Shipping  and Payment</h4>
// //               <img src="https://th.bing.com/th/id/OIP.85nF7Z7zEl9vkjAnBMCDVwHaFb?w=245&h=180&c=7&r=0&o=5&pid=1.7" width="50px"height="50px"/>
// //        <img src="https://th.bing.com/th/id/OIP.ouRj3OTJ1tKfpAhVOj8lLQHaHv?w=163&h=180&c=7&r=0&o=5&pid=1.7 "  width="50px" height="50px"/></div>
// //        <button className='login'>LOG IN</button>
// //        <button className='signup'>SIGN UP</button>
// //         <div className='spy'>
// //        <h3 className='sinfo'>Shipping information</h3>
// //        <h4 className='pm'>Payment meathod</h4>
// //        <h4>Your Cart</h4></div>
      
// //        <div className='Form'>
// //         <div className='formsdetail'>
// //         <div className='email'> <input type="text" placeholder='Email' className='emails'></input>
// //          <input type="text" placeholder='Address' className='address'></input> </div>
// //           <input type="text" placeholder='FirstName' className='firstname'></input>
// //           <input type="text" placeholder='City' className='city'></input>
// //           <input type="text" placeholder='Last Name'className='lastname'></input>
// //           <input type="text" placeholder=" Postal Code/ZIP" className='zip'></input>
// //           <input type="text" placeholder="Phone Number" className='number'></input>
// //           <select placeholder='America' className='country'><option name="city" value="innn" placeholder="Poland" >Poland</option>        
// //            <option>India</option>
// //            <option>America</option>
// //          </select></div >
// //          <div  className='images'>
// //         <div className='hhi'> <div className="hi"><img src="https://www.bing.com/th?id=OIP.ULU70naCdD-u9WjpHdbRkAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" width="100px" height="40" className='paypal'/>
// //          <img src="https://www.bing.com/th?id=OIP.xVREsbEnxpFwYsgl4hNO7QHaDA&w=350&h=142&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" width="100px" height="40" className='visa'/>
// //          <img src="https://www.bing.com/th?id=OIP.MZnfDm0dqmsgpVw55gCW2AHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" width="100px" height="40" className='mastercard'/></div>
         
// //          <img src="https://th.bing.com/th/id/OIP.dNEqh20Nm1NwWw75PqkLzAAAAA?w=169&h=164&c=7&r=0&o=5&pid=1.7" width="100px" height="40" className='maestro'/>
// //          <img src="https://cdn0.iconfinder.com/data/icons/flat-design-business-set-3/24/payment-method-discover-512.png" width="100px" height="40" className='discover'/>
// //          <img src="https://th.bing.com/th/id/OIP.8dw65fiUxBuqqZzFBUi-rgHaD4?w=315&h=180&c=7&r=0&o=5&pid=1.7" width="100px" height="40" className='ideal'/>
// //          </div>
// //          <h4>Delivery Meathod</h4>
// //        <div className="fdlogo"><p className='inpost'>  <img src="https://th.bing.com/th?q=Inpost+SA+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" width="100px" height="40"/> $ 20.00</p>
// //         <p className='dpd'> <img src="https://th.bing.com/th/id/OIP.pJAwpqpolNPjlBhKRUictwHaEk?w=277&h=180&c=7&r=0&o=5&pid=1.7" width="100px" height="40"/>$12.00</p>  </div>
// //        <div className='Dlogo'><p className='dhl'>  <img src="https://th.bing.com/th/id/OIP.i3xb2p4vPaZWQc-nZoWR6gAAAA?w=282&h=180&c=7&r=0&o=5&pid=1.7" width="100px" height="40"/> $10.00</p>
// //         <p className='fedex'> <img src="https://th.bing.com/th/id/OIP.VxRZs5eWEUREhxGtcFGT7AHaDY?w=323&h=159&c=7&r=0&o=5&pid=1.7" width="100px" height="40"/> $ 10.00</p></div></div>
// //        <div className='Tshirt'>
         
// //        <pre className='white'> <img src="https://th.bing.com/th/id/OIP.SD2_WNmTtgh2Cd_3uvlfMgHaHa?w=207&h=207&c=7&r=0&o=5&pid=1.7" width="50px" height="50px"/> T-Shirt 
// //               summer Vibes    $89.99</pre>
// //        <pre className='gray'> <img src="https://th.bing.com/th/id/OIP.LyrLFxgIzf_QAe_ppFSFwAHaHh?w=199&h=202&c=7&r=0&o=5&pid=1.7" width="50px" height="50px" className='white'/> Basic Slim Fit T-Shirt   $69.99</pre>
// //        <center className='cost'>  Total Cost:     $159,98</center>
// //        <p><img src="https://th.bing.com/th/id/OIP.ZCULRJ1j3wzus9wmuuc55QHaHa?w=149&h=180&c=7&r=0&o=5&pid=1.7" width="40px" className='gray'/>You are $30,02 away<br/>from  free shiping</p></div>
        
// //        {/*  */}
        
        
        
// //         </div>
// //       <div className='back'><button className="backs"> - back</button>
// //         <button className='continue'>CONTINUE SHOPPING</button>
// //         <button className='proceed'>PROCEED TO PAYMENT</button></div>  
// //          </div></div>
          
          
          
// //   )
// // }

// // export default Forms

// // // import React from 'react'
// // // // import css from "./Forms.css"

// // //  const Forms = () => {
// // //   return (
// // //     <div><div className='Head'>
// // //       <img src="https://manag.freewaysintl.com/manag/upload/1/poze%20noi/e_shop.jpg" width="60px" alt="E-shop image"/>E-Shop
      
// // //       <div>Men</div>
// // //       <div>Women</div>
// // //       <div>Kinds</div>
// // //        <img src="https://th.bing.com/th/id/OIP.NXKJqYwtaUa8U8ZjJueuBQEsEr?w=188&h=187&c=7&r=0&o=5&pid=1.7 "width="30px"></img>
// // //        <img src="https://www.bing.com/th?id=OIP.wNULHZgGy7kwB3Rdq4hF3AHaHa&w=176&h=170&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" width="30px"></img>
      
// // //       <img src="https://th.bing.com/th/id/OIP.2jllEsoZmQFN6wsFEKdl3gHaHa?w=115&h=128&c=7&r=0&o=5&pid=1.7" width="30px"></img></div>
// // //       <p>Shipping  and Payment</p>
// // //       <button>LOG IN</button>
// // //       <button>SIGN UP</button>
// // //       <h3>Shipping information</h3>
// // //       <div>
// // //         <input type="text" placeholder='Email'></input>
// // //         <input type="text" placeholder='Address'></input> <br/>
// // //          <input type="text" placeholder='FirstName'></input>
// // //          <input type="text" placeholder='City'></input><br/>
// // //          <input type="text" placeholder='Last Name'></input>
// // //          <input type="text" placeholder=" Postal Code/ZIP"></input><br/>
// // //          <input type="text" placeholder="Phone Number"></input>
// // //          <select placeholder='America'value="innn" >
// // //           <option name="city" value="innn" placeholder="Poland"></option>
// // //           <option>India</option>
// // //           <option>America</option>
// // //          </select>
         
// // //       </div>





















      
// // //       <Forms/></div>
  
// // //   )
// // // }
// // // export default Forms
// // // // import {react,useState } from 'react'
// // // // const Forms=()=>{
// // // //     let z;
// // // //     const [Data,setData]=useState('');
// // // //     const [Greet,setGret]=useState('');
// // // //      function Gret(){
// // // //         setGret(()=>setData(z))
// // // //      }
    
// // // //     const change =(e)=>{
// // // //          z=(e.target.value);
    
// // // //     }
     

// // // //     return (<>
// // // //     <input type="text" placeholder="enter your name" onChange={change}></input>
// // // //     <button onClick={Gret} > click </button>
// // // //     <h1> {Data}</h1>
// // // //     </>)
// // // // }
// // // //export default Forms;
// // // // import  {react,useState} from 'react'
// // // // function Forms(){
// // // //     const [hi, setHi]=useState('');
// // // //     const [hello, setHello]= useState(false)
// // // //     const change=(e)=>{setHi(e.target.value);setHello(false)}
// // // //     return(
// // // //         <>
// // // //        { hello? <h1>hello {hi}</h1>: null}
// // // //         <input type ="text" placeholder =" enter your name" onChange={change}></input>
// // // //         <button onClick={()=>setHello(true)}>print</button>
// // // //         </>
// // // //     )

// // // // }
// // // //  export default Forms;
// // // // import{react,useState} from 'react'
// // // // const Forms =()=>{
 
    
// // // //     const[show,setShow]= useState(false)
    
// // // //     return(
   
// // // //         <>
        
// // // //         {show? <h2> hello</h2>: null}
// // // //         <h2>d</h2>
// // // //         <button onClick={()=>setShow(!show)}>show</button>
// // // //         <button onClick={()=>setShow(false)}>hide</button></>
// // // //     )
// // // // }
// // // // export default Forms
// // // // import {react,useState} from 'react';
// // // // const Forms=()=>{
// // // //  const bio=[{id:0,names:"sanjay",age:20},{id:1,names:"Ajay",age:23},{id:2,names:"Rohit",age:24}]
   
// // // //     const [data , setData]=useState(bio)
// // // //     const clear= (id)=>{
// // // //         const remain= data.filter((curelm)=>{
// // // // return  curelm.id !=id;
// // // //         })
// // // //        setData(remain)
// // // //     }
    

// // // //     return(
// // // //         <>
// // // //       {
// // // //         data.map((curelm)=>{
// // // //             return(<h2> i am {curelm.names} and i am {curelm.age} old
// // // //             <button onClick={()=>clear(curelm.id)}>clear</button></h2>
// // // //                 )
// // // //         })
// // // //       }
// // // //       <button onClick={ ()=>setData([])} >delete</button>
        
// // // //         </>
// // // //     )
// // // // }
// // // // export default Forms
// // //  {/*import {react,useState} from 'react'


// // // const Forms=()=>{
// // //     const[Form,setForm]=useState('');
// // //     const [print,setPrint]= useState(false)
    
    
// // // const change=(e)=>{
// // // setForm(e.target.value);setPrint(false);}
// // // const show=()=> setPrint(true);
// // //     return(
// // //         <>
// // //         {/* <h2>hi</h2>
// // //         {print? <h2> hello {Form}</h2>:<h2>bye</h2>}
// // //         <input type="text" placeholder=" enter your name" onChange={change}></input>
// // //         <button onClick={show}> submit</button>
        
// // //         </>
// // //     )
// // // } 
// // // export default Forms;*/}
