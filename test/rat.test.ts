import { describe, expect, test } from "vitest";
import {Rat} from "../src/rat.ts";

describe("Rat osztály", () => {
    test("Sikeres létrehozás", () => {
        expect(()=> {new Rat("Ödön",11,65)}).to.not.throw();
    });
    test("Üres név", () => {
        expect(() => {new Rat("",11,70)}).to.throw();
    });
    test("kevés atk", () => {
        expect(() => {new Rat("Atis",9,70)}).to.throw();
    });
    test("sok atk", () => {
        expect(() => {new Rat("Rózsi",50,61)}).to.throw();
    })
    test("kevés hp", () => {
        expect(() => {new Rat("Atis",15,49)}).to.throw();
    });
    test("sok hp", () => {
        expect(() => {new Rat("Rózsi",50,120)}).to.throw();
    });
});