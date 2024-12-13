function getFormattedDate(dateObject){
    let date;
    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    if(dateObject.getDate() < 10){
        date = '0' + dateObject.getDate();
    }
    else{
        date = dateObject.getDate();
    }

    if(dateObject.getMonth() < 10){
        date += '.0' + (dateObject.getMonth() + 1);
    }
    else{
        date += '.' + (dateObject.getMonth() + 1);
    }

    date += '.' + dateObject.getFullYear();

    if(dateObject.getHours() < 10){
        date += ' 0' + dateObject.getHours();
    }
    else{
        date += ' ' + dateObject.getHours();
    }

    if(dateObject.getMinutes() < 10){
        date += ':0' + dateObject.getMinutes();
    }
    else{
        date += ':' + dateObject.getMinutes();
    }

    date += ' ' + weekday[dateObject.getDay()];
    
    return date;
}