import { Select } from 'antd';

export default function Select3(){
  return(
    <Select
      className='flex items-center'
      defaultValue="lucy"
      style={
              { 
                width: 120,
                borderStyle: 'solid',
                borderWidth: '2px',
                borderColor: "#FF0000",
                borderRadius: '8px',
              }
      }
      bordered={false}
      // onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'disabled',
          disabled: true,
          label: 'Disabled',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
      ]}
    />
  );
}