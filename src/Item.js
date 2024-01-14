import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckboxLabels = ({ value, timestamp }) => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div style={{ border: '1px solid #808080', margin: '10px 0px', borderRadius: '10px', padding: '2px' }}>
      <p style={{ margin: '0px 5px'}}>
        {timestamp}
      </p>
      <FormGroup style={{ maxWidth: '70%' }}>
        <FormControlLabel
          control={<Checkbox style={{ margin: '0px 5px' }} checked={isChecked} onChange={handleCheckboxChange} />}
          label={<span style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{value}</span>}
        />
      </FormGroup>
    </div>
  );
};

export default CheckboxLabels;
