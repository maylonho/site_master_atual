var f_bln_new_design=false;
preloadRange(0,_PRELOADRANGE);
function init()
{

 preloadRange(0,_PRELOADRANGE);


    changeSlide();
}

var sub_nav_mouseover_color = "#000000";
var background_base  = "img/base/ba2.gif";

var next = 2;
var point1 = 1;
var point2 = 1;
var block_img = 16;

var show_status = 0;
var l_img_src_no1 = 0;

//getting request data
var ReqParam = new Object() ;
var Parameters = document.location.search.substr(1).split('&') ;

for ( i = 0 ; i < Parameters.length ; i++ )
{
   var Parameter = Parameters[i].split('=') ;
   var Key  = Parameter[0] ;
   var Value = Parameter[1] ;
   ReqParam[ Key ] = Value ;
}


var l_str_img_type = ReqParam['frm_data1_type'];
var l_str_img_data = ReqParam['frm_data1'];
var l_str_action = ReqParam['hid_page_id'];

//alert(l_str_img_data);
//alert(l_str_img_type);

if(l_str_img_data == null)
{
show_status = 1;
   //alert("in undefined");
   point1 = 1;
   if(numImgs < block_img)
   {
      point2 = numImgs;
   }
   else
   {
      point2 = block_img*1;

   }
}
else if(l_str_img_type != null)
{
   if(l_str_img_type == "next") //for next imgs
   {
      show_status = 2;

      point1 = l_str_img_data*1;
      if(numImgs < (parseInt(l_str_img_data) +parseInt(block_img)))
      {
         point2 = numImgs;
      }
      else
      {
         point2 = (l_str_img_data*1)+(block_img-1);
      }

   }
   else if(l_str_img_type == "all") //for display all img
   {
      show_status = 3;

      point1 = 1;
      point2 = numImgs;

   }

   else if(l_str_img_type == "large") //for display all img
   {
   show_status = 4;

      l_img_src_no1 =  (l_str_img_data*1);

   }
   else
   { //for default if tamper
      show_status = 1;

      point1 = 1;
      if(numImgs < block_img)
      {
         point2 = numImgs;
      }
      else
      {
         point2 = block_img*1;

      }

   }

}


function MM_popupMsg(msg) { //v1.0
  alert(msg);
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  newwin =window.open(theURL,winName,features);
}


function frm_next(flow)
{
//alert("hai1");
if(flow == 2)
{
   document.photo_frm.frm_data1_type.value = "next";
}
else if(flow == 3)
{
   document.photo_frm.frm_data1_type.value = "all";
}
else if(flow == 1)
{
   document.photo_frm.frm_data1_type.value = "new";
}

if(l_str_action != null)
{
   document.photo_frm.action =l_str_action;
}
document.photo_frm.submit();
return false;
}


function frm_large(lrg)
{
//alert("hai2");
document.photo_frm.frm_data1_type.value = "large";
document.photo_frm.frm_data1.value = lrg;
if(l_str_action != null)
{
   document.photo_frm.action =l_str_action;
}

document.photo_frm.submit();
return false;
}

//output data
//document.write('function getData()');
//document.write('{');
//document.write('alert("haidata");');
//document.write('}');

