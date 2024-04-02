document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.height = '100vh';
document.body.style.backgroundColor = '#f7f7f7';
//element created
let element1 = document.createElement('h1');
element1.style.fontSize = '100px'
element1.style.color = '#484646'
element1.style.height = '100vh'
element1.style.margin = '0'
element1.style.display = 'flex'
element1.style.justifyContent = 'center'
element1.style.alignItems ='center'
document.body.appendChild(element1)

//callback hell 
setTimeout(() => {
    element1.innerHTML = 10;
    setTimeout(() => {
        element1.innerHTML = 9;
        setTimeout(() => {
            element1.innerHTML = 8;
            setTimeout(() => {
                element1.innerHTML = 7;
                setTimeout(() => {
                    element1.innerHTML = 6;
                    setTimeout(() => {
                        element1.innerHTML = 5;
                        setTimeout(() => {
                            element1.innerHTML = 4;                          
                            setTimeout(() => {
                                element1.innerHTML = 3;
                                element1.style.backgroundColor = '#50d566'
                                element1.style.color = '#fff'
                                setTimeout(() => {
                                    element1.innerHTML = 2;
                                    element1.style.backgroundColor = '#7371e5'
                                    element1.style.color = '#fff'
                                    setTimeout(() => {
                                        element1.innerHTML = 1;
                                        element1.style.backgroundColor = '#ffac15'
                                        element1.style.color = '#fff'
                                        setTimeout(() => {
                                            element1.innerHTML = 'Happy Independence Day...!';
                                            console.log("happy independence day")
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)