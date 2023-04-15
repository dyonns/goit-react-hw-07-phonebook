import { useDispatch, useSelector } from 'react-redux';
import s from './ContactList.module.css';
import { deleteContacts } from 'redux/Contacts/contactsOperayion';
import { selectFilteredContacts } from 'redux/Contacts/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();
  return (
    <>
      <div className={s.list}>
        <h2 className={s.headerCont}>Contacts</h2>
        <ul>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id}>
              <p className={s.info}>
                {name}............
                {number}
              </p>
              <button
                type="submit"
                onClick={() => dispatch(deleteContacts(id))}
                className={s.btnContlist}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
