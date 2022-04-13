var curImg = 0;
var timerId = -1;
var intervalf = 2000;
var intervalm = 6000;
var intervals = 4000;
var interval = intervalm;
var imgIsLoaded = false;
var arrPreload = new Array();
var _PRELOADRANGE = 5;
var f_bln_new_design=false;
function replaceNum(myinput, token, newstr)
{
    var input = myinput;
    var output = input;
    var idx = output.indexOf(token);
    if (idx > -1) 
    {
	output = input.substring(0, idx);
	output += newstr;
	output += input.substr(idx+token.length);
    }
    return output;
}

function changeSpeed(sidx)
{
    switch (sidx) 
	{
		case 0: interval = intervalm; break;
		case 1: interval = intervals; break;
		default: interval = intervalf;
    }
    if (timerId != -1) 
	{
		window.clearInterval(timerId);
		timerId = window.setInterval("forward();", interval);
    }
}

function preloadRange(intPic,intRange) {
	for (var i=intPic; i<intPic+intRange; i++) {
		arrPreload[i] = new Image();
		arrPreload[i].src = imageSrcArray[i];
	} 
	return true;
}

function imgLoadNotify()
{
    imgIsLoaded = true;
}

function forward()
{
	if (!arrPreload[curImg+1]) {
		imgIsLoaded = false;
		imgIsLoaded = (curImg+_PRELOADRANGE<numImgs)?preloadRange(curImg+1,_PRELOADRANGE):preloadRange(curImg+1,numImgs-curImg-1);
	}    
	if (imgIsLoaded) 
	{
		curImg++;
		if (curImg == numImgs)
			curImg = 0;
		changeSlide();
    }
}


