let calendarInstance = null;

function createCalendar(monthsToShow){
    if(calendarInstance){
        calendarInstance.destroy();
    }

        calendarInstance = flatpickr("#doble-calendario", {
            inline: true,
            mode: "single",
            showMonths: monthsToShow,
            defaultDate: ["2025-04-04", "2025-04-10"],
            dateFormat: "Y-m-d"
        });
}

function getCalendarMonths(){
    return window.innerWidth <= 768 ? 1 : 2;
}

createCalendar(getCalendarMonths());

let previousWidth = window.innerWidth;

window.addEventListener("resize", ()=> {
    const currentWidth = window.innerWidth;
    const wasMobile = previousWidth <= 768;
    const isMobile = currentWidth <= 768;

    if(wasMobile !== isMobile){
        createCalendar(getCalendarMonths());
    }

    previousWidth = currentWidth;
});