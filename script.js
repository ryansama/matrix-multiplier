console.log("Welcome to the matrix multiplier.");

$(function() {

  $( "#submitDim" ).click(function() {
    //console.log("clicked");
    var dimentions = getDimentions();
    $( ".selectDimentions" ).empty();
    genMatrixInputFields(dimentions);
  });

});

function genMatrixInputFields(dimentions){
  $("body").append("<div class=\"inputField\"></div>");
  $(".inputField").append("<h3>Matrix A</h3>");
  $(".inputField").append("<br>");
  console.log(dimentions[0][0]);
  console.log(dimentions[0][1]);
  for(var i = 0; i < dimentions[0][0]; i++){
    for(var j = 0; j < dimentions[0][1]; j++){
      $(".inputField").append("<input type=\"text\" name=\"mytext\"/>");
      //console.log(i + " " + j);
    }
    $(".inputField").append("<br>");
  }

  $(".inputField").append("<h3>Matrix B</h3>");
  $(".inputField").append("<br>");

  for(var i = 0; i < dimentions[1][0]; i++){
    for(var j = 0; j < dimentions[1][1]; j++){
      $(".inputField").append("<input type=\"text\" name=\"mytext\"/>");
    }
    $(".inputField").append("<br>");
  }

  $(".inputField").append("<button id=\"calcualte\">Calculate</button>")

}

function getDimentions(){
  var dimentions = [[1,1],[1,1]];
  dimentions[0][0] = Number($( "#Arows" ).val());
  dimentions[0][1] = Number($( "#Acolumns" ).val());
  dimentions[1][0] = Number($( "#Brows" ).val());
  dimentions[1][1] = Number($( "#Bcolumns" ).val());
  return dimentions;
}

function calculateProduct(matrixK, matrixJ){
  var matrix = new Array();
  var dotProduct = 0;

  for(var i = 0; i < matrixK.length; i++){
    for(var k = 0; k < matrixJ[0].length;k++){
      for(var j = 0; j < matrixK[0].length; j++){
        dotProduct += matrixK[i][j] * matrixJ[j][k];
      }
      matrix[i][k] = dotProduct;
      dotProduct = 0;
    }
   }

}
