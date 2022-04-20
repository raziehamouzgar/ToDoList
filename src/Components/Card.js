import React, {useState} from 'react';
import EditTask from '../modals/EditTask.js'

const Card = ({taskObj, index , deleteTask , updateListArray}) => {

const [modal, setModal]=useState(false);




const toggle = () =>{
    setModal(!modal);
}

const updateTask =(obj) =>{
    updateListArray(obj,index)
}

const handleDelete = () =>{
    deleteTask(index)
}


    return (
        <div className='card-wrapper mr-5'>
           <div className = "card-top" style={{backgroundColor: "purple"}}></div>
       <div className='task-holder'>
           <div className='dir'><div className = "card-header" style={{backgroundColor:" rgb(145,40,142)", borderRadius: "10px" }}>{taskObj.Name}</div></div>
     <p className='mt-3 description'>{taskObj.Description}</p>

     <div className='edit-and-delete' style={{position:'absolute' ,right:'20px' , bottom:'20px'}}>
     <i className = "far fa-edit mr-3 edits" style={{ cursor : "pointer" , margin:'5px'} } onClick = {() => setModal(true)}></i>
    <i className="fas fa-trash-alt deleteTask" style = {{cursor : "pointer" , }} onClick = {handleDelete}></i>
     </div>
</div>

<EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;