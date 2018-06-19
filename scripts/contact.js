   window.onload=function(){
		document.getElementById("name").addEventListener("blur",validatename,false);
		document.getElementById("email").addEventListener("blur",validateemail,false);
		document.getElementById("calBut").addEventListener("click",cal,false); 
   }

function validateEmpty(eleName) {

  var obj=document.getElementById(eleName);
  var msg=document.getElementById(eleName+"Msg");
   
      if(obj.value!=""){  

          if(msg!=null) {
          msg.innerHTML="<font color='green'></font>"; 
          }return true;

      } else {

	       if(msg!=null) {
	       msg.innerHTML="<font color='red'>输入内容不可为空！</font>"; 
	       } return false;

      }
 }
	function validatename(){
		return validateEmpty("name");
	}

	function validateemail(){
		return validateRegex("email", /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);  
	}

    function validateRegex(eleName,regex){    //正则
		  var obj=document.getElementById(eleName);
		  var msg=document.getElementById(eleName+"Msg");
		    if(regex.test(obj.value)){ 
		          
		          if(msg!=null) {
		          msg.innerHTML=""; 
		          } return true;

		     }  else {

			       if(msg!=null) {
			       msg.innerHTML="<font color='red'>邮箱格式不正确！</font>"; 
			       }return false;
             }
    }

	function validate(){
	   return validatename()&&
	          validateemail();
	}

	function cal(){
		
		if (validate()){
	       alert("吃得愉快！~");
	   }

	}

	


