//////////Guest list/////////////////

const guestList = new WeakSet([{name: "Andrii"},{name: "Vladik"},{name: "Egor"},{name: "Mykyta"},{name: "Mykyta"}]);

let obj = {name: "Vlad"};
let obj1 = {name: "Vladislav"};
guestList.add(obj);

console.log(`If ${obj.name} is on the list ? ${guestList.has(obj)}`);
console.log(`If ${obj1.name} is on the list ? ${guestList.has(obj1)}`);

console.log(`Delete ${obj.name} from guest list`);
guestList.delete(obj);
console.log(`Size of guest list: ${guestList.size}`)

//////////Menu/////////////////

const dishes = new Map();

dishes.set('Caesar salad', 13);
dishes.set('Beef burger', 17);
dishes.set('Seafood Paella', 25);
dishes.set('BBQ pork', 15);
dishes.set('Filet Mignon', 40);

console.log("\nMenu: ");
dishes.forEach((price, dish) => {
    console.log(`${dish}: $${price}`);
});
console.log("\n\n");

///////////Bank vault//////////////

const bankVault = new WeakMap();

const client1 ={
    id: 1,
    name: "Egor",
    money: 20000,
};

const client2 ={
    id: 13,
    name: "Vlad",
    money: 10000
};

const client3 ={
    id: 124,
    name: "Andrii",
    money: 3499
};

const client4 ={
    id: 122,
    name: "Mykyta T",
    money: 699
};

const client5 ={
    id: 156,
    name: "Mykyta H",
    money: 899
};

const credential1 ={
    credential: 84399679937693
}
const credential2 ={
    credential: 28350982935095
}
const credential3 ={
    credential: 27290598209785
}
const credential4 ={
    credential: 29478529785299
}
const credential5 ={
    credential: 67539697396385
}

bankVault.set(credential1,client1);
bankVault.set(credential2,client2);
bankVault.set(credential3,client3);
bankVault.set(credential4,client4);
bankVault.set(credential5,client5);

console.log(`Client: 
id: ${bankVault.get(credential1).id} 
name: ${bankVault.get(credential1).name}
money: ${bankVault.get(credential1).money}$`);

console.log(`Client: 
id: ${bankVault.get(credential2).id} 
name: ${bankVault.get(credential2).name}
money: ${bankVault.get(credential2).money}$`);

console.log(`Client: 
id: ${bankVault.get(credential3).id} 
name: ${bankVault.get(credential3).name}
money: ${bankVault.get(credential3).money}$`);

console.log(`Client: 
id: ${bankVault.get(credential4).id} 
name: ${bankVault.get(credential4).name}
money: ${bankVault.get(credential4).money}$`);

console.log(`Client: 
id: ${bankVault.get(credential5).id} 
name: ${bankVault.get(credential5).name}
money: ${bankVault.get(credential5).money}$`);

//////////Coin Collection./////////

const coins = new Set();
coins.add("Lunar Eclipse Coin");
coins.add("Emerald Isle Sovereign");
coins.add("Phoenix Rising Penny");
coins.add("Starlight Shilling");
coins.add("Royal Crest Ducat");

console.log(`\nCoins: ${[...coins].join(", ")}`);
console.log(`Coins size: ${coins.size}`);