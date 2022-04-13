
var timerId = -1;
var intervalf = 1000;
var intervalm = 3000;
var intervals = 5000;
var interval = intervalm;
var imgIsLoaded = false;
var arrPreload = new Array();
var _PRELOADRANGE = 5;

var sub_nav_mouseover_color = "#000000";
var background_base  = "img/base/ba2.gif";
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
	//sgv18 chnages
	//comment on 10/04/09
	/*document.getElementById("Resolution").innerHTML ="<span class='header3'>"+
		'<font size="2" face="Arial, Helvetica, sans-serif" color="#000000">'+
		TXT_Var35425+": "+document.getElementById(curImg).width+" X "+
		document.getElementById(curImg).height+"</span>";*/
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
    //htmlCont += 'width=480 height=480';
    htmlCont += " border=0 hspace=10 vspace=10 onload=\"imgLoadNotify();\">" + "<br>";
   htmlCont += "<br><span class=yphsmhdr>" + "</span></center>";
   //imageNameArray[curImg]   NAme of the IMAGE

    var prevLink='';
    var nxtLink='';
    if (curImg != 0)
    {
	 
			if(f_bln_new_design)
			{
				prevLink='<a href="#" class="photoalbum1link" onclick="rewind();">'+TXT_Var35419+'</a>';
			}else
			{
				prevLink='<a href="#" onclick="rewind();"><font size="2" face="Arial, Helvetica, sans-serif" color='+
				sub_nav_mouseover_color+'>'+TXT_Var35419+'</font></a>';

			}			
    }
    else
    {
			if(f_bln_new_design)
			{
				 
				prevLink= TXT_Var35419;
			}else
			{
	       prevLink='<font size="2" face="Arial, Helvetica, sans-serif" color='+sub_nav_mouseover_color+'>'+
			 TXT_Var35419+'</font>';
			} 
    }

    if (curImg != numImgs-1)
    {
		if(f_bln_new_design)
		{
			nxtLink='<a href="#" onclick="forward();" class="photoalbum1link" >'+TXT_Var35421+'</a>';
		}else
		{
				nxtLink='<a href="#" onclick="forward();"><font size="2" face="Arial, Helvetica, sans-serif" color='+
				sub_nav_mouseover_color+'>'+TXT_Var35421+'</font></a>';
		}		
    }
    else
    {
		if(f_bln_new_design)
		{
	
			nxtLink=TXT_Var35421;
		}else
		{
			nxtLink='<font size="2" face="Arial, Helvetica, sans-serif" color='+sub_nav_mouseover_color+'>'+
			TXT_Var35421+'</font>';

		}
    }

		if(f_bln_new_design)
		{
		    document.getElementById("Move").innerHTML =prevLink+' | '+nxtLink;
		    document.getElementById("Move2").innerHTML =prevLink+' | '+nxtLink;
		}else
		{
			 document.getElementById("Move").innerHTML =prevLink+' <font size="2" face="Arial, Helvetica, sans-serif" color='+sub_nav_mouseover_color+'> | '+nxtLink;
		    document.getElementById("Move2").innerHTML =prevLink+' <font size="2" face="Arial, Helvetica, sans-serif" color='+sub_nav_mouseover_color+'> | '+nxtLink;
		}
		

		if(f_bln_new_design)
		{
	 
				document.getElementById("ImageName").innerHTML ='<span class="bold_text">'+imageNameArray[curImg] +
				'</span>';
		}else
		{
				document.getElementById("ImageName").innerHTML ='<font size="2" face="Arial, Helvetica, sans-serif" color="#000000"><b>'+imageNameArray[curImg]+'</b>';
		}
		
		if(f_bln_new_design)
		{
	 	
				document.getElementById("ImageDesc").innerHTML ='<span class="normal_text">'+imageDescArray[curImg]+
				'</span>';
		}else
		{
				document.getElementById("ImageDesc").innerHTML ='<font size="2" face="Arial, Helvetica, sans-serif" color="#000000">'+imageDescArray[curImg];
		}
	
	//sgv18 chnages
	//comment on 10/04/09
	
	/*	
    document.getElementById("Date").innerHTML ='<font size="2" face="Arial, Helvetica, sans-serif" color="#000000">'+TXT_Var35423+": "+'<font size="2" face="Arial, Helvetica, sans-serif" color="#000000">'+imageDateArray[curImg];
    document.getElementById("Size").innerHTML ='<font size="2" face="Arial, Helvetica, sans-serif" color="#000000">'+TXT_Var35424+": "+'<font size="2" face="Arial, Helvetica, sans-serif" color="#000000">'+imageSizeArray[curImg]/100+" kb";
	 */


    var pnumLine = '';
    var fclose = '';
    
	 if(f_bln_new_design)
	 {
		pnumLine = '';
		fclose ='';
	 }else
	 {
		pnumLine = '<font size="2" face="Arial, Helvetica, sans-serif" color="#000000">';
		fclose ='</font>';
	 }
	 
	 
	 
    pnumLine += replaceNum(SHOWINGSTRING1, "%slideNum", eval(curImg+1));
	 pnumLine +=  fclose;
    document.getElementById("pem").innerHTML = pnumLine;
    document.getElementById("imgp").innerHTML = htmlCont;

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
