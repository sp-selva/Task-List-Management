import React, { useState } from "react";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../redux/features/taskSlice";

function Edittask() {
  const [taskname, setTaskname] = useState("");
  const [description, setDescription] = useState("");
  const [starttime, setStarttime] = useState("");
  const [endtime, setEndtime] = useState("");
  const [status, setStatus] = useState("");

  const task = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const addTaskhandle = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        taskname: taskname,
        description: description,
        starttime: starttime,
        endtime: endtime,
        status: status,
      })
    );
  };

  return (
    <div className="container">
      <div className="row">
        <h3 className="text-center mb-4 mt-5 text-uppercase">
          <strong>Create Task</strong>
        </h3>
        <form
          className="col-md-6 mt-3 align-items-center justify-content-center flex-column edit_form"
          onSubmit={addTaskhandle}
        >
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Task Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setTaskname(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Description</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label className="form-label">Start Time</label>
                <TimePicker
                  className="form-control"
                  placeholder="Start Time"
                  use12Hours
                  showSecond={false}
                  focusOnOpen={true}
                  format="hh:mm A"
                  onChange={(e) => setStarttime(e.format("LT"))}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label className="form-label">End Time</label>
                <TimePicker
                  className="form-control"
                  placeholder="End Time"
                  use12Hours
                  showSecond={false}
                  focusOnOpen={true}
                  format="hh:mm A"
                  onChange={(e) => setEndtime(e.format("LT"))}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="mb-3">
                <label className="form-label">Task Status</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="scheduled">Scheduled</option>
                  <option value="running">Running</option>
                  <option value="expired">Expired</option>
                </select>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <button
                type="submit"
                className="btn btn-success col-md-5 mt-3 text-uppercase"
              >
                Add Task
              </button>
            </div>
          </div>
        </form>

        <div className="col-md-6 mar_0_auto mt-2">
          {task.map((item, id) => (
            <div className="list_card" key={item.id}>
              <div className="text-start gap-3">
                <p>Task Name: {item.taskname}</p>
                <p>Description: {item.description}</p>
                <p>Start Time : {item.starttime}</p>
                <p>Start Time: {item.endtime}</p>
                <p>Status: {item.status}</p>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column gap-3">
                <button
                  type=""
                  className="btn btn-danger text-uppercase"
                  onClick={() => dispatch(deleteTask({ id: item.id }))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Edittask;
