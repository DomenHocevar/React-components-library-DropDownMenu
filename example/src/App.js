import React from 'react'


import 'react-components-library-dropdownmenu/dist/index.css';
import { DropDownMenu } from 'react-components-library-dropdownmenu';
import { OnHover } from 'react-components-library-dropdownmenu';
import { Style1 } from 'react-components-library-dropdownmenu';
import { Animation1 } from 'react-components-library-dropdownmenu'

import styled from 'styled-components';


const SuperWrapper = styled.div`
  display:block;
  width:300px;
  background-color:red;
`
const Wrapper = styled.div `
  ${Style1}
  ${OnHover}
  ${Animation1}
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
    <SuperWrapper>
      <Wrapper>
        <DropDownMenu headingComponent={headingComponent}
        childrenComponents={childrenComponents}/>
      </Wrapper>
    </SuperWrapper>
  );
}

export default App
