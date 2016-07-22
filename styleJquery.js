
(function($) {

    var secondsRemaining = 0;
    var timerInterval = null;
    
    $.pomodoro = function() {
        initialize();
        $.pomodoro.start();
    }
    });

   /* $.extend($.pomodoro, {
        settings: {
            initialized: false,
            html: '\
            <div id="pomodoro" style="display:none;"> \
              <div class="content"> \
                <span class="timer" id="pomodoro-timer">0:00</span> \
                <ul class="actions"> \
                  <li><a href="" class="cancel-pomodoro">Cancel</a></li> \
                </ul> \
              </div> \
            </div>',
            lengthInMinutes: 25
        },
    
        start: function() {
            $(document).trigger('pomodoro.start');
            showPomodoro();
            startTimer();
            this.running = true;
        },
    
        cancel: function() {
            $(document).trigger('pomodoro.cancel');
            resetPomodoro();
            this.running = false;
        },
        
        finish: function() {
            $(document).trigger('pomodoro.finish');
            resetPomodoro();
            this.running = false;
        },
        
        running: false
    });*/