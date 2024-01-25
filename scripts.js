function blankAll() {
    document.getElementById('content').innerHTML = "";

}

function showList() {
blankAll();
document.getElementById('content').innerHTML = /*HTML*/ `
<ul>
<li>en</li>
<li>to</li>
<li>tre</li>
<li>fire</li>
</ul>



`


}