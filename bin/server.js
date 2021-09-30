

exports.connectDatabase = () => {

    const url = process.env.SERVER_PATH

    const options = {
        useUnifiedTopology: true,
        useNewUrlParser : true
    };

    mongoose.connect(url,options);

    mongoose.set('useCreateIndex',true);

    mongoose.connection.on('error',(err) =>{
    console.log("Erro na conexão com o bancoi de dados " + err);
    });

    mongoose.connection.on("disconnected",() =>{
    console.log("Banco desconectado");
    });

    mongoose.connection.on("connected",() =>{
    console.log("Banco conectado");
    });
};