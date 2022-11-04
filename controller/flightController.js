const {Flights} = require('../model/Flight')
const {v4: uuid} = require("uuid");

// get all users
exports.getFlights = async (req, res) => {
    try {
        const flights = Flights;
        res.status(200).json({
            message : "All users",
            flights: flights,
        });
    } catch (err) {
        res.status(500).json( {message: err} )
    }
}

// get a single user
exports.getFlight = async(req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        res.status(200).json({
            message: "Flight found",
            flight,
        });
    } catch (err) {
        res.status(500).json( {message: err} )
    }
}



// create new users
exports.createFlights = async (req, res) => {
    try {
        const {Title, Time, Price, Date} = await req.body;
        const newFlights = {
            id: uuid(),
            Title,
            Time,
            Price,
            Date
        }


        Flights.push(newFlights);

        res.status(201).json({
            message: "Flight created",
            newFlights,
        });
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

// update user
exports.updateFlight = async (res, req) => {
    try{
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id)
        const {Title, Time, Price, Date} = await req.body;
        flight.Title = Title;
        flight.Time = Time;
        flight.Price = Price;
        flight.Date = Date;
        res.status(200).json({
            message: "User updated",
            flight,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// delete flight
exports.deleteFlights = async (req, res) => {
    try {
        let id = req.params.is;
        const flight = Flights.find((flight) => flight.id === id);
        Flights.splice(Flights.indexOf(flight), 1);
        res.status(200).json({
            message: "Flight deleted",
            flight,
        })
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}