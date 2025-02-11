
      //*************************Function and parameters********************************
      //lets write a function with return statement******************
      function myUsername(username) {
        return `how are you ${username}`; // JB HM FUNCTION kI VALUE KO RETURN KRY GY TB CONSOLE B KRY GY
      }
      console.log(myUsername("Noman"));
      //************Nested Functions to check scopes************************
      function One() {
        const heroName = "Muhammad Noman";

        function Two() {
          const heroName2 = "Ahmad";
          console.log(heroName);
        }
        // console.log(heroName2);

        Two();
      }
      One();
      //********************Immediately invoked function*****************************
      (function Chai() {
        //***************** We wrap the whole fuction in small brackets ();
        console.log(`Datebase is connected`);
      })(); //***************To call the IIFE we use () at the end.
