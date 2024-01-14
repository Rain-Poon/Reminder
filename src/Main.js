import React, { useState } from 'react';
import CheckboxLabels from './Item';
import './Main.css';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const Main = () => {
  // State to track the input value
  const [inputValue, setInputValue] = useState('');

  // State to track the list of submitted values
  const [submittedValues, setSubmittedValues] = useState([]);

  // Event handler for input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Create a timestamp for the current submission
    const timestamp = value.format('YYYY-MM-DD HH:mm');

    console.log(timestamp)

    // Update the list of submitted values with the current input value
    setSubmittedValues([...submittedValues, { value: inputValue, timestamp: timestamp }]);

    // Clear the input field after submission
    setInputValue('');
  };

  // State to track whether the popup is open or closed
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Function to toggle the popup state
  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  const [value, setValue] = React.useState(dayjs());


  return (
    <body>
      <div
        className='Container'
      >
        <h1 style={{ margin: '2px 0px' }}>Reminder</h1>
        <div>
          <button onClick={togglePopup}>{isPopupOpen ? "-" : "+"}</button>

          {/* Conditionally render the popup based on state */}
          {isPopupOpen && (
            <div className="popup">
              <div className="popup-content">
                <form onSubmit={handleSubmit}>
                  {/* Input box with an onChange event handler */}
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type reminder..."
                    style={{ margin: '5px 0px', padding: '3px', minWidth: '200px' }}
                  />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                      <DateTimePicker
                        label="Due Date"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>

                  {/* Submit button */}
                  <button type="submit" style={{ margin: '5px' }}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
        {/* Form with an input box and a submit button */}

        {submittedValues.map((item, index) => (
          <CheckboxLabels value={item.value} timestamp={item.timestamp} />
        ))}
      </div>
    </body >
  );
};

export default Main;
