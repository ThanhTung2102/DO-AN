function show2() {
    let t2 = document.getElementById("book_time2");
    let t2Hour = t2.value.substr(0, 2);
    let t2Minute = t2.value.substr(3, 2);
    if (t2Hour < t2.min) {
        alert("Earliest time is " + t2.min );
        t2.value = t2.min;
    } else if (t2Hour > t2.max){
        alert("Latest time is " + t2.max);
        t2.value = t2.max;
    } else {
        console.log(t2.value);
    }
}