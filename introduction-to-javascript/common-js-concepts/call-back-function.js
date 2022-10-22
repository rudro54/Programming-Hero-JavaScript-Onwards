function greeting(greetingsHandler, name) {
    greetingsHandler(name);
}

function greetingsHandler(name) {
    console.log('good morning ,', name);
}
function greetingsHandlerNoon(name) {
    console.log('good afternoon', name);
}

greeting(greetingsHandler, 'zayed');
greeting(greetingsHandlerNoon, "mamun");