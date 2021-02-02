		
		var som = 0;
		var mnt1 = 0;
		var mnt2 = 0;
		var mnt3 = 0;

		var ch1 = "";
		var ch2 = "";
		var ch3 = "";


		var bttn = document.querySelector(".sub");

		var faireUneCommande = function(e) {
		
			var the_text0 = window.document.the_form.the_text0.value;
			var the_text1 = window.document.the_form.the_text1.value;
			var the_text2 = window.document.the_form.the_text2.value;
			var the_text3 = window.document.the_form.the_text3.value;

			if ( the_text0 !="" && the_text1 !="" && the_text2 !="" && the_text3 !="") {

				var newForm = document.createElement("form");
				newForm.setAttribute("id","form1")
				var newDiv1 = document.createElement("div");
				newDiv1.setAttribute("class","group");
				newDiv1.setAttribute("id","btn");


				var newInput0 = document.createElement("input");
				newInput0.setAttribute("type",'button');
				newInput0.setAttribute("value",'Ours Burgers');
				newInput0.setAttribute("class",'conf1');
				newInput0.setAttribute("id",'conf1');

				newInput0.addEventListener("click",entree);

				newDiv1.appendChild(newInput0);

				newForm.appendChild(newDiv1);

					


				var newSec = document.getElementById("cmd");
				var span =  document.getElementById("spa");
				newSec.insertBefore(newForm, span);

					

				var newForm = document.createElement("form");
				newForm.setAttribute("id","form2")
				var newDiv1 = document.createElement("div");
				newDiv1.setAttribute("class","group");

				var newInput2 = document.createElement("input");
				newInput2.setAttribute("type",'button');
				newInput2.setAttribute("value","Ours Chick'n Snack");
				newInput2.setAttribute("class",'conf2');
				newInput2.setAttribute("id",'conf2');

				newInput2.addEventListener("click",plat);

				newDiv1.appendChild(newInput2);

				newForm.appendChild(newDiv1);


				var newSec = document.getElementById("cmd");
				var span =  document.getElementById("spa");
				newSec.insertBefore(newForm, span);


		

				var newForm = document.createElement("form");
				newForm.setAttribute("id","form3")
				var newDiv1 = document.createElement("div");
				newDiv1.setAttribute("class","group");


				var newInput4 = document.createElement("input");
				newInput4.setAttribute("type",'button');
				newInput4.setAttribute("value",'Ours Assiette & Box');
				newInput4.setAttribute("class",'conf3');
				newInput4.setAttribute("id",'conf3');

				newInput4.addEventListener("click",dessert);


				newDiv1.appendChild(document.createElement("br"));
				newDiv1.appendChild(newInput4);

				newForm.appendChild(newDiv1);


				var newSec = document.getElementById("cmd");
				var span =  document.getElementById("spa");
				newSec.insertBefore(newForm, span);

				var lien = document.createElement("a");
				lien.setAttribute("href","#fac");
					


				var FormConf = document.createElement("form");
				FormConf.setAttribute("id","form4");
				var divConf = document.createElement("div");
				divConf.setAttribute("class","group");
				var pconf = document.createElement("p");
				pconf.setAttribute("class", "para")
				var textConf = document.createTextNode("Please confirm your choice:");

				var btnConf = document.createElement("input");
				btnConf.addEventListener("click", facture);
				

				btnConf.setAttribute("type","button");
				btnConf.setAttribute("value"," Confirm ");
				btnConf.setAttribute("class","conf4");
				btnConf.setAttribute("id","conf4");
				

				lien.appendChild(btnConf);
				pconf.appendChild(textConf);
				divConf.appendChild(pconf);
				divConf.appendChild(lien);
				FormConf.appendChild(divConf);

				var newSec = document.getElementById("cmd");
				var span =  document.getElementById("spa");
				newSec.insertBefore(FormConf, span);


				bttn.removeEventListener("click",faireUneCommande);


			} else {

				alert("You must give these informations.\n");

			}


		}

		bttn.addEventListener("click",faireUneCommande);
			



		
		var entree = function(e) {

			var newDiv = document.createElement("div");
			newDiv.setAttribute("id","newDiv");

			var newP = document.createElement("p");
			newP.setAttribute("class", "para");
			var text = document.createTextNode("Select from the list below:");

			var newSelect = document.createElement("select");
			newSelect.setAttribute("id","entre");
			var newOption1 = document.createElement("option");
			var newOption2 = document.createElement("option");
			var newOption3 = document.createElement("option");
			var newOption4 = document.createElement("option");
			var newOption5 = document.createElement("option");

				
			var newText1 = document.createTextNode("Chicken Burger");
			var newText2 = document.createTextNode("Kebab Burger");
			var newText3 = document.createTextNode("Crazy Kebab Burger");
			var newText4 = document.createTextNode("Single Hot Dog");
			var newText5 = document.createTextNode("Supreme Burger");



			newOption1.appendChild(newText1);
			newOption2.appendChild(newText2);
			newOption3.appendChild(newText3);
			newOption4.appendChild(newText4);
			newOption5.appendChild(newText5);
				
			
			newSelect.appendChild(newOption1);
			newSelect.appendChild(newOption2);
			newSelect.appendChild(newOption3);
			newSelect.appendChild(newOption4);
			newSelect.appendChild(newOption5);

			newP.appendChild(text);
			newP.appendChild(document.createElement("br"));
			newP.appendChild(newSelect);
			newDiv.appendChild(newP);

			var newP1 = document.getElementById("form1");
			newP1.appendChild(newDiv);


			var bttn1 = document.getElementById("conf1");
			bttn1.removeEventListener('click',entree);

		}


		var plat = function(e) {

				var newDiv1 = document.createElement("div");
				newDiv1.setAttribute("id","newDiv1");

				var newP1 = document.createElement("p");
				newP1.setAttribute("class", "para");
				var text1 = document.createTextNode("Select from the list below:");

				var Select = document.createElement("select");
				Select.setAttribute("id","plat");

				var Option1 = document.createElement("option");
				var Option2 = document.createElement("option");
				var Option3 = document.createElement("option");
				var Option4 = document.createElement("option");
				var Option5 = document.createElement("option");

				var Text1 = document.createTextNode("Double Cheese");
				var Text2 = document.createTextNode("Crousty Chicken");
				var Text3 = document.createTextNode("Nuggets");
				var Text4 = document.createTextNode("Chicken Cheese");
				var Text5 = document.createTextNode("Hot Dog New Yorkais");

				
				Option1.appendChild(Text1);
				Option2.appendChild(Text2);
				Option3.appendChild(Text3);
				Option4.appendChild(Text4);
				Option5.appendChild(Text5);
				
				
				Select.appendChild(Option1);
				Select.appendChild(Option2);
				Select.appendChild(Option3);
				Select.appendChild(Option4);
				Select.appendChild(Option5);

				newP1.appendChild(text1);
				newP1.appendChild(document.createElement("br"));
				newP1.appendChild(Select);
				newDiv1.appendChild(newP1);
				var newP2 = document.getElementById("form2");
				newP2.appendChild(newDiv1);

				

				var bttn2 = document.getElementById("conf2");
				bttn2.removeEventListener('click', plat);

			}




			var dessert = function(e) {

				var newDiv1 = document.createElement("div");
				newDiv1.setAttribute("id","newDiv2");

				var newP1 = document.createElement("p");
				newP1.setAttribute("class", "para");
				var text = document.createTextNode("Select from the list below:");

				var select = document.createElement("select");
				select.setAttribute("id","dessert");
				var option1 = document.createElement("option");
				var option2 = document.createElement("option");
				var option3 = document.createElement("option");
				var option4 = document.createElement("option");
				var option5 = document.createElement("option");

				var text1 = document.createTextNode("Maxi Kebab");
				var text2 = document.createTextNode("Assiette Kebab");
				var text3 = document.createTextNode("Kebab Rice");
				var text4 = document.createTextNode("Kid Box");
				var text5 = document.createTextNode("Assiette Nuggets");

				option1.appendChild(text1);
				option2.appendChild(text2);
				option3.appendChild(text3);
				option4.appendChild(text4);
				option5.appendChild(text5);
				
				select.appendChild(option1);
				select.appendChild(option2);
				select.appendChild(option3);
				select.appendChild(option4);
				select.appendChild(option5);

				newP1.appendChild(text);
				newP1.appendChild(document.createElement("br"));
				newP1.appendChild(select);
				newDiv1.appendChild(newP1);

				var newP2 = document.getElementById("form3");
				newP2.appendChild(newDiv1);


				bttn3 = document.getElementById('conf3');
				bttn3.removeEventListener('click',dessert);

		
			}



		

			var rEntree = function () {

				while (document.getElementById("newDiv") != null) {

					var DivForm = document.getElementById("newDiv");
					var mainFomr = document.getElementById("form1");
					mainFomr.removeChild(DivForm);
				}	
			
			}



			var rplat = function () {

				while (document.getElementById("newDiv1") != null) {

					var DivForm = document.getElementById("newDiv1");
					var mainFomr = document.getElementById("form2");
					mainFomr.removeChild(DivForm);
				}	

			}



				var rdessert = function () {

				while (document.getElementById("newDiv2") != null) {

					var DivForm = document.getElementById("newDiv2");
					var mainFomr = document.getElementById("form3");
					mainFomr.removeChild(DivForm);
				}	
			
			}

			var names = document.querySelector('#Name');
			var email = document.querySelector('#Email');
			var phone = document.querySelector('#Phone');
			var adress = document.querySelector('#Adress');
			var div = document.querySelector('#sectionAImprimer');
			


			var facture = function () {


				if 	(document.getElementById("entre")!=null ) {


					switch (document.getElementById("entre").value) {

						case "": 
						mnt1 = 0.00;
						break;

						case "Chicken Burger": 
						mnt1 = 2500.00;
						break;

						case "Kebab Burger": 
						mnt1 = 3000.00;
						break;	

						case "Supreme Burger": 
						mnt1 = 3500.00;
						break;	

						case "Crazy Kebab Burger":                                                   
						mnt1 = 3500.00;
						break;	

						case "Single Hot Dog": 
						mnt1 = 3000.00;
						break;

						default : 
						mnt1 = 0.00;

					} 

					som += mnt1;
					choice1 = document.getElementById('entre').value;

				} 



				if (document.getElementById("plat")!=null )  {


					switch (document.getElementById("plat").value) {


						case "": 
						mnt2 = 0.00;
						break;

						case "Hot Dog New Yorkais": 
						mnt2 = 2200.00;
						break;

						case "Double Cheese": 
						mnt2 = 2300.00;
						break;	

						case "Crousty Chicken": 
						mnt2 = 2400.00;
						break;	

						case "Nuggets": 
						mnt2 = 3500.00;
						break;	

						case "Chicken Cheese": 
						mnt2 = 3000.00;
						break;

						default : 
						mnt2 = 0.00;

					}

					som += mnt2;
					choice2 = document.getElementById('plat').value;

				}


		 		if (document.getElementById("dessert")!=null) {


					switch (document.getElementById("dessert").value) {

						case "": 
						mnt3 = 0.00;
						break;

						case "Maxi Kebab": 
						mnt3 = 5000.00;
						break;

						case "Assiette Kebab": 
						mnt3 = 4500.00;
						break;	

						case "Kebab Rice": 
						mnt3 = 4000.00;
						break;	

						case "Kid Box": 					
						mnt3 = 3500.00;
						break;	

						case "Assiette Nuggets": 
						mnt3 = 4500.00;
						break;

						default : 
						mnt3 = 0.00;

					}

			 		som += mnt3;
			 		choice3 = document.getElementById("dessert").value;
			} 


			
			

			div.setAttribute("class","group");

			var p = document.createElement("p");
			p.setAttribute("class","para");
			var p1 = document.createElement("p");
			var p2 = document.createElement("p");
			p2.setAttribute("class","para");
			var p3 = document.createElement("p");
			p3.setAttribute("class","para");
			p1.setAttribute("class","para");
			var h2 = document.createElement("h3");
			var form = document.createElement("form");
			form.setAttribute("class","center");
			h2.setAttribute("id","fac");

			var h0 = document.createElement("h5");
			var h1 = document.createElement("h5");
			var h3 = document.createElement("h5");
			var h4 = document.createElement("h5");
			var h5 = document.createElement("h5");
			var h6 = document.createElement("h5");
			
		

			var text0 = document.createTextNode("Statement");
			var text = document.createTextNode("Name : ");
			var text1 = document.createTextNode("Email : ");
			var text2 = document.createTextNode("Phone Number : ");
			var text3 = document.createTextNode("Adress : ");
			var text4 = document.createTextNode("Orders : ");
			var text5 = document.createTextNode("Amount : ");

			p2.appendChild(h5);

			if (document.getElementById('entre') != null) {
				order1 = document.createTextNode(choice1 + ": " + mnt1 + " CFA");
				p2.appendChild(order1);
				p2.appendChild(document.createElement("br"));

			}

			if (document.getElementById('plat') != null) {
				order2 = document.createTextNode(choice2 + ": " + mnt2 + " CFA");
				p2.appendChild(order2);
				p2.appendChild(document.createElement("br"));

			}

			if (document.getElementById('dessert') != null) {
				order3 = document.createTextNode(choice3 + ": " + mnt3 + " CFA");
				p2.appendChild(order3);
				p2.appendChild(document.createElement("br"));

			}



			var name = document.createTextNode(names.value);
			var Email = document.createTextNode(email.value);
			var Phone = document.createTextNode(phone.value);
			var Adress = document.createTextNode(adress.value);

			var Som = document.createTextNode(som + " CFA"); 



			h2.appendChild(text0);
			p1.appendChild(h2);

			h0.appendChild(text);
			h1.appendChild(text1);
			h3.appendChild(text2);
			h4.appendChild(text3);
			h5.appendChild(text4);
			h6.appendChild(text5);
			

			p.appendChild(h0);
			p.appendChild(name);
			p.appendChild(document.createElement("br"));
			p.appendChild(document.createElement("br"));
			p.appendChild(h1);
			p.appendChild(Email);
			p.appendChild(document.createElement("br"));
			p.appendChild(document.createElement("br"));
			p.appendChild(h3);
			p.appendChild(Phone);
			p.appendChild(document.createElement("br"));
			p.appendChild(document.createElement("br"));
			p.appendChild(h4);
			p.appendChild(Adress);
			p.appendChild(document.createElement("br"));
		
			p3.appendChild(h6);
			p3.appendChild(Som);

			form.appendChild(p1);
			form.appendChild(p);
			form.appendChild(p2);
			form.appendChild(p3);

			
			div.appendChild(form);


			document.querySelector('#conf4').removeEventListener("click", facture);
			

			}	



			function Menu(evt, choice) {
				var i, tabcontent, tablinks;
			
				tabcontent = document.getElementsByClassName("tabcontent");
				for (i = 0; i < tabcontent.length; i++) {
					tabcontent[i].style.display = "none";
				}
			
				tablinks = document.getElementsByClassName("tablinks");
				for (i = 0; i < tablinks.length; i++) {
					tablinks[i].className = tablinks[i].className.replace(" active", "");
				}
			
				document.getElementById(choice).style.display = "block";
				evt.currentTarget.className += " active";
			} 
			document.getElementById("defaultOpen").click();



			var email = document.getElementById("Email");

			email.addEventListener("keyup", function (event) {
			if (email.validity.typeMismatch) {
				email.setCustomValidity("I'm waiting for an e-mail, dear!");
			} else {
				email.setCustomValidity("");
			}
			});