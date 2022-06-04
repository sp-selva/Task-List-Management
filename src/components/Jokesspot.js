// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import getPosts from "../redux/features/jokeSlice";

// function Jokesspot() {
//   const { joke, loading } = useSelector((state) => state.post);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getPosts());
//   }, []);

//   return (
//     <div>
//       {joke.map((item) => (
//         <h3>{item.title}</h3>
//       ))}
//     </div>
//   );
// }

// export default Jokesspot;
