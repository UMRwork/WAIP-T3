    function grade1() {  
        var mylist = document.getElementById("myList1");   
        var grade = mylist.options[mylist.selectedIndex].text;
        if (grade == "A"){
            point1 = 4;
        }else if (grade == "A-"){
            point1 = 3.75;
        }else if (grade == "B+"){
            point1 = 3.50;
        }else if (grade == "B"){
            point1 = 3;
        }else if (grade == "C+"){
            point1 = 2.50;
        }else if (grade == "C"){
            point1 = 2;
        }else if (grade == "D+"){
            point1 = 1.50;
        }else if (grade == "D"){
            point1 = 1;
        }else if (grade == "F"){
            point1 = 0;
        }else{
            point1 = 888;
        }
        
        crdt();
        }


    function grade2() {  
        var mylist = document.getElementById("myList2");  
        var grade = mylist.options[mylist.selectedIndex].text;
        if (grade == "A"){
            point2 = 4;
        }else if (grade == "A-"){
            point2 = 3.75;
        }else if (grade == "B+"){
            point2 = 3.50;
        }else if (grade == "B"){
            point2 = 3;
        }else if (grade == "C+"){
            point2 = 2.50;
        }else if (grade == "C"){
            point2 = 2;
        }else if (grade == "D+"){
            point2 = 1.50;
        }else if (grade == "D"){
            point2 = 1;
        }else if (grade == "F"){
            point2 = 0;
        }

        crdt();
        }


    function grade3() {  
        var mylist = document.getElementById("myList3"); 
        var grade = mylist.options[mylist.selectedIndex].text;
        if (grade == "A"){
            point3 = 4;
        }else if (grade == "A-"){
            point3 = 3.75;
        }else if (grade == "B+"){
            point3 = 3.50;
        }else if (grade == "B"){
            point3 = 3;
        }else if (grade == "C+"){
            point3 = 2.50;
        }else if (grade == "C"){
            point3 = 2;
        }else if (grade == "D+"){
            point3 = 1.50;
        }else if (grade == "D"){
            point3 = 1;
        }else if (grade == "F"){
            point3 = 0;
        }

        crdt();
        }


    function grade4() {  
        var mylist = document.getElementById("myList4"); 
        var grade = mylist.options[mylist.selectedIndex].text;
        if (grade == "A"){
            point4 = 4;
        }else if (grade == "A-"){
            point4 = 3.75;
        }else if (grade == "B+"){
            point4 = 3.50;
        }else if (grade == "B"){
            point4 = 3;
        }else if (grade == "C+"){
            point4 = 2.50;
        }else if (grade == "C"){
            point4 = 2;
        }else if (grade == "D+"){
            point4 = 1.50;
        }else if (grade == "D"){
            point4 = 1;
        }else if (grade == "F"){
            point4 = 0;
        }
    
        crdt(); 
        }


    function run() {
    var val = 1;
    if (val = 1) {start = 1;}
    crdt(); 
    } 


    function crdt() { 
        var crdthr1, crdthr2, crdthr3, crdthr4, total;
        crdthr1 = parseFloat(document.getElementById("myList_1").value);
        crdthr2 = parseFloat(document.getElementById("myList_2").value);
        crdthr3 = parseFloat(document.getElementById("myList_3").value);
        crdthr4 = parseFloat(document.getElementById("myList_4").value);
        totalcredit = crdthr1 + crdthr2 + crdthr3 + crdthr4
        if (start == 1){
            document.getElementById("totalcrdt").value = totalcredit;  
            document.getElementById("gpa").value = ((point1 * crdthr1 + point2 * crdthr2 + point3 * crdthr3 + point4 * crdthr4)/ totalcredit).toFixed(2);   
        }
        start = 0; //reset start value
    }
