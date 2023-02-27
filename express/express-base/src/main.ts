import config from '../config'
import app from "./app";
import ContactRouter from "./routers/contactRouter";

(
    async () =>{
        const contactMiddleWare = ContactRouter();
        app.use('/contact', contactMiddleWare);
        app.listen(config.PORT, () => {
            "Running On Server"
        })   
        console.log(config.PORT)
    }
)()