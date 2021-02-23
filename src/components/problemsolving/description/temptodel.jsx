// import React, { useState } from "react";
// import "./description.css";
// import { Alert, Card, Accordion } from "react-bootstrap";
// import { TiArrowLeftThick } from "react-icons/ti";
// import { MdCancel } from "react-icons/md";

// export default function Description({ closecallback }) {
//   // top title change
//   const [Titledescrip, Settitledescrip] = useState("Sort Algorithm");
//   // obj 
//   const listoforder = [
//     "Quick Sort",
//     "Bubble Sort",
//     "Merge Sort",
//     "Insertion Sort",
//     "Selection Sort",
//     "Heap Sort",
//     "Radix Sort",
//     "Bucket Sort",
//   ];
//   const [catlog, Setcatlog] = useState(listoforder);
//   const color = [
//     "primary",
//     "secondary",
//     "success",
//     "danger",
//     "warning",
//     "info",
//     "light",
//     "dark",
//   ];
//   //const [Close,Setclose] = useState(0);
//   // to display list or description
//   const [choo, Setchoo] = useState(1);
//   const [nextsame, Setnextsame] = useState("");
//   const data =
//     "A Sorting Algorithm is used to rearrange a given array or list elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of element in the respective data structure.";
//   const [ddata, setddata] = useState(data);
//   //const [des,Setdes] = useState('');
//   const [chg, Setchg] = useState(0);
//   // complexity
//   const [Time, SetTime] = useState("O(n)");
//   const [space, Setspace] = useState("O(n^2)");
//   //const [show, setShow] = useState(true);
//   const varityhandler = (name, id) => {
//     Setnextsame(name);
//     console.log(id);
//     Setchoo(2);
//     Setchg(id);
//     //get description to display
//     //get time to display
//   };
//   return (
//     <div>
//       {choo == 1 ? (
//         <div>
//           <Alert variant='warning'>
//             <Alert.Heading className='mb-0'>
//               {Titledescrip}
//               <span
//                 style={{
//                   cursor: "pointer",
//                   position: "absolute",
//                   right: "0px",
//                   padding: "12px 16px",
//                   transform: "Translate(0%, -50%)",
//                   color: "red",
//                 }}
//                 onClick={() => {
//                   closecallback(0);
//                 }}>
//                 &times;
//               </span>
//             </Alert.Heading>
//           </Alert>
//           <div style={{ overflowY: "auto", height: "80vh" }}>
//             {catlog.map((item, ids) => (
//               <span onClick={() => varityhandler(item, ids)}>
//                 <Alert
//                   variant={color[ids % 8]}
//                   style={{
//                     cursor: "pointer",
//                     marginRight: "10px",
//                     marginLeft: "10px",
//                   }}>
//                   <h5 className='mb-0'>{item}</h5>
//                 </Alert>
//               </span>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div>
//           <Alert variant={color[chg % 8]}>
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <span style={{ cursor: "pointer" }} onClick={() => Setchoo(1)}>
//                 <TiArrowLeftThick size={25} color='red' />
//               </span>
//               <h5 className='mb-0'>{nextsame}</h5>
//               <span
//                 style={{ cursor: "pointer" }}
//                 onClick={() => {
//                   closecallback(0);
//                 }}>
//                 <MdCancel size={25} color='red' />
//               </span>
//             </div>
//           </Alert>
//           <Accordion className='mb-2'>
//             <Card bg={"success"}>
//               <Accordion.Toggle
//                 as={Card.Header}
//                 eventKey='0'
//                 style={{ cursor: "pointer" }}>
//                 <h4>Description</h4>
//               </Accordion.Toggle>
//               <Accordion.Collapse eventKey='0'>
//                 <Card.Body style={{ height: "60vh", overflowY: "auto" }}>
//                   <Card.Text>
//                     <i>{ddata}</i>
//                   </Card.Text>
//                 </Card.Body>
//               </Accordion.Collapse>
//             </Card>
//           </Accordion>
//           <Alert variant='warning' className='mb-2'>
//             <h5>Time Complexity : {Time}</h5>
//             <h5>Space Complexity : {space}</h5>
//           </Alert>
//           <Accordion className='mb-2'>
//             <Card style={{ backgroundColor: "#FF846A" }}>
//               <Accordion.Toggle
//                 as={Card.Header}
//                 eventKey='1'
//                 style={{ cursor: "pointer" }}>
//                 <h4>Import Code</h4>
//               </Accordion.Toggle>
//               <Accordion.Collapse eventKey='1'>
//                 <Card.Body style={{ height: "45vh", overflowY: "auto" }}>
//                   <Card.Text>
//                     <i>code</i>
//                   </Card.Text>
//                 </Card.Body>
//               </Accordion.Collapse>
//             </Card>
//           </Accordion>
//         </div>
//       )}
//     </div>
//   );
// }