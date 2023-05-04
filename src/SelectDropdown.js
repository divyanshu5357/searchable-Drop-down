import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'Option 1', label: 'Option 1' },
  { value: 'Option 2', label: 'Option 2' },
  { value: 'Option 3', label: 'Option 3' },
  { value: 'Option 4', label: 'Option 4' },
  { value: 'Option 5', label: 'Option 5' },
];

const SelectDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        isSearchable
      />
    </div>
  );
};

export default SelectDropdown;
