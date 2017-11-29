function multMatrices(A, B) {
	if (!A || !B || !A[0] || (A[0].length !== B.length)) {
		// matrix A has less or more cols than matrix B has rows
		// -> multiplication is not defined!
		return
	}
	// multiplication is defined!
	let colsB = B[0].map((y,i) => B.map(x => x[i])) // get col-vectors of B
	// Multiply every element of a row in A with the element at the same index in colB. Then add up.
	// Do that for every col in B. Then go to next row in A.
	return A.map(rowA => colsB.map(colB => colB.map((x, i) => x*rowA[i]).reduce((a, b) => a+b, 0)))
}
