/**
  Title: script.js
  Author: Ryan Samarajeewa
  Date: 11/13/2015
  REQUIRED: jQuery
  Description: The script for providing functionality
  for the matrix multiplication calculator, which takes
  two matrices A and B to produce Matrix C.
*/

/**
  purpose
    Initialize onclick() function for the submit button
  preconditions
    jQuery is properly loaded
*/
$(function() {

  $("#submitDim").click(function() {

    var dimentions = getDimentions();//get dimentions
    $(".selectDimentions").empty();//clear the dimention selection div
    genMatrixInputFields(dimentions);//generate input fields

    $("#calculate").click(function(){
      $(".matrixC").remove();

      var matrixA = getMatrix(dimentions[0], "A");
      var matrixB = getMatrix(dimentions[1], "B");
      var matrixC = calculateProduct(matrixA, matrixB);

      $(".matrixC").append("<h3>Matrix C</h3>");
      $(".inputField").append("<div class=\"matrixC\"></div>");

      for(var i = 0; i < matrixC.length; i++){
        for(var j = 0; j < matrixC[0].length; j++){
          $(".matrixC").append(matrixC[i][j] + "&ensp;&ensp;");
        }
        $(".matrixC").append("<br><br>");
      }

    });

  });




});

/**
  purpose
    Read values provided by the dropdown menus to create
    dimentions for Matrix A and B
  preconditions
    Each dropdown has selected values
*/
function getDimentions(){
  var dimentions = [[1,1],[1,1]];
  dimentions[0][0] = Number($( "#Arows" ).val());
  dimentions[0][1] = Number($( "#Acolumns" ).val());
  dimentions[1][0] = Number($( "#Brows" ).val());
  dimentions[1][1] = Number($( "#Bcolumns" ).val());
  return dimentions;
}

/**
  purpose
    Dynamically generate a div containing input fields
    for entering values of Matrix A and B
  preconditions
    dimentions contains legal dimentions for matrix multiplication
    dimentions is an array of the form [[# rows in A, # columns in A], [# rows in B, # columns in B]]
*/
function genMatrixInputFields(dimentions){
  $("body").append("<div class=\"inputField\"></div>");
  $(".inputField").append("<h3>Matrix A</h3>");
  $(".inputField").append("<br>");
  //console.log(dimentions[0][0]);
  //console.log(dimentions[0][1]);
  for(var i = 0; i < dimentions[0][0]; i++){
    for(var j = 0; j < dimentions[0][1]; j++){

      $(".inputField").append("<input type=\"text\" id=\"A" + i + "" + j + "\"/>");

    }
    $(".inputField").append("<br>");
  }

  $(".inputField").append("<h3>Matrix B</h3>");
  $(".inputField").append("<br>");

  for(var i = 0; i < dimentions[1][0]; i++){
    for(var j = 0; j < dimentions[1][1]; j++){
      $(".inputField").append("<input type=\"text\" id=\"B" + i + "" + j + "\"/>");
    }
    $(".inputField").append("<br>");
  }

  $(".inputField").append("<button id=\"calculate\">Calculate</button>")

}

/**
  purpose
    Collect user input from input fields and
    convert them to a two dimentional array
  preconditions
    All input fields contain integers
*/
function getMatrix(dimentions, input){
  var matrix = new Array();
  for(var i = 0; i < dimentions[0]; i++){
    matrix[i] = []
    for(var j = 0; j < dimentions[1]; j++){
      matrix[i][j] = Number($( "#"+input+i+""+j ).val());
    }
  }

  return matrix;
}

/**
  purpose
    Calcualtes the product of two matrices
  preconditions
    matrixK and matrixJ are legal matrices for
    multiplication
*/
function calculateProduct(matrixK, matrixJ){
  var matrix = new Array();
  var dotProduct = 0;

  for(var i = 0; i < matrixK.length; i++){
    matrix[i] = [];
    for(var k = 0; k < matrixJ[0].length;k++){
      for(var j = 0; j < matrixK[0].length; j++){
        dotProduct += matrixK[i][j] * matrixJ[j][k];
      }
      matrix[i][k] = dotProduct;
      dotProduct = 0;
    }
  }

  return matrix;

}

/**
  purpose
   Return the user to the matrix dimention select scene
*/
function reset(){

}
