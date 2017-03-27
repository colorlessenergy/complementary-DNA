function DNAStrand(dna){
  var dnaS = dna.split("");
  var completeDna = [];
  for (var i = 0; i < dnaS.length; i++) {
    if (dnaS[i] === "A") {
      completeDna.push("T")
    } else if (dnaS[i] === "T") {
      completeDna.push("A")
    } else if (dnaS[i] === "G") {
      completeDna.push("C")
    } else if (dnaS[i] === "C") {
      completeDna.push("G")
    }
  }
  return completeDna.join("");
}
