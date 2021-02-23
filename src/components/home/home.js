import React from 'react';
import ResizePanel from 'react-resize-panel';
import Content from '../content/content';
import Sidebar from '../sidebar/sidebar';
import Description from "../description/description";
import './home.css';

function home() {
  return (
    <div>
      <div className="home">
        <ResizePanel direction="e" style={{flexGrow: '1'}}>
          <div className="sidebar ">
            <Sidebar />
          </div>
        </ResizePanel>
        <div className="content">
          <Content />
        </div>

        <ResizePanel direction="w" style={{flexGrow: '1'}}>
	    <div className="description">
        	<Description />
        </div>
        </ResizePanel>
      </div>
    </div>
  );
}

export default home;
