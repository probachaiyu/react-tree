import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import DropdownTreeSelect from 'react-dropdown-tree-select'
import data from './data.json'
import './Tree6.css'

const onChange = (curNode, selectedNodes) => { console.log('onChange::', curNode, selectedNodes) }
const onAction = ({action, node}) => { console.log(`onAction:: [${action}]`, node) }
const onNodeToggle = (curNode) => { console.log('onNodeToggle::', curNode) }

export default class Tree6 extends Component{
    render() {
    return (
      <DropdownTreeSelect 
    data={data} 
    onChange={onChange} 
    onAction={onAction} 
    onNodeToggle={onNodeToggle} 
    className="bootstrap-demo"
/>
      );
    }
  }
  
