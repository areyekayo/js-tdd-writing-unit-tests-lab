// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
    it("indicates racecar is a palindrome", () => {
        const word = "racecar";
        const isRaceCarPalindrome = isPalindrome(word);

        expect(isRaceCarPalindrome).toBe(true);
    });

    it("indicates whether car is a palindrome", () => {
        const word = "car";
        const isCarPalindrome = isPalindrome(word);

        expect(isCarPalindrome).toBe(false);
    });

    it("returns false for an empty string", () => {
        const word = "";
        const isEmptyStringPalindrome = isPalindrome(word);
        expect(isEmptyStringPalindrome).toBe(false);
    });

    it("returns true for words that are combination of uppercase and lowercase letters", () => {
        const word = "rAcEcAr";
        const isRaceCarPalindrome = isPalindrome(word);
        expect(isRaceCarPalindrome).toBe(true)
    })
})