const mongoose = require ("mongoose")
const dotenv = require ('dotenv')
dotenv.config (option {path:./config/conf})


const connectMongoDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URL);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error connection to mongoDB: ${error.message}`);
		process.exit(1);
	}
};

export default connectMongoDB;