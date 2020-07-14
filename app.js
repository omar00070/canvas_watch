canvas = document.querySelector('canvas');

canvas.width = 400;
canvas.height = 400;
c = canvas.getContext('2d');


function timeDraw(){
    //get time
    let now = new Date();
    let millisecs = now.getMilliseconds();
    let seconds = now.getSeconds();
    let newSeconds = seconds + millisecs/1000;
    let minutes = now.getMinutes();
    let hours = now.getHours();
    let time = now.toLocaleTimeString();
    let date = now.toDateString();
    let arc = {
        x: canvas.width/2,
        y: canvas.height/2,
        radius: canvas.height/2 - 0.1 * canvas.height
    }
    let hourAngle = Math.PI * 3/2 + hours/24 * Math.PI * 2;
    let minuteAngle = Math.PI * 3/2 + minutes/60 * Math.PI * 2;
    let secondAngle = Math.PI * 3/2 + newSeconds/60 * Math.PI * 2;

    c.lineWidth = 15
    c.lineCap = 'round'
    c.strokeStyle = '#28d1fa'
    c.shadowBlur = 14
    c.shadowColor = '#28d1fa'
    
    //background
    gradient = c.createRadialGradient(
        canvas.width/2, canvas.height/2, arc.radius/5, 
        canvas.width/2, canvas.height/2, arc.radius * 1.2
    );
    gradient.addColorStop(0, '#09303a');
    gradient.addColorStop(1, 'black');
    c.fillStyle = gradient;
    c.fillRect(0,0, canvas.width, canvas.height);

    //seconds
    c.beginPath();
    c.arc(arc.x, arc.y, arc.radius/1.5, Math.PI * 3/2, secondAngle);
    c.stroke();
    
    //minutes
    c.beginPath();
    c.arc(arc.x, arc.y, arc.radius/1.2, Math.PI * 3/2, minuteAngle);
    c.stroke();

    //hours
    c.beginPath();
    c.arc(arc.x, arc.y, arc.radius, Math.PI * 3/2, hourAngle);
    c.stroke();

    //date
    c.fillStyle = "#28f1da";
    c.font = '20px Arial bold';
    c.fillText(date, canvas.width/2 - arc.radius/2.3, canvas.height/2 - 10)

    //time
    c.fillText(time, canvas.width/2 - arc.radius/3.1, canvas.height/2 + 22)
}

function animate(){
    requestAnimationFrame(animate)

    timeDraw();
}

animate()