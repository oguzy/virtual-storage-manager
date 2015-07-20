$(function(){
	InitCtrlCSS();
});

function InitCtrlCSS(){
	var ctrlSelect = $("select");
	for(var i=0;i<ctrlSelect.length;i++){
		ctrlSelect[i].className = "form-control";
	}

	var ctrlText = $("input[type='text']");
	for(var i=0;i<ctrlText.length;i++) {
        ctrlText[i].className = "form-control";
    }

    var ctrlPwd = $("input[type='password']");
	for(var i=0;i<ctrlPwd.length;i++){
		ctrlPwd[i].className = "form-control";
	}
}


$("#btnCreate").click(function(){

	var os_tenant_name = $("#id_os_tenant_name").val();
    var os_username = $("#id_os_username").val();
    var os_password = $("#id_os_password").val();
    var os_auth_url = $("#id_os_auth_url").val();

	var data = {"os_tenant_name":os_tenant_name, "os_username":os_username,
    "os_password":os_password, "os_auth_url":os_auth_url};
	var postData = JSON.stringify(data);
	token = $("input[name=csrfmiddlewaretoken]").val();

	$.ajax({
		type: "post",
		url: "/dashboard/vsm/openstackconnect/create_action/",
		data: postData,
		dataType:"json",
		success: function(data){
				console.log(data);
				window.location.href="/dashboard/vsm/openstackconnect/";
		   	},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
				if(XMLHttpRequest.status == 500)
                	showTip("error","INTERNAL SERVER ERROR")
			},
		headers: {
			"X-CSRFToken": token
			},
		complete: function(){

		}
    });

});


$("#btnUpdate").click(function(){
	var id = $("#id_id").val();
    var os_tenant_name = $("#id_os_tenant_name").val();
    var os_username = $("#id_os_username").val();
    var os_password = $("#id_os_password").val();
    var os_auth_url = $("#id_os_auth_url").val();

	var data = {"id":id,"os_tenant_name":os_tenant_name,"os_username":os_username,
    "os_password":os_password,"os_auth_url":os_auth_url};
	var postData = JSON.stringify(data);
	token = $("input[name=csrfmiddlewaretoken]").val();

	$.ajax({
		type: "post",
		url: "/dashboard/vsm/openstackconnect/update_action/",
		data: postData,
		dataType:"json",
		success: function(data){
				console.log(data);
				window.location.href="/dashboard/vsm/openstackconnect/";
		   	},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
				if(XMLHttpRequest.status == 500)
                	showTip("error","INTERNAL SERVER ERROR")
			},
		headers: {
			"X-CSRFToken": token
			},
		complete: function(){

		}
    });

});/**
 * Created by root on 15-7-2.
 */
