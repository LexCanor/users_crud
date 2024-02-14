import React from 'react';
import './styles/cardUser.css';

const CardUser = ({user, deleteUser, setEditUser, setIsOpen}) => {

    const handleDelete = () => {
        deleteUser('/users', user.id);
    }

    const handleEdit = () => {
        setEditUser(user);
        setIsOpen(true);
    }

return (
    <div className='all_container'>
        <article className='cardUser_container'>
            <h3 className='cardUser_title'>{user.first_name} {user.last_name}</h3>
            <ul className='cardUser_list'>
                <li className='cardUser_item'><span className='cardUser_span'>Correo </span><span>{user.email}</span></li>
                <li className='cardUser_item cardUser_item_cum'><span className='cardUser_span'>Cumpleaños </span>
                <span className='cardUser_icon'><box-icon name='gift'></box-icon>{user.birthday}</span></li>
            </ul>
            <div className='cardUser_btns'>
            <button onClick={handleDelete} className='cardUser_btn_trash'>
                <box-icon name='trash'></box-icon>
            </button>
            <button onClick={handleEdit} className='cardUser_btn_edit'>
                <box-icon name='edit-alt'></box-icon>
                </button>
            </div>
        </article>
    </div>
)
}

export default CardUser;