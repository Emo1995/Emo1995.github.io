
	function valid(){
		document.getElementById("name").addEventListener("blur",validatename,false);
		document.getElementById("email").addEventListener("blur",validateemail,false);
		document.getElementById("calBut").addEventListener("click",cal,false); 
	}

	function validatename(){
		 return validateEmpty("name");
	}
	function validateemail(){
		 return validateEmpty("email");
	}

    function validateEmpty(eleName){

      var obj=document.getElementById(eleName);
      var msg=document.getElementById(eleName+"Msg");
  
     if (obj.value!="") {  
          
	          if (msg!=null) {
	          msg.innerHTML="<font color='green'>ok</font>"; 
	          }return true;

	     }  else {

	       if(msg!=null) {
	       msg.innerHTML="<font color='red'>输入内容不可为空！</font>"; 
	       } return false;
	     }
      }

   function validate(){

   return validatename()&&
          validateemail();
    }

   function cal(){
	
		if (validate()){
	       alert("提交成功！");
	    }
   }


	addLoadEvent(valid);

	
