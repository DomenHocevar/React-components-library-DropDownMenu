# react-components-library-dropdownmenu

> A DropDownMenu component made in React that can be customized using the included styled component css files (these are of three types, onEvent, generalStyle and transition, use one of each in any combination) which you should include in a wrapper container that contains the dropdown menu. It will only work if the onEvent type is followed by the transition type. For instance this is ok:

const Wrapper = styled.div `
  ${Style1}

  ${OnHover}
  
  ${Transition2}
`

And this is not: 
const Wrapper = styled.div `

  ${OnHover}
  
   ${Style1}
   
  ${Transition2}
`

The wrapper must contain the drop down menu and can pass to it props:
- props.headingComponent: component that represents the uppermost part of the drop down menu
- props.childrenComponent: array of components that represent the lower parts of the drop down menu

Example: 
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


[![NPM](https://img.shields.io/npm/v/react-components-library-dropdownmenu.svg)](https://www.npmjs.com/package/react-components-library-dropdownmenu) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-components-library-dropdownmenu
```



## License

MIT © [DomenHocevar](https://github.com/DomenHocevar)
