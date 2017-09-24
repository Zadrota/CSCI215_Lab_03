function calculate() {

    var female = document.getElementsByName("sex")[1].checked;
    var male = document.getElementsByName("sex")[0].checked;

    var weight = document.getElementsByName("weight")[0].value;
    var height = document.getElementsByName("height")[0].value;

    console.log( 'Male = ' + male );
    console.log( 'Weight = ' + weight );
    console.log( 'Height = ' + height );

    // -------------------------------
    // Conversions
    // -------------------------------
    // lbs to kg: 1 lb = 0.454 kg
    // inch to meter: 1 in = 0.0254 m
    // inch to cm: 1 in = 2.54 cm

    // ==========================================
    // Todo: Perform conversion calculations here

    // -------------------------------
    // Body Surface Area (BSA)
    // -------------------------------

    BSA = 0;
    heightincm = 0;
    weightinkg = 0;
    heightincm = height*2.54;
    weightinkg = weight*.454;
    BSA = Math.sqrt((heightincm*weightinkg)/3600);

    // ==========================================
    // Todo: Perform BSA calculation here

    // -------------------------------
    // Ideal Body Weight (IBW)
    // -------------------------------

    var IBW = 0;

    if ( female ) {

        // ==========================================
        // Todo: Perform female IBW calculation here

        IBW = 45.5+2.3*(height-60);

    } else if ( male ) {

        // ==========================================
        // Todo: Perform male IBW calculation here

        IBW = 50+2.3*(height-60);
    }

    // -------------------------------
    // Body Mass Index (BMI)
    // -------------------------------



    // ==========================================
    // Todo: Perform BMI calculation here

    BMI = 0;
    BMI = (weightinkg/(Math.pow((heightincm/100),2)));

    // Do not modify this function call
    display( BSA, IBW, BMI );

}

// ------------------------------------
// Do not modify this function
function display( BSA, IBW, BMI ) {

    var message = 'Body Surface Area = ' + BSA.toPrecision(4) + ' m^2\nIdeal Body Weight = ' + IBW.toPrecision(4) + ' kg\nBody Mass Index = ' + BMI.toPrecision(4) + ' kg/m^2';

    document.getElementById("output").innerHTML=message;

}