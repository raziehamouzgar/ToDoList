import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {

        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }


    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    },[]);

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>به روز رسانی کار</ModalHeader>
            <ModalBody>
<form style={{direction:"rtl"}} >
                    <div className = "form-group">
                        <label className="mb-2">نام کار</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label className="mb-2 mt-2">توضیحات</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                    </form>

            </ModalBody>
            <ModalFooter>
            <Button style={{backgroundColor:"rgb(145,40,142)"}}  onClick={handleUpdate}>به روز رسانی</Button>
            <Button color="secondary" onClick={toggle}>لغو</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;