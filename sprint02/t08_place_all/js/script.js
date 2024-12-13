function sortEvenOdd(arr){
    arr.sort(function(a, b){
        return a - b;
    });
    arr.sort(function(a, b){
        return a%2 - b%2;
    });
}