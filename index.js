
const returnFirstTwoDrivers = function(x) {
    const drivers = x.slice(0,2)
    return drivers
}


const returnLastTwoDrivers = function(x) {
    const drivers = x.slice(2,4)
    return drivers
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

/*function createFareMultiplier(x){
    const FareMultiplier = x => x ** 2
    return FareMultiplier
}
*/

function createFareMultiplier(x){
    return function(fare) {
        return x * fare
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(x, fn) {
    return fn(x);
  }
  


/*  
  
    describe('selectDifferentDrivers(arrayOfDrivers, function)', function () {
      it('returns the first two drivers when passed returnFirstTwoDrivers() as the second argument', function () {
        expect(selectDifferentDrivers(drivers, returnFirstTwoDrivers)).to.eql(['Antonia', 'Nuru']);
      });
  
      it('returns the last two drivers when passed returnLastTwoDrivers() as the second argument', function () {
        expect(selectDifferentDrivers(drivers, returnLastTwoDrivers)).to.eql(['Amari', 'Mo']);
      });
    });
  });
*/