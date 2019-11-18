function check(form)
{

if(form.userid.value == "admin" && form.pwd.value == "admin")
{
	return true;
}
else
{
	alert("Error Password or Username is Incorrect")
	return false;
}
}