// import
constexpress =require('express');
constapp = express();
constPORT = 8080;

// Listener
app.listen(
    PORT,
    ()=> console.log(`Server ready at http://localhost:${PORT}`)
);