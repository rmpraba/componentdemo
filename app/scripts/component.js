
 	  var card;
    var label;
    var fun;
    var dropMenu;
    var type;
    var listbox;
    var inputval;
	var rootcard;
  var inputpagearr,newdiv,searchcriteria;
  var floatclass,btnvalue;
  var cardcount,divcount,divflag=0,val=0,divno,radiogroup,selectedflag="true",colorcode;
  var itemarr=[];
 function FnCreateRoot(inputarr,root){
	//alert('halo');
  inputpagearr=inputarr;
	rootcard=root;
	//alert(rootcard);
 }

 function FnCreateElement(cardarr){
         
        this.root = document.createElement(rootcard);
        //alert(JSON.stringify(inputpagearr));
        card = document.createElement('div');
        card.style.marginLeft='10%';
        card.style.marginTop='10%';
        card.id='card';
        cardcount=cardarr.element.length;
        if(cardcount>6){
           divflag=1;
           divcount=(cardcount/2);             
        }

        for(var i=0;i<cardarr.element.length;i++)
          {         
            
            switch(cardarr.element[i].inputtype)  
            {
            	case "text":
            		  label=cardarr.element[i].label;                   
                  alignflag=cardarr.element[i].alignflag; 
                  floatclass=cardarr.element[i].class;                  
                  this.FnCreateTextinput(i,label,alignflag,floatclass);
              		break;
                case "button": 
                	label=cardarr.element[i].label;  
              		fun=cardarr.element[i].FnName;
                  alignflag=cardarr.element[i].alignflag;
                  btnvalue=cardarr.element[i].buttonvalue;
                 	this.FnCreateButton(i,label,fun,alignflag,btnvalue);
              		break
                case "dropdown":                  
                	type=cardarr.element[i].inputtype;
              		label=cardarr.element[i].label;  
              		fun=cardarr.element[i].FnName; 
                  floatclass=cardarr.element[i].class;              
              		this.FnCreateDropdown(i,label,fun,floatclass);
              		break;
                case "texticon":
                	type=cardarr.element[i].inputtype;
              		label=cardarr.element[i].label;  
              		fun=cardarr.element[i].FnName; 
                  alignflag=cardarr.element[i].alignflag; 
                  floatclass=cardarr.element[i].class;                                                
              		this.FnCreateTextinputIcon(i,label,fun,alignflag,floatclass);
              		break;
                case "radiogroup":
                  type=cardarr.element[i].inputtype;
                  this.FnCreateRadioGroup(i);
                  break;
                case "radio":
                  type=cardarr.element[i].inputtype;
                  label=cardarr.element[i].label;                 
                  alignflag=cardarr.element[i].alignflag;                  
                  this.FnCreateRadioButton(i,label,alignflag);
                  break;
            }                        
            
          }    
          for(var i=0;i<inputpagearr[0].pagecode.length;i++)     
          {
            if(rootcard==inputpagearr[0].pagecode[i].pagename)
            document.querySelector(rootcard).setElement(card);
          }   
         }
      function FnCreateTextinput(id,label,alignflag,floatclass){
        var input = document.createElement('paper-input');
        input.id="input"+id;
        input.className=floatclass;
        input.label=label;        
        input.style.width='30%';
        input.style.textAlign='left';
        if(alignflag=="2")
          input.style.marginLeft='5%';
        if(alignflag=="1"||alignflag=="2"){ 
        if(alignflag=="1")
          newdiv = document.createElement('div'); 
          newdiv.id='innerdiv';     
        Polymer.dom(newdiv).appendChild(input); 
        Polymer.dom(card).appendChild(newdiv);
        }
        else                             
        Polymer.dom(card).appendChild(input);                 
      }

      function FnCreateRadioGroup(id){
        radiogroup = document.createElement('paper-radio-group');
        //Polymer.dom(card).appendChild(radiogroup);        
      }

      function FnCreateRadioButton(id,label,alignflag){
        var input = document.createElement('paper-radio-button');
        input.id="input"+id;         
        input.label=label; 
        input.value=label;        
        input.style.marginTop='2%';

        input.onclick = function() { 
        var inputarr=Polymer.dom(card).querySelectorAll('paper-radio-button');        
        for(var i=0;i<inputarr.length;i++)
          {
          if(inputarr[i].value==input.label){            
            inputarr[i].checked=true;            
          }
          else
            inputarr[i].checked=false;
          }   
         
        }

        if(alignflag=="1"||alignflag=="2"){ 
        if(alignflag=="1")
          newdiv = document.createElement('div'); 
          newdiv.id='innerdiv';  
        var item = document.createElement('paper-item');
        item.label=label;
        item.textContent=label;        
        Polymer.dom(newdiv).appendChild(input);    
        Polymer.dom(newdiv).appendChild(item);        
        Polymer.dom(card).appendChild(newdiv);
        }
        else                             
        Polymer.dom(card).appendChild(input);        
      }

      function FnCreateAutoComplete(id,label){ 
        var input = document.createElement('paper-input');
        input.id="input"+id;
        input.label=label;
        input.style.width='30%';
        input.style.textAlign='left';        
        Polymer.dom(card).appendChild(input); 
      }
      function FnCreateTextinputIcon(id,label,fun,alignflag,floatclass){
        var input = document.createElement('paper-input');
        input.id="input"+id;
        input.className=floatclass;
        input.label=label;        
        input.style.width='30%';
        input.style.textAlign='left';
        input.style.marginTop='-7%';
        if(alignflag=="2"){
          input.style.marginLeft='5%';
          input.readonly='true';          
        }
        if(alignflag=="1"||alignflag=="2"){ 
        if(alignflag=="1")
          newdiv = document.createElement('div'); 
          newdiv.id='innerdiv';     
        Polymer.dom(newdiv).appendChild(input); 
        Polymer.dom(card).appendChild(newdiv);
        }
        else                             
        Polymer.dom(card).appendChild(input);
        //Polymer.dom(card).appendChild(input);
        var inputicon = document.createElement('paper-icon-button');        
        inputicon.icon='search';
        inputicon.id="inputicon"+id;
        if(alignflag=="2"){
        inputicon.style.visibility='hidden';
        inputicon.style.marginTop='-6%';
        inputicon.style.marginLeft='60%';
        }
        else{
        inputicon.style.marginTop='0%';
        inputicon.style.marginLeft='25%';    
        }         
        Polymer.dom(card).appendChild(inputicon);
        if(fun=="FnSearch"){        
        inputicon.onclick = function() {          
          inputval=Polymer.dom(card).querySelector('#input'+id).value;                
          document.querySelector('component-service').callListboxService(Polymer.dom(card).querySelector('#input'+id).label);    
        } 
        }
        listbox = document.createElement('paper-listbox');   
        listbox.id="listbox"+id; 
        listbox.style.backgroundColor='whitesmoke'; 
        listbox.style.width='30%';
        listbox.style.visibility='hidden';    
        listbox.className = 'dropdown-content'; 

        Polymer.dom(card).appendChild(listbox);  
        
        listbox.addEventListener('iron-select', function(e) { 
           document.querySelector('component-service').FnReadService(e.target.selectedItem.textContent.trim());       
           //alert('yes select'+ e.target.selectedItem.textContent.trim());            
           Polymer.dom(card).removeChild(listbox);  
        });               
      }
      function FnSetListboxItem(itemarr){
        //alert(JSON.stringify(itemarr));
        this.itemarr=itemarr;  
        for(var i=0;i<this.itemarr.length;i++){
        var dropItem = document.createElement('paper-item');
        dropItem.value = this.itemarr[i].itemsuppliername;
        dropItem.innerHTML = this.itemarr[i].itemsuppliername; 
        Polymer.dom(listbox).appendChild(dropItem); 
        } 
        listbox.style.visibility='visible'; 
      }
      function FnCreateButton(id,label,fun,alignflag,btnvalue){        
        var input = document.createElement('paper-button');
        input.id="input"+id;
        input.value=btnvalue;
        input.textContent=label;        
        input.style.width='30%';
        input.style.borderRadius= '2px';
        input.style.boxShadow='rgba(0, 0, 0, 0.0980392) 5px 5px 4px, rgba(0, 0, 0, 0.0980392) 0px 0px 10px';
        input.style.backgroundColor= '#3d6868';
        input.style.color= 'white';
        input.style.height= '30px';
        input.style.marginTop='3%';
        input.style.marginLeft='-0.2%'; 
        Polymer.dom(card).appendChild(input); 
        //if(fun=="FnSubmit"){
        //var FnSubmit = document.querySelector('#input'+id);        
        input.onclick = function() {          
        var inputarr=Polymer.dom(card).querySelectorAll('paper-input');

          var columnname=[];
          var columnvalue=[];      

          for(var i=0;i<inputarr.length;i++){
            columnname.push(inputarr[i].label);
            columnvalue.push(inputarr[i].value);

            //var obj={};
            //obj=inputarr[i].value;
          //alert(obj);
          //alert('yes, you click are clicking!'+inputarr[i].value);
          } 
          //itemarr.push(obj);
        //alert(document.querySelector('component-service'));
        FnCreateJsonElementArray(columnname,columnvalue);        
        }        
        //for(var i=0;i<inputarr.length;i++)
          //alert('yes, you click are clicking!'+inputarr[i].value);
        //}       
        //} 
        /*else if(fun=="FnClear"){
        //var FnClear = document.querySelector('#input'+id);
        input.onclick = function(e) {
          alert(e.target.value);
        var inputarr=Polymer.dom(card).querySelectorAll('paper-input');        
        for(var i=0;i<inputarr.length;i++)
          inputarr[i].value="";        
        }       
        } */            
      }

      function FnCreateJsonElementArray(columnname,columnvalue)
      {
      var itemarr = {};       
      
      for(var i=0;i<columnname.length;i++)
      {
        var columnName = columnname[i];
        itemarr[columnName] = columnvalue[i];
      }     
      document.querySelector('component-service').FnSetInputInfo(itemarr);        
      }


      function FnCreateDropdown(id,label,fun,floatclass){       
        document.querySelector('component-service').callDropdownService();        
        var input = document.createElement('paper-dropdown-menu');        
        input.id="input"+id;
        input.className=floatclass;
        input.label=label;
        input.style.width='30%'; 
        //input.style.marginLeft='-70%';  
        //alert(Polymer.dom(card));  
        //alert(Polymer.dom(card).appendChild(input));    
        Polymer.dom(card).appendChild(input); 
        dropMenu = document.createElement('paper-menu');        
        dropMenu.className = 'dropdown-content'; 
        Polymer.dom(input).appendChild(dropMenu);
        if(fun=="FnSelect"){
        //var FnSelect = document.querySelector('#input'+id);
        input.addEventListener('iron-select', function(e) {        
          alert('yes select'+ e.target.selectedItem.textContent.trim());
        });
        }
      }
      function FnSetDropdownItem(itemarr){
        this.itemarr=itemarr;   
        //alert(JSON.stringify(itemarr));     
        for(var i=0;i<this.itemarr.length;i++){
        var dropItem = document.createElement('paper-item');
        dropItem.value = this.itemarr[i].name;
        dropItem.innerHTML = this.itemarr[i].name;
        //alert(Polymer.dom(dropMenu)); 
        Polymer.dom(dropMenu).appendChild(dropItem); 
        } 
      }