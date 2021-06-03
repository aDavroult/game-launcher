$(function(){
    var execFile = require('child_process').execFile;

    $("#btn_fivem").on("click", function fivem(){
        execFile("C:\\Users\\TRAPZED\\AppData\\Local\\FiveM\\FiveM.exe", function(err, data) {  
                console.log(err)
                console.log(data.toString());                       
            });  
        });

    $("#btn_csgo").on("click", function fivem(){
        execFile("C:\\Program Files (x86)\\Steam\\steamapps\\common\\Counter-Strike Global Offensive\\csgo.exe", function(err, data) {  
                console.log(err)
                console.log(data.toString());                       
            });  
        });
    

});