function changeSlide()
{
    if (document.all)
	{
    	document.all.imgp.style.filter="blendTrans(duration=1)";
    	
    	document.all.imgp.filters.blendTrans.Apply();
    }
    imgIsLoaded = false;
    var htmlCont = "<center>" +
	"<br><img id=\"" + curImg + "\" src=\"" + imageSrcArray[curImg] + "\" title=\"" + imageNameArray[curImg] + "\"";
    if (imageWidthArray[curImg] > 0 && imageHeightArray[curImg] > 0) 
	{
		htmlCont += (imageHeightArray[curImg]>410)?" height=410":" width=" + imageWidthArray[curImg] + " height=" + imageHeightArray[curImg];
    }
    
    htmlCont += " border=0 hspace=10 vspace=10 onload=\"imgLoadNotify();\">" + "<br>";
	htmlCont += "<span class=yphsmhdr>" + "</span></center>";
	
	//imageNameArray[curImg]   NAme of the IMAGE



    var prevLink='';
    var nxtLink='';
    if (curImg != 0) 
    {
		if( f_bln_new_design)
		{
	     	prevLink='<a href="#" class="photoalbum1link"  onclick="setButton(0);rewind();"><img name="prevbtn" title='+
			TXT_Var35530+' src="album/images/sl_rewind.gif" width="29" height="19" border="0"></a>';
		}else
		{
			prevLink='<a href="#" onclick="setButton(0);rewind();"><img name="prevbtn" title='+TXT_Var35530+
			' src="album/images/sl_rewind.gif" width="29" height="19" border="0"></a>';
		}	
    }
    else
    {
		if( f_bln_new_design)
		{
			prevLink='<img name="prevbtn" title='+TXT_Var35530+' src="album/images/sl_rewind.gif" width="29" height="19" border="0">';
		}else
		{
			prevLink='<img name="prevbtn" title='+TXT_Var35530+' src="album/images/sl_rewind.gif" width="29" height="19" border="0">';
		}		
    }
    
    if (curImg != numImgs-1) 
    {
		if( f_bln_new_design)
		{
			nxtLink='<a href="#" class="photoalbum1link"  onclick="setButton(1); forward();"><img  name="fowdbtn" title='+
			TXT_Var35532+' 	src="album/images/sl_forward.gif" width="29" height="19" border="0">';
		}else
		{
				nxtLink='<a href="#" onclick="setButton(1); forward();"><img  name="fowdbtn" title='+TXT_Var35532+
			' 	src="album/images/sl_forward.gif" width="29" height="19" border="0">';
		}		
    }
    else
    {
		if( f_bln_new_design)
		{
			nxtLink='<img  name="fowdbtn" title='+TXT_Var35532+' src="album/images/sl_forward.gif" width="29" height="19" border="0">';
		}else
		{
				nxtLink='<img  name="fowdbtn" title='+TXT_Var35532+' src="album/images/sl_forward.gif" width="29" height="19" border="0">';
		}		
    }

	 if(f_bln_new_design)
	 {
			mveLink='<a href="#" class="photoalbum1link" onclick="play();"><img name="playbtn" title='+TXT_Var35534+' src="album/images/sl_play.gif" width="29" height="19" border="0"></a> <a href="#" onclick="stop();"><img name="stopbtn" title='+TXT_Var35535+' src="album/images/sl_stop.gif" width="29" height="19" border="0"></a> ';
	 }else
	 {
			mveLink='<a href="#" class="photoalbum1link" onclick="play();"><img name="playbtn" title='+TXT_Var35534+' src="album/images/sl_play.gif" width="29" height="19" border="0"></a> <a href="#" class="photoalbum1link" onclick="stop();"><img name="stopbtn" title='+TXT_Var35535+' src="album/images/sl_stop.gif" width="29" height="19" border="0"></a> ';
	 }
	 
     
    
    document.getElementById("move").innerHTML =mveLink+prevLink+' '+nxtLink;
    
    if(f_bln_new_design)
	 {
    
	 
		document.getElementById("ImageName").innerHTML = '<span class="bold_text">'+imageNameArray[curImg] +
		'</span>';    
		document.getElementById("ImageDesc").innerHTML ='<span class="normal_text">'+imageDescArray[curImg] +
		'</span>';
	 }else
	 {
		document.getElementById("ImageName").innerHTML =imageNameArray[curImg];    
		document.getElementById("ImageDesc").innerHTML =imageDescArray[curImg];
	 }	 
	
    //document.getElementById("Date").innerHTML ="Created Date: "+imageDateArray[curImg];	

	 var  pnumLine="";
	 var  fclose="";
	if( f_bln_new_design)
	{
		
	}else
	{
		pnumLine = '<font size=2>';
		fclose=  '</font>';
	}
	 
    
    pnumLine += replaceNum(SHOWINGSTRING, "%slideNum", eval(curImg+1));
    pnumLine += fclose;
    document.getElementById("pem").innerHTML = pnumLine;
    document.getElementById("imgp").innerHTML = htmlCont;
  
	//sgv18 chnages
	//comment on 10/04/09  
   // document.getElementById("Resolution").innerHTML =TXT_Var35536+": "+imageDateArray[curImg]+"<span class='header3'> | "+TXT_Var35537+": "+document.getElementById(curImg).width+" X "+document.getElementById(curImg).height+"</span>";  	    
  
  	//alert(document.all);
    if (document.all) 
	document.all.imgp.filters.blendTrans.Play();
		
	
}

function forward()
{
	if (!arrPreload[curImg+1]) {
		imgIsLoaded = false;
		imgIsLoaded = (curImg+_PRELOADRANGE<numImgs)?preloadRange(curImg+1,_PRELOADRANGE):preloadRange(curImg+1,numImgs-curImg-1);
	}    
	if (imgIsLoaded) 
	{
		curImg++;
		if (curImg == numImgs)
			curImg = 0;
		changeSlide();
    }
}

function rewind()
{
    curImg--;
    if (curImg < 0)
		curImg = numImgs - 1;
    changeSlide();
}

function stop()
{
    window.clearInterval(timerId);
    timerId = -1;
    document.playbtn.src = buttonImgPfx + buttonOffArray[0];
    document.stopbtn.src = buttonImgPfx + buttonOnArray[1];
    imgIsLoaded = true;
}

function play()
{
    if (timerId == -1) 
		timerId = window.setInterval('forward();', interval);
    document.playbtn.src = buttonImgPfx + buttonOnArray[0];
    document.stopbtn.src = buttonImgPfx + buttonOffArray[1];
}

function setButton(direction)
{
    imgIsLoaded = true;
    if (direction == 0) 
	{
		document.prevbtn.src = buttonImgPfx + buttonOnArray[2];
		window.setTimeout("document.prevbtn.src = buttonImgPfx + buttonOffArray[2];", 300);
    }
	else 
	{
		document.fowdbtn.src = buttonImgPfx + buttonOnArray[3];
		window.setTimeout("document.fowdbtn.src = buttonImgPfx + buttonOffArray[3];", 300);
    }
}
