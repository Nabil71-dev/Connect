import { initializeApp } from "firebase/app";

//configaration
const app = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_auth_Domain,
  projectId: process.env.REACT_APP_project_Id,
  storageBucket: process.env.REACT_APP_storage_Bucket,
  messagingSenderId: process.env.REACT_APP_messaging_Sender_Id,
  appId: process.env.REACT_APP_app_Id

})
export default app;