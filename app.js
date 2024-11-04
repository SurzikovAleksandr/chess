let res = document.querySelector('#span')
let tb = document.querySelectorAll('#tb td')
let tb1 = document.querySelector('#tb')
let arr = []
let arr1 = []
let i = 0
let j = 0
let x1 = 0
let y1 = 0
let x = 0
let y = 0
let xarr = ['a','b','c','d','e','f','g','h']
let chhh1 = 0
let ochi = 'w'
let ochi2 = 'b'





let hClv = []
for(let elem of tb){
    arr1.push(elem)
    i++
if( i == 8){
    arr.push(arr1)
    arr1 = []
     i = 0
    }
 
}


let a = 0
let b = 0
let chC = 0
for (j = 0; j < 64; j++){
   
    if(chC == 0){
         arr[b][a].style = 
         'background-color: white;'
         chC = 1
         
    }else {
        arr[b][a].style = 'background-color: black;'
        chC = 0
    }
        if(a<7){
            a++
         } else {
            a=0
            b++
            if(chC==1){
                chC=0
            }else {chC=1}
         }
}


arr[6][0].style = 'background-color: yellow;'
arr[6][0].id = arr[6][0].id + 'P' + 'w'

arr[6][1].style = 'background-color: yellow;'
arr[6][1].id = arr[6][1].id + 'P' + 'w'

arr[6][2].style = 'background-color: yellow;'
arr[6][2].id = arr[6][2].id + 'P' + 'w'

arr[6][3].style = 'background-color: yellow;'
arr[6][3].id = arr[6][3].id + 'P' + 'w'

arr[6][4].style = 'background-color: yellow;'
arr[6][4].id = arr[6][4].id + 'P' + 'w'

arr[6][5].style = 'background-color: yellow;'
arr[6][5].id = arr[6][5].id + 'P' + 'w'

arr[6][6].style = 'background-color: yellow;'
arr[6][6].id = arr[6][6].id + 'P' + 'w'

arr[6][7].style = 'background-color: yellow;'
arr[6][7].id = arr[6][7].id + 'P' + 'w'

arr[7][2].style = 'background-color: blue;'
arr[7][2].id = arr[7][2].id + 'S' + 'w'

arr[7][5].style = 'background-color: blue;'
arr[7][5].id = arr[7][5].id + 'S' + 'w'

arr[7][4].style = 'background-color: purple;'
arr[7][4].id = arr[7][4].id + 'F' + 'w'

arr[7][3].style = 'background-color: brown;'
arr[7][3].id = arr[7][3].id + 'K' + 'w'

arr[7][1].style = 'background-color: gray;'
arr[7][1].id = arr[7][1].id + 'L' + 'w'

arr[7][6].style = 'background-color: gray;'
arr[7][6].id = arr[7][6].id + 'L' + 'w'

arr[7][7].style = 'background-color: green;'
arr[7][7].id = arr[7][7].id + 'B' + 'w'

arr[7][0].style = 'background-color: green;'
arr[7][0].id = arr[7][0].id + 'B' + 'w'



arr[1][0].style = 'background-color: yellow;'
arr[1][0].id = arr[1][0].id + 'P' + 'b'

arr[1][1].style = 'background-color: yellow;'
arr[1][1].id = arr[1][1].id + 'P' + 'b'

arr[1][2].style = 'background-color: yellow;'
arr[1][2].id = arr[1][2].id + 'P' + 'b'

arr[1][3].style = 'background-color: yellow;'
arr[1][3].id = arr[1][3].id + 'P' + 'b'

arr[1][4].style = 'background-color: yellow;'
arr[1][4].id = arr[1][4].id + 'P' + 'b'

arr[1][5].style = 'background-color: yellow;'
arr[1][5].id = arr[1][5].id + 'P' + 'b'

arr[1][6].style = 'background-color: yellow;'
arr[1][6].id = arr[1][6].id + 'P' + 'b'

arr[1][7].style = 'background-color: yellow;'
arr[1][7].id = arr[1][7].id + 'P' + 'b'

arr[0][2].style = 'background-color: blue;'
arr[0][2].id = arr[0][2].id + 'S' + 'b'

