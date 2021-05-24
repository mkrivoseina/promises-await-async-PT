import {accessSync, readFileSync, writeFileSync} from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const filePath = `${process.cwd()}/data.json`;
const askQuestion1 = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your first name: ', (firstName) => {
            if (firstName === '') {
                reject('Please fill the first name');
                return;
            }

            fulfil(firstName);
        })
    });
}

const askQuestion2 = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your last name: ', (lastName) => {
            if (lastName === '') {
                reject('Please fill last name');
                return;
            }

            fulfil(lastName);
        })
    });
}
const askQuestion3 = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your email: ', (email) => {
            if (email === '') {
                reject('Please fill your email');
                return;
            }

            fulfil(email);
        })
    });
}
const askQuestion4 = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your age: ', (age) => {
            if (age === '') {
                reject('Please fill your age');
                return;
            }
            if (age <= 0) {
                reject('Please fill a valid age')
                return
            }
            // if (age = NaN('')) {
            //     reject('The value entered is not a number')
            //     return
            // }

            fulfil(age);
        })
    });
}

const askQuestion5 = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your address: ', (address) => {
            if (address === '') {
                reject('Please fill your address');
                return;
            }

            fulfil(address);
        })
    });
}
try {
    accessSync(filePath);
    const jsonObject = readFileSync(filePath, 'utf8');
    const something = JSON.parse(jsonObject);

    const firstName = await askQuestion1();
    const lastName = await askQuestion2();
    const email = await askQuestion3();
    const age = await askQuestion4();
    const address = await askQuestion5();

    const updateData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age,
        address: address
    }
    writeFileSync(filePath, JSON.stringify(updateData));
    console.log(`The data is: first name: ${firstName}, last name: ${lastName}, email: ${email}, age: ${age} and address: ${address}`);
} catch(e) {
    console.log(`Whoops, something went wrong. The eroor is: ${e}`);
}
rl.close();

try {
    accessSync(filePath); //passing the file path
     let jsonObject = readFileSync(filePath, 'utf8');
     const decodeObject = JSON.parse(jsonObject);
     const name = decodeObject.name;
    
     rl.question('Please enter the new name: ', (answer) => {
         decodeObject.name = answer;
         writeFileSync(filePath, JSON.stringify(decodeObject));
         console.log(`The new name is: ${answer}`);
         rl.close();
     })
 
 } catch(err) {
     console.log('Something went wrong', err);
 }