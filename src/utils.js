class Utils {
    static convertFirstLettertoLowercase(string) {
        return string.charAt(0).toLowerCase() + string.slice(1);
    }
    static removeSpaces(string) {
        const str = string.split(' ');
        let path = '';
        for (let i = 0; i < str.length; i++) {
            path += str[i].toLowerCase();
        }
        return path;
    }
}

export default Utils;
