global.__basedir = __dirname;
const App= require(__basedir+'/bootstrap/app');
const app = new App();
app.init();
