import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeoutService {

  constructor() { }

  checkTime(){
    let timer, currSeconds = 0; 
      function resetTimer() {
            /* Clear the previous interval */ 
            clearInterval(timer); 
  
            /* Reset the seconds of the timer */ 
            currSeconds = 0; 
  
            /* Set a new interval */ 
            timer = setInterval(startIdleTimer, 1000); 
          } 
  
        // Define the events that would reset the timer 
        window.onload = resetTimer; 
        window.onmousemove = resetTimer; 
        window.onmousedown = resetTimer; 
        window.ontouchstart = resetTimer; 
        window.onclick = resetTimer; 
        window.onkeypress = resetTimer; 
  
        function startIdleTimer() { 
          /* Increment the timer seconds */ 
            if(currSeconds==600)
            {
              if(localStorage.getItem('JWT')){
                alert('Session has been Expired')
                localStorage.removeItem('JWT');
                window.location.href= '/'
              }
            }
            currSeconds++;   
         } 
  }
}
