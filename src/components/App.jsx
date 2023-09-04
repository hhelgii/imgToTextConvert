import { useState } from "react";
import { Form } from "./form/form";
import { fetchTextfromImg } from "services/api";
import Notiflix from "notiflix";
// export const App = () => {
//   const [file,setFile]=useState();
//   const [result,setResult]=useState(null)
//   const onFileSelected=(selectedFile)=>{
//     setFile(selectedFile)
//   }
//   const onHandleConverting=async()=>{
//     try {
//       const data=await fetchTextfromImg(file)
//       setResult(data)
//     } catch (error) {
//       Notiflix.Report.failure(error.message)
//     }

//   }
//   return (
//     <>
//       <Form onSelectedFile={onFileSelected}></Form>
//       <button onClick={onHandleConverting}>Send request</button>
//       {result&&result}
//     </>
//   );
// };
import apiInfo from "services/apiInfo";
import styles from './app.module.css'
export const App = () => {
  const [file, setFile] = useState();
  const [result, setResult] = useState('');

  const onFileSelected = (selectedFile) => {
    setFile(selectedFile);
    setResult('')
  };

  const onHandleConverting = async () => {
    try {
      const data = await fetchTextfromImg(file, apiInfo.API_KEY);
      
      const allTexts = data.map((item) => item.text);
      const combinedText = allTexts.join(" ");
      const res=combinedText===''?'There is no text on this image':combinedText;
      setResult(res)
    } catch (error) {
      Notiflix.Report.failure(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Form onSelectedFile={onFileSelected} />
        <button onClick={onHandleConverting} className={styles.sendBtn}>Send request</button>
      </div>
      
      {result && (
        <div className={styles.rightContainer}>
          <h2>Translated text</h2>
          <div>{result}</div>
        </div>
      )}
    </div>
  );
};

