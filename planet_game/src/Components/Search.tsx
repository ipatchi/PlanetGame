import React, {ChangeEvent} from "react";
import './Search.css';
// need to access the selected item and create alert
// make the options thing curved as well

interface Props {
    onChange:(value:string) => void;
    options:string[];
    selectedOption?:string;
}

const Search: React.FC<Props> = ({ 
    onChange,
    options=[],
    selectedOption
  }) => { 
    const handleOnChange = (e:ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    };
  return (
    <select
    onChange={handleOnChange}
    value={selectedOption}
    className={'search'}
    >
    {options.map((option, i) => (
        <option value={i}>
            {option}
        </option>
    ))}
    </select>
  );
}

export default Search
