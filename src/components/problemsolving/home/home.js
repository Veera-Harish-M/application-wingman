import React, { useState } from "react";
import ResizePanel from "react-resize-panel";
import Content from "../../content/content";
import Sidebar from "../sidebar/sidebar";
import Description from "../description/Description";
import "./home.css";

function Home() {
  // to display description or not
  const [Close, setclose] = useState(1);
  //get list of content to display
  const [listoforder] = useState([
    "Quick Sort",
    "Bubble Sort",
    "Merge Sort",
    "Insertion Sort",
    "Selection Sort",
    "Heap Sort",
    "Radix Sort",
    "Bucket Sort",
    "Heap Sort",
    "Radix Sort",
    "Bucket Sort",
    "Heap Sort",
    "Radix Sort",
    "Bucket Sort",
  ]);
  //use of algorithm
  const op =
    "a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.";
  // const [useforalg, setuseforalg] = useState(op);
  const [useforalg] = useState(op);
  return (
    <div>
      <div className='home'>
        <ResizePanel direction='e' style={{ flexGrow: "1" }}>
          <div className='sidebar '>
            <Sidebar />
          </div>
        </ResizePanel>
        <div className='content'>
          <Content />
        </div>
        {Close === 1 ? (
          <ResizePanel direction='w' style={{ flexGrow: "1" }}>
            <div className='description'>
              <Description
                closecallback={(cc) => {
                  setclose(cc);
                }}
                listoforder={listoforder}
                useforalg={useforalg}
              />
            </div>
          </ResizePanel>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Home;
