const express = require('express');
const app = express();
app.listen(4000, () => console.log('listening at 4000'));

app.use(express.static('public'));

const data = [{
    id: 0,
    color: 'Blue',
    traffic:300,
    rarity:'common'
},
{
    id: 1,
    color: 'Red',
    traffic:400,
    rarity:'common'
},
{
    id: 2,
    color: 'Pink',
    traffic:800,
    rarity:'uncommon'
},
{
    id: 3,
    color: 'Neon',
    traffic:900,
    rarity:'mythical'
},
{
    id: 4,
    color: 'Black',
    traffic:200,
    rarity:'common'
},
{
    id: 5,
    color: 'Gray',
    traffic:300,
    rarity:'common'
},
{
    id: 6,
    color: 'Yellow',
    traffic:420,
    rarity:'common'
},
{
    id: 7,
    color: 'Sky',
    traffic:760,
    rarity:'uncommon'
},
{
    id: 8,
    color: 'Mint',
    traffic:120,
    length:270
},
{
    id: 9,
    color: 'Orange',
    traffic:550,
    rarity:'mythical'
},
{
    id: 10,
    color: 'Purple',
    traffic:300,
    rarity:'legendary'
},
{
    id: 11,
    color: 'Mummy Brown',
    traffic:700,
    rarity:'uncommon'
},
{
    id: 12,
    color: 'Synthetic Ultramarine',
    traffic:850,
    rarity:'legendary'
},
{
    id: 13,
    color: 'Lapis Lazuli',
    traffic:300,
    rarity:'rare'
},
{
    id: 14,
    color: 'Dragon\'s Blood',
    traffic:900,
    rarity:'very rare'
},
{
    id: 15,
    color: 'Cochineal',
    traffic:60,
    rarity:'uncommon'
},
{
    id: 16,
    color: 'Cadmium Yellow',
    traffic:10,
    rarity:'uncommon'
},
{
    id: 17,
    color: 'Emerald Green',
    traffic:750,
    rarity:'very rare'
},
{
    id: 18,
    color: 'Australien',
    traffic:680,
    rarity:'common'
},]



app.get('/array', function (req, res) {
    res.json(data);
})