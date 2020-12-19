var userinfo = document.getElementById('userinfo');
var loginfo = document.getElementById('loginfo');
var logbut = document.getElementById('logbut');
var searchinfo = document.getElementById('searchinfo');
var search = document.getElementById('search');

logbut.onclick = function(){
	userinfo.innerHTML = '用户名：' + document.getElementById('usr').value;
	loginfo.innerHTML = '登录成功！';
}

document.getElementById('usr').onfocus = function(){
	this.value = '';
}

search.onclick = function(){
	var str = searchinfo.value;
	alert('您输入的信息为：' + str + '是否确认？');
	alert('深感抱歉！搜索功能暂未开放！');
}

searchinfo.onfocus = function(){
	this.value = '';
}

document.getElementById('logindiv').onmouseover = function(){
	this.style.backgroundColor = '#6495ed';
}

document.getElementById('logindiv').onmouseout = function(){
	this.style.backgroundColor = '#f5f5f5';
}