exports.calculateTime = function(){
    let start_date = new Date(1939, 0 , 1);
    let current_date = new Date();

    let years = current_date.getFullYear() - start_date.getFullYear();
    let months = current_date.getMonth() - start_date.getMonth();
    let days = current_date.getDate() - start_date.getDate();
    
    let data_result = [];
    let quantumYears = Math.floor(years / 7);
    let quantumMonths = Math.floor((years % 7 * 12 + months) / 7);
    let quantumDays = Math.floor((((years + months) % 7) * 30.44 + days) / 7);

   data_result.push(quantumYears);
   data_result.push(quantumMonths);
   data_result.push(quantumDays);

   return data_result;
}