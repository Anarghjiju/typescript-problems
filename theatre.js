// Create a theatre app . 
// where the user can choose the seat selection and cancellation policy also.
var Theatre = /** @class */ (function () {
    function Theatre(totalSeats) {
        this.seats = new Array(totalSeats).fill(false);
    }
    Theatre.prototype.bookSeat = function (seatNo) {
        if (this.seats[seatNo]) {
            console.log("Seat ".concat(seatNo + 1, " is already booked"));
        }
        else {
            this.seats[seatNo] = true;
            console.log("Seat ".concat(seatNo + 1, " is booked successfully"));
        }
    };
    Theatre.prototype.cancelSeat = function (seatNo) {
        if (!this.seats[seatNo]) {
            console.log("Seat ".concat(seatNo + 1, " is not booked"));
        }
        else {
            this.seats[seatNo] = false;
            console.log("Seat ".concat(seatNo + 1, " is cancelled"));
        }
    };
    Theatre.prototype.displaySeats = function () {
        console.log("Seats Available : ");
        this.seats.forEach(function (seat, index) {
            console.log("Seat ".concat(index + 1, ": ").concat(seat ? "Booked" : "Available"));
        });
    };
    return Theatre;
}());
var t1 = new Theatre(10);
t1.displaySeats();
t1.bookSeat(0);
t1.cancelSeat(1);
t1.bookSeat(4);
t1.cancelSeat(4);
t1.bookSeat(0);
t1.displaySeats();
