"use strict";

var arr = [];
var size = 12;

function populateArray(arr, size) {
    for (var i = 0; i < size; ++i) {
        arr[i] = i+1;
    }
}

populateArray(arr,size)

// document.write(...arr);

// printArr(arr)

// classes = colors = r, g, b

function printArr (array_in, c_i, r_i, prev_r) {
        document.write("<tr>")

        for (var j=0; j<array_in.length;++j) {
            if (j === r_i) {
                document.write("<td><span class='bb'> " + array_in[j] + " </span></td>")
            }
            else if (j > (c_i+1)) {
                document.write("<td><span class='lp'> " + array_in[j] + " </span></td>")
            }
            else if (j === c_i+1) {
                document.write("<td><span class='lg'> " + array_in[j] + " </span></td>")
            }
            else if (j === c_i) {
                document.write("<td><span class='br'> " + array_in[j] + " </span></td>")
            }
            else if (j === prev_r) {
                document.write("<td><span class='lo'> " + array_in[j] + " </span></td>")
            }
            else
                document.write("<td>" + array_in[j] + "</td>")
        }
        document.write("</tr>")
}

function shuffle(array_in) {
    document.write("<table>");
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
    document.write("</table>");
    document.write(
        `
        <table id='table2'>
            <tr>
                <td><p class='color_key' id='key_heading'>Color Key:</p></td>
                <td><span class='br'><p class='color_key'>Element to be shuffled (this iteration)</p></span></td>
                <td><span class='bb'><p class='color_key'>Random location (this iteration)</p></span></td>
            </tr>

            <tr>
                <td></td>   <td><span class='lo'><p class='color_key'>Element shuffled into random position (on previous iteration)</span></p></td>
                <td><span class='lg'><p class='color_key'>Random element moved (on previous iteration)</span></p></td>
            </tr>
            
            <tr>
                <td></td>   <td><span class='lp'><p class='color_key'>Element positions completed</span></p></td>
            </tr>
        </table>
        `
    )
}

shuffle(arr)