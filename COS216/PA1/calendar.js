var date = new Date();
var mm = date.getMonth(); //0-Jan , 11-Dec
var yyyy = date.getFullYear();

window.onload = function () {
    var day = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // var mm = date.getMonth(); //0-Jan , 11-Dec
     //var yyyy = date.getFullYear(); //2021
    var firstDate = month[mm] + " " + 1 + " " + yyyy;//May 1 2021

    var temp = new Date(firstDate).toDateString(); // Sat May 01 2014
    var firstDay = temp.substring(0, 3);
    var dd = day.indexOf(firstDay); //6 for Saturday
    var days = new Date(yyyy, mm + 1, 0).getDate();
    set_calendar(dd, mm, yyyy, days, month);
 //    document.getElementById("month-year").innerHTML = month[mm]+" " + year;
  //   document.getElementById("dates").appendChild(calendar);

}


 function set_calendar(dd, mm, yyyy, days, month)
 {
     var mon = document.getElementById("month");
     mon.innerHTML = month[mm] +" "+yyyy;

     var cell;
     var count=1;
     for(var row=0; row<=7;row++)
     {
         if(count>days)
         {
             break;
         }
         for(var col=1; col<=7; col++)
         {
             if(count>days)
             {
                 break;
             }
             cell = row+""+col;
             console.log(cell);
             var curr = document.getElementById(cell);
             if(row==1 && col==dd+1)
             {
                 curr.innerHTML = count;
                 count++;
             }
             else if(row==1 && col>dd)
             {
                 curr.innerHTML = count;
                 count++;
             }
             else if(row>1)
             {
                 curr.innerHTML = count;
                 count++;
             }
                //console.log(count);

         }
      }

 }

 function next()
 {
     mm++;
     location.reload();
 }

 function prev()
 {
     mm--;
     location.reload();
 }