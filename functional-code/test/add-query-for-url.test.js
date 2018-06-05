const expect = require('chai').expect;
const addQueryForUrl = require('../src/add-query-for-url');

// const add = (a, b) => a + b; 

// describe('expect', () => {
//     it('1 + 2 = 3', () => {
//         expect(add(1, 2)).to.be.equal(3);
//     });
// });

describe('expect get right url', () => {
    it('add no query', () => {
        expect(addQueryForUrl('http://www.baidu.com'))
            .to
            .be
            .equal('http://www.baidu.com');
    });

    it('simple add query', () => {
        expect(addQueryForUrl('http://www.baidu.com', 'id', 123))
            .to
            .be
            .equal('http://www.baidu.com?id=123');
    });

    it('add query for url with query', () => {
        expect(addQueryForUrl('http://www.baidu.com?name=kong', 'id', 123))
            .to
            .be
            .equal('http://www.baidu.com?name=kong&id=123');
    });

    it('add query for url with query and hash', () => {
        expect(addQueryForUrl('http://www.baidu.com?name=kong#sohu', 'id', 123))
            .to
            .be
            .equal('http://www.baidu.com?name=kong&id=123#sohu');
    });

    it('upadate query', () => {
        expect(addQueryForUrl('http://www.baidu.com?name=kong', 'name', 'zhang'))
            .to
            .be
            .equal('http://www.baidu.com?name=zhang');
    });
});

describe('throw errors', () => {
    it('not a right url', () => {
        expect(() => addQueryForUrl('baidu.com')).to.throw('not a right url');
    });
})


