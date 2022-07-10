import monstera from '../assets/monstera.jpeg';
import lyrata from '../assets/lyrata.jpeg';
import pothos from '../assets/pothos.jpeg'
import succulent from '../assets/succulent.jpeg'
import basil from '../assets/basil.jpeg'
import mint from '../assets/mint.jpeg'
import calathea from '../assets/calathea.jpeg'
import cactus from '../assets/cactus.jpeg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
        isBestSale: true,
        light: 2,
		water: 3,
        cover: monstera,
        price : 15
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
        isBestSale: false,
        light: 3,
		water: 1,
		cover: lyrata,
        price : 16
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
        isBestSale: false,
        isSpecialOffer: true,
        light: 1,
		water: 2,
        cover: pothos,
        price : 16
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
        isBestSale: false,
        light: 3,
		water: 1,
        cover: calathea,
        price : 15
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
        isBestSale: false,
        light: 3,
		water: 1,
        cover: basil,
        price : 8
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
        isBestSale: false,
        light: 2,
		water: 2,
        cover: cactus,
        price : 15

	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
        isBestSale: true,
        isSpecialOffer: true,
        light: 2,
		water: 3,
        cover: basil,
        price : 8
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
        isBestSale: false,
        isSpecialOffer: true,
        light: 2,
		water: 1,
        cover: mint,
        price : 9
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
        isBestSale: false,
        light: 2,
		water: 1,
        cover: succulent,
        price : 20
	}
]