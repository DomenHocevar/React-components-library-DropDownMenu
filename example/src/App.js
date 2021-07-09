import React from 'react'


import 'react-components-library-dropdownmenu/dist/index.css'
import { DropDownMenu } from 'react-components-library-dropdownmenu'
import { style1 } from 'react-components-library-dropdownmenu'
import { animation1 } from 'react-components-library-dropdownmenu'
import { onHover } from 'react-components-library-dropdownmenu'

const App = () => {

  const headingComponent = (
    <div>oj</div>
  );
  const childrenComponents = [
    (<div>aha</div>),
    (<div>aha</div>),
    (<div>aha</div>),
    (<div>aha</div>),
  ];

  return <div style="">
    <DropDownMenu headingComponent={headingComponent}
  childrenComponents={childrenComponents}/>
    </div>
}

export default App
