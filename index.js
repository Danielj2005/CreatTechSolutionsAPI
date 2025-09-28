import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.disable('x-powered-by');

const PORT = process.env.PORT ?? 3578 ;

// Middleware to parse JSON request bodies
app.use(express.json());

app.use(express.urlencoded({ 
    extended: true 
}));


app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin']
}));

app.use(cookieParser());

app.get('/', (req, res) => {

    res.header('Access-Control-Allow-Origin', '*');

    res.json({message: "hola API CTS"});

});








// se inicia el servidor y se escucha en el puerto activado
app.listen(PORT, () => {
    console.log(`API está corriendo en http://localhost:${PORT}`);
});