arr[0][5].style = 'background-color: blue;'
arr[0][5].id = arr[0][5].id + 'S' + 'b'


arr[0][4].style = 'background-color: purple;'
arr[0][4].id = arr[0][4].id + 'F' + 'b'

arr[0][3].style = 'background-color: brown;'
arr[0][3].id = arr[0][3].id + 'K' + 'b'

arr[0][1].style = 'background-color: gray;'
arr[0][1].id = arr[0][1].id + 'L' + 'b'

arr[0][6].style = 'background-color: gray;'
arr[0][6].id = arr[0][6].id + 'L' + 'b'

arr[0][7].style = 'background-color: green;'
arr[0][7].id = arr[0][7].id + 'B' + 'b'

arr[0][0].style = 'background-color: green;'
arr[0][0].id = arr[0][0].id + 'B' + 'b'

let hodys = {
    L:[['+2+1'],['+2-1'],['-2+1'],['-2-1'], ['+1-2'], ['+1+2'],['-1-2'], ['-1+2']],
    S:[['+1+1','+2+2','+3+3','+4+4','+5+5','+6+6','+7+7'],['-1-1','-2-2','-3-3','-4-4','-5-5','-6-6','-7-7'],['+1-1','+2-2','+3-3','+4-4','+5-5','+6-6','+7-7'],['-1+1','-2+2','-3+3','-4+4','-5+5','-6+6','-7+7']],
    K:[['+1+1'],['-1-1'],['+1-1'],['-1+1'],['+0-1'],['+0+1'],['+1+0'],['-1+0']],
    F:[['+1+0','+2+0','+3+0','+4+0','+5+0','+6+0','+7+0'],['-1+0','-2+0','-3+0','-4+0','-5+0','-6+0','-7+0'],['-0+1','-0+2','-0+3','-0+4','-0+5','-0+6','-0+7'],['-0-1','-0-2','-0-3','-0-4','-0-5','-0-6','-0-7'],['+1+1','+2+2','+3+3','+4+4','+5+5','+6+6','+7+7'],['-1-1','-2-2','-3-3','-4-4','-5-5','-6-6','-7-7'],['+1-1','+2-2','+3-3','+4-4','+5-5','+6-6','+7-7'],['-1+1','-2+2','-3+3','-4+4','-5+5','-6+6','-7+7']],
    B:[['+1+0','+2+0','+3+0','+4+0','+5+0','+6+0','+7+0'],['-1+0','-2+0','-3+0','-4+0','-5+0','-6+0','-7+0'],['-0+1','-0+2','-0+3','-0+4','-0+5','-0+6','-0+7'],['-0-1','-0-2','-0-3','-0-4','-0-5','-0-6','-0-7']],
    P:[['+1+0'],['+1-1'],['+1+1']['+2+0']]
}
let h1 = 0
let h2 = 0
let hC = 0









