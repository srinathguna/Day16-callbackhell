document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.height = '100vh';
document.body.style.backgroundColor = '#f7f7f7';
//
let element1 = document.createElement('h1');
element1.style.fontSize = '100px'
element1.style.color = '#484646'
element1.style.height = '100vh'
element1.style.margin = '0'
element1.style.display = 'flex'
element1.style.justifyContent = 'center'
element1.style.alignItems ='center'
document.body.appendChild(element1)
setTimeout(() => {
    // console.log(10)
    element1.innerHTML = 10;
    setTimeout(() => {
        element1.innerHTML = 9;
        console.log(9)
        setTimeout(() => {
            element1.innerHTML = 8;
            console.log(8)
            setTimeout(() => {
                element1.innerHTML = 7;
                console.log(7)
                setTimeout(() => {
                    element1.innerHTML = 6;
                    console.log(6)
                    setTimeout(() => {
                        element1.innerHTML = 5;
                        console.log(5)
                        setTimeout(() => {
                            element1.innerHTML = 4;
                            console.log(4)
                            setTimeout(() => {
                                element1.innerHTML = 3;
                                element1.style.backgroundColor = '#50d566'
                                element1.style.color = '#fff'
                                console.log(3)
                                setTimeout(() => {
                                    element1.innerHTML = 2;
                                    element1.style.backgroundColor = '#7371e5'
                                    element1.style.color = '#fff'
                                    console.log(2)
                                    setTimeout(() => {
                                        element1.innerHTML = 1;
                                        element1.style.backgroundColor = '#ffac15'
                                        element1.style.color = '#fff'
                                        console.log(1)
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