class Sinciclos{
    sumas_de2numeros(){
        let num1=8;
        let num2=4;
        let resultado=0
        if (num1 > num2){
          resultado = num1+num2;
          console.log(`la suma de ${num1} y ${num2} es ${resultado}.` ); 

        }

    }

    operaciones(){
        let num1 = 6;
        let num2 = 2;
        let suma = 0;
        let resta= 0;
        let multiplicacion = 1
        let divicion;
        let residuo;
        
        suma= num1+num2;
        resta= num1-num2;
        multiplicacion= num1*num2;
        divicion= num1/num2; 
        residuo= num1% num2;

        console.log (`la suma de ${num1} y ${num2} es ${suma}.` ); 
        console.log(`la resta de ${num1} y ${num2} es ${resta}.` ); 
        console.log(`la multiplicacion de ${num1} y ${num2} es ${multiplicacion}.` ); 
        console.log(`la divicion  de ${num1} y ${num2} es ${divicion}.` ); 
        console.log(`el residuo de ${num1} y ${num2} es ${residuo}.` ); 

    }

    mayorde2numeros(){
        let num1=8
        let num2=3
        if (num1 > num2){
            console.log(` el numero mayor es ${num1} `)
        }
    }


    presentarun_nombre(){
        let nombre=  'nina';
        console.log(`el nombre a presentar es ${nombre} `);
    }


    valor_deliva(){
        let compra=150
        let iva= 0.12;
        let total=0;
        total= compra+(compra*iva)
        console.log(`el total con iva es ${total}`);

    }
    
    presentarsi2numerosson_distintos_oiguales(){
        let Nombre1= 'camila';
        let Nombre2= 'camila';
        if (Nombre1 == Nombre2){
            console.log(`${Nombre1} y ${Nombre2} son iguales`);
        }else{
            console.log(`${Nombre1} y ${Nombre2} no son iguales`);
        }
    }



    calcularelvueltodeunacompra(){
        let costo=250;
        let pago= 300;
        let vuelto= 0
        vuelto=pago-costo
        console.log(`el vuelto es ${vuelto}`);
    }    


    Invertir_Numero(){
        // Definicion de variables
        let num = 593;
        let invertido = parseInt(num.toString().split('').reverse().join(''));
        // Presentacion del numero invertido
        console.log(`El numero invertido de ${num} es: ${invertido}`);
    }

  
    
    
}
let sinciclos = new Sinciclos();
//sinciclos.sumas_de2numeros();
//sinciclos.operaciones();
//sinciclos.mayorde2numeros();
//sinciclos.presentarun_nombre();
//sinciclos.valor_deliva();
//sinciclos.presentarsi2numerosson_distintos_oiguales() ;
//sinciclos.calcularelvueltodeunacompra() ;
//sinciclos.Invertir_Numero()




class Conciclos{
    repetirnombre5_veces(){
        let nombre= 'jurith';
        let i = 0
        for( i= 0 ; i<=5 ; i++){
            console.log(` ${nombre} `);

        }
    }


    multiplosde3_del3al21(){
        let i=3
        for(i=3 ; i<=21; i++){
            if(i % 3 === 0){
                console.log(` ${i} `);
            }
        }
    }



    multiplosde3_del21al3(){
        let i=21
        for(i=21 ; i>=3; i= i-3){
            if(i % 3 === 0){
                console.log(` ${i} `);
            }
        }
    }

    //10) presentar elementos de un arreglo  que tengan menos de 5 caracteres
    presentarun_arreglo(){
        let arreglo=[8,24,789,1867,38495,134,8,56,3421,98];
        console.log(arreglo)
        for (let pos = 0; pos < 10; pos = pos+1) {
            if (arreglo[pos].length < 5) {
                console.log(`pos->${pos} Elemento:${arreglo[pos]}` )
            }

        }
    }

    //11) Dado un arreglo presentar sus elementos
    Presentar_arreglo(){
        let arreglo=[2,5,` lesly`,8,9]
        let i = 0
        for(i=0 ; i< arreglo.length; i++ ){
            console.log(` ${arreglo[i]} `);
        }

    }

    //12) Dado un arreglo de numeros presentar los menores a 10
    arreglos_menoresa10(){
        let arreglo=[2,5,8,22,45,9]
        let i=0
        for(i=0; i<arreglo.length; i++){
            if(arreglo[i]<10){
                console.log(` ${arreglo[i]} `);
            }
        }

        

    }

    //
    Presentar_Arreglo_Impares_y_Pares() {;
        let numero=[15,25,22,12];
        let i= 0
        let suma= 0
        for( i= 0; i<numero.length; i++){
            if(numero[i] % 2 === 0){
                suma=suma+numero[i];  
            }else{
                console.log(` ${numero[i]} `);
            }
        }
        console.log(` la suma de los pares es${suma} `);
    }


     // Ejercicio 14, Presentar el Primero, medio y ultimo valor de una arreglo
     Presentar_Arreglo_Primero_Medio_Ultimo(){
        // Definicion de variables
        let Numeros = [12,11,23,25,50];
        let i = 0;
        let primero = Numeros[0];
        let medio = Numeros[(Numeros.length-1) / 2];
        let ultimo = Numeros[Numeros.length - 1];
        // Presentacion de los elementos del arreglo
        for ( i = 0; i < Numeros.length; i++ ){
            if (i === 0){
                console.log(`El primero es: ${primero}`);
            }else if (i === (Numeros.length-1) / 2){
                console.log(`El medio es: ${medio}`);
            }else if (i === Numeros.length - 1){
                console.log(`El ultimo es: ${ultimo}`);
            }
        }
    }

