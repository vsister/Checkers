
describe("Белые шашки", function() {
    it("в начале игры должно быть 12", function() {
        expect(white).toEqual(12);
    });
});

describe("Черные шашки", function() {
    it("в начале игры должно быть 12", function() {
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
describe("Диагональ H4D8", function() {
    it("должно быть 5 клеток", function() {
        expect(H4D8.length).toEqual(5);
    });
});
describe("Диагональ G1A7", function() {
    it("должно быть 7 клеток", function() {
        expect(G1A7.length).toEqual(7);
    });
});
describe("Диагональ H2B8", function() {
    it("должно быть 7 клеток", function() {
        expect(H2B8.length).toEqual(7);
    });
});
describe("Диагональ E1A5", function() {
    it("должно быть 5 клеток", function() {
        expect(E1A5.length).toEqual(5);
    });
});
describe("Диагональ H6F8", function() {
    it("должно быть 3 клетки", function() {
        expect(H6F8.length).toEqual(3);
    });
});

describe("Диагональ E1H4", function() {
    it("должно быть 4 клетки", function() {
        expect(E1H4.length).toEqual(4);
    });
});
describe("Диагональ A5D8", function() {
    it("должно быть 4 клетки", function() {
        expect(A5D8.length).toEqual(4);
    });
});
describe("Диагональ C1H6", function() {
    it("должно быть 6 клеток", function() {
        expect(C1H6.length).toEqual(6);
    });
});
describe("Диагональ A3F8", function() {
    it("должно быть 6 клеток", function() {
        expect(A3F8.length).toEqual(6);
    });
});
describe("Диагональ A7B8", function() {
    it("должно быть 2 клетки", function() {
        expect(A7B8.length).toEqual(2);
    });
});
describe("Диагональ G1H2", function() {
    it("должно быть 2 клетки", function() {
        expect(G1H2.length).toEqual(2);
    });
});




