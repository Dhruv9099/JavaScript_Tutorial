// Immediately Invoked Function Expression (IIFE) 

// named iife
(function chai (){
    console.log(`DB Connected`);
})();

//  without named iife
((name)=>{
    console.log(`DB Connected two ${name}`);
})('dhruv')