    // Ejercico 16, Presentar la tabla de multiplicar de cualquier num del 1 - 12
    Presentar_Tabla_Multiplicar(){
        // Definicion de variables
        let tabla = 4;
        let i = 1;
        // Presentacion la tabla de multiplicar de num
        for ( i = 1; i <= 12; i++ ){
            console.log(`${tabla} * ${i} = ${tabla * i}`)
        }
    }

    // Ejercico 17, Realizar la multiplicar de dos numeros por medio de suma sucesiva
    Multiplicacion_Por_Suma(){
        // Definicion de variables
        let num1 = 2;
        let num2 = 3;
        let suma = 0;
        let i = 0;
        // Presentacion de la tabla de multiplicar de num
        for ( i = 0; i < num2; i++ ){
            suma = suma + num1;
        }
        console.log(`La suma de los numeros es: ${suma}`);
    }

    // Ejercicio 18, Realizar la division de dos numeros por medio de resta sucesiva
    Division_Por_Resta(){
        // Definicion de variables
        let n1 = 15;
        let n2 = 3;
        let cociente = 0;
        let resto = n1;
        
        // Operacion y presentacion de la division por resta
        while ( resto >= n2 ) {
          resto -= n2;
          cociente++;
        }
        
        console.log(`El cociente es ${cociente} y el resto es ${resto}.`);
    }

    // Ejercico 19, Calcular el factorial de un numero
    Calcular_Factorial(){
        // Definicion de variables
        let numero = 5;
        let factorial = 1;
        let i = 0;
        // Presentacion del factorial de numero
        for ( i = 1; i <= numero; i++ ){
            factorial = factorial * i;
            console.log(`${numero} * ${i} = ${factorial}`)
        }
        console.log(`El factorial de ${numero} es: ${factorial}`);
    }

    // Ejercicio 20, Calcular el exponente de un numero
    Calcular_Exponente(){
        // Definicion de variables
        let num1 = 6;
        let num2 = 2;
        let multi = 1;
        let i = 0;
        // Presentacion de la tabla de multiplicar de num
        for ( i = 0; i < num2; i++ ){
            multi = multi * num1;
        }
        console.log(`El exponente de ${num1} es: ${multi}`);
    }
    
    // Ejercicio 21, Calcular la serie fibonaccia de un numero
    Calcular_Serie_Fibonacci(){
        // Definicion de variables
        let numero = 10;
        let fibonacci = [];
        let i = 0;

        // Inicializacion de la serie
        fibonacci[0] = 0;
        fibonacci[1] = 1;

        // Presentacion de la serie fibonaccia
        for ( i = 2; i < numero; i++ ){
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }
        console.log(`La serie fibonaccia de ${numero} es: ${fibonacci}`);
    }

    // Ejercicio 23, Presentar los divisores de un numero
    Calcular_Divisores(){
        // Definicion de variables
        let numero = 12;
        let divisores = [];
        let i = 0;
        // Presentacion de los divisores de numero
        for ( i = 1; i < numero; i++ ){
            if ( numero % i === 0 ){
                divisores.push(i);
            }
        }
        console.log(`Los divisores de ${numero} son: ${divisores}`);
    }

     // Ejercicio 24, Presentar si un numero es perfecto o no
     Sacar_Numero_Perfecto(){
        // Definicion de variables
        let numero = 6;
        let suma = 0;
        let i = 0;
        // Presentacion de si el numero es perfecto o no
        for ( i = 1; i <= numero /2; i++ ){
            if ( numero % i === 0 ){
                suma = suma + i
            }
        }

        if ( suma === numero && numero ){
            console.log(`El numero ${numero} SI es perfecto`);
        }else{
            console.log(`El numero ${numero} NO es perfecto`);
        }
    }

    // Ejercicio 25, Presentar si un numero es primo
    Sacar_Numero_Primo(){
        // Definicion de variables
        let numero = 61;
        let i = 0;
        let primo = true;

        // Bucle para saber si es numero es divisible en rango 2 
        for ( i = 2; i < numero; i++){
            if ( numero % i === 0 ){
                primo = false;
            }
        }

        // Presentacion del numero de si es primo o no
        if ( primo ){
            console.log(`El numero ${numero} es primo`);
        }else{
            console.log(`El numero ${numero} no primo`);
        }
    }
}

// Inicializacion de las instancias con ciclos

let ciclos = new Conciclos;
 //ciclos.repetirnombre5_veces();
 //ciclos.multiplosde3_del3al21(); 
 //ciclos.multiplosde3_del21al3();
 //ciclos.Presentarun_Arreglo();
 ciclos.Presentar_arreglo()
 //ciclos.arreglos_menoresa10();
 //ciclos.Presentar_Arreglo_Impares_y_Pares();
 //ciclos.Presentar_Arreglo_Primero_Medio_Ultimo();
 //ciclos.Presentar_Tabla_Multiplicar();
 //ciclos.Multiplicacion_Por_Suma();
 //ciclos.Division_Por_Resta();
 //ciclos.Calcular_Factorial();
 //ciclos.Calcular_Exponente();
 //ciclos.Calcular_Serie_Fibonacci();
 //ciclos.Calcular_Divisores()
 //ciclos.Sacar_Numero_Perfecto()
 //ciclos.Sacar_Numero_Primo()








