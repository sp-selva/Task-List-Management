import React, { useState } from "react";
import { useSelector } from "react-redux";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

function Viewtasks() {
  const task = useSelector((state) => state.task);

  const [query, setQuery] = useState("");
  const [timefilter, setTimefilter] = useState("10:55 PM");

  return (
    <div className="container mt-5">
      <div className="col-md-8 mar_0_auto">
        <div className="d-flex align-items-center justify-content-between">
          <div className="mb-3 col-md-3">
            <label className="form-label">Start Time</label>
            <TimePicker
              className="form-control"
              placeholder="Start Time"
              use12Hours
              showSecond={false}
              focusOnOpen={true}
              format="hh:mm A"
              onChange={(e) => setTimefilter(e.format("LT"))}
            />
          </div>
          <div className="mb-3 col-md-3">
          <label className="form-label">Filter By Name</label>
            <input
              type="text"
              name=""
              className="form-control"
              placeholder="Search Here..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Task Name</th>
              <th scope="col">Description</th>
              <th scope="col">Start Time</th>
              <th scope="col">End Time</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {task
              .filter(
                (task) =>
                  task.taskname.toLowerCase().includes(query) ||
                  task.starttime.toUpperCase().includes(timefilter)
              )
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.taskname}</td>
                  <td>{item.description}</td>
                  <td>{item.starttime}</td>
                  <td>{item.endtime}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Viewtasks;
