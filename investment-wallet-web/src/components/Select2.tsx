import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export default function Select2(){
  return(
    
    <Select.Root>
      <Select.Trigger className='inline-flex h-9 w-52 items-center justify-start bg-white border rounded-lg border-gray-300'>
        <Select.Value
          placeholder='seleciona a fruta'
        />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className='relative'>
            <Select.Viewport className='border border-gray-300 rounded-lg'>
              <Select.Item 
                value='maca'
                className=' bg-white focus:bg-slate-200 flex items-center' 
              >
                <Select.ItemText>maça</Select.ItemText>
              </Select.Item>
              <Select.Item 
                value='banana'
                className=' bg-white focus:bg-slate-200 flex items-center'
              >
                <Select.ItemText
                >
                  banana
                </Select.ItemText>
              </Select.Item>
              {/* <Select.Item value="banana">Banana</Select.Item>
              <Select.Item value="blueberry">Blueberry</Select.Item>
              <Select.Item value="grapes">Grapes</Select.Item>
              <Select.Item value="pineapple">Pineapple</Select.Item> */}
            </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>

  );
}