document.write('   <BR> ');
document.write('                           <BR>');
document.write('                          </font>');
document.write('<form method="get" name="photo_frm" action="">');
document.write('<input type="hidden" name="frm_data1" value = "'+(point2+1)+'" >');
document.write('<input type="hidden" name="frm_data1_type" value = "" >');
//alert("in undefined");
if(show_status == 0 || show_status == 1 || show_status == 2 || show_status == 3 )
{

//alert("in if");
document.write('                  <table width="100%" border="0" cellpadding="0" cellspacing="0" >');
document.write('                  <tr>');
if(f_bln_new_design)
{
	document.write('                  <td class="bg1">');
}else
{
	document.write('                  <td background='+background_base+'>');
}	
document.write('                  <table width="100%" border="0" cellpadding="2" cellspacing="1" >');
var out1 = "";
var out2 = "";


out1 +=  '<tr align="center"> ';
if(f_bln_new_design)
{
out1 +=  '                      <TD colspan="2" align="left"  class="photoalbumnormal">&nbsp;';
}else
{
out1 +=  '                      <TD colspan="2" align="left">&nbsp; <strong><font size="2" face="Arial, Helvetica, sans-serif" color='+sub_nav_mouseover_color+'>';
}
out1 +=  point1+' - '+point2+' '+TXT_Var48956+'  '+numImgs+' | ';




if(numImgs != point2)
{
	if(f_bln_new_design)
	{
			out1 +=  '<A href="#" class="photoalbum1link" onclick=\'return frm_next(2)\' >'+TXT_Var48700+'</A> | ';
	}else
	{
		out1 +=  '<A href="#" onclick=\'return frm_next(2)\' >'+TXT_Var48700+'</A> | ';
	}
}

	if(f_bln_new_design)
	{
		out1 +=  '<A href="#" onclick=\'return frm_next(3)\' class="photoalbum1link" > '+TXT_Var48701+'</A></TD>';
		
		out1 +=  '                      <td colspan="2" align="right" class="photoalbumnormal" >'+TXT_Var48702+
		TXT_Var48703+'&nbsp;|&nbsp;&nbsp;<a href="#" class="photoalbum1link"  onClick="MM_openBrWindow(\'photo_genslide.html\',\'slide\',\'scrollbars=auto,resizable=yes,width=550,height=560\')">'+TXT_Var48704;
out1 +=  '                        </a>&nbsp; </td>';

		
		

	}else
	{
		out1 +=  '<A href="#" onclick=\'return frm_next(3)\' > <font size="2" face="Arial, Helvetica, sans-serif" color='+sub_nav_mouseover_color+'>'+TXT_Var48701+'</font></A></font></strong></TD>';
		
out1 +=  '                      <td colspan="2" align="right"><font size="2" face="Arial, Helvetica, sans-serif" color='+sub_nav_mouseover_color+'><strong>'+TXT_Var48702+'</strong>&nbsp;<strong><font size="2" face="Arial, Helvetica, sans-serif" color='+sub_nav_mouseover_color+'>'+TXT_Var48703+'&nbsp;|&nbsp;&nbsp;<a href="#" onClick="MM_openBrWindow(\'photo_genslide.html\',\'slide\',\'scrollbars=auto,resizable=yes,width=550,height=560\')"><font size="2" face="Arial, Helvetica, sans-serif" color='+sub_nav_mouseover_color+'>'+TXT_Var48704+'</font>';
out1 +=  '                        </a> </strong></font>&nbsp; </td>';

		
	}

 
 
out1 +=  '                    </tr>';

out2 +=  '                    <tr align="right"> ';

	if(f_bln_new_design)
	{
		out2 +=  '                      <td colspan="4"   class="bg2"> <span class="normal_text">'+TXT_Var48705	
		+ '</span>';
	}else
	{
		out2 +=  '                      <td colspan="4" bgcolor="#ffffff"><font size="2" face="Arial, Helvetica, sans-serif" color="#000000">'+TXT_Var48705 + '&nbsp;</font>';
	}

out2 +=  '                         </td>';
out2 +=  '                    </tr>';
document.write(out1);

document.write(out2);
//document.write('                  </table>  ');
//document.write('                  <table width="100%" border="1" cellpadding="2" cellspacing="0" >');
for(var i=point1;i<=point2;i++ )
{

var flag1= false;
   if( ((i%4 == 1) &&  (!flag1)))
   {
      //document.write('                    <tr align="center"> ');
      document.write('                    <tr align="center"> ');

   }
	
	
	if(f_bln_new_design)
	{	
	
	   document.write('                      <td height="125" class="bg2"><a href="#" onclick=\'return frm_large('+i+')\'><img src="'+imageThumbSrcArray[i-1]+'" title="' + imageNameArray[i-1] + '" border="0"></a><br>');
	   document.write('                         <a href="#" class="photoalbumlink" onclick=\'return frm_large('+i+')\'>'+imageNameArray[i-1]+'</a></td>');
	}else
	{
		   document.write('                      <td height="125" bgcolor="#ffffff"><a href="#" onclick=\'return frm_large('+i+')\'><img src="'+imageThumbSrcArray[i-1]+'" title="' + imageNameArray[i-1] + '" border="0"></a><br>');
	   document.write('                        <font size="2" face="Arial, Helvetica, sans-serif"> <a href="#" onclick=\'return frm_large('+i+')\'><b><font color="#0033CC">'+imageNameArray[i-1]+'</font></b></a></font></td>');
		
	}	
   if(i%4 == 0)
   {

      document.write('                    </tr>');
   }

flag1 = true;

}

var cont_pnt = point2%4;
if(cont_pnt>0)
{
   for(var i=4;i>cont_pnt;i-- )
   {
		if(f_bln_new_design)
		{
				document.write('                      <td class="bg2"  height="125">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
		}else
		{
			document.write('                      <td bgcolor="#ffffff" height="125">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
		}		
      
      document.write('                        </td>');

   }

   document.write('                    </tr>');

}




//document.write('                  </table>  ');
//document.write('                  <table width="100%" border="1" cellpadding="2" cellspacing="0" >');

document.write(out2);

document.write(out1);

document.write('                  </table>  ');
document.write('                  </td>  ');
document.write('                  </tr>  ');
document.write('                  </table>  ');
}
else if(show_status == 4)
{
//for stating
var curImg = l_img_src_no1-1;

document.write('                           <table width="100%" border="0" cellpadding="0" cellspacing="0">');
document.write('                             <tr>');
if(f_bln_new_design)
{
	document.write('                  <td class="bg1">');
}else
{
	document.write('                             <td background='+background_base+'>');
}	

document.write('                           <table width="100%" border="0" cellpadding="2" cellspacing="1">');
document.write('                             <tr align="left">');

if(f_bln_new_design)
{
	document.write('                               <TD colspan="2"  class="bg2">');
}else
{
		document.write('                               <TD colspan="2" bgcolor="#ffffff"><font size="2" face="Arial, Helvetica, sans-serif">');
}
	
//document.write(l_img_src_no1+' of '+numImgs+'</font>
//div1
document.write('  <div id="pnumBgDiv"><div id="pnumDiv">');

if(f_bln_new_design)
	document.write(' <span id="pem" class="photoalbumnormal" ></span></div></div>');
else
	document.write(' <span id="pem" ></span></div></div>');	


document.write('</TD>');
document.write('                             </tr>');

var out3 = "";
var out31 = "";

out3 += '                             <tr>';

out3 += '                               <TD>';
//div2
if(f_bln_new_design)
{
	out3 += ' <div  id="Move" class="photoalbumnormal"  ></div>';
}else
{
		out3 += ' <div  id="Move"></div>';
}	

out3 += '</TD>';

if(f_bln_new_design)
{
 

out3 += '                               <TD width="50%" align="right" class="photoalbumnormal" >'+TXT_Var48702+'&nbsp;<a href="#" class="photoalbum1link" onclick=\'return frm_next(1)\'>'+TXT_Var48703+'</a>&nbsp;|&nbsp;&nbsp;<a href="#" class="photoalbum1link"  onClick="MM_openBrWindow(\'photo_genslide.html\',\'slide\',\'scrollbars=auto,resizable=yes,width=550,height=560\')">'+TXT_Var48704;
out3 += '                                 </a> &nbsp; </TD>';
}else
{
out3 += '                               <TD width="50%" align="right"><font size="2" face="Arial, Helvetica, sans-serif" color='+sub_nav_mouseover_color+'><strong>'+TXT_Var48702+'</strong>&nbsp;<strong><a href="#" onclick=\'return frm_next(1)\'><font color='+sub_nav_mouseover_color+'>'+TXT_Var48703+'</font></a>&nbsp;|&nbsp;&nbsp;<a href="#" onClick="MM_openBrWindow(\'photo_genslide.html\',\'slide\',\'scrollbars=auto,resizable=yes,width=550,height=560\')"><font color='+sub_nav_mouseover_color+'>'+TXT_Var48704;
out3 += '                                       </font></a> </strong></font>&nbsp; </TD>';

}


out3 += '                             </tr>';


out31 += '                             <tr>';

out31 += '                               <TD>';
//div2

if(f_bln_new_design)
{
	
out31 += ' <div  id="Move2" class="photoalbumnormal"  ></div>';
}else
{
	out31 += ' <div  id="Move2"></div>';
}	

out31 += '</TD>';

if(f_bln_new_design)
{
 
out31 += '                               <TD width="50%" align="right" class="photoalbumnormal" >'+TXT_Var48702+'&nbsp;<a href="#" class="photoalbum1link" onclick=\'return frm_next(1)\'>'+TXT_Var48703+'</a>&nbsp;|&nbsp;&nbsp;<a href="#"  class="photoalbum1link"  onClick="MM_openBrWindow(\'photo_genslide.html\',\'slide\',\'scrollbars=auto,resizable=yes,width=550,height=560\')">'+TXT_Var48704;
out31 += '                                       </a&nbsp; </TD>';



}else
{
out31 += '                               <TD width="50%" align="right"><font size="2" face="Arial, Helvetica, sans-serif" color='+sub_nav_mouseover_color+'><strong>'+TXT_Var48702+'</strong>&nbsp;<strong><a href="#" onclick=\'return frm_next(1)\'><font color='+sub_nav_mouseover_color+'>'+TXT_Var48703+'</font></a>&nbsp;|&nbsp;&nbsp;<a href="#" onClick="MM_openBrWindow(\'photo_genslide.html\',\'slide\',\'scrollbars=auto,resizable=yes,width=550,height=560\')"><font color='+sub_nav_mouseover_color+'>'+TXT_Var48704;
out31 += '                                       </font></a> </strong></font>&nbsp; </TD>';

}

out31 += '                             </tr>';


document.write(out3);


document.write('                             <tr>');
if(f_bln_new_design)
{
	document.write('                               <td colspan="2" class="bg2">');	
}else
{
	document.write('                               <td colspan="2" bgcolor="#ffffff">');	
}
	
	
	
document.write('<table width="100%" border="0" cellspacing="1" cellpadding="1">');	


document.write('                                 <tr align="center" valign="top">');
document.write('                                   <td colspan="3"><p><br>');
//div3

document.write('                         <div id="imgDiv"></div><div id="imgp" style="width:100%;"></div>');
document.write('                         <div class="header3" id="Resolution"></div>');
//div4

document.write(' <div class="header2" id="ImageName"></div><br>');
document.write('           <div class="header3" id="ImageDesc"></div><br> ');
document.write('                      <div class="header3" id="Date"></div><br>');
document.write('                      <div class="header3" id="Size"></div>');

document.write('</font></p></td>');
document.write('                                 </tr>');
document.write('                               </table></td>');
document.write('                             </tr>');

document.write(out31);


document.write('                          </table>   ');
document.write('                          </td>   ');
document.write('                          </tr>   ');
document.write('                          </table>   ');

}
document.write('                           <FONT face="Verdana, Arial, Helvetica, sans-serif" size="2"><BR>');
document.write('</form>');
//alert("end");
