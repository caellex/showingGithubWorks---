function blankAll() {
    document.getElementById('content').innerHTML = "";

}

function showList() {
blankAll();
document.getElementById('content').innerHTML = /*HTML*/ `
<ul>
<li>En</li>
<li>To</li>
<li>Tre</li>
<li>Fire</li>
</ul>

<img src="img/cat.gif">
`
}