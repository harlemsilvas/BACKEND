import mongoose from "mongoose";

export async function connect(){
	try {
	await mongoose.connect('mongodb+srv://harlemclaumann:Harlem010101*@cluster0.69j3tzl.mongodb.net/hero-tickets', );
    console.log('Database connect sucess !')
} catch (error){
 	console.log(" ~ file: database.ts:5 ~connect ~error:", error) 
}
}