tb1.addEventListener('click', (e) => {
if(e.target.id[3] == 'w'){res.innerHTML = 'Фигура белых'}
if(e.target.id[3] == 'b'){res.innerHTML = 'Фигура чёрных'}



if(e.target.id[2] == 'L' & e.target.id[3] == ochi)
    {hC = hodys.L
     chhh1 = 'L'
    
    
    }
if(e.target.id[2] == 'B' & e.target.id[3] == ochi)
    {hC = hodys.B
     chhh1 = 'B'
 
     
    }
if(e.target.id[2] == 'S' & e.target.id[3] == ochi)
    {hC = hodys.S
     chhh1 = 'S'
    
     
    }
if(e.target.id[2] == 'F' & e.target.id[3] == ochi)
    {hC = hodys.F
     chhh1 = 'F'
    
   
    }
if(e.target.id[2] == 'K' & e.target.id[3] == ochi)
    {hC = hodys.K
     chhh1 = 'K'
     
    
    }
    if(e.target.id[2] == 'P' & e.target.id[3] == ochi)
        {hC = hodys.P
         chhh1 = 'P'
         
        
        }          


if(chhh1 != 0 & e.target.id[2] != undefined & e.target.id[3] == ochi) {
    if(e.target.id[3] == ochi){
    y1= e.target.id[1]*1
    x1 = (xarr.indexOf( e.target.id[0]) + 1 )*1
    hClv=[]
    if(e.target.id[2] != 'P'){
for(h1=0; h1 < hC.length; h1++){
    for(h2 = 0; h2 < hC[h1].length; h2++){
    if( ((hC[h1])[h2])[0] == '+') {y = (y1*1  + ((hC[h1])[h2])[1]*1)} 
    else if ( ((hC[h1])[h2])[0] == '-') {y = (y1*1  - ((hC[h1])[h2])[1]*1)}
    
    if( (((hC[h1])[h2])[2]) == '+') {x = (x1*1  + ((hC[h1])[h2])[3]*1)} 
   else if ( ((hC[h1])[h2])[2] == '-') {x = (x1*1  - ((hC[h1])[h2])[3]*1)}
 
   if(x>8 || x < 1 || y > 8 || y<1 ){ 
break
}else if(arr[8-y][x-1].id[3] == ochi2){
    hClv.push(arr[8-y][x-1].id)
    break
}else if(arr[8-y][x-1].id[3] == ochi){
break
}else if(arr[8-y][x-1].id[2] == undefined){

    hClv.push(arr[8-y][x-1].id)
  
    }}
}}else{
    
     if(x1>8 || x1 < 1 || y1 > 8 || y1<1 ){}else{
 y1*1
 x1*1
 if(e.target.id[3] == 'w'){if(y1 == 2) {hClv.push(arr[8-y1-2][x1-1].id)}
if(x1 != 1) {if(arr[8-y1*1-1][x1*1-2].id[3] == ochi2) {hClv.push(arr[8-y1*1-1][x1*1-2].id)}}
 

 if(x1 != 8){ if(arr[8-y1*1-1][x1*1].id[3] == ochi2 ) {hClv.push(arr[8-y1*1-1][x1*1].id)}}  

  
  if(arr[8-y1*1-1][x1*1-1].id[2] == undefined) {hClv.push(arr[8-y1*1-1][x1*1-1].id)}}



 if(e.target.id[3] == 'b'){if(y1 == 7) {hClv.push(arr[8-y1+2][x1-1].id)}

 if(x1 != 1){if(arr[8-y1*1+1][x1*1-2].id[3] == ochi2) {hClv.push(arr[8-y1*1+1][x1*1-2].id)}}
 

if(x1 != 8 ){ if(arr[8-y1*1+1][x1*1].id[3] == ochi2 ) {hClv.push(arr[8-y1*1+1][x1*1].id)}}


if(arr[8-y1*1+1][x1*1-1].id[2] == undefined ) {hClv.push(arr[8-y1*1+1][x1*1-1].id)}}

}}}}

if(hClv.includes(e.target.id))
    {
    if(y1 % 2 == 1) { 
        if(x1 % 2 == 1){
            
            arr[8-y1][x1-1].style = 'background-color: black;'
        }else arr[8-y1][x1-1].style = 'background-color: white;'
    }else {
        if(x1 % 2 == 1) {
            arr[8-y1][x1-1].style = 'background-color: white;'
        }else {
            arr[8-y1][x1-1].style = 'background-color: black;'  
        }}
    
    arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].id = arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].id[0] + arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].id[1] + chhh1 + ochi
    if(e.target.id[2]=='L'){arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style = 'background-color:gray;'}
    if(e.target.id[2]=='S'){arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style = 'background-color:blue;'}
    if(e.target.id[2]=='F'){arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style = 'background-color:purple;'}
    if(e.target.id[2]=='K'){arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style = 'background-color:brown;'}
    if(e.target.id[2]=='B'){arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style = 'background-color:green;'}
    if(e.target.id[2]=='P'){arr[8 - e.target.id[1]][xarr.indexOf(e.target.id[0])].style = 'background-color:yellow;'}
    
    arr[8-y1][x1-1].id = arr[8-y1][x1-1].id[0] + arr[8-y1][x1-1].id[1]
    chhh1 = 0
    hClv = []
    if(ochi == 'w'){ochi = 'b', ochi2 = 'w'}else {ochi = 'w', ochi2 = 'b'}
    
}

})