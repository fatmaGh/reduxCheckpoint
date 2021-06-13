import React, {useState} from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux'
import { editTodo } from '../JS/actions/actions';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const EditTodo = ({todo: {text, id, isDone}}) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    const[newText, setNewText] = useState(text)

    const dispatch = useDispatch()

    const update = (e) => {
        e.preventDefault()

        let newTodo = {
            text: newText,
            id: id,
            isDone: false,
        };

        dispatch(editTodo(newTodo))

        closeModal()
    }

    return (
        <div>
        <button onClick={openModal}>Edit</button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <button className='close' onClick={closeModal}>x</button>
            <div>Edit Todo</div>

            <form>
            <input type='text' className='input' value={newText} onChange={(e) => setNewText(e.target.value)} />
            <button onClick={update} className='update'>Update</button>
            </form>
        </Modal>
        </div>
        );
}

export default EditTodo
