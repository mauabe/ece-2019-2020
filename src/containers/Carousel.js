// import React from 'react';
// import { Link } from "react-router-dom";
// import * as data from '../assets/data'
// // import {withRouter} from 'react-router-dom';

// console.clear();

// function useTilt(active) {
//   const ref = React.useRef(null);

//   React.useEffect(() => {
//     if (!ref.current || !active) {
//       return;
//     }

//     const state = {
//       rect: undefined,
//       mouseX: undefined,
//       mouseY: undefined
//     };

//     let el = ref.current;

//     const handleMouseMove = (e) => {
//       if (!el) {
//         return;
//       }
//       if (!state.rect) {
//         state.rect = el.getBoundingClientRect();
//       }
//       state.mouseX = e.clientX;
//       state.mouseY = e.clientY;
//       const px = (state.mouseX - state.rect.left) / state.rect.width;
//       const py = (state.mouseY - state.rect.top) / state.rect.height;

//       el.style.setProperty("--px", px);
//       el.style.setProperty("--py", py);
//     };

//     el.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       el.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [active]);

//   return ref;
// }

// const initialState = {
//   slideIndex: 0
// };

// const slidesReducer = (state, event) => {
//   if (event.type === "NEXT") {
//     return {
//       ...state,
//       slideIndex: (state.slideIndex + 1) % data.slides.length
//     };
//   }
//   if (event.type === "PREV") {
//     return {
//       ...state,
//       slideIndex:
//         state.slideIndex === 0 ? data.slides.length - 1 : state.slideIndex - 1
//     };
//   }
// };

// function Slide({ slide, offset }) {
//   const active = offset === 0 ? true : null;
//   const ref = useTilt(active);

//   return (
//     <div
//       ref={ref}
//       className="slide"
//       data-active={active}
//       style={{
//         "--offset": offset,
//         "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
//       }}
//     >
//       <div
//         className="slideBackground"
//         style={{
//           backgroundImage: `url('${slide.image}')`
//         }}
//       />
//       {/* <Link to="/features/chair" > */}
//       <div
//         className="slideContent"
//         style={{
//           backgroundImage: `url('${slide.image}')`
//         }}
//       >
//         <div className="slideContentInner">
//           <h2 className="slideTitle">{slide.title}</h2>
//           <h3 className="slideSubtitle">{slide.subtitle}</h3>
//           <p className="slideDescription">{slide.description}</p>
//         </div>
//       </div>
//       {/* </Link > */}
//     </div>
//   );
// }

// function Carousel() {
//   const [state, dispatch] = React.useReducer(slidesReducer, initialState);

//   return (
//     <div className="slides">
//       <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

//       {[...data.slides, ...data.slides, ...data.slides].map((slide, i) => {
//         let offset = data.slides.length + (state.slideIndex - i);
//         return (
//           <Link to="/features/chair" >
//             <Slide
//               slide={slide}
//               offset={offset}
//               key={i}
//             />
//           </Link>
//         );
//       })}
//       <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
//     </div>
//   );
// }

// const elApp = document.getElementById("app");
// ReactDOM.render(<App />, elApp);

// export default Carousel;