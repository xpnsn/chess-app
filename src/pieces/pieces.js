const brook = `<div class="pieces black" piece="rook"> <img src="./black/rook.svg"> </img></div>`;
const bbishop = `<div class="pieces black" piece="bishop"> <img src="./black/bishop.svg"> </img></div>`;
const bknight = `<div class="pieces black" piece="knight"> <img src="./black/knight.svg"> </img></div>`;
const bqueen = `<div class="pieces black" piece="queen"> <img src="./black/queen.svg"> </img></div>`;
const bking = `<div class="pieces black" piece="king"> <img src="./black/king.svg"> </img></div>`;
const bpawn = `<div class="pieces black" piece="pawn"> <img src="./black/pawn.svg"> </img></div>`;
const wrook = `<div class="pieces white" piece="rook"> <img src="./white/rook.svg"> </img></div>`;
const wbishop = `<div class="pieces white" piece="bishop"> <img src="./white/bishop.svg"> </img></div>`;
const wknight = `<div class="pieces white" piece="knight"> <img src="./white/knight.svg"> </img></div>`;
const wqueen = `<div class="pieces white" piece="queen"> <img src="./white/queen.svg"> </img></div>`;
const wking = `<div class="pieces white" piece="king"> <img src="./white/king.svg"> </img></div>`;
const wpawn = `<div class="pieces white" piece="pawn"> <img src="./white/pawn.svg"> </img></div>`;

export const initialBoard = [
    brook, bknight, bbishop, bqueen, bking, bbishop, bknight, brook,
    bpawn, bpawn, bpawn, bpawn, bpawn, bpawn, bpawn, bpawn, 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    wpawn, wpawn, wpawn, wpawn, wpawn, wpawn, wpawn, wpawn, 
    wrook, wknight, wbishop, wqueen, wking, wbishop, wknight, wrook
];

