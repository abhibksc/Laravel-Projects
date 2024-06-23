import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Correct import for useDispatch
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons"; // Example icon, replace with your own
import { addItems } from "../ReduxStore/Slices/publishItems";


const SellAlbum = () => {
  const [albumName, setalbumName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [logo, setLogo] = useState(null);
  const [type, setType] = useState("");
  const [song, setSong] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const registered = useSelector((state)=>state.authSlice.registered);
  const userId = useSelector((state)=>state.authSlice.userId);
  console.log(userId);




  const logoref = useRef(null);
  const Songref = useRef(null);


  const handleLogoButtonClick = () => {
    logoref.current.click();
  };

  const handleSongButtonClick = () => {
    Songref.current.click();
  };

  const handleLogoChanges = (event) => {
    const file = event.target.files[0];
    setLogo(file)
    console.log("Selected file:", file);
    // You can add further handling of the selected file here
  };

  const handleSongChanges = (event) => {
    const file = event.target.files[0];
    setSong(file)
    console.log("Selected file:", file);
    // You can add further handling of the selected file here
  };


  const handleformSubmit = async (e)=>{
    e.preventDefault();

    console.log(registered);
    console.log(userId);


 


   if(registered){
    if(albumName && description && price && logo && type && song && userId){

      const formData = new FormData();
      formData.append('albumName', albumName);
      formData.append('albumDescription', description);
      formData.append('price', price);
      formData.append('albumPic', logo); // where albumPicFile is the file object
      formData.append('type', type);
      formData.append('albumSong', song); // where audioFile is the audio file object
      formData.append('user_id', userId); // where audioFile is the audio file object

      

   

        const send = await fetch('http://localhost:8000/api/postSong',{
         
          method: 'POST',
          body: formData,
          redirect: 'follow',

          
        })

        if (!send.ok) {
          const errorText = await send.text(); // Read the response body as text
          console.error('Error response:', errorText);
          throw new Error(`HTTP error! status: ${send.status}`);
      }

        console.log(send);

        const response = await send.json();
        console.log(response);
       
        alert("Published")

        navigate("/store");
    }
   }
   else{
    console.log("not run");
   alert("Please login!")
   }

  }
  return (
    <div className="flex flex-col justify-center  h-screen   bg-gradient-to-r from-primary to-secondary ">
      <div>
        <img
          className="md:w-screen h-screen object-cover"
          src="https://media.istockphoto.com/id/1309386216/photo/browsing-records-in-a-vintage-shop.jpg?s=1024x1024&w=is&k=20&c=ibPjQh9tABTnSkhrbDIKT0Y6r8h0pDW02oJoPQCUjFw="
          alt=""
        />
      </div>
      <div className=" h-96 bg-black bg-opacity-40 absolute   md:right-28 backdrop-blur-xl ">
        <form
          //    onSubmit={handleForm}
          //    data-aos="fade-up"
          className="text-center   h-full bg-transparent rounded-lg   flex flex-col w-96 shadow-md shadow-black justify-around opacity-95"
          onSubmit={handleformSubmit}
        >
          <h1 className="text-center font-bold text-xl bg-black bg-opacity-60 p-3  ">
            Sell Your Album
          </h1>

          <div className="flex justify-around mx-4">
            <input
              className="w-48 rounded-md focus:outline-none p-2"
              placeholder="Album Name"
              type="text"
              value={albumName}
              onChange={(e)=>setalbumName(e.target.value)}
            />
          </div>

          <div className="flex justify-around mx-4">
            <input
              className="w-48 h-20  rounded-md focus:outline-none p-2"
              placeholder="Album Description"
              type="text"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
            />
          </div>

          <div className="flex justify-around mx-4">
            <input
              className="w-48 rounded-md focus:outline-none p-2"
              placeholder="Price"
              type="number"
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
            />
          </div>

          <div className="flex justify-around mx-4">
            <input
              ref={logoref}
              className="hidden" // Hide the default file input
              type="file"
              // value={}
              onChange={handleLogoChanges}
            />
            <label
              className="w-48 rounded-md focus:outline-none p-1 cursor-pointer bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
              onClick={handleLogoButtonClick}
            >
              <FontAwesomeIcon icon={faUpload} className="mr-2" />
              Upload Logo
            </label>
          </div>

          <div className="flex justify-around mx-4">
      <select
        className="w-48 rounded-md focus:outline-none p-1"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="" key="default" disabled>
          Select
        </option>
        <option value="Classics" key="classics">
        
        </option>
        <option value="Melodic" key="melodic">

        </option>
        <option value="Pop" key="pop">
   
        </option>
        <option value="Rap" key="rap">
 
        </option>
        <option value="Rock" key="rock">
   
        </option>
      </select>
    </div>

          <div className="flex justify-around mx-4">
            <input
              ref={Songref}
              className="hidden" // Hide the default file input
              type="file"
              onChange={handleSongChanges}
            />
            <label
              className="w-48 rounded-md focus:outline-none p-1 cursor-pointer bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
              onClick={handleSongButtonClick}
            >
              <FontAwesomeIcon icon={faUpload} className="mr-2" />
              Upload Song
            </label>
          </div>

          <button className="w-28 mx-auto shadow-sm bg-primary text-white rounded-lg hover:bg-red-900">
            {/* {updation == "Empty" ? "Add" : "Update"} */}
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellAlbum;
