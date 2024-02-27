import { useState } from 'react';
import './Search.css';

const Search = ({
  placeholder_text,
  item_list,
  call_on_click,
}: {
  placeholder_text?: string;
  item_list: string[];
  call_on_click: (value: string) => void;
}) => {
  //List of things and usestate for the filtered list, and whether the list should be displayed or not
  const [showList, setShowList] = useState(false);
  const [filteredList, setFilteredList] = useState(item_list);

  //Function which handles any changes to the input box - resulting in changing the filter of shown planets
  const typingHandler = (value: string) => {
    setFilteredList([
      ...item_list.filter((planet) =>
        planet.toLowerCase().includes(value.toLowerCase())
      ),
    ]);
    setShowList(value.length > 0);
  };
  //Function to send the submitted choice back to the caller - just an alert for now
  const submitChoiceHandler = (value: string) => {
    call_on_click(value);
    doHideList();
  };

  //Basic functions to show/hide the list that can be called from various times
  const doShowList = () => setShowList(true);
  const doHideList = () => setShowList(false);

  //Return all of the list items as h2 elements with their respective elements from the list
  const displayedList = filteredList.map((data) => {
    return (
      <div className="result" key={data}>
        <h2
          style={{ display: showList ? 'block' : 'none' }}
          onClick={(e) => submitChoiceHandler(e.currentTarget.innerText)}
        >
          {data}
        </h2>{' '}
      </div>
    );
  });

  //The TSX which is returned as a Search Bar
  return (
    <>
      <div className="search">
        <div onFocus={doShowList}>
          <input
            type="text"
            placeholder={placeholder_text || 'Search...'}
            onChange={(e) => typingHandler(e.target.value)}
          ></input>
          {displayedList}
        </div>
      </div>
    </>
  );
};

export default Search;
