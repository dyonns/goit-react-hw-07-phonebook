import { useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { changeFilter } from 'redux/Contacts/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <label className={s.filter}>
        <p>Filter</p>
        <input
          type="text"
          onChange={e => dispatch(changeFilter(e.target.value))}
          className={s.filterInput}
        />
      </label>
    </div>
  );
};

export default Filter;
