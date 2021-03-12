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
  const [algo] = useState([
    {
    name:"Quick Sort",
    description:"a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
    ease:"a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
    timeComplexity:"O(n)",
    spaceComplexity:"O(nlogn)",
    code:'public class HelloWorld{public static void main(String[] args) { System.out.println("Hello, World");}}'
    },
    {
      name:"Insertion Sort",
      description:"a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
      ease:"a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
      timeComplexity:"O(n)",
      spaceComplexity:"O(nlogn)",
      code:'public class HelloWorld{public static void main(String[] args) { System.out.println("Hello, World");}}'
      },{
        name:"Snell Sort",
        description:"a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
        ease:"a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
        timeComplexity:"O(n)",
        spaceComplexity:"O(nlogn)",
        code:'public class HelloWorld{public static void main(String[] args) { System.out.println("Hello, World");}}'
        },{
          name:"Merge Sort",
          description:"a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
          ease:"a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
          timeComplexity:"O(n)",
          spaceComplexity:"O(nlogn)",
          code:'public class HelloWorld{public static void main(String[] args) { System.out.println("Hello, World");}}'
          },{
            name:"Rsdix Sort",
            description:"a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
            ease:"a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
            timeComplexity:"O(n)",
            spaceComplexity:"O(nlogn)",
            code:'public class HelloWorld{public static void main(String[] args) { System.out.println("Hello, World");}}'
            },{
              name:"Bubble Sort",
              description:"a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
              ease:"a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
              timeComplexity:"O(n)",
              spaceComplexity:"O(nlogn)",
              code:'public class HelloWorld{public static void main(String[] args) { System.out.println("Hello, World");}}'
              }
  ]);
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
                algoData={algo}
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
