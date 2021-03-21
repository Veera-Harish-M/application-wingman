import React, { useState, useEffect } from "react";
import ResizePanel from "react-resize-panel";
import Content from "../../content/content";
//import Sidebar from "../sidebar/sidebar";
import Description from "../description/Description";
//top bot heading
import HeaderBot from "../sidebar/HeaderBot";
//full chat
import Chart from "../sidebar/Chart";

import "./home.css";

function Home() {
  //Quote
  const quota = [
    `All our dreams can come true, if we have the courage to pursue them. – Walt Disney`,
    `The secret of getting ahead is getting started. – Mark Twain`,
    `Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve. – Mary Kay Ash`,
    `Only the paranoid survive. – Andy Grove`,
    `I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.’ – Leah Busque`,
    `We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success. – Arianna Huffington`,
    `Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE. – Joss Whedon`,
    `Do one thing every day that scares you. ― Eleanor Roosevelt`,
    `Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers. – Socrates`,
    `Do what you feel in your heart to be right – for you’ll be criticized anyway. - Eleanor Roosevelt`,
    `Happiness is not something ready made. It comes from your own actions. - Dalai Lama XIV`,
    `Whatever you are, be a good one. - Abraham Lincoln`,
    `If we have the attitude that it’s going to be a great day it usually is. – Catherine Pulsifier`,
  ];
  // chat history
  const [fillup, setFillup] = useState([
    { id: "0", msg: quota[Math.floor(Math.random() * 13 + 1)], who: "bot" },
    { id: "1", msg: "Let's us Start coding!", who: "bot" },
    { id: "2", msg: "Hello ", who: "user" },
  ]);

  // useEffect = () => {
  //   const url = "https://application-wingman.herokuapp.com/api/getAlgoSearch";

  //   //send google access token as bearer token

  //   //post request with bearer token in header and json body details
  //   fetch(url, {
  //     method: "GET",
  //   })
  //     //receive response as json
  //     .then((res) => {
  //       res.json();
  //       console.log(res.json());
  //     })

  //     //catch fetch errors => could'nt reach api
  //     .catch((error) => {
  //       //set error message to state error
  //       // setMessage("Something Went Wrong!");
  //       // setNegativeSnackBarOpen(true);
  //       console.error("Error", error);
  //     }),
  //     [fillup];
  // };

  // to display description or not
  const [Close, setclose] = useState(1);
  //get list of content to display
  const [algo] = useState([
    {
      name: "Quick Sort",
      description:
        "a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
      ease:
        "a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(nlogn)",
      code:
        'public class HelloWorld{public static void main(String[] args) { System.out.println("Hello, World");}}',
    },
    {
      name: "Insertion Sort",
      description:
        "a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
      ease:
        "a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(nlogn)",
      code:
        'public class HelloWorld{public static void main(String[] args) { System.out.println("Hello, World");}}',
    },
    {
      name: "Snell Sort",
      description:
        "a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
      ease:
        "a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(nlogn)",
      code:
        'public class HelloWorld{public static void main(String[] args) { System.out.println("Hello, World");}}',
    },
    {
      name: "Merge Sort",
      description:
        "a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
      ease:
        "a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(nlogn)",
      code:
        'public class HelloWorld{public static void main(String[] args) { System.out.println("Hello, World");}}',
    },
    {
      name: "Rsdix Sort",
      description:
        "a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
      ease:
        "a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(nlogn)",
      code:
        'public class HelloWorld{public static void main(String[] args) { System.out.println("Hello, World");}}',
    },
    {
      name: "Bubble Sort",
      description:
        "a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
      ease:
        "a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(nlogn)",
      code:
        'public class HelloWorld{public static void main(String[] args) { System.out.println("Hello, World");}}',
    },
  ]);

  // chat histery

  function handleChange(newValue) {
    setFillup(newValue);
  }
  return (
    <div>
      <div className='home'>
        <ResizePanel direction='e' style={{ flexGrow: "1" }}>
          <div className='sidebar '>
            <HeaderBot />
            <Chart val={fillup} onChange={handleChange} />
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
