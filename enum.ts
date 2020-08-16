enum Membership {
    Simple,
    Standart,
    Premium
}

const memberShip = Membership.Standart;
const memberShipReverse = Membership[2];

console.log(memberShip);//1
console.log(memberShipReverse);//Premium

enum SocialMedia {
    VK = 'VK',
    INSTA = 'INSTA'
}

const social = SocialMedia.VK;
console.log(social)
