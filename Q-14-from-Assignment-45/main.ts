// saved some names an array:
let guestList: string[] = [
  "Bismah",
  "Tasmiyah",
  "Muntaha",
  "Hiba",
  "Umarr Farooq",
];

//now use forEach method:
guestList.forEach((guest) => {
  console.log(`"Dear ${guest}," I would be honored to have you join me for dinner, your presence would make the evening truly special.
`);
});

//now use for map method:
let invitetion: string[] = guestList.map(guest=>`Dear ${guest},I would be honored to have you join me for dinner, your presence would make the evening truly special.
`)
console.log(invitetion)