
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
    <title>Login</title>
</head>
<body>
<!-- html -->
    <div id="logging_in"></div>
    <label for="user">Username:</label>
    <input type = "text" id="username" name="user"><br>
    <label for="user">Password:</label>
    <input type ="password" id="password" name="password"><br>
    <input type="button" value="Login" id="login"><br> <br>

    <input type="button" value="Logout" id="logout"><br><br>
    </div>

    <label for="users">New Username:</label>
    <input type="text" id="newUsername" name="users"><br>
    <label for="users">New Password:</label>
    <input type ="text" id="newPassword" name="password"><br>
    <input type="button" value="Create New User" id="register"><br><br>

    <label for="edit">title:</label>
    <input type="text" id="title">
    <label for="people">Date(Day-month-year-hour-minute)(integers):</label>
    <input type="text" id="day">
    <input type="text" id="month">
    <input type="text" id="year">
    <input type="text" id="hour">
    <input type="text" id="minute"> 
    <button type="button" id="add"> Add Event </button><br><br>

    <label for="edit">title:</label>
    <input type="text" id="etitle">
    <label for="edit">Date(Day-month-year-hour-minute)(integers):</label>
    <input type="text" id="eday">
    <input type="text" id="emonth">
    <input type="text" id="eyear">
    <input type="text" id="ehour">
    <input type="text" id="eminute">
    <label for="delete">ID number:</label>
    <input type="text" id="eID">
    <button type="button" id="edit"> Edit Event</button><br><br>

    <label for="delete">ID number:</label>
    <input type="text" id="dID">
    <button type="button" id="delete"> Delete Event</button><br><br>

    <button type="button" id="back">Last Month</button>
    <button type="button" id="forward">Next Month</button>
    <button type="button" id="public">Public</button>
    <button type="button" id="private">Private</button>

    <label for="sharing">Get User With:</label>
    <input type="text" id="skit">
    <button type="button" id="share">Share</button>

    <label for="sharing">User calendar With:</label>
    <input type="text" id="frienduser">
    <button type="button" id="group"> get group calendar</button>

    <h1 id="currentMonth">Month, Year</h1>
    <table class="content-table" id="monthView">
        <thead>
            <tr id="weekdays">
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
            </tr>
        </thead>
        <tbody>
      <div id="Weeks" >
        <tr>
        <td id="0"></td>
        <td id="1"></td>
        <td id="2"></td>
        <td id="3"></td>
        <td id="4"></td>
        <td id="5"></td>
        <td id="6"></td>
        </tr>

        <tr>
        <td id="7"></td>
        <td id="8"></td>
        <td id="9"></td>
        <td id="10"></td>
        <td id="11"></td>
        <td id="12"></td>
        <td id="13"></td>
        </tr>

        <tr>
        <td id="14"></td>
        <td id="15"></td>
        <td id="16"></td>
        <td id="17"></td>
        <td id="18"></td>
        <td id="19"></td>
        <td id="20"></td>
        </tr>

        <tr>
        <td id="21"></td>
        <td id="22"></td>
        <td id="23"></td>
        <td id="24"></td>
        <td id="25"></td>
        <td id="26"></td>
        <td id="27"></td>
        </tr>

        <tr>
        <td id="28"></td>
        <td id="29"></td>
        <td id="30"></td>
        <td id="31"></td>
        <td id="32"></td>
        <td id="33"></td>
        <td id="34"></td>
        </tr>
        <tr>
        <td id="35"></td>
        <td id="36"></td>
        <td id="37"></td>
        <td id="38"></td>
        <td id="39"></td>
        <td id="40"></td>
        <td id="41"></td>
        </tr>
        </div>
        </tbody>
    </table>

</body>
<script>
(function(){Date.prototype.deltaDays=function(c){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+c)};Date.prototype.getSunday=function(){return this.deltaDays(-1*this.getDay())}})();
function Week(c){this.sunday=c.getSunday();this.nextWeek=function(){return new Week(this.sunday.deltaDays(7))};this.prevWeek=function(){return new Week(this.sunday.deltaDays(-7))};this.contains=function(b){return this.sunday.valueOf()===b.getSunday().valueOf()};this.getDates=function(){for(var b=[],a=0;7>a;a++)b.push(this.sunday.deltaDays(a));return b}}
function Month(c,b){this.year=c;this.month=b;this.nextMonth=function(){return new Month(c+Math.floor((b+1)/12),(b+1)%12)};this.prevMonth=function(){return new Month(c+Math.floor((b-1)/12),(b+11)%12)};this.getDateObject=function(a){return new Date(this.year,this.month,a)};this.getWeeks=function(){var a=this.getDateObject(1),b=this.nextMonth().getDateObject(0),c=[],a=new Week(a);for(c.push(a);!a.contains(b);)a=a.nextWeek(),c.push(a);return c}};



