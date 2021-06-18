//Object create 
const Inventary_Data = {

    mask:900,
    sanitizer:500,
    paracetamol:900
}

//Object create 

const Price_List = {

    mask:20,
    sanitizer:100,
    paracetamol:50
}

const Maskquntity = 3;

//Properties call of object  methode one
const MaskPrice = Price_List["mask"] * Maskquntity;

//Properties call of object  methode two
// const MaskPrice = Price_List.mask * TotalMask;

console.log(MaskPrice);


const sanitizer_Price = Price_List.sanitizer;
const Paracetamol_Price = Price_List.paracetamol;


const Total_price = sanitizer_Price + Paracetamol_Price;

console.log(Total_price);




