import { generateUniqId, makeEveryFirstLetterCapital } from "../../utils/algoMethods.js";
import { EMAIL_REGEX, PASSWORD_REGEX, PHONE_REGEX } from "../../utils/regex.js";

class User {
    #id;
    #name;
    #password;
    #email;
    #createdAt;
    #isAdmin;
    #isBusiness;
    #address;
    #phone;

    constructor(user, users = []) {
        const { name, password, email, address, phone, isAdmin, isBusiness } = user;
        this.#id = generateUniqId(users, 1_000_000, 9_999_999);
        this.#name = this.setName(name);
        this.#password = this.checkPassword(password);
        this.#phone = this.checkPhone(phone);
        this.#email = this.checkUniqEmail(email, users);
        this.#address = this.checkAdress(address);
        this.#isBusiness = isBusiness || false;
        this.#createdAt = new Date();
        this.#isAdmin = isAdmin || false;

    }

    setName({ first, last }) {

        if (
            typeof first !== 'string' ||
            typeof last !== 'string' ||
            first.length < 2 ||
            last.length < 2
        )
            throw new Error('Enter valid name please');

        return {
            first: makeEveryFirstLetterCapital(first),
            last: makeEveryFirstLetterCapital(last),
        }
    }

    checkPassword(password) {
        const regex = PASSWORD_REGEX;
        const isExist = regex.test(password);
        if (!isExist)
            throw new Error(
                "The password must contain at least one uppercase letter in English. One lowercase letter in English. Four numbers and one of the following special characters !@#$%^&*-"
            );
        return password;

    }
    checkUniqEmail(email, users) {
        email.trim();
        const regex = EMAIL_REGEX;
        const isExist = email.match(regex);
        if (!isExist)
            throw new Error('enter valid email');

        const user = users.findIndex(user => user.email === email);
        if (user !== -1)
            throw new Error('this email address is already registed');

        return email;

    }
    checkPhone(phone) {
        const regex = PHONE_REGEX;
        const isExist = phone.match(regex);
        if (!isExist)
            throw new Error('Put valid number please');

        return phone;

    }
    checkAdress(address) {

        const { state, country, city, street, houseNumber, zip } = address;
        if (
            typeof country !== "string" ||
            country.length < 2 ||
            city.length < 2 ||
            street.length < 2 ||
            typeof houseNumber !== "number" ||
            houseNumber <= 0 ||
            typeof zip !== "number" ||
            zip <= 0
        )
            throw new Error("Please enter a valid address!");
        return { state: state || "", country, city, street, houseNumber, zip };

    }
    changeBizStatus(user) {
        if (user._id !== this.#id && !user.isAdmin)
            throw new Error('User must be the registered user or admin!')
        return this.#isBusiness = !this.#isBusiness;

    }
    update(user, users) {
        if (typeof user !== 'object') throw new Error('enter a valid user');
        if (user._id !== this.#id)
            throw new Error('Only the registered user can edit his info!');
        const { address, phone, name, email, isBusiness } = user;
        this.#address = this.checkAdress(address);
        this.#phone = this.checkPhone(phone);
        this.#name = this.setName(name);

        this.#email =
            email === this.#email ? this.#email : this.checkUniqEmail(email, users);

        this.#isBusiness = isBusiness ? isBusiness : this.#isBusiness;

        return this;


    }

    changePassword() {

    }

    get _id() {
        return this.#id
    }

    get name() {
        return this.#name;

    }

    get password() {
        return this.#password;

    }

    get email() {
        return this.#email;

    }

    get createdAt() {
        return this.#createdAt;

    }

    get isAdmin() {
        return this.#isAdmin;

    }

    get isBusiness() {
        return this.#isBusiness;

    }
    get phone() {
        return this.#phone;

    }
    get adress() {
        return this.#address;

    }

}

export default User;


const test = {
    email: "test@gmail.co.il",
    password: "Aa1234!",
    address: {
        state: "usa",
        country: "new-york",
        city: "new-york",
        street: "brodway",
        houseNumber: 5,
        zip: 123456,
    },
    phone: "050-0000000",
    name: {
        first: "david",
        last: "yakin",
    },
};
const array = [test];


try {

    const user = new User(test);
    user.changeBizStatus(user);
    user.update(
        {
            _id: user._id,
            name: { first: "shula", last: "tota" },
            phone: "054-9945699",
            address: {
                state: "",
                country: "israel",
                city: "tel-aviv",
                street: "shoham",
                houseNumber: 5,
                zip: 123456,
            },
            email: "walla@gmail.co.il",
        },
        array
    )

    console.log(user);

} catch (error) {
    console.log(error.message);

}