// Buttons to control Text1 height, text and background color.

    // Values of what value the buttons are on.

TestingButton1Phase = '1';
TestingButton2Phase = '1';
TestingButton3Phase = '1';

    //



    //Text1 background change setting

TestingButton1 = document.getElementById('TestingButton1')
function TestingButton1Functiion() {
    Testing1 = document.getElementById('Testing1');
    if (TestingButton1Phase === '1') {
        Testing1.style.background = 'green';
        TestingButton1Phase = '2';
    }
    else if (TestingButton1Phase === '2') {
        Testing1.style.background = 'blue';
        TestingButton1Phase = '3';
    }
    else if (TestingButton1Phase === '3') {
        Testing1.style.background = 'yellow';
        TestingButton1Phase = '4';
    }
    else {
        Testing1.style.background = 'red';
        TestingButton1Phase = '1';
    }
}

    //



    // Text1 text change setting

function TestingButton2Functiion() {
    Testing1 = document.getElementById('Testing1');
    if(TestingButton2Phase === '1') {
        Testing1.innerHTML = 'Hello There.';
        TestingButton2Phase = '2';
    }
    else if(TestingButton2Phase === '2') {
        Testing1.innerHTML = 'Are you doing good?';
        TestingButton2Phase = '3';
    }
    else if(TestingButton2Phase === '3') {
        Testing1.innerHTML = 'Today is a good day.';
        TestingButton2Phase = '4';
    }
    else {
        Testing1.innerHTML = 'Hey, how you doing?';
        TestingButton2Phase = '1';
    }
}

    //



    // Text1 change shape setting

function TestingButton3Functiion() {
    Testing1 = document.getElementById('Testing1');
    if(TestingButton3Phase === '1') {
        Testing1.style.height = '150px';
        Testing1.style.width = '150px';
        Testing1.style.left = '607.75px';
        TestingButton3Phase = '2';
    }
    else if(TestingButton3Phase === '2') {
        Testing1.style.height = '200px';
        Testing1.style.width = '200px';
        Testing1.style.left = '582.75px';
        TestingButton3Phase = '3';
    }
    else if(TestingButton3Phase === '3') {
        Testing1.style.height = '250px';
        Testing1.style.width = '250px';
        Testing1.style.left = '557.75px';
        TestingButton3Phase = '4';
    }
    else {
        Testing1.style.height = '100px';
        Testing1.style.width = '100px';
        Testing1.style.left = '632.75px';
        TestingButton3Phase = '1';
    }
}

    //

//