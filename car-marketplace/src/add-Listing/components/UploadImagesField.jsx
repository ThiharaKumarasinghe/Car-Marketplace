import { Button } from "@/components/ui/button";
import { storage } from "../../../config/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { IoAddCircle, IoCloseCircle } from "react-icons/io5";
import { db } from "../../../config/index";
import { carImages } from "../../../config/schema";


const UploadImagesField = ({triggerUploadImages, setLoader}) => {
  const [selectedFilesList, SetSelectedFilesList] = useState([]);

  useEffect(()=>{
    if(triggerUploadImages){
        uploadImageToServer();
    }

  },[triggerUploadImages])

  const onFileSelection = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      SetSelectedFilesList((prev) => [...prev, file]);
    }
  };

  const onImageRemove = (image, index) => {
    const result = selectedFilesList.filter((item)=>item!=image); 
    SetSelectedFilesList(result);
  };

//   const uploadImage=()=>{
//     selectedFilesList.forEach((file)=>{
//         const fileName = Date.now()+"jpeg";
//         const storageRef = ref(storage, "car-details/" + fileName);
//         const metaDate ={
//             contentType: 'image/jpeg',
//         }
//         uploadBytes(storageRef, file, metaDate).then((snapShot)=>{
//             console.log("Uploaded File");
      
//         })
//     });
//   }

  const uploadImageToServer = async() => {
    setLoader(true);
    await selectedFilesList.forEach((file) => {
      // Generate unique file name
      const fileName = Date.now() + ".jpeg"; // Fixed file extension
      
      // Create a reference to the storage location
      const storageRef = ref(storage, "car-details/" + fileName);
      
      // Metadata for the file
      const metaData = {
        contentType: 'image/jpeg',
      };
      
      // Upload the file to Firebase Storage
      uploadBytes(storageRef, file, metaData).then((snapshot) =>{ 
        console.log("Uploaded File:", snapshot);
      }).then(resp=>{
        getDownloadURL(storageRef).then(async(downloadURL)=>{
            console.log(downloadURL);
            await db.insert(carImages).values({
                imageUrl:downloadURL,
                carListingId:triggerUploadImages
            })
            
        });
      })
      .catch((error) => {
        console.error("Upload failed:", error);
      });
      setLoader(false);
    });
  };
  

  return (
    <div>
      <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">

        {
            selectedFilesList.map((image, index)=>(
                <div key={index}>
                    <IoCloseCircle className=" absolute m-2 text-lg text-primary" onClick={()=>onImageRemove(image, index)}/>
                    <img src={URL.createObjectURL(image)} alt="Uploaded Image" className=" w-full h-[130px] object-cover rounded-xl" />
                </div>

            ))
        }
        <label htmlFor="upload-images">
          <div className=" border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md">
            <h2 className=" text-lg text-center text-primary">+</h2>
          </div>
        </label>
        <input
          type="file"
          multiple
          id="upload-images"
          className="opacity-0"
          onChange={onFileSelection}
        />
      </div>

    </div>
  );
};

export default UploadImagesField;
