var gui = require("nw.gui");
var os = require("os");
var https = require("https")
var fs = require("fs");

var dlLink;
var exe;

switch (os.platform()){
	case "win32":
		exe = "./mt/bin/minetest.exe";
		if(os.arch() == "ia32"){
			dlLink = "https://s3.amazonaws.com/github-cloud/releases/2168780/11515940-4721-11e5-9ebc-1600b4bacc27.zip?response-content-disposition=attachment%3B%20filename%3Dminetest-0.4.13-win32-msvc.zip";
		}
		if(os.arch() == "x64"){
			dlLink = "https://github.com/minetest/minetest/releases/download/0.4.13/minetest-0.4.13-win64-msvc.zip";
		}
		break;
/* 
	case "linux":
		exe = "mt/bin/minetest.exe";
		if(os.arch() == "ia32"){
			dlLink = "https://github.com/minetest/minetest/releases/download/0.4.13/minetest-0.4.13-win32-msvc.zip";
		}
		if(os.arch() == "x64"){
			dlLink = "https://github.com/minetest/minetest/releases/download/0.4.13/minetest-0.4.13-win64-msvc.zip";
		}
		break; */
		
}

function launchMt(){
	if(os.platform() == "win32"){
		gui.Shell.openItem(exe);
	}else{
		alert("No launching suport for your platform, yet. ;-;");
	}
}

function downloadMt(){
	if(os.networkInterfaces().length == 0){
		alert("Cannot Download Minetest. No network connection.")
	}else{
		var file =  fs.createWriteStream("meses.zip");
		var dl = https.get(dlLink, function(response){
			response.pipe(file);
		});
	}
}