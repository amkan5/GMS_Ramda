<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%> 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!doctype html>
<html lang="en">
<head>
<title>Home</title>
<%--  부트연습1 기본형	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="${context}/resources/js/css/style.css"/>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> 제이쿼리
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
	<script src="${context}/resources/js/app.js"></script>
 --%>
<meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="${context}/resources/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="${context}/resources/bootstrap/css/font-awesome.min.css">
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,600|Raleway:600,300|Josefin+Slab:400,700,600italic,600,400italic' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="${context}/resources/bootstrap/css/slick-team-slider.css" />
  <link rel="stylesheet" type="text/css" href="${context}/resources/bootstrap/css/style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> 
  <script src="${context}/resources/js/app.js"> </script>
 
</head>
<body>
<div id="wrapper"></div>	
<script>
app.init('${context}');
/* app.session.setmember({"userid":'${member.userid}',
					"password":'${member.password}',
					"name":'${member.name}',
					"teamid":'${member.teamid}',
					"age":'${member.age}',
					"gender":'${member.gender}',
					"subject":'${member.subject}'});
console.log("main에서 : "+app.m().userid);  */
</script>
</body>
</html>





