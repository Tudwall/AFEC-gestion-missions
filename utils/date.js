function createSQLDate() {
	const date = new Date();
	return date.toISOString().slice(0, 19).replace("T", " ");
}

export default createSQLDate;
