
describe("Белые шашки", function() {
    it("в начале игры должны быть 12", function() {
        expect(white).toEqual(12);
    });
});

describe("Черные шашки", function() {
    it("в начале игры должны быть 12", function() {
        expect(black).toEqual(12);
    });
});
describe("Первый ход", function() {
    it("первыми должны ходить белые", function() {
        expect(turn).toEqual(-1);
    });
});
describe("Диагональ C1A3", function() {
    it("должно быть 3 клетки", function() {
        expect(C1A3.length).toEqual(3);
    });
});