console.log("Welcome to the matrix multiplier.");

$(function() {

  $( "#submitDim" ).click(function() {
    console.log("clicked");
    console.log(getDimentions());
  });

});

gen

function getDimentions(){
  var dimentions = [[0,0],[0,0]];
  dimentions[0][0] = Number($( "#Arows" ).val());
  dimentions[0][1] = Number($( "#Acolumns" ).val());
  dimentions[1][0] = Number($( "#Brows" ).val());
  dimentions[1][1] = Number($( "#Bcolumns" ).val());
  return dimentions;
}

function calculateProduct(){
  for(int i = 0; i < matrixK.length; i++){

    for(int k = 0; k < matrixJ[0].length;k++){

     for(int j = 0; j < matrix[0+l][0].length; j++){

      dotProduct += matrixK[i][j] * matrixJ[j][k];

     }

     matrix[i][k] = dotProduct;
     dotProduct = 0;

    }
   }
}
