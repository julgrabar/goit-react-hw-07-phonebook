import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice';

export const Filter = () => {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const onFilterInput = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <>
      <p>Find contacts by name:</p>
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={onFilterInput}
        className="filter"
      />
    </>
  );
};
