import React from 'react';
import ReactDOM  from 'react-dom';
import {Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue} from 'react-aria-components';
import { ListBoxItemProps } from 'react-aria-components';
//import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// const Map = () => {
//     <div>
//     <ComposableMap>
//       <Geographies geography="/features.json">
//         {({ geographies }) =>
//           geographies.map((geo) => (
//             <Geography key={geo.rsmKey} geography={geo} />
//           ))
//         }
//       </Geographies>
//     </ComposableMap>
//   </div>
// }

const Country = () => {
<ComboBox>
  <Label>Name of Country:</Label>
  <div>
    <Input />
    <Button>▼</Button>
  </div>
  <Popover>
    <ListBox>
      <ListBoxItem>Aardvark</ListBoxItem>
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
      <ListBoxItem>Panda</ListBoxItem>
      <ListBoxItem>Snake</ListBoxItem>
    </ListBox>
  </Popover>
</ComboBox>
}

export default Country;