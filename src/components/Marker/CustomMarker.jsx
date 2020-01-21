import React from 'react';
import {Marker} from 'react-google-maps';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';

const CustomMarker = (props) => {
	let iconBase1 = 'http://maps.gstatic.com/mapfiles/cb/';
	let iconBase2 = 'https://maps.google.com/mapfiles/kml/shapes/';
	// 'http://maps.google.com/mapfiles/kml/pal3/';

	let icons = {
		point: {
			icon: iconBase1 + 'man_arrow-0.png',
		},
		station: {
			icon: iconBase2 + 'info-i_maps.png',
			// 'icon53.png',
		},
	};

	let features = [
		{
			name: 'Unvivalle',
			position: {lat: 3.377976931, lng: -76.5337},
			type: 'station',
			message:
				'Estación ubicada en inmediaciones del campus Meléndez de la Universidad del Valle, Cali',
		},
		{
			name: 'Base Aérea',
			position: {lat: 3.457317346, lng: -76.5065},
			type: 'station',
			message: 'Estación ubicada en la base aérea Marco Fidel Suárez',
		},
		{
			name: 'La Flora',
			position: {lat: 3.488218184, lng: -76.5181},
			type: 'station',
			message: 'Estación ubicada en el centro comercial "éxito de La Flora"',
		},
		{
			name: 'cañaveralejo',
			position: {lat: 3.415462585, lng: -76.5496},
			type: 'station',
			message:
				'Estación ubicada en la estación de MÍO Cable "Unidad Deportiva", sobre la Calle 5ta',
		},
		{
			name: 'Compartir',
			position: {lat: 3.428260226, lng: -76.4666},
			type: 'station',
			message: '',
		},
		{
			name: 'Navarro',
			position: {lat: 3.417182642, lng: -76.495},
			type: 'station',
			message:
				'Estación de monitoreo transitoria ubicada al oriente de la ciudad',
		},
		{
			name: 'Pance',
			position: {lat: 3.304517426, lng: -76.5313},
			type: 'station',
			message: '',
		},
		{
			name: 'era',
			position: {lat: 3.447593199, lng: -76.5191},
			type: 'station',
			message: '',
		},
		{
			name: 'La Ermita',
			position: {lat: 3.45527778, lng: -76.53111111},
			type: 'station',
			message: '',
		},
		{
			name: 'Palmetto',
			position: {lat: 3.41281, lng: -76.54111},
			type: 'point',
			url: '/fotos/palmetto.jpg',
			message:
				'Punto ubicado en importante sector de la ciudad, en inmediaciones del Centro Comercial Palmetto Plaza',
		},
		{
			name: 'Cañaveralejo',
			position: {lat: 3.41445, lng: -76.54802},
			type: 'point',
			url: '',
			message: '',
		},
		{
			name: 'La Nave',
			position: {lat: 3.42433, lng: -76.5525},
			type: 'point',
			url: '',
			message: '',
		},
		{
			name: 'Éxito',
			position: {lat: 3.487, lng: -76.517},
			type: 'point',
			url: '',
			message:
				'Ubicado cerca al centro comercial "Éxito de la Flora", al norte de Cali',
		},
		{
			name: 'Sameco',
			position: {lat: 3.49, lng: -76.51},
			type: 'point',
			url: '',
			message:
				'Ubicado en zona de salida de la ciudad, con alto movimiento de vehículos intermunicipales con destino a Yumbo y municipios aledaños',
		},
		{
			name: 'Terminalito',
			position: {lat: 3.486, lng: -76.495},
			type: 'point',
			url: '/fotos/terminalito.jpg',
			message:
				'Punto de importante afluencia de vehículos intermunicipales con destino a Palmira, así como el Aéropuerto Internacional Alfonso Bonilla Aragón.',
		},
		{
			name: 'Chipichape',
			position: {lat: 3.473, lng: -76.528},
			type: 'point',
			url: '',
			message: '',
		},
		{
			name: 'Tertulia',
			position: {lat: 3.451, lng: -76.545},
			type: 'point',
			url: '/fotos/tertulia.jpg',
			message:
				'Punto ubicado en el museo La Tertulia, en zona de alto movimiento vehicular.',
		},
		{
			name: 'Comfenalco',
			position: {lat: 3.45, lng: -76.537},
			type: 'point',
			url: '/fotos/comfenalco.jpg',
			message: '',
		},
		{
			name: 'San Pascual',
			position: {lat: 3.443, lng: -76.523},
			type: 'point',
			url: '/fotos/san_pascual.jpg',
			message:
				'Ubicado en el centro de la ciudad, en vía principal con alta presencia de estaciones del sistema de transporte masivo (MIO)',
		},
		{
			name: 'Univalle',
			position: {lat: 3.377976931, lng: -76.5337},
			type: 'point',
			url: '/fotos/univalle.jpg',
			message:
				'Punto ubicado dentro de la Universidad del Valle, campus Meléndez. En este punto, además de realizarse monitoreos, también se utilizó como punto de referencia para la correlación entre la estación del SVCASC y los dispositivos utilizados para la toma de datos.',
		},
		{
			name: 'Obrero',
			position: {lat: 3.448, lng: -76.519},
			type: 'point',
			url: '',
			message: '',
		},
		{
			name: 'La Ermita',
			position: {lat: 3.455, lng: -76.531},
			type: 'point',
			url: '',
			message: '',
		},
	];

	return (
		<>
			{features.map((mark, i) => (
				// Marcador
				<Marker
					key={i}
					position={mark.position}
					onClick={props.onClick(i, mark.type)}
					icon={icons[mark.type].icon}
				>
					{props.open[i] && (
						// Popup
						<InfoBox
							defaultPosition={{
								lat: mark.position.lat,
								lng: mark.position.lng,
							}}
							onCloseClick={props.onClick(i)}
							options={{
								closeBoxURL: `data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A`,
								enableEventPropagation: true,
							}}
						>
							<div
								style={{
									paddingRight: '0px',
									paddingBottom: '0px',
									maxWidth: '654px',
									maxHeight: '600px',
									backgroundColor: 'white',
									boxSizing: 'borderBox',
									overflow: 'hidden',
									borderRadius: '8px',
									top: 0,
									left: 0,
									padding: '12px',
									boxShadow: '0 2px 7px 1px rgba(0,0,0,0.3)',
								}}
							>
								<h1
									id='firstHeading'
									className='firstHeading'
									style={{fontSize: '25px'}}
								>
									{mark.type === 'station'
										? `Estación ${mark.name}`
										: `Punto de monitoreo ${mark.name}`}
								</h1>
								<hr />
								<div id='bodyContent'>
									<p>{mark.message}</p>
									{mark.url !== null ? (
										<div
											style={{
												width: '300px',
												height: '300px',
												margin: '20px',
												boxSizing: 'borderBox',
											}}
										>
											<img src={mark.url} alt='' style={{width: 300, height: 300, margin: '5px'}} />
										</div>
									) : null}
									{/* <button id='details' onClick={() => props.onToggleDetails()}>
										<a href='#details'>Ver detalles</a>
									</button> */}
								</div>
							</div>
						</InfoBox>
					)}
				</Marker>
			))}
		</>
	);
};

export default CustomMarker;
