let companies = ["Bloomberg","Microsoft","Uber", "Google", "IBM","Netflix" ];
console.log(companies);

//Remove the first company
companies.shift();
console.log(companies);

// Remove Uber and add Ola in its place
companies.splice(1,1,"Ola");
console.log(companies);

//Add Amazon at the end
companies.push("Amazon");
console.log(companies);