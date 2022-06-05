import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJokes } from "../redux/features/jokeSlice";
import loderImg from "../assets/loader.gif";

export default function Jokesspot() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.jokes.list);

  const [loader, serLoader] = useState(false);

  useEffect(() => {
    setTimeout(()=>{
      dispatch(getJokes());
      serLoader(true);
    }, 1000)

    
  }, [dispatch]);

  const data = list.jokes;

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4 mt-5 text-uppercase"><strong>Jokes Spot</strong> </h3>
      {loader ? (
        <table className="table table-dark table-striped comic_font">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Category</th>
              <th scope="col">Type</th>
              <th scope="col">Joke</th>
              <th scope="col">Language</th>
              {/* <th scope="col">Flags</th> */}
            </tr>
          </thead>
          <tbody>
            {(data || []).map((items, id) => (
              <tr key={id}>
                <td>{items.id}</td>
                <td>{items.category}</td>
                <td>{items.type}</td>
                <td>{items.joke}</td>
                <td>{items.lang}</td>
                {/* <td>{items.flags.nsfw}</td> */}
                {/* {(data.flags || []).map((flg) => (
                <td>{flg.nsfw}</td>
              ))} */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <img src={loderImg} className="loadercss" alt="" />
      )}
    </div>
  );
}
