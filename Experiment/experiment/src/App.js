import React from "react";

const laptopImg =
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400";

const mobileImg =
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400";

const headphoneImg =
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400";

function App() {
  return (
    <div style={{display:"flex",
    justifyContent:"center", gap:"20px", padding:"20px", backgroundColor:"#f0f0f0"}}>

      {/* Product Card 1 */}
      <div style={{width:"220px", backgroundColor:"white", border:"1px solid gray", borderRadius:"10px", padding:"15px", textAlign:"center"}}>

        <img
          src={laptopImg}
          alt="Laptop"
          style={{width:"100%", height:"150px", borderRadius:"10px"}}
        />

        <h2 style={{color:"blue", fontSize:"22px"}}>
          Laptop
        </h2>

        <p style={{color:"gray", fontSize:"14px"}}>
          Best laptop for students.
        </p>

      </div>

      {/* Product Card 2 */}
      <div style={{width:"220px", backgroundColor:"white", border:"1px solid gray", borderRadius:"10px", padding:"15px", textAlign:"center"}}>

        <img
          src={mobileImg}
          alt="Mobile"
          style={{width:"100%", height:"150px", borderRadius:"10px"}}
        />

        <h2 style={{color:"green", fontSize:"22px"}}>
          Mobile
        </h2>

        <p style={{color:"gray", fontSize:"14px"}}>
          Latest smartphone available.
        </p>

      </div>

      {/* Product Card 3 */}
      <div style={{width:"220px", backgroundColor:"white", border:"1px solid gray", borderRadius:"10px", padding:"15px", textAlign:"center"}}>

        <img
          src={headphoneImg}
          alt="Headphones"
          style={{width:"100%", height:"150px", borderRadius:"10px"}}
        />

        <h2 style={{color:"red", fontSize:"22px"}}>
          Headphones
        </h2>

        <p style={{color:"gray", fontSize:"14px"}}>
          Wireless sound quality.
        </p>

      </div>

    </div>
  );
}

export default App;