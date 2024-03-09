import styled from "styled-components";


const LoginStyled = styled.div`

  .main-container {
    height:100vh;
    background-color: red;
  }

  .loginmain{
  // background-color:red;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
  }

  .textcardmain{
    display:grid;
    place-items:center;
    height:100vh;
    padding-top:2%;
  //  background-color:red;
  }

  .logincard {
    box-shadow: 0px 0px 15px -6px black;
    border-radius:20px;
    background-color: white;
    height:90%;
    padding: 10%;
    width: 75%;
    z-index:2;

    @media screen and (max-width:1200px){
        width:100%;
    }
  }

  .textcard{
   
    // background-position: center;
    // background-size:fit;
    // background-repeat:no-repeat;
    // opacity: 0.1;
    // background-color:white;
   

    height:85%;
    width: 75%;
    
    @media screen and (max-width:1200px){
        width:100%;
    }
 
  }

.textcardheader{
  font-size:37px;
  font-weight:600;
  color:#4f4f4f;
}

  .textcardsubheader{
    font-size:37px;
    font-weight:600;
    color:#009fff;
  }

  .textfield {
    margin-bottom: 9%;
  }

  .submitbutton {
    background-color: #009fff;
    border: none;
    height: 40px;
    width: 100%;
    font-size: 20px;

    font-weight: 500;
    color: white;
  }
  .loginheaderrow {
    text-align: center;
    margin-bottom: 9%;
  }

  .subtextrow {
    margin-bottom: 9%;
    color:#4f4f4f;
    text-decoration:underline;
  }

  .subtext {
    text-align: right;

  }

  .subtext:hover{
    color:#009fff;
    font-weight:500;
  }

  .cardheadertext {
    color:#4f4f4f;
    font-size: 25px;
    font-weight: 700;
  }

  .taskicon{
    margin-top:-1%;
    color:#009fff;
    font-size:40px;
  }

  .textheader{
    font-size:40px;
    font-weight: 700;
  }


  .justified-text {
   
    color:#4f4f4f;
    text-align: justify;
    text-justify: inter-word;
    max-width: 780px; 
    margin-top: 3% ; 
    font-size: 16px;
    line-height: 1.5; 
}

`;

export default LoginStyled;
