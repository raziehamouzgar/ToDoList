import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import './CreateTask.css'

const CreateTask = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const handleChange = (e) => {
    // const name=e.target.name
    // const value=e.target.value

    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = () => {
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    save(taskObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle} >ایجاد کار</ModalHeader>
      <ModalBody>
        <form style={{direction:"rtl"}}>
          <div className="form-group">
            <label className="mb-2 " >نام کار</label>
            <input
              type="text"
              className="form-control"
              value={taskName}
              onChange={handleChange}
              name="taskName"
            />
          </div>
          <div className="form-group">
            <label className='mb-2 mt-2'>توضیحات</label>
            <textarea
              rows="5"
              className="form-control"
              value={description}
              onChange={handleChange}
              name="description"
            ></textarea>
          </div>

        </form>
      </ModalBody>
      <ModalFooter>
          <div className="create">
          <Button  style={{backgroundColor:"rgb(145,40,142)"}} onClick={handleSave}>
          ایجاد
        </Button>
          </div>

        <Button  style={{}} onClick={toggle}>
          لغو
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
