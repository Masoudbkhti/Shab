"use client";
import "./styles.css"
// import * as React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import CssBaseline from "@mui/material/CssBaseline";
// import useScrollTrigger from "@mui/material/useScrollTrigger";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";

// function ElevationScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 8 : 0,
//     className :trigger ?  "nav" : ""
//   });
// }

// ElevationScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   window: PropTypes.func,
// };

// export default function ElevateAppBar(props) {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <ElevationScroll {...props}>
//         <AppBar>
//           <Toolbar >
//             <Typography variant="h6" component="div" >
//               Scroll to elevate App bar
//             </Typography>
//           </Toolbar>
//         </AppBar>
//       </ElevationScroll>
//       <Toolbar />
//       <Container>
//         <Box sx={{ my: 2 }}>
//           {[...new Array(12)]
//             .map(
//               () => `Cras mattis consectetur purus sit amet fermentum.
// Cras justo odio, dapibus ac facilisis in, egestas eget quam.
// Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
// Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
//             )
//             .join("\n")}
//         </Box>
//       </Container>
//     </React.Fragment>
//   );
// }
// "use client

// function useScrollDirection() {
//   const [scrollDirection, setScrollDirection] = useState(null);

//   useEffect(() => {
//     let lastScrollY = window.pageYOffset;

//     const updateScrollDirection = () => {
//       const scrollY = window.pageYOffset;
//       const direction = scrollY > lastScrollY ? "down" : "up";
//       if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
//         setScrollDirection(direction);
//       }
//       lastScrollY = scrollY > 0 ? scrollY : 0;
//     };
//     window.addEventListener("scroll", updateScrollDirection); // add event listener
//     return () => {
//       window.removeEventListener("scroll", updateScrollDirection); // clean up
//     }
//   }, [scrollDirection]);

//   return scrollDirection;
// };
// export default function Navbar() {
//   const scrollDirection = useScrollDirection();
  
//   return (
//     <div className={`header ${scrollDirection === "down" ? "nav" : "nav"}`}>
//       <div>Disappearing Header</div>
//     </div>
//   );
// };
import React from 'react'
import { useState } from "react";
export default function Navbar() {
    const [fix , setFix] = useState(false)
    function setfixed (){
         if(window.scrollY >= 80){
            setFix(true)
         }else{
            setFix(false); 
         }
    }
    window.addEventListener("scroll",setfixed)
  return (
    <div>
      <div className={`navbar ${fix ? "fixed" : "navbar"}`}>
        Disappearing Header
      </div>
    </div>
  );
}