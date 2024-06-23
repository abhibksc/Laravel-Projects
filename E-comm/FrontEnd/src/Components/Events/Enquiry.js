import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Enquiry() {
  const registered = useSelector((state)=>state.authSlice.registered);
  const userId = useSelector((state)=>state.authSlice.userId);
  const navigate = useNavigate();



  const [artistType, setartistType] = useState("");
  const [eventType, seteventType] = useState("");
  const [location, setLocation] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [budget, setBudget] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const generateOptions = (start, end, step) => {
    const options = [];
    for (let i = start; i <= end; i += step) {
      options.push(i);
    }
    return options;
  };

  const budgetOptions = generateOptions(10000, 100000, 10000);

  const handleEventCategoryChange = (e) => {
    setartistType(e.target.value);
  };

  const handleMusicGenreChange = (e) => {
    seteventType(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleEventDateChange = (e) => {
    // Basic validation to ensure only numeric and '-' characters are allowed
    const inputDate = e.target.value.replace(/[^0-9-]/g, '');
    setEventDate(inputDate);
  };

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();



    
   if(registered){
    if(artistType && eventType && location && eventDate && budget && userId){

      const formData = new FormData();
      formData.append('artistType', artistType);
      formData.append('eventType', eventType);
      formData.append('location', location);
      formData.append('eventDate', eventDate); // where albumPicFile is the file object
      formData.append('budget', budget);
      formData.append('user_id', userId); // where audioFile is the audio file object

      

   

        const send = await fetch('http://localhost:8000/api/bookevent',{
         
          method: 'POST',
          body: formData,
          redirect: 'follow',

          
        })

        if (!send.ok) {
          const errorText = await send.text(); 
          console.error('Error response:', errorText);
          throw new Error(`HTTP error! status: ${send.status}`);
      }

        console.log(send);

        const response = await send.json();
        console.log(response);

        setSubmitted(true);
       
        // alert("Booked")

        // navigate("/");
    }
   }
   else{
    console.log("not run");
   alert("Please login!")
   }
  };

  return (
    <div className="bg-gradient-to-r from-primary to-secondary h-screen">
      <div className="absolute flex items-center justify-center w-full h-full bg-black bg-opacity-40 backdrop-blur-xl">
        {!submitted && (
          <form
            className="text-center h-4/6 bg-transparent rounded-lg flex flex-col w-96 shadow-md shadow-black justify-around opacity-95"
            onSubmit={handleSubmit}
          >
            <h1 className="text-center font-bold text-xl bg-white bg-opacity-60 p-3">
              Book Event
            </h1>

            <div className="flex justify-around mx-4 text-black">
              <select
                className="w-full rounded-md focus:outline-none p-1 text-black"
                value={artistType}
                onChange={handleEventCategoryChange}
              >
                <option value="" disabled>
                  Select Artist Type
                </option>
                <option value="Wedding">Singer</option>
                <option value="Birthday">Bands</option>
                <option value="Corporate">Musician</option>
                <option value="Concert">DJ</option>
              </select>
            </div>

            <div className="flex justify-around mx-4 text-black">
              <select
                className="w-full rounded-md focus:outline-none p-1 text-black"
                value={eventType}
                onChange={handleMusicGenreChange}
              >
                <option value="" disabled>
                  Event Type
                </option>
                <option value="Classics">Corporate Events</option>
                <option value="Melodic">Wedding Events</option>
                <option value="Pop">College Events</option>
                <option value="Rap">House Parties</option>
                <option value="Rock">Private Events</option>
                <option value="Rock">Virtual Events</option>
              </select>
            </div>

            <div className="flex justify-around mx-4">
              <input
                className="w-full rounded-md focus:outline-none p-2"
                placeholder="Location"
                type="text"
                value={location}
                onChange={handleLocationChange}
              />
            </div>

            <div className="flex justify-around mx-4">
              <input
                className="w-full rounded-md focus:outline-none p-2"
                placeholder="DD-MM-YYYY"
                type="text"
                value={eventDate}
                onChange={handleEventDateChange}
              />
            </div>

            <div className="flex justify-around mx-4 text-black">
              <select
                className="w-full rounded-md focus:outline-none p-1 text-black"
                value={budget}
                onChange={handleBudgetChange}
              >
                <option value="" disabled>
                  Please set your budget!
                </option>
                {budgetOptions.map((option) => (
                  <option value={option} key={option}>
                    {option.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-28 mx-auto shadow-sm bg-primary text-white rounded-lg hover:bg-red-900"
            >
              Book
            </button>
          </form>
        )}

        {submitted && <PersonalDetails />}
      </div>
    </div>
  );
}

export default Enquiry;
