import { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from 'redux/Contacts/contactsOperayion';

const App = () => {
  const dispatch = useDispatch();
  const isContactsExist = useSelector(state =>
    Boolean(state.contacts.items.length)
  );

  useEffect(() => {
    !isContactsExist && dispatch(getContact());
  }, [dispatch, isContactsExist]);
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
