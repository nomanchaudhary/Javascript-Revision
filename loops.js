
        //So here we practice loops
        //For Loop
        for(let i=1; i<=10; i++){
            console.log(i);
        }
        //*************************While loop**************************
        const myArray = ["ahmad","Noman","Hammad"];
        let arr = 0;
        while(arr < myArray.length){// tb tk chaly ga jb tk condition true rhy gii
            console.log(`hey buddy ${myArray[arr]}`);//[arr] is liay likh rhy qu k wo array ka index ly k ata hu one by one
            arr++;
        }
        //*****************For of loop *************************
        const myArr = ["Noman","Ahmad","Hamza","Gopang"];
        // const myArrayObj= [{name : "Noman"}, {name :"gopang"}]
        for (const name of myArr) {
            console.log(name);
        }