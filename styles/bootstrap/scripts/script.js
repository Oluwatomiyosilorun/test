'use strict';


$(document).ready(function(){
  $("#needHelpDiv").hover(function(){
    $(this).children('.dropdown-toggle').click();
  }, function(){
    $(this).children('.dropdown-toggle').click();
  });
  
  $("#hello").hover(function(){
    $(this).children('.dropdown-toggle').click();
  }, function(){
    $(this).children('.dropdown-toggle').click();
  });
});


