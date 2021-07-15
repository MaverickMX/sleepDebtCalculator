const getSleepHours = day =>{
    switch (day) {
        case 'monday' :
        return 8;
        case 'tuesday' :
        return 7;
        case 'wednesday' :
        return 6;
        case 'thursday' :
        return 8;
        case 'friday' :
        return 6;
        case 'saturday' :
        return 8
        case 'sunday' :
        return 9
    }
};

const getActualSleepHours = () =>{
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours ('sunday');

};

const getIdealSleepHours = (idealHours) =>{
    return idealHours * 7;
};

const calculateSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(9);
    if(actualSleepHours === idealSleepHours){
        console.log('The user got the perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours){
        console.log('The user got more sleep than needed, you are over: '+ (actualSleepHours - idealSleepHours) + '. You should rest less.');
    } else {console.log('You should get some rest, you are under '+ (idealSleepHours - actualSleepHours) + ' hours. Get some rest.');}
};

calculateSleepDebt();