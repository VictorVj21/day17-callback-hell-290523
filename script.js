function function1(callback) { 
    setTimeout(function () {
        console.log('10');
        callback();
    }, 1000);
}

function function2(callback) { 
    setTimeout(function () {
        console.log('9');
        callback();
    }, 1000);
}
function function3(callback) { 
    setTimeout(function () {
        console.log('8');
        callback();
    }, 1000);
}function function4(callback) { 
    setTimeout(function () {
        console.log('7');
        callback();
    }, 1000);
}function function5(callback) { 
    setTimeout(function () {
        console.log('6');
        callback();
    }, 1000);
}function function6(callback) { 
    setTimeout(function () {
        console.log('5');
        callback();
    }, 1000);
}function function7(callback) { 
    setTimeout(function () {
        console.log('4');
        callback();
    }, 1000);
}function function8(callback) { 
    setTimeout(function () {
        console.log('3');
        callback();
    }, 1000);
}function function9(callback) { 
    setTimeout(function () {
        console.log('2');
        callback();
    }, 1000);
}function function10(callback) { 
    setTimeout(function () {
        console.log('1');
        callback();
    }, 1000);
}

function1(function () { 
    function2(function () { 
        function3(function () { 
            function4(function () { 
                function5(function () { 
                    function6(function () { 
                        function7(function () { 
                            function8(function() { 
                                function9(function () { 
                                    function10(function () { 
                                        console.log("Happy Independence Day")
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })

    })
})