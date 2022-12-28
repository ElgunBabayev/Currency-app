import React from 'react'
import { Select } from 'antd';

function Converter() {


    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };

  return (<>
  <div className='board'>
  <input className='input' type="number" min={0}/>
    <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
      ]}
    />
  </div>
    
  </>
   
  )
}

export default Converter
