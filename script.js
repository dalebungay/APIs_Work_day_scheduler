var currentDay = moment().format("dddd MMM Do, YYYY");
$("#currentDay").text(currentDay);

function savedTime() {
    
    var currentTime;
    
    $(".textarea").each(function () {
        currentTime = $(this).attr("id");
        console.log(currentTime);
        if (currentTime < moment().hour()) {
            $(this).addClass("past");
        }
        if (currentTime == moment().hour()) {
            $(this).addClass("present");
        }
        if (currentTime > moment().hour()) {
            $(this).addClass("future");
        }
    });
}

    var textInput
    var savedInput

    $(".saveButton").click(function () {
        textInput = $(this).siblings(".textarea").val();
        savedInput = $(this).siblings(".time-block").attr("id");
        console.log(savedInput);
        console.log(textInput);
        localStorage.setItem(savedInput, textInput);
});

function displayEvents() {
      $(".textarea").each(function () {
        var time = $(this).attr("id");
        var lastInput = localStorage.getItem(time);
        console.log(time);
        $(this).val(lastInput);
      });
    }
    
    savedTime();
    displayEvents();