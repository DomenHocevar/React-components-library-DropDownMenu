
import React from "react";

/*
props.headingComponent: the headingComponent of the menu, the uppermost, always visible part
props.childrenComponents: children of the menu, the lower, not always visible parts
props.isOn: childrenComponents are visible
*/


export default function DropDownMenu(props) {

    if (props.headingComponent == null) return null;


    return (
        <div className="dropDownMenu">
            {props.headingComponent}
            <div className="childrenContainer">
                {props.childrenComponents}
            </div>
        </div>
    );
}