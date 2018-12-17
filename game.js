var cells = [];
cells[0] = {
    A1H8: false,
    A3F8: false,
    C1H6: false,
    A5D8: false,
    E1H4: false,
    H2B8: true,
    G1A7: false,
    H4D8: false,
    E1A5: false,
    H6F8: false,
    C1A3: false,
    A7B8: true,
    G1H2: false,
    color: 1, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая 3 - черная дамка 4 - белая дамка
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false

};
cells[1] = {
    A1H8: false,
    A3F8: false,
    C1H6: false,
    A5D8: true,
    E1H4: false,
    H2B8: false,
    G1A7: false,
    H4D8: true,
    E1A5: false,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 1, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая, 3 - черная дамка, 4 - белая дамка
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[2] = {
    A1H8: false,
    A3F8: true,
    C1H6: false,
    A5D8: false,
    E1H4: false,
    H2B8: false,
    G1A7: false,
    H4D8: false,
    E1A5: false,
    H6F8: true,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 1, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[3] = {
    A1H8: true,
    A3F8: false,
    C1H6: false,
    A5D8: false,
    E1H4: false,
    H2B8: false,
    G1A7: false,
    H4D8: false,
    E1A5: false,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 1, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[4] = {
    A1H8: false,
    A3F8: false,
    C1H6: false,
    A5D8: false,
    E1H4: false,
    H2B8: false,
    G1A7: true,
    H4D8: false,
    E1A5: false,
    H6F8: false,
    C1A3: false,
    A7B8: true,
    G1H2: false,
    color: 1, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[5] = {
    A1H8: false,
    A3F8: false,
    C1H6: false,
    A5D8: true,
    E1H4: false,
    H2B8: true,
    G1A7: false,
    H4D8: false,
    E1A5: false,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 1, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[6] = {
    A1H8: false,
    A3F8: true,
    C1H6: false,
    A5D8: false,
    E1H4: false,
    H2B8: false,
    G1A7: false,
    H4D8: true,
    E1A5: false,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 1, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[7] = {
    A1H8: true,
    A3F8: false,
    C1H6: false,
    A5D8: false,
    E1H4: false,
    H2B8: false,
    G1A7: false,
    H4D8: false,
    E1A5: false,
    H6F8: true,
    C1A3: false,
    color: 1, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    dead: false,
    queen: false
};
cells[8] = {
    A1H8: false,
    A3F8: false,
    C1H6: false,
    A5D8: true,
    E1H4: false,
    H2B8: false,
    G1A7: true,
    H4D8: false,
    E1A5: false,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 1, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[9] = {
    A1H8: false,
    A3F8: true,
    C1H6: false,
    A5D8: false,
    E1H4: false,
    H2B8: true,
    G1A7: false,
    H4D8: false,
    E1A5: false,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 1, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[10] = {
    A1H8: true,
    A3F8: false,
    C1H6: false,
    A5D8: false,
    E1H4: false,
    H2B8: false,
    G1A7: false,
    H4D8: true,
    E1A5: false,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 1, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[11] = {
    A1H8: false,
    A3F8: false,
    C1H6: true,
    A5D8: false,
    E1H4: false,
    H2B8: false,
    G1A7: false,
    H4D8: false,
    E1A5: false,
    H6F8: true,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 1, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[12] = {
    A1H8: false,
    A3F8: false,
    C1H6: false,
    A5D8: true,
    E1H4: false,
    H2B8: false,
    G1A7: false,
    H4D8: false,
    E1A5: true,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 0, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[13] = {
    A1H8: false,
    A3F8: true,
    C1H6: false,
    A5D8: false,
    E1H4: false,
    H2B8: false,
    G1A7: true,
    H4D8: false,
    E1A5: false,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 0, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[14] = {
    A1H8: true,
    A3F8: false,
    C1H6: false,
    A5D8: false,
    E1H4: false,
    H2B8: true,
    G1A7: false,
    H4D8: false,
    E1A5: false,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 0, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[15] = {
    A1H8: false,
    A3F8: false,
    C1H6: true,
    A5D8: false,
    E1H4: false,
    H2B8: false,
    G1A7: false,
    H4D8: true,
    E1A5: false,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 0, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[16] = {
    A1H8: false,
    A3F8: true,
    C1H6: false,
    A5D8: false,
    E1H4: false,
    H2B8: false,
    G1A7: false,
    H4D8: false,
    E1A5: true,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 0, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[17] = {
    A1H8: true,
    A3F8: false,
    C1H6: false,
    A5D8: false,
    E1H4: false,
    H2B8: false,
    G1A7: true,
    H4D8: false,
    E1A5: false,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 0, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[18] = {
    A1H8: false,
    A3F8: false,
    C1H6: true,
    A5D8: false,
    E1H4: false,
    H2B8: true,
    G1A7: false,
    H4D8: false,
    E1A5: false,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 0, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[19] = {
    A1H8: false,
    A3F8: false,
    C1H6: false,
    A5D8: false,
    E1H4: true,
    H2B8: false,
    G1A7: false,
    H4D8: true,
    E1A5: false,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 0, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[20] = {
    A1H8: false,
    A3F8: true,
    C1H6: false,
    A5D8: false,
    E1H4: false,
    H2B8: false,
    G1A7: false,
    H4D8: false,
    E1A5: false,
    H6F8: false,
    C1A3: true,
    A7B8: false,
    G1H2: false,
    color: 2, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[21] = {
    A1H8: true,
    A3F8: false,
    C1H6: false,
    A5D8: false,
    E1H4: false,
    H2B8: false,
    G1A7: false,
    H4D8: false,
    E1A5: true,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 2, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[22] = {
    A1H8: false,
    A3F8: false,
    C1H6: true,
    A5D8: false,
    E1H4: false,
    H2B8: false,
    G1A7: true,
    H4D8: false,
    E1A5: false,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 2, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[23] = {
    A1H8: false,
    A3F8: false,
    C1H6: false,
    A5D8: false,
    E1H4: true,
    H2B8: true,
    G1A7: false,
    H4D8: false,
    E1A5: false,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 2, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[24] = {
    A1H8: true,
    A3F8: false,
    C1H6: false,
    A5D8: false,
    E1H4: false,
    H2B8: false,
    G1A7: false,
    H4D8: false,
    E1A5: false,
    H6F8: false,
    C1A3: true,
    A7B8: false,
    G1H2: false,
    color: 2, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[25] = {
    A1H8: false,
    A3F8: false,
    C1H6: true,
    A5D8: false,
    E1H4: false,
    H2B8: false,
    G1A7: false,
    H4D8: false,
    E1A5: true,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 2, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[26] = {
    A1H8: false,
    A3F8: false,
    C1H6: false,
    A5D8: false,
    E1H4: true,
    H2B8: false,
    G1A7: true,
    H4D8: false,
    E1A5: false,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 2, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[27] = {
    A1H8: false,
    A3F8: false,
    C1H6: false,
    A5D8: false,
    E1H4: false,
    H2B8: true,
    G1A7: false,
    H4D8: false,
    E1A5: false,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: true,
    color: 2, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[28] = {
    A1H8: true,
    A3F8: false,
    C1H6: false,
    A5D8: false,
    E1H4: false,
    H2B8: false,
    G1A7: false,
    H4D8: false,
    E1A5: false,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 2, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[29] = {
    A1H8: false,
    A3F8: false,
    C1H6: true,
    A5D8: false,
    E1H4: false,
    H2B8: false,
    G1A7: false,
    H4D8: false,
    E1A5: false,
    H6F8: false,
    C1A3: true,
    A7B8: false,
    G1H2: false,
    color: 2, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[30] = {
    A1H8: false,
    A3F8: false,
    C1H6: false,
    A5D8: false,
    E1H4: true,
    H2B8: false,
    G1A7: false,
    H4D8: false,
    E1A5: true,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: false,
    color: 2, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};
cells[31] = {
    A1H8: false,
    A3F8: false,
    C1H6: false,
    A5D8: false,
    E1H4: false,
    H2B8: false,
    G1A7: true,
    H4D8: false,
    E1A5: false,
    H6F8: false,
    C1A3: false,
    A7B8: false,
    G1H2: true,
    color: 2, //Цвет шашки, 2 — белая, 1 — черная, 0 — клетка пустая
    border: false, //подсвечено ли поле
    attack: false,
    forward: false,
    dead: false,
    queen: false
};

//сверху вниз располагаются шашки 1-черные, 2 - белые

var A1H8 = [3,7,10,14,17,21,24,28];
var A3F8 = [2,6,9,13,16,20];
var C1H6 = [11,15,18,22,25,29];
var A5D8 = [1,5,8,12];
var E1H4 = [19,23,26,30];
var H2B8 = [0,5,9,14,18,23,27];
var G1A7 = [4,8,13,17,22,26,31];
var H4D8 = [1,6,10,15,19];
var E1A5 = [12,16,21,25,30];
var H6F8 = [2,7,11];
var C1A3 = [20,24,29];
var A7B8 = [0,4];
var G1H2 = [27,31];
var turn = -1;// белые ходят
var first_click = true;
var fight = 0;
var last_k;
var white = 12;
var black = 12;
var not_scan = true;


function cellClicker(k) {
      if(not_scan) scanning();
    //первый клик
     if (first_click) {

         if (((cells[k].color === 4)||(cells[k].color === 2))&&(turn<0) || ((cells[k].color === 1)||(cells[k].color === 3))&&(turn>0) ) {

             if (fight === 1) {
                 if (cells[k].attack) {
                     first_click = false;
                     last_k = k;
                     if (cells[k].color === 1)// подсвечиваем клетку
                         document.getElementById(String(k)).innerHTML = "<svg> <rect x=\"0\" y=\"0\" width=\"50\" height=\"50\" fill=#622600 stroke=\"yellowgreen\" stroke-width=\"5\" fill-opacity=\"1\" />  <circle r=\"25\" cx=\"25\" cy=\"25\" fill=\"black\" /> </svg>";
                     if (cells[k].color === 2)
                         document.getElementById(String(k)).innerHTML = "<svg> <rect x=\"0\" y=\"0\" width=\"50\" height=\"50\" fill=#622600 stroke=\"yellowgreen\" stroke-width=\"5\" fill-opacity=\"1\" />  <circle r=\"25\" cx=\"25\" cy=\"25\" fill=\"white\" /> </svg>";
                     if (cells[k].color === 3)
                         document.getElementById(String(k)).innerHTML = "<svg> <rect x=\"0\" y=\"0\" width=\"50\" height=\"50\" fill=#622600 stroke=\"yellowgreen\" stroke-width=\"5\" fill-opacity=\"1\" />  <circle r=\"25\" cx=\"25\" cy=\"25\" fill=\"red\" /> </svg>";
                     if (cells[k].color === 4)
                         document.getElementById(String(k)).innerHTML = "<svg> <rect x=\"0\" y=\"0\" width=\"50\" height=\"50\" fill=#622600 stroke=\"yellowgreen\" stroke-width=\"5\" fill-opacity=\"1\" />  <circle r=\"25\" cx=\"25\" cy=\"25\" fill=\"blue\" /> </svg>";

                 }

                 else alert('You have to beat!');
             }
             //else if (cells[k].turn) // проверка на наличие хода

             if (fight === 0){
                 if(cells[k].forward) {
                     first_click = false;
                     last_k = k;
                     if (cells[k].color === 1)// подсвечиваем клетку
                         document.getElementById(String(k)).innerHTML = "<svg> <rect x=\"0\" y=\"0\" width=\"50\" height=\"50\" fill=#622600 stroke=\"yellowgreen\" stroke-width=\"5\" fill-opacity=\"1\" />  <circle r=\"25\" cx=\"25\" cy=\"25\" fill=\"black\" /> </svg>";
                     if (cells[k].color === 2)
                         document.getElementById(String(k)).innerHTML = "<svg> <rect x=\"0\" y=\"0\" width=\"50\" height=\"50\" fill=#622600 stroke=\"yellowgreen\" stroke-width=\"5\" fill-opacity=\"1\" />  <circle r=\"25\" cx=\"25\" cy=\"25\" fill=\"white\" /> </svg>";
                     if (cells[k].color === 3)
                         document.getElementById(String(k)).innerHTML = "<svg> <rect x=\"0\" y=\"0\" width=\"50\" height=\"50\" fill=#622600 stroke=\"yellowgreen\" stroke-width=\"5\" fill-opacity=\"1\" />  <circle r=\"25\" cx=\"25\" cy=\"25\" fill=\"red\" /> </svg>";
                     if (cells[k].color === 4)
                         document.getElementById(String(k)).innerHTML = "<svg> <rect x=\"0\" y=\"0\" width=\"50\" height=\"50\" fill=#622600 stroke=\"yellowgreen\" stroke-width=\"5\" fill-opacity=\"1\" />  <circle r=\"25\" cx=\"25\" cy=\"25\" fill=\"blue\" /> </svg>";


                 }
                 else alert('This checker can not move!');
             }

         }

         else
             alert('Click on your checker please! May be it is not your turn.');

     }
     // второй клик
     else {
         not_scan = true;
         if(fight === 1) fighting(k,last_k);
         else forward(k);

     }

}


function scanning(){
    fight = 0;
    var s;
    for (let r = 0; r<32; ++r){
        cells[r].attack = false;
        cells[r].forward = false;
        if (cells[r].dead) cells[r].color = 0;
    }
         if (turn<0){
             if(cells[A7B8[0]].color === 0 && (cells[A7B8[1]].color === 2||cells[A7B8[1]].color === 4)) cells[A7B8[1]].forward = true;
             if(cells[G1H2[0]].color === 0 && (cells[G1H2[1]].color === 2||cells[G1H2[1]].color === 4)) cells[G1H2[1]].forward = true;
             if(cells[A7B8[1]].color === 0 && cells[A7B8[0]].color === 4) cells[A7B8[0]].forward = true;
             if(cells[G1H2[1]].color === 0 && cells[G1H2[0]].color === 4) cells[G1H2[0]].forward = true;
            for (let i = 0; i<6; ++i) {
                if (cells[A1H8[i]].color ===2 && (cells[A1H8[i+1]].color ===1||cells[A1H8[i+1]].color ===3) && cells[A1H8[i+2]].color ===0) {
                     cells[A1H8[i]].attack=true;
                    fight = 1;
                }
                if (cells[A1H8[i+2]].color ===2 && (cells[A1H8[i+1]].color ===1||cells[A1H8[i+1]].color ===3) && cells[A1H8[i]].color ===0) {
                    cells[A1H8[i+2]].attack=true;
                    fight = 1;
                }
                if (cells[A1H8[i]].color ===4){s = i+1; while((s<6)&&(cells[A1H8[s]].color===0)){s+=1;}
                        if ((cells[A1H8[s]].color===1||cells[A1H8[s]].color===3)&&cells[A1H8[s+1]].color===0) {fight =1; cells[A1H8[i]].attack=true;}}
                if (cells[A1H8[i+2]].color ===4){s = i+1; while((s>1)&&(cells[A1H8[s]].color===0)){s-=1;}
                        if ((cells[A1H8[s]].color===1||cells[A1H8[s]].color===3)&&cells[A1H8[s-1]].color===0) {fight = 1; cells[A1H8[i+2]].attack=true;}}

                if(cells[A1H8[i]].color === 0 && (cells[A1H8[i+1]].color === 2||cells[A1H8[i+1]].color === 4)) cells[A1H8[i+1]].forward = true;
                if(cells[A1H8[i+1]].color === 0 && cells[A1H8[i]].color === 4) cells[A1H8[i]].forward = true;
            }
             if(cells[A1H8[6]].color === 0 && (cells[A1H8[7]].color === 2||cells[A1H8[7]].color === 4)) cells[A1H8[7]].forward = true;
             if(cells[A1H8[7]].color === 4 && cells[A1H8[6]].color === 0) cells[A1H8[7]].forward = true;

            for (let i = 0; i<4; ++i){
                if (cells[A3F8[i]].color ===2 && (cells[A3F8[i+1]].color ===1||cells[A3F8[i+1]].color ===3) && cells[A3F8[i+2]].color ===0) {
                    cells[A3F8[i]].attack=true;
                    fight = 1;
                }
                if (cells[A3F8[i+2]].color ===2 && (cells[A3F8[i+1]].color ===1||cells[A3F8[i+1]].color ===3) && cells[A3F8[i]].color ===0) {
                    cells[A3F8[i+2]].attack=true;
                    fight = 1;
                }
                if (cells[C1H6[i]].color ===2 && (cells[C1H6[i+1]].color ===1||cells[C1H6[i+1]].color ===3) && cells[C1H6[i+2]].color ===0) {
                    cells[C1H6[i]].attack=true;
                    fight = 1;
                }
                if (cells[C1H6[i+2]].color ===2 && (cells[C1H6[i+1]].color ===1||cells[C1H6[i+1]].color ===3) && cells[C1H6[i]].color ===0) {
                    cells[C1H6[i+2]].attack=true;
                    fight = 1;
                }
                if (cells[A1H8[i]].color ===4){s = i+1; while((s<4)&&(cells[A1H8[s]].color===0)){s+=1;}
                    if ((cells[A3F8[s]].color===1||cells[A3F8[s]].color===3)&&cells[A3F8[s+1]].color===0) {fight =1; cells[A3F8[i]].attack=true;}}
                if (cells[A3F8[i+2]].color ===4){s = i+1; while((s>1)&&(cells[A3F8[s]].color===0)){s-=1;}
                    if ((cells[A3F8[s]].color===1||cells[A3F8[s]].color===3)&&cells[A3F8[s-1]].color===0) {fight = 1; cells[A3F8[i+2]].attack=true;}}

                if (cells[C1H6[i]].color ===4){s = i+1; while((s<4)&&(cells[C1H6[s]].color===0)){s+=1;}
                        if ((cells[C1H6[s]].color===1||cells[C1H6[s]].color===3)&&cells[C1H6[s+1]].color===0) {fight =1; cells[C1H6[i]].attack=true;}}
                if (cells[C1H6[i+2]].color ===4){s = i+1; while((s>1)&&(cells[C1H6[s]].color===0)){s-=1;}
                        if ((cells[C1H6[s]].color===1||cells[C1H6[s]].color===3)&&cells[C1H6[s-1]].color===0) {fight = 1; cells[C1H6[i+2]].attack=true;}}
                if(cells[A3F8[i]].color === 0 && (cells[A3F8[i+1]].color === 2||cells[A3F8[i+1]].color === 4)) cells[A3F8[i+1]].forward = true;
                if(cells[C1H6[i]].color === 0 && (cells[C1H6[i+1]].color === 2||cells[C1H6[i+1]].color === 4)) cells[C1H6[i+1]].forward = true;
                if(cells[A3F8[i+1]].color === 0 && cells[A3F8[i]].color === 4) cells[A3F8[i]].forward = true;
                if(cells[C1H6[i+1]].color === 0 && cells[C1H6[i]].color === 4) cells[C1H6[i]].forward = true;
            }
             if(cells[A3F8[4]].color === 0 && (cells[A3F8[5]].color === 2||cells[A3F8[5]].color === 4)) cells[A3F8[5]].forward = true;
             if(cells[C1H6[4]].color === 0 && (cells[C1H6[5]].color === 2||cells[C1H6[5]].color === 4)) cells[C1H6[5]].forward = true;
             if(cells[C1H6[5]].color === 4 && cells[C1H6[4]].color === 0) cells[C1H6[5]].forward = true;
             if(cells[A3F8[5]].color === 4 && cells[A3F8[4]].color === 0) cells[A3F8[5]].forward = true;

            for (let i = 0; i<2; ++i){
                if (cells[A5D8[i]].color ===2 && (cells[A5D8[i+1]].color ===1||cells[A5D8[i+1]].color ===3) && cells[A5D8[i+2]].color ===0) {
                    cells[A5D8[i]].attack=true;
                    fight = 1;
                }
                if (cells[A5D8[i+2]].color ===2 && (cells[A5D8[i+1]].color ===1||cells[A5D8[i+1]].color ===3) && cells[A5D8[i]].color ===0) {
                    cells[A5D8[i+2]].attack=true;
                    fight = 1;
                }
                if (cells[E1H4[i]].color ===2 && (cells[E1H4[i+1]].color ===1||cells[E1H4[i+1]].color ===3) && cells[E1H4[i+2]].color ===0) {
                    cells[i].attack=true;
                    fight = 1;
                }
                if (cells[E1H4[i+2]].color ===2 && (cells[E1H4[i+1]].color ===1||cells[E1H4[i+1]].color ===3) && cells[E1H4[i]].color ===0) {
                    cells[E1H4[i+2]].attack=true;
                    fight = 1;
                }
                if (cells[A5D8[i]].color ===4){s = i+1; while((s<2)&&(cells[A5D8[s]].color===0)){s+=1;}
                    if ((cells[A5D8[s]].color===1||cells[A5D8[s]].color===3)&&cells[A5D8[s+1]].color===0) {fight =1; cells[A5D8[i]].attack=true;}}
                if (cells[A5D8[i+2]].color ===4){s = i+1; while((s>1)&&(cells[A5D8[s]].color===0)){s-=1;}
                    if ((cells[A5D8[s]].color===1||cells[A5D8[s]].color===3)&&cells[A5D8[s-1]].color===0) {fight = 1; cells[A5D8[i+2]].attack=true;}}

                 if (cells[E1H4[i]].color ===4){s = i+1; while((s<2)&&(cells[E1H4[s]].color===0)){s+=1;}
                        if ((cells[E1H4[s]].color===1||cells[E1H4[s]].color===3)&&cells[E1H4[s+1]].color===0) {fight =1; cells[E1H4[i]].attack=true;}}
                  if (cells[E1H4[i+2]].color ===4){s = i+1; while((s>1)&&(cells[E1H4[s]].color===0)){s-=1;}
                        if ((cells[E1H4[s]].color===1||cells[E1H4[s]].color===3)&&cells[E1H4[s-1]].color===0) {fight = 1; cells[E1H4[i+2]].attack=true;}}
                if(cells[A5D8[i]].color === 0 && (cells[A5D8[i+1]].color === 2||cells[A5D8[i+1]].color === 4)) cells[A5D8[i+1]].forward = true;
                if(cells[E1H4[i]].color === 0 && (cells[E1H4[i+1]].color === 2||cells[E1H4[i+1]].color === 4)) cells[E1H4[i+1]].forward = true;
                if(cells[A5D8[i+1]].color === 0 && cells[A5D8[i]].color === 4) cells[A5D8[i]].forward = true;
                if(cells[E1H4[i+1]].color === 0 && cells[E1H4[i]].color === 4) cells[E1H4[i]].forward = true;
            }
             if(cells[A5D8[2]].color === 0 && (cells[A5D8[3]].color === 2||cells[A5D8[3]].color === 4)) cells[A5D8[3]].forward = true;
             if(cells[E1H4[2]].color === 0 && (cells[E1H4[3]].color === 2||cells[E1H4[3]].color === 4)) cells[E1H4[3]].forward = true;
             if(cells[E1H4[3]].color === 4 && cells[E1H4[2]].color === 0) cells[E1H4[3]].forward = true;
             if(cells[A5D8[3]].color === 4 && cells[A5D8[2]].color === 0) cells[A5D8[3]].forward = true;


             for (let i = 0; i<5; ++i) {
                if (cells[H2B8[i]].color ===2 && (cells[H2B8[i+1]].color ===1||cells[H2B8[i+1]].color ===3) && cells[H2B8[i+2]].color ===0) {
                cells[H2B8[i]].attack=true;
                fight = 1;
                }
             if (cells[H2B8[i+2]].color ===2 && (cells[H2B8[i+1]].color ===1||cells[H2B8[i+1]].color ===3) && cells[H2B8[i]].color ===0) {
                 cells[H2B8[i+2]].attack=true;
                 fight = 1;
             }
             if (cells[G1A7[i]].color ===2 && (cells[G1A7[i+1]].color ===1||cells[G1A7[i+1]].color ===3) && cells[G1A7[i+2]].color ===0) {
                 cells[G1A7[i]].attack=true;
                 fight = 1;
             }
             if (cells[G1A7[i+2]].color ===2 && (cells[G1A7[i+1]].color ===1||cells[G1A7[i+1]].color ===3) && cells[G1A7[i]].color ===0) {
                 cells[G1A7[i+2]].attack=true;
                 fight = 1;
             }
                if (cells[H2B8[i]].color ===4){s = i+1; while((s<5)&&(cells[H2B8[s]].color===0)){s+=1;}
                    if ((cells[H2B8[s]].color===1||cells[H2B8[s]].color===3)&&cells[H2B8[s+1]].color===0) {fight =1; cells[H2B8[i]].attack=true;}}
                if (cells[H2B8[i+2]].color ===4){s = i+1; while((s>1)&&(cells[H2B8[s]].color===0)){s-=1;}
                    if ((cells[H2B8[s]].color===1||cells[H2B8[s]].color===3)&&cells[H2B8[s-1]].color===0) {fight = 1; cells[H2B8[i+2]].attack=true;}}

                if (cells[G1A7[i]].color ===4){s = i+1; while((s<5)&&(cells[G1A7[s]].color===0)){s+=1;}
                        if ((cells[G1A7[s]].color===1||cells[G1A7[s]].color===3)&&cells[G1A7[s+1]].color===0) {fight =1; cells[G1A7[i]].attack=true;}}
                if (cells[G1A7[i+2]].color ===4){s = i+1; while((s>1)&&(cells[G1A7[s]].color===0)){s-=1;}
                        if ((cells[G1A7[s]].color===1||cells[G1A7[s]].color===3)&&cells[G1A7[s-1]].color===0) {fight = 1; cells[G1A7[i+2]].attack=true;}}
                if(cells[H2B8[i]].color === 0 && (cells[H2B8[i+1]].color === 2||cells[H2B8[i+1]].color === 4)) cells[H2B8[i+1]].forward = true;
                if(cells[G1A7[i]].color === 0 && (cells[G1A7[i+1]].color === 2||cells[G1A7[i+1]].color === 4)) cells[G1A7[i+1]].forward = true;
                if(cells[H2B8[i+1]].color === 0 && cells[H2B8[i]].color === 2) cells[H2B8[i]].forward = true;
                if(cells[G1A7[i+1]].color === 0 && cells[G1A7[i]].color === 2) cells[G1A7[i]].forward = true;
            }
             if(cells[H2B8[5]].color === 0 && (cells[H2B8[6]].color === 2||cells[H2B8[6]].color === 4)) cells[H2B8[6]].forward = true;
             if(cells[G1A7[5]].color === 0 && (cells[G1A7[6]].color === 2||cells[G1A7[6]].color === 4)) cells[G1A7[6]].forward = true;
             if(cells[H2B8[6]].color === 4 && cells[H2B8[5]].color === 0) cells[H2B8[6]].forward = true;
             if(cells[G1A7[6]].color === 4 && cells[G1A7[5]].color === 0) cells[G1A7[6]].forward = true;

            for (let i = 0; i<3; ++i){
                if (cells[H4D8[i]].color ===2 && (cells[H4D8[i+1]].color ===1||cells[H4D8[i+1]].color ===3) && cells[H4D8[i+2]].color ===0) {
                    cells[H4D8[i]].attack=true;
                    fight = 1;
                }
                if (cells[H4D8[i+2]].color ===2 && (cells[H4D8[i+1]].color ===1||cells[H4D8[i+1]].color ===3) && cells[H4D8[i]].color ===0) {
                    cells[H4D8[i+2]].attack=true;
                    fight = 1;
                }
                if (cells[E1A5[i]].color ===2 && (cells[E1A5[i+1]].color ===1||cells[E1A5[i+1]].color ===3) && cells[E1A5[i+2]].color ===0) {
                    cells[E1A5[i]].attack=true;
                    fight = 1;
                }
                if (cells[E1A5[i+2]].color ===2 && (cells[E1A5[i+1]].color ===1||cells[E1A5[i+1]].color ===3) && cells[E1A5[i]].color ===0) {
                    cells[E1A5[i+2]].attack=true;
                    fight = 1;
                }

                if (cells[H4D8[i]].color ===4){s = i+1; while((s<3)&&(cells[H4D8[s]].color===0)){s+=1;}
                    if ((cells[H4D8[s]].color===1||cells[H4D8[s]].color===3)&&cells[H4D8[s+1]].color===0) {fight =1; cells[H4D8[i]].attack=true;}}
                if (cells[H4D8[i+2]].color ===4){s = i+1; while((s>1)&&(cells[H4D8[s]].color===0)){s-=1;}
                    if ((cells[H4D8[s]].color===1||cells[H4D8[s]].color===3)&&cells[H4D8[s-1]].color===0) {fight = 1; cells[H4D8[i+2]].attack=true;}}

                    if (cells[E1A5[i]].color ===4){s = i+1; while((s<3)&&(cells[E1A5[s]].color===0)){s+=1;}
                        if ((cells[E1A5[s]].color===1||cells[E1A5[s]].color===3)&&cells[E1A5[s+1]].color===0) {fight =1; cells[E1A5[i]].attack=true;}}
                    if (cells[E1A5[i+2]].color ===4){s = i+1; while((s>1)&&(cells[E1A5[s]].color===0)){s-=1;}
                        if ((cells[E1A5[s]].color===1||cells[E1A5[s]].color===3)&&cells[E1A5[s-1]].color===0) {fight = 1; cells[E1A5[i+2]].attack=true;}}
                if(cells[H4D8[i]].color === 0 && (cells[H4D8[i+1]].color === 2||cells[H4D8[i+1]].color === 4)) cells[H4D8[i+1]].forward = true;
                if(cells[E1A5[i]].color === 0 && (cells[E1A5[i+1]].color === 2||cells[E1A5[i+1]].color === 4)) cells[E1A5[i+1]].forward = true;
                if(cells[H4D8[i+1]].color === 0 && cells[H4D8[i]].color === 4) cells[H4D8[i]].forward = true;
                if(cells[E1A5[i+1]].color === 0 && cells[E1A5[i]].color === 4) cells[E1A5[i]].forward = true;
            }
             if(cells[H4D8[3]].color === 0 && (cells[H4D8[4]].color === 2||cells[H4D8[4]].color === 4)) cells[H4D8[4]].forward = true;
             if(cells[E1A5[3]].color === 0 && (cells[E1A5[4]].color === 2||cells[E1A5[4]].color === 4)) cells[E1A5[4]].forward = true;
             if(cells[H4D8[4]].color === 4 && cells[H4D8[3]].color === 0) cells[H4D8[4]].forward = true;
             if(cells[E1A5[4]].color === 4 && cells[E1A5[3]].color === 0) cells[E1A5[4]].forward = true;



             if ((cells[H6F8[0]].color ===2||cells[H6F8[0]].color ===4) && (cells[H6F8[1]].color ===1||cells[H6F8[1]].color ===3) && cells[H6F8[2]].color ===0) {
                 cells[H6F8[0]].attack=true;
                 fight = 1;
             }
             if ((cells[H6F8[2]].color ===2||cells[H6F8[2]].color ===4) && (cells[H6F8[1]].color ===1||cells[H6F8[1]].color ===3) && cells[H6F8[0]].color ===0) {
                 cells[H6F8[2]].attack=true;
                 fight = 1;
             }
             if(cells[H6F8[0]].color === 0 && (cells[H6F8[1]].color === 2||cells[H6F8[1]].color === 4)) cells[H6F8[1]].forward = true;
             if(cells[H6F8[1]].color === 0 && (cells[H6F8[2]].color === 2||cells[H6F8[2]].color === 4)) cells[H6F8[2]].forward = true;
             if(cells[H6F8[1]].color === 0 && cells[H6F8[0]].color === 4) cells[H6F8[0]].forward = true;
             if(cells[H6F8[2]].color === 0 && cells[H6F8[1]].color === 4) cells[H6F8[1]].forward = true;
             if ((cells[C1A3[0]].color ===2||cells[C1A3[0]].color ===4) && cells[C1A3[1]].color ===1 && cells[C1A3[2]].color ===0) {
                 cells[C1A3[0]].attack=true;
                 fight = 1;
             }
             if ((cells[C1A3[2]].color ===2||cells[C1A3[2]].color ===4) && (cells[C1A3[1]].color ===1||cells[C1A3[1]].color ===3) && cells[C1A3[0]].color ===0) {
                 cells[C1A3[2]].attack=true;
                 fight = 1;
             }
             if(cells[C1A3[0]].color === 0 && (cells[C1A3[1]].color === 2||cells[C1A3[1]].color === 4)) cells[C1A3[1]].forward = true;
             if(cells[C1A3[1]].color === 0 && (cells[C1A3[2]].color === 2||cells[C1A3[2]].color === 4)) cells[C1A3[2]].forward = true;
             if(cells[C1A3[1]].color === 0 && cells[C1A3[0]].color === 4) cells[C1A3[0]].forward = true;
             if(cells[C1A3[2]].color === 0 && cells[C1A3[1]].color === 4) cells[C1A3[1]].forward = true;
         }
         else{
             if((cells[A7B8[0]].color === 3||cells[A7B8[0]].color === 1) && cells[A7B8[1]].color === 0) cells[A7B8[0]].forward = true;
             if((cells[G1H2[0]].color === 3||cells[G1H2[0]].color === 1) && cells[G1H2[1]].color === 0) cells[G1H2[0]].forward = true;
             if(cells[A7B8[0]].color === 0 && cells[A7B8[1]].color === 3) cells[A7B8[1]].forward = true;
             if(cells[G1H2[0]].color === 0 && cells[G1H2[1]].color === 3) cells[G1H2[1]].forward = true;
             for (let i = 0; i<6; ++i) {
                 if (cells[A1H8[i]].color ===1 && (cells[A1H8[i+1]].color ===2||cells[A1H8[i+1]].color ===4) && cells[A1H8[i+2]].color ===0) {
                     cells[A1H8[i]].attack=true;
                     fight = 1;
                 }
                 if (cells[A1H8[i+2]].color ===1 && (cells[A1H8[i+1]].color ===2||cells[A1H8[i+1]].color ===4) && cells[A1H8[i]].color ===0) {
                     cells[A1H8[i+2]].attack=true;
                     fight = 1;
                 }
                 if (cells[A1H8[i]].color ===3){s = i+1; while((s<6)&&(cells[A1H8[s]].color===0)){s+=1;}
                     if ((cells[A1H8[s]].color===2||cells[A1H8[s]].color===4)&&cells[A1H8[s+1]].color===0) {fight =1; cells[A1H8[i]].attack=true;}}
                 if (cells[A1H8[i+2]].color ===3){s = i+1; while((s>1)&&(cells[A1H8[s]].color===0)){s-=1;}
                     if ((cells[A1H8[s]].color===2||cells[A1H8[s]].color===4)&&cells[A1H8[s-1]].color===0) {fight = 1; cells[A1H8[i+2]].attack=true;}}
                 if((cells[A1H8[i]].color === 1||cells[A1H8[i]].color === 3) && cells[A1H8[i+1]].color === 0) cells[A1H8[i]].forward = true;
                 if(cells[A1H8[i+1]].color === 3 && cells[A1H8[i]].color === 0) cells[A1H8[i+1]].forward = true;
             }
             if((cells[A1H8[6]].color === 1 || cells[A1H8[6]].color === 3) && cells[A1H8[7]].color === 0) cells[A1H8[6]].forward = true;
             if(cells[A1H8[7]].color === 3 && cells[A1H8[6]].color === 0) cells[A1H8[7]].forward = true;

             for (let i = 0; i<4; ++i){
                 if (cells[A3F8[i]].color ===1 && (cells[A3F8[i+1]].color ===2||cells[A3F8[i+1]].color ===4) && cells[A3F8[i+2]].color ===0) {
                     cells[A3F8[i]].attack=true;
                     fight = 1;
                 }
                 if (cells[A3F8[i+2]].color ===1 && (cells[A3F8[i+1]].color ===2||cells[A3F8[i+1]].color ===4) && cells[A3F8[i]].color ===0) {
                     cells[A3F8[i+2]].attack=true;
                     fight = 1;
                 }
                 if (cells[C1H6[i]].color ===1 && (cells[C1H6[i+1]].color ===2||cells[C1H6[i+1]].color ===4) && cells[C1H6[i+2]].color ===0) {
                     cells[C1H6[i]].attack=true;
                     fight = 1;
                 }
                 if (cells[C1H6[i+2]].color ===1 && (cells[C1H6[i+1]].color ===2||cells[C1H6[i+1]].color ===4) && cells[C1H6[i]].color ===0) {
                     cells[C1H6[i+2]].attack=true;
                     fight = 1;
                 }
                 if (cells[A3F8[i]].color ===3){s = i+1; while((s<4)&&(cells[A3F8[s]].color===0)){s+=1;}
                     if ((cells[A3F8[s]].color===2||cells[A3F8[s]].color===4)&&cells[A3F8[s+1]].color===0) {fight =1; cells[A3F8[i]].attack=true;}}
                 if (cells[A3F8[i+2]].color ===3){s = i+1; while((s>1)&&(cells[A3F8[s]].color===0)){s-=1;}
                     if ((cells[A3F8[s]].color===2||cells[A3F8[s]].color===4)&&cells[A3F8[s-1]].color===0) {fight = 1; cells[A3F8[i+2]].attack=true;}}

                 if (cells[C1H6[i]].color ===3){s = i+1; while((s<4)&&(cells[C1H6[s]].color===0)){s+=1;}
                     if ((cells[C1H6[s]].color===2||cells[C1H6[s]].color===4)&&cells[C1H6[s+1]].color===0) {fight =1; cells[C1H6[i]].attack=true;}}
                 if (cells[C1H6[i+2]].color ===3){s = i+1; while((s>1)&&(cells[C1H6[s]].color===0)){s-=1;}
                     if ((cells[C1H6[s]].color===2||cells[C1H6[s]].color===4)&&cells[C1H6[s-1]].color===0) {fight = 1; cells[C1H6[i+2]].attack=true;}}
                 if((cells[A3F8[i]].color === 1||cells[A3F8[i]].color === 3) && cells[A3F8[i+1]].color === 0) cells[A3F8[i]].forward = true;
                 if((cells[C1H6[i]].color === 1||cells[C1H6[i]].color === 3) && cells[C1H6[i+1]].color === 0) cells[C1H6[i]].forward = true;
                 if(cells[A3F8[i+1]].color === 3 && cells[A3F8[i]].color === 0) cells[A3F8[i+1]].forward = true;
                 if(cells[C1H6[i+1]].color === 3 && cells[C1H6[i]].color === 0) cells[C1H6[i+1]].forward = true;
             }
             if((cells[A3F8[4]].color === 1||cells[A3F8[4]].color === 3) && cells[A3F8[5]].color === 0) cells[A3F8[4]].forward = true;
             if((cells[C1H6[4]].color === 1||cells[C1H6[4]].color === 3)&& cells[C1H6[5]].color === 0) cells[C1H6[4]].forward = true;
             if(cells[A3F8[5]].color === 3 && cells[A3F8[4]].color === 0) cells[A3F8[5]].forward = true;
             if(cells[C1H6[5]].color === 3 && cells[C1H6[4]].color === 0) cells[C1H6[5]].forward = true;

             for (let i = 0; i<2; ++i){
                 if (cells[A5D8[i]].color ===1 && (cells[A5D8[i+1]].color ===2||cells[A5D8[i+1]].color ===4) && cells[A5D8[i+2]].color ===0) {
                     cells[A5D8[i]].attack=true;
                     fight = 1;
                 }
                 if (cells[A5D8[i+2]].color ===1 && (cells[A5D8[i+1]].color ===2||cells[A5D8[i+1]].color ===4) && cells[A5D8[i]].color ===0) {
                     cells[A5D8[i+2]].attack=true;
                     fight = 1;
                 }
                 if (cells[E1H4[i]].color ===1 && (cells[E1H4[i+1]].color ===2||cells[E1H4[i+1]].color ===4) && cells[E1H4[i+2]].color ===0) {
                     cells[E1H4[i]].attack=true;
                     fight = 1;
                 }
                 if (cells[E1H4[i+2]].color ===1 && (cells[E1H4[i+1]].color ===2||cells[E1H4[i+1]].color ===4) && cells[E1H4[i]].color ===0) {
                     cells[E1H4[i+2]].attack=true;
                     fight = 1;
                 }
                 if (cells[A5D8[i]].color ===3){s = i+1; while((s<2)&&(cells[A5D8[s]].color===0)){s+=1;}
                     if ((cells[A5D8[s]].color===2||cells[A5D8[s]].color===4)&&cells[A5D8[s+1]].color===0) {fight =1; cells[A5D8[i]].attack=true;}}
                 if (cells[A5D8[i+2]].color ===3){s = i+1; while((s>1)&&(cells[A5D8[s]].color===0)){s-=1;}
                     if ((cells[A5D8[s]].color===2||cells[A5D8[s]].color===4)&&cells[A5D8[s-1]].color===0) {fight = 1; cells[A5D8[i+2]].attack=true;}}

                 if (cells[E1H4[i]].color ===3){s = i+1; while((s<2)&&(cells[E1H4[s]].color===0)){s+=1;}
                     if ((cells[E1H4[s]].color===2||cells[E1H4[s]].color===4)&&cells[E1H4[s+1]].color===0) {fight =1; cells[E1H4[i]].attack=true;}}
                 if (cells[E1H4[i+2]].color ===3){s = i+1; while((s>1)&&(cells[E1H4[s]].color===0)){s-=1;}
                     if ((cells[E1H4[s]].color===2||cells[E1H4[s]].color===4)&&cells[E1H4[s-1]].color===0) {fight = 1; cells[E1H4[i+2]].attack=true;}}
                 if((cells[A5D8[i]].color === 1||cells[A5D8[i]].color === 3) && cells[A5D8[i+1]].color === 0) cells[A5D8[i]].forward = true;
                 if((cells[E1H4[i]].color === 1||cells[E1H4[i]].color === 3) && cells[E1H4[i+1]].color === 0) cells[E1H4[i]].forward = true;
                 if(cells[A5D8[i+1]].color === 3 && cells[A5D8[i]].color === 0) cells[A5D8[i+1]].forward = true;
                 if(cells[E1H4[i+1]].color === 3 && cells[E1H4[i]].color === 0) cells[E1H4[i+1]].forward = true;
             }
             if((cells[A5D8[2]].color === 1||cells[A5D8[2]].color === 3) && cells[A5D8[3]].color === 0) cells[A5D8[2]].forward = true;
             if((cells[E1H4[2]].color === 1||cells[E1H4[2]].color === 3) && cells[E1H4[3]].color === 0) cells[E1H4[2]].forward = true;
             if(cells[E1H4[3]].color === 3 && cells[E1H4[2]].color === 0) cells[E1H4[3]].forward = true;
             if(cells[A5D8[3]].color === 3 && cells[A5D8[2]].color === 0) cells[A5D8[3]].forward = true;

             for (let i = 0; i<5; ++i) {
                 if (cells[H2B8[i]].color ===1 && (cells[H2B8[i+1]].color ===2||cells[H2B8[i+1]].color ===4) && cells[H2B8[i+2]].color ===0) {
                     cells[H2B8[i]].attack=true;
                     fight = 1;
                 }
                 if (cells[H2B8[i+2]].color ===1 && (cells[H2B8[i+1]].color ===2||cells[H2B8[i+1]].color ===4) && cells[H2B8[i]].color ===0) {
                     cells[H2B8[i+2]].attack=true;
                     fight = 1;
                 }
                 if (cells[G1A7[i]].color ===1 && (cells[G1A7[i+1]].color ===2||cells[G1A7[i+1]].color ===4) && cells[G1A7[i+2]].color ===0) {
                     cells[G1A7[i]].attack=true;
                     fight = 1;
                 }
                 if (cells[G1A7[i+2]].color ===1 && (cells[G1A7[i+1]].color ===2||cells[G1A7[i+1]].color ===4) && cells[G1A7[i]].color ===0) {
                     cells[G1A7[i+2]].attack=true;
                     fight = 1;
                 }
                 if (cells[H2B8[i]].color ===3){s = i+1; while((s<5)&&(cells[H2B8[s]].color===0)){s+=1;}
                     if ((cells[H2B8[s]].color===2||cells[H2B8[s]].color===4)&&cells[H2B8[s+1]].color===0) {fight =1; cells[H2B8[i]].attack=true;}}
                 if (cells[H2B8[i+2]].color ===3){s = i+1; while((s>1)&&(cells[H2B8[s]].color===0)){s-=1;}
                     if ((cells[H2B8[s]].color===2||cells[H2B8[s]].color===4)&&cells[H2B8[s-1]].color===0) {fight = 1; cells[H2B8[i+2]].attack=true;}}

                 if (cells[G1A7[i]].color ===3){s = i+1; while((s<5)&&(cells[G1A7[s]].color===0)){s+=1;}
                     if ((cells[G1A7[s]].color===2||cells[G1A7[s]].color===4)&&cells[G1A7[s+1]].color===0) {fight =1; cells[G1A7[i]].attack=true;}}
                 if (cells[G1A7[i+2]].color ===3){s = i+1; while((s>1)&&(cells[G1A7[s]].color===0)){s-=1;}
                     if ((cells[G1A7[s]].color===2||cells[G1A7[s]].color===4)&&cells[G1A7[s-1]].color===0) {fight = 1; cells[G1A7[i+2]].attack=true;}}
                 if((cells[H2B8[i]].color === 1||cells[H2B8[i]].color === 3) && cells[H2B8[i+1]].color === 0) cells[H2B8[i]].forward = true;
                 if((cells[G1A7[i]].color === 1||cells[G1A7[i]].color === 3) && cells[G1A7[i+1]].color === 0) cells[G1A7[i]].forward = true;
                 if(cells[H2B8[i+1]].color === 3 && cells[H2B8[i]].color === 0) cells[H2B8[i+1]].forward = true;
                 if(cells[G1A7[i+1]].color === 3 && cells[G1A7[i]].color === 0) cells[G1A7[i+1]].forward = true;
             }
             if((cells[H2B8[5]].color === 1||cells[H2B8[5]].color === 3) && cells[H2B8[6]].color === 0) cells[H2B8[5]].forward = true;
             if((cells[G1A7[5]].color === 1||cells[G1A7[5]].color === 3) && cells[G1A7[6]].color === 0) cells[G1A7[5]].forward = true;
             if(cells[H2B8[6]].color === 3 && cells[H2B8[5]].color === 0) cells[H2B8[6]].forward = true;
             if(cells[G1A7[6]].color === 3 && cells[G1A7[5]].color === 0) cells[G1A7[6]].forward = true;

             for (let i = 0; i<3; ++i){
                 if (cells[H4D8[i]].color ===1 && (cells[H4D8[i+1]].color ===2||cells[H4D8[i+1]].color ===4) && cells[H4D8[i+2]].color ===0) {
                     cells[H4D8[i]].attack=true;
                     fight = 1;
                 }
                 if (cells[H4D8[i+2]].color ===1 && (cells[H4D8[i+1]].color ===2||cells[H4D8[i+1]].color ===4) && cells[H4D8[i]].color ===0) {
                     cells[H4D8[i+2]].attack=true;
                     fight = 1;
                 }
                 if (cells[E1A5[i]].color ===1 && (cells[E1A5[i+1]].color ===2||cells[E1A5[i+1]].color ===4) && cells[E1A5[i+2]].color ===0) {
                     cells[E1A5[i]].attack=true;
                     fight = 1;
                 }
                 if (cells[E1A5[i+2]].color ===1 && (cells[E1A5[i+1]].color ===2||cells[E1A5[i+1]].color ===4) && cells[E1A5[i]].color ===0) {
                     cells[E1A5[i+2]].attack=true;
                     fight = 1;
                 }
                 if (cells[H4D8[i]].color ===3){s = i+1; while((s<3)&&(cells[H4D8[s]].color===0)){s+=1;}
                     if ((cells[H4D8[s]].color===2||cells[H4D8[s]].color===4)&&cells[H4D8[s+1]].color===0) {fight =1; cells[H4D8[i]].attack=true;}}
                 if (cells[H4D8[i+2]].color ===3){s = i+1; while((s>1)&&(cells[H4D8[s]].color===0)){s-=1;}
                     if ((cells[H4D8[s]].color===2||cells[H4D8[s]].color===4)&&cells[H4D8[s-1]].color===0) {fight = 1; cells[H4D8[i+2]].attack=true;}}

                 if (cells[E1A5[i]].color ===3){s = i+1; while((s<3)&&(cells[E1A5[s]].color===0)){s+=1;}
                     if ((cells[E1A5[s]].color===2||cells[E1A5[s]].color===4)&&cells[E1A5[s+1]].color===0) {fight =1; cells[E1A5[i]].attack=true;}}
                 if (cells[E1A5[i+2]].color ===3){s = i+1; while((s>1)&&(cells[E1A5[s]].color===0)){s-=1;}
                     if ((cells[E1A5[s]].color===2||cells[E1A5[s]].color===4)&&cells[E1A5[s-1]].color===0) {fight = 1; cells[E1A5[i+2]].attack=true;}}
                 if((cells[H4D8[i]].color === 1||cells[H4D8[i]].color === 3) && cells[H4D8[i+1]].color === 0) cells[H4D8[i]].forward = true;
                 if((cells[E1A5[i]].color === 1||cells[E1A5[i]].color === 3) && cells[E1A5[i+1]].color === 0) cells[E1A5[i]].forward = true;
                 if(cells[H4D8[i+1]].color === 3 && cells[H4D8[i]].color === 0) cells[H4D8[i+1]].forward = true;
                 if(cells[E1A5[i+1]].color === 3 && cells[E1A5[i]].color === 0) cells[E1A5[i+1]].forward = true;
             }
             if((cells[H4D8[3]].color === 1||cells[H4D8[3]].color === 3) && cells[H4D8[4]].color === 0) cells[H4D8[3]].forward = true;
             if((cells[E1A5[3]].color === 1||cells[E1A5[3]].color === 3) && cells[E1A5[4]].color === 0) cells[E1A5[3]].forward = true;
             if(cells[H4D8[4]].color === 3 && cells[H4D8[3]].color === 0) cells[H4D8[4]].forward = true;
             if(cells[E1A5[4]].color === 3 && cells[E1A5[3]].color === 0) cells[E1A5[4]].forward = true;

             if ((cells[H6F8[0]].color ===1||cells[H6F8[0]].color ===3) && (cells[H6F8[1]].color ===2||cells[H6F8[1]].color ===4) && cells[H6F8[2]].color ===0) {
                 cells[H6F8[0]].attack=true;
                 fight = 1;
             }
             if ((cells[H6F8[2]].color ===1||cells[H6F8[2]].color ===3) && (cells[H6F8[1]].color ===2||cells[H6F8[1]].color ===4) && cells[H6F8[0]].color ===0) {
                 cells[H6F8[2]].attack=true;
                 fight = 1;
             }
             if((cells[H6F8[0]].color === 1||cells[H6F8[0]].color === 3) && cells[H6F8[1]].color === 0) cells[H6F8[0]].forward = true;
             if((cells[H6F8[1]].color === 1||cells[H6F8[1]].color === 3) && cells[H6F8[2]].color === 0) cells[H6F8[1]].forward = true;
             if(cells[H6F8[1]].color === 3 && cells[H6F8[0]].color === 0) cells[H6F8[1]].forward = true;
             if(cells[H6F8[2]].color === 3 && cells[H6F8[1]].color === 0) cells[H6F8[2]].forward = true;

             if ((cells[C1A3[0]].color ===1||cells[C1A3[0]].color ===3) && (cells[C1A3[1]].color ===2||cells[C1A3[1]].color ===4) && cells[C1A3[2]].color ===0) {
                 cells[C1A3[0]].attack=true;
                 fight = 1;
             }
             if ((cells[C1A3[2]].color ===1||cells[C1A3[2]].color ===3) && (cells[C1A3[1]].color ===2||cells[C1A3[1]].color ===4) && cells[C1A3[0]].color ===0) {
                 cells[C1A3[2]].attack=true;
                 fight = 1;
             }
             if((cells[C1A3[0]].color === 1||cells[C1A3[0]].color === 3) && cells[C1A3[1]].color === 0) cells[C1A3[0]].forward = true;
             if((cells[C1A3[1]].color === 1||cells[C1A3[1]].color === 3) && cells[C1A3[2]].color === 0) cells[C1A3[1]].forward = true;
             if(cells[C1A3[1]].color === 3 && cells[C1A3[0]].color === 0) cells[C1A3[1]].forward = true;
             if(cells[C1A3[2]].color === 3 && cells[C1A3[1]].color === 0) cells[C1A3[2]].forward = true;
         }
         not_scan = false;
   }



function fighting(k){

    let OK = false;
    let k2;
    let n,n1;

    if (cells[last_k].A1H8 && cells[k].A1H8) {
        for (let i = 0; i < 8; ++i){
            if (A1H8[i] === last_k)
            n = i;
            if (A1H8[i] === k)
                n1 = i;
        }
        if(cells[last_k].color>2){
            if(n1>n) {
                k2 = A1H8[n1-1];
                let i = n+1;
                while(cells[A1H8[i]].color === 0&&i<n1-1) ++i;
                if (i === n1-1) OK = true;
            }
            if(n1<n) {
                k2 = A1H8[n1+1];
                let i = n-1;
                while(cells[A1H8[i]].color === 0&&i>n1+1) --i;
                if (i === n1+1) OK = true;
            }
        }
        if (A1H8[n + 2] === k) {
            OK = true;
            k2 = A1H8[n + 1];
        }
        if (A1H8[n - 2] === k) {
            OK = true;
            k2 = A1H8[n - 1];
        }
    }
    if (cells[last_k].A3F8 && cells[k].A3F8) {
        for (let i = 0; i < 6; ++i) {
            if (A3F8[i] === last_k)
            n = i;
            if (A3F8[i] === k)
                n1 = i;

        }
        if(cells[last_k].color>2){
            if(n1>n) {
                k2 = A3F8[n1-1];
                let i = n+1;
                while(cells[A3F8[i]].color === 0&&i<n1-1) ++i;
                if (i === n1-1) OK = true;
            }
            if(n1<n) {
                k2 = A3F8[n1+1];
                let i = n-1;
                while(cells[A3F8[i]].color === 0&&i>n1+1) --i;
                if (i === n1+1) OK = true;
            }
        }
        if (A3F8[n + 2] === k) {
            OK = true;
            k2 = A3F8[n + 1];
        }
        if (A3F8[n - 2] === k) {
            OK = true;
            k2 = A3F8[n - 1];
        }
    }
    if (cells[last_k].C1H6 && cells[k].C1H6) {
        for (let i = 0; i < 6; ++i){
            if (C1H6[i] === last_k)
            n = i;
            if (C1H6[i] === k)
                n1 = i;
        }
        if(cells[last_k].color>2){
            if(n1>n) {
                k2 = C1H6[n1-1];
                let i = n+1;
                while(cells[C1H6[i]].color === 0&&i<n1-1) ++i;
                if (i === n1-1) OK = true;
            }
            if(n1<n) {
                k2 = C1H6[n1+1];
                let i = n-1;
                while(cells[C1H6[i]].color === 0&&i>n1+1) --i;
                if (i === n1+1) OK = true;
            }
        }
        if (C1H6[n + 2] === k) {
            OK = true;
            k2 = C1H6[n + 1];
        }
        if (C1H6[n - 2] === k) {
            OK = true;
            k2 = C1H6[n - 1];
        }
    }
    if (cells[last_k].A5D8 && cells[k].A5D8) {
        for (let i = 0; i < 4; ++i){
            if (A5D8[i] === last_k)
            n = i;
            if (A5D8[i] === k)
                n1 = i;
        }
        if(cells[last_k].color>2){
            if(n1>n) {
                k2 = A5D8[n1-1];
                let i = n+1;
                while(cells[A5D8[i]].color === 0&&i<n1-1) ++i;
                if (i === n1-1) OK = true;
            }
            if(n1<n) {
                k2 = n1+1;
                k2 = A5D8[n1+1];
                let i = n-1;
                while(cells[A5D8[i]].color === 0&&i>n1+1) --i;
                if (i === n1+1) OK = true;

            }
        }
        if (A5D8[n + 2] === k) {
            OK = true;
            k2 = A5D8[n + 1];
        }
        if (A5D8[n - 2] === k) {
            OK = true;
            k2 = A5D8[n - 1];
        }
    }
    if (cells[last_k].E1H4 && cells[k].E1H4) {
        for (let i = 0; i < 4; ++i) {
            if (E1H4[i] === last_k)
            n = i;
            if (E1H4[i] === k)
                n1 = i;
        }
        if(cells[last_k].color>2){
            if(n1>n) {
                k2 = E1H4[n1-1];
                let i = n+1;
                while(cells[E1H4[i]].color === 0&&i<n1-1) ++i;
                if (i === n1-1) OK = true;
            }
            if(n1<n) {
                k2 = E1H4[n1+1];
                let i = n-1;
                while(cells[E1H4[i]].color === 0&&i>n1+1) --i;
                if (i === n1+1) OK = true;

            }

        }
        if (E1H4[n + 2] === k) {
            OK = true;
            k2 = E1H4[n + 1];
        }
        if (E1H4[n - 2] === k) {
            OK = true;
            k2 = E1H4[n - 1];
        }
    }
    if (cells[last_k].H2B8 && cells[k].H2B8) {
        for (let i = 0; i < 7; ++i){
            if (H2B8[i] === last_k)
            n = i;
            if (H2B8[i] === k)
                n1 = i;
        }
        if(cells[last_k].color>2){
            if(n1>n) {
                k2 = H2B8[n1-1];
                let i = n+1;
                while(cells[H2B8[i]].color === 0&&i<n1-1) ++i;
                if (i === n1-1) OK = true;

            }
            if(n1<n) {
                k2 = H2B8[n1+1];
                let i = n-1;
                while(cells[H2B8[i]].color === 0&&i>n1+1) --i;
                if (i === n1+1) OK = true;
            }
        }
        if (H2B8[n + 2] === k) {
            OK = true;
            k2 = H2B8[n + 1];
        }
        if (H2B8[n - 2] === k) {
            OK = true;
            k2 = H2B8[n - 1];
        }
    }
    if (cells[last_k].G1A7 && cells[k].G1A7) {
        for (let i = 0; i < 7; ++i) {
            if (G1A7[i] === last_k)
            n = i;
            if (G1A7[i] === k)
                n1 = i;

        }
        if(cells[last_k].color>2){
            if(n1>n) {
                k2 = G1A7[n1-1];
                let i = n+1;
                while(cells[G1A7[i]].color === 0&&i<n1-1) ++i;
                if (i === n1-1) OK = true;
            }
            if(n1<n) {
                k2 = G1A7[n1+1];
                let i = n-1;
                while(cells[G1A7[i]].color === 0&&i>n1+1) --i;
                if (i === n1+1) OK = true;
            }
        }
        if (G1A7[n + 2] === k) {
            OK = true;
            k2 = G1A7[n + 1];
        }
        if (G1A7[n - 2] === k) {
            OK = true;
            k2 = G1A7[n - 1];
        }
    }
    if (cells[last_k].H4D8 && cells[k].H4D8) {
        for (let i = 0; i < 5; ++i){
            if (H4D8[i] === last_k)
            n = i;
            if (H4D8[i] === k)
                n1 = i;

        }
        if(cells[last_k].color>2){
            if(n1>n) {
                k2 = H4D8[n1-1];
                let i = n+1;
                while(cells[H4D8[i]].color === 0&&i<n1-1) ++i;
                if (i === n1-1) OK = true;
            }
            if(n1<n) {
                k2 = H4D8[n1+1];
                let i = n-1;
                while(cells[H4D8[i]].color === 0&&i>n1+1) --i;
                if (i === n1+1) OK = true;
            }
        }
        if (H4D8[n + 2] === k) {
            OK = true;
            k2 = H4D8[n + 1];
        }
        if (H4D8[n - 2] === k) {
            OK = true;
            k2 = H4D8[n - 1];
        }
    }
    if (cells[last_k].E1A5 && cells[k].E1A5) {
        for (let i = 0; i < 5; ++i) {
            if (E1A5[i] === last_k)
            n = i;
            if (E1A5[i] === k)
                n1 = i;

        }
        if(cells[last_k].color>2){
            if(n1>n) {
                k2 = E1A5[n1-1];
                let i = n+1;
                while(cells[E1A5[i]].color === 0&&i<n1-1) ++i;
                if (i === n1-1) OK = true;
            }
            if(n1<n) {
                k2 = E1A5[n1+1];
                let i = n-1;
                while(cells[E1A5[i]].color === 0&&i>n1+1) --i;
                if (i === n1+1) OK = true;
            }
        }
        if (E1A5[n + 2] === k) {
            OK = true;
            k2 = E1A5[n + 1];
        }
        if (E1A5[n - 2] === k) {
            OK = true;
            k2 = E1A5[n - 1];
        }
    }
    if (cells[last_k].H6F8 && cells[k].H6F8) {
        for (let i = 0; i < 3; ++i){
            if (H6F8[i] === last_k)
            n = i;
            if (H6F8[i] === k)
                n1 = i;

        }
        if(cells[last_k].color>2){
            if(n1>n) {
                k2 = H6F8[n1-1];
                let i = n+1;
                while(cells[H6F8[i]].color === 0&&i<n1-1) ++i;
                if (i === n1-1) OK = true;
            }
            if(n1<n) {
                k2 = H6F8[n1+1];
                let i = n-1;
                while(cells[H6F8[i]].color === 0&&i>n1+1) --i;
                if (i === n1+1) OK = true;
            }
        }
        if (H6F8[n + 2] === k) {
            OK = true;
            k2 = H6F8[n + 1];
        }
        if (H6F8[n - 2] === k) {
            OK = true;
            k2 = H6F8[n - 1];
        }
    }
    if (cells[last_k].C1A3 && cells[k].C1A3) {
        for (let i = 0; i < 3; ++i) {
            if (C1A3[i] === last_k)
            n = i;
            if (C1A3[i] === k)
                n1 = i;

        }
        if(cells[last_k].color>2){
            if(n1>n) {
                k2 = C1A3[n1-1];
                let i = n+1;
                while(cells[C1A3[i]].color === 0&&i<n1-1) ++i;
                if (i === n1-1) OK = true;
            }
            if(n1<n) {
                k2 = C1A3[n1+1];
                let i = n-1;
                while(cells[C1A3[i]].color === 0&&i>n1+1) --i;
                if (i === n1+1) OK = true;
            }
        }
        if (C1A3[n + 2] === k) {
            OK = true;
            k2 = C1A3[n + 1];
        }
        if (C1A3[n - 2] === k) {
            OK = true;
            k2 = C1A3[n - 1];
        }
    }


        if (turn > 0) {
            if(OK&&cells[k].color ===0 &&(cells[k2].color === 2||cells[k2].color===4)) {
            document.getElementById(String(last_k)).innerHTML = "";
            if (k === 31 || k === 30 || k === 29 || k === 28||cells[last_k].color ===3) {
                cells[k].color = 3;
                cells[last_k].color = 0;
                document.getElementById(String(k)).innerHTML = "<svg> <circle r=\"25\" cx=\"25\" cy=\"25\"  fill=\"red\"/> </svg>"
            }
            else {
                cells[k].color = 1;
                cells[last_k].color = 0;
                document.getElementById(String(k)).innerHTML = "<svg> <circle r=\"25\" cx=\"25\" cy=\"25\" /> </svg>";
            }
            white -= 1;
            if (white === 0) {
                alert("Black win!");
                $.post('/blackWin');
                window.location.reload();
            }
            cells[k2].dead = true;
            last_k = k;
            scanning();
            if (cells[last_k].attack === false) {
                turn *= -1;
                first_click = true;
                not_scan = true;
                for (let r = 0; r < 32; ++r) {
                    if (cells[r].dead) {
                        document.getElementById(String(r)).innerHTML = "";
                        cells[r].dead = false;
                    }
                }
            }

        }
        else alert('You have to click on the blank cell next to the checker you want to beat. May be you have to beat again.')
        }

        else {if(OK&&cells[k].color ===0 &&(cells[k2].color === 1||cells[k2].color===3)) {

            document.getElementById(String(last_k)).innerHTML = "";

            if (k === 3 || k === 2 || k === 1 || k === 0||cells[last_k].color ===4) {
                cells[k].color = 4;
                cells[last_k].color = 0;
                document.getElementById(String(k)).innerHTML = "<svg> <circle r=\"25\" cx=\"25\" cy=\"25\"  fill=\"blue\"/> </svg>";
            }
            else {
                cells[k].color = 2;
                cells[last_k].color = 0;
                document.getElementById(String(k)).innerHTML = "<svg> <circle r=\"25\" cx=\"25\" cy=\"25\"  fill=\"white\"/> </svg>";
            }
            black -= 1;
            if (black === 0) {
                alert("White win!");
                $.post('/whiteWin');
                window.location.reload();

            }
            cells[k2].dead = true;
            last_k = k;
            scanning();
            if (cells[last_k].attack === false) {
                turn *= -1;
                first_click = true;
                not_scan = true;
                for (let r = 0; r < 32; ++r) {
                    if (cells[r].dead) {
                        document.getElementById(String(r)).innerHTML = "";
                        cells[r].dead = false;
                    }
                }
            }
        }
        else alert('You have to click on the blank cell next to the checker you want to beat. May be you have to beat again.')
        }


     }

function forward(k){
    let OK = false;
    let n,n1;


        if (cells[last_k].A7B8 && cells[k].A7B8) {
            if ((cells[last_k].color === 1||cells[last_k].color === 3||cells[last_k].color === 4 )&& A7B8[1] === k || (cells[last_k].color === 2||cells[last_k].color === 3||cells[last_k].color === 4)&& A7B8[0] === k) OK = true;
        }
        if (cells[last_k].G1H2 && cells[k].G1H2) {
            if ((cells[last_k].color === 1||cells[last_k].color === 3||cells[last_k].color === 4) && G1H2[1] === k || (cells[last_k].color === 2||cells[last_k].color === 3||cells[last_k].color === 4) && G1H2[0] === k) OK = true;

        }
        if (cells[last_k].A1H8 && cells[k].A1H8) {
            for (let i = 0; i < 8; ++i) {if (A1H8[i] === last_k)
                n = i; if (A1H8[i] === k) n1 = i;

            }
            if (cells[last_k].color === 1 && A1H8[n + 1] === k || cells[last_k].color === 2 && A1H8[n - 1] === k) OK = true;
            if (cells[last_k].color>2){
                if(n1>n) {
                    let i = n+1;
                    while(cells[A1H8[i]].color === 0&&i<n1) ++i;
                    if (i === n1) OK = true;
                }
                    if(n1<n) {
                        let i = n-1;
                        while(cells[A1H8[i]].color === 0&&i>n1) --i;
                        if (i === n1) OK = true;
                }

            }

        }
        if (cells[last_k].A3F8 && cells[k].A3F8) {
            for (let i = 0; i < 6; ++i) {if (A3F8[i] === last_k)
                n = i; if (A3F8[i] === k) n1=i;

            }
            if (cells[last_k].color === 1 && A3F8[n + 1] === k || cells[last_k].color === 2 && A3F8[n - 1] === k) OK = true;
            if (cells[last_k].color>2){
                if(n1>n) {
                    let i = n+1;
                    while(cells[A3F8[i]].color === 0&&i<n1) ++i;
                    if (i === n1) OK = true;
                }
                if(n1<n) {
                    let i = n-1;
                    while(cells[A3F8[i]].color === 0&&i>n1) --i;
                    if (i === n1) OK = true;
                }
            }
        }
        if (cells[last_k].C1H6 && cells[k].C1H6) {
            for (let i = 0; i < 6; ++i) {if (C1H6[i] === last_k)
                n = i;
                if (C1H6[i] === k) n1=i;
            }
            if (cells[last_k].color === 1 && C1H6[n + 1] === k || cells[last_k].color === 2 && C1H6[n - 1] === k) OK = true;
            if (cells[last_k].color>2){
                if(n1>n) {
                    let i = n+1;
                    while(cells[C1H6[i]].color === 0&&i<n1) ++i;
                    if (i === n1) OK = true;
                }
                if(n1<n) {
                    let i = n-1;
                    while(cells[C1H6[i]].color === 0&&i>n1) --i;
                    if (i === n1) OK = true;
                }
            }
        }
        if (cells[last_k].A5D8 && cells[k].A5D8) {
            for (let i = 0; i < 4; ++i) {if (A5D8[i] === last_k)
                n = i;
                if (A5D8[i] === k) n1=i
            }
            if (cells[last_k].color === 1 && A5D8[n + 1] === k || cells[last_k].color === 2 && A5D8[n - 1] === k) OK = true;
            if (cells[last_k].color>2){
                if(n1>n) {
                    let i = n+1;
                    while(cells[A5D8[i]].color === 0&&i<n1) ++i;
                    if (i === n1) OK = true;
                }
                if(n1<n) {
                    let i = n-1;
                    while(cells[A5D8[i]].color === 0&&i>n1) --i;
                    if (i === n1) OK = true;
                }
            }
        }
        if (cells[last_k].E1H4 && cells[k].E1H4) {
            for (let i = 0; i < 4; ++i){ if (E1H4[i] === last_k)
                n = i;
                if (E1H4[i] === k) n1=i;
            }
            if (cells[last_k].color === 1 && E1H4[n + 1] === k || cells[last_k].color === 2 && E1H4[n - 1] === k) OK = true;
            if (cells[last_k].color>2){
                if(n1>n) {
                    let i = n+1;
                    while(cells[E1H4[i]].color === 0&&i<n1) ++i;
                    if (i === n1) OK = true;
                }
                if(n1<n) {
                    let i = n-1;
                    while(cells[E1H4[i]].color === 0&&i>n1) --i;
                    if (i === n1) OK = true;
                }
            }
        }
        if (cells[last_k].H2B8 && cells[k].H2B8) {
            for (let i = 0; i < 7; ++i) {if (H2B8[i] === last_k)
                n = i;
                if (H2B8[i] === k) n1 = i;
            }
            if (cells[last_k].color === 1 && H2B8[n + 1] === k || cells[last_k].color === 2 && H2B8[n - 1] === k) OK = true;
            if (cells[last_k].color>2){
                if(n1>n) {
                    let i = n+1;
                    while(cells[H2B8[i]].color === 0&&i<n1) ++i;
                    if (i === n1) OK = true;
                }
                if(n1<n) {
                    let i = n-1;
                    while(cells[H2B8[i]].color === 0&&i>n1) --i;
                    if (i === n1) OK = true;
                }
            }
        }
        if (cells[last_k].G1A7 && cells[k].G1A7) {
            for (let i = 0; i < 7; ++i) {if (G1A7[i] === last_k)
                n = i;
                if (G1A7[i] === k) n1=i;
            }
            if (cells[last_k].color === 1 && G1A7[n + 1] === k || cells[last_k].color === 2 && G1A7[n - 1] === k) OK = true;
            if (cells[last_k].color>2){
                if(n1>n) {
                    let i = n+1;
                    while(cells[G1A7[i]].color === 0&&i<n1) ++i;
                    if (i === n1) OK = true;
                }
                if(n1<n) {
                    let i = n-1;
                    while(cells[G1A7[i]].color === 0&&i>n1) --i;
                    if (i === n1) OK = true;
                }
            }
        }
        if (cells[last_k].H4D8 && cells[k].H4D8) {
            for (let i = 0; i < 5; ++i) {if (H4D8[i] === last_k)
                n = i;
                if (H4D8[i] === k) n1=i;

                    }
            if (cells[last_k].color === 1 && H4D8[n + 1] === k || cells[last_k].color === 2 && H4D8[n - 1] === k) OK = true;
            if (cells[last_k].color>2){
                if(n1>n) {
                    let i = n+1;
                    while(cells[H4D8[i]].color === 0&&i<n1) ++i;
                    if (i === n1) OK = true;
                }
                if(n1<n) {
                    let i = n-1;
                    while(cells[H4D8[i]].color === 0&&i>n1) --i;
                    if (i === n1) OK = true;
                }
            }
        }
        if (cells[last_k].E1A5 && cells[k].E1A5) {
            for (let i = 0; i < 5; ++i) {if (E1A5[i] === last_k)
                n = i;
                if (E1A5[i] === k) n1=i;
            }
            if (cells[last_k].color === 1 && E1A5[n + 1] === k || cells[last_k].color === 2 && E1A5[n - 1] === k) OK = true;
            if (cells[last_k].color>2){
                if(n1>n) {
                    let i = n+1;
                    while(cells[E1A5[i]].color === 0&&i<n1) ++i;
                    if (i === n1) OK = true;
                }
                if(n1<n) {
                    let i = n-1;
                    while(cells[E1A5[i]].color === 0&&i>n1) --i;
                    if (i === n1) OK = true;
                }
            }
        }
        if (cells[last_k].H6F8 && cells[k].H6F8) {
            for (let i = 0; i < 3; ++i) {if (H6F8[i] === last_k)
                n = i;
                if (H6F8[i] === k) n1=i;
                    }
            if (cells[last_k].color === 1 && H6F8[n + 1] === k || cells[last_k].color === 2 && H6F8[n - 1] === k) OK = true;
            if (cells[last_k].color>2){
                if(n1>n) {
                    let i = n+1;
                    while(cells[H6F8[i]].color === 0&&i<n1) ++i;
                    if (i === n1) OK = true;

                }
                if(n1<n) {
                    let i = n-1;
                    while(cells[H6F8[i]].color === 0&&i>n1) --i;
                    if (i === n1) OK = true;
                }
            }
        }
        if (cells[last_k].C1A3 && cells[k].C1A3) {
            for (let i = 0; i < 3; ++i) {if (C1A3[i] === last_k)
                n = i;
               if( C1A3[i] === k) n1=i;
            }
            if (cells[last_k].color === 1 && C1A3[n + 1] === k || cells[last_k].color === 2 && C1A3[n - 1] === k) OK = true;
            if (cells[last_k].color>2){
                if(n1>n) {
                    let i = n+1;
                    while(cells[C1A3[i]].color === 0&&i<n1) ++i;
                    if (i === n1) OK = true;
                }
                if(n1<n) {
                    let i = n-1;
                    while(cells[C1A3[i]].color === 0&&i>n1) --i;
                    if (i === n1) OK = true;
                }
            }
        }


        if (cells[last_k].color === 2) {
            if (cells[k].color === 0 && OK) {
                first_click = true;
                turn *= -1;
                cells[last_k].color = 0;
                document.getElementById(String(last_k)).innerHTML = "";
                if (k === 3 || k === 2 || k === 1 || k === 0) {
                    cells[k].color = 4;
                    document.getElementById(String(k)).innerHTML = "<svg> <circle r=\"25\" cx=\"25\" cy=\"25\"  fill=\"blue\"/> </svg>";
                }
                else {
                    cells[k].color = 2;
                    document.getElementById(String(k)).innerHTML = "<svg> <circle r=\"25\" cx=\"25\" cy=\"25\"  fill=\"white\"/> </svg>";
                }

            }
            else alert('Your checker can not move to this cell!');
        }
        if (cells[last_k].color === 1) {
            if (cells[k].color === 0 && OK) {
                first_click = true;
                turn *= -1;
                cells[last_k].color = 0;
                document.getElementById(String(last_k)).innerHTML = "";
                if (k === 31 || k === 30 || k === 29 || k === 28) {
                    cells[k].color = 3;
                    document.getElementById(String(k)).innerHTML = "<svg> <circle r=\"25\" cx=\"25\" cy=\"25\"  fill=\"red\"/> </svg>"
                }
                else {
                    cells[k].color = 1;
                    document.getElementById(String(k)).innerHTML = "<svg> <circle r=\"25\" cx=\"25\" cy=\"25\" /> </svg>";
                }
            }
            else alert('Your checker can not move to this cell!');

        }
    if (cells[last_k].color === 3) {
        if (cells[k].color === 0 && OK) {
            first_click = true;
            turn *= -1;
            cells[last_k].color = 0;
            document.getElementById(String(last_k)).innerHTML = "";
                cells[k].color = 3;
                document.getElementById(String(k)).innerHTML = "<svg> <circle r=\"25\" cx=\"25\" cy=\"25\"  fill=\"red\"/> </svg>";


        }
        else alert('Your checker can not move to this cell!');
    }
    if (cells[last_k].color === 4) {
        if (cells[k].color === 0 && OK) {
            first_click = true;
            turn *= -1;
            cells[last_k].color = 0;
            document.getElementById(String(last_k)).innerHTML = "";
                cells[k].color = 4;
                document.getElementById(String(k)).innerHTML = "<svg> <circle r=\"25\" cx=\"25\" cy=\"25\"  fill=\"blue\"/> </svg>";

        }
        else alert('Your checker can not move to this cell!');
    }

    }




function restart(){
    turn = -1;
   first_click = true;
fight = 0;
white = 12;
black = 12;
for(let i = 0; i<12; ++i){
    cells[i].color=1;
    cells[i].attack =false;
    cells[i].dead = false;
    cells[i].queen = false;
    document.getElementById(String(i)).innerHTML = "<svg> <circle r=\"25\" cx=\"25\" cy=\"25\" /> </svg>";

}
for(let i = 12; i<20; ++i){
    cells[i].color=0;
    cells[i].attack =false;
    cells[i].dead = false;
    cells[i].queen = false;
    document.getElementById(String(i)).innerHTML = "";
}
for(let i = 20; i<32; ++i){
    cells[i].color=2;
    cells[i].attack =false;
    cells[i].dead = false;
    cells[i].queen = false;
    document.getElementById(String(i)).innerHTML = "<svg> <circle r=\"25\" cx=\"25\" cy=\"25\"  fill=\"white\"/> </svg>";
}

}

