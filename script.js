function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
  function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
  }
  class password{
      strong(){
          let p='';
          let n;
          for(let i=0;i<9;i++){
              if(i==0||i==3||i==8){
                  let n = getRandomNum(97, 122); // ASCII code for 'A'
                  let character = String.fromCharCode(n);
                  //console.log(character +"  "+ n);
                  p+=character;
              }
              else if(i==1||i==6){
                  let n = getRandomNum(65, 90); // ASCII code for 'A'
                  let character = String.fromCharCode(n);
                  //console.log(character +"  "+ n); 
                  p+=character;
              }
              else if(i==5||i==7){
                  let n = getRandomNum(48, 57); // ASCII code for 'A'
                  let character = String.fromCharCode(n);
                  //console.log(character +"  "+ n);
                  p+=character;
              }
              else if(i==2){
                  let n = getRandomNum(33, 46); // ASCII code for 'A'
                  let character = String.fromCharCode(n);
                  //console.log(character  +"  "+ n); 
                  p+=character;
              }
              else if(i==4){
                  let n = getRandomNum(58, 64); // ASCII code for 'A'
                  let character = String.fromCharCode(n);
                  //console.log(character + "  "+n); 
                  p+=character;
                  
              }
              
          }
          document.getElementById("password").innerHTML = "Your Password: "+p;
      }
      weak(){
          let p='';
          let n;
          for(let i=0;i<3;i++){
              if(i==0){
                  let n = getRandomNum(65, 90); // ASCII code for 'A'
                  let character = String.fromCharCode(n);
                  //console.log(character +"  "+ n); 
                  p+=character
                      n++;
                   character = String.fromCharCode(n);
                  //console.log(character +"  "+ n); 
                  p+=character;
              }
              else if(i==1){
                  let n = getRandomNum(97, 122); // ASCII code for 'A'
                  let character = String.fromCharCode(n);
                  //console.log(character +"  "+ n); 
                  p+=character
                      n++;
                   character = String.fromCharCode(n);
                  //console.log(character +"  "+ n); 
                  p+=character;
                      n++;
                   character = String.fromCharCode(n);
                  //console.log(character +"  "+ n); 
                  p+=character;
              }
              else if(i==2){
                  let n = getRandomNum(48, 57); // ASCII code for 'A'
                  let character = String.fromCharCode(n);
                  //console.log(character +"  "+ n); 
                  p+=character
                      n++;
                   character = String.fromCharCode(n);
                  //console.log(character +"  "+ n); 
                  p+=character;
                      n++;
                   character = String.fromCharCode(n);
                  //console.log(character +"  "+ n); 
                  p+=character;
              }
          }
          document.getElementById("password").innerHTML = "Your Password: "+p;
          
      }
      funny(){
          let arr=[`password`, `incorrect`,`12345678`, `iforgot`,`secret`,`computer`, `nothing`, `unknown`,`forever` , `secret`, `password`, `hello`, `world`, `admin`, `welcome`, `access`, `login` , `welcome`, `secret`, `12345`, `qwerty`, `abc123`, `monkey`, `password1` , `12345`, `12345678`, `111111`, `1234567890`, `123123`, `abc123`];
          let n = getRandomInt(0, arr.length);
          console.log(n + "  " + arr[n]);
          let p=arr[n];
          document.getElementById("password").innerHTML = "Your Password: "+p;
          
      }
  }
  let p = new password();
  
  // let asciiCode = 65; // ASCII code for 'A'
  // let character = String.fromCharCode(asciiCode);
  // console.log(character); 
  