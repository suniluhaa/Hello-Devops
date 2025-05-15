const greet = require('./app');
if(greet()==="hello from Devops") {
    console.log("✔️test passed");
    process.exit(0);
   }else{
    console.assertlog("😆test failed");
    process.exit(1);
   }