//name login
    function loginAjax(event) {
        const username = document.getElementById("username").value; // Get the username from the form
        const password = document.getElementById("password").value; // Get the password from the form
        const data = { 'username': username, 'password': password };
        fetch("login.php", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'content-type': 'application/json' }
            })
        .then(response => response.json())
        .then(data => alert(data.success ? "You've been logged in!" : `You were not logged in ${data.message}`))
        .catch(err => console.error(err));
        
        }
    function registerAjax(event) {
        const newUser = document.getElementById("newUsername").value; // Get the username from the form
        const newPassword = document.getElementById("newPassword").value; // Get the password from the form
        const data2 = { 'newusername': newUser, 'newpassword': newPassword };
        fetch("register.php", {
            method: 'POST',
            body: JSON.stringify(data2),
            headers: { 'content-type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => alert(data.success ? "New User Created!" : `New User failed because of same username. Try again! ${data.message}`))
        .catch(err => console.error(err));
    
    }

    function addAjax(event) {
        const title = document.getElementById("title").value;
        const year = document.getElementById("year").value;
        const month = document.getElementById("month").value;
        const day = document.getElementById("day").value;
        const hour = document.getElementById("hour").value;
        const minute = document.getElementById("minute").value;
        const data = {'title' : title, 'year' : year, 'month' : month, 'day' : day, 'hour' : hour, 'minute' : minute};
        fetch("add.php", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => alert(data.success ? "event added" : `event fail to be added! ${data.message}`))
        .catch(err => console.error(err));
    }
    
    function publicAjax(event) {
        const public = "public";
        const data = {'public' : public};
        fetch("public.php", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => alert(data.success ? "All events are are public now" : `event fail to be added! ${data.message}`))
        .catch(err => console.error(err));
    }


    function editAjax(event) {
        const title = document.getElementById("etitle").value;
        const year = document.getElementById("eyear").value;
        const month = document.getElementById("emonth").value;
        const day = document.getElementById("eday").value;
        const hour = document.getElementById("ehour").value;
        const minute = document.getElementById("eminute").value;
        const id = document.getElementById("eID").value;
        const data = {'title' : title, 'year' : year, 'month' : month, 'day' : day, 'hour' : hour, 'minute' : minute, 'id' : id};
        fetch("edit.php", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => alert(data.success ? "event modified" : `event fail to be modified! ${data.message}`))
        .catch(err => console.error(err));
    }

    function deleteAjax(event) {
        const id = document.getElementById("dID").value;
        const data = {'id' : id};
        fetch("delete.php", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' }
        })
        .then(response => response.json())
        .then(data)
        .then(data => alert(data.success ? "event deleted" : `event fail to be deleted! ${data.message}`))
        .catch(err => console.error(err));

    }



    function getAjax(event) {
        let user = "";
        let data = {'username': user};
        fetch("get.php", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => updateCalendar(data))
        .catch(err => console.error(err));
    }

    function friendAjax(event) {
        const user = document.getElementById("frienduser").value;
        const data = {'user': user};
        fetch("group.php", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => updateCalendar(data))
        .catch(err => console.error(err));
    }


    function logoutAjax(event) {
        let data = "";
        fetch("logout.php", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => alert(data.success ? "you have been logged out" : `logout failed! ${data.message}`))
        .catch(err => console.error(err));
    }




document.getElementById("login").addEventListener("click", loginAjax, false); // Bind the AJAX call to button click
document.getElementById("register").addEventListener("click", registerAjax, false);// Bind the AJAX call to button click
document.getElementById("add").addEventListener("click", addAjax, false);
document.getElementById("edit").addEventListener("click", editAjax, false);
document.getElementById("delete").addEventListener("click", deleteAjax, false);
document.getElementById("logout").addEventListener("click", logoutAjax, false);
document.addEventListener("DOMContentLoaded", getAjax(), false);
document.getElementById("group").addEventListener("click", friendAjax, false);
document.getElementById("public").addEventListener("click", publicAjax, false);



var currentMonth = new Month(2023, 2); // October 2017
document.getElementById("forward").addEventListener("click", function(event){
	currentMonth = currentMonth.nextMonth(); // Previous month would be currentMonth.prevMonth()
	getAjax(); // Whenever the month is updated, we'll need to re-render the calendar in HTML
    document.getElementById("currentMonth").innerHTML = currentMonth.month+", "+currentMonth.year;
}, false);
document.getElementById("back").addEventListener("click", function(event){
    currentMonth = currentMonth.prevMonth();
    getAjax();
    // alert("The new month is " + currentMonth.month+" "+currentMonth.year);
    document.getElementById("currentMonth").innerHTML = currentMonth.month+", "+currentMonth.year;
})
function updateCalendar(event){
	for(var k = 35; k < 42; k++ ) {
        document.getElementById(String(k)).innerHTML = "";
    }
    var weeks = currentMonth.getWeeks(); 
    var i = 0;
	for(var w in weeks){
		var days = weeks[w].getDates();		
		// alert("Week starting on "+days[0]);
        for(var d in days){
            // console.log(days[d].toISOString());
            // console.log(document.getElementById(String(i)));
            let dateEvents = [];
            const events = Object.values(event);
            for(let i = 0; i < events[0].length; i++){
                if(currentMonth.month == events[0][i][3] && currentMonth.year == events[0][i][2] && days[d].getDate() == events[0][i][5]){
                    dateEvents.push(events[0][i]);
                }
            }
            var datelist = document.createElement("ul");
            datelist.style.listStyle = 'none'
            for(let i = 0; i < dateEvents.length; i++){
                let li = document.createElement("li");
                li.appendChild(document.createTextNode(String(dateEvents[i][1]) + ": " + String(dateEvents[i][0]))) + "" +  String(dateEvents[i][3] + ":" + String(dateEvents[i][6]));
                datelist.appendChild(li);
            }
            document.getElementById(String(i)).innerHTML = days[d].getDate();
            document.getElementById(String(i)).appendChild(datelist);
            i++;
        }
	}
    
}



</script>


</html>