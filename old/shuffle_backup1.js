"use strict";

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// document.write(...arr);

printArr(arr)

function printArr (array_in) {
    
    for (var i=array_in.length-1;i>=0;--i) {

        document.write("<p>")

        for (var j=0; j<array_in.length;++j) {
            if (i === j) {
                document.write("<span class='t1'>" + array_in[j] + "</span>")
            }
            else
                document.write("  " + array_in[j] + "  ")
        }

        document.write("</p>")

    }

}
