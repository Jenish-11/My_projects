export default function SideBar(){
 return(
 <>
    {/* <div class="w3-sidebar w3-bar-block" style="display:none" id="mySidebar">
  <button onclick="w3_close()" class="w3-bar-item w3-button w3-large">Close &times;</button>
  <a href="#" class="w3-bar-item w3-button">Link 1</a>
  <a href="#" class="w3-bar-item w3-button">Link 2</a>
  <a href="#" class="w3-bar-item w3-button">Link 3</a>
</div>


<div class="w3-teal">
  <button class="w3-button w3-teal w3-xlarge" onclick="w3_open()">☰</button>
  <div class="w3-container">
    <h1>My Page</h1>
  </div>
</div>

<img src="img_car.jpg" alt="Car" style="width:100%"/>

<div class="w3-container">
<p>In this example, the sidebar is hidden (style="display:none")</p>
<p>It is shown when you click on the menu icon in the top left corner.</p>
<p>When it is opened, it hides all the page content (style.width="100%").</p>
</div>

<script>
{function w3_open() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("mySidebar").style.display = "block";
}
}
{function w3_close() {
  document.getElementById("mySidebar").style.display = "none"
}
}
</script> */}
<div class="w3-sidebar w3-light-grey w3-bar-block" style="width:25%">
  <h3 class="w3-bar-item">Menu</h3>
  <a href="#" class="w3-bar-item w3-button">Link 1</a>
  <a href="#" class="w3-bar-item w3-button">Link 2</a>
  <a href="#" class="w3-bar-item w3-button">Link 3</a>
</div>

<div style="margin-left:25%">

<div class="w3-container w3-teal">
  <h1>My Page</h1>
</div>

<img src="img_car.jpg" alt="Car" style="width:100%"/>

<div class="w3-container">
<h2>Sidebar Navigation Example</h2>
<p>The sidebar with is set with "style="width:25%".</p>
<p>The left margin of the page content is set to the same value.</p>
</div>

</div>
</>
 )   

}