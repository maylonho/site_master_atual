

DTnow = new Date();
Year  = DTnow.getYear();
Month = DTnow.getMonth();
DayN  = DTnow.getDay();
DayM  = DTnow.getDate();
Hour  = DTnow.getHours();
Mins  = DTnow.getMinutes();
Secs  = DTnow.getSeconds();
ActualHours = Hour;
var date_format=date_format;
var time_format=time_format;
var DATE_STAMP='';
//alert(date_format);
//alert(time_format);

if (Year < 1000)
{
   Year = Year + 1900;
}
if (Hour >= 12)
{
   AmPm = "PM";
}
else
{
   AmPm = "AM";
}


if (Hour > 12)
{
   Hour = Hour -12;
}
if (Hour == 0)
{
   Hour = 12;
}
if (Hour < 10 )
{
   Hour = "0" + Hour;
}
if (Mins < 10 )
{
   Mins = "0" + Mins;
}
if (Secs < 10)
{
   Secs = "0" + Secs;
}


var DoW = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

 DayName = DoW[DayN];

 var Mths = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

 MthName = Mths[Month];

DD = DayM;
if (DD < 10) {
   DD = "0" + DD;
}
MM = Month + 1;
if (MM < 10) {
   MM = "0" + MM;
}
YY = Year.toString().substr(2,2);
DTstamp = DayName + ", ";
DTstamp = DTstamp + " " + DayM;
DTstamp = DTstamp + " " + MthName;
DTstamp = DTstamp + " " + Year;
DTstamp = DTstamp + ", " + Hour;
DTstamp = DTstamp + ":" + Mins;
DTstamp = DTstamp + ":" + Secs;
DTstamp = DTstamp + AmPm;

var month=MthName.substring(0,3);

var str1=DayName+", "+month+" "+DD+", "+Year;
var str2=MM+"/"+DD+"/"+Year;
var str3=MM+"-"+DD+"-"+Year;
var str4=Year+""+MM+""+DD;
var str5=Year+"/"+MM+"/"+DD;
var str6=Year+"-"+MM+"-"+DD;
var str7=DD+"."+MM+"."+YY;
var str8=MM+"."+DD+"."+Year;
var str9=DayName;
var str10=DayName+", "+month+" "+DD;
var str11=month+" "+DD+", "+Year;
var str12=DayName+" "+DD+" "+month+" "+Year;

var dt0=" ";
var dt1=Hour+":"+Mins+":"+Secs+" "+AmPm;
var dt2 = "";
if(ActualHours > 12)
{
	dt2 = parseInt(ActualHours)+":"+Mins;
}
else
{
	dt2 = parseInt(Hour)+":"+Mins;
}
var dt3=Hour+":"+Mins+" "+AmPm;

if(date_format=="EEEEEEEEEE, MMM dd, yyyy")
{
	DATE_STAMP=str1;
}
else if(date_format=="M/dd/yyyy")
{
	DATE_STAMP=str2;
}
else if(date_format=="M-dd-yyyy")
{
	DATE_STAMP=str3;
}
else if(date_format=="yyyyMdd")
{
	DATE_STAMP=str4;
}
else if(date_format=="yyyy/MM/dd")
{
	DATE_STAMP=str5;
}
else if(date_format=="yyyy-MM-dd")
{
	DATE_STAMP=str6;
}
else if(date_format=="dd.M.yy")
{
	DATE_STAMP=str7;
}
else if(date_format=="M.dd.yyyy")
{
	DATE_STAMP=str8;
}
else if(date_format=="EEEEEEEEEE")
{
	DATE_STAMP=str9;
}
else if(date_format=="EEEEEEEEEE, MMM dd")
{
	DATE_STAMP=str10;
}
else if(date_format=="MMM dd, yyyy")
{
	DATE_STAMP=str11;
}
else if(date_format=="EEEEEEEEEE dd MMM yyyy")
{
	DATE_STAMP=str12;
}
if(time_format==" ")
{
	DATE_STAMP=DATE_STAMP+" "+dt0;
}
else if(time_format=="K:mm:ss aaa")
{
	DATE_STAMP=DATE_STAMP+" "+dt1;
}
else if(time_format=="H:mm")
{
	DATE_STAMP=DATE_STAMP+" "+dt2;
}
else if(time_format=="K:mm aaa")
{
	DATE_STAMP=DATE_STAMP+" "+dt3;
}
//alert("2 "+DATE_STAMP);
