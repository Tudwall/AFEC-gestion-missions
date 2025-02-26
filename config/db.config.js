import mariadb from "mariadb";

const pool = () => {
	return mariadb.createPool({
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		user: process.env.DB_USER,
		password: process.env.DB_PWD,
		database: process.env.DATABASE,
		connectionLimit: 5,
	});
};

export default pool;
