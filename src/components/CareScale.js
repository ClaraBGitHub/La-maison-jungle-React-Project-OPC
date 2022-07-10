import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

// Ici, il s'agit d'une manière de faire.
// Vous auriez aussi pu utiliser une fonction qui retourne l'élément souhaité, ou bien faire directement des conditions
const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? (	
        <img src={Sun} alt='sun-icon' />
    ) : (
        <img src={Water} alt='water-icon' />
    )

	return (
		<div
            onClick={() =>
                alert(
                    `Cette plante requiert ${quantityLabel[scaleValue]} ${
                        careType === 'light' ? 'de lumière' : "d'arrosage"
                    }`
                )
            }
            >
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale


// const {scaleValue, careType} = props
// On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
// const scaleValue = props.scaleValue et
// const careType = props.careType
// Cela nous permet de déclarer directement nos deux variables  scaleValue   et  careType  , et de les assigner aux valeurs passées en props.
// On peut même directement l'écrire dans les paramètres : function CareScale({scaleValue, careType})