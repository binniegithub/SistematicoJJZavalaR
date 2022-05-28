function yearsFrom(inputDate){
    let initDate;
    if(typeof inputDate =="string"){
        //initDate = new Date(inputDate);
        //07/05/2022 (7 de mayo del 2022)
        console.log("valor capturado:" + inputDate);
        let parts = inputDate.split("-");
        console.log("parts[2]:" + parts[2] 
                    + ", parts[1]: " + parts[1] 
                    + ", parts[0]: " +  parts[0]);
        initDate = new Date(parts[0],parts[1] - 1,parts[2]);
        console.log("valor asignado:" + initDate);
    }
    else{
        initDate = inputDate;
    }
    let today = new Date();
    let year = today.getFullYear();
    let day = today.getDate();
    let month = today.getMonth();

    let initYear = initDate.getFullYear();
    let initDay = initDate.getDate();
    let initMonth = initDate.getMonth();

    let years = year - initYear;

    if(month<initMonth){
        years--;
    }
    else{
        if(month==initMonth){
            if(day<initDay){
                years--;
            }
        }
    }

    return years;
}