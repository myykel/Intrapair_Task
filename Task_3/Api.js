const express = require('express');
const moment = require('moment');

const app = express();

// parse incoming JSON data
app.use(express.json());

app.post('/generate-pickup-dates', (req, res) => {
    const pickupDay = req.body.pickup_day;
    const recurrence = req.body.recurrence;

    // check if pickup day and recurrence are valid
    if (!pickupDay || !recurrence) {
        return res.status(400).json({ error: 'Pickup day and recurrence are required' });
    }

    // create an array of all pickup days in a month
    const allPickupDays = [];
    for (let i = 0; i < 31; i++) {
        const date = moment().startOf('month').add(i, 'days');
        if (date.format('dddd') === pickupDay) {
            allPickupDays.push(date);
        }
    }

    // generate next pickup dates
    const pickupDates = [];
    for (let i = 0; i < recurrence; i++) {
        const nextPickupDate = moment().startOf('day').add(i, 'weeks').day(pickupDay);
        pickupDates.push({
            date: nextPickupDate.toISOString(),
            readable_date: nextPickupDate.format('D MMMM YYYY')
        });
    }

    // return pickup dates
    res.json({ pickup_dates: pickupDates });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
