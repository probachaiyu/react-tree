import React, {Component} from 'react';
import Tree from 'react-d3-tree';

import {myTreeData} from './data.js';


export default class Tree1 extends Component {
  state = {}

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 3,
        y: dimensions.height / 5
      }
    });
  }

  render() {
    return (
      <div style={{width: '100%',height: '50em'}} ref={tc => (this.treeContainer = tc)}>
      <p> React 3D Tree </p> 
      <Tree data={myTreeData} translate={this.state.translate}  orientation={'vertical'}
      />
      </div>
      );
    }
  }