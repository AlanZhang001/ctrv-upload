var ctrlV = require("../index.js");

var $imgList = document.querySelector(".imgList");

var load1 = document.querySelector(".js-upload");
var load2 = document.querySelector(".js-upload2");

new ctrlV({
    uploadUrl: "server.php",
    targetElement: load1,
    data:{
        name:"alanzhang"
    },
    success:function(data){
        alert("上传成功");
        console.log(data);

        var $li  = document.createElement("li");
        var $img = document.createElement("img");
        $img.src = data.link;
        $li.appendChild($img);
        $imgList.appendChild($li);
    }
});

new ctrlV({
    uploadUrl: "server2.php",
    targetElement: load2,
    data:{
        name:"alanzhang"
    },
    success:function(data){
        console.log(data);
    }
});

load1 = load2 = null;

