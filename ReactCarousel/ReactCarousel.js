import React, {useState} from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const photos = [
  "https://ichef.bbci.co.uk/news/660/cpsprodpb/13F00/production/_95146618_bills.jpg",
  "https://cdn.theatlantic.com/static/mt/assets/science/cat_caviar.jpg",
  "https://i.ytimg.com/vi/NZuzudfcsek/maxresdefault.jpg",
  "https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2018/06/make_impossible_possible_adobe_stock_final_lead_0.jpg"
];
// ----- CLASS COMPONENT -------
// class App extends React.Component {
//   state = {
//     images: photos,
//     imageIndex: 0
//   };

//   handleImageChange = e => {
//     const { imageIndex, images } = this.state;

//     let count =
//       e.target.className === "right" ? imageIndex + 1 : imageIndex - 1;

//     if (count > images.length - 1) {
//       this.setState({ imageIndex: 0 });
//     } else if (count < 0) {
//       this.setState({ imageIndex: images.length - 1 });
//     } else {
//       this.setState({
//         imageIndex: count
//       });
//     }
//   };

//   render() {
//     const { images, imageIndex } = this.state;
//     return (
//       <div className="App">
//         <span className="left" onClick={e => this.handleImageChange(e)}>
//           {"<"}
//         </span>
//         <img src={images[imageIndex]} alt="" width="400px" height="300px" />
//         <span className="right" onClick={e => this.handleImageChange(e)}>
//           {">"}
//         </span>
//       </div>
//     );
//   }
// }

//------ HOOK COMPONENT --------

const App = () => {
  const [images] = useState(photos);
  const [imageIndex, setImageIndex] = useState(0);

  const handleImageChange = e => {
    let count = e.target.className === 'right' 
      ? imageIndex+1
      : imageIndex-1;

      if(count > images.length-1){
        setImageIndex(0);
      } else if(count < 0){
        setImageIndex(images.length-1);
      } else {
        setImageIndex(count);
      }
  }

  return (
    <div className="App">
      <span className="left" onClick={e => handleImageChange(e)}>
        {"<"}
      </span>
      <img src={images[imageIndex]} alt="" width="400px" height="300px" />
      <span className="right" onClick={e => handleImageChange(e)}>
        {">"}
      </span>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
