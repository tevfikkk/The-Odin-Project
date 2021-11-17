print = console.log

let user = new Object();

user = {

    name: 'Tevfik',
    age: 22,
    promtName: () => print(user.name),
    "likes monsters": true // multiword property names must be quoted
    
};

user.isAdmin = true;

user.promtName()
print(user.isAdmin);
print(user["likes monsters"]);
delete user["likes monsters"];
print(user["likes monsters"]);

print( user['Tevfik'] );


