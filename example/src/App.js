import React from 'react'


import 'react-components-library-dropdownmenu/dist/index.css';
import { DropDownMenu } from 'react-components-library-dropdownmenu';
import { OnHover } from 'react-components-library-dropdownmenu';
import { Style1 } from 'react-components-library-dropdownmenu';
import {Transition2} from 'react-components-library-dropdownmenu';
import styled from 'styled-components';



const Wrapper = styled.div `
  ${Style1}

  ${OnHover}
  ${Transition2}
`

const App = () => {

  const headingComponent = (
    <div>odsfdsfdssdfsdfdsffj</div>
  );
  const childrenComponents = [
    (<div>aha</div>),
    (<div>aha</div>),
    (<div>aha</div>),
    (<div>aha</div>),
  ];

  return (
    
    <Wrapper>
      <DropDownMenu headingComponent={headingComponent}
      childrenComponents={childrenComponents}/>
    </Wrapper>
    
  );
}

export default App
