"use strict";

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// document.write(...arr);

// printArr(arr)

// classes = colors = r, g, b

function printArr (array_in, c_i, r_i, prev_r) {
        document.write("<p>")

        for (var j=0; j<array_in.length;++j) {
            if (j === r_i) {
                document.write(" <span class='bb'> " + array_in[j] + " </span> ")
            }
            else if (j > (c_i+1)) {
                document.write(" <span class='lp'> " + array_in[j] + " </span> ")
            }
            else if (j === c_i+1) {
                document.write(" <span class='lg'> " + array_in[j] + " </span> ")
            }
            else if (j === c_i) {
                document.write(" <span class='br'> " + array_in[j] + " </span> ")
            }
            else if (j === prev_r) {
                document.write(" <span class='lo'> " + array_in[j] + " </span> ")
            }
            else
                document.write("  " + array_in[j] + "  ")
        }
        document.write("</p>")
}

function shuffle(array_in) {
    var prev_r = -1;
    printArr(array_in,array_in.length,-1,-1);
    for (var i=array_in.length-1;i>0;--i) {
        // printArr(array_in,i,-1)
        // var random_idx = Math.floor(Math.random()*(i+1)); // option to be able to allow self swap
        var random_idx = Math.floor(Math.random()*i);
        printArr(array_in,i,random_idx,prev_r);
        // console.log("i: " + i);
        // console.log("i_r: "+ random_idx);
        [array_in[i], array_in[random_idx]] = [array_in[random_idx], array_in[i]];
        prev_r = random_idx;
    }
    printArr(array_in,-2,-1,-1);
}

shuffle(arr)