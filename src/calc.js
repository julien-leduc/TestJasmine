function calculatrice(signe, gauche, droite) {
  var result;
    if (typeof gauche === 'number' && typeof droite === 'number') {
	   	if (gauche>=0 && droite<430 && droite!=0) {
			switch (signe) {
				case "*":
					result = gauche*droite;
					return result;
					break;
				case "+":
					result = gauche+droite;
					return result;
					break;
				case "-":
					result = gauche-droite;
					return result;
					break;
				case "/":
					result = gauche/droite;
					return result;
					break;
				default:
					result=null;
					return result;
			} 
		} else {
		   	result = null;
		   	return result;
		}
	}else{
		result=null;
		return result;
	}
}
 
module.exports = calculatrice;
