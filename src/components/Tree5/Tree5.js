import React, {Component} from 'react';
import TreeView from 'treeview-react-bootstrap';

let value = [
  {
    text: "Parent 1",
    nodes: [
      {
        text: "Child 1",
        nodes: [
          {
            text: "Grandchild 1"
          },
          {
            text: "Grandchild 2"
          }
        ]
      },
      {
        text: "Child 2"
      }
    ]
  },
  {
    text: "Parent 2"
  }
];

export default class Tree5 extends Component {
  render() {
    return (

<div className='main' style={{textAlign: "left"}}>    
  <TreeView data={value} allowNew={true} removable={true}/>
</div>
    );
  }
}
