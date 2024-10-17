// Create a theatre app . 
// where the user can choose the seat selection and cancellation policy also.

class Theatre{
    private seats: boolean[];

    constructor(totalSeats: number){
        this.seats = new Array(totalSeats).fill(false);

    }

    bookSeat(seatNo: number) : void{
        if(this.seats[seatNo]){
            console.log(`Seat ${seatNo+1} is already booked`);

        }
        else{
            this.seats[seatNo] = true;
            console.log(`Seat ${seatNo+1} is booked successfully`);

        }
    }

    cancelSeat(seatNo: number): void{
        if(!this.seats[seatNo]){
            console.log(`Seat ${seatNo+1} is not booked`);

        }
        else{
            this.seats[seatNo]=false;
            console.log(`Seat ${seatNo+1} is cancelled`);

        }
    }

    displaySeats(): void{
        console.log("Seats Available : ");
        this.seats.forEach((seat,index) => {
            console.log(`Seat ${index + 1}: ${seat ? "Booked" : "Available"}`)
        });
    }
}

let t1 = new Theatre(10);
t1.displaySeats();
t1.bookSeat(0);
t1.cancelSeat(1);
t1.bookSeat(4);
t1.cancelSeat(4);
t1.bookSeat(0);
t1.displaySeats();